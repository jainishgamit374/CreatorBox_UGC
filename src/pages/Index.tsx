import { useEffect } from 'react';
import { useLenis } from '@/hooks/useUtils';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import SpecialOffer from '@/components/sections/SpecialOffer';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero — Full-screen landing */}
        <Hero />

        {/* 2. Stats — Animated counters */}
        <Stats />

        {/* 3. About — Split layout with skills */}
        <About />

        {/* 4. Services — 6-card grid */}
        <Services />

        {/* 5. Process — GSAP scroll timeline */}
        <ProcessTimeline />

        {/* 6. Portfolio — Filterable grid + modal */}
        <Portfolio />

        {/* 7. Testimonials — Auto-rotating carousel */}
        <Testimonials />

        {/* 8. Pricing — 3-tier with toggle */}
        <Pricing />

        {/* 9. Special Offer — Countdown banner */}
        <SpecialOffer />

        {/* 10. FAQ — Accordion */}
        <FAQ />

        {/* 11. Contact — Form + info */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
