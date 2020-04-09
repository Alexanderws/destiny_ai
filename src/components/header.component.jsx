import React, { useContext } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100vw;
  padding: 10px 40px;
  background-color: #f3f2f3;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.325rem;
`;

const Header = () => {
  const { isPlayerTurn } = useContext(GameContext);

  return (
    <Container>
      <Title>Destiny AI</Title>
      <p>{isPlayerTurn ? "YOUR TURN" : "ENEMY TURN"}</p>
    </Container>
  );
};

export default Header;
