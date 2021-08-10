import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Difficulty from "./Components/Difficulty";
import Game from "./Components/Game";

function App() {
  const [mode, setMode] = useState(null); //1
  const [difficulty, setDifficulty] = useState(null);

  const page = () => {
    if (difficulty) return <Game difficulty={difficulty} />;
    if (mode) return <Difficulty setDifficulty={setDifficulty} />;
    return <Home setMode={setMode} />;
  }; //2

  return (
    <div className="App border my-5">
      {page()} {/*3*/}
      <div className="row">
        <div className="col-3">
          <button
            className="btn btn-danger mb-3"
            onClick={() => {
              setMode(null);
              setDifficulty(null);
            }}
          >
            Reset
          </button>{" "}
          {/* 4 */}
        </div>
      </div>
    </div>
  );
}

export default App;