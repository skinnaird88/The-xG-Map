import logo from './logo.svg';
import Dashboard from "./containers/Dashboard"
import ReportList from './containers/ReportList';
import React from 'react';
import { getReports, postReport} from './xgMapService';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';


function App() {

  const [totalGoals, setTotalGoals] = useState(0);
  const [totalExpectedGoals, setTotalExpectedGoals] = useState(0.00);
  const [defenders, setDefenders] = useState(0);
  const [allReports, setAllReports] = useState([]);





  useEffect(() => {
    getReports().then((data) => {
      setAllReports(data);
    });
  }, []);

  const defendersReducexGValue = () =>{
    if(defenders === 1){
      setTotalExpectedGoals(totalExpectedGoals * 0.8)
    }
  }

  const recordGoal = (xGValue) =>{
    setTotalGoals(totalGoals +1);
    setTotalExpectedGoals(totalExpectedGoals + xGValue)
    console.log("Goal count " + totalGoals)
    console.log(xGValue)
  }

  const recordShot = (xgValue) =>{
    // some logic with defenders affecting the amount being set below 
    setTotalExpectedGoals(totalExpectedGoals + xgValue)
    defendersReducexGValue()
    console.log("xg count " + totalExpectedGoals)
  }

  const addDefender = () =>{
    if(defenders <= 2){
      setDefenders(defenders +1)
    }
  }

  const addNewReport = (report) => {
    postReport(report).then((savedReport) => setAllReports([...allReports, savedReport]))
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
            allReports={allReports}
            recordGoal={recordGoal}
            recordShot={recordShot}
            addDefender={addDefender}
            defenders={defenders}
            totalExpectedGoals={totalExpectedGoals}
            totalGoals={totalGoals}
            addNewReport={addNewReport}/>
          }></Route>
          <Route path="/reports"
          element={
            <ReportList 
            allReports={allReports}
            setAllReports={setAllReports}/>
          }>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
