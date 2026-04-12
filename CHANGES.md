# Client Change Log

## Date: April 12, 2026

### New Programme Pages Added

- `src/pages/ConnectWithWork.jsx`
- `src/pages/DigitalSkilling.jsx`
- `src/pages/EntrepreneurshipDevelopmentProgramme.jsx`
- `src/pages/MBDost.jsx`
- `src/pages/FutureX.jsx`

### Routing Updates

- File: `src/App.jsx`
- Added routes:
  - `/connect-with-work`
  - `/digital-skilling`
  - `/entrepreneurship-development-programme`
  - `/mb-dost`
  - `/futurex`

### Navigation Updates

- File: `src/components/NavbarNew.jsx`
  - Linked `Connect With Work` to `/connect-with-work`
  - Linked `Digital Skilling` to `/digital-skilling`
  - Linked `Entrepreneurship Development` to `/entrepreneurship-development-programme`
  - Linked `MB Dost` to `/mb-dost`
  - Linked `Future X` to `/futurex`

### Connect With Work (CWW) Page

- File: `src/pages/ConnectWithWork.jsx`
- Full content flow: About, Programme Features, Structure, Components, Sectors & Roles, Eligibility, FAQs, Contact
- Eligibility section redesigned to avoid repetition — now rendered as a clean responsive grid
- Integrated shared `HeroBanner` and `FAQSection` components
- Added `cwwFAQ` dataset to `src/components/Home/faqItems.jsx`

### Digital Skilling Page

- File: `src/pages/DigitalSkilling.jsx`
- Full content flow: About, Programme Features, Programme Details, Outreach & Impact, FAQs, Contact
- Programme Details rendered as an interactive tabbed/card layout
- Added `digitalSkillingFAQ` dataset to `src/components/Home/faqItems.jsx`

### Entrepreneurship Development Programme (EDP) Page

- File: `src/pages/EntrepreneurshipDevelopmentProgramme.jsx`
- Full content flow: Demographic Need, About EDP, Features, Structure, Components, Eligibility, Outreach, Success Stories, FAQs, Contact
- Success Stories section redesigned to horizontal split-card layout (portrait left, quote right) after user-provided testimonial images added
- Images referenced: `/testimonials/vikas.png`, `/testimonials/deepika.png`, `/testimonials/monika.png`
- Added `edpFAQ` dataset to `src/components/Home/faqItems.jsx`

### MB Dost Page

- File: `src/pages/MBDost.jsx`
- Full content flow: About, Benefits, Demo Video, Testimonials, FAQs, Contact
- Design: Dark forest-dark theme (`#0B1A13`) with WhatsApp Green (`#25D366`) accents
- Key design components:
  - Animated WhatsApp Chat UI mock (chatbot simulation)
  - 3×3 alternating dark/white bento benefits grid with ghost number watermarks
  - Custom video player with macOS-style window chrome
  - Youth testimonial cards using initial-letter avatars (no photos)
  - Programme Head quote strip on dark background
- Added `mbDostFAQ` dataset to `src/components/Home/faqItems.jsx`

### FutureX Page

- File: `src/pages/FutureX.jsx`
- Full content flow: About (with orbit visual), Benefits, In Action (image grid), Testimonial, FAQs, Contact
- Design: Magic Bus brand palette — Red (`#E12228`) primary, Yellow (`#FFCC04`) accent, Blue (`#21BDEA`) secondary, on `#111111` dark background
- Key design components:
  - Animated spinning orbit hub showing 4 delivery channels
  - 2×2 gradient-border benefit cards
  - Cinematic editorial image grid with floating stat chip and delivery mode card
  - Giant pull-quote testimonial card with Instagram source link
  - Orbit label spacing updated for visual clarity (spacing between labels and nodes)
- Added `futureXFAQ` dataset to `src/components/Home/faqItems.jsx`

### FAQ Data Updates

- File: `src/components/Home/faqItems.jsx`
- Added and exported:
  - `cwwFAQ`
  - `digitalSkillingFAQ`
  - `edpFAQ`
  - `mbDostFAQ`
  - `futureXFAQ`
- Updated default export to include all new datasets

---

## Date: April 6, 2026

### New Programme Pages Added

- `src/pages/YouthForChangeFellowshipProgramme.jsx`
- `src/pages/EmployeeVolunteeringProgramme.jsx`
- `src/pages/MagicMitra.jsx`
- `src/pages/LivelihoodProgramme.jsx`
- `src/pages/YouthSkillingProgramme.jsx`

### Routing Updates

- File: `src/App.jsx`
- Added routes:
  - `/youth-for-change-fellowship-programme`
  - `/employee-volunteering`
  - `/magic-mitra`
  - `/livelihood-programme`
  - `/youth-skilling-programme`

### Navigation Updates

- File: `src/components/NavbarNew.jsx`
  - Linked `Magic Mitra` to `/magic-mitra`
  - Linked livelihood group to `/livelihood-programme`
  - Linked `Standard Skilling` to `/youth-skilling-programme`

- File: `src/components/Footer.jsx`
  - Linked `Employee Volunteering Programme` to `/employee-volunteering`

### Youth For Change Fellowship Page Iterations

