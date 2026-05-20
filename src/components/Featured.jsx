import projects from "../data/projects";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Featured() {

  const project = projects[0];

  return (

    <section
      className="featured"
      data-aos="zoom-in"
    >

      <h2 className="featured-title">
        ⭐ Featured Project
      </h2>

      <div className="featured-card">

        <img
          src={project.image}
          alt={project.title}
          className="featured-img"
        />

        <h3 className="featured-heading">
          {project.title}
        </h3>

        <p className="featured-desc">
          {project.description}
        </p>

        <div className="featured-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="featured-btn github-btn"
          >
            <FaGithub />
            GitHub
          </a>

          {project.live && (

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="featured-btn live-btn"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          )}

        </div>

      </div>

    </section>
  );
}

export default Featured;