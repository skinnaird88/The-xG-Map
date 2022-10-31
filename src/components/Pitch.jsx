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

    const rowEntries = 
    (   <>
    <div className="box" onClick={handleShotClick}><ShotArea/></div>
    <div className="box" onClick={handleClick}><ShotArea/></div>
    <div className="box" onClick={handleClick}><ShotArea/></div>
    <div className="box" onClick={handleClick}><ShotArea/></div>
    <div className="box" onClick={handleClick}><ShotArea/></div> 
    </>
    )

  return (
    <section id="pitch-container">
        <div className="row">
        {rowEntries}

        </div>
        <div className="row">
        {rowEntries}


        </div>
        <div className="row">
        {rowEntries}

        </div>
        <div className="row">
        {rowEntries}

        </div>
        <div className="row">
        {rowEntries}

        </div>
    </section>
    )
}

export default Pitch