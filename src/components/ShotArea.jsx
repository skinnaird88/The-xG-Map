import React from 'react'
import './ShotArea.css'

const ShotArea = ( {recordGoal, recordShot, addDefender} ) => {

  const handleClick = () => {
    recordGoal();
}

const handleShotClick = () => {
    recordShot(0.5);
}

const handleAddDefender = () => {
  addDefender();
}


  return (
    <>
    <button className="selectButton" onClick={handleAddDefender}>Defenders</button>
    <button className="selectButton" onClick={handleClick}>Goals</button>
    <button className="selectButton" onClick={handleShotClick}>Shots</button>
    </>
    ) 
}

export default ShotArea