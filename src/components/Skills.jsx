import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFastapi,
  SiPostgresql,
  SiNginx,
  SiGithub,
  SiGit,
} from "react-icons/si";

function Skills() {

  const skills = [

    {
      name: "React",
      icon: <FaReact />,
    },

    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },

    {
      name: "HTML",
      icon: <FaHtml5 />,
    },

    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },

    {
      name: "Responsive Design",
      icon: "📱",
    },

    {
      name: "React Router",
      icon: "🛣️",
    },

    {
      name: "Context API",
      icon: "⚛️",
    },

    {
      name: "REST API",
      icon: "🔗",
    },

    {
      name: "API Integration",
      icon: "🔌",
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },

    {
      name: "Express.js",
      icon: <SiExpress />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },

    {
      name: "Python",
      icon: <FaPython />,
    },

    {
      name: "FastAPI",
      icon: <SiFastapi />,
    },

    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },

    {
      name: "Git",
      icon: <SiGit />,
    },

    {
      name: "GitHub",
      icon: <SiGithub />,
    },

    {
      name: "Nginx",
      icon: <SiNginx />,
    },

    {
      name: "LangGraph",
      icon: "🤖",
    },

  ];

  return (

    <section
      id="skills"
      className="skills-section"
      data-aos="zoom-in"
    >

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="skill-card"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >

            <span className="skill-icon">
              {skill.icon}
            </span>

            <span>
              {skill.name}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;