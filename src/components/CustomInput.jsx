import { useState } from "react";

function CustomInput({ id, classname, label, setName }) {
  const [value, setValue] = useState("");

  return (
    <div className={classname}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setName(event.target.value);
        }}
      />
    </div>
  );
}

export default CustomInput;
