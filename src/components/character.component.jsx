import React, { useContext } from "react";
import styled from "styled-components";

import { CHARACTER_COLOR } from "../assets/constants/colors";
import { GameContext } from "../contexts/game.context";
import { EnemyContext } from "../contexts/enemy.context";
import Die from "./common/die.component";
import DieSymbol from "./common/die-symbol.component";
import DamageContainer from "./common/damage-container.component";

const Container = styled.div`
  display: flex;
  margin: 0 20px;
  width: 370px;
`;

const DiceColumn = styled.div`
  display: flex;
  padding: 0 10px;
  width: 94px;
  flex-direction: column;
  justify-content: flex-end;
`;

const Card = styled.div`
  width: 156px;
  height: 218px;
  border-radius: 10px;
  border: 2px solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-transition: -webkit-transform 0.4s, margin 0.4s ease-in-out;
  -ms-transition: -ms-transform 0.4s, margin 0.4s ease-in-out;
  transition: transform 0.4s, margin 0.4s ease-in-out;

  :hover {
    cursor: pointer;
  }

  &.exhausted {
    transform: rotate(90deg);
    margin: 0 30px;
  }
`;

const Health = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  border-radius: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 1px 1px 0;
`;

const Name = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  background-color: white;
  text-align: center;
  border-bottom: 2px solid black;
  width: 100%;
  height: 34px;
`;

const DieSymbolContainer = styled.div`
  height: 24px;
  width: 40px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-color: white;
  margin-bottom: -2px;
`;

const Character = props => {
  const { getDieSymbols, rollDieIntoPool } = useContext(EnemyContext);
  const { rerolling } = useContext(GameContext);
  console.log("char - rerolling: ", rerolling);
  const {
    character,
    dice,
    onDamageClicked,
    onShieldsClicked,
    onCardClicked
  } = props;

  const dieSymbols = getDieSymbols(character.id).map((dieSide, index) => {
    return (
      <DieSymbolContainer key={index}>
        <DieSymbol
          value={dieSide.value}
          symbol={dieSide.type}
          symbolSize={20}
        />
      </DieSymbolContainer>
    );
  });

  const bgColor = CHARACTER_COLOR[character.color];

  return (
    <Container>
      <DiceColumn>
        {dice.map(dieObj => {
          return (
            <Die
              key={dieObj.id}
              dieObject={dieObj}
              onDieClick={() => {
                rollDieIntoPool(dieObj.id);
              }}
              rerolling={rerolling}
            />
          );
        })}
      </DiceColumn>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <DamageContainer
          character={character}
          onDamageClicked={onDamageClicked}
          onShieldsClicked={onShieldsClicked}
        />
        <Card
          onClick={() => {
            onCardClicked(character.id);
          }}
          className={!character.isReady && "exhausted"}
          style={{ backgroundColor: bgColor }}
        >
          <Name>{character.name}</Name>
          <Health>{character.currentHealth}</Health>
          <div
            style={{ position: "absolute", left: "10px", bottom: "10px" }}
          >
            {dieSymbols}
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Character;
