"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Globe,
    Zap,
    Shield,
    Layers,
    Rocket,
    ArrowRight,
    Server,
    Smartphone,
    Database,
    GitBranch,
    CheckCircle2,
    Headphones,
    RefreshCw,
    Bug,
    TrendingUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";
import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import FaqSection from "@/components/services/FaqSection";
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";

import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";

/* ─────────────────── animation variants ─────────────────── */
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
    "React.js",
    "Next.js",
    "Angular",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
    "TailwindCSS",
    "GraphQL",
    "AWS",
    "Docker",
];

const capabilities = [
    {
        icon: Code2,
        title: "Custom Web Development",
        desc: "Tailor-made websites & web apps built from scratch to match your exact business workflows and brand identity.",
    },
    {
        icon: Globe,
        title: "Progressive Web Apps",
        desc: "Blazing-fast PWAs that work offline, load instantly, and deliver app-like experiences without any app-store friction.",
    },
    {
        icon: Zap,
        title: "Performance Engineering",
        desc: "Sub-second load times through code splitting, image optimization, CDN delivery, and Core Web Vitals tuning.",
    },
    {
        icon: Shield,
        title: "Security-First Approach",
        desc: "Enterprise-grade security with OWASP compliance, input sanitization, HTTPS enforcement, and regular audits.",
    },
    {
        icon: Layers,
        title: "MERN / MEAN Stack",
        desc: "Full-stack JavaScript solutions using MongoDB, Express, React or Angular, and Node.js for end-to-end scalability.",
    },
    {
        icon: Rocket,
        title: "E-Commerce Solutions",
        desc: "Custom storefronts with Shopify, WooCommerce, or fully bespoke platforms with secure payment processing.",
    },
];

const processSteps = [
    {
        num: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your business goals, audience, and competitors to create a focused development roadmap.",
        icon: TrendingUp,
    },
    {
        num: "02",
        title: "Architecture & Design",
        desc: "Crafting scalable system architecture and intuitive UI/UX wireframes before a single line of code is written.",
        icon: Layers,
    },
    {
        num: "03",
        title: "Agile Development",
        desc: "Iterative sprints with regular demos so you see progress weekly and can steer the project in real time.",
        icon: GitBranch,
    },
    {
        num: "04",
        title: "Quality Assurance",
        desc: "Comprehensive testing—unit, integration, performance, and cross-browser—to ensure a flawless launch.",
        icon: Bug,
    },
    {
        num: "05",
        title: "Launch & Deploy",
        desc: "Zero-downtime deployment to cloud infrastructure with CI/CD pipelines, monitoring, and rollback strategies.",
        icon: Rocket,
    },
    {
        num: "06",
        title: "Ongoing Support",
        desc: "Post-launch maintenance, feature enhancements, security patches, and 24/7 incident response.",
        icon: Headphones,
    },
];

const webDevFaqs = [
    {
        question: "Which technologies do you use for web development?",
        answer:
            "We use modern technologies like React.js, Next.js, Node.js, Express.js, MongoDB, and TailwindCSS for building scalable web applications.",
    },
    {
        question: "Do you develop eCommerce websites?",
        answer:
            "Yes, we specialize in eCommerce platforms like Shopify, WooCommerce, and custom solutions with secure payment gateways.",
    },
    {
        question: "How long does it take to develop a website?",
        answer:
            "Development time depends on complexity, but typically 4-12 weeks for a complete project.",
    },
    {
        question: "Do you provide website maintenance and support?",
        answer:
            "Yes, we offer ongoing maintenance to update content, fix bugs, and improve security.",
    },
    {
        question: "Will my website be SEO-friendly and mobile-responsive?",
        answer:
            "Absolutely! We ensure your website is optimized for search engines and fully responsive on all devices.",
    },
];

const webDevServices = [
    {
        title: "Custom Web Development",
        description: "Tailor-made solutions for your online presence.",
        icon: webDesignImage,
        link: "/services/custom-web-development",
    },
    {
        title: "E-commerce Solutions",
        description:
            "Creating robust online stores with seamless shopping experience.",
        icon: motionDesignImage,
        link: "/services/ecommerce-solutions",
    },
    {
        title: "Website Maintenance",
        description: "Ensuring your website stays up-to-date and secure.",
        icon: illustrationDesignImage,
        link: "/services/website-maintenance",
    },
];

