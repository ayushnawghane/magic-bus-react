import React, { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";

const _MOTION = motion;
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <_MOTION.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.62, ease: EASE, delay }}
    >
      {children}
    </_MOTION.div>
  );
}

function SectionTag({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] ${
        dark
          ? "border-white/25 bg-white/10 text-white"
          : "border-brand-black/15 bg-brand-yellow/20 text-brand-black"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-brand-yellow" : "bg-brand-red"}`} />
      {children}
    </span>
  );
}

const beliefs = [
  "Empowering teams maximises impact",
  "Skilling people helps them achieve their best",
  "Driving excellence sparks innovation",
  "Continuous learning fosters collaboration"
];

const initiativeTabs = [
  {
    key: "joiners",
    letter: "A",
    title: "For New Members / Joiners",
    blocks: [
      {
        heading: "Saksham & Parichay - Induction Programmes",
        text:
          "Saksham is a structured HR and functional induction programme for all new joiners. It ensures employees begin their journey with clarity, confidence, and a strong understanding of the organisation and its values."
      },
      {
        heading: "Aarambh MT Induction Programme",
        text:
          "Aarambh is a one-month immersive induction bootcamp for Management Trainees recruited from reputed institutions. The programme enables a smooth Campus-to-Corporate transition through hands-on exposure across functions, departments, and field operations."
      }
    ]
  },
  {
    key: "managerial",
    letter: "B",
    title: "For Managerial Development",
    blocks: [
      {
        heading: "First Time Managers (FTM)",
        text:
          "The First Time Managers programme supports employees transitioning from individual contributors to people managers. It focuses on essential managerial capabilities such as delegation, self-awareness, leadership styles, and effective team management, enabling confident role transitions and impact-driven leadership."
      },
      {
        heading: "Capability Development Programme (CDP 1 & 2) - Mid and Senior Managers",
        text:
          "The Capability Development Programme equips mid-level and seasoned managers with critical leadership and people-management skills. With a focus on stakeholder engagement, communication, team leadership, programme execution, and time management, CDP strengthens decision-making and execution excellence while aligning teams with organisational goals."
      }
    ]
  },
  {
    key: "customised",
    letter: "C",
    title: "Customised Role-Based Programmes",
    blocks: [
      {
        heading: "Customised Role-Based Programmes",
        text:
          "We offer customised, role-based programmes that are niche in nature and specifically designed to upskill key roles. As part of this initiative, in 2025, we conducted Across and Beyond for Cluster Managers and the Dale Carnegie Certification for Trainers."
      }
    ]
  },
  {
    key: "leadership",
    letter: "D",
    title: "Leadership Development Programme",
    blocks: [
      {
        heading: "Mastering Leadership Skills",
        text:
          "This is a customised programme designed to strengthen strategic thinking, leadership effectiveness, and organisational impact among senior leaders."
      }
    ]
  },
  {
    key: "learning-loop",
    letter: "E",
    title: "Learning Loop - Frontline Capability Building",
    blocks: [
      {
        heading: "Learning Loop - Frontline Capability Building",
        text:
          "Learning opportunities for frontline and field-level employees are delivered through a blended approach across three platforms:"
      }
    ],
    platforms: [
      "Classroom Learning: Step Up",
      "Virtual Learning: Open Calendar Programmes",
      "E-Learning Academy: Self-paced digital learning modules"
    ],
    footer:
      "These programmes address identified learning needs and enhance employees' capability to perform efficiently and effectively on the ground."
  }
];

const testimonials = [
  {
    programme: "Open Calendar Programme",
    quote:
      "This training helped me understand that effective communication goes beyond speaking-it involves active listening, the right choice of words, and appropriate body language and tone. I will now focus on communicating clearly and positively while being a better listener.",
    by: "Magic Bus employee"
  },
  {
    programme: "Capability Development Programme",
    quote:
      "This programme enhanced my understanding of stakeholder dynamics and equipped me with practical approaches to engage, influence, and manage stakeholders effectively. It also helped refine my communication skills, making my interactions more purposeful and impactful.",
    by: "Magic Bus employee"
  }
];

