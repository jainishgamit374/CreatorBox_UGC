import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const btsItems = [
  { label: 'Café Shoot', gradient: 'from-primary/20 to-accent/10' },
  { label: 'Product Unboxing', gradient: 'from-secondary/20 to-primary/10' },
  { label: 'Creator Collab', gradient: 'from-accent/20 to-secondary/10' },
  { label: 'Store Visit', gradient: 'from-primary/30 to-secondary/5' },
  { label: 'Reel Setup', gradient: 'from-accent/10 to-primary/20' },
  { label: 'On Location', gradient: 'from-secondary/10 to-accent/20' },
];

export default function BehindTheScenes() {
  return (
    <section className="section-padding bg-light" aria-label="Behind the scenes">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Behind The Scenes</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real work,{' '}
            <span className="text-gradient italic">real creators</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A look at our shoots, creators, and on-location work that builds trust and delivers results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {btsItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`relative aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} border border-border overflow-hidden group cursor-default`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera size={32} className="text-foreground/20 group-hover:text-primary/40 transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/10 to-transparent">
                <span className="text-sm font-semibold text-foreground/70">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
