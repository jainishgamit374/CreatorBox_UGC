import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 14999,
    yearlyPrice: 11999,
    description: 'Perfect for small businesses ready to establish their digital presence.',
    features: [
      'SEO Audit & Setup',
      '2 Blog Posts / Month',
      'Social Media Management (2 platforms)',
      'Monthly Analytics Report',
      'Email Support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    monthlyPrice: 29999,
    yearlyPrice: 23999,
    description: 'Ideal for growing businesses that need comprehensive marketing support.',
    features: [
      'Everything in Starter',
      'PPC Campaign Management',
      '6 Blog Posts / Month',
      'Email Campaign (2/month)',
      'Social Media (4 platforms)',
      'Weekly Analytics Reports',
      'Priority Support',
    ],
    cta: 'Most Popular',
    featured: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 49999,
    yearlyPrice: 39999,
    description: 'Full-service marketing partner for established brands scaling fast.',
    features: [
      'Everything in Growth',
      'Dedicated Strategy Sessions',
      'Custom Content Production',
      'PR & Influencer Outreach',
      'Full Analytics Dashboard',
      'Conversion Rate Optimization',
      'Slack / Direct Access',
    ],
    cta: "Let's Talk",
    featured: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-light" aria-label="Pricing">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Pricing</span>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent{' '}
            <span className="text-gradient italic">pricing</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            No hidden fees. Cancel anytime. Choose the plan that fits your growth stage.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-white rounded-full border border-border shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              Yearly
              <span className="text-xs font-bold bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl border p-8 ${
                plan.featured
                  ? 'bg-primary border-primary shadow-xl shadow-primary/20 text-primary-foreground scale-105'
                  : 'bg-white border-border hover:border-primary/30 hover:shadow-md transition-all duration-300'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                  <Zap size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.featured ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <motion.div
                  key={isYearly ? 'yearly' : 'monthly'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-1"
                >
                  <span className={`text-4xl font-bold font-display ${plan.featured ? 'text-white' : 'text-foreground'}`}>
                    ₹{(isYearly ? plan.yearlyPrice : plan.monthlyPrice).toLocaleString('en-IN')}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.featured ? 'text-white/60' : 'text-muted-foreground'}`}>/mo</span>
                </motion.div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check
                      size={16}
                      className={`flex-shrink-0 ${plan.featured ? 'text-white' : 'text-secondary'}`}
                    />
                    <span className={plan.featured ? 'text-white/80' : 'text-muted-foreground'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block text-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.featured
                    ? 'bg-white text-primary hover:bg-white/90 shadow-sm'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
