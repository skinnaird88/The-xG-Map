import React, {useState} from 'react'
import './Form.css'

const Form = ( { totalExpectedGoals, totalGoals, addNewReport } ) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [team, setTeam] = useState("");
  

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


  return (
    <div className='form-container'>
        <h3><u>Form</u></h3>
        <form onSubmit={handleReportSubmit}>
            <input 
            placeholder='Player name'
            type='text'
            onChange={handleNameChange}></input>

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