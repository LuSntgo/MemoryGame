import React from "react";

// Components
import MultiplayerScore from "./MultiplayerScore";
import SingleplayerScore from "./SingleplayerScore";

const Score = ({ mode, score, failedFlips, playerTurn }) => {
  if (mode === "multi")
    return <MultiplayerScore score={score} playerTurn={playerTurn} />;
  return <SingleplayerScore failedFlips={failedFlips} />;
};

export default Score;