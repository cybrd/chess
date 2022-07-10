import { useContext, FunctionComponent } from "react";

import { StateContext } from "../context/state";

import { getPossibleMoves } from "../services/possible-moves";
import { blackPieces, whitePieces } from "../models/game";

export const BoardTile: FunctionComponent<{
  children: string;
  row: number;
  column: number;
}> = (prop) => {
  const state = useContext(StateContext);

  let owner = "blank";
  if (whitePieces.indexOf(prop.children) !== -1) {
    owner = "white";
  }
  if (blackPieces.indexOf(prop.children) !== -1) {
    owner = "black";
  }

  const handleSelect = (r: number, c: number) => {
    return () => {
      if (state.game.turn % 2 === 1 && owner === "white") {
        getPossibleMoves(state, [r, c]);
      }

      if (state.game.turn % 2 === 0 && owner === "black") {
        getPossibleMoves(state, [r, c]);
      }
    };
  };

  return (
    <div className={owner} onClick={handleSelect(prop.row, prop.column)}>
      {!prop.children ? "\u00A0" : prop.children.slice(0, 1)}
    </div>
  );
};
