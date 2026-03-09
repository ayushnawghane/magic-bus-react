import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Heart,
    Shield,
    Users,
    Lightbulb,
    Star,
    Target,
    Zap,
    ArrowRight,
    BookOpen,
    ChevronRight,
    FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

/* ─────────────────────────────── helpers ─────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

function FadeIn({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

function SectionTag({ children }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
            {children}
        </span>
    );
}

/* ─────────────────────────────── HERO ─────────────────────────────── */
function HeroSection() {
    return (
        <section className="relative min-h-[75vh] w-full flex items-end overflow-hidden bg-[#1A1A1A]">
            {/* BG image */}
            <div className="absolute inset-0">
                <img
                    src="/ngo-images/3.JPG"
                    alt="Magic Bus – Who We Are"
                    className="h-full w-full object-cover object-center opacity-45"
                />
                {/* layered gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/30 via-[#1A1A1A]/50 to-[#1A1A1A]/95" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/70 via-transparent to-transparent" />
            </div>

            {/* floating decorative blobs */}
            <motion.div
                className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
                animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="pointer-events-none absolute right-1/3 bottom-1/4 h-48 w-48 rounded-full bg-brand-yellow/15 blur-3xl"
                animate={{ y: [0, -28, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Content */}
            <div className="relative z-10 w-full pb-16 pt-32 md:pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
                        className="mb-5"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-yellow" />
                            Magic Bus India Foundation
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
                    >
                        Who We Are
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.32, duration: 0.7, ease: EASE }}
                        className="mt-3 text-xl md:text-2xl font-semibold text-brand-yellow"
                    >
                        An NGO Trusted by Millions
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.65, ease: EASE }}
                        className="mt-5 max-w-2xl text-lg text-white/75 leading-relaxed"
                    >
                        Helping young people from underserved communities complete their
                        education, build life skills, and secure sustainable livelihoods —
                        one life at a time, since 1999.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.58, duration: 0.6, ease: EASE }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <Link
                            to="/donate"
                            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-brand-red/90 hover:shadow-xl hover:shadow-brand-red/25"
                        >
                            Donate Now <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/annual-reports"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/50"
                        >
                            <FileText className="w-4 h-4" /> Read Annual Report
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────── INTRO ─────────────────────────────── */
const stats = [
    { num: "1999", label: "Year Founded" },
    { num: "1M+", label: "Lives Impacted" },
    { num: "14+", label: "States Across India" },
    { num: "25+", label: "Years of Commitment" },
];

function IntroSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Left text */}
                    <div>
                        <FadeUp>
                            <SectionTag>Our Foundation</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                Helping Young People Move Out of Poverty
                            </h2>
                            <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
                                Magic Bus India Foundation is one of India's largest NGOs working in
                                the areas of life skills education and employability skilling for young
                                people living in underserved communities.
                            </p>
                            <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                                The organisation supports adolescents to complete secondary education
                                and equips youth to build sustainable livelihoods.
                            </p>

                            {/* Key differentiators */}
                            <div className="mt-7 space-y-3">
                                {[
                                    "Life skills education integrated with academic outcomes",
                                    "Employability skilling for sustainable livelihoods",
                                    "Ecosystem approach — families, communities, employers",
                                ].map((point, i) => (
                                    <FadeUp key={point} delay={0.08 * (i + 1)}>
                                        <div className="flex items-start gap-3">
                                            <ChevronRight className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                                            <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">{point}</p>
                                        </div>
                                    </FadeUp>
                                ))}
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right — image + stats */}
                    <FadeIn delay={0.1}>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                                <img
                                    src="/ngo-images/2.JPG"
                                    alt="Magic Bus young people"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
                            </div>

                            {/* Floating stats strip */}
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                {stats.map((s, i) => (
                                    <motion.div
                                        key={s.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.12 * i, duration: 0.5, ease: EASE }}
                                        className="rounded-2xl bg-[#F7F7F5] border border-gray-100 px-5 py-4 hover:shadow-sm transition-shadow"
                                    >
                                        <div className="text-2xl font-extrabold text-brand-red">{s.num}</div>
                                        <div className="text-xs font-medium text-[#1A1A1A]/55 mt-1">{s.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────── VISION & MISSION ─────────────────────────────── */
function VisionMission() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-14">
                    <SectionTag>Purpose</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                        What Drives Us Every Day
                    </h2>
                </FadeUp>

                <div className="grid md:grid-cols-2 gap-7">
                    {/* Vision */}
                    <FadeUp delay={0.05}>
                        <div className="relative h-full rounded-3xl bg-[#1A1A1A] text-white p-8 md:p-10 overflow-hidden">
                            <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-brand-red/15 blur-2xl" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-brand-red rounded-xl px-3.5 py-2 mb-6">
                                    <Target className="w-4.5 h-4.5 text-white" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-white">Our Vision</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
                                    Breaking the Cycle of Poverty
                                </h2>
                                <p className="text-white/70 leading-relaxed text-base">
                                    A world where young people break out of poverty to lead fulfilling,
                                    rewarding lives and contribute positively to their communities.
                                </p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Mission */}
                    <FadeUp delay={0.12}>
                        <div className="relative h-full rounded-3xl border-2 border-brand-yellow bg-white p-8 md:p-10 overflow-hidden">
                            <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-brand-yellow/20 blur-2xl" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-brand-yellow rounded-xl px-3.5 py-2 mb-6">
                                    <Zap className="w-4.5 h-4.5 text-brand-black" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black">Our Mission</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] leading-snug mb-4">
                                    Equipping for Adulthood
                                </h2>
                                <p className="text-[#1A1A1A]/70 leading-relaxed text-base">
                                    To equip vulnerable young people with life skills that enable them
                                    to thrive in the transition to adulthood.
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────── VALUES ─────────────────────────────── */
const values = [
    {
        icon: Heart,
        color: "bg-brand-red",
        textColor: "text-white",
        title: "Passion",
        desc: "We work with entrepreneurial zeal to achieve organizational objectives.",
    },
    {
        icon: Shield,
        color: "bg-brand-blue",
        textColor: "text-white",
        title: "Integrity",
        desc: "We are truthful to ourselves and Magic Bus.",
    },
    {
        icon: Users,
        color: "bg-brand-magenta",
        textColor: "text-white",
        title: "Respect",
        desc: "We respect our internal and external stakeholders, diversity of people, ideas and culture.",
    },
    {
        icon: Lightbulb,
        color: "bg-brand-green",
        textColor: "text-brand-black",
        title: "Innovation",
        desc: "We promote viable and implementable innovation at our workplace.",
    },
    {
        icon: Star,
        color: "bg-brand-yellow",
        textColor: "text-brand-black",
        title: "Collaboration",
        desc: "We are a united team at Magic Bus, upholding our core purpose, cooperating with each other, and honoring one another's commitments.",
    },
];

function ValuesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-14">
                    <SectionTag>Our Values</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                        The Principles That Guide Us
                    </h2>
                    <p className="mt-3 text-[#1A1A1A]/55 max-w-lg mx-auto text-base">
                        At Magic Bus, we abide by values that drive every decision we make.
                    </p>
                </FadeUp>

                {/* Top row — 3 cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {values.slice(0, 3).map((v, i) => (
                        <FadeUp key={v.title} delay={0.07 * i}>
                            <motion.div
                                className="rounded-2xl border border-gray-100 bg-[#F7F7F5] p-7 group cursor-default hover:shadow-lg transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className={`${v.color} inline-flex rounded-xl p-3 mb-5`}>
                                    <v.icon className={`w-6 h-6 ${v.textColor}`} />
                                </div>
                                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{v.title}</h3>
                                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Bottom row — 2 wider cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {values.slice(3).map((v, i) => (
                        <FadeUp key={v.title} delay={0.07 * (i + 3)}>
                            <motion.div
                                className="rounded-2xl border border-gray-100 bg-[#F7F7F5] p-7 group cursor-default hover:shadow-lg transition-all duration-300 flex items-start gap-5"
                                whileHover={{ y: -5 }}
                            >
                                <div className={`${v.color} shrink-0 inline-flex rounded-xl p-3`}>
                                    <v.icon className={`w-6 h-6 ${v.textColor}`} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{v.title}</h3>
                                    <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{v.desc}</p>
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────── OUR JOURNEY / TIMELINE ─────────────────────────────── */

/* ORIGINAL CODED TIMELINE — commented out, replaced by milestone-1.jpg image
const milestones = [
    { year: "1999", title: "The Beginning", desc: "Matthew Spacie noticed the power of sport to transform lives of boys in Mumbai slums. Simple rugby sessions became the seed of Magic Bus.", accent: "bg-brand-red" },
    { year: "2002", title: "First Community Centres", desc: "Magic Bus established its first structured community centres in Mumbai, reaching hundreds of young people with mentorship and activity-based learning.", accent: "bg-brand-blue" },
    { year: "2006", title: "Scaling Across India", desc: "The programme expanded beyond Maharashtra, bringing life skills education to adolescents in Delhi, Hyderabad, Kolkata, and rural communities.", accent: "bg-brand-green" },
    { year: "2012", title: "Registered as Foundation", desc: "Magic Bus became Magic Bus India Foundation, formalising its structure and deepening commitments to accountability, transparency, and impact.", accent: "bg-brand-magenta" },
    { year: "2014", title: "Global Recognition", desc: "Received the prestigious Laureus Sport for Good Award — a global honour for the highest-impact sport-for-development programme improving children's lives.", accent: "bg-brand-yellow" },
    { year: "2018", title: "Livelihood at Scale", desc: "Launched comprehensive livelihood programmes, helping youth gain employability skills and access sustainable job and self-employment opportunities.", accent: "bg-brand-red" },
    { year: "2022", title: "Digital Innovation", desc: "Became one of the first NGOs to launch AI & Digital Skilling programmes, preparing youth for future-ready careers in a rapidly evolving economy.", accent: "bg-brand-blue" },
    { year: "Today", title: "1 Million Lives & Beyond", desc: "Operating across 14+ states, we continue to transform lives from childhood to livelihood — supported by a growing ecosystem of partners and donors.", accent: "bg-brand-green" },
];
*/

function OurJourney() {
    return (
        <section className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
            {/* ambient glow blobs */}
            <div className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <FadeUp className="mb-4">
                    <SectionTag>Our Story</SectionTag>
                </FadeUp>
                <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            Transforming Lives Since 1999
                        </h2>
                        <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
                            For more than two decades, Magic Bus has been committed to shaping the
                            future of young India. With the spirit of hope and resilience, we have been
                            providing underserved young people the opportunities to transform their lives
                            and overcome the cycle of poverty.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <div className="lg:text-right">
                            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Our Journey</p>
                            <p className="text-5xl font-extrabold text-brand-yellow">25<span className="text-2xl font-bold text-white/40">+ years</span></p>
                        </div>
                    </FadeUp>
                </div>

                {/* Timeline — milestone image */}
                <FadeIn delay={0.1}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                        <img
                            src="/milestone-1.jpg"
                            alt="Magic Bus Journey Milestones"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </FadeIn>

                {/* Original coded timeline replaced — data preserved in JS comment above */}
            </div>
        </section>
    );
}

/* ─────────────────────────────── ANNUAL REPORT CTA ─────────────────────────────── */
function AnnualReportCTA() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <FadeUp>
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-red via-[#c41a1f] to-[#a01018] text-white p-10 md:p-14 text-center">
                        {/* decorative circles */}
                        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />

                        <div className="relative z-10">
                            <SectionTag>Learn More About Us</SectionTag>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
                                Discover the Impact We've Created Together
                            </h2>
                            <p className="text-white/75 text-base leading-relaxed max-w-xl mx-auto mb-8">
                                Our Annual Report details the journeys of thousands of young people whose
                                lives have been transformed through education, life skills, and livelihoods.
                                Read how your support is making a difference.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/annual-reports"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-brand-red shadow-lg transition hover:shadow-xl hover:bg-brand-yellow hover:text-brand-black group"
                                >
                                    <BookOpen className="w-5 h-5" />
                                    Read Our Annual Report
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/partner"
                                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 hover:border-white/60"
                                >
                                    Partner With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ─────────────────────────────── IMAGE GRID ACCENT ─────────────────────────────── */
function ImpactImages() {
    const images = [
        { src: "/ngo-images/6.jpeg", label: "Life Skills" },
        { src: "/ngo-images/ai2.jpg", label: "Digital Skilling" },
        { src: "/ngo-images/10.jpg", label: "Employability" },
        { src: "/ngo-images/girl.jpeg", label: "Girls' Education" },
    ];

    return (
        <section className="py-16 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/40">Our Work in Action</p>
                </FadeUp>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <FadeIn key={img.label} delay={0.08 * i}>
                            <div className="relative rounded-2xl overflow-hidden aspect-square group">
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">{img.label}</span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────── PAGE ─────────────────────────────── */
export default function WhoWeAre() {
    return (
        <Layout>
            <HeroSection />
            <IntroSection />
            <VisionMission />
            <ValuesSection />
            <ImpactImages />
            <OurJourney />
            <AnnualReportCTA />
        </Layout>
    );
}
