import React from 'react'
import Location from './Location'
import Title from './Title'
import Detail from './Detail'

const Details = ({day}) => {
  return (
    <div className='card'>
      <div className='info'>
        <Location
          day = {day}/>
        <Title/>
        <Detail/>
      </div>
      <div className='img'>
        
      </div>
    </div>
  )
}

export default Details
