import { Game, emptyTiles } from "../models/game";

export const move = (game: Game, target: [number, number]): Game => {
  const boardData = game.board;
  const boardOverlay = game.boardOverlay;

  const [selectedRow, selectedColumn] = findSelected(boardOverlay);

  const currentPiece = boardData[selectedRow][selectedColumn];
  boardData[selectedRow][selectedColumn] = "";

  boardData[target[0]][target[1]] = currentPiece;

  return {
    id: game.id,
    board: boardData,
    boardOverlay: JSON.parse(JSON.stringify(emptyTiles)),
    turn: ++game.turn,
  };
};

const findSelected = (boardOverlay: Game["boardOverlay"]) => {
  let rowNumber = -1;
  let columnNumber = -1;

  boardOverlay.forEach((row, r) => {
    row.forEach((column, c) => {
      if (column === "selected") {
        rowNumber = r;
        columnNumber = c;
      }
    });
  });

  return [rowNumber, columnNumber];
};
