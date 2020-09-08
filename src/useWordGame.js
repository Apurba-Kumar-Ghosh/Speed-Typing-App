import { useState, useRef, useEffect } from "react";

function useWordGame(defaultValue = 60) {
  const START_TIME = defaultValue;
  const [timer, setTimer] = useState(START_TIME);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [gameState, setGameState] = useState(false);
  const [speed, setSpeed] = useState(null);
  const inputRef = useRef(null);

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleClick() {
    setWordCount(0);
    setText("");
    inputRef.current.disabled = false;
    inputRef.current.focus();
    setGameState(true);
  }
  function wordCounter(data) {
    const wordArr = data
      .trim()
      .split(" ")
      .filter((word) => word !== "");
    return wordArr.length;
  }
  function startGame() {
    let timerId = setTimeout(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return timerId;
  }
  function endGame() {
    setGameState(false);
    const answer = wordCounter(text);
    setWordCount(answer);
    setSpeed((answer / START_TIME) * 60);
    setText("");
    setTimer(START_TIME);
  }

  useEffect(() => {
    if (timer > 0 && gameState === true) {
      startGame();
    } else if (timer <= 0) {
      endGame();
    }
  }, [timer, gameState]);
  return {
    text,
    handleChange,
    gameState,
    inputRef,
    timer,
    handleClick,
    wordCount,
    speed,
  };
}
export default useWordGame;
