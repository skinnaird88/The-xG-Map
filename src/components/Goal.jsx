import React from 'react'
import './Goal.css'


const Goal = ( {showGoalIcon} ) => {

    let goalIconDisplay;
    if(showGoalIcon === 1){
        goalIconDisplay = (
            <div>
                <img className="goal" src="./goal.png"></img>
            </div>
        )
    }
    else if(showGoalIcon === 2){
        goalIconDisplay = (
            <div>
                <img className="goal" src="./goal.png"></img>
                <img className="goal" src="./goal.png"></img>
            </div>
        )
    }
    else if(showGoalIcon === 3){
        goalIconDisplay = (
            <div>
                <img className="goal" src="./goal.png"></img>
                <img className="goal" src="./goal.png"></img>
                <img className="goal" src="./goal.png"></img>
            </div>
        )
    }


  return (
<>
    {goalIconDisplay}
</>
  )
}

export default Goal