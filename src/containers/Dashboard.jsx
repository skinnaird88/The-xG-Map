import React from 'react'
import Pitch from '../components/Pitch'

const Dashboard = ( {recordGoal} ) => {
  return (
    <div>
        <h1>Hi</h1>
        <div><Pitch recordGoal={recordGoal}/></div>
        {/* <div><Form/></div> */}
    </div>
  )
}
export default Dashboard