function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#111111] pt-28 pb-20 sm:pt-32">
      <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-brand-red/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-yellow/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 lg:items-end lg:px-12">
        <FadeUp>
          <SectionTag dark>Learning & Development</SectionTag>
          <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-6xl">
            Learning & Development at Magic Bus
          </h1>
          <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-relaxed text-white/85 md:text-3xl">
            Helping our people grow with continuous learning
          </h2>
        </FadeUp>
      </div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#f8f8f6] p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-yellow/30 blur-2xl" />
          <SectionTag>Introduction</SectionTag>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="text-3xl font-black text-[#1A1A1A] md:text-4xl">Learning & Development at Magic Bus</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                At Magic Bus, our teams engage in continuous learning, promoting a culture of continuous improvement across the organisation. With the spirit of innovation, we are committed to transforming young lives through impactful training and development initiatives.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">L&D Promise</p>
              <p className="mt-3 text-base leading-relaxed text-[#1A1A1A]">
                Continuous learning, practical capability-building, and measurable impact for every team.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function BeliefsSection() {
  return (
    <section className="bg-[#f8f8f6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-10">
          <SectionTag>Our Beliefs</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#1A1A1A] md:text-4xl">Our Beliefs</h2>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-[18px] top-0 hidden h-full w-[2px] bg-gradient-to-b from-brand-red/50 via-brand-blue/35 to-brand-yellow/40 md:block" />
          <div className="space-y-5">
            {beliefs.map((belief, index) => (
              <FadeUp key={belief} delay={index * 0.06}>
                <_MOTION.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative rounded-2xl border border-black/5 bg-white p-5 shadow-sm md:ml-10 ${
                    index % 2 === 0 ? "md:mr-14" : "md:ml-20"
                  }`}
                >
                  <span className="absolute -left-10 top-5 hidden h-5 w-5 rounded-full border-4 border-white bg-brand-red shadow md:block" />
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">Belief {index + 1}</p>
                  <p className="mt-2 text-lg font-medium leading-relaxed text-[#1A1A1A]">{belief}</p>
                </_MOTION.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InitiativesSection() {
  const [activeTab, setActiveTab] = useState(initiativeTabs[0].key);
  const active = useMemo(
    () => initiativeTabs.find((item) => item.key === activeTab) || initiativeTabs[0],
    [activeTab]
  );

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-8 max-w-4xl">
          <SectionTag>L&D Initiatives</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#1A1A1A] md:text-4xl">
            Learning & Development Initiatives at Magic Bus
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Our Learning & Development framework is designed to support employees at every stage of their journey from onboarding to leadership by building capability, confidence, and impact.
          </p>
        </FadeUp>

        <div className="grid gap-5 lg:grid-cols-[330px_1fr]">
          <FadeUp delay={0.08} className="h-fit rounded-3xl border border-black/5 bg-[#f8f8f6] p-4 lg:sticky lg:top-24">
            <div className="space-y-2">
              {initiativeTabs.map((tab) => {
                const isActive = tab.key === activeTab;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-transparent bg-[#1A1A1A] text-white shadow-lg"
                        : "border-black/10 bg-white text-[#1A1A1A] hover:border-black/25"
                    }`}
                  >
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-brand-red/10 text-brand-red"
                      }`}
                    >
                      {tab.letter}
                    </span>
                    <span className="text-sm font-semibold leading-snug">{tab.title}</span>
                  </button>
                );
              })}
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <_MOTION.div
              key={active.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="rounded-3xl border border-black/5 bg-[#f8f8f6] p-4 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {active.letter}
                </span>
                <h3 className="text-2xl font-black text-[#1A1A1A]">{active.title}</h3>
              </div>

              <div className="space-y-4">
                {active.blocks.map((block) => (
                  <_MOTION.div
                    key={block.heading}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-black/5 bg-white p-5 sm:p-6"
                  >
                    <h4 className="text-xl font-bold text-[#1A1A1A]">{block.heading}</h4>
                    <p className="mt-3 leading-relaxed text-gray-700">{block.text}</p>
                  </_MOTION.div>
                ))}

                {active.platforms && (
                  <div className="rounded-2xl border border-black/5 bg-white p-5 sm:p-6">
                    <h5 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">Three Platforms</h5>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {active.platforms.map((item) => (
                        <div key={item} className="rounded-xl border border-black/10 bg-[#f8f8f6] p-4">
                          <p className="text-sm font-semibold leading-relaxed text-[#1A1A1A]">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 leading-relaxed text-gray-700">{active.footer}</p>
                  </div>
                )}
              </div>
            </_MOTION.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#f8f8f6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-8">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#1A1A1A] md:text-4xl">Employee Testimonials</h2>
        </FadeUp>

        <FadeUp delay={0.1} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
              {testimonials[active].programme}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[#1A1A1A] transition hover:bg-black hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[#1A1A1A] transition hover:bg-black hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <_MOTION.blockquote
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xl leading-relaxed text-gray-800 sm:text-2xl">"{testimonials[active].quote}"</p>
            <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]">
              {testimonials[active].by}
            </footer>
          </_MOTION.blockquote>

          <div className="mt-6 flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.programme}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all ${
                  index === active ? "w-10 bg-brand-red" : "w-4 bg-black/20 hover:bg-black/35"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function TrainingGlimpsesSection() {
  const images = [
    { id: 1, src: "/lnd/1.jpeg", className: "sm:col-span-2 lg:col-span-2 lg:row-span-2" },
    { id: 2, src: "/lnd/2.jpg", className: "" },
    { id: 3, src: "/lnd/3.jpeg", className: "" },
    { id: 4, src: "/lnd/4.jpg", className: "lg:row-span-2" },
    { id: 5, src: "/lnd/5.jpg", className: "" },
    { id: 6, src: "/lnd/5.jpg", className: "" }
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-8">
          <SectionTag>Training Glimpses</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#1A1A1A] md:text-4xl">Catch Glimpses of our Trainings</h2>
        </FadeUp>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {images.map((img, index) => (
            <FadeUp key={img.id} delay={index * 0.05} className={`${img.className} ${index === 0 ? "sm:row-span-2" : ""}`}>
              <_MOTION.div
                whileHover={{ scale: 1.02 }}
                className="group relative h-full w-full overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={img.src}
                  alt={`Training glimpse ${img.id}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-flex translate-y-4 items-center gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                    View
                  </span>
                </div>
              </_MOTION.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-yellow/25 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur sm:p-10">
          <SectionTag dark>Contact Details</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">Get in Touch with our Team</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="space-y-2 text-white/90">
              <p className="text-lg font-semibold">Rukhsana Shaikh: Head, Learning & Development</p>
              <p className="text-lg">
                Email ID:{" "}
                <a href="mailto:rukhsana.shaikh@magicbusindia.org" className="font-semibold text-brand-yellow hover:underline">
                  rukhsana.shaikh@magicbusindia.org
                </a>
              </p>
            </div>
            <a
              href="mailto:rukhsana.shaikh@magicbusindia.org"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-5 py-3 text-sm font-bold text-[#1A1A1A] transition hover:bg-brand-yellow/90"
            >
              Write to Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default function LearningDevelopment() {
  return (
    <Layout>
      <HeroBanner />
      <IntroductionSection />
      <BeliefsSection />
      <InitiativesSection />
      <TestimonialsSection />
      <TrainingGlimpsesSection />
      <ContactSection />
    </Layout>
  );
}
