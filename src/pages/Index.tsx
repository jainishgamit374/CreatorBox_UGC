import { lazy, Suspense } from 'react';
import { useLenis } from '@/hooks/useUtils';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';

// Lazy-load below-the-fold sections to reduce unused JS on initial load
const Stats = lazy(() => import('@/components/sections/Stats'));
const Services = lazy(() => import('@/components/sections/Services'));
const ProcessTimeline = lazy(() => import('@/components/sections/ProcessTimeline'));
const ComparisonTable = lazy(() => import('@/components/sections/ComparisonTable'));
const HighTicketSaaS = lazy(() => import('@/components/sections/HighTicketSaaS'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const BehindTheScenes = lazy(() => import('@/components/sections/BehindTheScenes'));
const FAQ = lazy(() => import('@/components/sections/FAQ'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const CreatorOnboarding = lazy(() => import('@/components/sections/CreatorOnboarding'));
const Footer = lazy(() => import('@/components/sections/Footer'));

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Stats />
          <BehindTheScenes />
          <Services />
          <ProcessTimeline variant="local" />
          <ComparisonTable />
          <HighTicketSaaS />
          <Testimonials />
          <FAQ />
          <CreatorOnboarding />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
