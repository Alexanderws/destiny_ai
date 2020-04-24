import React, { useState } from "react";

import { SYMBOL } from "../assets/constants/die-symbols";
import { ACTION } from "../assets/constants/actions";
import cardDeck from "../store/enemy-cards.data";

export const EnemyContext = React.createContext({
  characters: [],
  adjustDamage: () => {},
  adjustShields: () => {},
  toggleReady: () => {},
  resources: 2,
  adjustResources: () => {},
  deck: [],
  drawCard: () => {},
  dice: [],
  getDieSymbols: () => {},
  selectDie: () => {},
  rollDice: () => {},
  removeDice: () => {},
  rollDieIntoPool: () => {},
  possibleActions: [],
  evaluateActions: () => {},
});

EnemyContext.displayName = "EnemyContext";

const initialCharacters = [
  {
    id: "darthVader01",
    name: "Darth Vader",
    color: "blue",
    initialHealth: 16,
    currentHealth: 16,
    damage: 0,
    shields: 0,
    isReady: true,
    isDefeated: false,
  },
  {
    id: "grandMoffTarkin01",
    name: "Grand Moff Tarkin",
    color: "red",
    initialHealth: 12,
    currentHealth: 12,
    damage: 0,
    shields: 0,
    isReady: true,
    isDefeated: false,
  },
];

const initalDice = [
  {
    id: "darthVader01dice1",
    ownerId: "darthVader01",
    color: "blue",
    sides: [
      { value: 2, symbol: SYMBOL.melee, cost: 0, modifier: false },
      { value: 2, symbol: SYMBOL.melee, cost: 0, modifier: false },
      { value: 3, symbol: SYMBOL.melee, cost: 0, modifier: false },
      { value: 3, symbol: SYMBOL.indirect, cost: 0, modifier: false },
      { value: 2, symbol: SYMBOL.shield, cost: 0, modifier: false },
      { value: 0, symbol: SYMBOL.blank, cost: 0, modifier: false },
    ],
    currentSide: 0,
    inPool: false,
    selected: false,
  },
  {
    id: "darthVader01dice2",
    ownerId: "darthVader01",
    color: "blue",
    sides: [
      { value: 2, symbol: SYMBOL.melee, cost: 0, modifier: false },
      { value: 2, symbol: SYMBOL.melee, cost: 0, modifier: false },
      { value: 3, symbol: SYMBOL.melee, cost: 0, modifier: false },
      { value: 3, symbol: SYMBOL.indirect, cost: 0, modifier: false },
      { value: 2, symbol: SYMBOL.shield, cost: 0, modifier: false },
      { value: 0, symbol: SYMBOL.blank, cost: 0, modifier: false },
    ],
    currentSide: 0,
    inPool: false,
    selected: false,
  },
  {
    id: "grandMoffTarkin01dice1",
    ownerId: "grandMoffTarkin01",
    color: "red",
    sides: [
      { value: 2, symbol: SYMBOL.ranged, cost: 0, modifier: false },
      { value: 3, symbol: SYMBOL.indirect, cost: 0, modifier: false },
      { value: 3, symbol: SYMBOL.indirect, cost: 0, modifier: false },
      { value: 4, symbol: SYMBOL.indirect, cost: 0, modifier: false },
      { value: 2, symbol: SYMBOL.shield, cost: 0, modifier: false },
      { value: 0, symbol: SYMBOL.blank, cost: 0, modifier: false },
    ],
    currentSide: 0,
    inPool: false,
    selected: false,
  },
  {
    id: "grandMoffTarkin01dice2",
    ownerId: "grandMoffTarkin01",
    color: "red",
    sides: [
      { value: 2, symbol: SYMBOL.ranged, cost: 0, modifier: false },
      { value: 3, symbol: SYMBOL.indirect, cost: 0, modifier: false },
      { value: 3, symbol: SYMBOL.indirect, cost: 0, modifier: false },
      { value: 4, symbol: SYMBOL.indirect, cost: 0, modifier: false },
      { value: 2, symbol: SYMBOL.shield, cost: 0, modifier: false },
      { value: 0, symbol: SYMBOL.blank, cost: 0, modifier: false },
    ],
    currentSide: 0,
    inPool: false,
    isSelected: false,
  },
];

