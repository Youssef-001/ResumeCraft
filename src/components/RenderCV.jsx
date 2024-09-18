import Info from "./Info";
import RenderExp from "./RenderExp";
import RenderProjects from "./RenderProjects";

function RenderCv({
  projects,
  experience,
  fullName,
  phone,
  linkedin,
  github,
  mail,
  uni,
  degree,
  gradYear,
}) {
  return (
    <div className="cv">
      <Info
        fullName={fullName}
        phone={phone}
        linkedin={linkedin}
        github={github}
        email={mail}
        uni={uni}
        degree={degree}
        gradYear={gradYear}
      ></Info>
      {experience.length > 0 ? <p className="display-6">Experience</p> : null}
      <RenderExp experience={experience}></RenderExp>
      {projects.length > 0 ? <p className="display-6">Projects</p> : null}
      <RenderProjects projects={projects}></RenderProjects>
    </div>
  );
}

export default RenderCv;
