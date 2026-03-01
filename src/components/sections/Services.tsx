import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Share2, Globe, Megaphone, BarChart3, Palette, Video
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'UGC Video Production',
    description: 'High-quality UGC reels and videos tailored for Instagram, YouTube Shorts, and paid ad campaigns.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'End-to-end social media strategy, content calendar, and community management for your brand.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Modern, conversion-optimized websites that showcase your brand and drive customer action.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Megaphone,
    title: 'PR & Influencer Marketing',
    description: 'Strategic influencer collaborations and PR outreach to amplify your brand reach and credibility.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: BarChart3,
    title: 'Meta Ads Management',
    description: 'Data-driven Facebook and Instagram ad campaigns optimized for maximum ROAS and conversions.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Palette,
    title: 'Brand Strategy',
    description: 'Complete brand identity and positioning strategy to stand out in a crowded market.',
    color: 'bg-accent/10 text-accent',
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx: gsap.Context;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.service-card').forEach((card, i) => {
          gsap.from(card, {
            y: 60, opacity: 0, duration: 0.7, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 78%', once: true },
          });
        });
      }, gridRef);
    });
    return () => { cancelAnimationFrame(rafId); ctx?.revert(); };
  }, []);

  return (
    <section id="services" className="section-padding bg-light" aria-label="Services">
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
            <span className="text-sm font-medium text-primary uppercase tracking-widest">More Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beyond{' '}
            <span className="text-gradient italic">UGC</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We offer a full suite of digital marketing services to help your brand grow online and offline.
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="service-card group p-6 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color} transition-transform duration-300 group-hover:scale-110`}>
                <service.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
