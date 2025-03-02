// CSS
import "./App.css";

// REACT
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setgameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // Starts the secret word game
  const startGame = () => {
    setgameStage(stages[1].name);
  };

  //  process the letter input
  const verifyLetter = () => {
    setgameStage(stages[2].name);
  };

  // Restarts the game

  const retry = () => {
    setgameStage(stages[0].name);
  };

  return (
    <div className="app">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
