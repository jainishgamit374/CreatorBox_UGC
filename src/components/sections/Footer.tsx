import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const footerLinks = {
  Services: ['SEO Optimization', 'PPC Advertising', 'Content Marketing', 'Social Media', 'Email Campaigns', 'Analytics'],
  Company: ['About', 'Portfolio', 'Process', 'Pricing', 'FAQ', 'Blog'],
  Social: ['LinkedIn', 'Twitter / X', 'Instagram', 'Dribbble', 'YouTube'],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white" aria-label="Site footer">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
              className="font-display text-2xl font-bold text-white mb-4 inline-block"
            >
              Jane<span className="text-primary">.</span>Doe
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mt-3 mb-6">
              Digital Marketing Strategist helping brands grow through data-driven strategies. Based in New York, available worldwide.
            </p>
            <div className="flex items-center gap-1 text-white/50 text-xs">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-display text-xl font-bold text-white mb-1">Stay in the loop</h4>
              <p className="text-sm text-white/50">Monthly marketing tips, case studies, and growth strategies. No spam.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-secondary text-sm font-medium py-2"
                >
                  ✓ You're subscribed! Welcome aboard.
                </motion.div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors flex-shrink-0"
                  >
                    <Send size={14} />
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Jane Doe. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
