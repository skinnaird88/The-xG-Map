import React, {useState}from 'react'
import Defender from './Defender'
import './ShotArea.css'

const ShotArea = ( {recordGoal, recordShot, addDefender, defenders, xGValue } ) => {

  const [defnederShowNumber, setDefnederShowNumber] = useState(0)


  const handleGoalClick = () => {
    recordGoal(xGValue);
}

const handleShotClick = () => {
    recordShot(xGValue);
    console.log(xGValue)
}

const handleAddDefender = () => {
  if(defnederShowNumber < 3 && defenders < 3){
    setDefnederShowNumber(defnederShowNumber + 1)
    addDefender();

  }

}


  return (
    <>
    <button 
    className="selectButton" id='defender'
    onClick={handleAddDefender}>
      <Defender addDefender={handleAddDefender} defenders={defnederShowNumber}/></button>

    <button className="selectButton" onClick={handleGoalClick}>Goals</button>
    <button className="selectButton" onClick={handleShotClick}>Shots</button>
    </>
    ) 
}

export default ShotArea