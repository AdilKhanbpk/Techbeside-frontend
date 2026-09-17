"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Palette,
    Layout,
    Layers,
    Smartphone,
    Sparkles,
    MousePointerClick,
    ArrowRight,
    Monitor,
    Eye,
    CheckCircle2,
    Brush,
    TrendingUp,
    HeartHandshake,
    Activity,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";

import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import FaqSection from "@/components/services/FaqSection";
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";

import productDesignImage from "../../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../../public/assets/relatedServices/Frame 7 (1).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";

/* ─────────────────── Animation Variants ─────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
};

/* ─────────────────── DATA ─────────────────── */
const designTools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Framer",
    "InVision",
    "Principle",
    "ProtoPie",
    "Spline 3D",
    "Photoshop",
    "Illustrator",
    "Penpot",
    "Storybook",
];

const capabilities = [
    {
        icon: Smartphone,
        title: "Mobile UI/UX Design",
        desc: "Sleek, touch-optimized interfaces designed specifically for iOS and Android platforms to maximize user engagement on mobile screens.",
    },
    {
        icon: Monitor,
        title: "Web & SaaS Interfaces",
        desc: "Complex dashboard design, SaaS workflows, and responsive web application UIs crafted for clarity and high productivity.",
    },
    {
        icon: MousePointerClick,
        title: "Interactive Prototyping",
        desc: "High-fidelity clickable prototypes that visualize user journeys, micro-interactions, and animations before engineering begins.",
    },
    {
        icon: Layers,
        title: "Design Systems & Tokens",
        desc: "Scalable component libraries, style guides, and design tokens that unify your brand across web, iOS, and Android applications.",
    },
    {
        icon: Eye,
        title: "User Research & Usability",
        desc: "Data-driven wireframing, persona creation, heatmaps, and usability testing to eliminate friction in user conversion paths.",
    },
    {
        icon: Sparkles,
        title: "Brand & Micro-Interactions",
        desc: "Delightful subtle micro-animations and aesthetic visual design that elevate customer delight and brand authority.",
    },
];

const uiuxdesignFaqs = [
    {
        question: "What is included in your UI/UX design process?",
        answer:
            "We follow a structured approach: user research, wireframing, interactive prototyping, usability testing, and final UI design system delivery.",
    },
    {
        question: "Which tools do you use for UI/UX design?",
        answer:
            "We primary use Figma, Adobe XD, Sketch, Framer, and InVision to create stunning, pixel-perfect interfaces.",
    },
    {
        question: "How do you ensure a good user experience (UX)?",
        answer:
            "We conduct user research, wireframe validations, and feedback iterations to ensure seamless navigation and high retention.",
    },
    {
        question: "Do you provide UI design for mobile apps?",
        answer:
            "Yes! We create pixel-perfect UI/UX for mobile apps (iOS & Android), web platforms, and SaaS products.",
    },
    {
        question: "How long does UI/UX design take?",
        answer:
            "A simple interface design takes 2-4 weeks, while complex platforms may take 6-8 weeks.",
    },
];

const services = [
    {
        title: "Web Development",
        description:
            "Making dynamic, responsive websites that put user satisfaction first.",
        icon: productDesignImage,
        link: "/services/web-development",
    },
    {
        title: "Mobile App Development",
        description:
            "Creating powerful mobile applications that will capture users and enhance your brand.",
        icon: appDesignImage,
        link: "/services/mobile-app-development-company",
    },
    {
        title: "Graphic Designing",
        description:
            "Creating jaw-dropping design materials that lead to the offer of a brand with extreme professionalism.",
        icon: motionDesignImage,
        link: "/services/affordable-graphic-design-services",
    },
];

