import { useState } from "react";
import CustomInput from "./CustomInput";

import Info from "./Info";

import Experience from "./Experience";
import RenderExp from "./RenderExp";
import Projects from "./Projects";
import RenderProjects from "./RenderProjects";

import RenderCv from "./RenderCV";

function DisplayInfo({ page = 1 }) {
  const [name, setName] = useState("joe");
  const [phone, setPhone] = useState("123-456-789");
  const [linkedin, setLinkedin] = useState("linkedin.com/joe");
  const [github, setGithub] = useState("github.com/yusef");
  const [mail, setEmail] = useState("pueudsan77@gmail.com");
  const [uni, setUni] = useState("El shorouk academy");
  const [degree, setDegree] = useState("Computer science");
  const [gradYear, setGradYear] = useState("2027");
  const [experience, setExperience] = useState([]);

  const [projects, setProjects] = useState([]);

  if (page == 1) {
    return (
      <>
        <div className="info-div">
          <CustomInput
            id="name"
            label="Full name: "
            classname="full-name"
            setName={setName}
          ></CustomInput>
          <CustomInput
            id="phone"
            label="Phone number: "
            classname="phone"
            setName={setPhone}
          ></CustomInput>
          <CustomInput
            id="email"
            label="Email: "
            classname="email"
            setName={setEmail}
          ></CustomInput>
          <CustomInput
            id="linkedin"
            label="LinkedIn: "
            classname="linkedin"
            setName={setLinkedin}
          ></CustomInput>
          <CustomInput
            id="github"
            label="Github: "
            classname="github"
            setName={setGithub}
          ></CustomInput>
        </div>

        <RenderCv
          fullName={name}
          phone={phone}
          linkedin={linkedin}
          github={github}
          mail={mail}
          uni={uni}
          degree={degree}
          gradYear={gradYear}
          projects={projects}
          experience={experience}
        ></RenderCv>
      </>
    );
  } else if (page == 2)
    return (
      <>
        <div className="grad-div">
          <CustomInput
            id="uni"
            classname="uni"
            label="Institution Name"
            setName={setUni}
          ></CustomInput>
          <CustomInput
            id="degree"
            classname="degree"
            label="Degree "
            setName={setDegree}
          ></CustomInput>

          <CustomInput
            id="grad-year"
            classname="grad-year"
            label="Graduation year:  "
            setName={setGradYear}
          ></CustomInput>
        </div>

        <RenderCv
          fullName={name}
          phone={phone}
          linkedin={linkedin}
          github={github}
          mail={mail}
          uni={uni}
          degree={degree}
          gradYear={gradYear}
          projects={projects}
          experience={experience}
        ></RenderCv>
      </>
    );
  else if (page == 3) {
    return (
      <>
        <Experience
          experiences={experience}
          setExperience={setExperience}
        ></Experience>

        <RenderCv
          fullName={name}
          phone={phone}
          linkedin={linkedin}
          github={github}
          mail={mail}
          uni={uni}
          degree={degree}
          gradYear={gradYear}
          projects={projects}
          experience={experience}
        ></RenderCv>
      </>
    );
  } else if (page == 4) {
    return (
      <>
        <Projects projects={projects} setProjects={setProjects}></Projects>

        <RenderCv
          fullName={name}
          phone={phone}
          linkedin={linkedin}
          github={github}
          mail={mail}
          uni={uni}
          degree={degree}
          gradYear={gradYear}
          projects={projects}
          experience={experience}
        ></RenderCv>
      </>
    );
  }
}

export default DisplayInfo;
