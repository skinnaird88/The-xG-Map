import React from 'react'
import './Report.css'

const Report = ( {report} ) => {
  console.log(report)

    return (
      <div className='report-container'>
        <p className='report-row'>Player: {report.player.name} </p>
        {/* <p>Club: {report.player.team.name}</p> */}
        <p className='report-row'>Age: {report.player.age}</p>
        <p className='report-row'>Opposition: {report.team.name}</p>
        <p className='report-row'>Expected Goals: {report.expectedGoals}</p>
        <p className='report-row'>Goals: {report.goals}</p>
        </div>
      )
  
  
}

export default Report