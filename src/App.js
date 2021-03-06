import React, { useState } from 'react';
import { AddThoughtForm } from './AddThoughtsForm';
import { generateId } from './Utilities';
import { Thought } from './Thought';
import { Result } from './Result';
import './App.css';

function App() {
  const iniThought = {
    id: generateId(),
    text: "오늘 죽어도 떡볶이는 먹고 싶어."
  }
  
  const [thoughts, setThoughts] = useState([iniThought]);

  const [authorized, setAuthorized] = useState(false);
  const [result, setResult] = useState('');

  const addThought = (thought) => {
    setThoughts((prev) => [thought, ...prev]);
  }

  const setRandomThought = () => {
    const selected = Math.floor(Math.random() * thoughts.length)
    return thoughts[selected];
  }

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((prev) => 
      prev.filter((thought) => thought.id !== thoughtIdToRemove)
    )
  }

  const handleClick = () => {
    if (thoughts.length > 0) {
      setAuthorized(true);
      const resulted = setRandomThought();
      setResult(resulted.text);
    }

  }

  const handleResultClick = () => {
    setAuthorized(false);
    setThoughts([iniThought]);
  }

  if (!authorized) {
    return (
      <div className="App">
      <header className="header">
        <h1 className="title">Random Pick Up</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought 
              key={thoughts.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
        <button 
          onClick={handleClick}
          className="submit-button"
        >Let's ROLL!</button>
      </main>
      <footer>
        <h1 className="myinfo">Want more my infomation? Please visit <a href="https://webgradients.com/">MY HOMEPAGE</a></h1>
      </footer>
    </div>
    );
  }
  else {
    return (
      <div className="result-form">
        <Result result={result} />
        <button 
          id="go-back-home"
          onClick={handleResultClick}
        >다시 뽑기</button>
      </div>
    )
  }
}

export default App;
