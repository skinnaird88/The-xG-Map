import React from 'react'
import './Key.css'

const Key = () => {
  return (
    <>
    <div className='keyContainer'>
        <h3>Pitch key: </h3>
        <img className="keyItem" src='./goal.png'></img>
        <label>Goal</label>
        <img className="keyItem" src='./shot.png'></img>
        <label>Shot</label>
        <img className="keyItem" src='./defender.png'></img>
        <label>Defender</label>
        </div>
        </>
    )
}

export default Key