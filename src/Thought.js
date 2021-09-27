import React from 'react';
import './App.css';

export function Thought(props) {
    const { thought, removeThought } = props;

    const handleRemoveClick = () => {
        removeThought(thought.id);
    }

    return (
        <li className="Thought">
            <div className="text">{thought.text}</div>
            <button
                className="remove-button"
                onClick={handleRemoveClick}
            >
                X
            </button>
        </li>
    )
}