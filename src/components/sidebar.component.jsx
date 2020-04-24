import React from "react";
import styled from "styled-components";

import { UI_COLOR, TEXT_COLOR } from "../assets/constants/colors";
import {
  FONT_SIZE,
  Z_INDEX,
  ELEMENT_WIDTH,
} from "../assets/constants/sizes";
import { ACTION, ACTION_DESCRIPTION } from "../assets/constants/actions";
import StyledButton from "./common/styled-button.component";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: -${ELEMENT_WIDTH.sidebar};
  width: ${ELEMENT_WIDTH.sidebar};
  height: 100vh;
  background-color: ${UI_COLOR.backgroundDark};
  color: ${TEXT_COLOR.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 160px 20px;
  z-index: ${Z_INDEX.sideBar};

  transition: right 0.4s;

  &.showing {
    right: 0;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  padding: 0;
  text-align: center;
  font-size: ${FONT_SIZE.turnTitle};
`;

const TextBox = styled.p`
  width: 100%;
  text-align: left;
  margin: 10px 0;
`;

const ActionTitle = styled.span`
  font-size: ${FONT_SIZE.default};
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  margin-bottom: 8px;
  margin-left: 8px;
`;

const ActionContainer = styled.div`
  display: flex;
`;

const SpinnerContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &.animate {
    animation: spin 1s infinite linear;
  }
`;

const SpinnerElement = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #fff;
`;

const SideBar = ({ show, actions, onDoneClicked }) => {
  let highestScore = 0;
  let bestScoringAction = ACTION.noAction;

  actions.forEach((action) => {
    if (action.score > highestScore) {
      highestScore = action.score;
      bestScoringAction = action.actionType;
    }
  });

  console.log("bestAction: ", bestScoringAction);

  return (
    <Container className={show && "showing"}>
      <Title>ENEMY TURN</Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <SpinnerContainer className={show ? "animate" : ""}>
            <SpinnerElement />
            <SpinnerElement />
          </SpinnerContainer>{" "}
          <TextBox>Evaluating actions:</TextBox>
        </div>
        {actions &&
          actions.length &&
          actions.map((action) => {
            return (
              <ActionContainer key={action.actionType}>
                <SpinnerElement />
                <ActionTitle>
                  {ACTION_DESCRIPTION[action.actionType]}
                </ActionTitle>
              </ActionContainer>
            );
          })}
      </div>
      <StyledButton primary onClick={onDoneClicked}>
        DONE
      </StyledButton>
    </Container>
  );
};

export default SideBar;
