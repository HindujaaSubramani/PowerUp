import React from "react";
import "./LoginPage.css"; 

const AboutUs = ({ setPage }) => {
  return (
    <div className="container">
      <div className="top-banner">
        Every hour you invest in learning today multiplies your success tomorrow
      </div>

      <h2>About Us</h2>
      <p>
        We are revolutionizing professional growth with an AI-driven web platform 
        that identifies skill gaps, delivers personalized learning paths, and 
        connects users with expert freelance mentors. 
      </p>

      <h3>What We Offer:</h3>
      <ul>
      <li><span role="img" aria-label="rocket">🚀</span> AI-Powered Skill Evaluation</li>
      <li><span role="img" aria-label="books">📚</span> Personalized Learning Recommendations</li>
      <li><span role="img" aria-label="teacher">👨‍🏫</span> Freelance Mentorship</li>
      <li><span role="img" aria-label="chart">📊</span> Proficiency Testing</li>

      </ul>

      {/* Button to go back to login */}
      <button onClick={() => setPage("login")}>Back to Login</button>
    </div>
  );
};

export default AboutUs;
