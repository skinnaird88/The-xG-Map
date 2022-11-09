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
    <h2><u>Goal and shot tracker</u></h2>
    <form onSubmit={handleButtonSubmit}>
      <p className='button-item'><u>Goals</u> </p>

        <p className='button-item' id='goals'>{goalsToBeAddedToTotal}</p>

      <p className='button-item'><u>Expected goals </u></p>
        <p className='button-item' id='goals' value={xGtoBeAddedToTotal}>{xGtoBeAddedToTotal}</p>
      
      <div className='buttons'>
      <input type="submit" id='buttons'></input>
      <button onClick={clearForm} id='buttons'>Clear</button>
      </div>

    </form>
        </div>
    )
}

export default ShotAndGoalButton