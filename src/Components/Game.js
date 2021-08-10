import React, { useState, useEffect } from "react";

// Data
import allCards from "../data";

// Utils
import { shuffle } from "../utils";

// Components
import Card from "./Card";
import Score from "./Score";

const Game = ({ mode, difficulty }) => {
  const [cards, setCards] = useState([]);
  //   const [flippedCards, changeFlipped] = useState([]);

  //Used to duplicate the amount of cards since we need two of each and shuffle them using the function defined at the top
  useEffect(() => {
    let cards = allCards;
    switch (difficulty) {
      case "easy":
        cards = allCards.slice(0, 6);
        break;
      case "medium":
        cards = allCards.slice(0, 8);
        break;
      default:
        break;
    }
    setCards(() => shuffle([...cards, ...cards]));
  }, [difficulty]);

  //To Store player score and pass them
  const [score, setScore] = useState([0, 0]); //1

  //To know which player's turn it is
  const [playerTurn, setPlayerTurn] = useState(true); //2
  const [failedFlips, increaseFailed] = useState(0); //3

  let flippedCards = [];
  const changeFlipped = anArray => {
    flippedCards = anArray;
  };

  const unflipCards = (unflip1, unflip2) => {
    setTimeout(() => {
      unflip1(false);
      unflip2(false);
    }, 1000);
  };

  const checkFlipped = flippedObject => {
    changeFlipped([...flippedCards, flippedObject]);

    if (flippedCards.length === 2) {
      if (flippedCards[0].id !== flippedCards[1].id) {
        unflipCards(flippedCards[0].changeFlip, flippedCards[1].changeFlip);
        increaseFailed(failedFlips + 1); //4
        setPlayerTurn(!playerTurn); //5
      } else {
        if (mode === "multi") {
          if (playerTurn) {
            //6
            setScore([(score[0] += 1), score[1]]);
          } else {
            setScore([score[0], (score[1] += 1)]);
          }
        }
      }
      changeFlipped([]);
    }
  };

  //Mapping through the array of cards and placing them in the card component
  const cardList = cards.map((card, idx) => (
    <Card key={`${card.id}-${idx}`} card={card} checkFlipped={checkFlipped} />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className=" col-9">
          <div className="row border">{cardList}</div>
        </div>
        <Score //7
          mode={mode}
          score={score}
          failedFlips={failedFlips}
          playerTurn={playerTurn}
        />
      </div>
    </div>
  );
};

export default Game;