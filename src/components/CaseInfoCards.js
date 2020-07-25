import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from './GlobalContext/GlobalState';
import { fetchGlobalStats } from './ApiCalls/Data';
import './style/CaseInfoCards.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

// Style for Case Statistics Cards under header
const useCardStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    margin: '20px auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px',
    fontFamily: "Haas Grot Text R Web, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '24px',
    textTransform: 'capitalize',
  },

}));

export default function CaseInfoCards() {
  
  const classes = useCardStyles();
  const [isLoading, setLoading] = useState(false);
  // Global State
  const { setGlobalStats, globalStats, selecedCountryIndex, countriesStats } = useContext(GlobalContext);

  useEffect(() => {
    let mounted = true;

    (async () => {
      setLoading(true);
      if(mounted){
        const data = await fetchGlobalStats('https://corona-api.com/timeline');
        setLoading(false);
        setGlobalStats(data);
      }
    })
    (); // calling above anonymous method

    return () => {
      mounted = false;
    }
  }, [])

  const showCountryData = (index) => {
    if(index === 300){
      return globalStats;
    }
    else{
      let data = countriesStats[index].latest_data;
      data['active'] = data['confirmed'] - (data['recovered'] + data['deaths'])
      return data;
    }
  }

  const requiredGlobalData = ['confirmed', 'recovered', 'deaths', 'active'];
  const cardsData = showCountryData(selecedCountryIndex);
  return (
    <div className="wrapper">
        <div className={classes.root}>
          <Grid container spacing={3}>
            {
              requiredGlobalData.map((text, index) => {
              return(
                <Grid item xs={12} sm={3} key={index}>
                <Paper elevation={3} className={classes.paper}>
                  <p>{text}</p>
                  <h2>{cardsData[text]}</h2>
                </Paper>
              </Grid>
              );
            })}
          </Grid>
        </div>
    </div>
  );
}
