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
      <h1>{fullName}</h1>
      <div className="main-info">
        <p>{phone}</p>
        <a href={email}>{email}</a>
        <a href={linkedin}>{linkedin}</a>
        <a href={github}>{github}</a>
      </div>
      <div className="container">
        <p className="display-6">Education</p>
        <hr></hr>
        <div className="edu">
          <strong>
            <h4 className="display-6">{uni}</h4>
          </strong>
          <h4>{degree}</h4>
          <h4 className="gradYear">{gradYear}</h4>
        </div>
      </div>
    </div>
  );
}

export default Info;
