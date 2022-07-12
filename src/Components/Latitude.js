import React from 'react'
import './Datas.scss'

const Latitude = ({lat, setLat}) => {
  return (
    <div className='wrapper'>
      <label htmlFor = "label" className = 'label'>Latitude</label>
        <input 
            id = "lat" 
            className = "input" 
            type = "text"
            placeholder = 'Latitude...'
            required
            value = {lat}
            onChange = {(e) => setLat(e.target.value)}
        />
    </div>
  )
}

export default Latitude
