import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Info from "./components/Info";
import InfoInput from "./components/CustomInput";
import CV from "./components/CV";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CV></CV>
    </>
  );
}

export default App;
