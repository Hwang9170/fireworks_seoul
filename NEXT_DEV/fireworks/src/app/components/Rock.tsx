"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

type RockProps = {
  src: string;             // /rocks/rock1.png ...
  size?: number;           // px
  x?: string | number;     // left %
  y?: string | number;     // top %
  rotate?: number;
  style?: CSSProperties;
};

export default function Rock({
  src,
  size = 180,
  x = "50%",
  y = "50%",
  rotate = 0,
  style,
}: RockProps) {
  return (
    <motion.div
      initial={{ y: 0, rotate }}
      animate={{ y: [-6, 6, -6], rotate: [rotate - 2, rotate + 2, rotate - 2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        left: typeof x === "number" ? x : x,
        top: typeof y === "number" ? y : y,
        width: size,
        height: size,
        pointerEvents: "none",
        ...style,
      }}
    >
      {/* 로컬 이미지 없으면 onError로 숨김 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="obsidian"
        width={size}
        height={size}
        className="drop-shadow-[0_0_30px_rgba(255,60,0,.45)]"
        onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
      />
    </motion.div>
  );
}
