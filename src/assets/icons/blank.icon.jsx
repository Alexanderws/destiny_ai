import React from "react";

const BlankIcon = ({ size }) => {
  return (
    <div style={{ width: size, height: size }}>
      <svg
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>Blank</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Blank"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <polygon
            id="Rectangle"
            fill="#000000"
            points="6 12 26 12 28 14 28 18 26 20 6 20 4 18 4 14"
          ></polygon>
        </g>
      </svg>
    </div>
  );
};

export default BlankIcon;
