import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">

      {/* ================= PROJECT LIST ================= */}
      {!selectedProject && (
        <>
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

                {/* 🔥 BUTTONS (UPDATED) */}
                <div className="project-buttons">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn github-btn"
                    >
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
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= PROJECT DETAILS ================= */}
      {selectedProject && (
        <div className="project-detail">

          {/* IMAGE */}
          {selectedProject.image && (
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="detail-img"
            />
          )}

          {/* TITLE */}
          <h2>{selectedProject.title}</h2>

          {/* DESCRIPTION */}
          <p style={{ whiteSpace: "pre-line" }}>
            {selectedProject.details}
          </p>

          {/* SKILLS */}
          <div className="tech-stack">
            {selectedProject.tech.map((skill, i) => (
              <span key={i} className="tech-btn">
                {skill}
              </span>
            ))}
          </div>

          {/* 🔥 BUTTONS (UPDATED) */}
          <div className="project-buttons">
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="btn github-btn"
            >
              GitHub
            </a>

            {selectedProject.live && (
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="btn live-btn"
              >
                Live Demo
              </a>
            )}
          </div>

          {/* BACK BUTTON */}
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