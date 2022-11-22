import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { getPlayers, getTeams } from '../xgMapService';
import './Form.css'

        
        const Form = ( { totalExpectedGoals, totalGoals, addNewReport, setTotalExpectedGoals, setTotalGoals } ) => {

  const navigate = useNavigate();
  
  const [players, setPlayers] = useState([]);
  const [oppositionTeams, setOppositionTeams] = useState([]);

  const [selectedPlayerId, setSelectedPlayerId] = useState();
  const [selectedOppositionTeam, setSelectedOppositionTeam] = useState();


  useEffect(() => {
    getPlayers().then((data) => {
      setPlayers(data);
    });
  }, []);


  useEffect(() => {
    getTeams().then((data) => {
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

    setSelectedPlayerId();
    setSelectedOppositionTeam();
    setTotalExpectedGoals(0.00);
    setTotalGoals(0);


    navigate('/reports');



  }

const mapThroughAllPlayersForDropdown = players?.map((player) => {
  return <option value={player.id}>{player.name}: {player.team.name}</option>
})
const mapThroughAllOppositionTeamsForDropdown = oppositionTeams?.map((team) => {
  return <option value={team.id}>{team.name}</option>
})


  return (
    <div className='form-container'>
        <h3 id='form-header'><u>Form</u></h3>
        <form onSubmit={handleReportSubmit}>
          <p className='form-item'><u>Player: </u></p>
          <select className="dropdowns" onChange={handlePlayerChange} id="name" name="name">{mapThroughAllPlayersForDropdown}</select>
            
            <p className='form-item'><u>Opponent: </u></p>
          <select className="dropdowns" onChange={handleTeamChange} id="team" name="opponent">{mapThroughAllOppositionTeamsForDropdown}</select>

{/* TODO: change input tags to not input tags */}
          <p className='form-item'><u>Goals: </u></p>
            <div className='form-item' id='tallies'
            value={totalGoals}
           >{totalGoals}</div>

          <p className='form-item'><u>Expected Goals: </u></p>
            <div className='form-item' id='tallies'
            value={totalExpectedGoals}
           >{totalExpectedGoals}</div>
           <br></br>

            <input className='form-item' id='submit-button' type="submit"></input>
        </form>
    </div>
  )
}

export default Form