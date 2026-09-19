"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Server,
    Cloud,
    Cpu,
    ShieldCheck,
    GitBranch,
    Activity,
    ArrowRight,
    Terminal,
    Workflow,
    CheckCircle2,
    Lock,
    Zap,
    TrendingUp,
    RefreshCw,
    Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";

import ServicesRelatedProjects from "@/components/services/ServicesRelatedProjects";
import FaqSection from "@/components/services/FaqSection";
import OurTeam from "@/components/about/OurTeam";
import RelatedServices from "@/components/services/RelatedServices";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";

import developmentDesignImage from "../../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
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
const devopsTools = [
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Google Cloud",
    "Microsoft Azure",
    "Jenkins",
    "GitLab CI/CD",
    "Ansible",
    "Prometheus",
    "Grafana",
    "Helm",
];

const capabilities = [
    {
        icon: GitBranch,
        title: "CI/CD Pipeline Automation",
        desc: "Zero-downtime, fully automated build, test, and deployment pipelines that deliver error-free software updates continuously.",
    },
    {
        icon: Terminal,
        title: "Infrastructure as Code (IaC)",
        desc: "Manage and provision cloud environments reproducibly using Terraform, CloudFormation, and Ansible templates.",
    },
    {
        icon: Cloud,
        title: "Cloud Migration & Architecture",
        desc: "Seamless cloud migration to AWS, GCP, or Azure with cost optimization, multi-region failover, and auto-scaling.",
    },
    {
        icon: Cpu,
        title: "Kubernetes Orchestration",
        desc: "Containerized microservices management, load balancing, resource quotas, and self-healing cluster orchestration.",
    },
    {
        icon: Activity,
        title: "Monitoring & Observability",
        desc: "Real-time metrics, log aggregation, and automated alert triggers using Prometheus, Grafana, Datadog, and ELK Stack.",
    },
    {
        icon: ShieldCheck,
        title: "DevSecOps & Compliance",
        desc: "Shift-left vulnerability scanning, IAM security policies, secret management, and SOC2 / ISO compliance automation.",
    },
];

const devopsFaqs = [
    {
        question: "What DevOps tools do you use?",
        answer:
            "We use industry-standard tools including Docker, Kubernetes, Jenkins, Terraform, AWS, Azure, GCP, and Ansible.",
    },
    {
        question: "How does DevOps improve software development?",
        answer:
            "DevOps automates deployment, enhances infrastructure security, eliminates manual bottlenecks, and accelerates release cycles.",
    },
    {
        question: "Do you offer CI/CD pipeline setup?",
        answer:
            "Yes, we set up robust, automated CI/CD pipelines for faster, zero-downtime, and error-free deployments.",
    },
    {
        question: "How do you ensure infrastructure security?",
        answer:
            "We implement DevSecOps practices: automated security scans, encryption at rest and in transit, IAM roles, and firewall hardening.",
    },
    {
        question: "Can you migrate existing infrastructure to the cloud?",
        answer:
            "Absolutely! We handle end-to-end cloud migrations for AWS, Google Cloud, and Microsoft Azure with minimal downtime.",
    },
];

const services = [
    {
        title: "Project Management",
        description:
            "Executing precise project management potentially geared to step-out on time; it facilitates efficient collaboration by leading the project stakeholders.",
        icon: illustrationDesignImage,
        link: "/services/project-management",
    },
    {
        title: "Software Maintenance",
        description:
            "Keeping your software running smoothly with regular updates, bug fixes, and performance optimization.",
        icon: motionDesignImage,
        link: "/services/software-maintenance-services",
    },
    {
        title: "QA Testing",
        description:
            "Having exhaustive testing done assures your software has no errors and delivers great performance to the customer.",
        icon: developmentDesignImage,
        link: "/services/web-qa-tester",
    },
];

