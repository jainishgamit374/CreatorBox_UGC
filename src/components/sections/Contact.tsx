import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const services = ['UGC for Local Brand', 'UGC for D2C / Online Brand', 'Social Media Management', 'Website Design', 'Meta Ads', 'PR & Influencer Marketing', 'Full Package'];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-light" aria-label="Contact">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">Contact</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's create{' '}
              <span className="text-gradient italic">together</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to get authentic UGC for your brand? Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                { icon: Mail, label: 'Instagram', value: '@creatorbox.in' },
                { icon: Mail, label: 'Email', value: 'hello@creatorbox.in' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                    <div className="text-sm font-medium text-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl border border-border p-8 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={40} className="text-secondary" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm text-primary font-medium hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <Input {...register('name')} placeholder="Your name" className={errors.name ? 'border-destructive' : ''} />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1.5 block">Email *</label>
                      <Input {...register('email')} type="email" placeholder="you@email.com" className={errors.email ? 'border-destructive' : ''} />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Phone (optional)</label>
                    <Input {...register('phone')} placeholder="+91 98765 43210" />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Service *</label>
                    <select
                      {...register('service')}
                      className={`w-full h-10 rounded-md border bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        errors.service ? 'border-destructive' : 'border-input'
                      }`}
                    >
                      <option value="">Select service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-1">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Message *</label>
                    <Textarea
                      {...register('message')}
                      placeholder="Tell us about your brand and what you need..."
                      className={`min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
