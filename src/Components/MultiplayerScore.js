import React from "react";

const MultiplayerScore = ({ score, playerTurn }) => {
  return (
    <div className="col-3 border">
      <h3>Score</h3>
      <table className="table table-responsive mx-auto">
        <thead>
          <tr>
            <th scope="col" className={playerTurn && "text-danger"}>
              Player 1
            </th>
            <th scope="col" className={!playerTurn && "text-danger"}>
              Player 2
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{score[0]}</td>
            <td>{score[1]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MultiplayerScore;