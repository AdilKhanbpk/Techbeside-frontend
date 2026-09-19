"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone,
    Layers,
    Cpu,
    Shield,
    Cloud,
    Sparkles,
    ArrowRight,
    Tablet,
    Activity,
    CheckCircle2,
    Workflow,
    Compass,
    Palette,
    Settings,
    TrendingUp,
    Headphones,
    Bug,
    UploadCloud,
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
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
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
const techStack = [
    "Swift",
    "SwiftUI",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "React Native",
    "Firebase",
    "GraphQL",
    "REST APIs",
    "SQLite",
    "WebSockets",
    "AWS Amplify",
];

const capabilities = [
    {
        icon: Smartphone,
        title: "iOS Native Development",
        desc: "Bespoke iOS applications built using Swift and SwiftUI, fully optimized for Apple ecosystem features and App Store guidelines.",
    },
    {
        icon: Tablet,
        title: "Android Native Development",
        desc: "High-performance Android apps crafted with Kotlin and Jetpack Compose, delivering fluid UX across smartphones, tablets, and wearables.",
    },
    {
        icon: Layers,
        title: "Cross-Platform (Flutter / React Native)",
        desc: "Single-codebase mobile applications that run smoothly on iOS & Android, cutting time-to-market and development costs.",
    },
    {
        icon: Palette,
        title: "UI/UX & Interactive Prototyping",
        desc: "Pixel-perfect mobile interface design with intuitive gesture navigation, micro-interactions, and accessible design systems.",
    },
    {
        icon: Cloud,
        title: "Cloud & API Integration",
        desc: "Seamless integration with RESTful APIs, GraphQL endpoints, payment gateways, push notification engines, and cloud databases.",
    },
    {
        icon: Shield,
        title: "Security & Compliance",
        desc: "Biometric authentication, data encryption at rest and in transit, and HIPAA / GDPR compliance for sensitive user data.",
    },
];

const roadmapSteps = [
    {
        num: "01",
        title: "Discovery & Strategy",
        desc: "Defining core objectives, target demographics, and key problem-solving features for your mobile app.",
        icon: Compass,
    },
    {
        num: "02",
        title: "Rapid Prototyping",
        desc: "Interactive wireframes and user flow mapping to validate user experience before full development.",
        icon: Workflow,
    },
    {
        num: "03",
        title: "UI/UX Design Systems",
        desc: "Designing modern, branded component libraries for iOS and Android interface guidelines.",
        icon: Palette,
    },
    {
        num: "04",
        title: "Agile Development",
        desc: "Sprint-based engineering with bi-weekly builds to let you test progress live on test devices.",
        icon: Cpu,
    },
    {
        num: "05",
        title: "Conversion Optimization",
        desc: "Optimizing in-app funnels, onboarding flows, and call-to-actions to maximize user retention.",
        icon: TrendingUp,
    },
    {
        num: "06",
        title: "QA & Device Testing",
        desc: "Rigorous automated and manual testing on actual iOS and Android hardware across screen sizes.",
        icon: Bug,
    },
    {
        num: "07",
        title: "Store Deployment",
        desc: "End-to-end management of Apple App Store and Google Play Store submission and compliance.",
        icon: UploadCloud,
    },
    {
        num: "08",
        title: "Maintenance & Growth",
        desc: "Post-launch analytics, performance monitoring, OS update compatibility, and continuous feature rollouts.",
        icon: Headphones,
    },
];

const mobileAppsFaqs = [
    {
        question: "Do you develop apps for both iOS and Android?",
        answer:
            "Yes! We build native (Swift, Kotlin) and cross-platform (React Native, Flutter) apps.",
    },
    {
        question: "How much does it cost to develop a mobile app?",
        answer:
            "Cost varies based on features, but basic apps start from $5,000+, while complex apps go higher.",
    },
    {
        question: "How long does mobile app development take?",
        answer:
            "Simple apps take 3-6 months, while complex apps may take 6-12 months.",
    },
    {
        question: "Do you provide post-launch support?",
        answer:
            "Yes, we offer app maintenance, updates, and bug fixes to ensure smooth performance.",
    },
    {
        question: "Can you integrate third-party APIs into my app?",
        answer:
            "Yes, we integrate payment gateways, social media logins, analytics, and more.",
    },
];

