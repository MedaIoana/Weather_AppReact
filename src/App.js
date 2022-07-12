import './App.css'
import Datas from './Components/Datas'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details.js'


function App() {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [date, setDate] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [day, setDay] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  function getParameters(lat,lon,date){
    return axios.get(`https://api.brightsky.dev/weather?lat=${lat}&lon=${lon}&date=${date}`)
  }

  const handleSubmit = async () => {
    //e.preventDefault()
    if(!lat && !lon && !date) return
     await getParameters(lat,lon,date).then((res) => {
      //console.log(res.data)
      setIsLoading(false);
      setDay(res.data)
      setFetchError(null)
    }).catch(function(err){
      setIsLoading(false);
      setFetchError('Invalid data, '+err)
    })
  }

  useEffect(() => {
    handleSubmit();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
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
      />
      
      {fetchError && <p className='error'>{`Error: ${fetchError}`}</p>}
      {
        !fetchError && <div className='details'>
          <Routes>
            <Route exact path = '/' element = {null}/>
            <Route path = '/details' element = {<Details day = {day}/>}/>
          </Routes>
        </div>
      }
    </div>
  )
}

export default App
