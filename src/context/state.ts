import { createContext } from "react";
import { v4 } from "uuid";

import { Game, emptyTiles, boardDefault } from "../models/game";

export const gameDefault: Game = {
  id: v4(),
  turn: 1,
  board: boardDefault,
  boardOverlay: JSON.parse(JSON.stringify(emptyTiles)),
};

export type IStateContext = {
  game: Game;
  setGame: (game: Game) => void;
};

export const StateContext = createContext<IStateContext>({
  game: gameDefault,
  setGame: () => {},
});
