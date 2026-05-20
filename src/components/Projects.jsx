import { useState } from "react";
import projects from "../data/projects";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="projects-section"
      data-aos="fade-up"
    >
      {!selectedProject && (
        <>
          <h2>My Projects</h2>

          <div className="projects-grid">
            {projects.map((p, index) => (
              <div
                key={index}
                className="card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="project-img"
                  />
                )}

                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className="tech-stack">
                  {p.tech.map((skill, i) => (
                    <span key={i} className="tech-btn">
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  className="view-btn"
                  onClick={() => setSelectedProject(p)}
                >
                  View Project
                </button>

                <div className="project-buttons">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn github-btn"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn live-btn"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedProject && (
        <div className="project-detail" data-aos="fade-up">
          {selectedProject.image && (
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="detail-img"
            />
          )}

          <h2>{selectedProject.title}</h2>

          <p style={{ whiteSpace: "pre-line" }}>
            {selectedProject.details}
          </p>

          <div className="tech-stack">
            {selectedProject.tech.map((skill, i) => (
              <span key={i} className="tech-btn">
                {skill}
              </span>
            ))}
          </div>

          <div className="project-buttons">
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn github-btn"
              >
                <FaGithub />
                GitHub
              </a>
            )}

            {selectedProject.live && (
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="btn live-btn"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
          </div>

          <button
            className="back-btn"
            onClick={() => setSelectedProject(null)}
          >
            ⬅ Back
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;