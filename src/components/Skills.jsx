import { useState } from "react";

function Skills({ setSkills }) {
  return (
    <div className="skills-div">
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Add skills</label>
        <textarea
          className="form-control"
          id="exampleFormContrlTextarea1"
          rows="3"
          onInput={(e) => setSkills(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
export default Skills;
