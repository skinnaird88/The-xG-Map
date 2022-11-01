import React from 'react'
import './Defender.css'

const Defender = ({ addDefender, defenders }) => {

  let totalDefenders;
  if(defenders == 0){
    totalDefenders = (
      <div>
        <img className="defender" src="./defender.png"></img>
      </div>
    )
  }
  console.log("Def count " + defenders)

  return (
    <>
    {totalDefenders}
    </>
  )
}

export default Defender