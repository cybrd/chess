import { FunctionComponent } from "react";
import { Game } from "../models/game";

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

export const Board: FunctionComponent<{ children: Game["board"] }> = (prop) => {
  return (
    <div>
      {BoardTiles.map((row, r) => (
        <div className="blockRow">
          {row.map((column, c) => (
            <div className={"block" + column}>{prop.children[r][c]}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
