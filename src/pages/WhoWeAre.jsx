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
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { whoWeAreFAQ } from "../components/Home/faqItems";

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
        <HeroBanner
            badgeText="Magic Bus India Foundation"
            title="Who We Are"
            subtitle="An NGO Trusted by Millions"
            description="Helping young people from underserved communities complete their education, build life skills, and secure sustainable livelihoods — one life at a time, since 1999."
            ctas={[
                { to: "/donate", label: "Donate Now", variant: "primary", showArrow: true },
                { to: "/annual-reports", label: "Read Annual Report", icon: FileText },
            ]}
        />
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
                            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                                <img
                                    src="/ngo-images/2.JPG"
                                    alt="Magic Bus young people"
                                    className="h-full w-full object-cover"
                                />
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
                                        className="rounded-2xl bg-[#F7F7F5] border border-gray-100 px-5 py-4"
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
        desc: "We promote viable and implementable innovation at our workplace, constantly seeking new ways to improve our programmes and impact.",
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
                                className="rounded-2xl border border-gray-200 bg-white p-7 group cursor-default hover:shadow-lg hover:border-brand-yellow/50 transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className={`${v.color} inline-flex rounded-xl p-3 mb-5`}>
                                    <v.icon className={`w-6 h-6 ${v.textColor}`} />
                                </div>
                                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{v.title}</h3>
                                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Bottom row — 2 wider cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {values.slice(3).map((v, i) => (
                        <FadeUp key={v.title} delay={0.07 * (i + 3)}>
                            <motion.div
                                className="rounded-2xl border border-gray-200 bg-white p-7 group cursor-default hover:shadow-lg hover:border-brand-yellow/50 transition-all duration-300 flex items-start gap-5"
                                whileHover={{ y: -5 }}
                            >
                                <div className={`${v.color} shrink-0 inline-flex rounded-xl p-3`}>
                                    <v.icon className={`w-6 h-6 ${v.textColor}`} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{v.title}</h3>
                                    <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{v.desc}</p>
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
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
            <ValuesSection />
            <ImpactImages />
            <FAQSection
                items={whoWeAreFAQ}
                title="Frequently Asked Questions"
                subtitle="Learn more about who we are, our mission, and how we work."
            />
            <AnnualReportCTA />
        </Layout>
    );
}
