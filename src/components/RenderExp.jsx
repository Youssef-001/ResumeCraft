function RenderExp({ experience }) {
  console.log(experience);
  return (
    <>
      {experience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.title}</h3>
          <h4>
            {exp.startYear} - {exp.endYear}
          </h4>
          <p>{exp.company}</p>
          <ul>
            {exp.achievements.map((achieve, idx) => (
              <li key={idx}>{achieve}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default RenderExp;
