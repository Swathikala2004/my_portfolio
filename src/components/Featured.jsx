import projects from "../data/projects";

function Featured() {
  const project = projects[0];

  return (
    <section className="featured">
      <h2 className="featured-title">⭐ Featured Project</h2>

      <div className="featured-card">
        <img
          src={project.image}
          alt={project.title}
          className="featured-img"
        />

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="links">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Featured;