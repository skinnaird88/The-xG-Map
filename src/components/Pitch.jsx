import React from 'react'
import ShotArea from './ShotArea'
import './Pitch.css'

const Pitch = ( {recordGoal, recordShot, addDefender, defenders} ) => {


    const rowEntries = 
    (   <>
    <div className="box"><ShotArea
            defenders={defenders}
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}/></div>
    <div className="box"><ShotArea
            defenders={defenders}
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}/></div>
    <div className="box"><ShotArea
            defenders={defenders}
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}/></div>
    <div className="box"><ShotArea
            defenders={defenders}
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}/></div>
    <div className="box"><ShotArea
            defenders={defenders}
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}/></div>
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