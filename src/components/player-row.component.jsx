import React, { useContext } from "react";
import styled from "styled-components";

import { CHARACTER_COLOR } from "../assets/constants/colors";
import { PlayerContext } from "../contexts/player.context";
import DamageContainer from "./common/damage-container.component";

const Container = styled.div`
  display: flex;
  min-height: 200px;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 0;
`;

const CharacterContainer = styled.div`
  margin: 0 40px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Player = styled.div`
  width: 156px;
  height: 90px;
  padding-top: 45px;
  position: relative;
  border-radius: 10px 10px 0 0;
  border: 2px solid black;
  border-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Health = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  border-radius: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 1px 1px 0;
`;

const Name = styled.div`
  font-weight: 600;
`;

const PlayerRow = () => {
  const { characters, adjustDamage, adjustShields } = useContext(
    PlayerContext
  );

  return (
    <Container>
      {characters.map((character) => {
        return (
          <CharacterContainer key={character.id}>
            <DamageContainer
              character={character}
              onDamageClicked={adjustDamage}
              onShieldsClicked={adjustShields}
            />
            <Player
              style={{
                backgroundColor: CHARACTER_COLOR[character.color],
              }}
            >
              <Name>{character.name}</Name>
              <Health>{character.currentHealth}</Health>
            </Player>
          </CharacterContainer>
        );
      })}
    </Container>
  );
};

export default PlayerRow;
