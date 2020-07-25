import React from 'react';
import { Bar } from 'react-chartjs-2';

export const BarChart = ({casesData}) => {
    const data = {
        labels: ['Confirmed', 'Recovered', 'Deaths', 'Active'],
        datasets: [{
            label: 'Covid-19 Cases',
            data : casesData,
            backgroundColor: [
                'rgba(54, 162, 235,0.8)',
                'rgba(55, 199, 50,0.8)',
                'rgba(237, 21, 50,0.8)',
                'rgba(94, 198, 224,0.8)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
                'rgba(54, 162, 235,1)',
                'rgba(55, 199, 50,1)',
                'rgba(237, 21, 50,1)',
                'rgba(94, 198, 224,1)',
            ],
        }]
    }
    return (
        <div>
            <Bar 
                data={data}
            />
        </div>
    )
}
