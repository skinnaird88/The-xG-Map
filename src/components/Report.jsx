import React from 'react'
import './Report.css'

const Report = ( {report} ) => {
  

    return (
      <div className='report-container'>
        <p>Player name:</p>
        <p>{report.name}</p>
        <p>Age:</p>
        <p>Club:</p>
        <p>Expected Goals:</p>
        <p>Goals:</p>
        </div>
      )
  
  
}

export default Report