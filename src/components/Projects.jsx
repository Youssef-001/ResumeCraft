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
      details: detail,
    };

    setProjects([...projects, newProject]);

    setName("");
    setDetails("");
  };

  return (
    <div className="projects-div">
      <CustomInput
        id="projectName"
        classname="projectName"
        label="Project name"
        setName={setName}
      ></CustomInput>

      {/* <label htmlFor="details">Project Details: </label>
      <textarea
        placeholder="details"
        name="details"
        id="details"
        onChange={(e) => setDetail(e.target.value)}
      ></textarea> */}

      <div className="mb-3">
        <label htmlFor="details" className="form-label">
          Add project details
        </label>
        <textarea
          placeholder="details"
          name="details"
          id="details"
          onChange={(e) => setDetail(e.target.value)}
          className="form-control"
          rows="3"
        ></textarea>
      </div>

      <button
        className="btn btn-secondary btn-sm"
        type="button"
        onClick={handleAddProject}
      >
        Add Project
      </button>
    </div>
  );
}

export default Projects;
