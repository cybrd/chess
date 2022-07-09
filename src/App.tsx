import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import { StateContext, gameDefault } from "./context/state";
import { Game as GameModel } from "./models/game";

import { Game } from "./components/Game";
import { Front } from "./components/Front";

export const App = () => {
  const [game, setGame] = useState(gameDefault);

  const state = {
    game,
    updateGame: (updated: GameModel) => {
      return setGame((prevState) => {
        return { ...prevState, ...updated };
      });
    },
  };

  return (
    <StateContext.Provider value={state}>
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/" element={<Front />}></Route>
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
};
