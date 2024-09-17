import { useState } from "react";
import CustomInput from "./CustomInput";

function Projects({ projects, setProjects }) {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [details, setDetails] = useState([]);

  const handleAddDetail = () => {
    setDetails((prevDet) => [...prevDet, detail]);
  };

  const handleAddProject = () => {
    let newProject = {
      name: name,
      details: details,
    };

    setProjects([...projects, newProject]);

    setName("");
    setDetails([]);
  };

  return (
    <>
      <CustomInput
        id="projectName"
        classname="projectName"
        label="Project name"
        setName={setName}
      ></CustomInput>

      <label htmlFor="details">Project Details: </label>
      <textarea
        placeholder="details"
        name="details"
        id="details"
        onChange={(e) => setDetail(e.target.value)}
      ></textarea>

      <button type="button" onClick={handleAddDetail}>
        Add detail
      </button>

      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
    </>
  );
}

export default Projects;
