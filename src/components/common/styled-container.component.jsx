import React from "react";
import styled from "styled-components";

import { UI_COLOR } from "../../assets/constants/colors";

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 3px;
  background: transparent;
  overflow: hidden;
`;

const Corner = styled.div`
  width: 800%;
  height: 800%;
  position: absolute;
  bottom: 0;
  right: -628%;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  z-index: -1;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-grow: 1;
  background: transparent;
  overflow: hidden;
`;

const InnerCorner = styled.div`
  width: 800%;
  height: 800%;
  position: absolute;
  bottom: 0;
  right: -640%;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  z-index: -1;
`;

const StyledContainer = props => {
  return (
    <Container>
      <Corner style={{ background: UI_COLOR.resourceContainerDark }} />
      <InnerContainer onClick={props.onClick}>
        <InnerCorner style={{ background: UI_COLOR.resourceContainer }} />
        {props.children}
      </InnerContainer>
    </Container>
  );
};

export default StyledContainer;
