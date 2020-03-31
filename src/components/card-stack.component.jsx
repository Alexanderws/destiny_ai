import React, { useContext } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";

const Card = styled.div`
  width: 156px;
  height: 218px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: grey;
  position: absolute;
`;

const CardStack = () => {
  const { enemyDeck } = useContext(GameContext);

  const cardStack = [];

  for (let i = 1; i <= Math.ceil(enemyDeck.length / 5); i++) {
    cardStack.push(
      <Card key={i} style={{ zIndex: 20 - i, marginTop: i * 4 }} />
    );
  }
  cardStack.push(
    <Card
      key={"topCard"}
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 800,
        color: "white",
        fontSize: "2rem",
        backgroundColor: "indigo",
        zIndex: 100
      }}
    >
      STAR WARS
    </Card>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"
      }}
    >
      <div
        style={{
          height: "230px",
          marginBottom: cardStack.length * 4 + "px",
          marginRight: "156px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        {cardStack}
      </div>
      <div style={{ fontWeight: 300 }}>
        <span style={{ fontWeight: 500 }}>{enemyDeck.length}</span>{" "}
        remaining
      </div>
    </div>
  );
};

export default CardStack;
