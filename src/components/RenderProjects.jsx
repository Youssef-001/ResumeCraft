function RenderProjects({ projects }) {
  let newProjects = projects.map((project) => ({
    ...project,
    details: project.details.split("\n"),
  }));
  return (
    <div>
      {projects.length > 0 ? (
        <p className="projects container">Projects</p>
      ) : null}
      {newProjects.map((project, index) => (
        <div className="container" key={index}>
          <hr></hr>
          <h3>{project.name}</h3>
          <ul>
            {project.details.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RenderProjects;
