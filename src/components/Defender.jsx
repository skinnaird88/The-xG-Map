import React from 'react'
import './Defender.css'

const Defender = ({ addDefender, defenders }) => {

  let totalDefenders;
  if(defenders == 1){
    totalDefenders = (
      <div>
        <img className="defender" src="./defender.png"></img>
      </div>
    )
  }
  else if(defenders == 2){
    totalDefenders = (
      <div>
      <img className="defender" src="./defender.png"></img>
      <img className="defender" src="./defender.png"></img>
    </div>
    )
  }
  else if(defenders == 3){
    totalDefenders = (
      <div>
      <img className="defender" src="./defender.png"></img>
      <img className="defender" src="./defender.png"></img>
      <img className="defender" src="./defender.png"></img>
    </div>
    )
  }
  // console.log("Def count " + defenders)

  return (
    <>
    {totalDefenders}
    </>
  )
}

export default Defender