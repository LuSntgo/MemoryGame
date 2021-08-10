import React, { useState } from "react";
import cardBack from "../images/CardBack.jpg";
import ReactCardFlip from "react-card-flip";

const Card = ({ card, checkFlipped }) => {
  const [flipped, changeFlip] = useState(false);

  const handleFlip = () => {
    if (flipped !== true) {
      changeFlip(true);

      checkFlipped({ id: card.id, changeFlip: changeFlip });
    }
  }; //1
  return (
    <div className="col-3 my-1">
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <img
          className="mx-auto"
          src={cardBack}
          //   used percentages instead of pixels to be responsive with the screen size
          height="100%"
          width="100%"
          key="front"
          onClick={() => handleFlip()} //2
        />

        <img
          className="mx-auto"
          src={card.front}
          //   used percentages instead of pixels to be responsive with the screen size
          height="100%"
          width="100%"
          key="back"
          onClick={() => handleFlip()} //2
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;