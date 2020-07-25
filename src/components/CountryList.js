import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './GlobalContext/GlobalState';
import { fetchCountriesData } from './ApiCalls/Data';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';


const useSelectorStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginBottom: '20px',
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export const CountryList = () => {
    const classes = useSelectorStyles();
    const [selectedCountry, setSelectedCountry] = useState(300);

    // Global State
    const { setCountriesStats, countriesStats, setSelecedCountryIndex } = useContext(GlobalContext);

    useEffect(() => {
      let mounted = true;

      (async () => {
        if(mounted){
          const data = await fetchCountriesData('https://corona-api.com/countries');
          setCountriesStats(data);
        }
      })
      (); // calling above anonymous method

      return () => {
        mounted = false;
      }
    }, [])

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedCountry(value);
      }
    
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedCountry}
                onChange={handleChange}
                label="Country"
                >
                <MenuItem value={300} onClick={() => setSelecedCountryIndex(300)}>
                    <em>World Wide</em>
                </MenuItem>
                {countriesStats.map((country, i) => {
                  return(
                    <MenuItem value={country.name} key={i} onClick={() => setSelecedCountryIndex(i)}>
                      {country.name}
                    </MenuItem>
                  );
                })}
                </Select>
            </FormControl>
        </div>
    )
}
