import { IStateContext } from "../../context/state";
import { emptyTiles, blackPieces } from "../../models/game";

export const moves = (state: IStateContext, whichPiece: [number, number]) => {
  const row = whichPiece[0];
  const column = whichPiece[1];
  state.game.boardOverlay = JSON.parse(JSON.stringify(emptyTiles));

  if (row - 1 >= 0 && row - 1 <= 7) {
    if (state.game.board[row - 1][column] === "") {
      state.game.boardOverlay[row - 1][column] = "possible";

      if (row === 6 && row - 2 >= 0 && row - 2 <= 7) {
        state.game.boardOverlay[row - 2][column] = "possible";
      }
    }

    if (blackPieces.indexOf(state.game.board[row - 1][column - 1]) !== -1) {
      state.game.boardOverlay[row - 1][column - 1] = "possible";
    }

    if (blackPieces.indexOf(state.game.board[row - 1][column + 1]) !== -1) {
      state.game.boardOverlay[row - 1][column + 1] = "possible";
    }
  }

  state.game.boardOverlay[row][column] = "selected";
};
