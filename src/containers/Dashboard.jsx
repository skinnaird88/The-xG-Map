import React from 'react'
import Pitch from '../components/Pitch'

const Dashboard = ( { recordGoal, recordShot, addDefender, defenders} ) => {
  return (
    <div>
        <h1>Hi</h1>
        <div><Pitch
        defenders={defenders}
        recordGoal={recordGoal}
        recordShot={recordShot}
        addDefender={addDefender}/></div>
        {/* <div><Form/></div> */}
    </div>
  )
}
export default Dashboard
