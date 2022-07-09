import { useContext, FunctionComponent } from "react";

import { StateContext } from "../context/state";

import { BoardTile } from "./BoardTile";

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
