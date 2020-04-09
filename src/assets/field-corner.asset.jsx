import React from "react";

const shadowStyleTop = {
  webkitFilter: "drop-shadow( 0px 6px 2px rgba(0, 0, 0, .2))",
  filter: "drop-shadow( 0px 10px 4px rgba(0, 0, 0, .2))"
};

const shadowStyleBottom = {
  webkitFilter: "drop-shadow( 0px 6px 2px rgba(0, 0, 0, .2))",
  filter: "drop-shadow( 0px -6px 4px rgba(0, 0, 0, .1))"
};

const FieldCorner = ({ position = "topLeft" }, ...props) => {
  const points = {
    topLeft: "0 0 150 0 100 30 0 30",
    topRight: "0 0 150 0 150 30 50 30",
    bottomLeft: "0 0 100 0 150 30 0 30",
    bottomRight: "50 0 150 0 150 30 0 30"
  };

  const margin = position.includes("top") ? "0 0 -30px 0" : "-30px 0 0 0";

  return (
    <div
      style={{
        width: "150px",
        height: "30px",
        margin: margin
      }}
      {...props}
    >
      <svg
        overflow="inherit"
        width="150px"
        height="30px"
        viewBox="0 0 150 30"
        style={
          position.includes("top") ? shadowStyleTop : shadowStyleBottom
        }
      >
        <title>Rectangle</title>
        {/* <filter id={position} height={shadowHeight}>
          <feGaussianBlur in="SourceAlpha" stdDeviation={blurDeviation} />
          <feOffset dx="0" dy={shadowY} result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter> */}
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g width="150px" height="40px" id="Artboard" fill="#FFFFFF">
            <polygon
              /* style={{filter: "url(#" + position + ")" }} */
              id="Rectangle"
              points={points[position]}
            ></polygon>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default FieldCorner;
