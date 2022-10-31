import React from 'react'
import './ShotArea.css'

const ShotArea = ( {recordGoal, recordShot, addDefender, defenders} ) => {

  const handleClick = () => {
    recordGoal();
}

const handleShotClick = () => {
    recordShot(0.5);
}

const handleAddDefender = () => {
  addDefender();
  console.log("Def count " + defenders)

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