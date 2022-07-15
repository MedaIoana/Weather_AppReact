import React from 'react'

const Exact = ({h, temp, precip, covr, hum}) => {
    return (
        <div className='hour'>
            <p className='h'>{h}</p> 
            <p className='exact'>Precipitation: {precip}</p>
            <p className='exact'>Cloudy: {covr}%</p>
            <p className='exact'>Humidity: {hum}%</p>
            <p className='celsius'>{temp}°C</p> 
        </div>
    )
}

export default Exact
