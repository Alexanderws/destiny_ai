import React, { useState, useEffect } from "react";

export const GameContext = React.createContext({
  isPlayerTurn: true,
  playerHasPassed: false,
  enemyHasPassed: false,
  rerolling: false,
  rerollDice: () => {},
  turn: 1,
  round: 1,
  switchPlayer: () => {}
});
GameContext.displayName = "GameContext";

export const GameContextProvider = props => {
  const [state, setState] = useState({
    isPlayerTurn: true,
    playerHasPassed: false,
    enemyHasPassed: false,
    rerolling: false,
    turn: 1,
    round: 1
  });

  const switchPlayer = () => {
    setState(prevState => {
      return {
        ...prevState,
        isPlayerTurn: !prevState.isPlayerTurn
      };
    });
  };

  const rerollDice = () => {
    setState(prevState => {
      return {
        ...prevState,
        rerolling: true
      };
    });
    setTimeout(() => {
      console.log("timeOuted: rerolling - ", state.rerolling);
      setState(prevState => {
        return {
          ...prevState,
          rerolling: false
        };
      });
    }, 1000);
  };

  useEffect(() => {
    if (state.rerolling) {
      console.log("TRUE!!!");
    }
  }, [state.rerolling]);

  const initialContext = {
    isPlayerTurn: state.isPlayerTurn,
    playerHasPassed: state.playerHasPassed,
    enemyHasPassed: state.enemyHasPassed,
    rerolling: state.rerolling,
    rerollDice: rerollDice,
    switchPlayer: switchPlayer
  };

  return (
    <GameContext.Provider value={initialContext}>
      {props.children}
    </GameContext.Provider>
  );
};
