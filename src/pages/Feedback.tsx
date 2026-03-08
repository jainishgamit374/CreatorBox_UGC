import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { addTestimonial } from '@/data/adminStore';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function Feedback() {
    const [form, setForm] = useState({ name: '', company: '', quote: '' });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.quote) return;

        const initials = form.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

        addTestimonial({
            name: form.name,
            company: form.company || 'Client',
            quote: form.quote,
            initials,
        });

        setSubmitted(true);
        setForm({ name: '', company: '', quote: '' });
    };

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-foreground">
            <Navbar />

            <main className="flex-1 pt-32 pb-24">
                <div className="container-custom max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Go Back
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <MessageSquare size={24} className="text-primary" />
                                </div>
                                <div>
                                    <h1 className="font-sans tracking-tight text-2xl md:text-3xl font-bold text-foreground">
                                        Share Your Feedback
                                    </h1>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Worked with us? We'd love to hear about your experience.
                                    </p>
                                </div>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16 bg-muted/30 rounded-2xl border border-border/50"
                                >
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={32} className="text-primary" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground mb-2">Thank you!</h2>
                                    <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                                        Your feedback has been submitted successfully and will appear on our website.
                                    </p>
                                    <button
                                        onClick={() => navigate('/website')}
                                        className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                                    >
                                        Return to Website
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                                            <input
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                placeholder="e.g. John Smith"
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Company / Role</label>
                                            <input
                                                value={form.company}
                                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                                placeholder="e.g. CEO, Acme Inc."
                                                className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Your Feedback *</label>
                                        <textarea
                                            value={form.quote}
                                            onChange={(e) => setForm({ ...form, quote: e.target.value })}
                                            placeholder="Tell us about your experience working with us..."
                                            required
                                            rows={5}
                                            className="w-full px-4 py-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-y min-h-[120px]"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl text-base font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-4"
                                    >
                                        <Send size={18} />
                                        Submit Feedback
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
