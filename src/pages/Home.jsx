import GetInvolvedSection from '../components/Home/GetInvolvedSection';
import Hero from '../components/Home/Hero';
import JourneyStepper from '../components/Home/JourneyStepper';
import ProgrammesSlider from '../components/Home/ProgrammesSlider';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
        <Hero />
        <ProgrammesSlider />
        <JourneyStepper   />
        <GetInvolvedSection />
    </Layout>
  );
}