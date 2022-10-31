import React from 'react'
import './ShotArea.css'

const ShotArea = ( {recordGoal, recordShot, addDefender} ) => {

  const handleClick = () => {
    recordGoal();
}

const handleShotClick = () => {
    recordShot(0.5);
}


  return (
    <>
    <div className="selectButton">Defenders</div>
    <div className="selectButton" onClick={handleClick}>Goals</div>
    <div className="selectButton" onClick={handleShotClick}>Shots</div>
    </>
    ) 
}

export default ShotArea