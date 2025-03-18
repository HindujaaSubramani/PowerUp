import React, { useState } from "react";
import "./VideoRecommendations.css";

const videoData = [
  { skill: "HTML", videoTitle: "Learn HTML Basics", link: "#" },
  { skill: "JavaScript", videoTitle: "JavaScript Crash Course", link: "#" },
  { skill: "React", videoTitle: "React for Beginners", link: "#" },
  { skill: "Node.js", videoTitle: "Intro to Node.js", link: "#" },
  { skill: "MongoDB", videoTitle: "MongoDB Basics", link: "#" },
  { skill: "CSS", videoTitle: "Learn CSS Basics", link: "#" },
  { skill: "Django", videoTitle: "Django Crash Course", link: "#" },
  { skill: "Flask", videoTitle: "Flask for Beginners", link: "#" },
  { skill: "Express.js", videoTitle: "Intro to Express.js", link: "#" },
  { skill: "MySQL", videoTitle: "MySQL Basics", link: "#" },
  { skill: "Angular.js", videoTitle: "Intro to Angular.js", link: "#" },
  { skill: "Python", videoTitle: "Python Programming", link: "#" }
];

const VideoRecommendations = ({ setPage }) => {
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    setShowModal(true);
  };

  const handleDoubtResponse = (hasDoubt) => {
    setShowModal(false);
    if (hasDoubt) {
      window.open("https://schoolhouse.world/", "_blank"); // Replace with actual link
    } else {
      setPage("quizPage"); // Proceed to next step
    }
  };

  const handleFinishLearning = () => {
    setPage("finalPage"); // Navigate to Final Page
  };

  return (
    <div className="video-recommendations-container">
      <h2 className="title"><strong>Recommended Learning Videos</strong></h2>
      <p className="subtitle">Based on your selected track, here are some curated learning materials:</p>
      
      <div className="video-list">
        {videoData.map((video, index) => (
          <div key={index} className="video-box">
            <h3 className="video-skill">{video.skill}</h3>
            <p className="video-title">{video.videoTitle}</p>
            <button 
              className="watch-button" 
              onClick={() => window.open(video.link, "_blank")}
            >
              Watch and Learn
            </button>
          </div>
        ))}
      </div>

      <button className="next-button" onClick={handleNext}>Next</button>
      <button className="finish-button" onClick={handleFinishLearning}>Finish Learning</button>

      {/* Modal for doubt confirmation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p className="modal-text">Do you have any doubts that need to be cleared?</p>
            <div className="modal-buttons">
              <button className="yes-button" onClick={() => handleDoubtResponse(true)}>Yes</button>
              <button className="no-button" onClick={() => handleDoubtResponse(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoRecommendations;
