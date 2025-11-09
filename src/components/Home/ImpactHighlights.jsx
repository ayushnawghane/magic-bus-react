import { motion } from "framer-motion";

const items = [
  { 
    big: "First", 
    small: "NGO in AI & Digital",
    color: "red",
    icon: "🏆",
    rotation: 2,
  },
  { 
    big: "C2L", 
    small: '"Childhood to Livelihood"',
    color: "yellow",
    icon: "🌱",
    rotation: -1,
  },
  { 
    big: "FutureX", 
    small: "Internal Transformation",
    color: "blue",
    icon: "🚀",
    rotation: 1,
  },
  { 
    big: "FPD", 
    small: "Organisational Excellence",
    color: "green",
    icon: "⭐",
    rotation: -2,
  },
];

const colorSchemes = {
  red: {
    bg: "from-red-100 to-pink-100",
    border: "border-red-400",
    shadow: "shadow-red-200/60",
    text: "text-red-600",
    accent: "bg-red-400",
    dot: "bg-red-500",
  },
  yellow: {
    bg: "from-yellow-100 to-orange-100",
    border: "border-yellow-400",
    shadow: "shadow-yellow-200/60",
    text: "text-yellow-600",
    accent: "bg-yellow-400",
    dot: "bg-yellow-500",
  },
  blue: {
    bg: "from-blue-100 to-cyan-100",
    border: "border-blue-400",
    shadow: "shadow-blue-200/60",
    text: "text-blue-600",
    accent: "bg-blue-400",
    dot: "bg-blue-500",
  },
  green: {
    bg: "from-green-100 to-teal-100",
    border: "border-green-400",
    shadow: "shadow-green-200/60",
    text: "text-green-600",
    accent: "bg-green-400",
    dot: "bg-green-500",
  },
};

export default function ImpactHighlights() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Playful background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating shapes */}
        <div className="absolute left-[5%] top-[10%] h-24 w-24 rounded-full bg-yellow-300/20 blur-2xl"></div>
        <div className="absolute right-[8%] top-[15%] h-32 w-32 rotate-45 bg-pink-300/20 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[12%] h-28 w-28 rounded-full bg-blue-300/20 blur-2xl"></div>
        <div className="absolute bottom-[15%] right-[10%] h-20 w-20 rotate-12 bg-green-300/20 blur-xl"></div>

        {/* Hand-drawn elements */}
        <svg className="absolute left-[3%] top-[5%] h-12 w-12 rotate-12 text-red-300/30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute right-[4%] top-[8%] h-10 w-10 -rotate-6 text-blue-300/30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        
        {/* Crayon strokes */}
        <svg className="absolute bottom-[8%] left-[2%] h-16 w-16 text-orange-300/40" viewBox="0 0 100 100">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round"/>
        </svg>
        <svg className="absolute bottom-[12%] right-[3%] h-14 w-14 text-purple-300/40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="5" fill="none" strokeDasharray="10,5"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-block">
            <div className="relative">
              <div className="rotate-1 rounded-2xl border-3 border-dashed border-purple-400 bg-white px-6 py-3 shadow-lg">
                <span className="text-sm font-black uppercase tracking-wider text-purple-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  💪 What Makes Us Special 💪
                </span>
              </div>
              {/* Corner decorations */}
              <div className="absolute -right-2 -top-2 h-4 w-4 rotate-45 bg-yellow-400"></div>
              <div className="absolute -bottom-2 -left-2 h-4 w-4 rotate-45 bg-pink-400"></div>
            </div>
          </div>

          {/* Heading with playful underline */}
          <h2 
            className="mb-4 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl"
            style={{ 
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '3px 3px 0px rgba(251, 146, 60, 0.2)'
            }}
          >
            Our Unique <span className="relative inline-block text-orange-600">
              Impact
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M5,5 Q50,2 100,4 T195,5" stroke="#fb923c" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-2 w-2 rotate-45 bg-red-400"></div>
            <div className="h-2 w-2 rotate-45 bg-yellow-400"></div>
            <div className="h-2 w-2 rotate-45 bg-blue-400"></div>
            <div className="h-2 w-2 rotate-45 bg-green-400"></div>
          </div>
        </motion.div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const scheme = colorSchemes[item.color];
            
            return (
              <motion.div
                key={item.big}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut", 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -12, 
                  rotate: item.rotation * 1.5,
                  scale: 1.05
                }}
                className="group relative cursor-pointer"
              >
                {/* Card Container */}
                <div 
                  className={`relative overflow-hidden rounded-3xl border-4 border-white bg-gradient-to-br ${scheme.bg} p-8 shadow-xl ${scheme.shadow} transition-all duration-300 group-hover:shadow-2xl`}
                  style={{ 
                    transform: `rotate(${item.rotation}deg)`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Paper texture */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  ></div>

                  {/* Icon Badge */}
                  <motion.div 
                    className={`absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white ${scheme.accent} text-3xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Corner decoration */}
                  <div className={`absolute bottom-4 left-4 h-3 w-3 rotate-45 ${scheme.dot} opacity-60`}></div>
                  <div className={`absolute right-4 top-16 h-2 w-2 rotate-45 ${scheme.dot} opacity-40`}></div>

                  {/* Content */}
                  <div className="relative pt-6 text-center">
                    {/* Big text with crayon style */}
                    <motion.div 
                      className={`mb-4 text-6xl font-black leading-none ${scheme.text} transition-transform duration-300 group-hover:scale-110 md:text-5xl`}
                      style={{ 
                        fontFamily: 'Comic Sans MS, cursive',
                        textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
                      }}
                    >
                      {item.big}
                    </motion.div>

                    {/* Decorative line */}
                    <div className="mx-auto mb-4 flex items-center justify-center gap-1">
                      <div className={`h-1 w-8 rounded-full ${scheme.accent}`}></div>
                      <div className={`h-1.5 w-1.5 rotate-45 ${scheme.accent}`}></div>
                      <div className={`h-1 w-8 rounded-full ${scheme.accent}`}></div>
                    </div>

                    {/* Small text */}
                    <div 
                      className="text-base font-bold leading-snug text-gray-700 md:text-lg"
                      style={{ fontFamily: 'Comic Sans MS, cursive' }}
                    >
                      {item.small}
                    </div>
                  </div>

                  {/* Hover sparkle effect */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3), transparent 60%)`
                    }}
                  ></motion.div>
                </div>

                {/* Shadow element for depth */}
                <div 
                  className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${scheme.bg} opacity-50 blur-xl`}
                  style={{ 
                    transform: `rotate(${item.rotation}deg) translateY(8px)`,
                  }}
                ></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {/* Hand-drawn arrows pointing to cards */}
          <svg className="hidden h-8 w-8 text-gray-400/60 md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          
          <div className="rounded-full border-3 border-dashed border-orange-300 bg-white px-6 py-2 shadow-md">
            <span className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              What makes us different! 🎨
            </span>
          </div>

          <svg className="hidden h-8 w-8 text-gray-400/60 md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}