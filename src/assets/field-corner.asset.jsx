import React from "react";

const shadowStyleTop = {
  WebkitFilter: "drop-shadow( 0px 6px 2px rgba(0, 0, 0, .2))",
  filter: "drop-shadow( 0px 10px 4px rgba(0, 0, 0, .2))"
};

const shadowStyleBottom = {
  WebkitFilter: "drop-shadow( 0px 6px 2px rgba(0, 0, 0, .2))",
  filter: "drop-shadow( 0px -6px 4px rgba(0, 0, 0, .1))"
};

const FieldCorner = ({ position = "topLeft" }, ...props) => {
  const points = {
    topLeft: "0 0 150 0 100 20 0 20",
    topRight: "0 0 150 0 150 20 50 20",
    bottomLeft: "0 0 100 0 150 20 0 20",
    bottomRight: "50 0 150 0 150 20 0 20"
  };

  const margin = position.includes("top") ? "0 0 -20px 0" : "-20px 0 0 0";

  return (
    <div
      style={{
        width: "150px",
        height: "20px",
        margin: margin
      }}
    >
      <svg
        overflow="inherit"
        width="150px"
        height="20px"
        viewBox="0 0 150 20"
        style={
          position.includes("top") ? shadowStyleTop : shadowStyleBottom
        }
      >
        <title>Rectangle</title>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g width="150px" height="30px" id="Artboard" fill="#FFFFFF">
            <polygon id="Rectangle" points={points[position]}></polygon>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default FieldCorner;
