import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How long does it take to see results from SEO?',
    a: 'SEO is a long-term investment. Most clients start seeing measurable improvements in organic traffic and rankings within 3-6 months. However, the exact timeline depends on your current site authority, competition level, and the scope of work involved.',
  },
  {
    q: 'What is your typical PPC campaign setup process?',
    a: 'I begin with a thorough audit of your goals, target audience, and competitors. From there I build the campaign architecture, write compelling ad copy, set up conversion tracking, and launch. The first 30 days are dedicated to data collection and optimization.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'No! All plans are month-to-month with no long-term commitment required. That said, marketing works best as a sustained effort, and I encourage clients to commit to at least 3-6 months to see meaningful results.',
  },
  {
    q: 'What industries do you specialize in?',
    a: "I've worked across 50+ industries including SaaS, e-commerce, professional services, healthcare, real estate, and more. My methodology adapts to any industry — what matters most is understanding your specific audience and competitive landscape.",
  },
  {
    q: 'How do you measure and report campaign performance?',
    a: 'I set up custom dashboards tracking the KPIs that matter to your business — traffic, conversions, cost per acquisition, ROAS, and more. You receive detailed monthly reports (weekly on Growth/Enterprise plans) with insights and clear next steps.',
  },
  {
    q: 'Can you work with my existing marketing team?',
    a: 'Absolutely. Many of my clients have in-house marketing teams and I slot in as a specialist or strategic advisor. I collaborate closely with your team to ensure alignment and share knowledge so your team grows along the way.',
  },
  {
    q: 'What budget do you recommend for PPC advertising?',
    a: "Ad spend is separate from my management fee. For Google Ads, I recommend a minimum of $1,500-$3,000/month to gather meaningful data. For social ads, $1,000+/month is a good starting point. I'll give you a tailored recommendation based on your goals.",
  },
  {
    q: 'How do I get started?',
    a: "Simple — just reach out via the contact form below or book a free 30-minute strategy call. We'll discuss your goals, challenges, and I'll outline exactly how I can help you grow.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-white" aria-label="Frequently asked questions">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Got{' '}
              <span className="text-gradient italic">questions?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Here are the most common questions I get from potential clients. Don't see yours? Just reach out directly.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              Ask me directly →
            </a>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border rounded-xl px-4 py-1 hover:border-primary/30 transition-colors data-[state=open]:border-primary/40 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
