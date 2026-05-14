import React from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpSm,
  scaleReveal,
  scalePop,
  slideLeft,
  slideRight,
  staggerStd,
  staggerFast,
  VIEWPORT_ONCE,
} from "../../hooks/useScrollAnimations";

export default function AIDigitalSection() {
  const courses = [
    {
      title: "AWS Cloud",
      sub: "Cloud Foundations & Deployment",
      logo: "/logos/aws.png",
    },
    {
      title: "ChatGPT / OpenAI",
      sub: "AI Prompting & Automation",
      logo: "/logos/gptwhite.png",
    },
    {
      title: "Python Programming",
      sub: "Backend & ML Foundations",
      logo: "/logos/python.png",
    },
    {
      title: "Figma UI/UX",
      sub: "Design Systems & Prototypes",
      logo: "/logos/figma.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Section */}
          <motion.div
            variants={staggerStd}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <motion.h2
              variants={slideLeft}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              First NGO to Launch{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                AI & Digital
              </span>{" "}
              Programmes
            </motion.h2>

            <motion.p
              variants={fadeUpSm}
              className="text-gray-300 text-lg mb-8 max-w-xl truncate"
            >
              Pioneering technology-driven youth empowerment through AI & digital skilling.
            </motion.p>

            {/* Course Cards Grid */}
            <motion.div
              variants={staggerFast}
              className="grid grid-cols-2 gap-6"
            >
              {courses.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpSm}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col items-start gap-3 cursor-default"
                >
                  {/* Logo with micro-pop */}
                  <motion.img
                    src={c.logo}
                    alt={c.title}
                    className="h-10 w-auto object-contain"
                    variants={scalePop}
                  />
                  <div className="text-base font-semibold text-white">
                    {c.title}
                  </div>
                  <div className="text-xs text-gray-300">{c.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual — image settles into frame (Clearstreet style) */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="relative group"
          >
            {/* Parallax glow blob */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl"
              animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              variants={scaleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
            >
              <img
                src="/ngo-images/ai2.jpg"
                alt="AI Dashboard"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
