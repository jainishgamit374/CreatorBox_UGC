import { useEffect } from 'react';
import { useLenis } from '@/hooks/useUtils';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ComparisonTable from '@/components/sections/ComparisonTable';
import Testimonials from '@/components/sections/Testimonials';
import BehindTheScenes from '@/components/sections/BehindTheScenes';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ProcessTimeline variant="local" />
        <ComparisonTable />
        <Testimonials />
        <BehindTheScenes />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
