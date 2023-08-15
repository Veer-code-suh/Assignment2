import React from "react";
import "./ScrollableAthleteBar.css"; // Import your CSS file for styling

const ScrollableAthleteBar = ({ athletes }) => {
  const levels = {
    Basic: [],
    Intermediate: [],
    Advanced: [],
  };

  athletes.forEach((athlete) => {
    levels[athlete.level].push(athlete.name);
  });

  return (
    <div className="scrollable-bar">
      {Object.entries(levels).map(([level, athletes], index) => (
        <div className="level" key={index}>
          <h2>{level}</h2>
          {athletes.map((athlete, athleteIndex) => (
            <div className="athlete" key={athleteIndex}>
              {athlete}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ScrollableAthleteBar;
