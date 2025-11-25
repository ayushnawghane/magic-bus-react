import AIDigitalSection from '../components/Home/AIDigitalSection';
import AwardsShowcase from '../components/Home/AwardsShowcase';
import EventsCampaigns from '../components/Home/EventsCampaigns';
import GetInvolvedSection from '../components/Home/GetInvolvedSection';
import Hero from '../components/Home/Hero';
import HeroCarousel from '../components/Home/HeroCarousel';
import ImpactHighlights from '../components/Home/ImpactHighlights';
import JourneyStepper from '../components/Home/JourneyStepper';
import OurOutreach from '../components/Home/OurOutreach';
import OutreachImpactBento from '../components/Home/OutreachImpactBento';
import PartnersShowcase from '../components/Home/PartnersShowcase';
import ProgrammesSlider from '../components/Home/ProgrammesSlider';
import SuccessStories from '../components/Home/SuccessStories';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
        <HeroCarousel />
        {/* <Hero /> */}
        <JourneyStepper   />
        <ProgrammesSlider />
        <AIDigitalSection />
        <OurOutreach />
        <GetInvolvedSection />
        <PartnersShowcase />
        <OutreachImpactBento />
        {/* <ImpactHighlights /> */}
        {/* <EventsCampaigns /> */}
        <SuccessStories />
        {/* <AwardsShowcase /> */}
    </Layout>
  );
}