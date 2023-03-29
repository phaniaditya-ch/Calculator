import React from 'react';
import { useState } from 'react';
import { evaluate, string } from 'mathjs';

function CalcBody(props) {
    let equalCheck = false;
    let [result, setResult] = useState("");
    let handleClick = (event) => {
        setResult(result === "Error" ? event.target.innerHTML : string(result + event.target.innerHTML));
    }

    let handleChange = (event) => {

        setResult(event.target.value);
    }

    let handleEqualClick = () => {
        try{
        setResult(evaluate(result));
        }
        catch{
            setResult("Error");
        }
        equalCheck = true;
    }

    let handleClearClick = () => {
        setResult("");
    }

    let handleCClick = () => {
        if(equalCheck === true)
        {
            setResult("");
        }
        else
        {
            try{
            setResult(result.slice(0,-1));
            }
            catch{
                setResult("");
            }
        }
        equalCheck = false;
    }
    return (
        <>
            <div className="whole">
                <div className="container">
                    <form>
                        <input type="text" onChange={handleChange} value={result} />
                    </form>
                    <div className="keypad">
                        <button onClick={handleClearClick} className="highlight" id='clear'>Clear</button>
                        <button onClick={handleCClick} className="highlight" >C</button>
                        <button onClick={handleClick} className="highlight">/</button>
                        <button onClick={handleClick} >7</button>
                        <button onClick={handleClick} >8</button>
                        <button onClick={handleClick} >9</button>
                        <button onClick={handleClick} className="highlight">*</button>
                        <button onClick={handleClick} >4</button>
                        <button onClick={handleClick} >5</button>
                        <button onClick={handleClick} >6</button>
                        <button onClick={handleClick} className="highlight">-</button>
                        <button onClick={handleClick} >1</button>
                        <button onClick={handleClick} >2</button>
                        <button onClick={handleClick} >3</button>
                        <button onClick={handleClick} className="highlight" id='plus'>&#43;</button>
                        <button onClick={handleClick} >0</button>
                        <button onClick={handleClick} >.</button>
                        <button onClick={handleEqualClick} className="highlight" id="equal" >=</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalcBody;