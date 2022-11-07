import React from 'react'
import './Report.css'

const Report = ( {report} ) => {
  console.log(report)

    return (
      <div className='report-container'>
        <p>Player: {report.player.name} </p>
        {/* <p>Club: {report.player.team.name}</p> */}
        <p>Age: {report.player.age}</p>
        <p>Opposition: {report.team.name}</p>
        <p>Expected Goals: {report.expectedGoals}</p>
        <p>Goals: {report.goals}</p>
        </div>
      )
  
  
}

export default Report