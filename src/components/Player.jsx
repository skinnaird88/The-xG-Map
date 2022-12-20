import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTeams } from '../xgMapService'
import './Player.css'

const Player = ( { addNewPlayer } ) => {

const navigate = useNavigate();


const [name, setName] = useState("")
const [age, setAge] = useState(0)
const [teamId, setTeamId] = useState(0)
const [teams, setTeams] = useState([])

useEffect(() => {
  getTeams().then((data) => {
    setTeams(data);
  });
}, []);



const handleNameChange = (evt) => {
  setName(evt.target.value)
}

const handleAgeChange = (evt) => {
  setAge(evt.target.value)
}

const handleTeamChange = (evt) => {
  setTeamId(evt.target.value)
};

const mapThroughAllTeamsForDropdown = teams.map((team) => {
  return <option value={team.id}>{team.name}
  </option>
})

const handlePlayerFormSubmit = (evt) => {
  evt.preventDefault()
  
  // TODO: Can add validation to make sure name and age are teamId is valid
  
  const playerData = {
    "name" : name,
    "age" : age,
    "team" : {
      "id" : teamId
    }
  }
  console.log(playerData)
  addNewPlayer(playerData)

  setAge(0)
  setName("")
  setTeamId(0)

  navigate(0)
}

  return (
    <div className='upper-container'>

      <form className='player-form-container' onSubmit={handlePlayerFormSubmit}>
        <label><u>Player name:</u></label>

        <input className='make-these-widths-auto' onChange={handleNameChange} id="name" name='name'></input>


        <label><u>Age:</u></label>
        <input className='player-inputs' onChange={handleAgeChange} id='age' name='age'></input>


        <label><u>Club:</u></label>
        <select className='make-these-widths-auto' onChange={handleTeamChange}id='team' name='team'>{mapThroughAllTeamsForDropdown}</select>
        <input className='player-submit-button' type="submit"></input>
      </form>
          </div>
  )
}

export default Player