import React from "react";
import "./TrackSelection.css";

const TrackSelection = ({ setPage }) => {
  const tracks = [
    { title: "Full Stack", description: "Full Stack Development", image: "fullstack.png" },
    { title: "SDE", description: "Software Development Engineer", image: "sde.png" },
    { title: "Data Science", description: "Data Scientist", image: "datascience.png" },
    { title: "UI/UX", description: "UI/UX Designer", image: "uiux.png" }
  ];

  const handleTrackSelection = (track) => {
    setPage("SkillSelection");
  };

  return (
    <div className="track-selection-container">
      <h2><strong>Select Your Track</strong></h2>
      <div className="track-list">
        {tracks.map((track, index) => (
          <div key={index} className="track-box">
            <div className="track-image">
              <img src={track.image} alt={track.title} />
            </div>
            <div className="track-info">
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <button className="go-course-button" onClick={() => handleTrackSelection(track.title)}>Go to Course</button>
            </div>
          </div>
        ))}
      </div>
      <div className="quote-bar">Empower your future with the right track!</div>
    </div>
  );
};

export default TrackSelection;
