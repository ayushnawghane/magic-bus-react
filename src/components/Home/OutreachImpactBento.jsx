// OutreachAndImpact.jsx
import React from "react";

/* ---- Small helpers ---- */

const StoryCard = ({ tag, title, body, img, className = "", cta = "Read more" }) => (
  <article
    className={[
      "relative overflow-hidden rounded-2xl isolate",
      "shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5",
      "group",
      className,
    ].join(" ")}
  >
    <img
      src={img}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
    />
    {/* scrim for readable text */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
    <div className="relative z-10 p-5 md:p-6 h-full flex flex-col justify-end text-white">
      {!!tag && (
        <span className="self-start mb-3 rounded-md bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide">
          {tag}
        </span>
      )}
      <h3 className="text-xl md:text-2xl font-bold leading-snug">{title}</h3>
      {body && (
        <p className="mt-2 text-sm md:text-[15px] text-white/85 leading-relaxed max-w-prose">{body}</p>
      )}
      <button className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-white/30 hover:bg-white/15">
        {cta}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  </article>
);

export default function OutreachAndImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Shared Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-ink/80 uppercase">
            Nationwide Reach & Impact
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">
            Our Outreach & Impact
          </h2>
          <p className="mt-4 text-lg md:text-xl text-ink/70 max-w-3xl mx-auto">
            Expanding access to opportunities across India’s diverse communities and delivering measurable outcomes.
          </p>
        </div>

        {/* OUTREACH — Bento mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[220px] md:auto-rows-[220px] gap-6">
          {/* Large feature left (2 rows x 3 cols) */}
          <StoryCard
            tag="Livelihood"
            title="Seeds of Confidence"
            body="In Jadipani, Uttarakhand, Reena isn’t just growing cabbages—she’s growing confidence and a bright future."
            img="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1800&auto=format&fit=crop"
            className="md:col-span-3 md:row-span-2"
          />
          {/* Tall card right (2 rows x 2 cols) */}
          <StoryCard
            tag="WaSH"
            title="Water Flows Again Through Willpower and Innovation"
            body="A hamlet in Gujarat restored clean drinking water through community action."
            img="https://images.unsplash.com/photo-1521170665346-3f21e2291d8b?q=80&w=1400&auto=format&fit=crop"
            className="md:col-span-2 md:row-span-2"
          />
          {/* Compact story tiles */}
          <StoryCard
            tag="Healthcare"
            title="Preserving Possibility Through Timely Intervention"
            img="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop"
            className="md:col-span-3"
            body=""
          />
          <StoryCard
            tag="Arts & Culture"
            title="Building Capacity for Cultural Conservation"
            img="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1400&auto=format&fit=crop"
            className="md:col-span-3"
            body=""
          />
        </div>

        {/* SMALL OUTREACH STATS — visually part of the same block */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="rounded-2xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 bg-white">
            <div className="text-4xl md:text-5xl font-black mb-2">15</div>
            <h4 className="font-bold text-lg text-ink">States</h4>
            <p className="text-ink/70 text-sm mt-1">Across India</p>
          </div>
          <div className="rounded-2xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 bg-white">
            <div className="text-4xl md:text-5xl font-black mb-2">2.5M+</div>
            <h4 className="font-bold text-lg text-ink">Youth Reached</h4>
            <p className="text-ink/70 text-sm mt-1">Direct beneficiaries</p>
          </div>
          <div className="rounded-2xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 bg-white">
            <div className="text-4xl md:text-5xl font-black mb-2">850+</div>
            <h4 className="font-bold text-lg text-ink">Communities</h4>
            <p className="text-ink/70 text-sm mt-1">Rural & Urban</p>
          </div>
          <div className="rounded-2xl p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 bg-white">
            <div className="text-4xl md:text-5xl font-black mb-2">25+</div>
            <h4 className="font-bold text-lg text-ink">Years</h4>
            <p className="text-ink/70 text-sm mt-1">Of Impact</p>
          </div>
        </div>

        {/* Connector — soft gradient rule to make it feel like one continuous section */}
        <div className="my-12 md:my-14 h-[1px] w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        {/* IMPACT — kept same as the old one */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-ink/80 uppercase">
            Measurable Impact
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">Our Impact</h2>
          <p className="mt-4 text-lg md:text-xl text-ink/70 max-w-3xl mx-auto">
            Transforming lives with data-driven results and sustainable outcomes.
          </p>
        </div>

        {/* Your original 4-card impact grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center shadow-sm ring-1 ring-black/5">
            <div className="text-5xl font-black text-brand-red mb-4">185K+</div>
            <h4 className="font-bold text-xl mb-2">Youth Placed</h4>
            <p className="text-gray-600">In sustainable jobs</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center shadow-sm ring-1 ring-black/5">
            <div className="text-5xl font-black text-yellow-600 mb-4">68%</div>
            <h4 className="font-bold text-xl mb-2">Girl Participation</h4>
            <p className="text-gray-600">Female beneficiaries</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center shadow-sm ring-1 ring-black/5">
            <div className="text-5xl font-black text-green-600 mb-4">₹2.8Cr</div>
            <h4 className="font-bold text-xl mb-2">Income Generated</h4>
            <p className="text-gray-600">Annual earnings by alumni</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-sm ring-1 ring-black/5">
            <div className="text-5xl font-black text-blue-600 mb-4">95%</div>
            <h4 className="font-bold text-xl mb-2">Retention Rate</h4>
            <p className="text-gray-600">Job sustainability</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-4 text-lg font-semibold transition active:scale-[0.99]">
            View Impact Dashboard
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
