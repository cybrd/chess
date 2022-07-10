import { useReducer, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import { StateContext, gameDefault, reducer } from "./context/state";

import { Game } from "./components/Game";
import { Front } from "./components/Front";

export const App = () => {
  const [game, dispatch] = useReducer(reducer, gameDefault);

  return (
    <StrictMode>
      <StateContext.Provider value={{ game, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/" element={<Front />}></Route>
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </StrictMode>
  );
};
