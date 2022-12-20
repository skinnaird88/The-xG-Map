import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Team.css'


const Team = ({addNewTeam}) => {

    const navigate = useNavigate();


    const [teamName, setTeamName] = useState("")


    function handleTeamNameChange(evt){
        setTeamName(evt.target.value)
    }

    function handleTeamFormSubmit(evt){
        evt.preventDefault()

        const teamData = {
            "name": teamName
        }
        console.log(teamData)
        addNewTeam(teamData)
        setTeamName("")
        navigate(0)
    }

  return (
    <div className='upper-container'>

        <form className="team-form-container" onSubmit={handleTeamFormSubmit}>
            <label className='team-name-input'>Team name:</label>
            <input className='team-name-input' id="name" name="name" onChange={handleTeamNameChange}></input>
            <input className="player-submit-button"type="submit"></input>
        </form>
    </div>
  )
}

export default Team