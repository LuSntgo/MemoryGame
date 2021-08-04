import React, { useState} from "react";
import ReactCardFlip from "react-card-flip"; /*1*/
import cardBack from "../images/CardBack.jpg";

/* 1 */ 

const Card = ({ card }) => { /* 3*/
    const [flipped, changeFlip] = useState(false); /*1*/
    /*3*/
    const handleFlip =() => {
        changeFlip(!flipped);;
    }
    return (
        <div className="col-3 my-1">
            { /* 2 */ }
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <img className ="mx-auto" 
            src={cardBack} {/*3*/}
            
            height="100%"
            width="100%"
            key="front" 
            onClick={() => handleFlip()} 
            />
         <img className ="mx-auto" 
            src={card.front} 
            height="100%"
            width="100%"
            key="back" 
            onClick={() => handleFlip()}  />
            </ReactCardFlip>
        </div>
    );
};

export default Card; 
/* 3 */
