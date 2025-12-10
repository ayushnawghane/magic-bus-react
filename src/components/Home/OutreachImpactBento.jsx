// OutreachAndImpact.jsx
import React from "react";

/* ---- Small helpers ---- */
const IconGallery = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M8 11l2 2 3-4 5 6" />
  </svg>
);

const IconPlay = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5 3v18l15-9L5 3z" />
  </svg>
);

const IconNews = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 8h10" />
    <path d="M7 12h6" />
    <path d="M7 16h4" />
  </svg>
);

const IconArticle = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <rect x="4" y="3" width="14" height="18" rx="2" />
    <path d="M8 7h6" />
    <path d="M8 11h8" />
    <path d="M8 15h5" />
  </svg>
);

const IconAward = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <circle cx="12" cy="8" r="5" />
    <path d="M8.5 13l-1.5 7 5-3 5 3-1.5-7" />
  </svg>
);

const StoryCard = ({ tag, title, body, img, className = "", cta = { text: "Read more", icon: null, href: "#" } }) => (
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
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
    <div className="relative z-10 p-5 md:p-6 h-full flex flex-col justify-end text-white">
      {!!tag && (
        <span className="self-start mb-3 rounded-md bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide">
          {tag}
        </span>
      )}
      <h3 className="text-lg md:text-2xl font-bold leading-snug">{title}</h3>
      {body && (
        <p className="mt-2 text-sm md:text-[15px] text-white/85 leading-relaxed max-w-prose">{body}</p>
      )}

      {/* CTA: accepts icon component and href */}
      <a
        href={cta.href || "#"}
        className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-white/30 hover:bg-white/15 transition"
        aria-label={cta.text}
      >
        {/* icon (if provided) */}
        {cta.icon ? (
          <span className="inline-flex w-4 h-4 items-center justify-center text-white">
            {cta.icon}
          </span>
        ) : null}
        <span>{cta.text}</span>

        {/* arrow */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  </article>
);

export default function OutreachAndImpact() {
  return (
    <section className="py-20 bg-brand-yellow">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Shared Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/30 bg-brand-black/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-brand-black uppercase">
            Nationwide Reach & Impact
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-brand-black">
            Transforming Lives Together
          </h2>

          <p className="mt-4 text-lg md:text-xl text-brand-black/90 max-w-3xl mx-auto">
            Expanding access to opportunities across India’s diverse communities
            and delivering measurable outcomes.
          </p>
        </div>

        {/* OUTREACH — Bento mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] md:auto-rows-[220px] gap-6">

          {/* Gallery */}
          <StoryCard
            tag="Images And Video Gallery"
            title="Bloomberg & Kapil Dev, 2022"
            img="/ngo-images/12.jpg"
            className="md:col-span-7 md:row-span-2"
            cta={{
              text: "View Gallery",
              icon: <IconPlay className="text-white" />,
              href: "/gallery",
            }}
          />

          {/* Awards */}
          <StoryCard
            tag="Awards"
            title="Mother Teresa Memorial Award for Social Justice 2023"
            img="/ngo-images/award1.jpg"
            className="md:col-span-5 md:row-span-2"
            cta={{
              text: "View Awards",
              icon: <IconAward className="text-white" />,
              href: "/videos",
            }}
          />

          {/* News */}
          <StoryCard
            tag="News"
            title="From Adversity to Agency: Mobilising Over 5 Lakh Youth for Sustainable Livelihoods"
            img="/ngo-images/7.jpg"
            className="md:col-span-5 md:row-span-2"
            body=""
            cta={{
              text: "Read Articles",
              icon: <IconNews className="text-white" />,
              href: "/news/national-sports-policy-scores-a-goal",
            }}
          />

          {/* Blog */}
          <StoryCard
            tag="Blogs"
            title="Empowering Women in India’s Workforce for Viksit Bharat 2047"
            img="/ngo-images/10.jpg"
            className="md:col-span-7 md:row-span-2"
            body=""
            cta={{
              text: "Read Blogs",
              icon: <IconArticle className="text-white" />,
              href: "/blogs/empowering-women-viksit-bharat",
            }}
          />
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-6">
          <button className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition active:scale-[0.99]">
            View Impact Dashboard
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div> */}

      </div>
    </section>
  );
}
