import { Game, emptyTiles } from "../models/game";

export const getPossibleMoves = (
  boardData: Game["board"],
  whichPiece: [number, number]
) => {
  const row = whichPiece[0];
  const column = whichPiece[1];

  const boardOverlay: string[][] = JSON.parse(JSON.stringify(emptyTiles));
  boardOverlay[row][column] = "selected";

  if (boardData[row][column] === "♙") {
    if (row - 1 >= 0 && row - 1 <= 7) {
      boardOverlay[row - 1][column] = "possible";
    }
    if (row - 2 >= 0 && row - 2 <= 7) {
      boardOverlay[row - 2][column] = "possible";
    }
  }

  if (boardData[row][column] === "♟") {
    if (row + 1 >= 0 && row + 1 <= 7) {
      boardOverlay[row - 1][column] = "possible";
    }
    if (row + 2 >= 0 && row + 2 <= 7) {
      boardOverlay[row + 2][column] = "possible";
    }
  }

  return boardOverlay;
};
