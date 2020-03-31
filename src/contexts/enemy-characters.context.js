import React, { useState } from "react";

export const EnemyCharactersContext = React.createContext({
  characters: [],
  adjustDamage: () => {},
  adjustShields: () => {},
  toggleReady: () => {}
});
EnemyCharactersContext.displayName = "EnemyCharactersContext";

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

export const EnemyCharactersContextProvider = props => {
  const [characters, setCharacters] = useState(initialCharacters);
  const [dice, setDice] = useState(initialCharacters);

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

  const initialContext = {
    characters: characters,
    adjustDamage: adjustDamage,
    adjustShields: adjustShields,
    toggleReady: toggleReady
  };

  return (
    <EnemyCharactersContext.Provider value={initialContext}>
      {props.children}
    </EnemyCharactersContext.Provider>
  );
};
