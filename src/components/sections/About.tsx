import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = ['SEO', 'PPC Advertising', 'Content Marketing', 'Email Campaigns', 'Analytics', 'Social Media', 'Brand Strategy', 'CRO'];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
        },
      });
      gsap.from(rightRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 80%',
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section-padding bg-white" aria-label="About me">
      <div className="container-custom">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-8 h-0.5 bg-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-widest">About Me</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Photo */}
          <div ref={leftRef} className="relative">
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border">
              {/* Photo placeholder with decorative content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-primary">JD</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Your photo here</p>
                </div>
              </div>
            </div>
            {/* Decorative shapes */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10 rotate-12" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/20 -z-10" />

            {/* Experience badge */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-2xl p-4 border border-border">
              <div className="text-3xl font-bold font-display text-primary">7+</div>
              <div className="text-xs text-muted-foreground font-medium">Years<br />Experience</div>
            </div>
          </div>

          {/* Right: Bio */}
          <div ref={rightRef} className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Helping brands{' '}
              <span className="text-gradient italic">grow</span>{' '}
              through data-driven strategies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate digital marketing strategist with over 7 years of experience helping brands achieve measurable growth. I specialize in crafting comprehensive marketing strategies that blend creativity with analytical thinking to deliver real business results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to Fortune 500 companies, I've helped over 150 clients increase their online visibility, drive qualified traffic, and convert visitors into loyal customers.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {['150+ Clients served', '$2M+ Revenue generated', '50+ Industries covered', '98% Client satisfaction'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 size={16} className="text-secondary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Core Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-semibold text-sm hover:bg-foreground/90 transition-all duration-300"
              aria-label="Download resume"
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
