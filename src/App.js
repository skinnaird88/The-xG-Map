import logo from './logo.svg';
import Dashboard from "./containers/Dashboard"
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

const serverUrl = "http://localhost:8080"

function App() {

  const [goals, setGoals] = useState(0);
  const [totalExpectedGoals, setTotalExpectedGoals] = useState(0.00);
  const [defenders, setDefenders] = useState(0);

  const recordGoal = () =>{
    setGoals(goals +1);
    console.log("Goal count " + goals)
  }

  const recordShot = (xgValue) =>{
    // some logiv with defenders effecting the ammount being set below 
    setTotalExpectedGoals(totalExpectedGoals + xgValue)
    console.log("xg count " + totalExpectedGoals)
  }

  const addDefender = () =>{
    if(defenders <= 2){
      setDefenders(defenders +1)
    }
  }

  return (
    <div>
      <Router>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/"
          element={
            <Dashboard
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}
            defenders={defenders}/>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
