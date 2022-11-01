import React from 'react'
import Defender from './Defender'
import './ShotArea.css'

const ShotArea = ( {recordGoal, recordShot, addDefender, defenders} ) => {

  const handleClick = () => {
    recordGoal();
}

const handleShotClick = () => {
    recordShot();
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

    <button className="selectButton" onClick={handleClick}>Goals</button>
    <button className="selectButton" onClick={handleShotClick}>Shots</button>
    </>
    ) 
}

export default ShotArea