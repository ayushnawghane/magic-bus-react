# Client Change Log

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
