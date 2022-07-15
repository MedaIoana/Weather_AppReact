import React from 'react'
import './Datas.scss'
import Latitude from './Latitude'
import Longitude from './Longitude'
import Date from './Date'
import { Link } from 'react-router-dom'

const Dates = ({lat, setLat, lon, setLon, date, setDate, handleSubmit, setIsToggled}) => {
  return (
    <div className = 'dateForm'>
        <Latitude
          lat = {lat}
          setLat = {setLat}
        />
        <Longitude
          lon = {lon}
          setLon = {setLon}
        />
        <Date
          date = {date}
          setDate = {setDate}
        />
      {lat && lon && date &&   
          <button className = 'btn' id='btn' onClick = {() => {handleSubmit(); setIsToggled(true)}} >
            <Link className = 'btn' to = "/details" >Check</Link>
          </button>
      }
    </div>
  )
}

export default Dates
