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
    <>
      <h1>{fullName}</h1>
      <h3>{phone}</h3>
      <a href={email}>{email}</a>
      <a href={linkedin}>{linkedin}</a>
      <a href={github}>{github}</a>
      <h4>{uni}</h4>
      <h4>{degree}</h4>
      <h4>{gradYear}</h4>
    </>
  );
}

export default Info;
