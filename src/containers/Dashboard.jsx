import React from 'react'
import Key from '../components/Key'
import Pitch from '../components/Pitch'
import './Dashboard.css'

const Dashboard = ( { recordGoal, recordShot, addDefender, defenders} ) => {
  return (
    <div className='dashboard'>
        <div><Pitch
          defenders={defenders}
          recordGoal={recordGoal}
          recordShot={recordShot}
          addDefender={addDefender}/></div>
        <div><Key/></div>
        {/* <div><Form/></div> */}
    </div>
  )
}
export default Dashboard
