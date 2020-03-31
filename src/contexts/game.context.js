import React, { useState } from "react";

import cardDeck from "../store/enemy-cards.data";

export const GameContext = React.createContext({
  isPlayerTurn: true,
  playerHasPassed: false,
  enemyHasPassed: false,
  changePlayerTurn: () => {},
  enemyDeck: [],
  drawEnemyCard: () => {},
  enemyDice: [],
  selectDie: () => {},
  rollDice: () => {},
  removeDice: () => {}
});
GameContext.displayName = "GameContext";

const initalDice = [
  {
    id: "darthSidious01dice1",
    ownerId: "darthSidious01",
    color: "blue",
    sides: [
      { value: 2, type: "melee", cost: 0, modifier: false },
      { value: 2, type: "melee", cost: 0, modifier: false },
      { value: 3, type: "melee", cost: 0, modifier: false },
      { value: 3, type: "indirect", cost: 0, modifier: false },
      { value: 2, type: "shields", cost: 0, modifier: false },
      { value: 0, type: "blank", cost: 0, modifier: false }
    ],
    currentSide: 0,
    inPool: true,
    selected: false
  },
  {
    id: "darthSidious01dice2",
    ownerId: "darthSidious01",
    color: "blue",
    sides: [
      { value: 2, type: "melee", cost: 0, modifier: false },
      { value: 2, type: "melee", cost: 0, modifier: false },
      { value: 3, type: "melee", cost: 0, modifier: false },
      { value: 3, type: "indirect", cost: 0, modifier: false },
      { value: 2, type: "shields", cost: 0, modifier: false },
      { value: 0, type: "blank", cost: 0, modifier: false }
    ],
    currentSide: 0,
    inPool: true,
    selected: false
  },
  {
    id: "grandMoffTarkin01dice1",
    ownerId: "grandMoffTarkin01",
    color: "red",
    sides: [
      { value: 2, type: "ranged", cost: 0, modifier: false },
      { value: 3, type: "indirect", cost: 0, modifier: false },
      { value: 3, type: "indirect", cost: 0, modifier: false },
      { value: 4, type: "indirect", cost: 0, modifier: false },
      { value: 2, type: "shields", cost: 0, modifier: false },
      { value: 0, type: "blank", cost: 0, modifier: false }
    ],
    currentSide: 0,
    inPool: false,
    selected: false
  },
  {
    id: "grandMoffTarkin01dice2",
    ownerId: "grandMoffTarkin01",
    color: "red",
    sides: [
      { value: 2, type: "ranged", cost: 0, modifier: false },
      { value: 3, type: "indirect", cost: 0, modifier: false },
      { value: 3, type: "indirect", cost: 0, modifier: false },
      { value: 4, type: "indirect", cost: 0, modifier: false },
      { value: 2, type: "shields", cost: 0, modifier: false },
      { value: 0, type: "blank", cost: 0, modifier: false }
    ],
    currentSide: 0,
    inPool: true,
    isSelected: false
  }
];

export const GameContextProvider = props => {
  const [state, setState] = useState({
    isPlayerTurn: true,
    playerHasPassed: false,
    enemyHasPassed: false,
    round: 0
  });
  const [enemyDeck, setEnemyDeck] = useState(cardDeck);
  const [enemyDice, setEnemyDice] = useState(initalDice);

  const switchPlayer = () => {
    setState(prevState => {
      return {
        ...prevState,
        isPlayerTurn: !prevState.isPlayerTurn
      };
    });
  };

  const drawEnemyCard = () => {
    if (enemyDeck.length <= 0) {
      return;
    }
    const drawnCard = enemyDeck[(enemyDeck.length * Math.random()) | 0];
    setEnemyDeck(prevState => {
      return prevState.filter((card, index) => index !== 0);
    });
    return drawnCard;
  };

  const selectDie = dieId => {
    setEnemyDice(prevState => {
      return prevState.map(dieObj => {
        if (dieObj.id === dieId) {
          return {
            ...dieObj,
            isSelected: !dieObj.isSelected
          };
        }
        return dieObj;
      });
    });
  };

  const rollDice = () => {
    setEnemyDice(prevState => {
      return prevState.map(dieObj => {
        if (dieObj.isSelected) {
          return {
            ...dieObj,
            currentSide: (dieObj.sides.length * Math.random()) | 0,
            isSelected: false
          };
        }
        return dieObj;
      });
    });
  };

  const removeDice = () => {
    setEnemyDice(prevState => {
      return prevState.map(dieObj => {
        if (dieObj.isSelected) {
          return {
            ...dieObj,
            inPool: false,
            isSelected: false,
            currentSide: 0
          };
        }
        return dieObj;
      });
    });
  };

  const initialContext = {
    isPlayerTurn: state.isPlayerTurn,
    playerHasPassed: state.playerHasPassed,
    enemyHasPassed: state.enemyHasPassed,
    switchPlayer: switchPlayer,
    enemyDeck: enemyDeck,
    drawEnemyCard: drawEnemyCard,
    enemyDice: enemyDice,
    selectDie: selectDie,
    rollDice: rollDice,
    removeDice: removeDice
  };

  return (
    <GameContext.Provider value={initialContext}>
      {props.children}
    </GameContext.Provider>
  );
};
