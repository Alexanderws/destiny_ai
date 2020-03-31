import React from "react";
import styled from "styled-components";

import { MAIN_COLORS } from "../assets/colors";
import DieSymbol from "./die-symbol.component";

const Container = styled.div`
  box-sizing: content-box;
  height: 64px;
  width: 64px;
  border-radius: 15px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }

  &.in-pool {
    margin: 15px;
  }

  &.selected {
    border: 3px solid indigo;
    margin: 2px;

    &.in-pool {
      margin: 12px;
    }
  }
`;

const ValueContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  font-weight: 600;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Die = ({ dieObject, onDieClick }) => {
  const { id, currentSide, color, isSelected, sides, inPool } = dieObject;
  const bgColor = MAIN_COLORS[color];

  let classes = inPool ? "in-pool" : "";
  classes += isSelected ? " selected" : "";

  return (
    <Container
      onClick={() => {
        onDieClick(id);
      }}
      style={{ backgroundColor: bgColor }}
      className={classes}
    >
      <ValueContainer>
        <DieSymbol
          value={sides[currentSide].value}
          symbol={sides[currentSide].type}
        />
      </ValueContainer>
    </Container>
  );
};

export default Die;
