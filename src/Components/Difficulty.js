import React from "react";

const Difficulty = ({ setDifficulty }) => {
  return (
    <div className="container">
      <div className="jumbotron m-5">
        <div className="">
          <h1>Choose the difficulty</h1>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success mb-3"
            onClick={() => setDifficulty("easy")} 
          >
            Easy 4x3
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-warning mb-3"
            onClick={() => setDifficulty("medium")} 
          >
            Medium 4x4
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger "
            onClick={() => setDifficulty("hard")} 
          >
            Hard 4x5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Difficulty;