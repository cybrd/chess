import { IStateContext } from "../context/state";

import { moves as pawnWhiteMoves } from "./moves/pawn-white";
import { moves as pawnBlackMoves } from "./moves/pawn-black";

export const getPossibleMoves = (
  state: IStateContext,
  whichPiece: [number, number]
) => {
  const row = whichPiece[0];
  const column = whichPiece[1];

  switch (state.game.board[row][column]) {
    case "♙":
      pawnWhiteMoves(state, whichPiece);
      break;
    case "♟":
      pawnBlackMoves(state, whichPiece);
      break;
  }

  state.setGame({ ...state.game });
};
