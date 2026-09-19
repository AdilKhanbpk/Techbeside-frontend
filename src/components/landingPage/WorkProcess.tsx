"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import {
  FaMapMarkedAlt,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

import ProcessIllustration from "./Processillustrations";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const steps = [
  {
    id: "01",
    title: "Plan the roadmap",
    description:
      "We agree on the feature list for the first release and the ones after it, along with the timeline and scope for each.",
    icon: FaMapMarkedAlt,
  },
  {
    id: "02",
    title: "Design the interface",
    description:
      "Every screen earns its place — no clutter, just the details that lead people to the action they came for.",
    icon: FaPaintBrush,
  },
  {
    id: "03",
    title: "Build the app",
    description:
      "Builds ship every 2–3 weeks for your feedback and approval, so there are no surprises at the end.",
    icon: FaCode,
  },
  {
    id: "04",
    title: "Run tests",
    description:
      "Automated tests cut QA time by 80%, and manual review catches what scripts alone would miss.",
    icon: FaBug,
  },
  {
    id: "05",
    title: "Launch the solution",
    description:
      "We handle the cutover so your audience moves to the new app without noticing the switch.",
    icon: FaRocket,
  },
  {
    id: "06",
    title: "Support or move in-house",
    description:
      "Keep us on for ongoing support, or we hand the project cleanly to your own team.",
    icon: FaUsers,
  },
];

