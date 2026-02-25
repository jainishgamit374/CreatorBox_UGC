import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Eye, Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { useLenis } from '@/hooks/useUtils';
import Navbar from '@/components/sections/Navbar';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const categories = ['Café', 'Restaurant', 'Salon', 'Gym', 'Clinic', 'Real Estate', 'Coaching'];

const bestWork = [
  { title: 'Café Reel — Walk-in Vibe', category: 'Café', goal: 'Discovery', platform: 'Instagram' },
  { title: 'Salon Transformation', category: 'Salon', goal: 'Engagement', platform: 'Instagram' },
  { title: 'Gym Tour UGC', category: 'Gym', goal: 'Visibility', platform: 'YouTube Shorts' },
  { title: 'Clinic Testimonial', category: 'Clinic', goal: 'Trust', platform: 'Instagram' },
  { title: 'Restaurant Food Reel', category: 'Restaurant', goal: 'Walk-ins', platform: 'Instagram' },
  { title: 'Coaching Center Ad', category: 'Coaching', goal: 'Leads', platform: 'Meta Ads' },
];

const expectedResults = [
  { week: 'Week 1', title: 'Brand Visibility', description: 'Your content starts reaching local audiences through organic discovery.', icon: Eye },
  { week: 'Week 2', title: 'Profile Visits & Discovery', description: 'People start visiting your profile, searching your location, and exploring.', icon: Users },
  { week: 'Week 3–4', title: 'Engagement Growth', description: 'Meaningful engagement builds — DMs, saves, shares, and foot traffic.', icon: TrendingUp },
];

export default function LocalBrands() {
  const [search, setSearch] = useState('');
  useLenis();

  const filteredCategories = categories.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-20 bg-light overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-primary/10 blob-animation" />
            <div className="absolute bottom-10 right-0 w-64 h-64 rounded-full bg-secondary/10 blob-animation-delay" />
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">For Local Brands</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6">
                UGC for your{' '}
                <span className="text-gradient italic">local store</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
                We send iGC creators to your café, salon, gym, or shop for real store-visit content that drives foot traffic and builds trust.
              </p>

              {/* Search */}
              <div className="relative max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search your business type (café, salon, gym…)"
                  className="w-full pl-11 pr-4 py-4 rounded-full border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {filteredCategories.map((cat) => (
                  <span
                    key={cat}
                    className="px-4 py-2 text-sm font-medium bg-white border border-border rounded-full hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Best UGC Work */}
        <section className="section-padding bg-white" aria-label="Best UGC work">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Best UGC Work</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Top-performing{' '}
                <span className="text-gradient italic">content</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Auto-play reels showing our best content with category, goal, and platform overlay.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestWork.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative aspect-[9/16] max-h-[360px] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-border overflow-hidden cursor-default"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">▶</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
                    <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{item.category}</span>
                      <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{item.goal}</span>
                      <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{item.platform}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section className="section-padding bg-light" aria-label="Expected results">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Expected Results</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                What to expect in{' '}
                <span className="text-gradient italic">30 days</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {expectedResults.map((item, i) => (
                <motion.div
                  key={item.week}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-border"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.week}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Note:</span> Organic UGC builds steadily. Paid ads can accelerate results.
              </p>
            </div>
          </div>
        </section>

        {/* Who Creates */}
        <section className="section-padding bg-white" aria-label="Who creates the content">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Creators</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Who creates the{' '}
                  <span className="text-gradient italic">content</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Created by our <span className="font-semibold text-foreground">iGC (In-house / Influencer Creators)</span> using
                  real store visits and collaborations. They know how to capture the vibe, energy, and authenticity of your space.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Real Store Visits', 'Trained Creators', 'Local Knowledge', 'Authentic Content'].map((tag) => (
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
                className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-6xl mb-3">🎬</div>
                  <p className="text-muted-foreground text-sm">Creator photos here</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-16 bg-gradient-to-r from-primary via-primary/90 to-primary/70" aria-label="Pricing preview">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                  UGC plans start from <span className="underline decoration-white/50">₹999</span>
                </h2>
                <p className="text-white/80 text-lg">
                  Monthly and one-time options available. No hidden fees.
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex-shrink-0"
              >
                Book a Free Store Visit Call
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </section>

        <ProcessTimeline variant="local" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
