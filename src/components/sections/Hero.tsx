import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

export default function Hero() {
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax blobs on mouse move
    const handleMove = (e: MouseEvent) => {
      if (!blobsRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      gsap.to(blobsRef.current.children, {
        x: (i) => x * (i + 1) * 0.4,
        y: (i) => y * (i + 1) * 0.3,
        duration: 1.2,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-light"
      aria-label="Hero section"
    >
      {/* Animated blobs with parallax */}
      <div ref={blobsRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
        <motion.div
          className="max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              UGC Agency for Indian Brands
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight mb-6"
          >
            Authentic UGC for
            <br />
            <span className="text-gradient italic">Local & Online Brands</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-light"
          >
            We create high-quality UGC videos for cafés, shops, startups, and D2C brands
            across India — built for <span className="text-foreground/80 font-medium">visibility, trust, and performance.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link to="/local-brands">
              <motion.span
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
              >
                For Local Brands
                <ArrowRight size={18} />
              </motion.span>
            </Link>
            <Link to="/online-brands">
              <motion.span
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-all duration-300"
              >
                For Online / D2C Brands
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 mt-16 pt-8 border-t border-border"
          >
            <div className="flex -space-x-3">
              {['🎬', '📸', '🎥', '✨'].map((emoji, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-lg"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">100+ Brands Trust Us</div>
              <div className="text-xs text-muted-foreground">Local stores · D2C brands · Startups across India</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
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
