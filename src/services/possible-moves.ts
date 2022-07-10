import { Game, emptyTiles } from "../models/game";

import { moves as pawnWhiteMoves } from "./moves/pawn-white";
import { moves as pawnBlackMoves } from "./moves/pawn-black";

export const getPossibleMoves = (
  boardData: Game["board"],
  whichPiece: [number, number]
) => {
  const row = whichPiece[0];
  const column = whichPiece[1];

  switch (boardData[row][column]) {
    case "♙":
      return pawnWhiteMoves(boardData, whichPiece);
    case "♟":
      return pawnBlackMoves(boardData, whichPiece);
    default:
      return JSON.parse(JSON.stringify(emptyTiles));
  }
};
