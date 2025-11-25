import { motion } from "framer-motion";
import { Layers, Users, Code2, Briefcase, Network } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Strong Foundation",
    desc: "Ages 11–18 — foundational development & life skills",
    icon: Layers,
    grad: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    title: "Develop Life Skills",
    desc: "Communication, leadership & personal development",
    icon: Users,
    grad: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Market Skills",
    desc: "Technical & digital skills aligned with market needs",
    icon: Code2,
    grad: "from-emerald-400 to-teal-500",
  },
  {
    id: 4,
    title: "Secure Career",
    desc: "Career counselling & placement opportunities for everyone",
    icon: Briefcase,
    grad: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    title: "Alumni Network",
    desc: "Lifelong support & community of successful graduates",
    icon: Network,
    grad: "from-fuchsia-500 to-violet-500",
  },
];


// Small helper to stagger card fades
const fade = (i) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
  transition: { delay: 0.05 * i, duration: 0.45, ease: "easeOut" },
});

export default function JourneyZigzagAnimated() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.22em] text-xs font-bold text-gray-500 mb-3"
          >
            Our proven model
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Childhood to Livelihood Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            A clear, practical 5-step pathway that prepares young people for
            meaningful careers and lifelong success.
          </motion.p>
        </div>

        {/* 3D Steps Container */}
        <div className="relative flex items-end justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-6 lg:gap-3 mb-16 px-4">
          {steps.map((s, i) => {
            // Calculate stair step positioning - each step rises higher
            const stepBottom = i * 40; // Vertical offset for each step
            const stepWidth = 180;
            const stepDepth = 110 + i * 15; // Depth increases as we go up
            
            return (
              <div 
                key={s.id} 
                className="relative flex flex-col items-center w-full lg:w-auto"
                style={{
                  marginBottom: `${stepBottom}px`
                }}
              >
                {/* 3D Step Block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: i * 0.12,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group cursor-pointer"
                  style={{ 
                    width: `${stepWidth}px`,
                    height: `${stepDepth}px`,
                    transformStyle: "preserve-3d",
                    transform: "rotateX(45deg) rotateZ(45deg)"
                  }}
                >
                  {/* Main Step Face (Top) */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${s.grad} rounded-lg
                                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]
                                transition-all duration-300`}
                    style={{
                      transform: "translateZ(40px)"
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-lg" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <s.icon className="w-12 h-12 text-white drop-shadow-lg mb-2" 
                              style={{ transform: "rotateX(-45deg) rotateZ(-45deg)" }} />
                      <span className="text-4xl font-bold text-white drop-shadow-lg"
                            style={{ transform: "rotateX(-45deg) rotateZ(-45deg)" }}>
                        {String(s.id).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right Side Face */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-b ${s.grad} rounded-r-lg opacity-70`}
                    style={{
                      transform: "rotateY(90deg) translateZ(90px)",
                      width: "80px"
                    }}
                  />
                  
                  {/* Front Face */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t ${s.grad} rounded-b-lg opacity-60`}
                    style={{
                      transform: "rotateX(-90deg) translateZ(90px)",
                      height: "80px",
                      top: "auto"
                    }}
                  />
                  
                  {/* Shadow/Base */}
                  <div 
                    className="absolute inset-0 bg-black/20 blur-2xl rounded-lg"
                    style={{
                      transform: "translateZ(-10px) scale(0.9)"
                    }}
                  />
                </motion.div>

                {/* Arrow connector (except for last step) */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
                    className="hidden lg:block absolute left-full top-1/2 w-8 z-30"
                    style={{ marginTop: `${stepBottom / 2}px` }}
                  >
                    <div className="relative h-0.5 bg-gradient-to-r from-gray-400 to-gray-500">
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 
                                      border-l-[6px] border-l-gray-500 
                                      border-t-[4px] border-t-transparent 
                                      border-b-[4px] border-b-transparent" />
                    </div>
                  </motion.div>
                )}

                {/* Info Card Below */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                  className="mt-8 w-full lg:w-48 bg-white rounded-xl shadow-lg p-5 
                             border border-gray-100 hover:shadow-xl transition-all duration-300
                             hover:border-gray-200"
                >
                  <h3 className="text-base font-bold text-gray-900 mb-2 text-center">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed text-center">
                    {s.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full px-10 py-4
                       text-base font-semibold bg-brand-red
                       text-white shadow-lg hover:shadow-2xl
                       transition-all duration-300 hover:-translate-y-1 active:translate-y-0
                       hover:bg-brand-red/80"
          >
            Know Our Model
          </a>
        </motion.div>
      </div>
    </section>
  );
}