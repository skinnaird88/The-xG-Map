import React, { useState } from "react";
import ShotArea from "./ShotArea";
import "./Pitch.css";
const Pitch = ({ handleSettingExpectedGoalsAdded, addDefender, defenders, setIsGoal }) => {

                
        const xGValuesArrayRow1 = [0.06, 0.48, 0.76, 0.45, 0.05];
        const xGValuesArrayRow2 = [0.10, 0.2, 0.26, 0.2, 0.10];
        const xGValuesArrayRow3 = [0.09, 0.11, 0.12, 0.11, 0.08];
        const xGValuesArrayRow4 = [0.02, 0.03, 0.04, 0.03, 0.02];
        const xGValuesArrayRow5 = [0.01, 0.02, 0.03, 0.02, 0.01];
        // map through array to assign different xg value to each shot area



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
