import React from 'react'
import { useState } from 'react'
import './ShotAndGoalButton.css'

const ShotAndGoalButton = ({setGoalsToBeAddedToTotal, goalsToBeAddedToTotal, totalGoals, setTotalGoals,totalExpectedGoals, setTotalExpectedGoals,xGtoBeAddedToTotal, setxGtoBeAddedToTotal }) => {



  const handleButtonSubmit = (e) => {
    e.preventDefault();
// not this the other one 
    setTotalGoals(totalGoals + goalsToBeAddedToTotal)
    setTotalExpectedGoals(totalExpectedGoals + xGtoBeAddedToTotal)

    setGoalsToBeAddedToTotal(0)  
    setxGtoBeAddedToTotal(0.00)
  }


  return (
    <div className='button-container'>
    <h3>Goal and shot buttons</h3>
    <form onSubmit={handleButtonSubmit}>
      <label>Goals</label>
        {goalsToBeAddedToTotal}
      <label>Expected goals</label>
        <input value={xGtoBeAddedToTotal}></input>
      <input type="submit"></input>

    </form>
        </div>
    )
}

export default ShotAndGoalButton