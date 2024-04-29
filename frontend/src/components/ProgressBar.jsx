import React, { useEffect, useState } from "react";
import { MAX, MIN } from "../constants";

// for scalability add a function props
const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));

    if (value == MAX) {
        onComplete()
    }
  }, [value]);

  

  return (
    <div className="progress">
      <span style={{ color: percent > 53 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
      ></div>
    </div>
  );
};

export default ProgressBar;
