import './App.css'
import Datas from './Components/Datas'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes, Fragment } from 'react-router-dom';
import Details from './Components/Details.js'
import More from './Components/More';
import Exact from './Components/Exact';

function App() {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [date, setDate] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [day, setDay] = useState([])
  const [isToggled, setIsToggled] = useState(false)
  const [change, setChange] =useState(false)
  const [buttonText, setButtonText] = useState('Show more')

  function getParameters(lat,lon,date){
    return axios.get(`https://api.brightsky.dev/weather?lat=${lat}&lon=${lon}&date=${date}`)
  }

  const handleSubmit = async () => {
    if(!lat && !lon && !date) return
    await getParameters(lat,lon,date).then((res) => {
      setDay(res.data)
      setFetchError(null)
    }).catch(function(err){
      setFetchError('Invalid data, '+err)
    })
  }

  useEffect(() => {
    handleSubmit()
  },[])

  const handleClick = () => {
    if(!change) {
      setButtonText('Show less')
      setChange(!change)
    }
    else{
      setButtonText('Show more')
      setChange(!change)
    }
  }

  return (
    
    <div className="App">
      <Datas 
        lat = {lat}
        setLat = {setLat}
        lon = {lon}
        setLon = {setLon}
        date = {date}
        setDate = {setDate}
        handleSubmit = {handleSubmit}
        isToggled = {isToggled}
        setIsToggled = {setIsToggled}
      />
      {fetchError && <p className='error'>{`Error: ${fetchError}`}</p>}
      
      {
        !fetchError && isToggled && day.length!==0 &&
        <Routes>
          <Route exact path = '/' element = {null}/>
          <Route path = '/details' element = {(
              <>
                  <Details day = {day}/>
                  {
                    !change &&
                    <div className='cards'>
                      <More h = {'7:00'} 
                        temp = {day.weather[7].temperature}
                        icon = {day.weather[7].icon}
                      />
                      <More h = {'11:00'} 
                        temp = {day.weather[11].temperature} 
                        icon = {day.weather[11].icon}
                      />
                      <More h = {'15:00'} 
                        temp = {day.weather[15].temperature} 
                        icon = {day.weather[15].icon}
                      />
                      <More h = {'19:00'} 
                        temp = {day.weather[19].temperature} 
                        icon = {day.weather[19].icon}
                      />
                      <More h = {'23:00'} 
                        temp = {day.weather[23].temperature} 
                        icon = {day.weather[23].icon}
                      />
                    </div>
                  }
                  {
                    change &&
                    <div className='cards'>
                      <Exact h = {'7:00'} 
                        temp = {day.weather[7].temperature}
                        precip = {day.weather[7].precipitation}
                        covr = {day.weather[7].cloud_cover}
                        hum = {day.weather[7].relative_humidity}
                      />
                      <Exact h = {'11:00'} 
                        temp = {day.weather[11].temperature} 
                        precip = {day.weather[11].precipitation}
                        covr = {day.weather[11].cloud_cover}
                        hum = {day.weather[11].relative_humidity}
                      />
                      <Exact h = {'15:00'} 
                        temp = {day.weather[15].temperature} 
                        precip = {day.weather[15].precipitation}
                        covr = {day.weather[15].cloud_cover}
                        hum = {day.weather[15].relative_humidity}
                      />
                      <Exact h = {'19:00'} 
                        temp = {day.weather[19].temperature} 
                        precip = {day.weather[19].precipitation}
                        covr = {day.weather[19].cloud_cover}
                        hum = {day.weather[19].relative_humidity}
                      />
                      <Exact h = {'23:00'} 
                        temp = {day.weather[23].temperature} 
                        precip = {day.weather[23].precipitation}
                        covr = {day.weather[23].cloud_cover}
                        hum = {day.weather[23].relative_humidity}
                      />
                    </div>
                  }
                  <button className='button' onClick = {handleClick}>{buttonText}</button>
              </>
            )}
          />
        </Routes>
      }
    </div>
  )
}

export default App
