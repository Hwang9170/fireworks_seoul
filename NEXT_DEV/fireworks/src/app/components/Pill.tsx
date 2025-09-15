"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pill({ children, className = "" }: PillProps) {
  return (
    <button
      className={`px-6 py-2 rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff2e00] text-white text-base md:text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
