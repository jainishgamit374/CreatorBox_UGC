import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useUtils';
import { Zap } from 'lucide-react';

// Set offer end date to 30 days from now
const offerEndDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[60px] text-center border border-white/20">
        <span className="text-3xl md:text-4xl font-bold font-display text-white">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-white/60 uppercase tracking-wider mt-2">{label}</span>
    </div>
  );
}

export default function SpecialOffer() {
  const { days, hours, mins, secs } = useCountdown(offerEndDate);

  return (
    <section className="py-16 bg-gradient-to-r from-accent via-accent/90 to-accent/70" aria-label="Special offer">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <Zap size={12} fill="currentColor" />
              Limited Time Offer
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
              First 3 months at <span className="underline decoration-white/50">50% off</span>
            </h2>
            <p className="text-white/80 text-lg">
              Lock in your spot before this offer expires. No commitment, cancel anytime.
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <TimeUnit value={days} label="Days" />
            <span className="text-2xl font-bold text-white/60 mb-6">:</span>
            <TimeUnit value={hours} label="Hours" />
            <span className="text-2xl font-bold text-white/60 mb-6">:</span>
            <TimeUnit value={mins} label="Mins" />
            <span className="text-2xl font-bold text-white/60 mb-6">:</span>
            <TimeUnit value={secs} label="Secs" />
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-bold text-base hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Claim Offer Now
              <Zap size={16} fill="currentColor" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
