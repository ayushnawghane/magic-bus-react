import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    Heart, Shield, Users, Lightbulb, Star,
    Zap, BookOpen, TrendingUp, MessageCircle,
    ChevronDown, Mail, ArrowRight, CheckCircle,
    Award, Quote, User, Sparkles, ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

/* ─────────────────────────── helpers ─────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-70px" });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay }}>
            {children}
        </motion.div>
    );
}

function FadeIn({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay }}>
            {children}
        </motion.div>
    );
}

function SectionTag({ children, dark = false }) {
    return (
        <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 ${dark ? "border border-white/20 bg-white/10 text-white" : "border border-brand-black/15 bg-brand-yellow text-brand-black"
            }`}>
            {children}
        </span>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 0 — HERO / BANNER
══════════════════════════════════════════════════════════════ */
function HeroBanner() {
    return (
        <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#1A1A1A]">
            <div className="absolute inset-0">
                <img src="/ngo-images/4.JPG" alt="Our Culture" className="h-full w-full object-cover object-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/20 via-[#1A1A1A]/55 to-[#1A1A1A]/97" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/70 via-transparent to-transparent" />
            </div>

            {/* animated blobs */}
            <motion.div className="pointer-events-none absolute right-16 top-24 h-80 w-80 rounded-full bg-brand-yellow/15 blur-3xl"
                animate={{ y: [0, 24, 0], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="pointer-events-none absolute left-1/3 bottom-1/4 h-56 w-56 rounded-full bg-brand-red/15 blur-3xl"
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

            <div className="relative z-10 w-full pb-20 pt-36">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease: EASE }} className="mb-5">
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-yellow" />
                            Magic Bus India Foundation
                        </span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
                        Our Culture
                    </motion.h1>

                    <motion.h2 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.7, ease: EASE }}
                        className="mt-3 text-xl md:text-2xl font-semibold text-brand-yellow">
                        Purpose is part of who we are
                    </motion.h2>

                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.65, ease: EASE }}
                        className="mt-5 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
                        A workplace where curiosity is encouraged, integrity is non-negotiable, and people grow
                        together while shaping something bigger than 'Self'.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.6, ease: EASE }}
                        className="mt-8 flex flex-wrap gap-4">
                        <a href="#connect" className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-brand-red/90 hover:shadow-xl hover:shadow-brand-red/25">
                            Join Our Team <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#awards" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/50">
                            <Award className="w-4 h-4" /> Our Awards
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — INTRODUCTION
══════════════════════════════════════════════════════════════ */
const culturePoints = [
    { icon: Lightbulb, color: "bg-brand-yellow", textColor: "text-brand-black", title: "Curiosity", desc: "Curiosity fuels our innovation and keeps us moving forward. We thrive on questions, ideas, and fresh perspectives to create collective impact." },
    { icon: Shield, color: "bg-brand-blue", textColor: "text-white", title: "Integrity", desc: "Trust, transparency, and accountability guide everything we do and form the foundation of our culture and how we treat one another." },
    { icon: TrendingUp, color: "bg-brand-green", textColor: "text-brand-black", title: "Learning", desc: "Through new challenges, shared knowledge, and opportunities to upskill, growth is not only supported — it's expected and celebrated." },
    { icon: Zap, color: "bg-brand-magenta", textColor: "text-white", title: "Bold Ideas", desc: "We value experimentation over perfection. Bold ideas, calculated risks, and learning from failures help us evolve and stay relevant." },
    { icon: Users, color: "bg-brand-red", textColor: "text-white", title: "Collaboration", desc: "Great things happen when people work together. We listen, support, and build toward shared goals — because that's how we succeed." },
    { icon: Star, color: "bg-brand-yellow", textColor: "text-brand-black", title: "Agility", desc: "Change is constant, and we embrace it. Our teams are agile, responsive, and open to evolving — moving fast and adapting with confidence." },
];

function IntroSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-4">
                    <SectionTag>Who We Are</SectionTag>
                </FadeUp>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">Our Culture</h2>
                        <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
                            At Magic Bus, we believe that work should be meaningful, energising, and human. Our workplace is our second home — one where curiosity is encouraged, integrity is non-negotiable, and people grow together while shaping something bigger than 'Self'.
                        </p>
                        <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                            Every role at Magic Bus makes a difference. Every work here has impact. Every role contributes to our larger mission and helps shape the organisation's direction and culture. We empower our people to take ownership and create change that truly matters.
                        </p>
                        <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                            We being onboard people who bring passion, energy, and pride to what they do — because meaningful work is driven by people who care deeply and see their contribution as more than just a job.
                        </p>
                    </FadeUp>

                    <FadeIn delay={0.1}>
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                            <img src="/ngo-images/6.jpeg" alt="Our Culture" className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent" />
                            {/* floating badge */}
                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-lg">
                                    <div className="h-8 w-8 rounded-full bg-brand-yellow flex items-center justify-center">
                                        <Heart className="w-4 h-4 text-brand-black" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#1A1A1A]">Great Place to Work</p>
                                        <p className="text-[11px] text-[#1A1A1A]/55">Certified 6 years in a row</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* 6-pillar grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {culturePoints.map((p, i) => (
                        <FadeUp key={p.title} delay={0.06 * i}>
                            <motion.div className="rounded-2xl border border-gray-100 bg-[#F7F7F5] p-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300" whileHover={{ scale: 1.01 }}>
                                <div className={`${p.color} inline-flex rounded-xl p-2.5 mb-4`}>
                                    <p.icon className={`w-5 h-5 ${p.textColor}`} />
                                </div>
                                <h3 className="font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
                                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — AWARDS
══════════════════════════════════════════════════════════════ */
const awards = [
    { img: "/ngo-images/award1.jpg", title: "Great Place to Work", sub: "Certified six consecutive years in a row" },
    { img: "/ngo-images/award2.jpg", title: "India's Best NGOs to Work For", sub: "Recognised nationally for workplace excellence" },
    { img: "/ngo-images/award3.jpg", title: "Best Employers Among Nation Builders", sub: "Honoured for meaningful contributions to society" },
];

function AwardsSection() {
    return (
        <section id="awards" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brand-red/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-14">
                    <SectionTag dark>Recognition</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Awards &amp; Recognition</h2>
                    <p className="mt-3 text-white/55 max-w-lg mx-auto leading-relaxed">
                        Our commitment to culture, employee wellbeing, and purposeful work has earned us consistent recognition.
                    </p>
                </FadeUp>

                <div className="grid sm:grid-cols-3 gap-6">
                    {awards.map((a, i) => (
                        <FadeUp key={a.title} delay={0.08 * i}>
                            <motion.div
                                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-yellow/40 transition-all duration-300"
                                whileHover={{ y: -4 }}
                            >
                                {/* image */}
                                <div className="relative w-full h-52 overflow-hidden bg-[#2a2a2a]">
                                    <img src={a.img} alt={a.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent" />
                                    {/* award badge */}
                                    <div className="absolute top-3 right-3">
                                        <div className="w-9 h-9 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg">
                                            <Award className="w-4 h-4 text-brand-black" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-white text-base leading-snug mb-1">{a.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{a.sub}</p>
                                </div>
                                {/* Yellow bottom accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — GREAT PLACE TO WORK
══════════════════════════════════════════════════════════════ */
const gptw = [
    { icon: Shield, title: "Safe &amp; Positive", desc: "Our people consistently affirm that Magic Bus provides a safe workplace that contributes to a positive working environment." },
    { icon: Heart, title: "Meaningful Work", desc: "Many share that their work holds special meaning beyond being just a job — a sense of purpose embedded in every role." },
    { icon: Users, title: "Inclusive Culture", desc: "By embracing different backgrounds, experiences, and viewpoints, everyone can contribute authentically and perform at their best." },
    { icon: CheckCircle, title: "Ethics &amp; Accountability", desc: "Fairness, transparency, and mutual respect guide how we operate and form the basis of trust-based relationships across the organisation." },
    { icon: TrendingUp, title: "Professional Growth", desc: "We invest in building skills and expanding capabilities through real-world challenges and collaboration. Progress is actively recognised." },
    { icon: Star, title: "Community Impact", desc: "People are encouraged to take ownership and play a part in shaping both our work and our culture — contributing to something bigger." },
];

function GreatPlaceSection() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>Great Place to Work</SectionTag>
                    <div className="grid lg:grid-cols-2 gap-8 items-end">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                            What Makes Magic Bus a Great Place to Work?
                        </h2>
                        <p className="text-base text-[#1A1A1A]/65 leading-relaxed">
                            At Magic Bus, we are intentional about creating an environment where people feel respected, supported, and empowered to do meaningful work. Our culture is shaped by shared values, a strong sense of purpose, and a commitment to creating positive experiences for everyone who works here.
                        </p>
                    </div>
                </FadeUp>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {gptw.map((item, i) => (
                        <FadeUp key={item.title} delay={0.06 * i}>
                            <motion.div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300" whileHover={{ scale: 1.01 }}>
                                <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] flex items-center justify-center mb-4 border border-gray-100">
                                    <item.icon className="w-5 h-5 text-brand-red" />
                                </div>
                                <h3 className="font-bold text-[#1A1A1A] mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Quote callout */}
                <FadeUp delay={0.1} className="mt-10">
                    <div className="rounded-3xl bg-[#1A1A1A] text-white p-8 md:p-10 relative overflow-hidden">
                        <div className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 rounded-full bg-brand-yellow/10 blur-2xl" />
                        <div className="relative z-10 flex gap-5 items-start">
                            <div className="bg-brand-yellow shrink-0 rounded-xl p-2.5 mt-1">
                                <Quote className="w-5 h-5 text-brand-black" />
                            </div>
                            <p className="text-lg font-medium text-white/85 leading-relaxed italic">
                                "Ethical conduct and accountability guide how we operate. Fairness, transparency, and mutual respect are embedded in our ways of working and form the basis of strong, trust-based relationships across the organisation."
                            </p>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — CORE VALUES
══════════════════════════════════════════════════════════════ */
const coreValues = [
    { icon: Shield, color: "bg-brand-red", textColor: "text-white", title: "Integrity", desc: "Our strong and transparent systems ensure smooth operations, upholding trust." },
    { icon: Heart, color: "bg-brand-blue", textColor: "text-white", title: "Passion", desc: "We follow a people-first approach and prioritise the well-being of our employees." },
    { icon: Users, color: "bg-brand-magenta", textColor: "text-white", title: "Respect", desc: "Teams feel valued in our positive culture, celebrating diversity and collaboration." },
    { icon: Lightbulb, color: "bg-brand-green", textColor: "text-brand-black", title: "Innovation", desc: "We are a technology-led organisation embracing change with agility." },
    { icon: Star, color: "bg-brand-yellow", textColor: "text-brand-black", title: "Collaboration", desc: "With shared ideas, we achieve common goals and impact millions." },
];

function CoreValuesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-14">
                    <SectionTag>Values</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                        Core Values Defining Our Work
                    </h2>
                    <p className="mt-3 text-[#1A1A1A]/55 max-w-lg mx-auto leading-relaxed">
                        Five values that guide every decision, every interaction, and every programme we run.
                    </p>
                </FadeUp>

                {/* Horizontal scrollable on mobile, grid on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                    {coreValues.map((v, i) => (
                        <FadeUp key={v.title} delay={0.07 * i}>
                            <motion.div
                                className="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-[#F7F7F5] p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className={`${v.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg transition-shadow`}>
                                    <v.icon className={`w-6 h-6 ${v.textColor}`} />
                                </div>
                                <h3 className="font-extrabold text-[#1A1A1A] mb-2">{v.title}</h3>
                                <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 5 — WORKING HERE (photo mosaic)
══════════════════════════════════════════════════════════════ */
function WorkingHereSection() {
    const photos = [
        { src: "/ngo-images/2.JPG", span: "col-span-2 row-span-2" },
        { src: "/ngo-images/7.jpg", span: "" },
        { src: "/ngo-images/8.jpg", span: "" },
        { src: "/ngo-images/10.jpg", span: "" },
        { src: "/ngo-images/girl.jpeg", span: "" },
    ];

    return (
        <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-blue/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-red/8 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* Left text */}
                    <FadeUp>
                        <SectionTag dark>Inside Magic Bus</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mt-2">
                            What Is It Like Working Here?
                        </h2>
                        <p className="mt-5 text-white/65 leading-relaxed">
                            At Magic Bus, employees feel supported, inspired, and motivated in creating change that matters. Our teams bring passion and collaboration to every initiative.
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                "A culture of ownership and empowerment",
                                "Flexible, purpose-driven team environment",
                                "Strong sense of community and belonging",
                                "Continuous learning and challenge at every level",
                            ].map((point, i) => (
                                <FadeUp key={point} delay={0.08 * i}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-3 h-3 text-brand-black" />
                                        </div>
                                        <p className="text-sm text-white/75">{point}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Right — photo mosaic */}
                    <FadeIn delay={0.1}>
                        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[400px]">
                            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                                <img src="/ngo-images/2.JPG" alt="Magic Bus team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden">
                                <img src="/ngo-images/7.jpg" alt="Work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden">
                                <img src="/ngo-images/8.jpg" alt="Work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden">
                                <img src="/ngo-images/10.jpg" alt="Work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="col-span-2 rounded-2xl overflow-hidden">
                                <img src="/ngo-images/girl.jpeg" alt="Work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 6 — HOW WE INVEST
══════════════════════════════════════════════════════════════ */
const investments = [
    {
        icon: BookOpen,
        color: "bg-brand-blue",
        textColor: "text-white",
        title: "Capability Development Program",
        desc: "Designed to upskill mid-level managers with leadership, communication, and project execution skills to drive social impact effectively.",
    },
    {
        icon: MessageCircle,
        color: "bg-brand-green",
        textColor: "text-brand-black",
        title: "Growth Talk Platform",
        desc: "Connects thought leadership with employees, bringing fresh perspectives that help teams learn and grow through open conversations.",
    },
    {
        icon: Users,
        color: "bg-brand-magenta",
        textColor: "text-white",
        title: "Alumni Connect",
        desc: "Re-engages former employees to gather insights, reduce attrition, and boost rehiring — with 5% of monthly hires from alumni via 'Ghar Vapasi'.",
    },
];

function InvestSection() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>Employee Investment</SectionTag>
                    <div className="grid lg:grid-cols-2 gap-8 items-end">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                            How We Invest in Our Employees
                        </h2>
                        <p className="text-base text-[#1A1A1A]/65 leading-relaxed">
                            Members of Magic Bus are encouraged to embrace continuous learning and grow with excellence. We support this through structured programmes and initiatives.
                        </p>
                    </div>
                </FadeUp>

                <div className="grid md:grid-cols-3 gap-6">
                    {investments.map((item, i) => (
                        <FadeUp key={item.title} delay={0.08 * i}>
                            <motion.div
                                className="bg-white rounded-3xl border border-gray-100 p-7 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                                whileHover={{ scale: 1.01 }}
                            >
                                <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}>
                                    <item.icon className={`w-6 h-6 ${item.textColor}`} />
                                </div>
                                <h3 className="font-bold text-[#1A1A1A] text-base mb-3">{item.title}</h3>
                                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 7 — TESTIMONIALS
══════════════════════════════════════════════════════════════ */
const testimonials = [
    {
        quote: "It is truly heartening to see adolescents from underserved communities embrace learning through our programmes. Their engagement reflects the work of our teams grounded in a culture of innovation and strong processes.",
        name: "Mercy K",
        role: "Curriculum – Programme Development",
        img: "/ngo-images/mercy.png",
        link: "https://www.linkedin.com/posts/magic-bus_employee-testimonial-mercy-activity-7127292955408670720-vlEl/",
    },
    {
        quote: "The company promotes innovation and values employee input, sparking fresh ideas and products. Flexible hours and wellness programs show they care about our wellbeing. Community involvement through volunteering adds a strong sense of purpose.",
        name: "Magic Bus Employee",
        role: "Team Member",
        img: "",
        link: "https://www.greatplacetowork.in/Magic-bus-Success-Story.pdf",
    },
];

function TestimonialsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-14">
                    <SectionTag>Testimonials</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                        Hear from Our Employees
                    </h2>
                    <p className="mt-3 text-[#1A1A1A]/55 max-w-lg mx-auto leading-relaxed">
                        The voices of our people reflect the culture we have built — one of purpose, trust, and impact.
                    </p>
                </FadeUp>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {testimonials.map((t, i) => (
                        <FadeUp key={t.name} delay={0.08 * i}>
                            <div className="relative bg-[#F7F7F5] rounded-3xl p-8 border border-gray-100 h-full hover:shadow-lg transition-shadow">
                                {/* large quote mark */}
                                <span className="absolute top-5 right-6 text-7xl font-serif text-brand-yellow/30 leading-none select-none">"</span>

                                <div className="relative z-10">
                                    <p className="text-base text-[#1A1A1A]/80 leading-relaxed italic mb-6">
                                        "{t.quote}"
                                    </p>
                                        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                            <div className="w-10 h-10 rounded-full overflow-hidden bg-brand-yellow/20 shrink-0 flex items-center justify-center">
                                                {t.img ? (
                                                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" onError={e => e.target.style.display = 'none'} />
                                                ) : (
                                                    <User className="w-5 h-5 text-brand-yellow" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2">
                                                    {t.name}
                                                    {t.link && (
                                                        <a href={t.link} target="_blank" rel="noopener noreferrer" className="text-brand-red hover:text-brand-yellow transition-colors">
                                                            <ExternalLink className="w-3.5 h-3.5" />
                                                        </a>
                                                    )}
                                                </p>
                                                <p className="text-xs text-brand-red font-medium">{t.role}</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                {/* Career CTA banner */}
                <FadeUp delay={0.1}>
                    <div className="rounded-2xl bg-gradient-to-r from-brand-red to-[#c41a1f] text-white px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            <Sparkles className="w-7 h-7 text-brand-yellow shrink-0" />
                            <p className="font-semibold text-white">
                                Build a career with purpose at Magic Bus.{" "}
                                <span className="text-brand-yellow">Explore jobs here.</span>
                            </p>
                        </div>
                        <a href="https://www.magicbus.org/work-with-us.php" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 shrink-0 rounded-full bg-white px-6 py-3 font-bold text-brand-red transition hover:bg-brand-yellow hover:text-brand-black group">
                            View Open Positions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 8 — FAQs
══════════════════════════════════════════════════════════════ */
const faqs = [
    { q: "What kind of professionals work at Magic Bus?", a: "Our teams are purpose-driven, collaborative, and open to learning. We welcome professionals from both corporate and social sector backgrounds who are passionate about creating meaningful change." },
    { q: "Does Magic Bus support professional growth?", a: "Yes. Continuous learning and skill development are integral to our culture. Through our Capability Development Program, Growth Talk platform, and on-the-job challenges, we ensure our people grow at every stage." },
    { q: "Is Magic Bus an inclusive workplace?", a: "Yes. Diversity, equity, and respect are actively practiced across teams. We embrace different backgrounds, experiences, and viewpoints — creating an environment where everyone can contribute authentically." },
    { q: "Why choose Magic Bus as an employer?", a: "Magic Bus offers meaningful work, strong values, and the opportunity to contribute to lasting social impact. Our certified Great Place to Work status reflects our genuine commitment to employee experience and wellbeing." },
];

function FAQSection() {
    const [open, setOpen] = useState(null);
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-12">
                    <SectionTag>FAQs</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Frequently Asked Questions</h2>
                    <p className="mt-3 text-[#1A1A1A]/55 max-w-md mx-auto leading-relaxed">Common questions about working at Magic Bus and our culture.</p>
                </FadeUp>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <FadeUp key={faq.q} delay={0.06 * i}>
                            <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open === i ? "border-brand-yellow bg-white shadow-md" : "border-gray-200 bg-white hover:border-brand-yellow/40"}`}>
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className={`font-semibold text-sm leading-snug ${open === i ? "text-brand-red" : "text-[#1A1A1A]"}`}>{faq.q}</span>
                                    <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
                                        <ChevronDown className={`w-5 h-5 ${open === i ? "text-brand-red" : "text-[#1A1A1A]/40"}`} />
                                    </motion.div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                                    transition={{ duration: 0.35, ease: EASE }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-6 pb-5 text-sm text-[#1A1A1A]/65 leading-relaxed">{faq.a}</p>
                                </motion.div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 9 — CONNECT / CONTACT
══════════════════════════════════════════════════════════════ */
function ConnectSection() {
    return (
        <section id="connect" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-red/10 blur-3xl" />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-12">
                    <SectionTag dark>Get In Touch</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Connect With Us</h2>
                    <p className="mt-3 text-white/55 max-w-md mx-auto leading-relaxed">Reach out to us for queries, partnerships, or career opportunities.</p>
                </FadeUp>

                <div className="grid sm:grid-cols-2 gap-5">
                    {[
                        { icon: Mail, label: "General Queries", email: "Info@magicbusindia.org", sub: "For general information and partnerships" },
                        { icon: Users, label: "Career Opportunities", email: "careers@magicbusindia.org", sub: "To explore roles and working with us" },
                    ].map((c, i) => (
                        <FadeUp key={c.label} delay={0.08 * i}>
                            <motion.a
                                href={`mailto:${c.email}`}
                                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-brand-yellow/40 transition-all duration-300 group"
                                whileHover={{ y: -3 }}
                            >
                                <div className="bg-brand-yellow rounded-xl p-3 shrink-0">
                                    <c.icon className="w-5 h-5 text-brand-black" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{c.label}</p>
                                    <p className="font-bold text-white group-hover:text-brand-yellow transition-colors">{c.email}</p>
                                    <p className="text-xs text-white/45 mt-1">{c.sub}</p>
                                </div>
                            </motion.a>
                        </FadeUp>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <FadeUp delay={0.15} className="mt-8 text-center">
                    <a href="https://www.magicbus.org/work-with-us.php" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 font-bold text-brand-black shadow-lg transition hover:shadow-xl hover:bg-brand-yellow/90 group">
                        Explore Career Opportunities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function OurCulture() {
    return (
        <Layout>
            <HeroBanner />
            <IntroSection />
            <AwardsSection />
            <GreatPlaceSection />
            <CoreValuesSection />
            <WorkingHereSection />
            <InvestSection />
            <TestimonialsSection />
            <FAQSection />
            <ConnectSection />
        </Layout>
    );
}
