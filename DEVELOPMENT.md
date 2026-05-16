# Development Log

## Date: May 16, 2026

### Changes Made Today

#### Modernizing UI Components & Animations

1. **Programmes Slider** (`src/components/Home/ProgrammesSlider.jsx`, `src/index.css`)
   - Re-architected the generic slider cards to feature a 3D flip-on-hover effect.
   - Refactored `ProgrammeCard` into a parent `flip-card` and two children (`flip-card-inner` face components) leveraging `transform-style: preserve-3d`.
   - Adjusted layout sizes and vertical overflow to prevent clipping during 3D transforms.

2. **Success Stories** (`src/components/Home/SuccessStories.jsx`)
   - Addressed severe performance bottlenecks by refactoring Framer Motion's React-state-based hover animations (`useState` + `animate` props).
   - Migrated entirely to GPU-accelerated CSS `group-hover` transitions using `scale` and `opacity`.
   - Reduced layout thrashing and achieved a 60fps snappy interaction.

3. **Our Outreach** (`src/components/Home/OurOutreach.jsx`)
   - Completely discarded the basic metric cards.
   - Designed and built an unorthodox interactive "Skyline Bar Chart" using standard `div` elements and `framer-motion`.
   - Calculated bar heights using a `Math.log10` logarithmic scale algorithm to properly display heavily skewed data ranges (11 to 3.5 Million) in the same visual space.
   - Added hover interactions via `onMouseEnter`/`onMouseLeave` state updates, driving an active-index based dimming effect.
   - Integrated floating tooltips and animated count-up numbers.## Date: April 12, 2026

### Changes Made Today

#### New Pages Created

1. `src/pages/ConnectWithWork.jsx`
2. `src/pages/DigitalSkilling.jsx`
3. `src/pages/EntrepreneurshipDevelopmentProgramme.jsx`
4. `src/pages/MBDost.jsx`
5. `src/pages/FutureX.jsx`

#### Routing and Navigation

1. Added new routes in `src/App.jsx`:
   - `/connect-with-work`
   - `/digital-skilling`
   - `/entrepreneurship-development-programme`
   - `/mb-dost`
   - `/futurex`
2. Updated `src/components/NavbarNew.jsx` with links for:
   - Connect With Work
   - Digital Skilling
   - Entrepreneurship Development Programme
   - MB Dost
   - Future X

#### FAQ Data (`src/components/Home/faqItems.jsx`)

- Added named exports:
  - `cwwFAQ` — 5 FAQ items for Connect With Work
  - `digitalSkillingFAQ` — 4 FAQ items for Digital Skilling
  - `edpFAQ` — 5 FAQ items for EDP
  - `mbDostFAQ` — 5 FAQ items for MB Dost
  - `futureXFAQ` — 4 FAQ items for FutureX
- Updated default export object to include all new datasets

#### Major Content / Design Details

1. **Connect With Work** (`src/pages/ConnectWithWork.jsx`)
   - Sections: About, Features, Programme Structure, Components, Sectors & Roles, Eligibility, FAQs, Contact
   - Eligibility redesigned as clean grid (removed repetitive layout)
   - Uses shared `HeroBanner` and `FAQSection` components

2. **Digital Skilling** (`src/pages/DigitalSkilling.jsx`)
   - Sections: About, Features, Programme Details, Outreach & Impact, FAQs, Contact
   - Programme Details in interactive card/tab layout

3. **Entrepreneurship Development Programme** (`src/pages/EntrepreneurshipDevelopmentProgramme.jsx`)
   - Sections: Demographic Need, About, Features, Structure, Components, Eligibility, Outreach, Success Stories, FAQs, Contact
   - Success Stories: horizontal split-card layout — small portrait left, quote right
   - Testimonial images: `/testimonials/vikas.png`, `/testimonials/deepika.png`, `/testimonials/monika.png`

4. **MB Dost** (`src/pages/MBDost.jsx`)
   - Sections: About (with WhatsApp chat mock), Benefits (bento grid), Demo Video, Testimonials, FAQs, Contact
   - Design palette: dark forest `#0B1A13` + WhatsApp Green `#25D366`
   - Animated chat UI simulation in About section
   - 3×3 alternating dark/white bento benefits grid with ghost number watermarks (01–09)
   - macOS-style video player chrome around demo video
   - Youth testimonial cards: initial-letter avatars (green circle, no photos)
   - Programme Head quotes strip on dark background

