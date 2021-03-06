import * as React from "react";

function SvgCircleActive(props) {
  return (
    <svg width={10} height={10} {...props}>
      <circle
        cx={492}
        cy={247}
        r={5}
        transform="translate(-487 -242)"
        fill="#B1B1B1"
        fillRule="nonzero"
        opacity={0.799}
      />
    </svg>
  );
}

export default SvgCircleActive;