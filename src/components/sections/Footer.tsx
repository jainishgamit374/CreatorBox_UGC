import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Services: ['UGC for Local Brands', 'UGC for D2C Brands', 'Social Media Management', 'Website Design', 'Meta Ads', 'PR & Influencer'],
  Company: ['About', 'Our Work', 'Pricing', 'FAQ', 'Blog'],
  Social: ['Instagram', 'YouTube', 'LinkedIn', 'Twitter / X'],
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

  return (
    <footer className="bg-background text-foreground border-t border-border" aria-label="Site footer">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="font-display text-2xl font-extrabold tracking-wide text-foreground mb-4 inline-block uppercase">
              <span className="text-foreground">REVO</span><span className="text-primary">UGC</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mt-3 mb-6">
              Premium UGC and creator marketing that drives real revenue. Full-service production for forward-thinking brands.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
                Accepting new brands
              </div>

              <Link to="/feedback" className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:bg-primary/5 hover:border-primary/50 hover:text-primary transition-all shadow-sm">
                <MessageSquare size={13} />
                Leave Feedback
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-10 mb-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-sans tracking-tight text-xl font-bold text-foreground mb-1">Stay in the loop</h3>
              <p className="text-sm text-muted-foreground">UGC tips, brand growth strategies, and creator updates. No spam.</p>
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
                    className="flex-1 px-4 py-2.5 rounded-full bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary shadow-sm"
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
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RevouGC. All rights reserved.
            <Link to="/admin" className="ml-4 hover:text-primary transition-colors opacity-50 hover:opacity-100">Admin</Link>
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
