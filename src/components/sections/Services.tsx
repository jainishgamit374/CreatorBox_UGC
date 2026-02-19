import { motion } from 'framer-motion';
import {
  Search, MousePointerClick, FileText, Share2, Mail, BarChart3
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with data-driven SEO strategies that drive organic traffic and sustainable growth.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: MousePointerClick,
    title: 'PPC Advertising',
    description: 'Maximize ROI with precision-targeted pay-per-click campaigns across Google, Meta, and beyond.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Craft compelling content that resonates with your audience, builds authority, and converts readers into customers.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Build a thriving social presence with strategic content, community management, and paid social campaigns.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Mail,
    title: 'Email Campaigns',
    description: 'Design high-converting email sequences that nurture leads, retain customers, and drive revenue.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Turn data into actionable insights with comprehensive analytics dashboards and performance reports.',
    color: 'bg-accent/10 text-accent',
  },
];

export default function Services() {
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
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I can do for{' '}
            <span className="text-gradient italic">you</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Comprehensive digital marketing solutions tailored to your business goals and growth ambitions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-6 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
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
