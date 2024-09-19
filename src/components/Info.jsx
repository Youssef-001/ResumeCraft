function Info({
  fullName,
  phone,
  email,
  linkedin,
  github,
  uni,
  degree,
  gradYear,
}) {
  return (
    <div>
      <h1>{fullName} </h1>
      <div className="main-info">
        <p>{phone} | </p>
        <a href={email}>{email} | </a>
        <a href={linkedin}>{linkedin} | </a>
        <a href={github}>{github}</a>
      </div>
      <div className="container">
        <p className="education">Education</p>
        <hr></hr>
        <div className="edu">
          <strong>
            <h4 className="uni">{uni}</h4>
          </strong>
          <div className="degree">
            <h4 className="deg">{degree}</h4>
            <h4 className="gradYear">{gradYear}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
