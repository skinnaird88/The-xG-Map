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
  
  
  const [goalsToBeAddedToTotal, setGoalsToBeAddedToTotal] = useState(0)
  const [xGtoBeAddedToTotal, setxGtoBeAddedToTotal] = useState(0.00)

  useEffect(() => {
    getReports().then((data) => {
      setAllReports(data);
    });
  }, []);

  const handleSetGoalToBeAddedToTotal = () => {
    setGoalsToBeAddedToTotal(goalsToBeAddedToTotal + 1)
  }

  const handleSettingExpectedGoalsAdded = (xGValue) =>{
    if(defenders === 1){
      setxGtoBeAddedToTotal(xGtoBeAddedToTotal + xGValue * 0.8)
    }
    else if(defenders === 2){
      setxGtoBeAddedToTotal(xGtoBeAddedToTotal + xGValue * 0.6)
    }
    else if(defenders === 3){
      setxGtoBeAddedToTotal(xGtoBeAddedToTotal + xGValue * 0.2)
    }
    else { 
      setxGtoBeAddedToTotal(xGtoBeAddedToTotal + xGValue)
    }


    
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
            setIsGoal={handleSetGoalToBeAddedToTotal}
            isGoalToBeAddedToTotal={goalsToBeAddedToTotal}
            setIsGoalToBeAddedToTotal={setGoalsToBeAddedToTotal}
            allReports={allReports}
            handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
            addDefender={addDefender}
            defenders={defenders}
            xGtoBeAddedToTotal={xGtoBeAddedToTotal}
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
