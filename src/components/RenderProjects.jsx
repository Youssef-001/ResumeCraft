function RenderProjects({ projects }) {
  let newProjects = projects.map((project) => ({
    ...project,
    details: project.details.split("\n"),
  }));
  return (
    <div>
      {newProjects.map((project, index) => (
        <div className="container" key={index}>
          <hr></hr>
          <h2>{project.name}</h2>
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
