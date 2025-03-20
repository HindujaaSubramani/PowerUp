import React, { useState } from "react";
import "./AboutUs.css"; // Ensure the correct filename and path

const AboutUs = ({ setPage }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="aboutus-container">
      {/* Top Banner */}
      <div className="top-banner">
        Every hour you invest in learning today multiplies your success tomorrow
      </div>

      {/* Main Content */}
      <div className="aboutus-content">
        <h2>About Us</h2>
        <p>
          We are revolutionizing professional growth with an AI-driven web platform 
          that identifies skill gaps, delivers personalized learning paths, and 
          connects users with expert freelance mentors.
        </p>

        <h3>What We Offer:</h3>
        <ul>
          {[
            { icon: "🚀", text: "AI-Powered Skill Evaluation" },
            { icon: "📚", text: "Personalized Learning Recommendations" },
            { icon: "👨‍🏫", text: "Freelance Mentorship" },
            { icon: "📊", text: "Proficiency Testing" },
          ].map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={hovered === index ? "highlight" : ""}
            >
              <span role="img" aria-label="icon">
                {item.icon}
              </span>
              {item.text}
            </li>
          ))}
        </ul>

        <button className="back-button" onClick={() => setPage("login")}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
