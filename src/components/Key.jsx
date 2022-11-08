import React from 'react'
import './Key.css'

const Key = () => {
  return (
    <>
    <div className='keyContainer'>
        <h3><u>Pitch key:</u></h3>
        <img className="keyItem" src='./goal.png'></img>
        <label id='goal-key'><b>Goal</b></label>
        <img className="keyItem" src='./shot.png'></img>
        <label id='shot-key'><b>Shot</b></label>
        <img className="keyItem" src='./defender.png'></img>
        <label id='defender-key'><b>Defender</b></label>
        </div>
        </>
    )
}

export default Key