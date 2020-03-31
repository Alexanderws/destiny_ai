import React from "react";

import RangedIcon from "../assets/ranged.icon";
import MeleeIcon from "../assets/melee.icon";
import IndirectIcon from "../assets/indirect.icon";
import ShieldsIcon from "../assets/shields.icon";
import ResourceIcon from "../assets/resource.icon";
import DisruptIcon from "../assets/disrupt.icon";
import DiscardIcon from "../assets/discard.icon";
import BlankIcon from "../assets/blank.icon";

const DieSymbol = props => {
  const { value, symbol } = props;
  const symbolSize = 22;

  switch (symbol) {
    case "blank":
      return <BlankIcon size={symbolSize} />;
    case "ranged":
      return (
        <React.Fragment>
          {value}
          <RangedIcon size={symbolSize} />
        </React.Fragment>
      );
    case "melee":
      return (
        <React.Fragment>
          {value}
          <MeleeIcon size={symbolSize} />
        </React.Fragment>
      );
    case "indirect":
      return (
        <React.Fragment>
          {value}
          <IndirectIcon size={symbolSize} />
        </React.Fragment>
      );
    case "shields":
      return (
        <React.Fragment>
          {value}
          <ShieldsIcon size={symbolSize} />
        </React.Fragment>
      );
    case "resource":
      return (
        <React.Fragment>
          {value}
          <ResourceIcon size={symbolSize} />
        </React.Fragment>
      );
    case "disrupt":
      return (
        <React.Fragment>
          {value}
          <DisruptIcon size={symbolSize} />
        </React.Fragment>
      );
    case "discard":
      return (
        <React.Fragment>
          {value}
          <DiscardIcon size={symbolSize} />
        </React.Fragment>
      );
    default:
      return <BlankIcon size={symbolSize} />;
  }
};

export default DieSymbol;
