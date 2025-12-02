import React from "react";
import {
  Cpu,
  BrainCircuit,
  MonitorSmartphone,
} from "lucide-react";

export default function AIDigitalSection() {
  // NEW: Course cards instead of stats
  const courses = [
    {
      title: "AWS Cloud",
      sub: "Cloud Foundations & Deployment",
      logo: "/src/assets/logos/aws.png", // your logo path
    },
    {
      title: "ChatGPT / OpenAI",
      sub: "AI Prompting & Automation",
      logo: "/src/assets/logos/chatgpt.png",
    },
    {
      title: "Python Programming",
      sub: "Backend & ML Foundations",
      logo: "/src/assets/logos/python.png",
    },
    {
      title: "Figma UI/UX",
      sub: "Design Systems & Prototypes",
      logo: "/src/assets/logos/figma.png",   // ⭐ NEW FIGMA LOGO
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              First NGO to Launch{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                AI & Digital
              </span>{" "}
              Programmes
            </h2>

            {/* One-line paragraph */}
            <p className="text-gray-300 text-lg mb-8 max-w-xl truncate">
              Pioneering technology-driven youth empowerment through AI & digital skilling.
            </p>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {courses.map((c, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col items-start gap-3"
                >
                  {/* Logo */}
                  <img
                    src={c.logo}
                    alt={c.title}
                    className="h-10 w-auto object-contain"
                  />

                  <div className="text-base font-semibold text-white">
                    {c.title}
                  </div>
                  <div className="text-xs text-gray-300">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/ngo-images/ai2.jpg"
                alt="AI Dashboard"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
