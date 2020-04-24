import React from "react";
import styled from "styled-components";

import FieldCorner from "../assets/field-corner.asset";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 -4px 10px 4px rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
  display: flex;
  padding: 30px 60px 0 60px;
`;

const CornerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BattlefieldBottom = props => {
  return (
    <Container>
      <CornerContainer>
        <FieldCorner position="bottomLeft" />
        <FieldCorner position="bottomRight" />
      </CornerContainer>
      <InnerContainer>{props.children}</InnerContainer>
    </Container>
  );
};

export default BattlefieldBottom;
