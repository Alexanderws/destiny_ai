import React, { useState } from "react";

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
  rollDieIntoPool: () => {}
});

EnemyContext.displayName = "EnemyContext";

const initialCharacters = [
  {
    id: "darthSidious01",
    name: "Darth Sidious",
    color: "blue",
    initialHealth: 12,
    currentHealth: 12,
    damage: 0,
    shields: 0,
    isReady: true,
    isDefeated: false
  },
  {
    id: "grandMoffTarkin01",
    name: "Grand Moff Tarkin",
    color: "red",
    initialHealth: 10,
    currentHealth: 10,
    damage: 0,
    shields: 0,
    isReady: true,
    isDefeated: false
  }
];

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
    inPool: false,
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
    inPool: false,
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
    inPool: false,
    isSelected: false
  }
];

export const EnemyContextProvider = props => {
  const [characters, setCharacters] = useState(initialCharacters);
  const [dice, setDice] = useState(initalDice);
  const [deck, setDeck] = useState(cardDeck);
  const [resources, setResources] = useState(2);

  const adjustDamage = (adjustmentType, characterId) => {
    setCharacters(prevState => {
      return prevState.map(character => {
        if (character.id === characterId) {
          if (character.damage > 0 && adjustmentType === "minus") {
            return {
              ...character,
              damage: character.damage - 1
            };
          } else if (adjustmentType === "plus") {
            return {
              ...character,
              damage: character.damage + 1
            };
          }
          return character;
        }
        return character;
      });
    });
  };

  const adjustShields = (adjustmentType, characterId) => {
    setCharacters(prevState => {
      return prevState.map(character => {
        if (character.id === characterId) {
          if (character.shields > 0 && adjustmentType === "minus") {
            return {
              ...character,
              shields: character.shields - 1
            };
          } else if (adjustmentType === "plus" && character.shields < 3) {
            return {
              ...character,
              shields: character.shields + 1
            };
          }
          return character;
        }
        return character;
      });
    });
  };

  const toggleReady = characterId => {
    setCharacters(prevState => {
      return prevState.map(character => {
        if (character.id === characterId) {
          return {
            ...character,
            isReady: !character.isReady
          };
        }
        return character;
      });
    });
  };

  const adjustResources = adjustmentType => {
    setResources(prevState => {
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
    setDeck(prevState => {
      return prevState.filter((card, index) => index !== 0);
    });
    return drawnCard;
  };

  const getDieSymbols = charId => {
    const die = dice.find(die => die.ownerId === charId);
    return die ? die.sides : [];
  };

  const selectDie = dieId => {
    setDice(prevState => {
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
    setDice(prevState => {
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
    setDice(prevState => {
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

  const rollDieIntoPool = dieId => {
    setDice(prevState => {
      return prevState.map(dieObj => {
        if (dieObj.id === dieId) {
          return {
            ...dieObj,
            inPool: true,
            isSelected: false,
            currentSide: (dieObj.sides.length * Math.random()) | 0
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
    rollDieIntoPool: rollDieIntoPool
  };

  return (
    <EnemyContext.Provider value={initialContext}>
      {props.children}
    </EnemyContext.Provider>
  );
};
