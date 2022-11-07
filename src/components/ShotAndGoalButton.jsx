import React from 'react'
import { useState } from 'react'
import './ShotAndGoalButton.css'

const ShotAndGoalButton = ({ totalGoals, totalExpectedGoals, buttonRecordGoals, addGoalToButton, setButtonRecordGoals}) => {


  return (
    <div className='button-container'>
    <h3>Goal and shot buttons</h3>
    <form>
      <label>Goals</label>
        <input value={buttonRecordGoals}></input>
      <label>Expected goals</label>
        <input value={totalExpectedGoals}></input>

    {/* <button>Record</button>
    <button>Reset</button> */}

    </form>
        </div>
    )
}

export default ShotAndGoalButton