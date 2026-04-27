import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            {/* Skills */}
            <div className="tech-stack">
              {p.tech.map((skill, i) => (
                <span key={i} className="tech-btn">
                  {skill}
                </span>
              ))}
            </div>

            {/* View Button */}
            <button
              className="view-btn"
              onClick={() => setSelectedProject(p)}
            >
              View Project
            </button>

            {/* Links */}
            <div className="links">
              <a href={p.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            
            {/* Close */}
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>

            {/* Image */}
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-img"
              />
            )}

            {/* Title */}
            <h2>{selectedProject.title}</h2>

            {/* Description */}
            <p style={{ whiteSpace: "pre-line" }}>
              {selectedProject.details}
            </p>

            {/* Skills */}
            <div className="tech-stack">
              {selectedProject.tech.map((skill, i) => (
                <span key={i} className="tech-btn">
                  {skill}
                </span>
              ))}
            </div>

            {/* Links inside modal */}
            <div className="links">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;