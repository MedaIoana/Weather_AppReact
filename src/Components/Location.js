import React from 'react'

const Location = ({day}) => {
    console.log(day.sources)
  return (
    <span className='location' 
        id='location'
        //value = {day.sources[0].station_name}
        >
    </span>
    
  )
}

export default Location
