import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const rows = [
  { feature: 'Local + Online Focus', us: true, others: 'Mostly Online Only' },
  { feature: 'iGC + Professional Creators', us: true, others: 'Freelancers Only' },
  { feature: 'Store Visits Available', us: true, others: 'Rare' },
  { feature: 'Pricing from ₹999', us: true, others: '₹5,000+ per video' },
  { feature: 'Usage Rights Included', us: true, others: 'Limited' },
  { feature: 'No Follower Requirement', us: true, others: 'Follower Requirement' },
  { feature: 'Clear Deliverables', us: true, others: 'Hidden Conditions' },
];

export default function ComparisonTable() {
  return (
    <section className="section-padding bg-white" aria-label="Comparison">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Why Us</span>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Us vs Other{' '}
            <span className="text-gradient italic">UGC Agencies</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="overflow-hidden rounded-2xl border border-border">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted">
              <div className="p-4 text-sm font-semibold text-foreground">Feature</div>
              <div className="p-4 text-sm font-semibold text-primary text-center">CreatorBox</div>
              <div className="p-4 text-sm font-semibold text-muted-foreground text-center">Others</div>
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-muted/50'} border-t border-border`}
              >
                <div className="p-4 text-sm text-foreground font-medium">{row.feature}</div>
                <div className="p-4 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check size={14} className="text-secondary" />
                  </div>
                </div>
                <div className="p-4 text-sm text-muted-foreground text-center flex items-center justify-center gap-1">
                  <X size={14} className="text-destructive/60 flex-shrink-0" />
                  <span>{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