- File: `src/pages/YouthForChangeFellowshipProgramme.jsx`
- Replaced values/history flow with requested section content.
- Added milestones section and embedded video.
- Updated layouts based on feedback:
  - milestones text-left/video-right
  - history images-left/content-right
  - reduced whitespace and balanced section heights
  - testimonial-style success stories layout
  - Linked success story CTAs to provided LinkedIn URLs.

### Youth Skilling Programme Content Alignment

- File: `src/pages/YouthSkillingProgramme.jsx`
- Kept redesigned visual style while aligning content exactly to provided section flow.
- Updated Core Components section to image-only as requested:
  - `/youth-circle.jpg`

## Date: April 4, 2026

### Government Partnership Programme: Text Cleanup

- File: `src/pages/GovernmentPartnershipProgramme.jsx`
- Removed redundant word "outreach" from Community Engagement description
- Changed: "Interventions activate School Management Committees, outreach & community engagement"
- To: "Interventions activate School Management Committees and community outreach"

### Learning & Development: Auto-Rotating Testimonials

- File: `src/pages/LearningDevelopment.jsx`
- Added auto-rotation to testimonials carousel
- Automatically cycles through testimonials every 5 seconds
- User can still manually navigate using arrows or dots

## Date: March 31, 2026

### About Us: Our Story Redesign & Timeline Interaction Updates

- File: `src/pages/AboutUs.jsx`
- Added a new red "Magic Bus Story" intro block as requested.
- Added `milestone-1.jpg` on the right side of the intro block.
- Kept the right image smaller by default and added click-to-enlarge behavior.
- Improved enlarge/modal UX:
  - click outside to close
  - close button
  - `Esc` key close
  - body scroll lock while open
- Updated bus logic so the bus follows whichever milestone card is currently in view.
- Reduced milestone timeline card size for a more compact layout.

### Git Snapshot (Working Tree)

- Modified files:
  - `CHANGES.md`
  - `DEVELOPMENT.md`
  - `PAGE_COUNT.md`
  - `src/components/HeroBanner.jsx`
  - `src/components/Home/OurOutreach.jsx`
  - `src/components/Home/PartnersShowcase.jsx`
  - `src/components/Home/ProgrammesSlider.jsx`
  - `src/pages/AboutUs.jsx`
  - `src/pages/AdolescentProgramme.jsx`
  - `src/pages/GovernmentPartnershipProgramme.jsx`
  - `src/pages/OurCulture.jsx`
- Untracked files:
  - `public/great-place-to-work-logo.jpg`
  - `public/great-place-to-work-logo.png`
  - `public/great-place-to-work.jpg`

### Cleanup: Removed Garbled Characters

- File: `src/pages/AboutUs.jsx`
- Removed Unicode box-drawing characters that were displaying as garbled text (€â"€â"€ pattern) in comment dividers throughout the file.

## Date: March 26, 2026

This file records client-requested updates made to already created pages.

## Updated Existing Pages

### 1) Our Team
- File: `src/pages/OurTeam.jsx`
- Added top intro/leadership section.
- Added featured leadership cards for Matthew Spacie and Jayant Rastogi.
- Added `Read More` modal with full profile content.
- Added leader images:
  - `public/board-of-directors/matthew-sapacie.png`
  - `public/board-of-directors/jayant-rastogi-global-ceo-ourteamimg.webp`
- Refined modal and card styling to match the page design.
- Removed visible modal scrollbar while keeping scroll behavior.

### 2) Board of Directors
- File: `src/pages/BoardOfDirectors.jsx`
- Added CTA section.
- Updated CTA based on client feedback to:
  - Button label: `View Our Team`
  - Redirect route: `/our-team`

### 3) Learning & Development
- File: `src/pages/LearningDevelopment.jsx`
- Reworked "Our Beliefs" for horizontal fit.
- Added hanging line treatment with even connectors (as requested).
- Updated initiative tab theme colors from black to brand red/yellow.
- Fixed duplicate symbol conflict by renaming local hero wrapper function:
  - `HeroBanner` -> `HeroSection`

### 4) Adolescent Programme
- Files:
  - `src/pages/AdolescentProgramme.jsx`
  - `src/components/HeroBanner.jsx`
- Replaced page-local hero with shared `HeroBanner` component.
- Added boxed stats support in shared hero via `statsVariant="boxes"`.
- Preserved 3 hero stats:
  - Target Group: Ages 12-18
  - Girls Participation: 52%
  - States & UTs Reached: 22
- Reduced oversized image sections and improved frame styling.
- Restored vertical layout for large diagrams based on feedback.
- Fixed India map visibility using non-cropping display (`object-contain`).
- Fixed "Our Impact" card alignment and removed right-side empty spacing.

### 5) Government Partnership Programme FAQ Reuse
- Files:
  - `src/pages/GovernmentPartnershipProgramme.jsx`
  - `src/components/Home/faqItems.jsx`
- Added reusable dataset: `governmentPartnershipFAQ`.
- Replaced local FAQ accordion with shared component:
  - `src/components/Home/FAQSectiom.jsx`

## Notes
- Scope of this cycle was updates to existing pages.
- No newly created page files were added in this cycle.