5. **FutureX** (`src/pages/FutureX.jsx`)
   - Sections: About (with orbit), Benefits (2×2 cards), In Action (image grid), Testimonial, FAQs, Contact
   - Design palette: Magic Bus brand — Red `#E12228` primary, Yellow `#FFCC04` accent, Blue `#21BDEA` secondary, `#111111` dark
   - Animated orbit visual showing 4 delivery channels (virtual, in-person, mobile, WhatsApp) with label spacing fix applied
   - Cinematic image grid with floating stat chip overlay
   - Pull-quote testimonial card with Instagram source link (Karthik's story)
   - User-supplied images: `/futurex1.png`, `/futurex-testimonial.png`

---

## Date: April 6, 2026

### Changes Made Today

#### New Pages Created

1. `src/pages/YouthForChangeFellowshipProgramme.jsx`
2. `src/pages/EmployeeVolunteeringProgramme.jsx`
3. `src/pages/MagicMitra.jsx`
4. `src/pages/LivelihoodProgramme.jsx`
5. `src/pages/YouthSkillingProgramme.jsx`

#### Routing and Navigation

1. Added new routes in `src/App.jsx`:
   - `/youth-for-change-fellowship-programme`
   - `/employee-volunteering`
   - `/magic-mitra`
   - `/livelihood-programme`
   - `/youth-skilling-programme`
2. Updated `src/components/NavbarNew.jsx` with links for:
   - Magic Mitra
   - Livelihood Programme
   - Standard Skilling
3. Updated `src/components/Footer.jsx`:
   - Linked Employee Volunteering Programme to `/employee-volunteering`

#### Major Content/Design Iterations

1. `src/pages/WhoWeAre.jsx`
   - Replaced `Our Values` with `Our History`
   - Added `Our Milestones` with embedded video
   - Adjusted history section image/content ordering and layout spacing

2. `src/pages/YouthForChangeFellowshipProgramme.jsx`
   - Implemented full page content flow
   - Redesigned `Building Leadership Capacities` section
   - Refined `Success Stories` layout and CTA links

3. `src/pages/YouthSkillingProgramme.jsx`
   - Aligned page content to approved flow
   - Updated Core Components to image-only block using `/youth-circle.jpg`

## Date: April 4, 2026

### Changes Made Today

#### Government Partnership Programme (`src/pages/GovernmentPartnershipProgramme.jsx`)

1. Text cleanup - removed redundant word "outreach" from Community Engagement description

#### Learning & Development (`src/pages/LearningDevelopment.jsx`)

1. Added auto-rotation to testimonials carousel - cycles every 5 seconds
2. Added useEffect import for setInterval functionality

## Date: March 9, 2026

### Changes Made Today

#### OurCulture.jsx (`src/pages/OurCulture.jsx`)

1. **Added User Icon Import**
   - Added `User` and `ExternalLink` icons from lucide-react

2. **Testimonial Improvements**
   - Added `link` property to testimonials data with:
     - Mercy K: LinkedIn profile link
     - Second testimonial: Great Place to Work PDF link
   - Updated testimonial card to display ExternalLink icon next to name when link is available
   - Added fallback User icon for testimonials without images

### Files Created/Untracked

- `src/pages/OurCulture.jsx` - New Culture page
- `src/pages/AboutUs.jsx` - About Us page
- `src/pages/OurTeam.jsx` - Our Team page
- `src/pages/WhoWeAre.jsx` - Who We Are page
- `public/ngo-images/mercy.png` - Testimonial image
- `public/ngo-images/outreach_bg.png` - Outreach background
- `public/ngo-images/training.png` - Training image
- `public/culture-banner.jpg` - Culture banner
- `public/milestone-1.jpg` - Milestone image

### Modified Files (Tracked)

- `src/App.jsx` - Routes updated
- `src/components/Home/OurOutreach.jsx` - Component updates
- `src/components/NavbarNew.jsx` - Navigation updates

## Date: March 17, 2026

### Changes Made Today

#### New Pages Added (Git verified)

1. `src/pages/BoardOfDirectors.jsx`
2. `src/pages/LearningDevelopment.jsx`
3. `src/pages/AdolescentProgramme.jsx`
4. `src/pages/GovernmentPartnershipProgramme.jsx`

#### Adolescent Programme (`src/pages/AdolescentProgramme.jsx`)

1. Created a dedicated Adolescent Programme page with full content flow and interactive sections.
2. Added Success Story images:
   - `/testimonials/zafia.png`
   - `/testimonials/deepika.png`
3. Added outreach map section using `/mapnew.jpg`.

#### Government Partnership Programme (`src/pages/GovernmentPartnershipProgramme.jsx`)

1. Created a new Government Partnership Programme page with:
   - Banner, need, programme overview, what we do, implementation model, how we work, outreach, partners, success story, FAQs, and contact sections.
2. Integrated Government and Foundation partner logos from:
   - `public/government partners/`
   - `public/foundation partners/`
3. Updated section visuals based on feedback:
   - Removed dot icon beside "What Is The Programme?" tag.
   - Updated the programme overview image.
   - Increased partner logo display sizes.

#### Routing and Navigation

1. Added new routes in `src/App.jsx`:
   - `/adolescent-programme`
   - `/government-partnership-programme`
2. Updated `src/components/NavbarNew.jsx`:
   - Added Adolescent Programme access in Programmes menu.
   - Linked Government Partnership Programme under Adolescent Programme.

#### Modified Files (Tracked)

- `src/App.jsx`
- `src/components/NavbarNew.jsx`
- `src/pages/BoardOfDirectors.jsx`
- `src/pages/LearningDevelopment.jsx`
- `src/pages/AdolescentProgramme.jsx`
- `src/pages/GovernmentPartnershipProgramme.jsx`
- `PAGE_COUNT.md`

## Date: March 31, 2026

### Changes Made Today

#### About Us: Our Story Updates

- File: `src/pages/AboutUs.jsx`
- Added a new red "Magic Bus Story" intro block.
- Added `milestone-1.jpg` on the right side of the intro block.
- Reduced intro container footprint (padding/typography/preview size).
- Added image preview click-to-enlarge modal with:
  - outside click close
  - close button
  - `Esc` key close
  - body scroll lock while open
- Updated bus behavior to follow the milestone card currently visible on screen.
- Reduced timeline card sizes for a more compact layout.

#### Git Status Snapshot (Current Working Tree)

- Modified:
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
- Untracked:
  - `public/great-place-to-work-logo.jpg`
  - `public/great-place-to-work-logo.png`
  - `public/great-place-to-work.jpg`

#### Cleanup: Removed Garbled Characters

- File: `src/pages/AboutUs.jsx`
- Removed Unicode box-drawing characters (displayed as `€â"€â"€` pattern) from comment dividers.
- These were likely introduced during copy-paste from a source that used special Unicode box characters.

## Date: March 26, 2026

### Changes Made Today

#### Existing Pages Updated (No New Pages Created)

1. `src/pages/OurTeam.jsx`
   - Added leadership intro section and leadership cards.
   - Added `Read More` modal with full bio content.
   - Integrated leadership images and polished modal/card design.

2. `src/pages/BoardOfDirectors.jsx`
   - Added CTA section.
   - Updated CTA to `View Our Team` with route `/our-team`.

3. `src/pages/LearningDevelopment.jsx`
   - Updated `Our Beliefs` arrangement and hanging line treatment.
   - Updated tab colors to theme red/yellow.
   - Resolved hero naming conflict (`HeroSection`).

4. `src/pages/AdolescentProgramme.jsx`
   - Replaced local hero with shared `HeroBanner`.
   - Preserved 3 stats using boxed variant.
   - Adjusted large image sections and map visibility.
   - Fixed `Our Impact` card spacing/alignment.

5. FAQ reuse updates
   - `src/pages/GovernmentPartnershipProgramme.jsx`
   - `src/components/Home/faqItems.jsx`
   - Replaced local FAQ with shared `FAQSectiom` and added `governmentPartnershipFAQ`.

### Documentation Updates

- Updated `PAGE_COUNT.md` with route column and latest update date.
- Created `CHANGES.md` to capture this client-driven update cycle.
