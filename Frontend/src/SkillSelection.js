import React, { useState } from "react";
import "./SkillSelection.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB",
  "Python", "Django", "Flask","Express.js","Angular.js","MySQL"
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
    <div className="skill-selection-container">
      <h2><strong>Choose Your Current Skills</strong></h2>

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

      {/* Navigates to VideoRecommendations page */}
      <button className="next-button" onClick={() => setPage("videoRecommendations")}>
        Next
      </button>
      <button className="Take-test" onClick={() => setPage("quizPage")}>
        Take Test
      </button>
    </div>
  );
};

export default SkillSelection;
