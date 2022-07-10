import { useContext, FunctionComponent } from "react";

import { StateContext } from "../context/state";

import { BoardTile } from "./BoardTile";
import { move } from "../services/move";

import "./Board.scss";

const BoardTiles = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

export const Board: FunctionComponent = () => {
  const state = useContext(StateContext);

  const handleClick = (r: number, c: number) => {
    return () => {
      if (state.game.boardOverlay[r][c] === "possible") {
        state.game = move(state.game, [r, c]);
        state.updateGame(state.game);
      }
    };
  };

  return (
    <div>
      {BoardTiles.map((row, r) => (
        <div className="blockRow" key={r}>
          {row.map((column, c) => (
            <div
              className={
                "tile block" + column + " " + state.game.boardOverlay[r][c]
              }
              key={r + "-" + c}
              onClick={handleClick(r, c)}
            >
              <BoardTile row={r} column={c}>
                {state.game.board[r][c]}
              </BoardTile>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
