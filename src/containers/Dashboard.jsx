import React from 'react'
import Key from '../components/Key'
import Pitch from '../components/Pitch'
import Form from '../components/Form'
import './Dashboard.css'

const Dashboard = ( { recordGoal, recordShot, addDefender, defenders, totalExpectedGoals} ) => {
  return (
    <div className='dashboard'>
        <div><Pitch
          defenders={defenders}
          recordGoal={recordGoal}
          recordShot={recordShot}
          addDefender={addDefender}/></div>
        <div><Key/></div>
        <div><Form
        totalExpectedGoals={totalExpectedGoals}/></div>
    </div>
  )
}
export default Dashboard
