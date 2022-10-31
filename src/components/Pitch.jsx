import React from 'react'
import ShotArea from './ShotArea'
import './Pitch.css'

const Pitch = ( {recordGoal, recordShot, addDefender} ) => {


    const rowEntries = 
    (   <>
    <div className="box"><ShotArea
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}/></div>
    <div className="box" ><ShotArea/></div>
    <div className="box" ><ShotArea/></div>
    <div className="box" ><ShotArea/></div>
    <div className="box" ><ShotArea/></div> 
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