import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Video, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLenis } from '@/hooks/useUtils';
import Navbar from '@/components/sections/Navbar';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const niches = ['Skincare', 'Fashion', 'Electronics', 'Amazon', 'App', 'Course', 'SaaS'];

const contentTypes = [
  {
    title: 'Product Demos',
    description: 'Authentic product unboxing and demo videos that showcase your product in real-life usage.',
    icon: Video,
  },
  {
    title: 'Voice-over UGC',
    description: 'Professional voice-over content that explains benefits while showing the product in action.',
    icon: Zap,
  },
  {
    title: 'Ad-style Reels',
    description: 'Short-form reels optimized for Meta Ads, Google Ads, and organic social media performance.',
    icon: Globe,
  },
];

const ugcBenefits = [
  { title: 'Build Trust', description: 'Real people using your product builds instant credibility with potential customers.' },
  { title: 'Ad-Ready Creatives', description: 'Get videos that are optimized for paid ad campaigns from day one.' },
  { title: 'Better Engagement & CTR', description: 'UGC consistently outperforms studio content in click-through and engagement rates.' },
];

export default function OnlineBrands() {
  const [search, setSearch] = useState('');
  useLenis();

  const filteredNiches = niches.filter((n) =>
    n.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-20 bg-light overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-secondary/10 blob-animation" />
            <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-accent/10 blob-animation-delay" />
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <Globe size={16} className="text-secondary" />
                <span className="text-sm font-medium text-secondary uppercase tracking-widest">For Online / D2C Brands</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6">
                UGC for your{' '}
                <span className="text-gradient italic">online brand</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
                Product demos, voice-over UGC, and ad-style reels for organic and paid campaigns — built for D2C brands across India.
              </p>

              {/* Search */}
              <div className="relative max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search your niche (skincare, fashion, app…)"
                  className="w-full pl-11 pr-4 py-4 rounded-full border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/10 transition-all"
                />
              </div>

              {/* Niche pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {filteredNiches.map((niche) => (
                  <span
                    key={niche}
                    className="px-4 py-2 text-sm font-medium bg-white border border-border rounded-full hover:border-secondary/40 hover:text-secondary transition-colors cursor-default"
                  >
                    {niche}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* UGC Content Types */}
        <section className="section-padding bg-white" aria-label="UGC content types">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-secondary" />
                <span className="text-sm font-medium text-secondary uppercase tracking-widest">Content Types</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                UGC formats that{' '}
                <span className="text-gradient italic">convert</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {contentTypes.map((type, i) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-6 bg-light rounded-2xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <type.icon size={22} className="text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What UGC Helps Achieve */}
        <section className="section-padding bg-light" aria-label="What UGC achieves">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-secondary" />
                <span className="text-sm font-medium text-secondary uppercase tracking-widest">Why UGC</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                What UGC helps{' '}
                <span className="text-gradient italic">achieve</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {ugcBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-border"
                >
                  <ShieldCheck size={24} className="text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Note:</span> Sales depend on ads, offer, and funnel. UGC improves conversion quality.
              </p>
            </div>
          </div>
        </section>

        {/* Creators */}
        <section className="section-padding bg-white" aria-label="Creators">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-secondary" />
                  <span className="text-sm font-medium text-secondary uppercase tracking-widest">Creators</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Professional UGC{' '}
                  <span className="text-gradient italic">creators</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Professional paid UGC creators selected by niche and audience. Each creator is matched to your brand's tone, product category, and target demographic. <span className="font-semibold text-foreground">Full usage rights included.</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Niche-Matched', 'Usage Rights', 'Ad Optimized', 'Quick Turnaround'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-full border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square rounded-3xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-border flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-6xl mb-3">📸</div>
                  <p className="text-muted-foreground text-sm">Creator showcase here</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-16 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/70" aria-label="Pricing preview">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                  UGC plans start from <span className="underline decoration-white/50">₹1,999</span>
                </h2>
                <p className="text-white/80 text-lg">
                  Ad-ready UGC delivered fast. Usage rights included.
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-full font-bold text-base hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex-shrink-0"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </section>

        <ProcessTimeline variant="online" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
