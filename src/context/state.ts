import { createContext } from "react";
import { v4 } from "uuid";

import { Game, emptyTiles } from "../models/game";

export const gameDefault: Game = {
  id: v4(),
  turn: 1,
  board: [
    ["♜", "♞", "♝", "♛", "♚2", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔2", "♗", "♘", "♖"],
  ],
  boardOverlay: JSON.parse(JSON.stringify(emptyTiles)),
};

export const StateContext = createContext({
  game: gameDefault,
  setGame: (game: Game) => {},
});
