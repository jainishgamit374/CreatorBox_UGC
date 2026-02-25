import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Target, LineChart, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Target,
    title: 'Founder-Led UGC',
    description: 'Authentic founder stories and product walkthroughs that build trust with high-ticket buyers.',
  },
  {
    icon: LineChart,
    title: 'Demo-Style Videos',
    description: 'Professional screen-recorded demos with voice-over that showcase your SaaS product in action.',
  },
  {
    icon: Shield,
    title: 'Testimonial UGC',
    description: 'Real customer testimonials edited for ads — the most powerful social proof for SaaS conversions.',
  },
  {
    icon: Zap,
    title: 'Ad-Ready Creatives',
    description: 'Optimized for LinkedIn Ads, Meta Ads, and YouTube pre-roll — built for B2B performance.',
  },
];

const metrics = [
  { value: '2.8x', label: 'Higher CTR vs Studio' },
  { value: '45%', label: 'Lower CAC with UGC' },
  { value: '10 days', label: 'Avg. Delivery Time' },
];

export default function HighTicketSaaS() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal with clip-path
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      });

      // Stagger cards from bottom
      gsap.utils.toArray<HTMLElement>('.saas-card').forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        });
      });

      // Metrics counter animation
      gsap.utils.toArray<HTMLElement>('.saas-metric').forEach((metric, i) => {
        gsap.from(metric, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 80%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      aria-label="High-Ticket SaaS UGC"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(215 35% 12%) 50%, hsl(221 50% 15%) 100%)',
      }}
    >
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div ref={headingRef} className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <Rocket size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
              High-Ticket SaaS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
            UGC that sells{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              high-ticket SaaS
            </span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            Your SaaS product needs more than stock footage. We create authentic UGC — founder stories,
            product demos, and testimonial ads — that convert B2B buyers and reduce your CAC.
          </p>
        </div>

        {/* Metrics bar */}
        <div ref={metricsRef} className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-2xl">
          {metrics.map((metric) => (
            <div key={metric.label} className="saas-metric text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold font-display text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-white/40 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="saas-card group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-primary/20 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <Link to="/online-brands">
            <motion.span
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Get SaaS UGC
              <ArrowRight size={16} />
            </motion.span>
          </Link>
          <span className="text-sm text-white/40">
            Plans from <span className="text-white/70 font-semibold">₹999</span> · Delivery in 10 days
          </span>
        </motion.div>
      </div>
    </section>
  );
}
