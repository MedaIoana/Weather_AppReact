import React from 'react'
import './Datas.scss'

const Date = ({date, setDate}) => {
  return (
    <div className='wrapper'>
      <label htmlFor = "label" className = 'label'>Date</label>
        <input 
            id = "date" 
            className = "input" 
            type = "date"
            required
            value = {date}
            onChange = {(e) => setDate(e.target.value)}
            />
    </div>
  )
}

export default Date
