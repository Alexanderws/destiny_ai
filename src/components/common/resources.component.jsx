import React from "react";
import styled from "styled-components";

import ResourceIcon from "../../assets/icons/resource.icon";

import { UI_COLOR, TEXT_COLOR } from "../../assets/constants/colors";
import { FONT_SIZE } from "../../assets/constants/sizes";

const Container = styled.div`
  color: ${TEXT_COLOR.black};
  fill-color: ${TEXT_COLOR.black};
  font-weight: 600;
  display: flex;
  position: relative;
  height: 120px;
  width: 76px;
  padding: 2px;
  background: transparent;
  overflow: hidden;
`;

const Corner = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: 0;
  right: -216px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  background-color: ${UI_COLOR.resourceContainerDark};
  z-index: -1;
`;

const InnerContainer = styled.div`
  display: flex;
  height: 116px;
  width: 72px;
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
  right: -219px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  z-index: -1;
`;

const ResourceContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 6px 0;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: end;
  flex: 1;
  font-size: ${FONT_SIZE.damageResourceValue};
`;

const AdjustButton = styled.button`
  height: 30px;
  width: 40px;
  background-color: transparent;
  font-weight: 800;
  cursor: pointer;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  margin: 2px 0;
  font-size: 1.6rem;
  border: 0;
  color: ${TEXT_COLOR.blackDim};

  transition: color 0.15s, border 0.15s;

  &:hover {
    color: ${TEXT_COLOR.black};
    height: 32px;
    margin-top: 0;
    border: 1px solid ${UI_COLOR.resourceContainerDark};
    border-bottom: 3px solid ${UI_COLOR.resourceContainerDark};
  }

  &:active {
    height: 30px;
    margin: 2px 0;
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
