import React, { useState } from "react";
import Key from '../components/Key'
import Pitch from '../components/Pitch'
import Form from '../components/Form'
import './Dashboard.css'
import ShotAndGoalButton from "../components/ShotAndGoalButton";

const Dashboard = ( { recordGoal, 
  recordShot, 
  addDefender, 
  defenders, 
  totalExpectedGoals, 
  totalGoals,
  addNewReport,
allReports,
setTotalExpectedGoals,
setTotalGoals} ) => {

  // const [indexRow1, setIndexRow1] = useState(-1);

  
    return (
    <div className='dashboard'>
        <div><Pitch
          defenders={defenders}
          recordGoal={recordGoal}
          recordShot={recordShot}
          addDefender={addDefender}
          /></div>
        <div><Key/></div>
        <div><ShotAndGoalButton
        totalGoals={totalGoals}
        totalExpectedGoals={totalExpectedGoals}
        /></div>
        <div><Form
        reports={allReports}
        totalExpectedGoals={totalExpectedGoals}
        setTotalExpectedGoals={setTotalExpectedGoals}
        totalGoals={totalGoals}
        setTotalGoals={setTotalGoals}
        addNewReport={addNewReport}/></div>
    </div>
  )
}
export default Dashboard
