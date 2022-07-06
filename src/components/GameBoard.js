import React, { useState } from 'react';
import { boardDefault } from "../Words";
import Letter from "./Letter";

function GameBoard() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="board">
      {" "}
      <div className="row">
        <Letter letterPos={0} attemtVal={0}/>
        <Letter letterPos={1} attemtVal={0}/>
        <Letter letterPos={2} attemtVal={0}/>
        <Letter letterPos={3} attemtVal={0}/>
        <Letter letterPos={4} attemtVal={0}/>
      </div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
};

export default GameBoard;