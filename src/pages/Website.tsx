import { useLenis } from '@/hooks/useUtils';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Smartphone, Globe, Zap, BarChart3, CheckCircle2, Star, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const services = [
  { icon: Globe, title: 'Website Design & Development', description: 'Modern, responsive websites that convert visitors into customers. From landing pages to full web apps.' },
  { icon: Code, title: 'Frontend Development', description: 'Clean, performant code using React, TypeScript, and Tailwind CSS. Pixel-perfect builds from any design.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Intuitive interfaces and user experiences that delight users and drive engagement metrics.' },
  { icon: Smartphone, title: 'Responsive & Mobile-First', description: 'Every project is built mobile-first, ensuring flawless experience across all devices and screen sizes.' },
  { icon: Zap, title: 'Performance Optimization', description: 'Lightning-fast load times, SEO optimization, and Core Web Vitals tuning for maximum visibility.' },
  { icon: BarChart3, title: 'Analytics & CRO', description: 'Data-driven conversion rate optimization to turn your traffic into revenue.' },
];

const projects = [
  { title: 'E-Commerce Platform', category: 'Web App', description: 'Full-stack e-commerce with real-time inventory, payment processing, and admin dashboard.' },
  { title: 'SaaS Dashboard', category: 'Dashboard', description: 'Analytics dashboard for a B2B SaaS product with interactive charts and user management.' },
  { title: 'Brand Website', category: 'Website', description: 'Premium brand website with scroll animations, CMS integration, and lead capture.' },
  { title: 'Mobile-First App', category: 'Web App', description: 'Progressive web app with offline capabilities, push notifications, and native feel.' },
  { title: 'Portfolio & Blog', category: 'Website', description: 'Creative portfolio with headless CMS, dynamic routing, and SEO optimization.' },
  { title: 'Landing Page System', category: 'Marketing', description: 'High-converting landing page templates with A/B testing and analytics.' },
];

const testimonials = [
  { name: 'Arjun Patel', role: 'Founder, TechStart', quote: 'Exceptional work. Our website conversion rate jumped 40% after the redesign. Clean code, fast delivery.', initials: 'AP' },
  { name: 'Meera Singh', role: 'CEO, StyleHive', quote: 'They understood our vision perfectly and delivered a website that truly represents our brand. Highly recommend.', initials: 'MS' },
  { name: 'Vikram Rao', role: 'CTO, DataFlow', quote: 'The dashboard they built handles complex data visualizations effortlessly. Performance is outstanding.', initials: 'VR' },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹15,000',
    description: 'Perfect for landing pages and simple sites',
    features: ['Single page website', 'Responsive design', 'Basic SEO setup', 'Contact form', '2 revision rounds', '7-day delivery'],
  },
  {
    name: 'Professional',
    price: '₹40,000',
    description: 'For growing businesses that need more',
    features: ['Multi-page website (up to 8)', 'Custom animations', 'CMS integration', 'Advanced SEO', 'Analytics setup', '5 revision rounds', '14-day delivery'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale web applications & platforms',
    features: ['Unlimited pages', 'Web app development', 'API integrations', 'Admin dashboard', 'Performance optimization', 'Ongoing support', 'Priority delivery'],
  },
];

export default function Website() {
  useLenis();
  const [contactEmail, setContactEmail] = useState('');
  const [contactSent, setContactSent] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-light" aria-label="Portfolio hero">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/5" />
            <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-secondary/5" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="container-custom relative z-10 pt-24 pb-16">
            <motion.div className="max-w-4xl" variants={stagger} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                  Freelance Web Developer
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
                I build websites that
                <br />
                <span className="text-gradient italic">look great & convert</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-light">
                Modern, minimal, and high-performing websites for brands that care about quality.
                From concept to code — pixel-perfect execution every time.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href="#projects">
                  <motion.span
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-lg shadow-primary/20"
                  >
                    View My Work
                    <ArrowRight size={18} />
                  </motion.span>
                </a>
                <a href="#contact-section">
                  <motion.span
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Get In Touch
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section className="section-padding bg-background" aria-label="About" id="about">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-widest">About</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Crafting digital{' '}
                  <span className="text-gradient italic">experiences</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a freelance web developer specializing in modern, performant websites and web applications. 
                  With a focus on clean code and thoughtful design, I help brands create digital experiences that 
                  stand out and deliver results.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every project is approached with a commitment to quality — from responsive layouts and smooth 
                  animations to SEO optimization and fast load times. I work closely with clients to ensure 
                  their vision comes to life exactly as imagined.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: '50+', label: 'Projects' },
                    { value: '3+', label: 'Years Exp.' },
                    { value: '100%', label: 'Satisfaction' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold font-display text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="font-display text-xl font-bold text-foreground">Full-Stack Developer</p>
                      <p className="text-sm text-muted-foreground mt-2">React · TypeScript · Tailwind · Node.js</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-secondary/10 border border-secondary/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-light" aria-label="Services" id="services-section">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Services</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                What I{' '}<span className="text-gradient italic">offer</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">End-to-end web solutions — from design to deployment.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding bg-background" aria-label="Projects" id="projects">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Projects</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Selected{' '}<span className="text-gradient italic">work</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">A curated selection of recent projects across various industries.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-light hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                    <Code size={40} className="text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-foreground" aria-label="Client testimonials">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Testimonials</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-background mb-4">
                Client{' '}<span className="italic text-primary">feedback</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="p-6 rounded-2xl border border-background/10 bg-background/5"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-background/70 leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <span className="text-primary font-bold text-xs">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-background text-sm">{t.name}</div>
                      <div className="text-xs text-background/50">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-light" aria-label="Pricing" id="pricing">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Pricing</span>
                <span className="w-8 h-0.5 bg-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Simple, transparent{' '}<span className="text-gradient italic">pricing</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">Choose a plan that fits your needs. All plans include quality code and on-time delivery.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? 'border-primary bg-background shadow-xl shadow-primary/10 scale-[1.02]'
                      : 'border-border bg-background hover:border-primary/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold font-display text-primary mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact-section"
                    className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'
                        : 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Limited offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/5">
                <Zap size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">
                  🎉 <span className="font-semibold">Launch Offer:</span> 20% off on all plans for first-time clients
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="section-padding bg-background" aria-label="Contact" id="contact-section">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-widest">Contact</span>
                  <span className="w-8 h-0.5 bg-primary" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Let's work{' '}<span className="text-gradient italic">together</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  Have a project in mind? Drop your email and I'll get back to you within 24 hours.
                </p>

                <div className="flex items-center gap-6 justify-center mb-10">
                  {[
                    { icon: Mail, value: 'hello@revougc.com' },
                  ].map(({ icon: Icon, value }) => (
                    <div key={value} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (contactEmail) {
                      setContactSent(true);
                      setContactEmail('');
                    }
                  }}
                  className="flex gap-3 max-w-md mx-auto"
                >
                  {contactSent ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-primary text-sm font-medium py-3 w-full"
                    >
                      ✓ Thanks! I'll be in touch soon.
                    </motion.div>
                  ) : (
                    <>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="flex-1 px-5 py-3 rounded-full border border-border bg-light text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors flex-shrink-0"
                      >
                        <Send size={14} />
                        Send
                      </motion.button>
                    </>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
