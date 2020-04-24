import React, { useContext } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";
import { EnemyContext } from "../contexts/enemy.context";

import StyledButton from "./common/styled-button.component";

const Container = styled.div`
  display: flex;
  height: 60px;
  justify-content: flex-end;
  margin-right: 60px;
`;

const DiceActions = styled.div`
  &.disabled {
    opacity: 0.4;
  }
  display: flex;
  justify-content: space-between;
`;

const ActionRow = () => {
  const { rerollDice } = useContext(GameContext);
  const { dice, rollDice, removeDice } = useContext(EnemyContext);

  var diceInPool = dice.some((die) => die.isSelected);

  const DiceActionRow = () => (
    <DiceActions className={!diceInPool ? "disabled" : ""}>
      <StyledButton
        disabled={!diceInPool}
        onClick={() => {
          rollDice();
          rerollDice();
        }}
      >
        Reroll
      </StyledButton>
      <div style={{ width: "20px" }} />
      <StyledButton disabled={!diceInPool} onClick={removeDice}>
        Remove
      </StyledButton>
    </DiceActions>
  );

  return (
    <Container>
      <DiceActionRow />
    </Container>
  );
};

export default ActionRow;
