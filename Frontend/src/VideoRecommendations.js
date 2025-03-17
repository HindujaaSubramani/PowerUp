import React from "react";
import "./VideoRecommendations.css";

const videoData = [
  { skill: "HTML & CSS", videoTitle: "Learn HTML & CSS Basics", link: "#" },
  { skill: "JavaScript", videoTitle: "JavaScript Crash Course", link: "#" },
  { skill: "React", videoTitle: "React for Beginners", link: "#" },
  { skill: "Node.js", videoTitle: "Intro to Node.js", link: "#" },
  { skill: "MongoDB", videoTitle: "MongoDB Basics", link: "#" }
];

const VideoRecommendations = ({ setPage }) => {
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
      <button className="next-button" onClick={() => setPage("nextPage")}>
        Next
      </button>
    </div>
  );
};

export default VideoRecommendations;
