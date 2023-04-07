import { useState } from "react";
import CalcBody from "./components/CalcBody";
import Navbar from "./components/Navbar";
import { Link, BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("bisque");
  document.body.style = `background: ${mode}`;
  console.log(mode);
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} setMode={setMode} />
        {/* <Route element="<CalcBody />"> */}
        <CalcBody mode={mode} setMode={setMode} />
        {/* </Route> */}
      {/* </Router> */}
    </>
  );
}


export default App;