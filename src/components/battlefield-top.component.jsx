import React from "react";
import styled from "styled-components";

import FieldCorner from "../assets/field-corner.asset";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 6px 10px 4px rgba(0, 0, 0, 0.2);
`;

const InnerContainer = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;

const CornerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BattlefieldTop = props => {
  return (
    <Container>
      <InnerContainer>{props.children}</InnerContainer>
      <CornerContainer>
        <FieldCorner position="topLeft" />
        <FieldCorner position="topRight" />
      </CornerContainer>
    </Container>
  );
};

export default BattlefieldTop;
