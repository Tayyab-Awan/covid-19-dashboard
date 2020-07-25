import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext/GlobalState';
import { BarChart } from './Graphs/BarChart';
import { HorizontalBarChart } from './Graphs/HorizontalBarChart';
import { DoughnutChart } from './Graphs/DoughnutChart';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1500,
      margin: '0 auto',
    },
  }));

export const Graphs = () => {
    const classes = useStyles();
    const { globalStats, countriesStats, selecedCountryIndex } = useContext(GlobalContext);
    let casesData = [];
    if(selecedCountryIndex === 300){
        casesData.push(globalStats.confirmed);
        casesData.push(globalStats.recovered);
        casesData.push(globalStats.deaths);
        casesData.push(globalStats.active);
    }
    else{
        const active = countriesStats[selecedCountryIndex].latest_data.confirmed - 
                        (countriesStats[selecedCountryIndex].latest_data.recovered + 
                        countriesStats[selecedCountryIndex].latest_data.deaths);
        
        casesData.push(countriesStats[selecedCountryIndex].latest_data.confirmed);
        casesData.push(countriesStats[selecedCountryIndex].latest_data.recovered);
        casesData.push(countriesStats[selecedCountryIndex].latest_data.deaths);
        casesData.push(active);
    }

    const findIndicesOfMax = (inp, count) => {
        let outp = [];
        for (var i = 0; i < inp.length; i++) {
            outp.push(i);  // add index to output array
            if (outp.length > count) {
                outp.sort(function(a, b) { return inp[b] - inp[a]; });  // descending sort the output array
                outp.pop(); // remove the last index (index of smallest element in output array)
            }
        }
        return outp;
    }
    const getMaxCasesCountries = () => {
        const countriesConfirmedCases = countriesStats.map(country => country.latest_data.confirmed);
        const indexes = findIndicesOfMax(countriesConfirmedCases, 10);
        const topCountries = indexes.map(index => {
            return{
                name: countriesStats[index].name,
                cases: countriesStats[index].latest_data.confirmed
            }
        });
        return topCountries;
    }

    return (
       <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <HorizontalBarChart countryData={getMaxCasesCountries()} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <BarChart casesData={casesData} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DoughnutChart casesData={casesData} />
                </Grid>
            </Grid>
       </div>
    )
}
