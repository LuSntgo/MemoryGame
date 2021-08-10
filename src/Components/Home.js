import React from "react";

const Home = ({ setMode }) => {
  return (
    <div className="container">
      <div className="jumbotron m-5">
        <h1 className="mb-5">Can you remember?</h1>
        <div>
          <button
            type="button"
            className="btn btn-warning mb-3"
            onClick={() => setMode("single")}
          >
            Single Player
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => setMode("multi")}
          >
            Multi Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;