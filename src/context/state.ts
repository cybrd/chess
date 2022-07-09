import { createContext } from "react";
import { v4 } from "uuid";

import { Game, emptyTiles } from "../models/game";

export const gameDefault: Game = {
  id: v4(),
  turn: 1,
  board: [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ],
  boardOverlay: JSON.parse(JSON.stringify(emptyTiles)),
};

export const StateContext = createContext({
  game: gameDefault,
  updateGame: (game: Game) => {},
});
