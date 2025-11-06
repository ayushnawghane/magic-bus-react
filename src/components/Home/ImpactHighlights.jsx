// ImpactHighlights.jsx
import { motion } from "framer-motion";

const items = [
  { big: "First", small: "NGO in AI & Digital" },
  { big: "C2L", small: `"Childhood to Livelihood"` },
  { big: "FutureX", small: "Internal Transformation" },
  { big: "FPD", small: "Organisational Excellence" },
];

export default function ImpactHighlights() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.big}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -6 }}
              className="text-center group cursor-pointer"
            >
              <div className="text-5xl font-dosis font-bold text-brand-red mb-2 transition-transform group-hover:scale-110">
                {it.big}
              </div>
              <div className="text-gray-600 font-lato font-medium">{it.small}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
