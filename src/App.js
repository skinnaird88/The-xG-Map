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
  const [expectedGoals, setExpectedGoals] = useState(0.01);
  const [defenders, setDefenders] = useState(0);

  const recordGoal = () =>{
    setGoals(goals +1);
    console.log("Goal count " + goals)
  }

  const recordShot = (value) =>{
    setExpectedGoals(expectedGoals + value)
    console.log("xg count " + expectedGoals)
  }

  const addDefender = () =>{
    if(defenders <= 2){
      setDefenders(defenders +1)
    }
    else{ return defenders}

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
