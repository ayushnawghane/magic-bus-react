import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    ChevronDown,
    Heart,
    Target,
    Lightbulb,
    Users,
    Star,
    BookOpen,
    Briefcase,
    TrendingUp,
    Shield,
    Zap,
    HelpCircle,
    ArrowRight,
    CheckCircle,
    Quote,
} from "lucide-react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────────────────────────────*/
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
            transition={{ duration: 0.6, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────────────────────────*/
function SectionLabel({ children, icon: Icon }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/20 bg-brand-yellow px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-brand-black uppercase mb-4">
            {Icon && <Icon className="w-3.5 h-3.5" />}
            {children}
        </span>
    );
}

/* ─────────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────────────*/
function AnimatedCounter({ value, suffix = "", duration = 2 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = parseFloat(value);
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(parseFloat(start.toFixed(1)));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, value, duration]);

    return (
        <span ref={ref}>
            {typeof value === "string" && value.includes(".")
                ? count.toFixed(1)
                : Math.round(count)}
            {suffix}
        </span>
    );
}

/* ─────────────────────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────────────────────────*/
const aboutFAQ = [
    {
        q: "When was Magic Bus established and where?",
        a: "Magic Bus India Foundation was established in Mumbai in 1999. Our founder noticed the transformative power of sport to change the lives of young boys from underserved communities, which sparked the creation of the organisation.",
    },
    {
        q: "Who does Magic Bus work with?",
        a: "We work with adolescents and youth from underserved communities, supporting them from school days through to their career phase. We also engage with families, communities, schools, employers, and local institutions to scale sustainable transformation.",
    },
    {
        q: "What is the Magic Bus approach to education?",
        a: "Magic Bus integrates life skills education with academic learning and employability pathways. We believe academic education alone is not sufficient — young people also need resilience, communication skills, and the confidence to navigate real-world challenges.",
    },
    {
        q: "What are the key challenges Magic Bus addresses?",
        a: "We address three core challenges: gender disparity (2 out of 5 girls drop out before completing education), learning gaps (45.8% of 8th graders cannot solve simple arithmetic), and skill mismatch (43.6% of youth are considered unemployable due to lack of future-ready skills).",
    },
    {
        q: "What does Magic Bus mean by 'life skills'?",
        a: "Life skills at Magic Bus include resilience, aspiration, self-belief, effective communication, conscious decision-making, emotional management, and readiness for real-world scenarios. These skills help young people thrive beyond the classroom.",
    },
    {
        q: "How does Magic Bus support livelihoods?",
        a: "Magic Bus supports youth in acquiring employability skills, accessing job opportunities or self-employment, and sustaining livelihoods. Our programmes create pathways from education to economic independence.",
    },
    {
        q: "What is the 'ecosystem approach' of Magic Bus?",
        a: "Our ecosystem approach means we engage with all stakeholders — families, communities, schools, employers, and local institutions — to create an enabling environment for young people. This holistic approach ensures sustainable transformation that lasts beyond the programme.",
    },
    {
        q: "How can I partner with or support Magic Bus?",
        a: "Magic Bus is open to collaborating with donors, corporates, foundations, and government partners. You can reach out through the Contact Us or Partner With Us pages on our website to explore how we can work together to create sustainable impact.",
    },
];

