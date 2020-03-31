import React, { useContext } from "react";
import styled from "styled-components";

import { EnemyCharactersContext } from "../contexts/enemy-characters.context";
import { GameContext } from "../contexts/game.context";

import Character from "./character.component";
import CardStack from "./card-stack.component";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 60px;
  justify-content: space-between;
  height: 400px;
`;

const EnemyRow = () => {
  const {
    characters,
    adjustDamage,
    adjustShields,
    toggleReady
  } = useContext(EnemyCharactersContext);
  const { enemyDice } = useContext(GameContext);

  return (
    <Container>
      <div style={{ display: "flex" }}>
        {characters.map(characterObj => {
          return (
            <Character
              key={characterObj.id}
              character={characterObj}
              onDamageClicked={adjustDamage}
              onShieldsClicked={adjustShields}
              onCardClicked={toggleReady}
              dice={enemyDice.filter(die => {
                return (die.ownerId === characterObj.id) & !die.inPool;
              })}
            />
          );
        })}
      </div>
      <CardStack />
    </Container>
  );
};

export default EnemyRow;
