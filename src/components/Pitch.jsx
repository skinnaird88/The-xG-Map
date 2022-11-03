import React from "react";
import ShotArea from "./ShotArea";
import "./Pitch.css";
const Pitch = ({ recordGoal, recordShot, addDefender, defenders }) => {
        // create array of xg value for each shot area
        const xGValuesArrayRow1 = [0.1, 0.2, 0.3, 0.4, 0.5];
        const xGValuesArrayRow2 = [0.3, 0.6, 0.9, 0.02, 0.01];
        const xGValuesArrayRow3 = [0.08, 0.79, 0.11, 0.5, 0.23];
        const xGValuesArrayRow4 = [0.33, 0.6, 0.7, 0.33, 0.44];
        const xGValuesArrayRow5 = [0.35, 0.04, 0.4, 0.67, 0.07];
        // map through array to assign different xg value to each shot area


//           const row1 = [{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   }]
//   const row2 = [{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   }]
//   const row3 = [{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   }]
//   const row5 = [{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   }]
//   const row5 = [{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   },{
//     defenders: 0,
//     xg: 0.9
//   }]


//   const pitch = [row1, row2,row3,row4,row5]

// Create a stateful representation of the pitch
// each item in the 2d array represents a section of the pitch
// hold the current state in each item
// onClick one of shot areas 
        const shotAreasRow1 = xGValuesArrayRow1.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        recordGoal={recordGoal}
                                        recordShot={recordShot}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                />
                        </div>
                );
        });
        const shotAreasRow2 = xGValuesArrayRow2.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        recordGoal={recordGoal}
                                        recordShot={recordShot}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                />
                        </div>
                );
        });
        const shotAreasRow3 = xGValuesArrayRow3.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        recordGoal={recordGoal}
                                        recordShot={recordShot}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                />
                        </div>
                );
        });
        const shotAreasRow4 = xGValuesArrayRow4.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        recordGoal={recordGoal}
                                        recordShot={recordShot}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
                                />
                        </div>
                );
        });
        const shotAreasRow5 = xGValuesArrayRow5.map((xGValue) => {
                return (
                        <div className="box">
                                <ShotArea
                                        recordGoal={recordGoal}
                                        recordShot={recordShot}
                                        addDefender={addDefender}
                                        defenders={defenders}
                                        xGValue={xGValue}
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
