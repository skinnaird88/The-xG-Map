import React from 'react'
import './Shot.css'


const Shot = ( {showShotIcon} ) => {

let shotIconDisplay;
if(showShotIcon === 1){
    shotIconDisplay = (
        <div>
            <img className='shot' src='./shot.png'></img>
        </div>
    )
}
else if(showShotIcon === 2){
    shotIconDisplay = (
        <div>
            <img className='shot' src='./shot.png'></img>
            <img className='shot' src='./shot.png'></img>
        </div>
    )
}
else if(showShotIcon === 3){
    shotIconDisplay = (
        <div>
            <img className='shot' src='./shot.png'></img>
            <img className='shot' src='./shot.png'></img>
            <img className='shot' src='./shot.png'></img>
        </div>
    )
}

  return (
    <div>
        {shotIconDisplay}
    </div>
  )
}

export default Shot