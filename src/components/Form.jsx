import React from 'react'
import './Form.css'

const Form = ( { totalExpectedGoals } ) => {
  return (
    <div className='form-container'>
        <h3><u>Form</u></h3>
        <form>
            <input placeholder='Player name'></input>
            <input placeholder='Age'></input>
            <input placeholder='Club'></input>
            <input placeholder='Goals'></input>

            <input placeholder='Expected goals' 
            value={totalExpectedGoals}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default Form