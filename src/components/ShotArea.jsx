import React from 'react'
import Defender from './Defender'
import './ShotArea.css'

const ShotArea = ( {recordGoal, recordShot, addDefender, defenders, xGValue } ) => {

  const handleGoalClick = () => {
    recordGoal(xGValue);
}

const handleShotClick = () => {
    recordShot(xGValue);
    console.log(xGValue)
}

const handleAddDefender = () => {
  addDefender();


}


  return (
    <>
    <button 
    className="selectButton" 
    onClick={handleAddDefender}>
      <Defender addDefender={handleAddDefender} defenders={defenders}/></button>

    <button className="selectButton" onClick={handleGoalClick}>Goals</button>
    <button className="selectButton" onClick={handleShotClick}>Shots</button>
    </>
    ) 
}

export default ShotArea