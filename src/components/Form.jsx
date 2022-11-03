import React, {useState} from 'react'
import './Form.css'

const Form = ( { totalExpectedGoals, totalGoals, onReportSubmit } ) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [team, setTeam] = useState("");
  

  const handleNameChange= (evt) => {
    setName(evt.target.value)
  };
  const handleAgeChange= (evt) => {
    setAge()
  };
  const handleTeamChange= (evt) => {
    setTeam()
  };

  const handleReportSubmit = (e) =>{
   
    const reportData = {
      "name":name, 
      "age": 
      "expectedGoals": 
      "goals": 
      "team": {
        "id" : 
      }
    }
    // postReport(reportData)

    setName = ""

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