import React, { useState } from "react";

export const GameContext = React.createContext({
  isPlayerTurn: true,
  animateTurnChange: false,
  setAnimateTurnChange: () => {},
  playerHasPassed: false,
  enemyHasPassed: false,
  rerolling: false,
  rerollDice: () => {},
  turn: 1,
  round: 1,
  switchPlayer: () => {},
});
GameContext.displayName = "GameContext";

export const GameContextProvider = (props) => {
  const [state, setState] = useState({
    isPlayerTurn: true,
    animateTurnChange: false,
    playerHasPassed: false,
    enemyHasPassed: false,
    rerolling: false,
    turn: 1,
    round: 1,
  });

  const setAnimateTurnChange = (shouldAnimate) => {
    setState((prevState) => {
      return {
        ...prevState,
        animateTurnChange: shouldAnimate,
      };
    });
  };

  const switchPlayer = () => {
    setState((prevState) => {
      return {
        ...prevState,
        isPlayerTurn: !prevState.isPlayerTurn,
      };
    });
  };

  const rerollDice = () => {
    setState((prevState) => {
      return {
        ...prevState,
        rerolling: true,
      };
    });
    setTimeout(() => {
      setState((prevState) => {
        return {
          ...prevState,
          rerolling: false,
        };
      });
    }, 1000);
  };

  const initialContext = {
    isPlayerTurn: state.isPlayerTurn,
    playerHasPassed: state.playerHasPassed,
    animateTurnChange: state.animateTurnChange,
    setAnimateTurnChange: setAnimateTurnChange,
    enemyHasPassed: state.enemyHasPassed,
    rerolling: state.rerolling,
    rerollDice: rerollDice,
    switchPlayer: switchPlayer,
  };

  return (
    <GameContext.Provider value={initialContext}>
      {props.children}
    </GameContext.Provider>
  );
};
