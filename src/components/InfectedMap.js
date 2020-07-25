import React from 'react';
import './style/InfectedMap.css';

export const InfectedMap = () => {
    return (
        <div className="map-container">
            <h2>Covid-19 Affected Countries</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/img/coronavirus-map.png`} alt="map"/>
        </div>
    )
}
