import React from "react";

const SingleplayerScore = ({ failedFlips }) => {
  return (
    <div className="col-3 mt-3">
      <div>
        <h6>Failed Attempts: {failedFlips} </h6>
      </div>
    </div>
  );
};

export default SingleplayerScore;