const directDamageScores = [
  0.18,
  0.25,
  0.36,
  0.45,
  0.57,
  0.6,
  0.67,
  0.77,
  0.82,
  0.87,
  0.9,
  0.95,
  0.99,
  0.99,
  0.99,
  0.99,
  0.99,
];
const indirectDamageScores = [
  0.1,
  0.15,
  0.22,
  0.3,
  0.33,
  0.4,
  0.52,
  0.55,
  0.62,
  0.7,
  0.74,
  0.8,
  0.82,
  0.84,
  0.86,
  0.88,
  0.9,
  0.92,
  0.94,
  0.96,
];
const shieldScores = [0.1, 0.26, 0.37, 0.6, 0.65];
const discardScores = [0.2, 0.5, 0.7, 0.81, 0.9];
const disruptScores = [0.19, 0.5, 0.7, 0.8, 0.85];

export const EnemyContextProvider = (props) => {
  const [characters, setCharacters] = useState(initialCharacters);
  const [dice, setDice] = useState(initalDice);
  const [deck, setDeck] = useState(cardDeck);
  const [playedCardsCount, setPlayedCardsCount] = useState(0);
  const [possibleActions, setPossibleActions] = useState([]);
  const [resources, setResources] = useState(2);

  const evaluateActions = () => {
    const diceInPool = dice.filter((dieObj) => dieObj.inPool);
    const diceCount = diceInPool.length;
    const readyCharactersCount = characters.reduce((acc, char) => {
      return char.isReady ? acc + 1 : acc;
    }, 0);
    let passScore = 0;
    let playCardScore = 0;
    let actions = [];

    // check if dice in pool
    if (diceCount > 0) {
      var reducedDice = diceInPool.reduce((acc, die) => {
        const symbol = die.sides[die.currentSide].symbol;
        const value = die.sides[die.currentSide].value;
        const exisitingObj = acc.find((obj) => obj.symbol === symbol);
        if (exisitingObj) {
          return [
            ...acc.filter((obj) => obj.symbol !== symbol),
            {
              symbol: symbol,
              value: exisitingObj.value + value,
              count: exisitingObj.count + 1,
            },
          ];
        }
        return [...acc, { symbol: symbol, value: value, count: 1 }];
      }, []);
      console.log("reducedDice: ", reducedDice);

      reducedDice.forEach((die) => {
        if (die.symbol === SYMBOL.melee) {
          actions.push({
            actionType: ACTION.resolveMeleeDice,
            score: directDamageScores[die.value - 1],
          });
        }
        if (die.symbol === SYMBOL.ranged) {
          actions.push({
            actionType: ACTION.resolveRangedDice,
            score: directDamageScores[die.value - 1],
          });
        }
        if (die.symbol === SYMBOL.indirect) {
          actions.push({
            actionType: ACTION.resolveIndirectDice,
            score: indirectDamageScores[die.value - 1],
          });
        }
        if (die.symbol === SYMBOL.shield) {
          actions.push({
            actionType: ACTION.resolveShieldDice,
            score: shieldScores[die.value - 1],
          });
        }
        if (die.symbol === SYMBOL.discard) {
          actions.push({
            actionType: ACTION.resolveDiscardDice,
            score: discardScores[die.value - 1],
          });
        }
        if (die.symbol === SYMBOL.disrupt) {
          actions.push({
            actionType: ACTION.disruptScores,
            score: disruptScores[die.value - 1],
          });
        }
      });
    } //end of dice in pool

    if (readyCharactersCount > 0) {
      let activateScore = 0.4;
      activateScore += (2 - diceCount) / 10;
      actions.push({
        actionType: ACTION.activateCharacter,
        score: activateScore,
      });
    }
    if (readyCharactersCount === 0) {
      passScore = Math.max((7 - diceCount * 5) / 10, 0);
    }
    playCardScore = Math.max((4 - playedCardsCount) / 10, 0);

    actions.push({ actionType: ACTION.passTurn, score: passScore });
    actions.push({ actionType: ACTION.playCard, score: playCardScore });

    const randomAddition = Math.floor(Math.random() * 20) / 100;
    actions[
      [Math.floor(Math.random() * actions.length)]
    ].score += randomAddition;
    console.log("actions - modified: ", actions);

    setPossibleActions(actions);
  };

  const adjustDamage = (adjustmentType, characterId) => {
    setCharacters((prevState) => {
      return prevState.map((character) => {
        if (character.id === characterId) {
          if (character.damage > 0 && adjustmentType === "minus") {
            return {
              ...character,
              damage: character.damage - 1,
            };
          } else if (adjustmentType === "plus") {
            return {
              ...character,
              damage: character.damage + 1,
            };
          }
          return character;
        }
        return character;
      });
    });
  };

  const adjustShields = (adjustmentType, characterId) => {
    setCharacters((prevState) => {
      return prevState.map((character) => {
        if (character.id === characterId) {
          if (character.shields > 0 && adjustmentType === "minus") {
            return {
              ...character,
              shields: character.shields - 1,
            };
          } else if (adjustmentType === "plus" && character.shields < 3) {
            return {
              ...character,
              shields: character.shields + 1,
            };
          }
          return character;
        }
        return character;
      });
    });
  };

  const toggleReady = (characterId) => {
    setCharacters((prevState) => {
      return prevState.map((character) => {
        if (character.id === characterId) {
          return {
            ...character,
            isReady: !character.isReady,
          };
        }
        return character;
      });
    });
  };

  const adjustResources = (adjustmentType) => {
    setResources((prevState) => {
      if (prevState > 0 && adjustmentType === "minus") {
        return prevState - 1;
      }
      if (adjustmentType === "plus") {
        return prevState + 1;
      }
      return prevState;
    });
  };

  const drawCard = () => {
    if (deck.length <= 0) {
      return;
    }
    const drawnCard = deck[(deck.length * Math.random()) | 0];
    setDeck((prevState) => {
      return prevState.filter((card, index) => index !== 0);
    });
    return drawnCard;
  };

  const getDieSymbols = (charId) => {
    const die = dice.find((die) => die.ownerId === charId);
    return die ? die.sides : [];
  };

  const selectDie = (dieId) => {
    setDice((prevState) => {
      return prevState.map((dieObj) => {
        if (dieObj.id === dieId) {
          return {
            ...dieObj,
            isSelected: !dieObj.isSelected,
          };
        }
        return dieObj;
      });
    });
  };

  const rollDice = () => {
    setDice((prevState) => {
      return prevState.map((dieObj) => {
        if (dieObj.isSelected) {
          return {
            ...dieObj,
            currentSide: (dieObj.sides.length * Math.random()) | 0,
            isSelected: false,
          };
        }
        return dieObj;
      });
    });
  };

  const removeDice = () => {
    setDice((prevState) => {
      return prevState.map((dieObj) => {
        if (dieObj.isSelected) {
          return {
            ...dieObj,
            inPool: false,
            isSelected: false,
            currentSide: 0,
          };
        }
        return dieObj;
      });
    });
  };

  const rollDieIntoPool = (dieId) => {
    setDice((prevState) => {
      return prevState.map((dieObj) => {
        if (dieObj.id === dieId) {
          return {
            ...dieObj,
            inPool: true,
            isSelected: false,
            currentSide: (dieObj.sides.length * Math.random()) | 0,
          };
        }
        return dieObj;
      });
    });
  };

  const initialContext = {
    characters: characters,
    adjustDamage: adjustDamage,
    adjustShields: adjustShields,
    toggleReady: toggleReady,
    resources: resources,
    adjustResources: adjustResources,
    deck: deck,
    drawCard: drawCard,
    dice: dice,
    getDieSymbols: getDieSymbols,
    selectDie: selectDie,
    rollDice: rollDice,
    removeDice: removeDice,
    rollDieIntoPool: rollDieIntoPool,
    possibleActions: possibleActions,
    evaluateActions: evaluateActions,
  };

  return (
    <EnemyContext.Provider value={initialContext}>
      {props.children}
    </EnemyContext.Provider>
  );
};
