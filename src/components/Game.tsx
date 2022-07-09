import { useContext, FunctionComponent } from "react";

import { StateContext } from "../context/state";

import { Board } from "./Board";
import "./Game.scss";

export const Game: FunctionComponent = () => {
  const state = useContext(StateContext);

  return (
    <div id="game">
      <div>Game: {state.game.id}</div>
      <div>Turn: {state.game.turn}</div>
      <Board />
    </div>
  );
};
