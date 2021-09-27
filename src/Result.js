import React from 'react';
import './App.css';


export function Result(props) {
    return (
        <div className="selected-form">
            <h1 id="result-h1">결과</h1>
            <p id="result-p">{props.result}</p>
        </div>
    )
}