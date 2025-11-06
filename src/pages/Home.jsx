import EventsCampaigns from '../components/Home/EventsCampaigns';
import GetInvolvedSection from '../components/Home/GetInvolvedSection';
import Hero from '../components/Home/Hero';
import ImpactHighlights from '../components/Home/ImpactHighlights';
import JourneyStepper from '../components/Home/JourneyStepper';
import ProgrammesSlider from '../components/Home/ProgrammesSlider';
import SuccessStories from '../components/Home/SuccessStories';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
        <Hero />
        <ProgrammesSlider />
        <JourneyStepper   />
        <GetInvolvedSection />
        <EventsCampaigns />
        <SuccessStories />
        <ImpactHighlights />
    </Layout>
  );
}