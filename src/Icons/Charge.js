import * as React from "react";

function SvgCharge(props) {
  return (
    <svg width={18} height={12} {...props}>
      <path
        d="M16.571 12a.575.575 0 00.572-.571V1.143A.575.575 0 0016.57.57h-16A.575.575 0 000 1.143v10.286c0 .312.259.571.571.571h16zm-2.857-1.143H3.43a2.29 2.29 0 00-2.286-2.286V4a2.29 2.29 0 002.286-2.286h10.285A2.29 2.29 0 0016 4v4.571a2.29 2.29 0 00-2.286 2.286zM8.571 10c1.875 0 2.858-2.09 2.858-3.714 0-1.625-.983-3.715-2.858-3.715s-2.857 2.09-2.857 3.715S6.696 10 8.571 10zm1.715-1.429H6.857v-.857H8V5.143h-.018c-.143.223-.277.321-.49.509l-.688-.715 1.321-1.223h1.018v4h1.143v.857z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgCharge;
