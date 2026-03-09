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
