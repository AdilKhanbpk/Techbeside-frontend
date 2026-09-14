"use client";
import React from "react";
import { motion } from "framer-motion";

const cyan = "#5EEAD4";
const cyanSoft = "#2A3B4A";
const amber = "#FDBA74";
const panel = "#1B2136";

/** Faint corner ticks repeated on every illustration for a consistent, drafted-by-hand feel. */
function Ticks() {
  return (
    <>
      {[
        [6, 6, "M0 6 L0 0 L6 0"],
        [194, 6, "M194 0 L200 0 L200 6"],
        [6, 144, "M0 144 L0 150 L6 150"],
        [194, 144, "M200 144 L200 150 L194 150"],
      ].map(([, , d], i) => (
        <path key={i} d={d as string} fill="none" stroke={cyanSoft} strokeWidth={1} />
      ))}
    </>
  );
}

function RoadmapIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="w-2/3 h-2/3">
      <Ticks />
      <path d="M20 120 C 60 40, 100 140, 180 40" fill="none" stroke={cyanSoft} strokeWidth={2} strokeDasharray="5 6" />
      <motion.path
        d="M20 120 C 60 40, 100 140, 180 40"
        fill="none"
        stroke={cyan}
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <circle cx={20} cy={120} r={3} fill={cyan} />
      <motion.circle
        cx={180}
        cy={40}
        r={5}
        fill={amber}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.0, duration: 0.3 }}
      />
    </svg>
  );
}

function DesignIllustration() {
  const rects = [
    { x: 30, y: 18, w: 140, h: 16 },
    { x: 30, y: 46, w: 60, h: 62 },
    { x: 100, y: 46, w: 70, h: 26 },
    { x: 100, y: 82, w: 70, h: 26 },
  ];
  return (
    <svg viewBox="0 0 200 150" className="w-2/3 h-2/3">
      <Ticks />
      {rects.map((r, i) => (
        <motion.rect
          key={i}
          x={r.x}
          y={r.y}
          width={r.w}
          height={r.h}
          rx={2}
          fill={i === 0 ? panel : "none"}
          stroke={i === 3 ? amber : cyan}
          strokeWidth={1.4}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.12, duration: 0.3 }}
          style={{ transformOrigin: `${r.x + r.w / 2}px ${r.y + r.h / 2}px` }}
        />
      ))}
    </svg>
  );
}

function BuildIllustration() {
  const bars = [
    { x: 32, w: 20, h: 38 },
    { x: 67, w: 20, h: 68 },
    { x: 102, w: 20, h: 48 },
    { x: 137, w: 20, h: 88 },
  ];
  return (
    <svg viewBox="0 0 200 150" className="w-2/3 h-2/3">
      <Ticks />
      <line x1={20} y1={128} x2={180} y2={128} stroke={cyanSoft} strokeWidth={1.4} />
      {bars.map((b, i) => (
        <motion.rect
          key={i}
          x={b.x}
          width={b.w}
          rx={2}
          fill="none"
          stroke={i === bars.length - 1 ? amber : cyan}
          strokeWidth={1.6}
          initial={{ y: 128, height: 0 }}
          animate={{ y: 128 - b.h, height: b.h }}
          transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

function TestIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="w-2/3 h-2/3">
      <Ticks />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(32, ${26 + i * 32})`}>
          <rect x={0} y={0} width={16} height={16} rx={2} fill="none" stroke={cyan} strokeWidth={1.6} />
          <motion.path
            d="M3 8 L7 12 L13 4"
            fill="none"
            stroke={i === 2 ? amber : cyan}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.2, duration: 0.3 }}
          />
          <rect x={30} y={3} width={128} height={9} rx={2} fill="none" stroke={cyanSoft} strokeWidth={1} />
        </g>
      ))}
    </svg>
  );
}

function LaunchIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="w-2/3 h-2/3">
      <Ticks />
      <line x1={30} y1={132} x2={170} y2={132} stroke={cyanSoft} strokeWidth={1.4} />
      <motion.g initial={{ y: 16 }} animate={{ y: -6 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <path d="M100 32 L112 64 L88 64 Z" fill="none" stroke={cyan} strokeWidth={1.6} />
        <rect x={90} y={60} width={20} height={28} rx={5} fill="none" stroke={cyan} strokeWidth={1.6} />
        <motion.path
          d="M100 88 L100 114"
          stroke={amber}
          strokeWidth={2.4}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        />
      </motion.g>
    </svg>
  );
}

function SupportIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="w-2/3 h-2/3">
      <Ticks />
      <motion.circle
        cx={80}
        cy={75}
        r={28}
        fill="none"
        stroke={cyan}
        strokeWidth={1.6}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.circle
        cx={120}
        cy={75}
        r={28}
        fill="none"
        stroke={cyanSoft}
        strokeWidth={1.6}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      />
      <motion.path
        d="M92 75 L108 75"
        stroke={amber}
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.3 }}
      />
    </svg>
  );
}

const illustrationMap: Record<string, React.FC> = {
  "01": RoadmapIllustration,
  "02": DesignIllustration,
  "03": BuildIllustration,
  "04": TestIllustration,
  "05": LaunchIllustration,
  "06": SupportIllustration,
};

export default function ProcessIllustration({ id }: { id: string }) {
  const Comp = illustrationMap[id] ?? RoadmapIllustration;
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Comp />
    </div>
  );
}