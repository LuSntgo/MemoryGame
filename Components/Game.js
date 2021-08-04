import React, { useState, useEffect } from "react"; //new import
//data
import allCards from "../data";
//utils
import { shuffle } from "./utils";
//Components
import Card from "./Card";

const Game = ({ difficulty }) => {
    const [cards, setCards] = useStates([]);
     //   const [flippedCards, changeFlipped] = useState([]);
    //Used to duplicate the amount of cards since we need two of each and 
    //shuffle them using the function defined at the top

    useEffect(() => {
let cards = allCards;
switch (difficulty){
    case "easy"
    cards = allCards.slide(0, 6);
    break;
    case "medium"
    cards = allCards.slide(0, 8);
    break;
    default:
    break;

}
setCards (() shuffle([...cards, ...cards]));
    }, [difficulty]); 

    let flippedCards = [];
    const changeFlipped = anArray =>{
        flippedCards = anArray;
    };
    const unflipCards = (unflip1, unflip2) => {
        setTimeout (() => {
            unflip1(false);
            unflip2(false);
        }, 1000 );
    };
    const checkFlipped = flippedObject => {
        changeFlipped([...flippedCards, flippedObject]);

        if (flippedCards.length === 2){
            if (flippedCards[0].id !== flippedCards[1].id){
                unflipCards(flippedCards[0].changeFlip, flippedCards[1].changeFlip);

            }
            changeFlipped([]);
        };
    };
    
    
    //Mapping through the array of cards and placing them in the card component
    const cardsGrid = cards.map((card, idx) => (
        <Card key={`${card.id}-${idx}`} card={card} checkFlipped={checkFlipper} /> 
    )); 
    return (
        <div className="container">
        <div className="row">
          <div className=" col-9">
            <div className="row border">{cardsGrid}</div>
            </div>
            </div>
            </div>

    );
};
export default Game;