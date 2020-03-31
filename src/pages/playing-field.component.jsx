import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";

import EnemyRow from "../components/enemy-row.component";
import ActionRow from "../components/action-row.component";
import Die from "../components/die.component";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const DicePool = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 120px;
  background-color: lightgrey;
  border-top: solid 10px grey;
  border-bottom: solid 1px grey;
  height: 200px;
`;

const CardContainer = styled.div`
  position: fixed;
  margin: auto;
  width: 600px;
  height: 400px;
  background-color: white;
  border: 1px solid lightgrey;
`;

const Card = styled.div`
  width: 156px;
  height: 218px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ACTION = {
  activateCharacter: "activateCharacter",
  playCard: "playCard",
  resolveMeleeDice: "resolveMeleeDice",
  resolveRangedDice: "resolveRangedDice",
  resolveIndirectDice: "resolveIndirectDice",
  resolveShieldsDice: "resolveShieldsDice",
  resolveResourceDice: "resolveResourceDice",
  resolveDiscardDice: "resolveDiscardDice",
  resolveDisruptDice: "resolveDisruptDice",
  rerollDice: "rerollDice",
  claimBattlefield: "claimBattlefield",
  passTurn: "passTurn",
  noAction: "noAction"
};

const PlayingField = () => {
  const {
    drawEnemyCard,
    enemyDice,
    selectDie,
    isPlayerTurn,
    enemyHasPassed,
    playerHasPassed,
    switchPlayer
  } = useContext(GameContext);
  const [enemyState, setEnemyState] = useState({
    isPerformingAction: false,
    actionType: ACTION.noAction,
    activeCard: ["No card drawn"]
  });

  useEffect(() => {
    if (!isPlayerTurn && !enemyHasPassed) {
      console.log("resolveEnemyTurn() - isPlayerTurn: ", isPlayerTurn);
      resolveEnemyTurn();
    }
  }, [isPlayerTurn]);

  const resolveEnemyTurn = () => {
    const enemyCard = drawEnemyCard();
    setEnemyState({
      isPerformingAction: true,
      actionType: ACTION.playCard,
      activeCard: enemyCard
    });
    console.log("enemyCard: ", enemyCard);
  };

  const handleResolveCardClicked = () => {
    setEnemyState({
      isPerformingAction: false,
      actionType: ACTION.noAction,
      activeCard: []
    });
    switchPlayer();
  };

  const CardResolver = () => {
    return (
      <CardContainer>
        <Card>
          {enemyState.activeCard.map(cardText => {
            return <p>{cardText}</p>;
          })}
        </Card>
        <button onClick={handleResolveCardClicked}>RESOLVED</button>
      </CardContainer>
    );
  };

  return (
    <Container>
      <button onClick={resolveEnemyTurn}>DRAW CARD</button>
      <EnemyRow />
      {enemyState.isPerformingAction &&
        enemyState.actionType === ACTION.playCard && <CardResolver />}
      <DicePool>
        {enemyDice
          .filter(dieObj => {
            return dieObj.inPool;
          })
          .map(dieObj => {
            return (
              <Die
                key={dieObj.id}
                dieObject={dieObj}
                onDieClick={selectDie}
              />
            );
          })}
      </DicePool>
      <ActionRow />
    </Container>
  );
};

export default PlayingField;