const appDevServices = [
    {
        title: "Software Maintenance",
        description:
            "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
        icon: productDesignImage,
        link: "/services/software-maintenance-services",
    },
    {
        title: "Ui & Ux Design",
        description:
            "Building intuitive interfaces that provide a seamless promised user experience.",
        icon: webDesignImage,
        link: "/services/ui-ux-design-agency",
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
const MobileAppDevelopmentClient = () => {
    const categorySlug = "mobile-app-development-company";

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
                                name: "Mobile App Development",
                                item: "https://www.TechBeside.co/services/mobile-app-development-company",
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
                            iOS &amp; Android Mobile App Services
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-4xl font-normal leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Native &amp; Cross-Platform
                            <span className="block text-indigo-300">
                                mobile apps built to scale.
                            </span>
                        </motion.h1>

                        {/* Sub text with SEO Links */}
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-7 max-w-2xl text-base font-light leading-7 text-white/60 sm:text-lg"
                        >
                            Your business needs a fully crafted, digitized solution to meet
                            customer needs in one place. At{" "}
                            <Link
                                href="/"
                                className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                                TechBeside
                            </Link>
                            , we specialize in mobile app development that prioritizes
                            functionality, user engagement, and exceptional digital experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                        >
                            <a
                                href="https://calendly.com/techbeside/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-12 items-center gap-3 rounded-full bg-indigo-600 px-7 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(79,70,229,0.7)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_12px_28px_-8px_rgba(79,70,229,0.8)]"
                            >
                                <AiOutlineCalendar size={18} />
                                Book App Consultation
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
                            Mobile Tech
                        </span>
                        <div className="relative flex-1 overflow-hidden">
                            <div className="flex animate-[marquee_25s_linear_infinite] gap-8 whitespace-nowrap">
                                {[...techStack, ...techStack].map((tech, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-2 text-sm font-light text-white/40"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-indigo-400/60" />
                                        {tech}
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
                            App Development Expertise
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            End-to-end mobile solutions for
                            <span className="text-indigo-300"> iOS &amp; Android</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            We craft intuitive, high-performance mobile apps tailored to your
                            business goals and designed for high user retention.
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
                            Custom app development
                            <span className="text-indigo-300"> tailored for impact</span>
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
                                    <Sparkles
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Flutter Mobile App Development
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    Our expertise in Flutter mobile app development enables us to
                                    deliver fast, reliable, and visually consistent apps for both
                                    iOS and Android. Leveraging a unified codebase saves time and
                                    resources while delivering smooth 60fps performance for
                                    startups and enterprise solutions alike.
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
                                    <Tablet
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Multi-Device &amp; Cross-Platform Reach
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    Reach a wider audience with a single codebase solution. We
                                    ensure your mobile application functions seamlessly across
                                    smartphones, tablets, and foldable devices — maintaining
                                    consistent branding and reducing ongoing maintenance overhead.
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
                                    <Activity
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Healthcare &amp; Industry-Specific Apps
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    As a trusted{" "}
                                    <Link
                                        href="/healthcare"
                                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                                    >
                                        healthcare mobile app development company
                                    </Link>
                                    , we craft solutions that enhance patient care and streamline
                                    workflows. Our apps are built to{" "}
                                    <Link
                                        href="/services/digital-marketing-for-software-companies"
                                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                                    >
                                        grow with your business
                                    </Link>
                                    , leveraging{" "}
                                    <Link
                                        href="/services/ui-ux-design-agency"
                                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                                    >
                                        advanced design
                                    </Link>{" "}
                                    and careful coding for long-term scalability.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ ROADMAP GRID ═══════════════════ */}
            <section className="relative bg-[#080b20] py-20 md:py-28">
                <div className="absolute right-1/4 top-0 -z-0 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[130px]" />

                <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
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
                            App Creation Roadmap
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            The roadmap to a successful
                            <span className="text-indigo-300"> business app</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            A proven step-by-step framework that saves time, minimizes risk,
                            and guarantees market readiness.
                        </motion.p>
                    </motion.div>

                    {/* 8-step Grid */}
                    <motion.div
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                    >
                        {roadmapSteps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                variants={fadeUp}
                                custom={i}
                                className="group relative rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.055]"
                            >
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="text-3xl font-extralight tracking-tighter text-indigo-500/40">
                                        {step.num}
                                    </span>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition-colors group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                                        <step.icon
                                            size={18}
                                            strokeWidth={1.5}
                                            className="text-indigo-300"
                                        />
                                    </div>
                                </div>

                                <h3 className="mb-2 text-base font-medium tracking-tight text-white">
                                    {step.title}
                                </h3>

                                <p className="text-xs font-light leading-5 text-white/50">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* SEO Text links inside roadmap block */}
                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-white/50">
                        <span>
                            Includes{" "}
                            <Link
                                href="/services/software-maintenance-services"
                                className="text-indigo-300 hover:underline"
                            >
                                Ongoing Maintenance &amp; Support
                            </Link>
                        </span>
                        <span>•</span>
                        <span>
                            Includes{" "}
                            <Link
                                href="/services/web-qa-tester"
                                className="text-indigo-300 hover:underline"
                            >
                                QA &amp; Mobile Testing
                            </Link>
                        </span>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ SHARED SECTIONS ═══════════════════ */}
            <div className="max-w-[1450px] mx-auto px-4">
                {/* <ServicesRelatedProjects slug={categorySlug} /> */}
                <FaqSection title="Frequently Asked Questions" faqs={mobileAppsFaqs} />
                <OurTeam />
                {/* <RelatedServices services={appDevServices} /> */}

                <div className="bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
                    <ClientTestimonialsSection />
                </div>
            </div>
        </>
    );
};

export default MobileAppDevelopmentClient;
