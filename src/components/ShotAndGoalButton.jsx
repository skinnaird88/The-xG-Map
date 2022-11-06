import React from 'react'
import './ShotAndGoalButton.css'

const ShotAndGoalButton = ({ totalGoals, totalExpectedGoals}) => {
  return (
    <div className='button-container'>
    <h3>Goal and shot buttons</h3>
    <form>

    <div
    placeholder='Goals'
    value={totalGoals}>Goals: {totalGoals}</div>

    <p
    placeholder='Expected goals' 
    value={totalExpectedGoals}>Expected Goals: {totalExpectedGoals}</p>
    <button>Record</button>
    <button>Reset</button>

    </form>
        </div>
    )
}

export default ShotAndGoalButton