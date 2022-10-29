import logo from './logo.svg';
import Dashboard from "./containers/Dashboard"
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  const [goals, setGoals] = useState(0);
  // const [expectedGoals, setExpectedGoals] = useState();

  const recordGoal = () =>{
    setGoals += 1;
    console.log(setGoals)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"
          element={
            <Dashboard
            recordGoal={recordGoal}/>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
