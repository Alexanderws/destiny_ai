import React from "react";
import styled from "styled-components";

import { UI_COLOR, TEXT_COLOR } from "../../assets/constants/colors";
import { FONT_SIZE, ICON_SIZE } from "../../assets/constants/sizes";

import DamageIcon from "../../assets/icons/damage.icon";
import ShieldsIcon from "../../assets/icons/shield.icon";

const Container = styled.div`
  color: ${TEXT_COLOR.black};
  fill-color: ${TEXT_COLOR.black};
  display: flex;
  font-weight: 600;
  position: relative;
  height: 70px;
  width: 156px;
  padding: 2px;
  background: transparent;
  overflow: hidden;
`;

const Corner = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: 0;
  right: -134px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  background-color: ${UI_COLOR.damageContainerDark};
  z-index: -1;
`;

const InnerContainer = styled.div`
  display: flex;
  height: 66px;
  width: 152px;
  position: relative;
  background: transparent;
  overflow: hidden;
`;

const InnerCorner = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  background-color: ${UI_COLOR.damageContainer};
  bottom: 0;
  right: -137px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  z-index: -1;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 8px 2px 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ValueContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: end;
  justify-content: flex-end;
  font-size: ${FONT_SIZE.damageResourceValue};
  padding-right: 16px;
`;

const AdjustButton = styled.button`
  height: 24px;
  width: 32px;
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
    height: 26px;
    margin-top: 0;
    border: 1px solid ${UI_COLOR.damageContainerDark};
    border-bottom: 3px solid ${UI_COLOR.damageContainerDark};
  }

  &:active {
    height: 24px;
    margin: 2px 0;
    background-color: ${UI_COLOR.damageContainerDark};
    border-bottom: 2px solid ${UI_COLOR.damageContainerDark};
  }
`;

const DamageContainer = (props) => {
  const { character, onDamageClicked, onShieldsClicked } = props;

  return (
    <Container>
      <Corner />
      <InnerContainer>
        <InnerCorner />
        <Column>
          <Row>
            <AdjustButton
              style={{ paddingBottom: "4px" }}
              name="minus"
              onClick={() => onShieldsClicked("minus", character.id)}
            >
              -
            </AdjustButton>
            <ValueContainer>
              {character.shields}
              <ShieldsIcon
                size={ICON_SIZE.damageResource}
                color={TEXT_COLOR.black}
              />
            </ValueContainer>
            <AdjustButton
              name="plus"
              onClick={() => onShieldsClicked("plus", character.id)}
            >
              +
            </AdjustButton>
          </Row>
          <Row>
            <AdjustButton
              style={{ paddingBottom: "4px" }}
              name="minus"
              onClick={() => onDamageClicked("minus", character.id)}
            >
              -
            </AdjustButton>
            <ValueContainer>
              {character.damage}
              <DamageIcon
                size={ICON_SIZE.damageResource}
                color={TEXT_COLOR.black}
              />
            </ValueContainer>
            <AdjustButton
              name="plus"
              onClick={() => onDamageClicked("plus", character.id)}
            >
              +
            </AdjustButton>
          </Row>
        </Column>
      </InnerContainer>
    </Container>
  );
};

export default DamageContainer;
