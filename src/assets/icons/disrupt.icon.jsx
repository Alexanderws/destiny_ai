import React from "react";

const DisruptIcon = ({ size }) => {
  return (
    <div style={{ width: size, height: size }}>
      <svg
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>Disrupt</title>
        <g
          id="Disrupt"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M28,15 L28,19 C23,19 19,23 19,28 L19,28 L15,28 C15,20.8202983 20.8202983,15 28,15 L28,15 Z M24,7.5 L24,13.5 C20.6061456,15.1693326 18.2728123,16.6693326 17,18 C15.7271877,19.3306674 14.3938544,21.6640007 13,25 L7,26 L11,22 L5.5,18.5 L15,17.5 L16,16.5 L16.5,8.5 L19.5,13.5 L24,7.5 Z M6,4.5 L13.5,15 L5,13 L6,4.5 Z"
            id="Combined-Shape"
            fill="#000000"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default DisruptIcon;
