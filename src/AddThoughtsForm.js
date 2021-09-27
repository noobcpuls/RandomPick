import React, { useState } from 'react';
import { generateId } from './Utilities';
import './App.css';


export function AddThoughtForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const thought = {
            id: generateId(),
            text: text
        }
        if (text.length > 0) {
            props.addThought(thought);
            setText('');
        }
    }

    return (
        <form className="text-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="내용을 입력하세요."
                value={text}
                onChange={handleTextChange} />
            <input type="submit" value="추가" />
        </form>
    )
}