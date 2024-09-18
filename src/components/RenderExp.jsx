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
    <>
      {newExp.map((exp, index) => (
        <div className="container" key={index}>
          <hr></hr>
          <h3>{exp.title}</h3>
          <h4 className="gradYear">
            {exp.startYear} - {exp.endYear}
          </h4>
          <p>{exp.company}</p>
          {/* <p>{exp.achievements}</p> */}
          <ul>
            {exp.achievements.map((achiev) => (
              <li> {achiev}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default RenderExp;
