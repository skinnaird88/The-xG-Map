import logo from './logo.svg';
import Dashboard from "./containers/Dashboard"
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  const [goals, setGoals] = useState(0);
  const [expectedGoals, setExpectedGoals] = useState(0);
  const [defenders, setDefenders] = useState(0);

  const recordGoal = () =>{
    setGoals(goals +1);
    console.log(goals)
  }

  const recordShot = (value) =>{
    setExpectedGoals(expectedGoals + value)
    console.log("xg count " + expectedGoals)
  }

  const addDefender = () =>{
    setDefenders(defenders +1);
    // set max number of defenders that can be added to 3
    (defenders != 3)
    console.log("Def count " + defenders)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"
          element={
            <Dashboard
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}/>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
