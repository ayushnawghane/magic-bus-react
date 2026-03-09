// OutreachImpact.jsx
import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Icon Component (Replace SVG content when you have the specific icons) ---
const StatIcon = () => (
  <div className="mb-2">
    {/* You can replace this svg with your specific icon */}
    <img 
      width="40" 
      height="40" 
      src="/ngo-images/training.png" 
      alt="Children playing and learning" 
    >
    </img>
  </div>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OutreachImpact() {
  // Data for the 6 statistics grid
  const statsData = [
    { value: "37,389", label: "Teachers Trained" },
    { value: "30,069", label: "Schools" },
    { value: "52%", label: "Girl Participants" },
    { value: "11", label: "Government Partnerships" },
    { value: "141", label: "Aspirational Blocks" },
    { value: "343", label: "Community Learning Centres" },
  ];

  // Data for the 3 Impact columns
  const impactData = [
    {
      color: "#FF9999", // Pinkish bar
      text: (
        <>
          <span className="font-extrabold text-xl">27%</span> increase in attendance and school regularity
        </>
      ),
    },
    {
      color: "#FFB899", // Peach bar
      text: (
        <>
          <span className="font-extrabold text-xl">34%</span> adolescents aspire to pursue graduation and higher studies
        </>
      ),
    },
    {
      color: "#FFD54F", // Yellow bar
      text: (
        <>
          <span className="font-extrabold text-xl">46%</span> improvement in perceived ability to withstand and recover from difficulties
        </>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold text-slate-900 mb-16"
        >
          Our Outreach & Impact
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* --- TOP SECTION: OUTREACH --- */}
          <div>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">
              Outreach
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Big Number & Description */}
              <motion.div variants={itemVariants}>
                <div className="text-[#FFCC04] font-extrabold text-6xl md:text-8xl leading-tight mb-6">
                  40,00,000+
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Magic Bus India Foundation follows a dual Direct and Indirect 
                  implementation model to promote adolescent development across India. 
                  This approach combines intensive local interventions with system-level 
                  integration to achieve scalable and sustainable impact through life skills, 
                  foundational learning, and employability education.
                </p>
              </motion.div>

              {/* Right Column: 6 Icons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8">
                {statsData.map((stat, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex flex-col items-start">
                    {/* Icon Placeholder */}
                    <StatIcon />
                    
                    {/* Stat Number */}
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {stat.value}
                    </div>
                    
                    {/* Stat Label */}
                    <div className="text-sm md:text-base text-gray-600 font-medium leading-tight">
                      {stat.label.includes("Government") ? (
                         <>Government<br/>Partnerships</>
                      ) : (
                        stat.label
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* --- MIDDLE SECTION: IMPACT --- */}
          <div>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8">
              Impact
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {impactData.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex flex-col">
                  {/* Colored Bar */}
                  <div 
                    className="h-3 w-full mb-4" 
                    style={{ backgroundColor: item.color }} 
                  />
                  {/* Text */}
                  <p className="text-slate-800 text-lg font-medium leading-snug">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      {/* --- BOTTOM IMAGE SECTION --- */}
      {/* Space for the full-width image at the bottom */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full mt-20"
      >
        {/* Replace src below with the actual bottom image URL you want to add */}
        <img 
          src="/ngo-images/outreach_bg.png" 
          alt="Children playing and learning" 
          className="w-full h-auto object-cover min-h-[300px] md:min-h-[400px]"
        />
      </motion.div>
    </section>
  );
}