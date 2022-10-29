import React from 'react'
import ShotArea from './ShotArea'
import './Pitch.css'

const Pitch = ( {recordGoal} ) => {

    const handleClick = () => {
        recordGoal();
    }

  return (
    <div id="pitch-container">
        <div id="row">
            <div id="box" onClick={handleClick}><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
        </div>
        <div id="row">
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
        </div>
        <div id="row">
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
        </div>
        <div id="row">
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
        </div>
        <div id="row">
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
            <div id="box"><ShotArea/></div>
        </div>
    </div>
    )
}

export default Pitch