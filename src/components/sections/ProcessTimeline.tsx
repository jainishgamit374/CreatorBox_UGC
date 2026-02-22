import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProcessTimelineProps {
  variant?: 'local' | 'online';
}

const localSteps = [
  { number: '01', title: 'Book Your Plan', description: 'Choose a UGC plan that fits your business type and goals.' },
  { number: '02', title: 'Store Visit', description: 'Our iGC creator visits your location for an authentic shoot.' },
  { number: '03', title: 'Content Delivery', description: 'Receive polished UGC reels within 7–12 days.' },
];

const onlineSteps = [
  { number: '01', title: 'Share Details', description: 'Tell us about your product, niche, and campaign goals.' },
  { number: '02', title: 'Creator Assigned', description: 'We match you with the perfect UGC creator for your niche.' },
  { number: '03', title: 'Ad-Ready UGC', description: 'Receive ad-ready UGC videos with full usage rights.' },
];

export default function ProcessTimeline({ variant = 'local' }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const steps = variant === 'local' ? localSteps : onlineSteps;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
      });

      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.from(step, {
          y: 40, opacity: 0, duration: 0.7, delay: i * 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-white" aria-label="How it works">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple{' '}
            <span className="text-gradient italic">3-step process</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {variant === 'local'
              ? 'From booking to delivery — we handle everything for your local business.'
              : 'Share your product details and get ad-ready UGC delivered fast.'}
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border">
            <div ref={lineRef} className="h-full bg-gradient-to-r from-primary to-secondary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {steps.map((step) => (
              <div key={step.number} className="process-step flex flex-col items-start lg:items-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-4 shadow-sm shadow-primary/10">
                  <span className="font-display font-bold text-primary text-lg">{step.number}</span>
                </div>
                <div className="lg:text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
