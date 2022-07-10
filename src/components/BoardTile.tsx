import { useContext, FunctionComponent } from "react";

import { StateContext } from "../context/state";

import { getPossibleMoves } from "../services/possible-moves";

export const BoardTile: FunctionComponent<{
  children: string;
  row: number;
  column: number;
}> = (prop) => {
  const state = useContext(StateContext);

  let owner = "blank";
  if (["♜", "♞", "♝", "♛", "♚", "♟"].indexOf(prop.children) !== -1) {
    owner = "black";
  }
  if (["♖", "♘", "♗", "♕", "♔", "♙"].indexOf(prop.children) !== -1) {
    owner = "white";
  }

  const handleSelect = (r: number, c: number) => {
    return () => {
      if (state.game.turn % 2 === 1 && owner === "white") {
        state.game.boardOverlay = getPossibleMoves(state.game.board, [r, c]);
        state.updateGame(state.game);
      }

      if (state.game.turn % 2 === 0 && owner === "black") {
        state.game.boardOverlay = getPossibleMoves(state.game.board, [r, c]);
        state.updateGame(state.game);
      }
    };
  };

  return (
    <div className={owner} onClick={handleSelect(prop.row, prop.column)}>
      {!prop.children ? "\u00A0" : prop.children}
    </div>
  );
};
