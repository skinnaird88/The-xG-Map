import React, { useState } from "react";
import Key from '../components/Key'
import Pitch from '../components/Pitch'
import Form from '../components/Form'
import './Dashboard.css'

const Dashboard = ( { recordGoal, 
  recordShot, 
  addDefender, 
  defenders, 
  totalExpectedGoals, 
  totalGoals,
  addNewReport,
allReports} ) => {

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
        <div><Form
        reports={allReports}
        totalExpectedGoals={totalExpectedGoals}
        totalGoals={totalGoals}
        addNewReport={addNewReport}/></div>
    </div>
  )
}
export default Dashboard
