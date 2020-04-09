import React, { useContext } from "react";
import styled from "styled-components";

import { EnemyContext } from "../contexts/enemy.context";

import Character from "./character.component";
import Resources from "./common/resources.component";
import CardStack from "./card-stack.component";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
`;

const EnemyRow = () => {
  const {
    characters,
    adjustDamage,
    adjustShields,
    toggleReady,
    dice,
    resources,
    adjustResources
  } = useContext(EnemyContext);

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
              dice={dice.filter(die => {
                return (die.ownerId === characterObj.id) & !die.inPool;
              })}
            />
          );
        })}
      </div>
      <Resources
        resources={resources}
        onAdjustClicked={adjustResources}
      />
      <CardStack />
    </Container>
  );
};

export default EnemyRow;
