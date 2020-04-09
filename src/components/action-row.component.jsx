import React, { useContext } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";
import { EnemyContext } from "../contexts/enemy.context";

import StyledContainer from "./common/styled-container.component";
import StyledButton from "./common/styled-button.component";

const Container = styled.div`
  display: flex;
  height: 60px;
  padding: 20px 0;
  justify-content: flex-end;
`;

const DiceActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionRow = () => {
  const { isPlayerTurn, switchPlayer, rerollDice } = useContext(
    GameContext
  );
  const { dice, rollDice, removeDice } = useContext(EnemyContext);

  const DiceActionRow = (
    <DiceActions>
      <StyledButton
        onClick={() => {
          rollDice();
          rerollDice();
        }}
      >
        Reroll
      </StyledButton>
      <div style={{ width: "20px" }} />
      <StyledButton onClick={removeDice}>Remove</StyledButton>
      <div style={{ width: "20px" }} />
    </DiceActions>
  );

  return (
    <Container>
      {dice.some(die => die.isSelected) && DiceActionRow}
      <StyledButton primary onClick={switchPlayer}>
        End turn
      </StyledButton>
    </Container>
  );
};

export default ActionRow;
