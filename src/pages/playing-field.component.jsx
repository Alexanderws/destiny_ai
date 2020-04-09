import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";
import { EnemyContext } from "../contexts/enemy.context";

import EnemyRow from "../components/enemy-row.component";
import BattlefieldTop from "../components/battlefield-top.component";
import BattlefieldBottom from "../components/battlefield-bottom.component";
import PlayerRow from "../components/player-row.component";
import ActionRow from "../components/action-row.component";
import Die from "../components/common/die.component";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const DicePool = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 160px;
  background-color: #afa9a0;
  min-height: 180px;
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
    isPlayerTurn,
    enemyHasPassed,
    playerHasPassed,
    switchPlayer
  } = useContext(GameContext);
  const {
    dice,
    drawCard,
    selectDie,
    characters: enemyCharacters
  } = useContext(EnemyContext);
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

  const getPossibleActions = () => {
    let actions = [{ actionType: ACTION.passTurn, score: 0 }];
    const diceInPool = dice.filter(dieObj => dieObj.inPool);

    // check if dice in pool

    // check if enough damage to kill
    if ("enough damage to kill") {
      actions.push({ actionType: ACTION.resolveMeleeDice, score: 10 });
    }

    // check if characters are activated
    if (enemyCharacters.some(character => character.isReady)) {
      actions.push({ actionType: ACTION.activateCharacter, score: 0 });
    }

    return actions;
  };

  const resolveEnemyTurn = () => {
    let possibleActions = getPossibleActions();

    const enemyCard = drawCard();
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
      <BattlefieldTop>
        <EnemyRow />
      </BattlefieldTop>
      {enemyState.isPerformingAction &&
        enemyState.actionType === ACTION.playCard && <CardResolver />}
      <DicePool>
        {dice
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
      <BattlefieldBottom>
        <ActionRow />
        <PlayerRow />
      </BattlefieldBottom>
    </Container>
  );
};

export default PlayingField;
