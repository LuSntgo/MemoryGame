import React from "react";
import "./App.css";

//Data
import cards from "./data"; /* 1 */

// Card Back Image
import cardBack from "./images/CardBack.jpg";

function App() {
  let cardsGrid = cards.map(card => {
    return (
      <div className="col-3 my-1">
        <img
          className="mx-auto"
          src={cardBack}
          height="100%"
          width="100%"
          key="back"
        />
      </div>
    );
  }); /* 2 */

  return (
    <div className="App border my-5">
      <div className="container">
        <div className="row">
          {cardsGrid} {/* 3 */}
        </div>
      </div>
    </div>
  );
}

export default App;