import React from 'react'
import Location from './Location'
import Title from './Title'
import Detail from './Detail'
import './Details.scss'
import { FaSun, FaCloudSun } from 'react-icons/fa'


const Details = ({day}) => {

  let checkClear = function(text){
    if(text.includes("clear")) return 1
    if(text.includes("cloudy")) return 2
  }

  let findIcon = function(day){
    let clear = 0
    let cloud = 0
    day.weather.forEach(element => {
      console.log(element.icon)
      if(checkClear(element.icon) === 1) clear++
      if(checkClear(element.icon) === 2) cloud++
    })
    if(clear>=cloud) return 1
    else return 0
  }

  return (
    <div className = 'card'>
      <div className = 'info'>
        <Location
          day = {day}/>
        <Title
          day = {day}/>
        <Detail
          day = {day}/>
      </div>
      <div className='img'>
        { !findIcon && <FaSun/> }
        { findIcon && <FaCloudSun/> }
      </div>
    </div>
  )
}

export default Details
