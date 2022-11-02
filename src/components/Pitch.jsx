import React from "react";
import ShotArea from "./ShotArea";
import "./Pitch.css";
const Pitch = ({ recordGoal, recordShot, addDefender, defenders }) => {
        // create array of xg value for each shot area
        const xGValuesArray = [0.1, 0.2, 0.3, 0.4, 0.5];
        // map through array to assign different xg value to each shot area
        const shotAreas = xGValuesArray.map((xGValue) => {
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
                        {shotAreas}
                </section>
        );
};

export default Pitch;
