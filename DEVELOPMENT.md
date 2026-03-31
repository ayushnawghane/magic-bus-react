# Development Log

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
