"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const sectionRef = useRef<HTMLElement | null>(null);
  const activeIndexRef = useRef(0);

  const lockedRef = useRef(false);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const HEADER_HEIGHT = 80;

  /*
   * Keep the ref synchronized with React state.
   */
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  /*
   * ============================================================
   * SCROLL CONTROL
   * ============================================================
   *
   * The component itself stays in exactly the same position.
   *
   * While it is fully visible:
   *
   *   Wheel Down:
   *   01 → 02 → 03 → 04 → 05 → 06
   *
   *   Wheel Up:
   *   06 → 05 → 04 → 03 → 02 → 01
   *
   * At 01:
   *   Wheel Up = normal page scrolling
   *
   * At 06:
   *   Wheel Down = normal page scrolling
   *
   * This means the sections before/after this component
   * don't move while the process is being explored.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleWheel = (event: WheelEvent) => {
      /*
       * Don't apply this behavior on mobile/tablet.
       * Normal touch scrolling remains unchanged.
       */
      if (window.innerWidth < 768) return;

      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      /*
       * The section is considered "locked" when it is occupying
       * the viewport underneath the 80px navbar.
       *
       * We intentionally use a tolerance instead of requiring
       * pixel-perfect positioning.
       */
      const topDistance = Math.abs(rect.top - HEADER_HEIGHT);
      const bottomDistance = Math.abs(
        rect.bottom - window.innerHeight
      );

      const sectionIsInPosition =
        topDistance <= 120 && bottomDistance <= 120;

      if (!sectionIsInPosition) {
        return;
      }

      /*
       * Ignore very small trackpad movements.
       */
      if (Math.abs(event.deltaY) < 8) {
        return;
      }

      /*
       * If an animation/step change is already happening,
       * consume the wheel event so the page cannot move.
       */
      if (lockedRef.current) {
        event.preventDefault();
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;

      const current = activeIndexRef.current;
      const next = current + direction;

      /*
       * ========================================================
       * TOP OF PROCESS
       * ========================================================
       *
       * We are already at 01 and user scrolls upward.
       *
       * Allow normal browser scrolling so the previous section
       * can appear.
       */
      if (next < 0) {
        return;
      }

      /*
       * ========================================================
       * BOTTOM OF PROCESS
       * ========================================================
       *
       * We are already at 06 and user scrolls downward.
       *
       * Allow normal browser scrolling so OurValues can appear.
       */
      if (next >= steps.length) {
        return;
      }

      /*
       * ========================================================
       * PROCESS IS ACTIVE
       * ========================================================
       *
       * Stop the browser from moving the page.
       */
      event.preventDefault();

      lockedRef.current = true;

      /*
       * Update the ref immediately.
       * This is important because wheel events can happen faster
       * than React state updates.
       */
      activeIndexRef.current = next;

      /*
       * Change the visible process step.
       */
      setActiveIndex(next);

      /*
       * Small cooldown.
       *
       * This prevents one physical wheel gesture from jumping:
       *
       * 01 → 03 → 05
       *
       * and makes it:
       *
       * 01 → 02 → 03 → 04...
       */
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }

      wheelTimeoutRef.current = setTimeout(() => {
        lockedRef.current = false;
      }, 450);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);

      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, []);

  /*
   * ============================================================
   * BUTTON NAVIGATION
   * ============================================================
   */

  const changeStep = (index: number) => {
    const safeIndex = Math.max(
      0,
      Math.min(steps.length - 1, index)
    );

    activeIndexRef.current = safeIndex;
    setActiveIndex(safeIndex);
  };

  const active = steps[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        min-h-[calc(100svh-80px)]
        h-[calc(100svh-80px)]
        overflow-hidden
        px-5
        sm:px-6
        md:px-8
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          h-full
          flex
          flex-col
          justify-center
          py-6
          md:py-8
        "
      >
        {/* =====================================================
            COMPACT HEADER
        ====================================================== */}

        <div className="shrink-0 mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-50" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
            </span>

            <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.22em] text-gray-500">
              Our Process
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className={`
                ${display.className}
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                tracking-tight
                text-gray-900
                leading-[1.03]
              `}
            >
              How we turn ideas{" "}
              <span className="text-indigo-600">
                into reality.
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-500 leading-6 max-w-md lg:pb-1">
              A clear, collaborative process designed to keep your project
              moving from the first idea to the final launch.
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            flex-1
            min-h-0
            grid
            md:grid-cols-[0.72fr_1.28fr]
            lg:grid-cols-[0.78fr_1.22fr]
            gap-6
            md:gap-10
            lg:gap-16
            items-center
          "
        >
          {/* ===================================================
              LEFT PROCESS NAVIGATION
          ==================================================== */}

          <div className="relative min-h-0">
            {/* Vertical rail */}
            <div className="absolute left-[17px] top-5 bottom-5 w-px bg-gray-200" />

            {/* Active rail */}
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
                duration: 0.45,
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
                      py-2
                      md:py-2.5
                      focus:outline-none
                    "
                  >
                    {/* Circle */}
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
                          ${
                            isActive
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
                            ${
                              isActive
                                ? "text-indigo-600"
                                : "text-gray-400"
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
                          ${
                            isActive
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
              RIGHT PREMIUM CARD
          ==================================================== */}

          <div className="relative min-h-0">
            {/* Ambient glow */}
            <div
              className="
                absolute
                -inset-8
                bg-indigo-500/[0.035]
                blur-3xl
                rounded-full
                pointer-events-none
              "
            />

            <div
              className="
                relative
                h-full
                max-h-[520px]
                rounded-[1.7rem]
                border
                border-gray-200
                bg-white
                shadow-[0_25px_70px_-35px_rgba(15,23,42,0.25)]
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
                  px-5
                  md:px-6
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

              {/* Illustration */}
              <div className="flex-1 min-h-0 p-4 md:p-5">
                <div
                  className="
                    relative
                    h-full
                    min-h-[190px]
                    rounded-[1.2rem]
                    overflow-hidden
                    bg-[#f8f9fc]
                    border
                    border-gray-100
                  "
                >
                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  <AnimatePresence
                    mode="wait"
                    initial={false}
                  >
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
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <ProcessIllustration id={active.id} />
                    </motion.div>
                  </AnimatePresence>

                  {/* Current stage */}
                  <div className="absolute bottom-4 left-4">
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                    >
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
                          px-3
                          py-2
                          shadow-sm
                        "
                      >
                        <span className="text-[9px] uppercase tracking-widest text-gray-400">
                          Current stage
                        </span>

                        <p
                          className={`
                            ${display.className}
                            text-xs
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
              <div className="shrink-0 px-5 md:px-6 pb-5 md:pb-6">
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
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
                            text-lg
                            md:text-xl
                            font-bold
                            text-gray-900
                          `}
                        >
                          {active.title}
                        </h3>

                        <p className="mt-1.5 text-xs md:text-sm text-gray-500 leading-5 max-w-xl">
                          {active.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress */}
                <div className="flex items-center gap-1.5 mt-5">
                  {steps.map((step, index) => (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => changeStep(index)}
                      aria-label={`Go to ${step.title}`}
                      className="flex-1"
                    >
                      <motion.div
                        animate={{
                          backgroundColor:
                            index <= activeIndex
                              ? "#4f46e5"
                              : "#e5e7eb",
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
                Scroll to explore
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={activeIndex === 0}
                  onClick={() =>
                    changeStep(activeIndex - 1)
                  }
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
                  disabled={
                    activeIndex === steps.length - 1
                  }
                  onClick={() =>
                    changeStep(activeIndex + 1)
                  }
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
  );
}

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Space_Grotesk } from "next/font/google";
// import {
//   FaMapMarkedAlt,
//   FaPaintBrush,
//   FaCode,
//   FaBug,
//   FaRocket,
//   FaUsers,
// } from "react-icons/fa";

// import ProcessIllustration from "./Processillustrations";

// const display = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["600", "700"],
// });

// const steps = [
//   {
//     id: "01",
//     title: "Plan the roadmap",
//     description:
//       "We agree on the feature list for the first release and the ones after it, along with the timeline and scope for each.",
//     icon: FaMapMarkedAlt,
//   },
//   {
//     id: "02",
//     title: "Design the interface",
//     description:
//       "Every screen earns its place — no clutter, just the details that lead people to the action they came for.",
//     icon: FaPaintBrush,
//   },
//   {
//     id: "03",
//     title: "Build the app",
//     description:
//       "Builds ship every 2–3 weeks for your feedback and approval, so there are no surprises at the end.",
//     icon: FaCode,
//   },
//   {
//     id: "04",
//     title: "Run tests",
//     description:
//       "Automated tests cut QA time by 80%, and manual review catches what scripts alone would miss.",
//     icon: FaBug,
//   },
//   {
//     id: "05",
//     title: "Launch the solution",
//     description:
//       "We handle the cutover so your audience moves to the new app without noticing the switch.",
//     icon: FaRocket,
//   },
//   {
//     id: "06",
//     title: "Support or move in-house",
//     description:
//       "Keep us on for ongoing support, or we hand the project cleanly to your own team.",
//     icon: FaUsers,
//   },
// ];

// export default function WorkProcess() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const lastScrollTime = useRef(0);
//   const isAnimating = useRef(false);

//   /*
//    * Desktop:
//    * One wheel movement = one process step.
//    *
//    * We intentionally don't use window.scrollBy().
//    * The page continues scrolling naturally when the user reaches
//    * the first/last step.
//    */
//   useEffect(() => {
//     const handleWheel = (event: WheelEvent) => {
//       const section = sectionRef.current;

//       if (!section || window.innerWidth < 768) return;

//       const rect = section.getBoundingClientRect();

//       // Only control scrolling while this section is around the viewport.
//       const sectionIsActive =
//         rect.top <= window.innerHeight * 0.25 &&
//         rect.bottom >= window.innerHeight * 0.75;

//       if (!sectionIsActive) return;

//       const now = Date.now();

//       // Prevent trackpad from changing multiple steps at once.
//       if (now - lastScrollTime.current < 550) {
//         event.preventDefault();
//         return;
//       }

//       if (isAnimating.current) {
//         event.preventDefault();
//         return;
//       }

//       const direction = event.deltaY > 0 ? 1 : -1;
//       const nextIndex = activeIndex + direction;

//       /*
//        * At the beginning/end, release the wheel so the page
//        * can continue scrolling normally.
//        */
//       if (nextIndex < 0 || nextIndex >= steps.length) {
//         return;
//       }

//       event.preventDefault();

//       lastScrollTime.current = now;
//       isAnimating.current = true;

//       setActiveIndex(nextIndex);

//       setTimeout(() => {
//         isAnimating.current = false;
//       }, 500);
//     };

//     window.addEventListener("wheel", handleWheel, {
//       passive: false,
//     });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [activeIndex]);

//   const active = steps[activeIndex];
//   const ActiveIcon = active.icon;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full px-5 md:px-8 py-20 md:py-28"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* -------------------------------------------------
//             HEADER
//         -------------------------------------------------- */}
//         <div className="max-w-2xl mb-14 md:mb-20">
//           <div className="flex items-center gap-3 mb-5">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
//             </span>

//             <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
//               Our Process
//             </span>
//           </div>

//           <h2
//             className={`${display.className} text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.05]`}
//           >
//             How we turn ideas
//             <br />
//             <span className="text-indigo-600">into reality.</span>
//           </h2>

//           <p className="mt-6 text-gray-500 text-base md:text-lg leading-7 max-w-xl">
//             A clear, collaborative process designed to keep your project
//             moving from the first idea to the final launch.
//           </p>
//         </div>

//         {/* -------------------------------------------------
//             MAIN PROCESS
//         -------------------------------------------------- */}
//         <div className="grid md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 lg:gap-24 items-center">

//           {/* -------------------------------------------------
//               LEFT — PROCESS NAVIGATION
//           -------------------------------------------------- */}
//           <div className="relative">

//             {/* Vertical line */}
//             <div className="absolute left-[18px] top-5 bottom-5 w-px bg-gray-200" />

//             {/* Progress line */}
//             <motion.div
//               className="absolute left-[18px] top-5 w-px bg-indigo-600 origin-top"
//               animate={{
//                 height: `${(activeIndex / (steps.length - 1)) * 100}%`,
//               }}
//               transition={{
//                 duration: 0.5,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             />

//             <div className="relative space-y-2">
//               {steps.map((step, index) => {
//                 const Icon = step.icon;
//                 const isActive = index === activeIndex;
//                 const isCompleted = index < activeIndex;

//                 return (
//                   <button
//                     key={step.id}
//                     type="button"
//                     onClick={() => setActiveIndex(index)}
//                     className="group relative flex items-center gap-5 w-full text-left py-3 focus:outline-none"
//                   >
//                     {/* Step indicator */}
//                     <motion.div
//                       animate={{
//                         scale: isActive ? 1.12 : 1,
//                         backgroundColor: isActive
//                           ? "#4f46e5"
//                           : isCompleted
//                           ? "#e0e7ff"
//                           : "#ffffff",
//                         borderColor: isActive
//                           ? "#4f46e5"
//                           : isCompleted
//                           ? "#c7d2fe"
//                           : "#e5e7eb",
//                       }}
//                       transition={{ duration: 0.25 }}
//                       className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2"
//                     >
//                       <Icon
//                         className={`text-sm transition-colors duration-300 ${
//                           isActive
//                             ? "text-white"
//                             : isCompleted
//                             ? "text-indigo-500"
//                             : "text-gray-400 group-hover:text-indigo-500"
//                         }`}
//                       />
//                     </motion.div>

//                     {/* Text */}
//                     <div className="min-w-0">
//                       <div className="flex items-center gap-3">
//                         <span
//                           className={`text-[11px] font-mono tracking-wider transition-colors ${
//                             isActive
//                               ? "text-indigo-600"
//                               : "text-gray-400"
//                           }`}
//                         >
//                           {step.id}
//                         </span>

//                         {isActive && (
//                           <motion.span
//                             layoutId="active-line"
//                             className="h-px w-5 bg-indigo-500"
//                           />
//                         )}
//                       </div>

//                       <p
//                         className={`${display.className} mt-1 text-sm md:text-base font-semibold transition-colors duration-300 ${
//                           isActive
//                             ? "text-gray-900"
//                             : "text-gray-400 group-hover:text-gray-700"
//                         }`}
//                       >
//                         {step.title}
//                       </p>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Scroll hint */}
//             <div className="hidden md:flex items-center gap-3 mt-10 ml-1 text-xs text-gray-400">
//               <div className="flex flex-col items-center">
//                 <span className="w-px h-5 bg-gray-300" />
//                 <motion.span
//                   animate={{ y: [0, 5, 0] }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="text-gray-400"
//                 >
//                   ↓
//                 </motion.span>
//               </div>

//               <span>Scroll to explore</span>
//             </div>
//           </div>

//           {/* -------------------------------------------------
//               RIGHT — PREMIUM PREVIEW
//           -------------------------------------------------- */}
//           <div className="relative">

//             {/* Ambient glow */}
//             <div className="absolute -inset-10 bg-indigo-500/[0.04] blur-3xl rounded-full pointer-events-none" />

//             <div className="relative rounded-[2rem] border border-gray-200 bg-white shadow-[0_25px_80px_-30px_rgba(15,23,42,0.22)] overflow-hidden">

//               {/* Top bar */}
//               <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-gray-100">
//                 <div className="flex items-center gap-2">
//                   <span className="h-2 w-2 rounded-full bg-indigo-600" />
//                   <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
//                     Project workflow
//                   </span>
//                 </div>

//                 <span className="text-xs font-mono text-gray-400">
//                   {active.id} / 06
//                 </span>
//               </div>

//               {/* Illustration */}
//               <div className="relative p-4 md:p-6">

//                 <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden bg-[#f8f9fc] border border-gray-100">

//                   {/* Decorative grid */}
//                   <div
//                     className="absolute inset-0 opacity-[0.035]"
//                     style={{
//                       backgroundImage:
//                         "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
//                       backgroundSize: "32px 32px",
//                     }}
//                   />

//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={active.id}
//                       initial={{
//                         opacity: 0,
//                         scale: 0.96,
//                         y: 15,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         scale: 1,
//                         y: 0,
//                       }}
//                       exit={{
//                         opacity: 0,
//                         scale: 1.02,
//                         y: -15,
//                       }}
//                       transition={{
//                         duration: 0.45,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                       className="absolute inset-0"
//                     >
//                       <ProcessIllustration id={active.id} />
//                     </motion.div>
//                   </AnimatePresence>

//                   {/* Corner label */}
//                   <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
//                     <motion.div
//                       key={`label-${active.id}`}
//                       initial={{ opacity: 0, y: 8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.15, duration: 0.3 }}
//                       className="rounded-lg border border-white/80 bg-white/80 backdrop-blur-md px-3 py-2 shadow-sm"
//                     >
//                       <span className="text-[10px] uppercase tracking-widest text-gray-400">
//                         Current stage
//                       </span>

//                       <p
//                         className={`${display.className} text-xs font-semibold text-gray-800 mt-0.5`}
//                       >
//                         {active.title}
//                       </p>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom information */}
//               <div className="px-6 md:px-8 pb-7 md:pb-8">

//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`content-${active.id}`}
//                     initial={{
//                       opacity: 0,
//                       y: 12,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     exit={{
//                       opacity: 0,
//                       y: -8,
//                     }}
//                     transition={{
//                       duration: 0.35,
//                       ease: "easeOut",
//                     }}
//                   >
//                     <div className="flex items-start gap-4">

//                       <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100">
//                         <ActiveIcon className="text-indigo-600" />
//                       </div>

//                       <div>
//                         <div className="flex items-center gap-2 mb-1">
//                           <span className="text-xs font-mono text-indigo-600">
//                             {active.id}
//                           </span>

//                           <span className="h-px w-6 bg-indigo-200" />
//                         </div>

//                         <h3
//                           className={`${display.className} text-xl md:text-2xl font-bold text-gray-900`}
//                         >
//                           {active.title}
//                         </h3>

//                         <p className="mt-2 text-sm md:text-[15px] text-gray-500 leading-6 max-w-xl">
//                           {active.description}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Progress */}
//                 <div className="mt-7 flex items-center gap-2">
//                   {steps.map((step, index) => (
//                     <button
//                       key={step.id}
//                       type="button"
//                       aria-label={`Go to step ${step.id}`}
//                       onClick={() => setActiveIndex(index)}
//                       className="group flex-1"
//                     >
//                       <div
//                         className={`h-1 rounded-full overflow-hidden transition-colors duration-300 ${
//                           index <= activeIndex
//                             ? "bg-indigo-600"
//                             : "bg-gray-100"
//                         }`}
//                       >
//                         {index === activeIndex && (
//                           <motion.div
//                             layoutId="progress"
//                             className="h-full w-full bg-indigo-600"
//                           />
//                         )}
//                       </div>
//                     </button>
//                   ))}
//                 </div>

//               </div>
//             </div>

//             {/* Step counter below card */}
//             <div className="flex items-center justify-between mt-5 px-2">
//               <span className="text-xs text-gray-400">
//                 Step {String(activeIndex + 1).padStart(2, "0")}
//               </span>

//               <div className="flex items-center gap-2">
//                 <button
//                   type="button"
//                   disabled={activeIndex === 0}
//                   onClick={() =>
//                     setActiveIndex((prev) => Math.max(0, prev - 1))
//                   }
//                   className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-30 disabled:pointer-events-none transition"
//                   aria-label="Previous step"
//                 >
//                   ←
//                 </button>

//                 <button
//                   type="button"
//                   disabled={activeIndex === steps.length - 1}
//                   onClick={() =>
//                     setActiveIndex((prev) =>
//                       Math.min(steps.length - 1, prev + 1)
//                     )
//                   }
//                   className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-30 disabled:pointer-events-none transition"
//                   aria-label="Next step"
//                 >
//                   →
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
