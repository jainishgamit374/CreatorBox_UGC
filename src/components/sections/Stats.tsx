import { Users, TrendingUp, Star, Award } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, value: 150, suffix: '+', label: 'Happy Clients', color: 'text-primary' },
  { icon: TrendingUp, value: 2, prefix: '$', suffix: 'M+', label: 'Revenue Generated', color: 'text-secondary' },
  { icon: Star, value: 98, suffix: '%', label: 'Satisfaction Rate', color: 'text-accent' },
  { icon: Award, value: 7, suffix: '+', label: 'Years Experience', color: 'text-primary' },
];

function StatCard({ icon: Icon, value, suffix, prefix, label, color, index }: typeof stats[0] & { index: number }) {
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
        {prefix}{count}{suffix}
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
