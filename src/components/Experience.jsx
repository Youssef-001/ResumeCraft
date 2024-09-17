import CustomInput from "./CustomInput";
import { useState } from "react";

function Experience({ experiences, setExperience }) {
  const [achievement, setAchievement] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const handleAddAchievement = () => {
    setAchievements((prevAchievements) => [...prevAchievements, achievement]);

    // Clear the achievement input field
    setAchievement("");
  };

  const handleAddExperience = () => {
    const newExperience = {
      title: title,
      company: company,
      achievements: achievements,
      startYear: startYear,
      endYear: endYear,
    };

    // Update the experiences array
    setExperience([...experiences, newExperience]);

    // Clear the input fields
    setTitle("");
    setCompany("");
    setStartYear("");
    setEndYear("");
    setAchievements([]);
  };

  return (
    <>
      <CustomInput
        id="expTitle"
        classname="expTitle"
        label="Experience title"
        setName={setTitle}
      />

      <CustomInput
        id="company"
        classname="company"
        label="Company name"
        setName={setCompany}
      />

      <textarea
        value={achievement}
        onChange={(e) => setAchievement(e.target.value)}
        name="achievement"
        id="achievement"
        placeholder="Enter an achievement"
      ></textarea>

      <div>
        <label htmlFor="startYear">Start year</label>
        <input
          type="date"
          name="startYear"
          id="startYear"
          onChange={(e) => setStartYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endYear">End year</label>
        <input
          type="date"
          name="endYear"
          id="endYear"
          onChange={(e) => setEndYear(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleAddAchievement}>
        Add achievement
      </button>

      <button type="button" onClick={handleAddExperience}>
        Add experience
      </button>

      {/* <ul>
        {achievements.map((achieve, index) => (
          <li key={index}>{achieve}</li>
        ))}
      </ul> */}
    </>
  );
}

export default Experience;