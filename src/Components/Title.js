import React from 'react'

const Title = ({maxTemp, minTemp}) => {
  return (
    <p className = 'title'>
      <span className = 'maxTemp'
            id = 'maxTemp'
            value = {maxTemp+'°C/'+<i className = 'fas fa-sun'></i>}>
      </span>
      <span className = 'minTemp'
            id = 'minTemp'
            value = {minTemp+'°C'+<i className = 'fas fa-moon'></i>}>
      </span>
    </p>
  )
}

export default Title
