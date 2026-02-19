import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Jane completely transformed our digital presence. Our organic traffic tripled in just 6 months, and the ROI has been phenomenal. She's not just a marketer — she's a true growth partner.",
    name: 'Sarah Chen',
    company: 'CEO, TechVista SaaS',
    initials: 'SC',
  },
  {
    quote: "The PPC campaigns Jane built for us were incredibly effective. We saw a 4x return on ad spend within the first quarter. Her analytical approach and creativity are unmatched.",
    name: 'Marcus Williams',
    company: 'Head of Growth, Elevate Commerce',
    initials: 'MW',
  },
  {
    quote: "Working with Jane felt like having an entire marketing department. She took us from zero to 50,000 monthly organic visitors and the leads just keep coming in.",
    name: 'Priya Kapoor',
    company: 'Founder, NexGen Analytics',
    initials: 'PK',
  },
  {
    quote: "Jane's content strategy turned our blog into a lead generation machine. 250% more qualified leads in under a year. The investment paid for itself many times over.",
    name: 'David Rodriguez',
    company: 'Marketing Director, Brightline B2B',
    initials: 'DR',
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
        {/* Header */}
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
            What clients{' '}
            <span className="italic text-primary">say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
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

          {/* Controls */}
          <div className="flex items-center gap-4 mt-10">
            {/* Dots */}
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

            {/* Arrows */}
            <div className="flex gap-2 ml-auto">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
