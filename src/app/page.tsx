import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ServicesSection from '@/components/ServicesSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import IndustriesSection from '@/components/IndustriesSection';
import ProcessSection from '@/components/ProcessSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ServicesSection />
        <ShowcaseSection />
        <IndustriesSection />
        <ProcessSection />
        <CTABanner />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
