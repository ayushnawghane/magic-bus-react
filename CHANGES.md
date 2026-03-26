# Client Change Log

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
