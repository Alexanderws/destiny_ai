import React, { useContext } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";

const Container = styled.div`
  display: flex;
  height: 100px;
  padding: 20px 60px;
  justify-content: space-between;
`;

const MainButton = styled.button`
  height: 60px;
  padding: 0 30px;
  border-radius: 10px;
  background-color: indigo;
  color: white;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

const DiceActions = styled.div`
  display: flex;
`;
const DiceButton = styled.button`
  height: 60px;
  padding: 0 30px;
  border-radius: 10px;
  background-color: yellow;
  color: black;
  text-align: center;
  text-transform: uppercase;
`;

const ActionRow = () => {
  const {
    isPlayerTurn,
    switchPlayer,
    enemyDice,
    rollDice,
    removeDice
  } = useContext(GameContext);

  const DiceActionRow = (
    <DiceActions>
      <DiceButton onClick={rollDice}>Reroll</DiceButton>
      <DiceButton onClick={removeDice}>Remove</DiceButton>
    </DiceActions>
  );

  return (
    <Container>
      <div>HALLO</div>
      {enemyDice.some(die => die.isSelected) && DiceActionRow}
      <MainButton
        onClick={switchPlayer}
        style={{ opacity: isPlayerTurn ? "1" : "0.5" }}
      >
        End turn
      </MainButton>
    </Container>
  );
};

export default ActionRow;
