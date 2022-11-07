import React, { useState } from "react";
import Key from '../components/Key'
import Pitch from '../components/Pitch'
import Form from '../components/Form'
import './Dashboard.css'
import ShotAndGoalButton from "../components/ShotAndGoalButton";

const Dashboard = ( { 
  addDefender, 
  defenders, 
  totalExpectedGoals, 
  totalGoals,
  addNewReport,
  allReports,
  handleSettingExpectedGoalsAdded,
  setIsGoal,
  isGoalToBeAddedToTotal,
  setIsGoalToBeAddedToTotal,
  xGtoBeAddedToTotal,
  setTotalGoals,
  setTotalExpectedGoals

  }) => {

  // const [indexRow1, setIndexRow1] = useState(-1);

  let resetDefenders = () => {
    defenders = 0
    console.log(defenders)
  }

  
    return (
    <div className='dashboard'>
        <div><Pitch
          defenders={defenders}
          handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
          setIsGoal={setIsGoal}
          addDefender={addDefender}
          
          /></div>
        <div><Key resetDefenders={resetDefenders}/></div>
        <div><ShotAndGoalButton
        handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
        isGoalToBeAddedToTotal={isGoalToBeAddedToTotal}
        setIsGoalToBeAddedToTotal={setIsGoalToBeAddedToTotal}
        totalGoals={totalGoals}
        setTotalGoals={setTotalGoals}
        totalExpectedGoals={totalExpectedGoals}
        setTotalExpectedGoals={setTotalExpectedGoals}
        xGtoBeAddedToTotal={xGtoBeAddedToTotal}

   
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
