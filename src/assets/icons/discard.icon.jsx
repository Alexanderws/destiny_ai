import React from "react";

const DiscardIcon = ({ size }) => {
  return (
    <div style={{ width: size, height: size }}>
      <svg
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>Discard</title>
        <g
          id="Discard"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M24.9998375,22.01 L25,28 L12.1528375,28 L24.9998375,22.01 Z M24.9991467,14.958 L24.9998375,17.596 L6.99983754,25.99 L6.99914667,23.352 L24.9991467,14.958 Z M24.9987649,8.974 L24.9991467,11.648 L6.99914667,20.042 L6.99876493,17.368 L24.9987649,8.974 Z M25,4 L24.9997649,6.767 L6.99876493,15.16 L7,4 L25,4 Z"
            id="Combined-Shape"
            fill="#000000"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default DiscardIcon;
