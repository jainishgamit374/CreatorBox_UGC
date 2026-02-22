import { Video, Users, Star, TrendingUp } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';

const stats = [
  { icon: Video, value: 500, suffix: '+', label: 'UGC Videos Delivered', color: 'text-primary' },
  { icon: Users, value: 100, suffix: '+', label: 'Brands Served', color: 'text-secondary' },
  { icon: Star, value: 50, suffix: '+', label: 'iGC Creators', color: 'text-accent' },
  { icon: TrendingUp, value: 3, suffix: 'x', label: 'Avg. Engagement Boost', color: 'text-primary' },
];

function StatCard({ icon: Icon, value, suffix, label, color, index }: typeof stats[0] & { index: number }) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300"
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
  return (
    <section className="section-padding bg-light" aria-label="Statistics">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
