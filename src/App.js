import { useState } from "react";
import CalcBody from "./components/CalcBody";
import Navbar from "./components/Navbar";


function App() {
  const [mode, setMode] = useState("bisque");
  document.body.style = `background: ${mode}`;
  console.log(mode);
  return (
  <>
    <Navbar mode = {mode} setMode = {setMode}/>
    <CalcBody mode = {mode} setMode = {setMode}/>
  </>
  );
}


export default App;