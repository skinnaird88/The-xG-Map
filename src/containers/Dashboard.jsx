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
  goalsToBeAddedToTotal,
  setGoalsToBeAddedToTotal,
  xGtoBeAddedToTotal,
  setxGtoBeAddedToTotal,
  setTotalGoals,
  setTotalExpectedGoals

  }) => {

  // const [indexRow1, setIndexRow1] = useState(-1);

  let resetDefenders = () => {
    defenders = 0
  }

  
    return (
    <div className='dashboard'>
        <div className="item1"><Pitch
          defenders={defenders}
          handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
          setIsGoal={setIsGoal}
          addDefender={addDefender}
          
          /></div>
        <div className="item2"><Key/></div>
        <div className="item3"><ShotAndGoalButton
        handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
        goalsToBeAddedToTotal={goalsToBeAddedToTotal}
        setGoalsToBeAddedToTotal={setGoalsToBeAddedToTotal}
        totalGoals={totalGoals}
        setTotalGoals={setTotalGoals}
        setxGtoBeAddedToTotal={setxGtoBeAddedToTotal}
        totalExpectedGoals={totalExpectedGoals}
        setTotalExpectedGoals={setTotalExpectedGoals}
        xGtoBeAddedToTotal={xGtoBeAddedToTotal}

   
        /></div>
        <div className="item4"><Form
        reports={allReports}
        totalExpectedGoals={totalExpectedGoals}
        setTotalExpectedGoals={setTotalExpectedGoals}
        totalGoals={totalGoals}
        setTotalGoals={setTotalGoals}
        addNewReport={addNewReport}
        xGtoBeAddedToTotal={xGtoBeAddedToTotal}
        /></div>
    </div>
  )
}
export default Dashboard
