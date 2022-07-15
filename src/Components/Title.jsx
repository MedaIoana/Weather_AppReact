import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const Title = ({day}) => {

  function maxTemp(day){
    let max = -100.0
    let min = 100
    day.weather.forEach(element => {
      let aux=element.temperature
      if(aux > max) max = aux
      if(aux < min) min = aux
    });
    return {max,min}
  }

  return (
    <p className = 'title'>
      <FaSun className='icon-sun'/>
      <span className = 'maxTemp' id = 'maxTemp'>
        {maxTemp(day).max+'°C/'}
      </span>
      <FaMoon className='icon-moon'/>
      <span className = 'minTemp' id = 'minTemp'>
        {maxTemp(day).min+'°C'}
      </span>
    </p>
  )
}

export default Title
