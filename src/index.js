import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./normalize.css";
import "./index.css";

import { GameContextProvider } from "./contexts/game.context";
import { EnemyCharactersContextProvider } from "./contexts/enemy-characters.context";

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <EnemyCharactersContextProvider>
        <App />
      </EnemyCharactersContextProvider>
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
