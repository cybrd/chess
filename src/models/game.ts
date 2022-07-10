export type Game = {
  id: string;
  turn: number;
  board: string[][];
  boardOverlay: string[][];
};

export const emptyTiles = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
];

export const whitePieces = ["♖", "♘", "♗", "♕", "♔", "♙"];
export const blackPieces = ["♜", "♞", "♝", "♛", "♚", "♟"];
