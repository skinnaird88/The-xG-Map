import React, {useState, useEffect} from 'react'
import { getPlayers } from '../xgMapService';
import './Form.css'

const Form = ( { totalExpectedGoals, totalGoals, addNewReport, allReports } ) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [team, setTeam] = useState("");

  const [players, setPlayers] = useState([]);


  // const [reports, setReports] = useState(allReports);
  useEffect(() => {
    getPlayers().then((data) => {
      setPlayers(data);
    });
  }, []);



  const handleNameChange= (evt) => {
    setName(evt.target.value)
  };
  const handleAgeChange= (evt) => {
    setAge(evt.target.value)
  };
  const handleTeamChange= (evt) => {
    setTeam(evt.target.value)
  };

  const handleReportSubmit = (e) =>{
    console.log(allReports)
    e.preventDefault();
    const reportData = {
      "name": name, 
      "age": age,
      "team": team
    }
    
    addNewReport(reportData)
    console.log(reportData)

    setName ("")
    setAge("")
    setTeam("")

  }

const mapThroughAllPlayersForDropdown = players?.map((player) => {
  console.log(players)
  return <option value={player.name}>{player.name}</option>
})


  return (
    <div className='form-container'>
        <h3><u>Form</u></h3>
        <form onSubmit={handleReportSubmit}>
          <select>{mapThroughAllPlayersForDropdown}</select>


            <input placeholder='Age'
            onChange={handleAgeChange}></input>


            <input placeholder='Team'
            onChange={handleTeamChange}
            ></input>

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