export default function WorkProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);
  const isTeleportingRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  /*
   * Synchronize ref with React state.
   */
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  /*
   * ============================================================
   * WHEEL-DRIVEN STEP PROGRESS (DESKTOP)
   * ============================================================
   *
   * Locked viewport carousel backed by a 260vh container + sticky.
   *  - ALL native scroll is blocked while the sticky section is active.
   *  - Each wheel gesture advances exactly one step.
   *  - At boundaries (step 01↑ or step 06↓) we teleport past the
   *    container so the page continues to the next section instantly
   *    with no dead scroll space.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) return;

      // After a boundary teleport, let the page scroll freely
      // until the container is fully out of the viewport.
      if (isTeleportingRef.current) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      // Only intercept while the sticky zone is active:
      //   container top has scrolled above the navbar (80px)
      //   container bottom is still below the viewport
      if (rect.top > 80 || rect.bottom < window.innerHeight) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentIndex = activeIndexRef.current;

      // ---- BOUNDARY: teleport past the container ----
      if (currentIndex === 0 && direction === -1) {
        e.preventDefault();
        isTeleportingRef.current = true;
        // Jump to just before the container so the next scroll
        // takes the user to the content above.
        const containerTop = rect.top + window.scrollY;
        window.scrollTo({ top: Math.max(0, containerTop - window.innerHeight + 1), behavior: "auto" });
        setTimeout(() => { isTeleportingRef.current = false; }, 600);
        return;
      }
      if (currentIndex === steps.length - 1 && direction === 1) {
        e.preventDefault();
        isTeleportingRef.current = true;
        // Jump to just after the container so the next scroll
        // takes the user to the content below.
        const containerBottom = rect.top + window.scrollY + container.offsetHeight;
        window.scrollTo({ top: containerBottom - window.innerHeight + 1, behavior: "auto" });
        setTimeout(() => { isTeleportingRef.current = false; }, 600);
        return;
      }

      // ---- INSIDE STEPS: block all native scroll ----
      e.preventDefault();

      // Cooldown: consume the event but don't change step
      if (isProgrammaticScrollRef.current) return;

      const nextIndex = currentIndex + direction;
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);

      isProgrammaticScrollRef.current = true;
      setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  /*
   * ============================================================
   * PROGRAMMATIC STEP SELECTION
   * ============================================================
   *
   * Updates state only — no page scroll needed since the section
   * stays pinned in the viewport.
   */
  const changeStep = (index: number) => {
    const safeIndex = Math.max(0, Math.min(steps.length - 1, index));
    activeIndexRef.current = safeIndex;
    setActiveIndex(safeIndex);
  };

  /*
   * ============================================================
   * MOBILE TOUCH SWIPE HANDLERS
   * ============================================================
   */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;
    touchStartXRef.current = null;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        changeStep(activeIndex + 1);
      } else {
        changeStep(activeIndex - 1);
      }
    }
  };

  const active = steps[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-auto md:h-[260vh]"
    >
      <section
        className="
          md:sticky
          md:top-[80px]
          w-full
          min-h-fit
          md:h-[calc(100vh-80px)]
          md:min-h-[620px]
          md:max-h-[880px]
          overflow-hidden
          px-4
          sm:px-6
          md:px-8
          py-8
          md:py-10
          bg-white
          text-gray-900
          flex
          flex-col
          justify-center
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            w-full
            h-full
            flex
            flex-col
            justify-center
            gap-6
            md:gap-8
          "
        >
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="shrink-0">
            <div className="flex items-center gap-3 mb-2 md:mb-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-50 animate-pulse" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
              </span>

              <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
                Our Process
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-6">
              <h2
                className={`
                  ${display.className}
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  leading-[1.08]
                `}
              >
                How we turn ideas{" "}
                <span className="text-indigo-600">into reality.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed max-w-md lg:pb-1">
                A clear, collaborative process designed to keep your project
                moving from the first idea to the final launch.
              </p>
            </div>
          </div>

          {/* =====================================================
              MOBILE STEP INDICATOR PILLS (< md)
          ====================================================== */}
          <div className="flex md:hidden items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 shrink-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => changeStep(index)}
                  className={`
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-xl
                    text-xs
                    font-semibold
                    whitespace-nowrap
                    transition-all
                    duration-300
                    border
                    ${isActive
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-[1.02]"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                    }
                  `}
                >
                  <Icon
                    className={
                      isActive ? "text-white text-xs" : "text-indigo-600 text-xs"
                    }
                  />
                  <span>
                    {step.id} {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =====================================================
              MAIN CONTENT GRID
          ====================================================== */}
          <div
            className="
              flex-1
              min-h-0
              grid
              grid-cols-1
              md:grid-cols-[0.72fr_1.28fr]
              lg:grid-cols-[0.78fr_1.22fr]
              gap-6
              md:gap-10
              lg:gap-16
              items-center
            "
          >
            {/* ===================================================
                LEFT PROCESS NAVIGATION (DESKTOP ONLY)
            ==================================================== */}
            <div className="hidden md:block relative min-h-0">
              {/* Vertical line */}
              <div className="absolute left-[17px] top-5 bottom-5 w-px bg-gray-200" />

              {/* Active animated height line */}
              <motion.div
                className="
                  absolute
                  left-[17px]
                  top-5
                  w-px
                  bg-indigo-600
                  origin-top
                "
                animate={{
                  height:
                    steps.length === 1
                      ? "0%"
                      : `${(activeIndex / (steps.length - 1)) * 100}%`,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <div className="relative flex flex-col justify-center h-full">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  const isActive = index === activeIndex;
                  const isCompleted = index < activeIndex;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => changeStep(index)}
                      className="
                        group
                        relative
                        flex
                        items-center
                        gap-4
                        w-full
                        text-left
                        py-2.5
                        focus:outline-none
                      "
                    >
                      {/* Circle indicator */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          backgroundColor: isActive
                            ? "#4f46e5"
                            : isCompleted
                              ? "#eef2ff"
                              : "#ffffff",
                          borderColor: isActive
                            ? "#4f46e5"
                            : isCompleted
                              ? "#c7d2fe"
                              : "#e5e7eb",
                        }}
                        transition={{ duration: 0.25 }}
                        className="
                          relative
                          z-10
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border-2
                        "
                      >
                        <Icon
                          className={`
                            text-sm
                            transition-colors
                            duration-300
                            ${isActive
                              ? "text-white"
                              : isCompleted
                                ? "text-indigo-500"
                                : "text-gray-400 group-hover:text-indigo-500"
                            }
                          `}
                        />
                      </motion.div>

                      {/* Text */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`
                              text-[10px]
                              font-mono
                              tracking-wider
                              transition-colors
                              ${isActive ? "text-indigo-600" : "text-gray-400"
                              }
                            `}
                          >
                            {step.id}
                          </span>

                          {isActive && (
                            <motion.span
                              layoutId="process-active-line"
                              className="h-px w-5 bg-indigo-400"
                            />
                          )}
                        </div>

                        <p
                          className={`
                            ${display.className}
                            mt-0.5
                            text-sm
                            md:text-[15px]
                            font-semibold
                            transition-colors
                            duration-300
                            ${isActive
                              ? "text-gray-900"
                              : "text-gray-400 group-hover:text-gray-700"
                            }
                          `}
                        >
                          {step.title}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ===================================================
                RIGHT PREMIUM PREVIEW CARD
            ==================================================== */}
            <div className="relative min-h-0 w-full">
              {/* Ambient glow */}
              <div
                className="
                  absolute
                  -inset-6
                  md:-inset-8
                  bg-indigo-500/[0.04]
                  blur-3xl
                  rounded-full
                  pointer-events-none
                "
              />

              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="
                  relative
                  h-full
                  max-h-[520px]
                  rounded-[1.4rem]
                  sm:rounded-[1.7rem]
                  border
                  border-gray-200
                  bg-white
                  shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)]
                  overflow-hidden
                  flex
                  flex-col
                "
              >
                {/* Card top bar */}
                <div
                  className="
                    shrink-0
                    flex
                    items-center
                    justify-between
                    px-4
                    sm:px-6
                    py-3
                    border-b
                    border-gray-100
                  "
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-600" />
                    <span className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.16em]">
                      Project workflow
                    </span>
                  </div>

                  <span className="text-[10px] md:text-xs font-mono text-gray-400">
                    {active.id} / 06
                  </span>
                </div>

                {/* Illustration container */}
                <div className="flex-1 min-h-[200px] sm:min-h-[220px] md:min-h-0 p-3 sm:p-5">
                  <div
                    className="
                      relative
                      h-full
                      min-h-[180px]
                      sm:min-h-[200px]
                      rounded-[1.1rem]
                      sm:rounded-[1.2rem]
                      overflow-hidden
                      bg-[#f8f9fc]
                      border
                      border-gray-100
                    "
                  >
                    {/* Grid background */}
                    <div
                      className="absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage:
                          "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={active.id}
                        initial={{
                          opacity: 0,
                          scale: 0.96,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 1.02,
                          y: -12,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <ProcessIllustration id={active.id} />
                      </motion.div>
                    </AnimatePresence>

                    {/* Current stage badge */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={active.id}
                          initial={{
                            opacity: 0,
                            y: 6,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -4,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            rounded-lg
                            border
                            border-white/80
                            bg-white/80
                            backdrop-blur-md
                            px-2.5
                            py-1.5
                            sm:px-3
                            sm:py-2
                            shadow-sm
                          "
                        >
                          <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-gray-400">
                            Current stage
                          </span>

                          <p
                            className={`
                              ${display.className}
                              text-[11px]
                              sm:text-xs
                              font-semibold
                              text-gray-800
                              mt-0.5
                            `}
                          >
                            {active.title}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className="shrink-0 px-4 sm:px-6 pb-4 sm:pb-6">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active.id}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="
                            hidden
                            sm:flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-indigo-50
                            border
                            border-indigo-100
                          "
                        >
                          <ActiveIcon className="text-indigo-600 text-sm" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono text-indigo-600">
                              {active.id}
                            </span>

                            <span className="h-px w-5 bg-indigo-200" />
                          </div>

                          <h3
                            className={`
                              ${display.className}
                              text-base
                              sm:text-lg
                              md:text-xl
                              font-bold
                              text-gray-900
                            `}
                          >
                            {active.title}
                          </h3>

                          <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-snug sm:leading-relaxed max-w-xl">
                            {active.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Progress bar */}
                  <div className="flex items-center gap-1.5 mt-4 sm:mt-5">
                    {steps.map((step, index) => (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => changeStep(index)}
                        aria-label={`Go to ${step.title}`}
                        className="flex-1 py-1"
                      >
                        <motion.div
                          animate={{
                            backgroundColor:
                              index <= activeIndex ? "#4f46e5" : "#e5e7eb",
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="h-1 rounded-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom controls */}
              <div className="flex items-center justify-between mt-3 px-1">
                <span className="text-[10px] md:text-xs text-gray-400">
                  <span className="hidden md:inline">Scroll to explore</span>
                  <span className="md:hidden">Swipe or use arrows</span>
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={activeIndex === 0}
                    onClick={() => changeStep(activeIndex - 1)}
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-gray-200
                      flex
                      items-center
                      justify-center
                      text-gray-500
                      hover:border-indigo-300
                      hover:text-indigo-600
                      disabled:opacity-30
                      disabled:pointer-events-none
                      transition
                    "
                    aria-label="Previous step"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    disabled={activeIndex === steps.length - 1}
                    onClick={() => changeStep(activeIndex + 1)}
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-gray-200
                      flex
                      items-center
                      justify-center
                      text-gray-500
                      hover:border-indigo-300
                      hover:text-indigo-600
                      disabled:opacity-30
                      disabled:pointer-events-none
                      transition
                    "
                    aria-label="Next step"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
