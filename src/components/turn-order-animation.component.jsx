import React, { useContext } from "react";
import styled from "styled-components";

import { Z_INDEX } from "../assets/constants/sizes";
import { GameContext } from "../contexts/game.context";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.turnAnimation};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Animation = styled.div`
  background-color: #303030;
  margin: auto;
  visibility: hidden;
  border-radius: 100px;
  line-height: 150px;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;

  @keyframes sampleanimation {
    0% {
      visibility: visible;
      opacity: 0;
      height: 200px;
      width: 500px;
    }
    20% {
      opacity: 1;
      height: 150px;
      width: 400px;
    }
    90% {
      opacity: 1;
      height: 150px;
      width: 400px;
    }
    100% {
      opacity: 0;
      height: 200px;
      width: 500px;
    }
  }

  animation: sampleanimation 1.8s forwards 0.5s;
`;

const TurnOrderAnimation = () => {
  const { animateTurnChange, setAnimateTurnChange } = useContext(
    GameContext
  );
  if (!animateTurnChange) {
    return null;
  }
  return (
    <Container>
      <Animation
        onAnimationEnd={() => {
          setAnimateTurnChange(false);
        }}
      >
        YOUR TURN
      </Animation>
    </Container>
  );
};

export default TurnOrderAnimation;
