import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What is UGC and why does my brand need it?',
    a: 'UGC (User Generated Content) is authentic content created by real people — not polished studio ads. It builds trust, improves engagement, and performs better in paid campaigns because audiences relate to it.',
  },
  {
    q: 'What is iGC content?',
    a: 'iGC stands for In-house / Influencer Generated Content. Our iGC creators visit your physical store or location and create authentic content from the real customer experience.',
  },
  {
    q: 'How much does UGC cost?',
    a: 'Our UGC plans start from ₹999. We offer both monthly packages and one-time options depending on your needs. Check our pricing page for detailed plans.',
  },
  {
    q: 'How long does delivery take?',
    a: 'For local brands: 7–12 days from the store visit. For online/D2C brands: 7–14 days from when we assign a creator. Rush delivery options available.',
  },
  {
    q: 'Do I get usage rights for the content?',
    a: 'Yes! Full usage rights are included with all our plans. You can use the content for ads, social media, website, and any marketing purpose.',
  },
  {
    q: 'Do creators need to have a lot of followers?',
    a: 'No. UGC is about authentic content quality, not follower counts. Our creators are trained for content creation, not influencing. That said, our iGC creators often have decent followings as a bonus.',
  },
  {
    q: 'Can UGC guarantee sales?',
    a: 'UGC improves trust, engagement, and ad performance — but sales depend on your complete funnel (ads, offer, landing page, etc). We help with the content layer. Paid ads can accelerate results.',
  },
  {
    q: 'What types of businesses do you work with?',
    a: 'We work with cafés, restaurants, salons, gyms, clinics, real estate, coaching centers (local brands), and skincare, fashion, electronics, apps, courses, and SaaS (online brands).',
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-white" aria-label="Frequently asked questions">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
              Everything you need to know about UGC and working with CreatorBox.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
            >
              Ask us directly →
            </a>
          </motion.div>

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