/* ═══════════════════ COMPONENT ═══════════════════ */
const WebDevelopmentClient = () => {
    const categorySlug = "web-development";

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
                                name: "Web Development",
                                item: "https://www.TechBeside.co/services/web-development",
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
                            Web development services
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-4xl font-normal leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Websites that drive
                            <span className="block text-indigo-300">
                                growth &amp; conversions.
                            </span>
                        </motion.h1>

                        {/* Sub text */}
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-7 max-w-2xl text-base font-light leading-7 text-white/60 sm:text-lg"
                        >
                            TechBeside is a progressive web development company that builds
                            custom, scalable, and SEO-optimized web solutions for{" "}
                            <Link
                                href="/healthcare"
                                className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                                Healthcare
                            </Link>
                            ,{" "}
                            <Link
                                href="/real-estate"
                                className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                                Real Estate
                            </Link>
                            ,{" "}
                            <Link
                                href="/restaurants"
                                className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                                Restaurants
                            </Link>
                            , and{" "}
                            <Link
                                href="/e-commerce"
                                className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                                E-Commerce
                            </Link>{" "}
                            businesses — delivering seamless functionality and{" "}
                            <Link
                                href="/services/ui-ux-design-agency"
                                className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                                optimal user experience
                            </Link>
                            .
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
                                Book a Strategy Call
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
                            Our Stack
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
                {/* Ambient light */}
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
                            What we build
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Capabilities designed for
                            <span className="text-indigo-300"> modern businesses</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            From bespoke web apps to high-performance e-commerce platforms, we
                            craft digital products that blend innovation with reliability.
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

            {/* ═══════════════════ EXPERTISE SECTION ═══════════════════ */}
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
                            Our expertise
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Technology that powers
                            <span className="text-indigo-300"> real results</span>
                        </motion.h2>
                    </motion.div>

                    {/* Expertise blocks */}
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
                                    <Server
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Custom Web App Development
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    We build feature-rich, interactive web applications that go
                                    far beyond a traditional website. From SaaS dashboards to
                                    internal tools, our custom web app development services
                                    deliver solutions that enhance user engagement, streamline
                                    your operations, and scale as your business grows — all built
                                    with modern tech stacks and clean architecture.
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
                                    <Database
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        MERN &amp; MEAN Stack Development
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    As specialists in MERN and MEAN web development, we build
                                    scalable, secure, and{" "}
                                    <Link
                                        href="/services/web-development"
                                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                                    >
                                        high-performance websites
                                    </Link>{" "}
                                    tailored to your business needs — whether it&apos;s a{" "}
                                    <Link
                                        href="/blog"
                                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                                    >
                                        content-heavy platform
                                    </Link>
                                    , a feature-rich{" "}
                                    <Link
                                        href="/e-commerce"
                                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                                    >
                                        e-commerce store
                                    </Link>
                                    , or an advanced web application using MongoDB, Express,
                                    React/Angular, and Node.js.
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
                                    <Smartphone
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        React Native Cross-Platform Apps
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    Our React Native experts build cross-platform mobile
                                    applications delivering native-like experiences on both iOS
                                    and Android. From feature-rich business apps and e-commerce
                                    solutions to interactive social platforms — all from a single
                                    codebase for maximum efficiency and cost savings.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ PROCESS ═══════════════════ */}
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
                            How we work
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            A process built for
                            <span className="text-indigo-300"> precision &amp; speed</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            From initial discovery to post-launch support, every phase is
                            engineered for transparency and quality.
                        </motion.p>
                    </motion.div>

                    {/* Process grid */}
                    <motion.div
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                    >
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                variants={fadeUp}
                                custom={i}
                                className="group relative rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.055] sm:p-8"
                            >
                                <div className="mb-6 flex items-center justify-between">
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

                                <h3 className="mb-2 text-lg font-medium tracking-tight text-white">
                                    {step.title}
                                </h3>

                                <p className="text-sm font-light leading-6 text-white/50">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ ONGOING SUPPORT BANNER ═══════════════════ */}
            <section className="relative overflow-hidden bg-[#080b20]">
                <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
                    <motion.div
                        className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-indigo-600/20 via-indigo-500/10 to-violet-600/20 p-8 backdrop-blur-sm sm:p-12 md:p-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                    >
                        {/* Decorative circles */}
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border-[25px] border-indigo-500/10" />
                        <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full border-[20px] border-violet-500/10" />

                        <div className="relative z-10 max-w-3xl">
                            <motion.div
                                variants={fadeUp}
                                custom={0}
                                className="mb-4 inline-flex items-center gap-2"
                            >
                                <RefreshCw
                                    size={18}
                                    strokeWidth={1.5}
                                    className="text-indigo-300"
                                />
                                <span className="text-xs font-medium tracking-[0.16em] uppercase text-indigo-300">
                                    Ongoing partnership
                                </span>
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                custom={1}
                                className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                            >
                                We don&apos;t just launch.
                                <span className="text-indigo-300">
                                    {" "}
                                    We grow with you.
                                </span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                custom={2}
                                className="mt-5 max-w-2xl text-base font-light leading-7 text-white/55"
                            >
                                Our commitment extends far beyond deployment. We provide
                                continuous support — from security patches and performance
                                optimization to new feature development. Your digital presence
                                is always in expert hands. Whether you need updates,
                                maintenance, or a full-scale evolution, we&apos;re here every
                                step of the way.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                custom={3}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                {[
                                    "24/7 Monitoring",
                                    "Security Updates",
                                    "Performance Tuning",
                                    "Feature Enhancements",
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
                <FaqSection title="Frequently Asked Questions" faqs={webDevFaqs} />
                <OurTeam />
                <RelatedServices services={webDevServices} />

                <div className="bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
                    <ClientTestimonialsSection />
                </div>
            </div>
        </>
    );
};

export default WebDevelopmentClient;
