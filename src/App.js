import React from "react";
import useWordGame from "./useWordGame.js";
import "./App.css";

function App() {
  const {
    text,
    handleChange,
    gameState,
    inputRef,
    timer,
    handleClick,
    wordCount,
    speed,
  } = useWordGame();

  return (
    <div className="container">
      <h3>Start Typing below</h3>
      <textarea
        name="textarea"
        className="text-area"
        value={text}
        onChange={handleChange}
        disabled={!gameState}
        ref={inputRef}
      />
      <h2>
        Time remaining : {timer}
        <span> seconds</span>
      </h2>
      <button onClick={handleClick} disabled={gameState}>
        Start Game
      </button>
      <h3>words typed : {wordCount} </h3>
      <h3>
        speed : {speed} <span>wpm</span>
      </h3>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
