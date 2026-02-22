import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "CreatorBox sent a creator to our café and the reel got us 50K views in a week. We started getting walk-ins mentioning the Instagram post. Incredible ROI for what we paid.",
    name: 'Ankit Sharma',
    company: 'Owner, Brew & Bites Café, Mumbai',
    initials: 'AS',
  },
  {
    quote: "We needed UGC for our skincare launch ads. CreatorBox delivered 6 ad-ready videos in 10 days. Our CTR improved by 2.3x compared to our studio-shot ads.",
    name: 'Priya Mehta',
    company: 'Founder, GlowNest Skincare',
    initials: 'PM',
  },
  {
    quote: "As a gym owner, I didn't know where to start with social media. Their iGC creator captured real workouts and transformations. Our Instagram grew from 200 to 3,000 followers in a month.",
    name: 'Rahul Verma',
    company: 'FitZone Gym, Pune',
    initials: 'RV',
  },
  {
    quote: "The quality of UGC we received for our fashion brand was outstanding. It felt authentic, relatable, and performed way better than influencer content in our Meta ads.",
    name: 'Sneha Kapoor',
    company: 'Co-founder, ThreadCraft Fashion',
    initials: 'SK',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next]);

  return (
    <section className="section-padding bg-foreground" aria-label="Testimonials">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What brands{' '}
            <span className="italic text-primary">say</span>
          </h2>
        </motion.div>

        <div
          className="relative max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute -top-4 -left-4 text-primary/30">
            <Quote size={80} fill="currentColor" />
          </div>

          <div className="relative overflow-hidden min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 relative z-10">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-bold text-sm">{testimonials[current].initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[current].name}</div>
                    <div className="text-sm text-white/50">{testimonials[current].company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2 ml-auto">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
