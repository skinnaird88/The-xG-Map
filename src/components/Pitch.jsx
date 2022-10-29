import React from 'react'
import ShotArea from './ShotArea'
import './Pitch.css'

const Pitch = ( {recordGoal, recordShot} ) => {

    const handleClick = () => {
        recordGoal();
    }

    const handleShotClick = () => {
        recordShot(0.5);
    }

  return (
    <div id="pitch-container">
        <div id="row">
            <div id="box" onClick={handleShotClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
        </div>
        <div id="row">
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
        </div>
        <div id="row">
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
        </div>
        <div id="row">
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
        </div>
        <div id="row">
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box" onClick={handleClick}><ShotArea/></div>
        </div>
    </div>
    )
}

export default Pitch