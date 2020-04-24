import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { GameContext } from "../contexts/game.context";
import { PlayerContext } from "../contexts/player.context";
import { EnemyContext } from "../contexts/enemy.context";
import { ELEMENT_WIDTH } from "../assets/constants/sizes";

import StyledButton from "../components/common/styled-button.component";
import EnemyRow from "../components/enemy-row.component";
import BattlefieldTop from "../components/battlefield-top.component";
import TurnOrderAnimation from "../components/turn-order-animation.component";
import BattlefieldBottom from "../components/battlefield-bottom.component";
import PlayerRow from "../components/player-row.component";
import ActionRow from "../components/action-row.component";
import Die from "../components/common/die.component";
import Resources from "../components/common/resources.component";
import SideBar from "../components/sidebar.component";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const DicePool = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 160px;
  background-color: #afa9a0;
  min-height: 160px;
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

const ActionContainer = styled.div`
  width: calc(46px + ${ELEMENT_WIDTH.sidebar});
  margin-right: -10px;
  display: flex;
  justify-content: space-between;
`;

const ACTION = {
  activateCharacter: "activateCharacter",
  playCard: "playCard",
  resolveMeleeDice: "resolveMeleeDice",
  resolveRangedDice: "resolveRangedDice",
  resolveIndirectDice: "resolveIndirectDice",
  resolveShieldDice: "resolveShieldDice",
  resolveResourceDice: "resolveResourceDice",
  resolveDiscardDice: "resolveDiscardDice",
  resolveDisruptDice: "resolveDisruptDice",
  rerollDice: "rerollDice",
  claimBattlefield: "claimBattlefield",
  passTurn: "passTurn",
  noAction: "noAction",
};

const PlayingField = () => {
  const {
    isPlayerTurn,
    enemyHasPassed,
    switchPlayer,
    setAnimateTurnChange,
  } = useContext(GameContext);
  const { resources, adjustResources } = useContext(PlayerContext);
  const {
    dice,
    drawCard,
    selectDie,
    evaluateActions,
    possibleActions,
  } = useContext(EnemyContext);
  const [enemyState, setEnemyState] = useState({
    isPerformingAction: false,
    actionType: ACTION.noAction,
    activeCard: ["No card drawn"],
  });

  useEffect(() => {
    if (!isPlayerTurn && !enemyHasPassed) {
      startEnemyTurn();
    }
  }, [isPlayerTurn]);

  const startEnemyTurn = () => {
    evaluateActions();

    const enemyCard = drawCard();
    setEnemyState({
      isPerformingAction: true,
      actionType: ACTION.playCard,
      activeCard: enemyCard,
    });
    console.log("enemyCard: ", enemyCard);
  };

  const handleResolvedClicked = () => {
    setEnemyState({
      isPerformingAction: false,
      actionType: ACTION.noAction,
      activeCard: [],
    });
    switchPlayer();
    setAnimateTurnChange(true);
  };

  return (
    <Container>
      <TurnOrderAnimation />
      <SideBar
        show={enemyState.isPerformingAction}
        actions={possibleActions}
        onDoneClicked={handleResolvedClicked}
      />
      <BattlefieldTop>
        <EnemyRow />
      </BattlefieldTop>
      {/* {enemyState.isPerformingAction &&
        enemyState.actionType === ACTION.playCard && <CardResolver />} */}
      <DicePool>
        {dice
          .filter((dieObj) => {
            return dieObj.inPool;
          })
          .map((dieObj) => {
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
        <Column>
          <ActionRow />
          <PlayerRow />
        </Column>
        <ActionContainer>
          <Resources
            resources={resources}
            onAdjustClicked={adjustResources}
          />
          <StyledButton primary onClick={switchPlayer}>
            End turn
          </StyledButton>
        </ActionContainer>
      </BattlefieldBottom>
    </Container>
  );
};

export default PlayingField;
