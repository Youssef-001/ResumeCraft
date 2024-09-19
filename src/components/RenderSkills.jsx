function RenderSkills({ skills }) {
  let newSkills = skills.split("\n");
  return (
    <div className="container">
      <p className="skills">Skills</p>
      <ul>
        {newSkills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderSkills;
