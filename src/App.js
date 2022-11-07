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


  const [buttonRecordGoals, setButtonRecordGoals] = useState(0)
  const [buttonRecordExpectedGoals, setButtonRecordExpectedGoals] = useState(0.00)

  useEffect(() => {
    getReports().then((data) => {
      setAllReports(data);
    });
  }, []);

  const addGoalToButton = (xGValue) =>{
    setButtonRecordGoals(buttonRecordGoals +1)
    if(defenders === 1){
      setButtonRecordGoals(buttonRecordExpectedGoals + xGValue * 0.8)
    }
    else if(defenders === 2){
      setButtonRecordExpectedGoals(buttonRecordExpectedGoals + xGValue * 0.6)
    }
    else if(defenders === 3){
      setButtonRecordExpectedGoals(buttonRecordExpectedGoals + xGValue * 0.2)
    }
    else setButtonRecordExpectedGoals(buttonRecordExpectedGoals + xGValue)
  }

  const recordGoal = (xGValue) =>{
    setTotalGoals(totalGoals +1);
    if(defenders === 1){
      setTotalExpectedGoals(totalExpectedGoals + xGValue * 0.8)
    }
    else if(defenders === 2){
      setTotalExpectedGoals(totalExpectedGoals + xGValue * 0.6)
    }
    else if(defenders === 3){
      setTotalExpectedGoals(totalExpectedGoals + xGValue * 0.2)
    }
    else setTotalExpectedGoals(totalExpectedGoals + xGValue)

  }

  const addShotToButton = (xGValue) => {
    if(defenders === 1)

  }

  const recordShot = (xGValue) =>{
    if(defenders === 1){
      setTotalExpectedGoals(totalExpectedGoals + xGValue * 0.8)
    }
    else if(defenders === 2){
      setTotalExpectedGoals(totalExpectedGoals + xGValue * 0.6)
    }
    else if(defenders === 3){
      setTotalExpectedGoals(totalExpectedGoals + xGValue * 0.2)
    }
    else setTotalExpectedGoals(totalExpectedGoals + xGValue)
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
            addGoalToButton={addGoalToButton}
            buttonRecordGoals={buttonRecordGoals}
            setButtonRecordGoals={setButtonRecordExpectedGoals}
            recordShot={recordShot}
            addDefender={addDefender}
            defenders={defenders}
            totalExpectedGoals={totalExpectedGoals}
            setTotalExpectedGoals={setTotalExpectedGoals}
            totalGoals={totalGoals}
            setTotalGoals={setTotalGoals}
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
