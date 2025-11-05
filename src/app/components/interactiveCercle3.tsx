"use client";
import { useState } from "react";
import { colors } from "../../../lib/colors";
import { motion } from "framer-motion";

interface InteractiveCircle3Props {
  shouldBeFilled?: boolean;
  onClick?: () => void;
  hoverEffect?: boolean;
  label?: string;
}

export const InteractiveCircle3 = ({
  shouldBeFilled,
  onClick,
  hoverEffect,
  label,
}: InteractiveCircle3Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      viewBox="0 0 300 300"
      className="w-150 h-150"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <motion.path
        d="M150,30
           C190,20 260,90 220,160
           C180,230 100,250 70,180
           C40,110 110,40 150,30 Z"
        fill={
          !hoverEffect
            ? "transparent"
            : hovered || shouldBeFilled
              ? colors.tertiary
              : "transparent"
        }
        stroke="#141414"
        strokeWidth="1"
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: hovered || shouldBeFilled ? 1 : 0.5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="z-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

      {label && (
        <motion.text
          x="150"
          y="130"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={colors.secondary}
          className="font-raleway text-[10px] z-0"
          style={{ pointerEvents: "none" }}
          initial={{ scale: 0.7 }}
          animate={{
            opacity: hovered || shouldBeFilled ? 1 : 0.7,
            scale: hovered || shouldBeFilled ? 1 : 0.7,
          }}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          {label}
        </motion.text>
      )}
    </svg>
  );
};

export default InteractiveCircle3;
