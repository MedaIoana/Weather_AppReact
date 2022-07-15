import React from 'react'
import { FaCloudRain, FaCloud, FaWind, FaWater } from 'react-icons/fa'

const Detail = ({day}) => {
  function details(day){
    let sumP = 0
    let sumS = 0
    let sumC = 0
    let sumH = 0
    day.weather.forEach(element => {
      sumP = sumP + element.precipitation
      sumS = sumS + element.wind_speed
      sumC = sumC + element.cloud_cover
      sumH = sumH + element.relative_humidity
    });
    let len=day.weather.length
    let avrgPrecip = sumP/len
    avrgPrecip = avrgPrecip.toFixed(1)
    let avrgSpeed = sumS/len
    avrgSpeed = avrgSpeed.toFixed(1)
    let avrgCovr = sumC/len
    avrgCovr = avrgCovr.toFixed(1)
    let avrgHum = sumH/len
    avrgHum = avrgHum.toFixed(1)
    return {avrgPrecip, avrgSpeed, avrgCovr, avrgHum}
  }
  return (
    <div className='details'>
      <FaCloudRain className='icon'/>
      <span className='detail'>Precipitaion: {details(day).avrgPrecip}mm/h</span>
      <FaWind className='icon'/>
      <span className='detail'>Average wind speed: {details(day).avrgSpeed}km/h</span>
      <FaCloud className='icon'/>
      <span className='detail'>Average cloud cover: {details(day).avrgCovr}%</span>
      <FaWater className='icon'/>
      <span className='detail'>Humidity: {details(day).avrgHum}%</span>
    </div>
  )
}

export default Detail
