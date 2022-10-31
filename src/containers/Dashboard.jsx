import React from 'react'
import Pitch from '../components/Pitch'

const Dashboard = ( { recordGoal, recordShot, addDefender} ) => {
  return (
    <div>
        <h1>Hi</h1>
        <div><Pitch 
        recordGoal={recordGoal}
        recordShot={recordShot}
        addDefender={addDefender}/></div>
        {/* <div><Form/></div> */}
    </div>
  )
}
export default Dashboard
