import React from 'react';
import './style/TopCountries.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column' ,
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(30),
          height: theme.spacing(16),
        },
    },
    paper: {
        borderRadius: '10px',
        fontFamily: "Haas Grot Text R Web, Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '24px',
        padding: '10px',
      },
}))

export const TopCountries = () => {
    const classes = useStyles();
    return (
        <div className="top-countries-container">
            <h2>Top Countries</h2>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.paper} >
                    <h2>USA</h2>
                    <div className="top-country-cases">
                        <p>Affected-1.8M</p>
                        <p>Recovered-71K</p>
                    </div>
                </Paper>
                <Paper elevation={3} className={classes.paper} >
                    <h2>Brazil</h2>
                    <div className="top-country-cases">
                        <p>Affected-1.8M</p>
                        <p>Recovered-71K</p>
                    </div>
                    
                </Paper>
                <Paper elevation={3} className={classes.paper} >
                    <h2>India</h2>
                    <div className="top-country-cases">
                        <p>Affected-1.8M</p>
                        <p>Recovered-71K</p>
                    </div>
                </Paper>
            </div>
        </div>
    )
}
