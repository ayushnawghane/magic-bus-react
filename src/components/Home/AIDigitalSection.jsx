import React from "react";
import { Cpu, BrainCircuit, MonitorSmartphone } from "lucide-react";

export default function AIDigitalSection() {
  const stats = [
    { kpi: "25K+", title: "Youth Reached via AI", sub: "Magic Mitra Platform" },
    { kpi: "65%", title: "Efficiency Increase", sub: "Digital Mobilization" },
    { kpi: "12", title: "Digital Programs", sub: "Across States" },
    { kpi: "88%", title: "Job Conversion", sub: "Digital Skills Training" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              First NGO to Launch{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                AI & Digital
              </span>{" "}
              Programmes
            </h2>

            {/* ONE-LINE PARAGRAPH */}
            <p className="text-gray-300 text-lg mb-8 max-w-xl truncate">
              Pioneering technology-driven youth empowerment through advanced AI mobilization tools, digital skills training, and data-driven impact measurement.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                    {s.kpi}
                  </div>
                  <div className="text-sm text-gray-300">{s.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - floating image with glow */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/ngo-images/Ai.jpeg"
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
