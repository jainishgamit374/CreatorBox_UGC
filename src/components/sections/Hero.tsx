import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-light"
      aria-label="Hero section"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/10 blob-animation" />
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-secondary/10 blob-animation-delay" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-accent/10 blob-animation-delay-2" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Available for new projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.9] tracking-tight mb-6"
          >
            Jane
            <br />
            <span className="text-gradient italic">Doe</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 font-light"
          >
            Digital Marketing Strategist · Growth Hacker · Brand Storyteller
            <br />
            <span className="text-foreground/80 font-medium">
              Turning ideas into impactful digital experiences.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll('#portfolio')}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              View My Work
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <MessageCircle size={18} />
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-6 mt-16 pt-8 border-t border-border"
          >
            <div className="flex -space-x-3">
              {['A', 'B', 'C', 'D'].map((letter) => (
                <div
                  key={letter}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xs font-bold text-foreground"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">150+ Happy Clients</div>
              <div className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐ 4.9/5 average rating</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
