import * as React from "react";

function SvgPayLater(props) {
  return (
    <svg width={14} height={14} {...props}>
      <path
        d="M7 14c1.938 0 3.589-.682 4.953-2.047C13.318 10.59 14 8.938 14 7c0-1.938-.682-3.589-2.047-4.953C10.59.682 8.938 0 7 0 5.062 0 3.406.688 2.031 2.063.677 3.417 0 5.063 0 7c0 1.938.682 3.589 2.047 4.953C3.41 13.318 5.062 14 7 14zm.25-1v-1h-.5v1c-.854-.02-1.698-.25-2.531-.688l.5-.843-.438-.25-.5.844a5.187 5.187 0 01-1.031-.813 5.187 5.187 0 01-.813-1.031l.844-.5-.25-.438-.844.5C1.25 8.948 1.022 8.104 1 7.25h1v-.5H1c.02-.854.25-1.698.688-2.531l.843.5.25-.438-.844-.5c.209-.354.48-.698.813-1.031a5.187 5.187 0 011.031-.813l.5.844.438-.25-.5-.844C5.052 1.25 5.896 1.022 6.75 1v1h.5V1c.854.02 1.698.25 2.531.688l-.5.843.438.25.5-.844c.354.209.698.48 1.031.813.333.333.604.677.813 1.031l-.844.5.25.438.844-.5c.437.833.666 1.677.687 2.531h-1v.5h1c-.02.854-.25 1.698-.688 2.531l-.843-.5-.25.438.844.5c-.209.354-.48.698-.813 1.031a5.187 5.187 0 01-1.031.813l-.5-.844-.438.25.5.844c-.833.437-1.677.666-2.531.687zM7 8c.354 0 .635-.156.844-.469H11.5v-1H7.875a1.02 1.02 0 00-.375-.406V4h-1v2.125c-.333.208-.5.5-.5.875 0 .292.094.531.281.719A.973.973 0 007 8z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgPayLater;
