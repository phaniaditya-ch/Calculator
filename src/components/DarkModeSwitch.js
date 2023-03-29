import React from 'react'
import darkLightImg from './—Pngtree—dark mode icon light png_6661697.png'

export default function DarkModeSwitch(props) {
    let handleChange = () => {
        if(props.mode === "black")
        props.setMode("bisque");
        else
        props.setMode("black");
        console.log(props.mode);
    }
    return (<>
        <div className="form-check form-switch">
        <img src={darkLightImg} alt='darkmode'/>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleChange}/>
        </div>
    </>
    )
}
