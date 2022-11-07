import React, {useState}from 'react'
import Defender from './Defender'
import './ShotArea.css'

const ShotArea = ( { handleSettingExpectedGoalsAdded, addDefender, defenders, xGValue, setIsGoal} ) => {

  const [defenderShowNumber, setDefenderShowNumber] = useState(0)

  const handleGoalClick = () => {
    setIsGoal();
    handleSettingExpectedGoalsAdded(xGValue)

    // TODO: rename this function to be clearler through whole prop passing processs
  }

const handleShotClick = () => {
    handleSettingExpectedGoalsAdded(xGValue)
}
const handleAddDefender = () => {
  if(defenderShowNumber < 3 && defenders < 3){
    setDefenderShowNumber(defenderShowNumber + 1)
    addDefender();
    console.log("DefenderShowNumber" + defenderShowNumber)
    console.log("Regular defenders" + defenders)

  }

}


  return (
    <>
    <button 
    className="selectButton" id='defender'
    onClick={handleAddDefender}>
      <Defender addDefender={handleAddDefender} defenders={defenderShowNumber}/></button>

    <button className="selectButton" onClick={handleGoalClick}>Goals</button>
    <button className="selectButton" onClick={handleShotClick}>Shots</button>
    </>
    ) 
}

export default ShotArea