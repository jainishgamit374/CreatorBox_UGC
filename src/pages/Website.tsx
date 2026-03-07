import { useLenis } from '@/hooks/useUtils';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Palette, Smartphone, Globe, Zap, BarChart3, CheckCircle2, Star, Mail, Send, Terminal, Layout, Settings } from 'lucide-react';
import { useState, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL",
  "Framer Motion", "GSAP", "AWS", "Vercel", "GraphQL", "Supabase"
];

const services = [
  { icon: Globe, title: 'Web Architecture', description: 'Scalable, high-performance web applications built on modern frameworks.' },
  { icon: Code, title: 'Frontend Systems', description: 'Pixel-perfect, component-driven UI development with React & TypeScript.' },
  { icon: Palette, title: 'UX/UI Engineering', description: 'Bridging the gap between beautiful design and flawless technical execution.' },
  { icon: Zap, title: 'Performance Tuning', description: 'Sub-second load times, Core Web Vitals optimization, and asset delivery.' },
  { icon: Smartphone, title: 'Responsive Design', description: 'Flawless experiences across every screen size, device, and browser.' },
  { icon: BarChart3, title: 'Conversion Systems', description: 'Data-driven architectures designed specifically to turn traffic into revenue.' },
];

const projects = [
  { title: 'The Artisan Cafe', category: 'Local Business', description: 'Complete digital presence and ordering system for a boutique coffee roaster.', color: 'from-primary/20 to-secondary/20' },
  { title: 'Elevate Events', category: 'Event Management', description: 'High-converting booking platform and portfolio for an elite event management firm.', color: 'from-secondary/20 to-accent/20' },
  { title: 'Aura Skincare', category: 'D2C Product', description: 'Stunning e-commerce storefront for a premium organic skincare line, focusing on UGC.', color: 'from-accent/20 to-primary/20' },
  { title: 'Nexus Tech Solutions', category: 'B2B Services', description: 'Professional corporate website demonstrating authority and driving qualified leads.', color: 'from-primary/10 to-secondary/10' },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    initials: "SJ",
    quote: "The architecture he built scaled effortlessly to 100k daily active users. Highly recommend his system design expertise."
  },
  {
    name: "Marcus Chen",
    role: "Founder, Elevate",
    initials: "MC",
    quote: "Delivered our complex Fintech dashboard weeks ahead of schedule. The code quality is immaculate."
  },
  {
    name: "Jessica Walsh",
    role: "VP Eng, Nexus",
    initials: "JW",
    quote: "Our Google Lighthouse scores went from 40 to 99 after his performance tuning. Incredible results."
  }
];


const pricingPlans = [
  {
    name: 'Landing Page',
    price: '₹25,000',
    description: 'High-converting single page build',
    features: ['Custom Design & Development', 'Advanced Animations', 'SEO Optimization', 'Contact Forms & API', '2 revision rounds', '7-day delivery'],
  },
  {
    name: 'Web Platform',
    price: '₹80,000',
    description: 'Full-scale scalable website',
    features: ['Up to 10 unique pages', 'CMS Integration (Sanity/Strapi)', 'Complex UI/UX Interactions', 'Analytics & Tracking Setup', 'Performance Guarantee', '14-day delivery'],
    popular: true,
  },
  {
    name: 'SaaS / App Build',
    price: 'Custom',
    description: 'Complex web applications',
    features: ['Custom Web Architecture', 'Database & Auth Systems', '3rd Party API Integrations', 'Real-time Features', 'Admin Dashboards', 'Priority Support'],
  },
];

function WebsiteAnimatedTitle() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["scale businesses.", "wow investors.", "convert traffic.", "win awards.", "run lightning fast."],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2800);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <h1 className="font-display text-5xl sm:text-7xl md:text-[5.5rem] font-bold text-foreground tracking-tight mb-8 leading-[1.05]">
      I build digital experiences that{' '}
      <br className="hidden md:block" />
      <span className="relative inline-flex w-full overflow-hidden h-[1.2em] mt-2 md:mt-4 text-primary">
        <AnimatePresence mode="wait">
          {titles.map((title, index) =>
            index === titleNumber ? (
              <motion.span
                key={index}
                className="absolute inset-0 block italic"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, rotateX: 90 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
                style={{ transformOrigin: "center center" }}
              >
                {title}
              </motion.span>
            ) : null
          )}
        </AnimatePresence>
      </span>
    </h1>
  );
}

