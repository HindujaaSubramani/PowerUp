import React, { useState } from "react";
import "./SkillSelection.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB",
  "Python", "Django", "Machine Learning", "UI/UX Design"
];

const SkillSelection = ({ setPage }) => {
  const [knownSkills, setKnownSkills] = useState([]);
  const [unknownSkills, setUnknownSkills] = useState(skills);

  const toggleSkill = (skill) => {
    if (knownSkills.includes(skill)) {
      setKnownSkills(knownSkills.filter((s) => s !== skill));
      setUnknownSkills([...unknownSkills, skill]);
    } else {
      setKnownSkills([...knownSkills, skill]);
      setUnknownSkills(unknownSkills.filter((s) => s !== skill));
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h1 className="logo">⚡ Power Up</h1>
        <nav>
          <ul className="nav-links">
            <li onClick={() => setPage("about")}>ABOUT US</li>
            <li onClick={() => setPage("login")}>LOGIN</li>
          </ul>
        </nav>
      </div>

      <div className="skill-selection-container">
        <h2 className="title"><strong>Choose Your Current Skills</strong></h2>

        <div className="skills-section">
          <div className="skills-box">
            <h3>Known Skills</h3>
            {knownSkills.length > 0 ? (
              knownSkills.map((skill, index) => (
                <div key={index} className="skill-tag" onClick={() => toggleSkill(skill)}>
                  {skill} ❌
                </div>
              ))
            ) : (
              <p>No known skills selected</p>
            )}
          </div>

          <div className="skills-box">
            <h3>Unknown Skills</h3>
            {unknownSkills.length > 0 ? (
              unknownSkills.map((skill, index) => (
                <div key={index} className="skill-tag" onClick={() => toggleSkill(skill)}>
                  {skill} ✅
                </div>
              ))
            ) : (
              <p>All skills selected</p>
            )}
          </div>
        </div>

        <button className="next-button" onClick={() => setPage("videoRecommendations")}>Next</button>
      </div>
    </div>
  );
};

export default SkillSelection;
