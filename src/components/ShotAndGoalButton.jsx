import React from 'react'
import './ShotAndGoalButton.css'

const ShotAndGoalButton = ({setGoalsToBeAddedToTotal, goalsToBeAddedToTotal, totalGoals, setTotalGoals,totalExpectedGoals, setTotalExpectedGoals,xGtoBeAddedToTotal, setxGtoBeAddedToTotal }) => {



  const handleButtonSubmit = (e) => {
    e.preventDefault();
    setTotalGoals(totalGoals + goalsToBeAddedToTotal)
    setTotalExpectedGoals(totalExpectedGoals + xGtoBeAddedToTotal)

    setGoalsToBeAddedToTotal(0)  
    setxGtoBeAddedToTotal(0.00)
  }
  
  const clearForm = () => {
    setGoalsToBeAddedToTotal(0)  
    setxGtoBeAddedToTotal(0.00)

  }


  return (
    <div className='button-container'>
    <h2>Goal and shot buttons</h2>
    <form onSubmit={handleButtonSubmit}>
      <label>Goals</label>
        {goalsToBeAddedToTotal}
      <label>Expected goals</label>
        <input value={xGtoBeAddedToTotal}></input>
      <input type="submit"></input>
      <button onClick={clearForm}>Clear</button>

    </form>
        </div>
    )
}

export default ShotAndGoalButton