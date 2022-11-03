import React from 'react'
import './Report.css'

const Report = ( {report} ) => {
  

    return (
      <div className='report-container'>
        <p>Player name: {report.name}</p>
        <p>Age: {report.age}</p>
        <p>Club: {report.team.name}</p>
        <p>Expected Goals:</p>
        <p>Goals:</p>
        </div>
      )
  
  
}

export default Report