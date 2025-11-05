"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { colors } from "../../../lib/colors";

interface InteractiveCircle2Props {
  shouldBeFilled?: boolean;
  onClick?: () => void;
  pathD?: string;
  isBouncing?: boolean; // 💥 nouvelle prop
}

export const InteractiveCircle2 = ({
  shouldBeFilled,
  onClick,
  pathD,
  isBouncing = false,
}: InteractiveCircle2Props) => {
  const [hovered, setHovered] = useState(false);

  const fillColor = useMemo(() => {
    if (shouldBeFilled) return colors.secondary
    if (hovered) return colors.tertiary
    return "transparent"
  }, [shouldBeFilled, hovered]);

  return (
    <motion.svg
      viewBox="0 0 300 300"
      className="w-35 h-35 relative"
      animate={{
        scale: isBouncing ? 1.05 : 1, // 💥 zoom quand le son se joue
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 15,
      }}
    >
      <path
        d={
          pathD ||
          "M150,30 C190,25 260,90 220,160 C180,230 100,250 70,180 C40,110 110,40 150,30 Z"
        }
        fill={fillColor}
        stroke="#141414"
        strokeWidth="2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </motion.svg>
  );
};

export default InteractiveCircle2;
