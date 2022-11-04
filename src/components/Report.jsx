import React from 'react'
import './Report.css'

const Report = ( {report} ) => {
  

    return (
      <div className='report-container'>
        <p>Player name: {report.player.name}</p>
        <p>Age: {report.player.age}</p>
        <p>Club: {report.team.name}</p>
        <p>Expected Goals: {report.expectedGoals}</p>
        <p>Goals: {report.goals}</p>
        </div>
      )
  
  
}

export default Report