/* ═══════════════════ COMPONENT ═══════════════════ */
const DevOpsClient = () => {
    const categorySlug = "app-development";

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
                                name: "DevOps",
                                item: "https://www.TechBeside.co/services/devops",
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
                            DevOps &amp; Cloud Engineering Services
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-4xl font-normal leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Expert DevOps Consulting:
                            <span className="block text-indigo-300">
                                Automation &amp; Cloud Infrastructure.
                            </span>
                        </motion.h1>

                        {/* Sub text */}
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-7 max-w-2xl text-base font-light leading-7 text-white/60 sm:text-lg"
                        >
                            TechBeside provides professional DevOps consulting services to help
                            businesses optimize their{" "}
                            <Link
                                href="/services/web-development"
                                className="text-indigo-300 hover:text-indigo-200 transition-colors"
                            >
                                development and IT operations
                            </Link>
                            . Our experienced DevOps consultants assess your current processes and
                            implement tailored solutions to enhance efficiency, scalability, and
                            collaboration across teams.
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
                                Book DevOps Assessment
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
                            DevOps Stack
                        </span>
                        <div className="relative flex-1 overflow-hidden">
                            <div className="flex animate-[marquee_25s_linear_infinite] gap-8 whitespace-nowrap">
                                {[...devopsTools, ...devopsTools].map((tool, i) => (
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
                            DevOps Services &amp; Capabilities
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Partner with one of the leading
                            <span className="text-indigo-300"> DevOps companies</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-white/55"
                        >
                            From infrastructure management to CI/CD automation, our team delivers
                            scalable solutions for faster and more reliable software delivery.
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
                            Specialized Infrastructure
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                        >
                            Automated workflows for
                            <span className="text-indigo-300"> maximum efficiency</span>
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
                                    <Workflow
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Transform Processes with DevOps Automation
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    Our DevOps automation services eliminate manual tasks and streamline
                                    workflows, reducing errors and deployment times. We utilize advanced
                                    tools to automate testing, integration, and delivery, empowering your
                                    business to operate with greater agility and precision.
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
                                    <TrendingUp
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Empowering Enterprise Growth
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    Our business DevOps solutions are designed to align development
                                    practices with organizational goals. By enhancing collaboration between
                                    teams, we help businesses reduce time-to-market, improve software quality,
                                    and achieve consistent performance.
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
                                    <Server
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-indigo-400"
                                    />
                                    <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                                        Dedicated DevOps Consulting &amp; Tailored Support
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base font-light leading-7 text-white/55">
                                    Work with a dedicated DevOps consultant to implement strategies tailored
                                    to your unique challenges. Whether you need help with cloud migration,
                                    CI/CD pipelines, or workflow optimization, our consultants deliver
                                    results-driven guidance and continuous support.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ IMPACT CASE STUDY BANNER ═══════════════════ */}
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
                                <Zap
                                    size={18}
                                    strokeWidth={1.5}
                                    className="text-indigo-300"
                                />
                                <span className="text-xs font-medium tracking-[0.16em] uppercase text-indigo-300">
                                    Proven Efficiency Case Study
                                </span>
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                custom={1}
                                className="text-3xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
                            >
                                Driving efficiency with
                                <span className="text-indigo-300"> DevOps automation</span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                custom={2}
                                className="mt-5 max-w-2xl text-base font-light leading-7 text-white/55"
                            >
                                We recently partnered with a tech startup to implement DevOps automation,
                                reducing their deployment time by 60%. Additionally, our DevOps consulting
                                services helped an enterprise migrate to a cloud-based infrastructure,
                                enabling seamless scalability and enhanced security.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                custom={3}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                {[
                                    "60% Reduced Deployment Time",
                                    "Zero-Downtime Releases",
                                    "Seamless Cloud Migration",
                                    "24/7 Infrastructure Guard",
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
                {/* <ServicesRelatedProjects slug={categorySlug} /> */}
                <FaqSection title="Frequently Asked Questions" faqs={devopsFaqs} />
                <OurTeam />
                {/* <RelatedServices services={services} /> */}

                <div className="bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9">
                    <ClientTestimonialsSection />
                </div>
            </div>
        </>
    );
};

export default DevOpsClient;

