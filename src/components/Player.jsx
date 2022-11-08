import React from 'react'
import { useState, useEffect } from 'react'
import { getTeams } from '../xgMapService'

const Player = ( { allPlayers, setAllPlayers, addNewPlayer } ) => {

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
}

  return (
    <div>
      <h1>Add player</h1>
      <form onSubmit={handlePlayerFormSubmit}>
        <label>Player name: </label>

        <input onChange={handleNameChange} id="name" name='name'></input>


        <label>Age: </label>
        <input onChange={handleAgeChange} id='age' name='age'></input>


        <select onChange={handleTeamChange}id='team' name='team'>{mapThroughAllTeamsForDropdown}</select>
        <input type="submit"></input>
      </form>
          </div>
  )
}

export default Player