import React from 'react';
import {Doughnut} from 'react-chartjs-2';


export const DoughnutChart = ({casesData}) => {

    const data = {
        labels: ['Confirmed', 'Recovered', 'Deaths', 'Active'],
        datasets: [
            {
                data: casesData,
                backgroundColor: ['#36A2EB', '#37c732', '#ed1532', '#5ec6e0'],
                hoverBackgroundColor: ['#36A2EB', '#37c732', '#ed1532', '#5ec6e0'],
            },
        ],
    };

    return (
         <div>
            <Doughnut data={data} />
        </div>
    )
}
