import React from 'react'

const Location = ({day}) => {
  
  return (
    <span className='location' 
        id='location'
        value = {day.sources[0].station_name}
        >{day.sources[0].station_name}
    </span>
    
  )
}

export default Location
