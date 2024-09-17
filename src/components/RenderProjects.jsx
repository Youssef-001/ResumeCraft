function RenderProjects({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <ul>
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RenderProjects;
