import React from "react";

function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "LangGraph"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="tech-btn">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;