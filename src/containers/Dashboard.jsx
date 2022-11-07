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
setTotalGoals,
addGoalToButton,
buttonRecordGoals,
setButtonRecordGoals} ) => {

  // const [indexRow1, setIndexRow1] = useState(-1);

  let resetDefenders = () => {
    defenders = 0
    console.log(defenders)
  }

  
    return (
    <div className='dashboard'>
        <div><Pitch
          defenders={defenders}
          recordGoal={recordGoal}
          recordShot={recordShot}
          addGoalToButton={addGoalToButton}
          addDefender={addDefender}
          /></div>
        <div><Key resetDefenders={resetDefenders}/></div>
        <div><ShotAndGoalButton
        totalGoals={totalGoals}
        totalExpectedGoals={totalExpectedGoals}
        addGoalToButton={addGoalToButton}
        buttonRecordGoals={buttonRecordGoals}
        setButtonRecordGoals={setButtonRecordGoals}
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
