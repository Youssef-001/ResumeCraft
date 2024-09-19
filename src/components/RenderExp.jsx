function RenderExp({ experience }) {
  console.log(experience);
  // let achievmentss = experience.achievements.split("\n");
  // console.log(achievmentss);

  let newExp = experience.map((exp) => ({
    ...exp,
    achievements: exp.achievements.split("\n"),
  }));
  console.log(newExp);

  return (
    <div>
      {experience.length > 0 ? (
        <p className="exp container">Experience</p>
      ) : null}
      {newExp.map((exp, index) => (
        <div className="container" key={index}>
          <hr></hr>
          <div className="expYear">
            <h3>{exp.title}</h3>
            <h4 className="gradYear">
              {exp.startYear} - {exp.endYear}
            </h4>
          </div>
          <p className="title">{exp.company}</p>
          {/* <p>{exp.achievements}</p> */}
          <ul>
            {exp.achievements.map((achiev) => (
              <li> {achiev}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RenderExp;
