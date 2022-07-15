import React from 'react'
import { FaCloudRain, FaCloud, FaCloudSun, FaCloudMoon, FaCloudShowersHeavy, FaRegSnowflake,  } from 'react-icons/fa'

const More = ({h, temp, icon}) => {

    const pickIcon = function(text){
        let sunMoon = <FaCloudSun/>
        if(h==='23:00') sunMoon = <FaCloudMoon/>
        if(text.includes("partly-cloudy")) return sunMoon
        else if(text.includes("cloudy")) return <FaCloud/>
        else if(text.includes("sleet")) return <FaCloudShowersHeavy/>
        else if(text.includes("rain")) return <FaCloudRain/>
        else if(text.includes("snow")) return <FaRegSnowflake/>
        else if(text.includes("clear")) return sunMoon
    } 

  return (
    <div className='hour'>
      <p className='h'>{h}</p> 
      <div className='mini-icon'>{pickIcon(icon)}</div> 
      <p className='celsius'>{temp}°C</p> 
    </div>
  )
}

export default More
