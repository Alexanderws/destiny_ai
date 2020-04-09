import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./normalize.css";
import "./index.css";

import { GameContextProvider } from "./contexts/game.context";
import { EnemyContextProvider } from "./contexts/enemy.context";
import { PlayerContextProvider } from "./contexts/player.context";

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <PlayerContextProvider>
        <EnemyContextProvider>
          <App />
        </EnemyContextProvider>
      </PlayerContextProvider>
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
