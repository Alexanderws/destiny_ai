import React from "react";
import styled from "styled-components";

import { CHARACTER_COLOR } from "../../assets/constants/colors";
import DieSymbol from "./die-symbol.component";

const Container = styled.div`
  box-sizing: content-box;
  height: 64px;
  width: 64px;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.2);  
  cursor: pointer;
  animation: fade-in 0.3s linear;


  &.in-pool {
    margin: 15px;
    animation: roll-in 0.3s linear;
  }

  &.selected {
    border: 3px solid indigo;
    margin: 2px;

    &.in-pool {
      margin: 12px;
    }
  }

  @keyframes roll-in {
    0% {
      opacity: 0;
      transform: rotate(120deg);
      margin-top: 0px;
    }
    40% {
      margin-top: -20px;
    }
    90% {
      transform: rotate(350deg);
      margin-top: -2px;
    }
    100% {
      opacity: 1;
      transform: rotate(360deg);
      margin-top: 0px;
    }
  }
  
  @keyframes re-roll {
    0% {
      transform: rotate(120deg);
      margin-top: 0px;
    }
    40% {
      margin-top: -20px;
    }
    100% {
      transform: rotate(360deg);
      margin-top: 0px;
    }
  }

  @keyframes fade-in {
    0% {
        opacity: 0;
    }
     
    100% {
        opacity: 1;
     }

`;

const SurfaceContainer = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ValueContainer = styled.div`
  height: 54px;
  width: 54px;
  border-radius: 100%;
  font-weight: 600;
  font-size: 1.2rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Die = ({ dieObject, onDieClick }) => {
  const { id, currentSide, color, isSelected, sides, inPool } = dieObject;
  const dieColor = CHARACTER_COLOR[color];
  const dieColorDark = CHARACTER_COLOR[color + "Dark"];
  let classes = inPool ? "in-pool" : "";
  classes += isSelected ? " selected" : "";

  return (
    <Container
      onClick={() => {
        onDieClick(id);
      }}
      style={{
        backgroundColor: dieColorDark,
      }}
      className={classes}
    >
      <SurfaceContainer
        style={{
          backgroundColor: dieColor,
        }}
      >
        <ValueContainer>
          <DieSymbol
            value={sides[currentSide].value}
            symbol={sides[currentSide].symbol}
          />
        </ValueContainer>
      </SurfaceContainer>
    </Container>
  );
};

export default Die;
