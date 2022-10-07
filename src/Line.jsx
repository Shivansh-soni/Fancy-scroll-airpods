import React from "react";
import "./Line.css";

function Line() {
  return (
    <div className="container">
      <div className="line">
        <svg
          width="1840"
          height="458"
          viewBox="0 0 1840 458"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-886.181 455.407C206.913 -200.261 957.032 -31.2305 2151.14 263.542"
            stroke="#B983FF"
            stroke-width="5"
          />
        </svg>
      </div>
      <div className="bubble"></div>
    </div>
  );
}

export default Line;
