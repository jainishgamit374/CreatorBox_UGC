import { useEffect, useRef } from 'react';
import { Video, Users, Star, TrendingUp } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { icon: Video, value: 500, suffix: '+', label: 'UGC Videos Delivered', color: 'text-primary' },
  { icon: Users, value: 100, suffix: '+', label: 'Brands Served', color: 'text-secondary' },
  { icon: Star, value: 50, suffix: '+', label: 'iGC Creators', color: 'text-accent' },
  { icon: TrendingUp, value: 3, suffix: 'x', label: 'Avg. Engagement Boost', color: 'text-primary' },
];

function StatCard({ icon: Icon, value, suffix, label, color }: typeof stats[0]) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="stat-card flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 ${color}`}>
        <Icon size={22} />
      </div>
      <div className={`text-4xl md:text-5xl font-bold font-display mb-2 ${color}`}>
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx: gsap.Context;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.stat-card').forEach((card, i) => {
          gsap.from(card, {
            y: 50, opacity: 0, scale: 0.95, duration: 0.7, delay: i * 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true },
          });
        });
      }, containerRef);
    });
    return () => { cancelAnimationFrame(rafId); ctx?.revert(); };
  }, []);

  return (
    <section className="section-padding bg-light" aria-label="Statistics">
      <div className="container-custom">
        <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
