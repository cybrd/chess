import { StateContext, state } from "./context/state";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import { Game } from "./components/Game";
import { Front } from "./components/Front";

export const App = () => {
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
