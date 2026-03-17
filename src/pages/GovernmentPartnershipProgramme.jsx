import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import Layout from "../components/Layout";

const _MOTION = motion;
const EASE = [0.16, 1, 0.3, 1];

const outreachStats = [
  { label: "Adolescents Outreach", value: "29,56,366" },
  { label: "Schools", value: "27,737" },
  { label: "Master Trainers Trained", value: "1,474" },
  { label: "Teachers Trained", value: "37,389" },
  { label: "Girl Participants", value: "52%" },
  { label: "Government Partnerships", value: "11" },
  { label: "Aspirational Blocks", value: "141" }
];

const governmentPartners = [
  "/government partners/Govt Andhra Pradesh-01.png",
  "/government partners/Govt Assam-01.png",
  "/government partners/Govt Haryana-01.png",
  "/government partners/Govt Mizoram-01.png",
  "/government partners/Govt of Odisha.png",
  "/government partners/Govt Rajasthan-01.png",
  "/government partners/himachal.png",
  "/government partners/meghalaya.png",
  "/government partners/MP Govt Logo.jpg",
  "/government partners/chhatisgadh.png"
];

const foundationPartners = [
  "/foundation partners/azim.jpg",
  "/foundation partners/Echidnag.jpg",
  "/foundation partners/kadoorie.jpg",
  "/foundation partners/michael.jpg"
];

const faqs = [
  {
    q: "Does the programme cover tribal areas?",
    a: "Yes, the programme engages closely with underserved adolescents in tribal areas, equipping them with life skills education and FLN support."
  },
  {
    q: "Is the programme active across India?",
    a: "Yes, Magic Bus has active Memorandums of Understanding (MOUs) with 11 states, and a Statement of Interest with NITI Aayog."
  }
];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <_MOTION.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </_MOTION.div>
  );
}

function SectionTag({ children, dark = false, showDot = true }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
        dark ? "border-white/30 bg-white/10 text-white" : "border-black/10 bg-brand-yellow/20 text-[#0F172A]"
      }`}
    >
      {showDot && <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-brand-yellow" : "bg-brand-red"}`} />}
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#10172A] pb-20 pt-32 sm:pt-36">
      <div className="absolute inset-0 opacity-35">
        <img src="/ngo-images/6.jpeg" alt="Government partnership programme" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(33,189,234,0.28),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(225,34,40,0.3),transparent_42%),linear-gradient(100deg,rgba(16,23,42,0.98),rgba(16,23,42,0.76),rgba(16,23,42,0.92))]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag dark>Government Partnership Programme</SectionTag>
          <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">Government Partnership Programme</h1>
          <h2 className="mt-4 text-2xl font-semibold text-white/90 md:text-3xl">Aligning with national priorities</h2>
        </FadeUp>
      </div>
    </section>
  );
}

function NeedSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
          <SectionTag>Why the need of Government Partnership for Adolescent Life Skills Education?</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">The Need for Adolescent Support</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            As 253 million adolescents in India cross the threshold from childhood into livelihood, only one-third of
            them will have a higher secondary qualification. Of these, only 2 in 5 will have the soft skills necessary
            for employment. Today, over 50% of employers list life skills like problem-solving, collaboration, and
            communication among the top valued job skills.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            By supporting the holistic development of an adolescent, we enable them to continue their education, attend
            school regularly, learn better, develop aspirations, and set career goals to build better futures.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
        <FadeUp>
          <SectionTag showDot={false}>What Is The Programme?</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Government Partnership Programme</h2>
          <p className="mt-5 leading-relaxed text-slate-700">
            Equipping government school teachers to impart life skills education helps ensure holistic development of
            adolescents. To advance this mission, Magic Bus collaborates with institutions and agencies through the
            Government Partnership Programme.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            The programme integrates life skills education into content, training, monitoring and assessment, while
            strengthening system capacity across teachers, school leaders, monitoring officers, and block and district
            administrators.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Our aim is to equip adolescents with life skills that build resilience, self-efficacy and agency.
          </p>
        </FadeUp>
        <FadeUp delay={0.08} className="overflow-hidden rounded-3xl border border-black/10">
          <img src="/ngo-images/5.jpeg" alt="Teacher training and life-skills integration" className="h-full w-full object-cover" />
        </FadeUp>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const cards = [
    "Teachers deliver life skills education in schools for adolescents from grades 6 to 10.",
    "Interventions activate School Management Committees, parent outreach and community engagement.",
    "Peer support structures are established to sustain adolescent participation and confidence.",
    "System-level officials and cluster heads are oriented for collective planning and monitoring."
  ];

  return (
    <section className="bg-[#0F172A] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag dark>What We Do</SectionTag>
          <h2 className="mt-5 text-3xl font-black md:text-4xl">What We Do</h2>
        </FadeUp>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cards.map((text, idx) => (
            <FadeUp key={text} delay={idx * 0.05}>
              <_MOTION.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="leading-relaxed text-white/90">{text}</p>
              </_MOTION.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImplementationModel() {
  const [zoom, setZoom] = useState(false);
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>Implementation Model</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Programme Implementation Model</h2>
          <p className="mt-3 text-sm text-slate-600">Source: magicbus.org/government-partnership-programme.php</p>
          <button
            onClick={() => setZoom(true)}
            className="mt-6 w-full overflow-hidden rounded-3xl border border-black/10 bg-[#F8FAFC]"
            aria-label="Open implementation model"
          >
            <img src="/government partnership.png" alt="Government partnership programme implementation model" className="w-full object-contain" />
          </button>
        </FadeUp>
      </div>
      {zoom && (
        <button
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-5"
          onClick={() => setZoom(false)}
          aria-label="Close implementation model"
        >
          <img src="/government partnership.png" alt="Implementation model enlarged" className="max-h-[90vh] max-w-[90vw] rounded-xl bg-white p-2" />
        </button>
      )}
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
          <SectionTag>How We Work</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Working with the Government</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Through the Government Partnership Programme, teachers are trained to integrate life skills into classrooms
            and playgrounds, equipping adolescents to transition confidently from school to work.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            With Magic Bus support, state education bodies co-create curricula, design training frameworks, and set up
            monitoring systems that drive and sustain lasting change.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function OutreachImpact() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>Outreach and Impact 2024-25</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Programme Outreach and Impact in 2024-25</h2>
          <p className="mt-3 text-sm text-slate-600">Source: magicbus.org/outreach.php</p>
        </FadeUp>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outreachStats.map((item, idx) => (
            <FadeUp key={item.label} delay={idx * 0.04}>
              <div className="h-full rounded-2xl border border-black/10 bg-[#F8FAFC] p-5">
                <p className="text-3xl font-black text-[#0F172A]">{item.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{item.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="bg-[#0F172A] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag dark>Our Partners</SectionTag>
          <h2 className="mt-5 text-3xl font-black md:text-4xl">Our Partners for Government Partnership Programme</h2>
          <p className="mt-3 text-sm text-white/75">Source: magicbus.org/government-partnership-programme.php</p>
        </FadeUp>

        <FadeUp className="mt-8">
          <h3 className="text-xl font-bold">Government Partners</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {governmentPartners.map((logo, idx) => (
              <div key={logo} className="grid h-32 place-items-center rounded-xl border border-white/15 bg-white px-4">
                <img src={logo} alt={`Government partner ${idx + 1}`} className="max-h-20 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-10">
          <h3 className="text-xl font-bold">Foundation Partners</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {foundationPartners.map((logo, idx) => (
              <div key={logo} className="grid h-32 place-items-center rounded-xl border border-white/15 bg-white px-4">
                <img src={logo} alt={`Foundation partner ${idx + 1}`} className="max-h-20 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function SuccessStory() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>Success Story</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Spreading Impact</h2>
          <h3 className="mt-3 text-xl font-bold text-slate-800">Government of Odisha and Magic Bus India Foundation&apos;s Kridangan Framework</h3>
          <p className="mt-3 text-sm text-slate-600">Source: Annual report 2024-25</p>
        </FadeUp>
        <FadeUp delay={0.08} className="mt-6 overflow-hidden rounded-3xl border border-black/10 bg-[#F8FAFC] p-4 sm:p-5">
          <img
            src="/Government of Odisha and Magic Bus India Foundation’s Kridangan Framework.png"
            alt="Government of Odisha and Magic Bus India Foundation Kridangan Framework"
            className="w-full rounded-2xl object-cover"
          />
        </FadeUp>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <FadeUp className="text-center">
          <SectionTag>FAQs</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Frequently Asked Questions</h2>
        </FadeUp>
        <div className="mt-8 space-y-3">
          {faqs.map((item, idx) => (
            <FadeUp key={item.q} delay={idx * 0.04}>
              <div className="rounded-2xl border border-black/10 bg-white p-2">
                <button
                  onClick={() => setOpen((prev) => (prev === idx ? -1 : idx))}
                  className="flex w-full items-start justify-between gap-3 rounded-xl px-4 py-4 text-left"
                  aria-expanded={open === idx}
                >
                  <span className="font-semibold text-slate-900">{item.q}</span>
                  <ChevronDown className={`mt-1 h-4 w-4 text-slate-500 transition ${open === idx ? "rotate-180" : ""}`} />
                </button>
                {open === idx && <p className="px-4 pb-4 leading-relaxed text-slate-700">{item.a}</p>}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-white pb-20 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2">
          <FadeUp className="rounded-3xl border border-black/10 bg-[#0F172A] p-6 text-white sm:p-8">
            <SectionTag dark>For CSR Support</SectionTag>
            <h2 className="mt-5 text-3xl font-black">For CSR Support, Contact Us</h2>
            <p className="mt-5 text-lg font-semibold">Sandhya R Krishnan: Director - Operations, Adolescent Programme</p>
            <a
              href="mailto:sandhya.krishnan@magicbusindia.org"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-yellow hover:underline"
            >
              <Mail className="h-4 w-4" />
              sandhya.krishnan@magicbusindia.org
            </a>
          </FadeUp>
          <FadeUp delay={0.08} className="rounded-3xl border border-black/10 bg-[#F8FAFC] p-6 sm:p-8">
            <SectionTag>Other Enquiries</SectionTag>
            <h2 className="mt-5 text-3xl font-black text-[#0F172A]">For Queries, Let&apos;s Connect</h2>
            <p className="mt-5 text-slate-700">For other inquiries related to Government Partnership Programme</p>
            <a
              href="mailto:govtpartner@magicbusindia.org"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-red hover:underline"
            >
              <Mail className="h-4 w-4" />
              govtpartner@magicbusindia.org
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export default function GovernmentPartnershipProgramme() {
  return (
    <Layout>
      <Hero />
      <NeedSection />
      <AboutSection />
      <WhatWeDo />
      <ImplementationModel />
      <HowWeWork />
      <OutreachImpact />
      <Partners />
      <SuccessStory />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
}
