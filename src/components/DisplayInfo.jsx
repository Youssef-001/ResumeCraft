import { useState } from "react";
import CustomInput from "./CustomInput";

import Info from "./Info";

function DisplayInfo({ page = "two" }) {
  const [name, setName] = useState("joe");
  const [phone, setPhone] = useState("123-456-789");
  const [linkedin, setLinkedin] = useState("linkedin.com/joe");
  const [github, setGithub] = useState("github.com/yusef");
  const [mail, setEmail] = useState("pueudsan77@gmail.com");
  const [uni, setUni] = useState("El shorouk academy");
  const [degree, setDegree] = useState("Computer science");
  const [gradYear, setGradYear] = useState("2027");
  const [experience, setExperience] = useState([]);

  if (page == "one") {
    return (
      <>
        <div>
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
        <Info
          fullName={name}
          phone={phone}
          linkedin={linkedin}
          github={github}
          email={mail}
        ></Info>
      </>
    );
  } else if (page == "two")
    return (
      <>
        <div>
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
        <Info
          fullName={name}
          phone={phone}
          linkedin={linkedin}
          github={github}
          email={mail}
          uni={uni}
          degree={degree}
          gradYear={gradYear}
        ></Info>
      </>
    );
  else if (page == "3") {
    return <></>;
  }
}

export default DisplayInfo;
