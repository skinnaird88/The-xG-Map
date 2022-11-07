import React, { useState } from "react";
import ShotArea from "./ShotArea";
import "./Pitch.css";
const Pitch = ({ handleSettingExpectedGoalsAdded, addDefender, defenders, setIsGoal }) => {

        // create array of xg value for each shot area
                
        const xGValuesArrayRow1 = [0.3, 0.6, 0.9, 0.02, 0.01];
        
        const xGValuesArrayRow2 = [0.3, 0.6, 0.9, 0.02, 0.01];
        const xGValuesArrayRow3 = [0.08, 0.79, 0.11, 0.5, 0.23];
        const xGValuesArrayRow4 = [0.33, 0.6, 0.7, 0.33, 0.44];
        const xGValuesArrayRow5 = [0.8, 0.8, 0.8, 0.8, 0.8];
        // map through array to assign different xg value to each shot area


//   const pitch = [row1, row2,row3,row4,row5]

// Create a stateful representation of the pitch
// each item in the 2nd array represents a section of the pitch
// hold the current state in each item
// onClick one of shot areas 


        const shotAreasRow1 = xGValuesArrayRow1.map((xGValue) => {
                // setIndexRow1( indexRow1 += 1)
                return (
                        <div className="box">
                                <ShotArea
                                        handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                        setIsGoal= {setIsGoal}
                                />
                        </div>
                );
        });
        const shotAreasRow2 = xGValuesArrayRow2.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                        setIsGoal= {setIsGoal}

                                />
                        </div>
                );
        });
        const shotAreasRow3 = xGValuesArrayRow3.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                        setIsGoal= {setIsGoal}

                                />
                        </div>
                );
        });
        const shotAreasRow4 = xGValuesArrayRow4.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}

                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                        setIsGoal= {setIsGoal}

                                />
                        </div>
                );
        });
        const shotAreasRow5 = xGValuesArrayRow5.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        handleSettingExpectedGoalsAdded={handleSettingExpectedGoalsAdded}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                        setIsGoal= {setIsGoal}

                                />
                        </div>
                );
        });

        return (
                <section id="pitch-container">
                        <div className="row">
                        {shotAreasRow1}
                        </div>
                        <div className="row">
                        {shotAreasRow2}
                        </div>
                        <div className="row">
                        {shotAreasRow3}
                        </div>
                        <div className="row">
                        {shotAreasRow4}
                        </div>
                        <div className="row">
                        {shotAreasRow5}
                        </div>
                </section>
        );
};

export default Pitch;
