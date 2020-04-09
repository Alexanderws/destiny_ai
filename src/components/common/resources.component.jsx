import React from "react";
import styled from "styled-components";

import ResourceIcon from "../../assets/icons/resource.icon";
import StyledContainer from "./styled-container.component";

import { UI_COLOR } from "../../assets/constants/colors";

const Container = styled.div`
  display: flex;
  position: relative;
  height: 170px;
  padding: 3px;
  background: transparent;
  overflow: hidden;
`;

const Corner = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: 0;
  right: -204px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  background-color: ${UI_COLOR.resourceContainerDark};
  z-index: -1;
`;

const InnerContainer = styled.div`
  display: flex;
  height: 164px;
  width: 86px;
  position: relative;
  background: transparent;
  overflow: hidden;
`;

const InnerCorner = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  background-color: ${UI_COLOR.resourceContainer};
  bottom: 0;
  right: -208px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  z-index: -1;
`;

const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 20px;
  justify-content: flex-start;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const AdjustButton = styled.button`
  height: 40px;
  width: 50px;
  background-color: transparent;
  margin: 8px 0;
  font-weight: 800;
  cursor: pointer;
  font-size: 1.6rem;
  border: 2px solid ${UI_COLOR.resourceContainerDark};

  &:hover {
    height: 42px;
    margin: 6px 0 8px 0;
    border-bottom: 4px solid ${UI_COLOR.resourceContainerDark};
  }

  &:active {
    height: 40px;
    margin: 8px 0;
    background-color: ${UI_COLOR.resourceContainerDark};
    border-bottom: 2px solid ${UI_COLOR.resourceContainerDark};
  }
`;

const Resources = ({ resources, onAdjustClicked }) => {
  return (
    <Container>
      <Corner />
      <InnerContainer>
        <InnerCorner />
        <ResourceContainer>
          <ValueContainer>
            <span style={{ marginRight: "4px" }}>{resources}</span>
            <ResourceIcon size={24} />
          </ValueContainer>
          <AdjustButton
            name="plus"
            onClick={() => onAdjustClicked("plus")}
          >
            +
          </AdjustButton>
          <AdjustButton
            name="plus"
            onClick={() => onAdjustClicked("minus")}
          >
            -
          </AdjustButton>
        </ResourceContainer>
      </InnerContainer>
    </Container>
  );
};

export default Resources;
