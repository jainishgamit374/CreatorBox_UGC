import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep dive into your business, audience, competitors, and goals to build a solid foundation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Craft a data-driven marketing roadmap tailored to your specific growth objectives.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Launch campaigns with precision — every channel, every message, every touchpoint optimized.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Continuously test, iterate, and improve based on real-time performance data.',
  },
  {
    number: '05',
    title: 'Report',
    description: 'Transparent reporting with clear KPIs, insights, and recommendations for the next cycle.',
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connecting line
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      });

      // Animate each step card
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.from(step, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-white" aria-label="Process timeline">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">How I Work</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            My proven{' '}
            <span className="text-gradient italic">process</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A structured, results-oriented approach that consistently delivers measurable growth for every client.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border">
            <div ref={lineRef} className="h-full bg-gradient-to-r from-primary to-secondary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="process-step flex flex-col items-start lg:items-center"
              >
                {/* Number badge */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-4 shadow-sm shadow-primary/10">
                  <span className="font-display font-bold text-primary text-lg">{step.number}</span>
                </div>
                {/* Content */}
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
