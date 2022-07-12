import React from 'react'
import './Datas.scss'

const Longitude = ({lon, setLon}) => {
  return (
    <div className = 'wrapper'>
      <label htmlFor = "label" className = 'label'>Longitude</label>
        <input 
            id = "long" 
            className = "input" 
            type = "text"
            placeholder = 'Longitude...'
            required
            value = {lon}
            onChange = {(e) => setLon(e.target.value)}         
          />
    </div>
  )
}

export default Longitude
