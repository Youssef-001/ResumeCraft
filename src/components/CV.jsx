import DisplayInfo from "./DisplayInfo";
import { useState } from "react";
function CV() {
  let [current, setCurrent] = useState(1);
  return (
    <>
      <DisplayInfo page={current}></DisplayInfo>
      <div className="btns">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            current < 5 ? setCurrent(current + 1) : null;
          }}
        >
          Next
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            current > 1 ? setCurrent(current - 1) : null;
          }}
        >
          Previous
        </button>

        <button onClick={(e) => window.print()} className="btn btn-success">
          Print
        </button>
      </div>
    </>
  );
}

export default CV;
