"use client";
import { useState } from "react";

interface InteractiveCircle2Props {
  shouldBeFilled?: boolean;
  onClick?: () => void;
  pathD?: string; // chemin SVG personnalisé
  label?: string; // ✅ nouveau : texte au centre
}

export const InteractiveCircle2 = ({
  shouldBeFilled,
  onClick,
  pathD,
  label,
}: InteractiveCircle2Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[200px] h-[200px] flex items-center justify-center"
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <path
          d={
            pathD ||
            "M150,30 C190,25 260,90 220,160 C180,230 100,250 70,180 C40,110 110,40 150,30 Z"
          }
          fill={hovered || shouldBeFilled ? "#141414" : "transparent"}
          stroke="#141414"
          strokeWidth="2"
        />
      </svg>

      {label && (
        <span className="absolute text-xl font-raleway text-black font-medium select-none pointer-events-none">
          {label}
        </span>
      )}
    </div>
  );
};

export default InteractiveCircle2;
