import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    category: "School Outcomes",
    title: "Academic Success:",
    description:
      "School regularity, grade transition, foundational literacy and numeracy",
    age: "12 to 18 Yrs.",
    image: "/ngo-images/approach2.png",
  },
  {
    id: 2,
    category: "Life Outcomes",
    title: "Life Skills Enabled:",
    description:
      "Agency (especially for girls), resilience, problem solving, gender equality, and career aspirations",
    age: "12 to 18 Yrs.",
    image: "/ngo-images/approach2.png",
  },
  {
    id: 3,
    category: "Job Attainment",
    title: "Improved Employability:",
    description:
      "Career awareness, digital/financial literacy, placement and retention",
    age: "18 to 25 Yrs.",
    image: "/ngo-images/approach2.png",
  },
  {
    id: 4,
    category: "Workplace Performance",
    title: "Workplace Success:",
    description:
      "Increased job satisfaction and performance, and sustainable income",
    age: "18 to 25 Yrs.",
    image: "/ngo-images/approach2.png",
  },
  {
    id: 5,
    category: "Peri-Urban and Rural Women Empowerment",
    title: "Entrepreneurial Success:",
    description:
      "Improved business acumen, launch of sustainable enterprises",
    age: "+25 Yrs.",
    image: "/ngo-images/approach2.png",
  },
];

// UPDATED: Increased SVG size classes here
const YellowChevron = () => (
  <svg
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // Changed from w-8 h-12 to w-12 h-20 for larger size
    className="w-12 h-20 text-yellow-400 drop-shadow-sm"
    preserveAspectRatio="none"
  >
    <path
      d="M0 0L24 24L0 48V0Z"
      fill="currentColor"
    />
  </svg>
);

export default function JourneyRedesignExact() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Childhood to Livelihood Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 lg:gap-0 bg-white relative">
          {steps.map((step, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={step.id}
                style={{ zIndex: steps.length - index }}
                className="relative flex flex-col h-full group bg-white shadow-[25px_0_40px_-15px_rgba(0,0,0,0.15)]"
              >
                {/* UPDATED POSITION: 
                   -left-6 (Adjusted to accommodate the wider arrow)
                   top-[35%] (Vertically centered relative to text block area)
                */}
                {!isFirst && (
                  <div className="hidden lg:block absolute -left-6 top-[35%] z-20 pointer-events-none">
                    <YellowChevron />
                  </div>
                )}

                <div className="p-8 pb-36 flex flex-col h-full relative z-10 font-sans">
                  <h3 className="text-xl font-bold text-red-600 mb-3 leading-tight min-h-[3rem]">
                    {step.category}
                  </h3>

                  <div className="mb-4 flex-grow">
                    <p className="text-slate-700 text-[15px] leading-relaxed">
                      <span className="font-bold block mb-2 text-slate-900 text-base">
                        {step.title}
                      </span>
                      {step.description}
                    </p>
                  </div>

                  <div className="w-full border-t-2 border-yellow-400 mb-4" />

                  <p className="text-red-600 font-extrabold text-md">
                    {step.age}
                  </p>
                </div>

                <div className="absolute bottom-2 right-0 h-[260px] w-[70%] z-10 pointer-events-none">
                  <motion.img
                    initial={{ opacity: 0, x: 30, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    src={step.image}
                    alt={step.category}
                    className="h-full w-full object-contain object-bottom-right translate-x-4 translate-y-2 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#E1251B] text-white font-bold text-lg px-12 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
          >
            Know more
          </motion.button>
        </div>
      </div>
    </section>
  );
}