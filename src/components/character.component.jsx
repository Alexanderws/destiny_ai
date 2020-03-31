import React from "react";
import styled from "styled-components";

import { MAIN_COLORS } from "../assets/colors";
import Die from "./die.component";

const Container = styled.div`
  display: flex;
  margin: 0 20px;
  width: 370px;
`;

const DiceColumn = styled.div`
  display: flex;
  padding: 0 10px;
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
  justify-content: center;
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

const AdjustButton = styled.button`
  height: 34px;
  width: 34px;
  margin: 8px 0;
  font-weight: 800;
  border-radius: 3px;
  border: 1px solid lightgrey;
`;

const Character = props => {
  const {
    character,
    dice,
    onDamageClicked,
    onShieldsClicked,
    onCardClicked
  } = props;

  const bgColor = MAIN_COLORS[character.color];
  return (
    <Container>
      <DiceColumn>
        {dice.map(dieObj => {
          return (
            <Die
              key={dieObj.id}
              dieObject={dieObj}
              onDieClick={() => {}}
            />
          );
        })}
      </DiceColumn>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <AdjustButton
            name="minus"
            onClick={() => onShieldsClicked("minus", character.id)}
          >
            -
          </AdjustButton>
          <div style={{ padding: "0 8px" }}>
            Shields: {character.shields}
          </div>
          <AdjustButton
            name="plus"
            onClick={() => onShieldsClicked("plus", character.id)}
          >
            +
          </AdjustButton>
        </div>
        <Card
          onClick={() => {
            onCardClicked(character.id);
          }}
          className={!character.isReady && "exhausted"}
          style={{ backgroundColor: bgColor }}
        >
          <Name>{character.name}</Name>
          <Health>{character.currentHealth}</Health>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "42px 0 0 8px"
        }}
      >
        <AdjustButton
          name="plus"
          onClick={() => onDamageClicked("plus", character.id)}
        >
          +
        </AdjustButton>
        <div>Dmg: {character.damage}</div>
        <AdjustButton
          name="minus"
          onClick={() => onDamageClicked("minus", character.id)}
        >
          -
        </AdjustButton>
      </div>
    </Container>
  );
};

export default Character;
