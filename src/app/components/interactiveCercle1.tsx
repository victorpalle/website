"use client";
import { useState } from "react";

interface InteractiveCircle1Props {
  shouldBeFilled?: boolean;
  onClick?: () => void;
}

export const InteractiveCircle1 = ({ shouldBeFilled, onClick }: InteractiveCircle1Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg viewBox="0 0 300 300" className="w-50 h-50">
      <path
        d="M150,30
           C190,20 260,90 220,160
           C180,230 100,250 70,180
           C40,110 110,40 150,30 Z"
        fill={hovered ? "#141414" : "transparent"}
        stroke="#141414"
        strokeWidth="1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </svg>
  );
};

export default InteractiveCircle1;
