import { IStateContext } from "../context/state";
import { Game, emptyTiles } from "../models/game";

export const move = (state: IStateContext, target: [number, number]) => {
  const boardData = state.game.board;
  const boardOverlay = state.game.boardOverlay;

  const [selectedRow, selectedColumn] = findSelected(boardOverlay);

  const currentPiece = boardData[selectedRow][selectedColumn];
  boardData[selectedRow][selectedColumn] = "";

  boardData[target[0]][target[1]] = currentPiece;

  state.setGame({
    id: state.game.id,
    board: boardData,
    boardOverlay: JSON.parse(JSON.stringify(emptyTiles)),
    turn: ++state.game.turn,
  });
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
