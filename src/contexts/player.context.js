import React, { useState } from "react";

export const PlayerContext = React.createContext({
  characters: [],
  adjustDamage: () => {},
  adjustShields: () => {}
});
PlayerContext.displayName = "PlayerContext";

const initialCharacters = [
  {
    id: "lukeSkywalker3",
    name: "Luke Skywalker",
    isElite: true,
    color: "blue",
    initialHealth: 12,
    currentHealth: 12,
    damage: 0,
    shields: 0,
    isReady: true,
    isDefeated: false
  },
  {
    id: "kesDameron",
    name: "Kes Dameron",
    isElite: true,
    color: "red",
    initialHealth: 10,
    currentHealth: 10,
    damage: 0,
    shields: 0,
    isReady: true,
    isDefeated: false
  }
];

export const PlayerContextProvider = props => {
  const [characters, setCharacters] = useState(initialCharacters);

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
          } else if (adjustmentType === "plus") {
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

  const initialContext = {
    characters: characters,
    adjustDamage: adjustDamage,
    adjustShields: adjustShields
  };

  return (
    <PlayerContext.Provider value={initialContext}>
      {props.children}
    </PlayerContext.Provider>
  );
};
