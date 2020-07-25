import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

export const HorizontalBarChart = ({countryData}) => {
    const data = {
        labels: countryData.map(data => data.name),
        datasets: [
            {
                label: 'Covid-19 Cases Globally',
                backgroundColor: [
                    'rgba(54, 162, 235,0.8)',
                    'rgba(55, 199, 50,0.8)',
                    'rgba(237, 21, 50,0.8)',
                    'rgba(94, 198, 224,0.8)',
                    'rgba(145, 63, 57,0.8)',
                    'rgba(196, 164, 57,0.8)',
                    'rgba(66, 54, 13,0.8)',
                    'rgba(34, 214, 245,0.8)',
                    'rgba(27, 101, 158,0.8)',
                    'rgba(33, 22, 64,0.8)',
                ],
                borderColor: 'rgba(237, 21, 50,0.8)',
                borderWidth: 1,
                hoverBackgroundColor: [
                    'rgba(54, 162, 235,1)',
                    'rgba(55, 199, 50,1)',
                    'rgba(237, 21, 50,1)',
                    'rgba(94, 198, 224,1)',
                    'rgba(145, 63, 57,1)',
                    'rgba(196, 164, 57,1)',
                    'rgba(66, 54, 13,1)',
                    'rgba(34, 214, 245,0.8)',
                    'rgba(27, 101, 158,0.8)',
                    'rgba(33, 22, 64,1)',
                ],
                hoverBorderColor: 'rgba(237, 21, 50,1)',
                data: countryData.map(data => data.cases),
            },
        ],
    };
    return (
        <div>
            <HorizontalBar data={data}  />
        </div>
    )
}
