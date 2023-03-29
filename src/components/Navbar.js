import React from 'react'
import DarkModeSwitch from './DarkModeSwitch';

function Navbar(props) {
  return (
    <div className='navbar'>
      <div className="calc-heading"><h1>CALCULATOR</h1></div>
      <div className="darkModeSwitch">
        <DarkModeSwitch mode = {props.mode} setMode = {props.setMode}/>
      </div>
    </div>
  )
}

export default Navbar;