export default function Website() {
  useLenis();
  const [contactEmail, setContactEmail] = useState('');
  const [contactSent, setContactSent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Add light theme class to root
    document.documentElement.classList.remove('dark');

    const ctx = gsap.context(() => {
      // Parallax blobs
      gsap.to('.hero-blob', {
        y: (i) => (i + 1) * -100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Reveal cards
      gsap.utils.toArray<HTMLElement>('.reveal-card').forEach((card, i) => {
        gsap.from(card, {
          y: 60, opacity: 0, scale: 0.95, duration: 0.8, delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background font-sans selection:bg-primary/30 text-foreground">
      <Navbar />

      <main className="pt-20">
        {/* PREMIUM DARK HERO */}
        <section className="hero-section relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Portfolio hero">
          {/* Ambient Backgrounds */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="hero-blob absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="hero-blob absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]" />

            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="container-custom relative z-10 pt-20 pb-32">
            <div className="max-w-5xl">
              <motion.div variants={stagger} initial="hidden" animate="show">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-md mb-8">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
                  <span className="text-sm font-medium text-muted-foreground tracking-wide">
                    Available for new projects
                  </span>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <WebsiteAnimatedTitle />
                </motion.div>

                <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12 font-light">
                  I'm a senior software engineer specializing in high-performance web applications, beautiful UI systems, and architectures built to scale. From <span className="font-medium text-foreground">Figma prototypes</span> to production code.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
                  <a href="#contact-section" className="group relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <span className="relative flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      Start a Project
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  <a href="#projects" className="group">
                    <span className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base text-foreground border border-border bg-background hover:bg-muted transition-all duration-300">
                      View Architecture
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INFINITE TECH MARQUEE */}
        <div className="py-10 border-y border-border bg-muted/30 backdrop-blur-xl overflow-hidden flex relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex whitespace-nowrap gap-16 px-8 items-center"
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <span key={i} className="text-2xl md:text-3xl font-sans font-bold text-muted-foreground uppercase tracking-widest flex-shrink-0">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* THE EXPERT ADVANTAGE - BENTO BOX GRID */}
        <section className="py-32 relative" id="about">
          <div className="container-custom">
            <div className="mb-16">
              <h2 className="font-sans tracking-tighter text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Technical <span className="text-primary italic">Advantage</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">From pixel-perfect Figma designs to scalable code.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              {/* Box 1 - Big Stat */}
              <div className="reveal-card md:col-span-2 rounded-[2rem] bg-card border border-border p-10 flex flex-col justify-between relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <div>
                  <div className="text-6xl font-sans tracking-tighter font-bold text-foreground mb-2">30+ Years</div>
                  <div className="text-muted-foreground text-lg">Combined engineering experience across modern tech stacks.</div>
                </div>
              </div>

              {/* Box 2 - Figma/Design */}
              <div className="reveal-card rounded-[2rem] bg-card border border-border p-10 flex flex-col justify-between group shadow-sm">
                <Palette className="w-8 h-8 text-secondary mb-4" />
                <div>
                  <div className="text-4xl font-sans tracking-tighter font-bold text-foreground mb-2">Figma First</div>
                  <div className="text-muted-foreground">We prototype everything in Figma before writing a single line of code.</div>
                </div>
              </div>

              {/* Box 3 - Architecture */}
              <div className="reveal-card rounded-[2rem] bg-card border border-border p-10 flex flex-col justify-between group shadow-sm">
                <Layout className="w-8 h-8 text-primary mb-4" />
                <div>
                  <div className="text-2xl font-bold text-foreground mb-2">Clean Architecture</div>
                  <div className="text-muted-foreground text-sm">Modular, maintainable, and type-safe codebases built to scale.</div>
                </div>
              </div>

              {/* Box 4 - Systems */}
              <div className="reveal-card md:col-span-2 rounded-[2rem] bg-card border border-border p-10 flex flex-col justify-between relative overflow-hidden group shadow-sm">
                <Settings className="w-8 h-8 text-secondary mb-4 relative z-10" />
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-foreground mb-3">End-to-End Systems</div>
                  <div className="text-muted-foreground text-lg max-w-md">From raw database design to beautifully animated frontend interfaces—handling the entire stack.</div>
                </div>
                {/* Decorative Code bg */}
                <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity font-mono text-xs leading-loose pointer-events-none select-none text-foreground">
                  {`const buildSystem = async () => {\n  await optimize();\n  deploy(world);\n}`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES (Glowing Minimal Cards) */}
        <section className="py-24 border-t border-border bg-muted/30" id="services-section">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={service.title} className="reveal-card group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors duration-500 cursor-default shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding bg-background border-t border-border" aria-label="Projects" id="projects">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Projects</span>
              </div>
              <h2 className="font-sans tracking-tighter text-4xl md:text-5xl font-bold text-foreground mb-4">
                Selected{' '}<span className="text-primary italic">work</span>
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
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 shadow-sm"
                >
                  <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <Code size={40} className="text-primary/50 group-hover:text-primary transition-colors" />
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
        <section className="section-padding bg-muted/30 border-t border-border" aria-label="Client testimonials">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Testimonials</span>
              </div>
              <h2 className="font-sans tracking-tighter text-4xl md:text-5xl font-bold text-foreground mb-4">
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
                  className="p-6 rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="text-primary font-bold text-xs">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-background border-t border-border" aria-label="Pricing" id="pricing">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Pricing</span>
                <span className="w-8 h-0.5 bg-primary" />
              </div>
              <h2 className="font-sans tracking-tighter text-4xl md:text-5xl font-bold text-foreground mb-4">
                Simple, transparent{' '}<span className="text-primary italic">pricing</span>
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
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${plan.popular
                    ? 'border-primary bg-card shadow-xl shadow-primary/5 scale-[1.02]'
                    : 'border-border bg-card/50 hover:border-primary/30'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-sans tracking-tighter text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold font-sans tracking-tighter text-primary mb-6">{plan.price}</div>
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
                    className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'
                      : 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
                      }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>

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
        <section className="section-padding bg-muted/30 border-t border-border" aria-label="Contact" id="contact-section">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-0.5 bg-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-widest">Contact</span>
                  <span className="w-8 h-0.5 bg-primary" />
                </div>
                <h2 className="font-sans tracking-tighter text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Let's work{' '}<span className="text-primary italic">together</span>
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
                        className="flex-1 px-5 py-3 rounded-full border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary shadow-sm"
                      />
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors flex-shrink-0 shadow-sm"
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
