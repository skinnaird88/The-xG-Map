import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


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
        // setTeamName("")
        // navigate(0)
    }

  return (
    <div>
        <h1>Teams</h1>
        <form onSubmit={handleTeamFormSubmit}>
            <label>Team name:</label>
            <input id="name" name="name" onChange={handleTeamNameChange}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default Team