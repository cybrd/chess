import { createContext, Dispatch } from "react";
import { v4 } from "uuid";

import { Game, emptyTiles, boardDefault } from "../models/game";

export const gameDefault: Game = {
  id: v4(),
  turn: 1,
  board: boardDefault,
  boardOverlay: JSON.parse(JSON.stringify(emptyTiles)),
};

type reducerAction = {
  type: string;
  payload?: any;
};

export type IStateContext = {
  game: Game;
  dispatch: Dispatch<reducerAction[]>;
};

export const StateContext = createContext<IStateContext>({
  game: gameDefault,
  dispatch: () => ({} as Dispatch<reducerAction[]>),
});

export const reducer = (state: Game, actions: reducerAction[]): Game => {
  console.log(state, actions);
  actions.forEach((action) => {
    switch (action.type) {
      case "INCREMENT_TURN":
        state.turn = action.payload;
        break;
      case "UPDATE_BOARD_OVERLAY":
        state.boardOverlay = action.payload;
        break;
      case "REMOVE_PIECE":
        const targetRow = action.payload.target[0];
        const targetColumn = action.payload.target[1];
        state.board[targetRow][targetColumn] = "";
        break;
      case "MOVE_PIECE":
        const fromRow = action.payload.from[0];
        const fromColumn = action.payload.from[1];
        state.board[fromRow][fromColumn] = "";

        const toRow = action.payload.to[0];
        const toColumn = action.payload.to[1];
        state.board[toRow][toColumn] = action.payload.piece;
        break;
    }
  });

  return { ...state };
};