/* ═══════════════════ COMPONENT ═══════════════════ */
const UIUXDesignClient = () => {
    const categorySlug = "ui-ux-design-agency";

    return (
        <>
            {/* ── BreadcrumbList Schema ── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://www.TechBeside.co/",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "UI/UX Design Agency",
                                item: "https://www.TechBeside.co/services/ui-ux-design-agency",
                            },
                        ],
                    }),
                }}
            />

            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative isolate overflow-hidden bg-[#080b20] text-white">
                {/* Ambient blurs */}
                <div className="absolute -left-40 top-20 -z-10 h-[480px] w-[480px] rounded-full bg-indigo-600/20 blur-[160px]" />
                <div className="absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[140px]" />
                <div className="absolute left-1/2 top-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[120px]" />

                <div className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36 lg:px-12 lg:pb-36 lg:pt-44">
                    <motion.div
                        className="mx-auto max-w-4xl text-center"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        {/* Pill badge */}
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase text-indigo-200"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            Top UI/UX Design Agency
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-4xl font-normal leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Exceptional Digital Experiences:
                            <span className="block text-indigo-300">
                                UI/UX Design Services.
                            </span>
                        </motion.h1>

                        {/* Sub text */}
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-7 max-w-2xl text-base font-light leading-7 text-white/60 sm:text-lg"
                        >
                            At TechBeside, our UI/UX design is built around delivering
                            intuitive and visually engaging interfaces. We focus on creating
                            user journeys that enhance interaction and improve satisfaction,
                            helping your platform stand out in a competitive digital landscape.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                        >
                            <a
                                href="https://calendly.com/contact-TechBeside/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-12 items-center gap-3 rounded-full bg-indigo-600 px-7 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(79,70,229,0.7)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_12px_28px_-8px_rgba(79,70,229,0.8)]"
                            >
                                <AiOutlineCalendar size={18} />
                                Book Design Consultation
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="https://wa.me/923178261618"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10"
                            >
                                <FaWhatsapp size={18} className="text-emerald-400" />
                                Chat on WhatsApp
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom tech marquee */}
                <div className="border-t border-white/[0.06] bg-white/[0.02]">
                    <div className="mx-auto flex max-w-[1440px] items-center overflow-hidden py-4 px-5 sm:px-8">
                        <span className="mr-6 hidden shrink-0 text-xs font-medium tracking-[0.15em] uppercase text-white/30 sm:block">
                            Design Tools
                        </span>
                        <div className="relative flex-1 overflow-hidden">
                            <div className="flex animate-[marquee_25s_linear_infinite] gap-8 whitespace-nowrap">
                                {[...designTools, ...designTools].map((tool, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-2 text-sm font-light text-white/40"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-indigo-400/60" />
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ CAPABILITIES GRID ═══════════════════ */}
            <section className="relative bg-[#080b20] py-20 md:py-28">
                <div className="absolute right-0 top-1/3 -z-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[140px]" />

                <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                    {/* Header */}
                    <motion.div
                        className="mx-auto mb-16 max-w-3xl text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                    >
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase text-indigo-200"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            Design Capabilities
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Your partner as a top
                            <span className="text-indigo-300"> UI/UX design agency</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            Recognized as a top UI/UX design agency, we craft designs that
                            resonate with your audience and elevate your{" "}
                            <Link
                                href="/services/seo-services-for-small-business"
                                className="text-indigo-300 hover:underline"
                            >
                                online presence
                            </Link>
                            .
                        </motion.p>
                    </motion.div>

                    {/* Cards grid */}
                    <motion.div
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                    >
                        {capabilities.map((cap, i) => (
                            <motion.article
                                key={cap.title}
                                variants={fadeUp}
                                custom={i}
                                className="group rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.055] sm:p-8"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                                    <cap.icon
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-indigo-300"
                                    />
                                </div>

                                <h3 className="mb-2 text-lg font-medium tracking-tight text-white">
                                    {cap.title}
                                </h3>

                                <p className="text-sm font-light leading-6 text-white/50">
                                    {cap.desc}
                                </p>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ EXPERTISE SHOWCASE ═══════════════════ */}
            <section className="relative overflow-hidden bg-[#080b20] py-20 md:py-28">
                <div className="absolute -left-60 top-1/2 -z-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[160px]" />

                <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                    {/* Header */}
                    <motion.div
                        className="mb-16 max-w-2xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                    >
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase text-indigo-200"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            Specialized Solutions
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Strategic UX solutions
                            <span className="text-indigo-300"> for every screen</span>
                        </motion.h2>
                    </motion.div>

                    {/* Blocks */}
                    <div className="space-y-0">
                        {/* Block 1 */}
                        <motion.div
                            className="grid items-center gap-10 border-t border-white/[0.06] py-12 md:grid-cols-[auto_1fr] md:gap-16 lg:py-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={stagger}
                        >
                            <motion.span
                                variants={fadeUp}
                                custom={0}
                                className="text-6xl font-extralight tracking-tighter text-indigo-500/40 md:text-8xl"
                            >
                                01
                            </motion.span>

                            <motion.div variants={fadeUp} custom={1}>
                                <div className="mb-3 flex items-center gap-3">
                                    <Smartphone
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Mobile UI/UX Design for On-the-Go Excellence
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    In a mobile-first world, our expertise in mobile UI/UX design
                                    ensures your applications are optimized for smaller screens
                                    without compromising user experience. We design sleek,
                                    responsive, and intuitive interfaces that captivate users across
                                    all mobile platforms.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Block 2 */}
                        <motion.div
                            className="grid items-center gap-10 border-t border-white/[0.06] py-12 md:grid-cols-[auto_1fr] md:gap-16 lg:py-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={stagger}
                        >
                            <motion.span
                                variants={fadeUp}
                                custom={0}
                                className="text-6xl font-extralight tracking-tighter text-indigo-500/40 md:text-8xl"
                            >
                                02
                            </motion.span>

                            <motion.div variants={fadeUp} custom={1}>
                                <div className="mb-3 flex items-center gap-3">
                                    <Layout
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Multi-Device Reach &amp; Comprehensive UI/UX
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    We provide comprehensive UI/UX design services covering every
                                    step from ideation to implementation. Our goal is to deliver
                                    designs that not only look great but also solve real user
                                    challenges, driving conversion growth and user satisfaction.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Block 3 */}
                        <motion.div
                            className="grid items-center gap-10 border-t border-b border-white/[0.06] py-12 md:grid-cols-[auto_1fr] md:gap-16 lg:py-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={stagger}
                        >
                            <motion.span
                                variants={fadeUp}
                                custom={0}
                                className="text-6xl font-extralight tracking-tighter text-indigo-500/40 md:text-8xl"
                            >
                                03
                            </motion.span>

                            <motion.div variants={fadeUp} custom={1}>
                                <div className="mb-3 flex items-center gap-3">
                                    <Brush
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Customized UI/UX for Every Industry
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    From startups to enterprises, our design solutions cater to
                                    diverse industries. Whether you need a mobile UI/UX design for
                                    an app or a complete overhaul of your digital presence, we
                                    ensure the final product exceeds your expectations.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ RECENT WORK IMPACT BANNER ═══════════════════ */}
            <section className="relative overflow-hidden bg-[#080b20]">
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
                    <motion.div
                        className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-indigo-600/20 via-indigo-500/10 to-violet-600/20 p-8 backdrop-blur-sm sm:p-12 md:p-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                    >
                        {/* Decorative elements */}
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border-[25px] border-indigo-500/10" />
                        <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full border-[20px] border-violet-500/10" />

                        <div className="relative z-10 max-w-3xl">
                            <motion.div
                                variants={fadeUp}
                                custom={0}
                                className="mb-4 inline-flex items-center gap-2"
                            >
                                <TrendingUp
                                    size={18}
                                    strokeWidth={1.5}
                                    className="text-indigo-300"
                                />
                                <span className="text-xs font-medium tracking-[0.16em] uppercase text-indigo-300">
                                    Recent Impact
                                </span>
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                custom={1}
                                className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                            >
                                Turning ideas into
                                <span className="text-indigo-300"> impactful designs</span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                custom={2}
                                className="mt-5 max-w-2xl text-base font-light leading-7 text-white/55"
                            >
                                Recently, we partnered with a healthcare startup to deliver a
                                user-friendly mobile UI/UX design that improved patient engagement.
                                Additionally, our work with an e-commerce platform as a top UI/UX
                                design agency enhanced their customer journey, leading to
                                increased conversions and user satisfaction.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                custom={3}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                {[
                                    "Patient Engagement Boost",
                                    "Higher Conversion Rates",
                                    "Intuitive Mobile UX",
                                    "Scalable Design Systems",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/70"
                                    >
                                        <CheckCircle2 size={14} className="text-emerald-400" />
                                        {item}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ SHARED SECTIONS ═══════════════════ */}
            <div className="max-w-[1450px] mx-auto px-4">
                <ServicesRelatedProjects slug={categorySlug} />
                <FaqSection title="Frequently Asked Questions" faqs={uiuxdesignFaqs} />
                <OurTeam />
                <RelatedServices services={services} />

                <div className="bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
                    <ClientTestimonialsSection />
                </div>
            </div>
        </>
    );
};

export default UIUXDesignClient;
