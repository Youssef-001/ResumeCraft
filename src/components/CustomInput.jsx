import { useState } from "react";

function CustomInput({ id, classname, label, setName }) {
  const [value, setValue] = useState("");

  return (
    <div className={classname}>
      {/* <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setName(event.target.value);
        }}
      /> */}

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          {label}
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id={id}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setName(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default CustomInput;
