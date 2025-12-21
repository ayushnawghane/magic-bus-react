import React from "react";
import { motion } from "framer-motion";
import { Layers, Users, Code2, Briefcase, Network } from "lucide-react";

// (Data array 'steps' remains exactly the same)
const steps = [
  {
    id: 1,
    title: "Strong Foundation",
    subTitle: "SCHOOL OUTCOMES",
    bullets: [
      "School regularity",
      "Grade transition",
      "Foundational literacy and numeracy",
    ],
    age: "12-18 Yrs",
    icon: Layers,
    colorTheme: { bg: "#FBBF24", ring: "#FEF3C7" },
    cardImage: "/ngo-images/test1.png", 
  },
  {
    id: 2,
    title: "Develop Life Skills",
    subTitle: "LIFE OUTCOMES",
    bullets: [
      "Agency (especially for girls)",
      "Resilience & problem solving",
      "Gender equality & aspirations",
    ],
    age: "12-18 Yrs",
    icon: Users,
    colorTheme: { bg: "#3B82F6", ring: "#DBEAFE" },
    cardImage: "/ngo-images/test2.png",
  },
  {
    id: 3,
    title: "Market Skills",
    subTitle: "COLLEGE TO CAREER TRANSITION",
    bullets: [
      "Livelihood Support",
      "Career awareness & work readiness",
      "Future skills (AI, Green skills)",
    ],
    age: "16-18 Yrs",
    icon: Code2,
    colorTheme: { bg: "#10B981", ring: "#D1FAE5" },
    cardImage: "/ngo-images/test1.png",
  },
  {
    id: 4,
    title: "Secure Career",
    subTitle: "WORKPLACE SUCCESS & RETENTION",
    bullets: [
      "Workplace Success",
      "Workplace Retention",
      "Sustainable income",
    ],
    age: "18-25 Yrs",
    icon: Briefcase,
    colorTheme: { bg: "#F97316", ring: "#FFEDD5" },
    cardImage: "/ngo-images/test1.png",
  },
  {
    id: 5,
    title: "Alumni Network",
    subTitle: "PERI-URBAN & RURAL WOMEN EMPOWERMENT",
    bullets: [
      "Entrepreneurial Success",
      "Business acumen",
      "Launch of sustainable enterprises",
    ],
    age: "25 Yrs & above",
    icon: Network,
    colorTheme: { bg: "#8B5CF6", ring: "#EDE9FE" },
    cardImage: "/ngo-images/test2.png",
  },
];

const fadeUp = (i) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
});

export default function JourneyRedesignExact() {
  const baseCardOffset = 40; 
  const slopeStep = 18;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-40">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Childhood to Livelihood Journey
          </h2>
        </div>

        <div className="relative">
          {/* Wavy Line */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[150px] pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 160 1200 150"
              fill="none"
              preserveAspectRatio="none"
              overflow="visible"
            >
              <motion.path
                d="M0,100 C200,110 350,70 600,60 C850,50 1000,20 1200,20"
                stroke="#8B5CF6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="8 8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10 pb-24 lg:pb-32">
            {steps.map((s, i) => {
              const marginTopStyle = { marginTop: `-${baseCardOffset + i * slopeStep}px` };
              const connectorHeightStyle = { height: `${30 + (steps.length - 1 - i) * slopeStep * 0.8}px` };

              return (
                <div key={s.id} className="flex flex-col items-center relative transition-all" style={marginTopStyle}>
                  {/* Icon Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    style={{ backgroundColor: s.colorTheme.bg, boxShadow: `0 0 0 8px ${s.colorTheme.ring}` }}
                    className="relative w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg z-20"
                  >
                    <s.icon className="w-9 h-9" />
                  </motion.div>

                  {/* Connector */}
                  <div className="w-px border-l-2 border-dotted border-slate-300 my-2 z-0" style={connectorHeightStyle}></div>

                  {/* CARD */}
                  <motion.div
                    {...fadeUp(i)}
                    className="w-full h-full bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col overflow-hidden z-10 hover:shadow-xl transition-shadow relative"
                  >
                    {/* Content Container */}
                    <div className="p-6 flex-grow relative z-10">
                      <h3 className="text-lg font-bold text-brand-red leading-tight mb-2">
                        {s.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        {s.subTitle}
                      </p>
                      <ul className="space-y-2.5">
                        {s.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start text-[13px] text-slate-600 font-medium leading-snug">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Age Bar */}
                    <div className="px-6 pb-5 pt-2 relative z-10">
                      <p className="text-sm font-bold text-blue-600">
                        {s.age}
                      </p>
                    </div>

                    {/* --- UPDATED: Image Overlay for Card --- */}
                    {/* Increased size from w-28 to w-44 and adjusted translation */}
                    <div className="absolute bottom-0 right-0 w-44 h-44 pointer-events-none z-0">
                       <img 
                          src={s.cardImage} 
                          alt="" 
                          className="w-full h-full object-contain translate-x-6 translate-y-6"
                          onError={(e) => e.target.style.display = 'none'}
                       />
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center relative z-40 -mt-6 lg:-mt-16">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#D9232D] text-white font-bold text-base md:text-lg px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Know Our Model
          </motion.button>
        </div>
      </div>
    </section>
  );
}