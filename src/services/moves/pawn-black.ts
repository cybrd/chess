import { Game, emptyTiles } from "../../models/game";

export const moves = (
  boardData: Game["board"],
  whichPiece: [number, number]
) => {
  const row = whichPiece[0];
  const column = whichPiece[1];
  const boardOverlay: string[][] = JSON.parse(JSON.stringify(emptyTiles));

  if (row + 1 >= 0 && row + 1 <= 7) {
    if (boardData[row + 1][column] === "") {
      boardOverlay[row + 1][column] = "possible";

      if (row === 1 && row + 2 >= 0 && row + 2 <= 7) {
        boardOverlay[row + 2][column] = "possible";
      }
    }
  }

  boardOverlay[row][column] = "selected";
  return boardOverlay;
};