/* ─────────────────────────────────────────────────────────────
   BANNER
───────────────────────────────────────────────────────────────*/
function HeroBanner() {
    return (
        <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-[#1A1A1A]">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/ngo-images/1.jpeg"
                    alt="Magic Bus – Transforming Lives"
                    className="h-full w-full object-cover opacity-50"
                />
                {/* Rich gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
            </div>

            {/* Decorative accent shapes */}
            <motion.div
                className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-brand-red/20 blur-3xl"
                animate={{ y: [0, 25, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="pointer-events-none absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl"
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                    <div className="max-w-3xl">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
                            className="mb-5"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow backdrop-blur-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
                                About Magic Bus
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Transforming Lives{" "}
                            <span className="block mt-1 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red bg-clip-text text-transparent">
                                from Childhood to Livelihood
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
                            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
                        >
                            Helping young people from underserved communities complete education
                            and build sustainable livelihoods since 1999.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
                            className="mt-8 flex flex-wrap items-center gap-4"
                        >
                            <Link
                                to="/donate"
                                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-brand-red/90 hover:shadow-brand-red/30 hover:shadow-xl"
                            >
                                Donate Now <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/partner"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-yellow/70 bg-transparent px-7 py-3.5 font-semibold text-brand-yellow backdrop-blur-sm transition-all hover:border-brand-yellow hover:bg-brand-yellow/10"
                            >
                                Partner With Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <motion.div
                    className="h-7 w-[2px] rounded-full bg-white/30"
                    animate={{ scaleY: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   PROBLEM STATEMENT
───────────────────────────────────────────────────────────────*/
const challenges = [
    {
        icon: Users,
        label: "Gender Disparity",
        stat: "2 in 5",
        color: "bg-brand-magenta",
        desc: "Girls drop out of school before completing education — losing their voice and chances of financial independence.",
    },
    {
        icon: BookOpen,
        label: "Learning Gaps",
        stat: "45.8%",
        color: "bg-brand-blue",
        desc: "Of 8th Grade students cannot solve simple arithmetic. Without mathematical abilities, managing a business or job becomes difficult.",
    },
    {
        icon: Briefcase,
        label: "Skill Mismatch",
        stat: "43.6%",
        color: "bg-brand-green",
        desc: "Of youth are considered unemployable — they have potential, but lack future-ready skills that employers seek.",
    },
];

function ProblemStatement() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp>
                    <SectionLabel icon={Target}>The Problem</SectionLabel>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight max-w-3xl">
                        Helping young people complete education and build livelihoods
                    </h2>
                    <p className="mt-5 text-lg text-[#1A1A1A]/70 max-w-3xl leading-relaxed">
                        India has the biggest population of young people globally. However,
                        millions of adolescents and youth from underserved areas are at risk
                        of being left behind — dropping out of school, struggling at
                        workplaces, and being stuck in intergenerational poverty.
                    </p>
                </FadeUp>

                {/* Challenges */}
                <div className="mt-14">
                    <FadeUp delay={0.1}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/50 mb-6">
                            Challenges India Faces Today
                        </p>
                    </FadeUp>
                    <div className="grid md:grid-cols-3 gap-6">
                        {challenges.map((c, i) => (
                            <FadeUp key={c.label} delay={0.1 + i * 0.1}>
                                <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div
                                            className={`${c.color} rounded-xl p-3 inline-flex`}
                                        >
                                            <c.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-3xl font-extrabold text-[#1A1A1A] opacity-10 group-hover:opacity-20 transition-opacity">
                                            0{i + 1}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-extrabold text-brand-red mb-1">
                                            {c.stat}
                                        </div>
                                        <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{c.label}</h3>
                                        <p className="text-sm text-[#1A1A1A]/65 leading-relaxed">{c.desc}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>

                {/* Poverty trap callout */}
                <FadeUp delay={0.2} className="mt-10">
                    <div className="rounded-2xl bg-gradient-to-r from-brand-red/10 via-brand-yellow/10 to-brand-red/5 border border-brand-red/15 p-7">
                        <p className="text-base md:text-lg font-medium text-[#1A1A1A] leading-relaxed">
                            <span className="text-brand-red font-bold">When gaps in education, life skills, and employability are not tackled,</span>{" "}
                            young people are deprived of opportunities due to the poverty trap.
                        </p>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   WHY LIFE SKILLS
───────────────────────────────────────────────────────────────*/
const lifeSkillBenefits = [
    "Enhance resilience, aspiration, and self-belief",
    "Communicate well and make conscious decisions",
    "Handle emotions, challenges, and relationships",
    "Get ready for real-world scenarios beyond classrooms",
];

function WhyLifeSkills() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left – image */}
                    <FadeIn className="order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                            <img
                                src="/ngo-images/5.jpeg"
                                alt="Life skills education"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            {/* Floating card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="bg-brand-yellow rounded-lg p-2.5">
                                        <Star className="w-5 h-5 text-brand-black" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#1A1A1A]/60 font-medium uppercase tracking-wider">Research & Experience Show</p>
                                        <p className="text-sm font-bold text-[#1A1A1A]">Life skills increase chances of finishing education</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right – content */}
                    <div className="order-1 lg:order-2">
                        <FadeUp>
                            <SectionLabel icon={Lightbulb}>Life Skills</SectionLabel>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                Why Life Skills Education Is Needed
                            </h2>
                            <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                                Academic education alone may not be sufficient to help young minds overcome
                                poverty. Adolescents from underserved communities often deal with challenges
                                beyond academics — low confidence, absence of role models, decision-making
                                struggles, and limited exposure.
                            </p>
                            <p className="mt-3 text-base text-[#1A1A1A]/70 leading-relaxed">
                                In the absence of life skills, even students who come to school struggle
                                to handle the challenges of higher education or their workplace.
                            </p>

                            <p className="mt-6 font-semibold text-[#1A1A1A]">With life skills education, young people can:</p>
                            <ul className="mt-4 space-y-3">
                                {lifeSkillBenefits.map((b, i) => (
                                    <FadeUp delay={0.05 * (i + 1)} key={b}>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                                            <span className="text-[#1A1A1A]/75 text-sm leading-relaxed">{b}</span>
                                        </li>
                                    </FadeUp>
                                ))}
                            </ul>

                            <FadeUp delay={0.3}>
                                <div className="mt-8 rounded-xl bg-brand-red/5 border-l-4 border-brand-red p-4">
                                    <p className="text-sm leading-relaxed text-[#1A1A1A]/80 italic">
                                        "At Magic Bus, life skills are at the core of all our initiatives. We make
                                        sure education translates to enhanced capabilities, increased confidence,
                                        and sustainable livelihoods."
                                    </p>
                                </div>
                            </FadeUp>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   WHO WE ARE
───────────────────────────────────────────────────────────────*/
const stats = [
    { value: "1999", suffix: "", label: "Founded in Mumbai" },
    { value: "25", suffix: "+", label: "Years of Impact" },
    { value: "14", suffix: "+", label: "States Across India" },
    { value: "1", suffix: "M+", label: "Lives Impacted" },
];

function WhoWeAre() {
    return (
        <section className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-yellow/15 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <FadeUp>
                            <SectionLabel>Who We Are</SectionLabel>
                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                                One of India's Top NGOs in{" "}
                                <span className="text-brand-yellow">Life Skills & Livelihoods</span>
                            </h2>
                            <p className="mt-5 text-white/70 leading-relaxed">
                                Established in Mumbai in 1999, Magic Bus India Foundation works in the areas
                                of life skills education, employability skilling, and livelihoods. We support
                                adolescents and youth from underserved communities at crucial stages of
                                transformation — from their school days to their career phase.
                            </p>
                            <p className="mt-4 text-white/70 leading-relaxed">
                                We work towards making sure challenging circumstances at birth do not
                                determine their life outcomes.
                            </p>
                            <p className="mt-4 text-white/70 leading-relaxed">
                                Our uniqueness arises from our{" "}
                                <span className="text-brand-yellow font-semibold">ecosystem approach</span>.
                                We engage with families, communities, schools, employers, and local institutions
                                to scale sustainable transformation.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-5">
                        {stats.map((s, i) => (
                            <FadeUp key={s.label} delay={0.1 * i}>
                                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors">
                                    <div className="text-3xl md:text-4xl font-extrabold text-brand-yellow">
                                        {s.value}
                                        {s.suffix}
                                    </div>
                                    <div className="mt-2 text-sm text-white/60 font-medium">{s.label}</div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>

                {/* Image strip */}
                <FadeIn delay={0.2} className="mt-16">
                    <div className="grid grid-cols-3 gap-4 rounded-3xl overflow-hidden h-64 md:h-80">
                        {["/ngo-images/6.jpeg", "/ngo-images/ai2.jpg", "/ngo-images/10.jpg"].map((src, i) => (
                            <div key={i} className="overflow-hidden">
                                <img
                                    src={src}
                                    alt=""
                                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   WHAT WE DO
───────────────────────────────────────────────────────────────*/
const whatWeDo = [
    {
        icon: BookOpen,
        color: "text-brand-blue",
        bg: "bg-brand-blue/10",
        title: "Education & Adolescents",
        desc: "Adolescents stay in school, acquire important life skills, and finish secondary education.",
    },
    {
        icon: Briefcase,
        color: "text-brand-green",
        bg: "bg-brand-green/10",
        title: "Youth & Livelihoods",
        desc: "Youth acquire employability skills, access opportunities for jobs or self-employment, and sustain livelihoods.",
    },
    {
        icon: Users,
        color: "text-brand-magenta",
        bg: "bg-brand-magenta/10",
        title: "Community Support",
        desc: "Communities support young people's education and career growth through an integrated ecosystem.",
    },
];

function WhatWeDo() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp>
                    <SectionLabel icon={TrendingUp}>What We Do</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight max-w-2xl">
                        From Classrooms to Careers — an Integrated Approach
                    </h2>
                    <p className="mt-4 text-[#1A1A1A]/70 max-w-2xl leading-relaxed">
                        Our work aims to achieve long-term goals, ensuring that progress made in classrooms
                        transitions to actual economic independence.
                    </p>
                </FadeUp>

                <div className="mt-14 grid md:grid-cols-3 gap-7">
                    {whatWeDo.map((item, i) => (
                        <FadeUp key={item.title} delay={0.1 + i * 0.1}>
                            <div className="relative rounded-2xl border border-gray-100 bg-[#F7F7F5] p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                {/* Icon */}
                                <div className={`${item.bg} ${item.color} inline-flex rounded-xl p-3.5 mb-5`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                                <p className="text-sm text-[#1A1A1A]/65 leading-relaxed">{item.desc}</p>
                                {/* Decorative number */}
                                <div className="absolute top-6 right-6 text-5xl font-extrabold text-[#1A1A1A]/5 group-hover:text-[#1A1A1A]/10 transition-colors">
                                    0{i + 1}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   OUR STORY
───────────────────────────────────────────────────────────────*/
const timelineEvents = [
    {
        year: "1999",
        title: "Founded in Mumbai",
        desc: "Our founder noticed the transformative power of sport to change the lives of young boys from underserved communities — simple rugby sessions growing into activity-based camps.",
    },
    {
        year: "Early 2000s",
        title: "The Magic Bus Moment",
        desc: "A group of young students boarded the 'magic bus' — a turning point using structured activities and mentorship to connect young people to education and life skills.",
    },
    {
        year: "2010+",
        title: "Expanding Beyond Sport",
        desc: "Magic Bus launched programmes beyond sport, growing into life skills education, employability, and livelihood support while staying true to its core purpose.",
    },
    {
        year: "Today",
        title: "Scale & Ecosystem",
        desc: "We work across 14+ states, supporting adolescents and youth through an integrated ecosystem approach, creating sustainable pathways from education to economic independence.",
    },
];

function OurStory() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp>
                    <SectionLabel>Our Story</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight max-w-2xl">
                        25 Years of Transforming Young Lives
                    </h2>
                </FadeUp>

                {/* Quote panel */}
                <FadeUp delay={0.1} className="mt-8">
                    <div className="relative rounded-3xl overflow-hidden bg-brand-red text-white p-8 md:p-12">
                        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <Quote className="w-10 h-10 mb-4 opacity-40" />
                        <p className="text-lg md:text-xl leading-relaxed max-w-3xl font-medium opacity-95">
                            Magic Bus India Foundation began in 1999. Our founder noticed the transformative
                            power of sport to change lives of young boys from underserved communities. This
                            realisation started with simple rugby sessions that grew into activity-based camps
                            shaping confidence, discipline, and aspiration.
                        </p>
                        <div className="mt-6 h-px bg-white/20 max-w-xs" />
                        <p className="mt-4 text-sm font-semibold uppercase tracking-widest opacity-60">Magic Bus Story</p>
                    </div>
                </FadeUp>

                {/* Timeline */}
                <div className="mt-14 relative">
                    {/* Vertical line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

                    <div className="space-y-10">
                        {timelineEvents.map((ev, i) => (
                            <FadeUp key={ev.year} delay={0.1 * i}>
                                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                                    {/* Content left */}
                                    <div className={`${i % 2 === 1 ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                                        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3 ${i === timelineEvents.length - 1 ? "bg-brand-yellow text-brand-black" : "bg-[#1A1A1A] text-white"}`}>
                                            {ev.year}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{ev.title}</h3>
                                        <p className="text-sm text-[#1A1A1A]/65 leading-relaxed max-w-sm">
                                            {ev.desc}
                                        </p>
                                    </div>

                                    {/* Centre dot */}
                                    <div className="hidden md:flex absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-brand-red bg-white z-10" />

                                    {/* Empty right column for alternating layout */}
                                    {i % 2 === 0 && <div />}
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   WHY MAGIC BUS
───────────────────────────────────────────────────────────────*/
const impacts = [
    { icon: TrendingUp, color: "text-brand-blue", label: "Reduces school dropout rates" },
    { icon: Briefcase, color: "text-brand-green", label: "Enhances job readiness" },
    { icon: Shield, color: "text-brand-magenta", label: "Enables long-term financial independence" },
];

function WhyMagicBus() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <FadeUp>
                            <SectionLabel icon={Zap}>Why Magic Bus?</SectionLabel>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                Operating Across the Full Journey —{" "}
                                <span className="text-brand-red">Adolescence to Employment</span>
                            </h2>
                            <p className="mt-5 text-[#1A1A1A]/70 leading-relaxed">
                                Magic Bus addresses the root causes of school dropouts and unemployment. Through
                                timely intervention and structured support for young people, we help in:
                            </p>

                            <ul className="mt-6 space-y-4">
                                {impacts.map((im, i) => (
                                    <FadeUp key={im.label} delay={0.1 * i}>
                                        <li className="flex items-center gap-4 rounded-xl border border-gray-100 bg-[#F7F7F5] px-5 py-4">
                                            <im.icon className={`w-5 h-5 ${im.color} shrink-0`} />
                                            <span className="font-medium text-[#1A1A1A]">{im.label}</span>
                                        </li>
                                    </FadeUp>
                                ))}
                            </ul>

                            <FadeUp delay={0.3}>
                                <p className="mt-6 text-[#1A1A1A]/70 leading-relaxed text-sm">
                                    We are open to collaborating with donors and partners to create sustainable
                                    impact, scalable models, and outcomes in line with India's development priorities.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Link
                                        to="/partner"
                                        className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-red/90 transition-colors"
                                    >
                                        Become a Partner <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        to="/donate"
                                        className="inline-flex items-center gap-2 rounded-full border-2 border-brand-yellow bg-brand-yellow/10 px-7 py-3.5 text-sm font-semibold text-brand-black hover:bg-brand-yellow/20 transition-colors"
                                    >
                                        Donate Now
                                    </Link>
                                </div>
                            </FadeUp>
                        </FadeUp>
                    </div>

                    {/* Right image */}
                    <FadeIn delay={0.15}>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                                <img
                                    src="/ngo-images/girl.jpeg"
                                    alt="Young person empowerment"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            {/* Accent card */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-brand-yellow rounded-2xl p-5 shadow-xl max-w-[200px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <div className="text-3xl font-extrabold text-brand-black">25+</div>
                                <div className="text-xs font-semibold text-brand-black/70 mt-1">Years of transforming young lives across India</div>
                            </motion.div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   VISION / MISSION / VALUES
───────────────────────────────────────────────────────────────*/
const values = [
    {
        icon: Heart,
        title: "Passion",
        desc: "We will work with entrepreneurial zeal to achieve organisational objectives.",
        color: "bg-brand-red",
    },
    {
        icon: Shield,
        title: "Integrity",
        desc: "We will be truthful to ourselves and Magic Bus India Foundation.",
        color: "bg-brand-blue",
    },
    {
        icon: Users,
        title: "Respect",
        desc: "We will respect our internal and external stakeholders, diversity of people, ideas and culture.",
        color: "bg-brand-magenta",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        desc: "We will promote viable and implementable innovation at our workplace.",
        color: "bg-brand-green",
    },
    {
        icon: Star,
        title: "Collaboration",
        desc: "We will always be a united team by upholding our core purpose and honouring one another's commitments.",
        color: "bg-brand-yellow",
    },
];

function VisionMissionValues() {
    return (
        <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <FadeUp>
                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 h-full">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="bg-brand-red rounded-xl p-2.5">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">Our Vision</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Breaking the Poverty Cycle</h3>
                            <p className="text-white/65 leading-relaxed">
                                A world where young people break out of poverty to lead fulfilling, rewarding lives
                                and contribute positively to their communities.
                            </p>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <div className="rounded-2xl border border-brand-yellow/30 bg-brand-yellow/5 backdrop-blur-sm p-8 h-full">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="bg-brand-yellow rounded-xl p-2.5">
                                    <Zap className="w-5 h-5 text-brand-black" />
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">Our Mission</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Equipping for Adulthood</h3>
                            <p className="text-white/65 leading-relaxed">
                                To equip vulnerable young people with life skills that enable them to thrive in
                                the transition to adulthood.
                            </p>
                        </div>
                    </FadeUp>
                </div>

                {/* Values */}
                <FadeUp className="text-center mb-12">
                    <SectionLabel>Our Values</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                        The Values That Drive Us Forward
                    </h2>
                    <p className="mt-3 text-white/55 max-w-xl mx-auto text-sm">
                        At Magic Bus, we abide by certain values that guide every decision and action we take.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {values.map((v, i) => (
                        <FadeUp key={v.title} delay={0.07 * i}>
                            <motion.div
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-colors group cursor-default"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className={`${v.color} inline-flex rounded-xl p-3 mb-4 mx-auto`}>
                                    <v.icon className={`w-5 h-5 ${v.title === "Innovation" || v.title === "Collaboration" ? "text-brand-black" : "text-white"}`} />
                                </div>
                                <h4 className="font-bold text-white mb-2">{v.title}</h4>
                                <p className="text-xs text-white/50 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────*/
function FAQItem({ q, a, isOpen, onToggle }) {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={onToggle}
                className="w-full flex items-start gap-4 py-5 text-left hover:bg-gray-50 px-2 rounded-xl transition-colors focus:outline-none"
            >
                <span className={`mt-1 h-2 w-2 shrink-0 rounded-full transition-colors ${isOpen ? "bg-brand-red" : "bg-[#1A1A1A]/20"}`} />
                <span className={`flex-1 font-semibold text-sm md:text-base ${isOpen ? "text-brand-red" : "text-[#1A1A1A]"}`}>{q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 mt-0.5 transition-transform text-[#1A1A1A]/40 ${isOpen ? "rotate-180 text-brand-red" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <p className="pb-5 pl-6 pr-4 text-sm leading-relaxed text-[#1A1A1A]/65">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function FAQSection() {
    const [open, setOpen] = useState(null);
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <FadeUp className="text-center mb-12">
                    <SectionLabel icon={HelpCircle}>FAQs</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mt-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 text-[#1A1A1A]/60 max-w-xl mx-auto">
                        Clear answers about Magic Bus, our programmes, and how we create impact.
                    </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <div className="rounded-2xl border border-gray-100 bg-white px-6 py-2 shadow-sm">
                        {aboutFAQ.map((item, i) => (
                            <FAQItem
                                key={item.q}
                                q={item.q}
                                a={item.a}
                                isOpen={open === i}
                                onToggle={() => setOpen(open === i ? null : i)}
                            />
                        ))}
                    </div>
                </FadeUp>

                <FadeUp delay={0.2} className="mt-8 text-center">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:bg-brand-red/90 transition-colors"
                    >
                        Still have questions? Contact us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </FadeUp>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────────────────────────*/
export default function AboutUs() {
    return (
        <Layout>
            <HeroBanner />
            <ProblemStatement />
            <WhyLifeSkills />
            <WhoWeAre />
            <WhatWeDo />
            <OurStory />
            <WhyMagicBus />
            <VisionMissionValues />
            <FAQSection />
        </Layout>
    );
}
