// GetInvolved.jsx
export default function GetInvolved() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-brand-yellow/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/50 bg-brand-yellow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Get Involved
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-ink">
            Join The Movement
          </h2>

          <p className="mt-4 text-lg md:text-xl text-ink/70 max-w-2xl mx-auto">
            Be part of India’s largest youth transformation initiative.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
          <InvolveCard
            gradient="from-brand-yellow via-brand-yellow to-brand-red"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 12 6.41 5.5 5.5 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.53L12 21.35z" />
              </svg>
            }
            title="Donate"
            description="Support youth transformation with your contribution. Every rupee creates lasting impact."
            highlight="₹2,500 can support 1 adolescent to develop life skills for 6 months"
            cta="Donate Now"
          />

          <InvolveCard
            gradient="from-brand-blue via-brand-blue to-brand-magenta"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.93 1.97 3.45V19h6v-2.5C23 14.17 18.33 13 16 13Z" />
              </svg>
            }
            title="Partner"
            description="Collaborate with us to create scalable solutions for youth development and employment."
            highlight="Join 500+ organizations creating impact together"
            cta="Partner With Us"
          />

          <InvolveCard
            gradient="from-brand-green via-brand-green to-brand-blue"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            }
            title="Volunteer"
            description="Share your skills and time to mentor youth and drive community transformation."
            highlight="2 hours/week can mentor 5 youth towards better futures"
            cta="Volunteer Now"
          />
        </div>

        {/* Assurances */}
        <div className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink/70">
          <BadgeDot color="bg-brand-yellow" label="Tax-deductible donations" />
          <BadgeDot color="bg-brand-red" label="Transparent impact reporting" />
          <BadgeDot color="bg-brand-blue" label="PAN & 80G receipts issued" />
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function InvolveCard({ gradient, icon, title, description, highlight, cta }) {
  return (
    <div
      className={[
        // Card shell
        "relative rounded-3xl border border-border bg-white",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
        // Gradient ribbon that is PART OF the card (no gaps)
        "before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:rounded-t-3xl",
        `before:bg-gradient-to-r before:${gradient}`,
      ].join(" ")}
    >
      <div className="p-8">
        {/* Icon + Title row */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={[
              "shrink-0 w-12 h-12 rounded-2xl text-white grid place-items-center",
              "bg-gradient-to-br",
              gradient
                .split(" ")
                .map((g) => g.replace("from-", "from-").replace("via-", "via-").replace("to-", "to-"))
                .join(" "),
              "shadow-sm ring-1 ring-black/5",
            ].join(" ")}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-ink m-0">{title}</h3>
        </div>

        <p className="text-ink/70 leading-relaxed">{description}</p>

        {/* Highlight panel */}
        <div className="mt-6 rounded-xl border border-ink/10 bg-ink/5 px-4 py-3">
          <p className="text-sm font-semibold text-ink">{highlight}</p>
        </div>

        <button className="mt-6 w-full rounded-xl bg-brand-red px-5 py-3.5 text-white font-semibold shadow-sm transition hover:bg-brand-red/90 active:scale-[0.99]">
          {cta}
        </button>
      </div>
    </div>
  );
}

function BadgeDot({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-block w-2 h-2 rounded-full ${color}`} />
      {label}
    </div>
  );
}
