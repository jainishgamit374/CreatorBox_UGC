import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    X,
    CheckCircle2,
    Send,
    Instagram,
    Youtube,
    Users,
    Sparkles,
    Camera,
    Video,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(10, 'Enter a valid phone number'),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    niche: z.string().min(1, 'Please select your content niche'),
    followers: z.string().min(1, 'Please select your follower range'),
    about: z.string().min(10, 'Tell us a bit more (min 10 characters)'),
});

type FormData = z.infer<typeof schema>;

const niches = [
    'Fashion & Lifestyle',
    'Food & Beverage',
    'Beauty & Skincare',
    'Fitness & Health',
    'Tech & Gadgets',
    'Travel',
    'Home & Decor',
    'Finance & Business',
    'Education',
    'Other',
];

const followerRanges = [
    '1K – 10K',
    '10K – 50K',
    '50K – 1L',
    '1L – 5L',
    '5L+',
];

const perks = [
    { icon: Camera, text: 'Paid UGC projects with top brands' },
    { icon: Video, text: 'Flexible work — create from anywhere' },
    { icon: Sparkles, text: 'Creative freedom & brand collaborations' },
    { icon: Users, text: 'Join the RevouGC creator network' },
];

export default function CreatorOnboarding() {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (_data: FormData) => {
        // TODO: wire up to your backend / email service (e.g. EmailJS / Formspree)
        await new Promise((r) => setTimeout(r, 1200));
        setSubmitted(true);
        reset();
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => setSubmitted(false), 400);
    };

    return (
        <>
            {/* ── Section ── */}
            <section
                id="creator-onboarding"
                className="section-padding bg-foreground text-background overflow-hidden relative"
                aria-label="Creator Onboarding"
            >
                {/* decorative blobs */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute bottom-0 left-10 w-60 h-60 rounded-full bg-primary/10 blur-2xl" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        {/* Left: copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-0.5 bg-primary" />
                                <span className="text-sm font-medium text-primary uppercase tracking-widest">
                                    For Creators
                                </span>
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                Are you a{' '}
                                <span className="text-primary italic">Content Creator?</span>
                            </h2>
                            <p className="text-background/70 leading-relaxed mb-8 text-lg">
                                Join the RevouGC creator network and get paid to create authentic UGC
                                for India's fastest-growing brands. Fill out the form and we'll reach out with matching opportunities.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {perks.map(({ icon: Icon, text }) => (
                                    <li key={text} className="flex items-center gap-3">
                                        <span className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <Icon size={17} className="text-primary" />
                                        </span>
                                        <span className="text-background/80 text-sm font-medium">{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                onClick={() => setOpen(true)}
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all duration-300"
                            >
                                <Sparkles size={18} />
                                Apply as Creator
                            </motion.button>
                        </motion.div>

                        {/* Right: preview card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="hidden md:flex flex-col gap-4"
                        >
                            {[
                                { name: 'Priya S.', niche: 'Fashion & Lifestyle', followers: '82K', handle: '@priya.creates' },
                                { name: 'Arjun M.', niche: 'Fitness & Health', followers: '1.2L', handle: '@arjunfits' },
                                { name: 'Sneha K.', niche: 'Beauty & Skincare', followers: '45K', handle: '@sneha.glows' },
                            ].map((c, i) => (
                                <motion.div
                                    key={c.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12 }}
                                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm"
                                >
                                    <div className="w-11 h-11 rounded-full bg-primary/30 flex items-center justify-center text-xl font-bold text-primary">
                                        {c.name[0]}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-background font-semibold text-sm">{c.name}</p>
                                        <p className="text-background/50 text-xs truncate">{c.niche} · {c.handle}</p>
                                    </div>
                                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                                        {c.followers}
                                    </span>
                                </motion.div>
                            ))}
                            <p className="text-center text-background/30 text-xs mt-2">Sample creators in our network</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Modal ── */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="fixed inset-0 z-[70] bg-foreground/60 backdrop-blur-sm"
                        />

                        {/* Drawer / Modal */}
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, y: 60, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 60, scale: 0.97 }}
                            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                            className="fixed inset-x-4 bottom-4 top-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-[50%] md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[88vh] z-[80] bg-background rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-7 py-5 border-b border-border flex-shrink-0">
                                <div>
                                    <h3 className="font-display text-xl font-bold text-foreground">Creator Application</h3>
                                    <p className="text-xs text-muted-foreground mt-0.5">We'll review and reach out within 48 hours</p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-2 rounded-xl hover:bg-muted transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body — scrollable */}
                            <div className="flex-1 overflow-y-auto px-7 py-5">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col items-center justify-center text-center py-16"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                                                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                                            >
                                                <CheckCircle2 size={40} className="text-primary" />
                                            </motion.div>
                                            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Application Sent! 🎉</h3>
                                            <p className="text-muted-foreground mb-6 max-w-xs">
                                                Thanks for applying! We'll review your profile and reach out within 48 hours.
                                            </p>
                                            <button
                                                onClick={handleClose}
                                                className="text-sm text-primary font-semibold hover:underline"
                                            >
                                                Close
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            id="creator-form"
                                            key="form"
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="space-y-4 pb-2"
                                        >
                                            {/* Row 1 */}
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-xs font-semibold text-foreground mb-1.5 block">Full Name *</label>
                                                    <Input {...register('name')} placeholder="Your full name" className={errors.name ? 'border-destructive' : ''} />
                                                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                                                </div>
                                                <div>
                                                    <label className="text-xs font-semibold text-foreground mb-1.5 block">Email *</label>
                                                    <Input {...register('email')} type="email" placeholder="you@email.com" className={errors.email ? 'border-destructive' : ''} />
                                                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="text-xs font-semibold text-foreground mb-1.5 block">Phone Number *</label>
                                                <Input {...register('phone')} placeholder="+91 98765 43210" className={errors.phone ? 'border-destructive' : ''} />
                                                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                                            </div>

                                            {/* Social handles */}
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                                                        <Instagram size={13} className="text-pink-500" /> Instagram Handle
                                                    </label>
                                                    <Input {...register('instagram')} placeholder="@yourhandle" />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                                                        <Youtube size={13} className="text-red-500" /> YouTube Channel
                                                    </label>
                                                    <Input {...register('youtube')} placeholder="Channel name or URL" />
                                                </div>
                                            </div>

                                            {/* Niche + Followers */}
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-xs font-semibold text-foreground mb-1.5 block">Content Niche *</label>
                                                    <select
                                                        {...register('niche')}
                                                        className={`w-full h-10 rounded-md border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.niche ? 'border-destructive' : 'border-input'}`}
                                                    >
                                                        <option value="">Select niche</option>
                                                        {niches.map((n) => <option key={n} value={n}>{n}</option>)}
                                                    </select>
                                                    {errors.niche && <p className="text-destructive text-xs mt-1">{errors.niche.message}</p>}
                                                </div>
                                                <div>
                                                    <label className="text-xs font-semibold text-foreground mb-1.5 block">Follower Count *</label>
                                                    <select
                                                        {...register('followers')}
                                                        className={`w-full h-10 rounded-md border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.followers ? 'border-destructive' : 'border-input'}`}
                                                    >
                                                        <option value="">Select range</option>
                                                        {followerRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                                                    </select>
                                                    {errors.followers && <p className="text-destructive text-xs mt-1">{errors.followers.message}</p>}
                                                </div>
                                            </div>

                                            {/* About */}
                                            <div>
                                                <label className="text-xs font-semibold text-foreground mb-1.5 block">Tell us about yourself *</label>
                                                <Textarea
                                                    {...register('about')}
                                                    placeholder="What kind of content do you create? What brands have you worked with? Why do you want to join RevouGC?"
                                                    className={`min-h-[100px] ${errors.about ? 'border-destructive' : ''}`}
                                                />
                                                {errors.about && <p className="text-destructive text-xs mt-1">{errors.about.message}</p>}
                                            </div>

                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Sticky footer with submit button */}
                            {!submitted && (
                                <div className="flex-shrink-0 px-7 py-4 border-t border-border bg-background">
                                    <motion.button
                                        form="creator-form"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full font-bold text-sm hover:bg-primary/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <Send size={16} />
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
