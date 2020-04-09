import React from "react";
import styled from "styled-components";

import { UI_COLOR } from "../../assets/constants/colors";

const Container = styled.div`
  display: flex;
  position: relative;
  height: 56px;
  width: 140px;
  padding: 3px;
  text-transform: uppercase;
  color: white;
  background: transparent;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const Corner = styled.div`
  width: 300%;
  height: 300%;
  position: absolute;
  bottom: 0;
  right: -118px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  z-index: -1;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 44px;
  flex-grow: 1;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background: transparent;
  overflow: hidden;
`;

const InnerCorner = styled.div`
  width: 300%;
  height: 300%;
  position: absolute;
  bottom: 0;
  right: -106px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  z-index: -1;
`;

const StyledButton = props => {
  const colorType = props.primary ? "primary" : "secondary";

  return (
    <Container>
      <Corner style={{ background: UI_COLOR[colorType + "Dark"] }} />
      <InnerContainer onClick={props.onClick}>
        <InnerCorner style={{ background: UI_COLOR[colorType] }} />
        {props.children}
      </InnerContainer>
    </Container>
  );
};

export default StyledButton;
