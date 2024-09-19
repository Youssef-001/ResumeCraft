function RenderSkills({ skills }) {
  let newSkills = skills.split("\n");
  if (skills.length <= 0) return;
  return (
    <div className="container">
      {skills.length > 0 ? <p className="skills">Skills</p> : null}

      <ul>
        {newSkills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderSkills;
