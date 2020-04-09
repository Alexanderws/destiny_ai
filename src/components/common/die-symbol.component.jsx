import React from "react";
import styled from "styled-components";

import RangedIcon from "../../assets/icons/ranged.icon";
import MeleeIcon from "../../assets/icons/melee.icon";
import IndirectIcon from "../../assets/icons/indirect.icon";
import ShieldsIcon from "../../assets/icons/shields.icon";
import ResourceIcon from "../../assets/icons/resource.icon";
import DisruptIcon from "../../assets/icons/disrupt.icon";
import DiscardIcon from "../../assets/icons/discard.icon";
import BlankIcon from "../../assets/icons/blank.icon";

const ValueContainer = styled.div`
  padding-left: 4px;
  display: flex;
`;

const DieSymbol = ({ value, symbol, symbolSize = 22 }) => {
  switch (symbol) {
    case "blank":
      return <BlankIcon size={symbolSize} />;
    case "ranged":
      return (
        <ValueContainer>
          {value}
          <RangedIcon size={symbolSize} />
        </ValueContainer>
      );
    case "melee":
      return (
        <ValueContainer>
          {value}
          <MeleeIcon size={symbolSize} />
        </ValueContainer>
      );
    case "indirect":
      return (
        <ValueContainer>
          {value}
          <IndirectIcon size={symbolSize} />
        </ValueContainer>
      );
    case "shields":
      return (
        <ValueContainer>
          {value}
          <ShieldsIcon size={symbolSize} />
        </ValueContainer>
      );
    case "resource":
      return (
        <ValueContainer>
          {value}
          <ResourceIcon size={symbolSize} />
        </ValueContainer>
      );
    case "disrupt":
      return (
        <ValueContainer>
          {value}
          <DisruptIcon size={symbolSize} />
        </ValueContainer>
      );
    case "discard":
      return (
        <ValueContainer>
          {value}
          <DiscardIcon size={symbolSize} />
        </ValueContainer>
      );
    default:
      return <BlankIcon size={symbolSize} />;
  }
};

export default DieSymbol;
