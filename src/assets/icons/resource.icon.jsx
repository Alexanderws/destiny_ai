import React from "react";

const ResourceIcon = ({ size }) => {
  return (
    <div style={{ width: size, height: size }}>
      <svg
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>Resource</title>
        <g
          id="Resource"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M9.29007996,18.0006762 C9.96217763,20.2581196 11.7424215,22.038216 13.9999537,22.7101075 L14,28 L4,28 L4,18 L9.29007996,18.0006762 Z M28,18 L28,28 L18,28 L18.0006762,22.70992 C20.2579096,22.0378849 22.0378849,20.2579096 22.70992,18.0006762 L28,18 Z M16,11 C18.7614237,11 21,13.2385763 21,16 C21,18.7614237 18.7614237,21 16,21 C13.2385763,21 11,18.7614237 11,16 C11,13.2385763 13.2385763,11 16,11 Z M14,4 L13.9999537,9.28989247 C11.7422116,9.96184649 9.96184649,11.7422116 9.28989247,13.9999537 L4,14 L4,4 L14,4 Z M28,4 L28,14 L22.7101075,13.9999537 C22.038216,11.7424215 20.2581196,9.96217763 18.0006762,9.29007996 L18,4 L28,4 Z"
            id="Combined-Shape"
            fill="#000000"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default ResourceIcon;
