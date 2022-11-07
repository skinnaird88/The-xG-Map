import React, {useState, useEffect} from 'react'
import { getPlayers, getOppositionTeams } from '../xgMapService';
import './Form.css'

const Form = ( { totalExpectedGoals, totalGoals, addNewReport, allReports } ) => {

  const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  
  const [players, setPlayers] = useState([]);
  const [oppositionTeams, setOppositionTeams] = useState([]);

  const [selectedPlayerId, setSelectedPlayerId] = useState();
  const [selectedOppositionTeam, setSelectedOppositionTeam] = useState();


  // const [reports, setReports] = useState(allReports);
  useEffect(() => {
    getPlayers().then((data) => {
      setPlayers(data);
    });
  }, []);


  useEffect(() => {
    getOppositionTeams().then((data) => {
      setOppositionTeams(data);
    });
  }, []);



  const handlePlayerChange= (evt) => {
    setSelectedPlayerId(evt.target.value)
  };

  const handleTeamChange= (evt) => {
    setSelectedOppositionTeam(evt.target.value)
  };

  const handleReportSubmit = (e) =>{
    e.preventDefault();
    const reportData = {
      "player": {
        id: selectedPlayerId
      },
      "team": {
        id: selectedOppositionTeam
      },
      "goals": totalGoals,
      "expectedGoals" : totalExpectedGoals
    }
    
    addNewReport(reportData)
    console.log(reportData)

    setName ("")
    // setAge("")
    setOppositionTeams("")

  }

const mapThroughAllPlayersForDropdown = players?.map((player) => {
  return <option value={player.id}>{player.name}: {player.team.name}</option>
})
const mapThroughAllOppositionTeamsForDropdown = oppositionTeams?.map((team) => {
  return <option value={team.id}>{team.name}</option>
})


  return (
    <div className='form-container'>
        <h3><u>Form</u></h3>
        <form onSubmit={handleReportSubmit}>
          <label for="name">Player: </label>
          <select onChange={handlePlayerChange} id="name" name="name">{mapThroughAllPlayersForDropdown}</select>
            
            <label for="opponent">Opponent: </label>
          <select onChange={handleTeamChange} id="team" name="opponent">{mapThroughAllOppositionTeamsForDropdown}</select>

{/* TODO: change input tags to not input tags */}
            <input placeholder='Goals'
            value={totalGoals}
           ></input>


            <input placeholder='Expected goals' 
            value={totalExpectedGoals}
           ></input>


            <input type="submit"></input>
        </form>
    </div>
  )
}

export default Form