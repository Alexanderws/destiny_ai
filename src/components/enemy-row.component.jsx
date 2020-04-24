import React, { useContext } from "react";
import styled from "styled-components";

import { EnemyContext } from "../contexts/enemy.context";

import Character from "./character.component";
import CardStack from "./card-stack.component";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
`;

const CardContainer = styled.div`
  margin-right: -18px;
`;

const EnemyRow = () => {
  const {
    characters,
    adjustDamage,
    adjustShields,
    toggleReady,
    dice,
  } = useContext(EnemyContext);

  return (
    <Container>
      {/* <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          marginRight: "30px"
        }}
      >
        <Resources
          resources={resources}
          onAdjustClicked={adjustResources}
        />
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flex: "1",
          marginRight: "40px",
        }}
      >
        {characters.map((characterObj) => {
          return (
            <Character
              key={characterObj.id}
              character={characterObj}
              onDamageClicked={adjustDamage}
              onShieldsClicked={adjustShields}
              onCardClicked={toggleReady}
              dice={dice.filter((die) => {
                return (die.ownerId === characterObj.id) & !die.inPool;
              })}
            />
          );
        })}
      </div>
      <CardContainer>
        <CardStack />
      </CardContainer>
    </Container>
  );
};

export default EnemyRow;
