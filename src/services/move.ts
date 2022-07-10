import { IStateContext } from "../context/state";
import { Game, emptyTiles } from "../models/game";

export const move = (state: IStateContext, target: [number, number]) => {
  const boardData = state.game.board;
  const boardOverlay = state.game.boardOverlay;

  const [selectedRow, selectedColumn] = findSelected(boardOverlay);

  state.dispatch([
    {
      type: "INCREMENT_TURN",
      payload: state.game.turn + 1,
    },
    {
      type: "UPDATE_BOARD_OVERLAY",
      payload: JSON.parse(JSON.stringify(emptyTiles)),
    },
    {
      type: "REMOVE_PIECE",
      payload: {
        piece: boardData[target[0]][target[1]],
        target: [target[0], target[1]],
      },
    },
    {
      type: "MOVE_PIECE",
      payload: {
        piece: boardData[selectedRow][selectedColumn],
        from: [selectedRow, selectedColumn],
        to: [target[0], target[1]],
      },
    },
  ]);
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
