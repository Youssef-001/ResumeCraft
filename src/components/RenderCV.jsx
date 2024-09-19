import Info from "./Info";
import RenderExp from "./RenderExp";
import RenderProjects from "./RenderProjects";
import RenderSkills from "./RenderSkills";

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
  skills,
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

      <RenderExp experience={experience}></RenderExp>

      <RenderProjects projects={projects}></RenderProjects>
      <RenderSkills skills={skills}></RenderSkills>
    </div>
  );
}

export default RenderCv;
