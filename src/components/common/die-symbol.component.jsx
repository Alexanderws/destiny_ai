import React from "react";
import styled from "styled-components";

import { SYMBOL } from "../../assets/constants/die-symbols";

import RangedIcon from "../../assets/icons/ranged.icon";
import MeleeIcon from "../../assets/icons/melee.icon";
import IndirectIcon from "../../assets/icons/indirect.icon";
import ShieldIcon from "../../assets/icons/shield.icon";
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
    case SYMBOL.blank:
      return <BlankIcon size={symbolSize} />;
    case SYMBOL.ranged:
      return (
        <ValueContainer>
          {value}
          <RangedIcon size={symbolSize} />
        </ValueContainer>
      );
    case SYMBOL.melee:
      return (
        <ValueContainer>
          {value}
          <MeleeIcon size={symbolSize} />
        </ValueContainer>
      );
    case SYMBOL.indirect:
      return (
        <ValueContainer>
          {value}
          <IndirectIcon size={symbolSize} />
        </ValueContainer>
      );
    case SYMBOL.shield:
      return (
        <ValueContainer>
          {value}
          <ShieldIcon size={symbolSize} />
        </ValueContainer>
      );
    case SYMBOL.resource:
      return (
        <ValueContainer>
          {value}
          <ResourceIcon size={symbolSize} />
        </ValueContainer>
      );
    case SYMBOL.disrupt:
      return (
        <ValueContainer>
          {value}
          <DisruptIcon size={symbolSize} />
        </ValueContainer>
      );
    case SYMBOL.discard:
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
