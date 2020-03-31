import React, { useContext } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";

const Container = styled.div`
    display: flex;
    padding: 
    height: 80px;
    width: 100wv;
    padding: 20px 40px;
`;

const Header = () => {
  const { isPlayerTurn } = useContext(GameContext);

  return (
    <Container>
      <p>{isPlayerTurn ? "Player Turn" : "Enemy Turn"}</p>
    </Container>
  );
};

export default Header;
