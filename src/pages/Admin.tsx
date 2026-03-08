import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Plus, Pencil, Trash2, Save, X, ArrowLeft, Briefcase, MessageSquareQuote, CreditCard,
    CheckCircle2, Star, AlertTriangle, Upload, ImageIcon
} from 'lucide-react';
import {
    getProjects, addProject, updateProject, deleteProject,
    getTestimonials, addTestimonial, updateTestimonial, deleteTestimonial,
    getPricingPlans, addPricingPlan, updatePricingPlan, deletePricingPlan,
    type Project, type Testimonial, type PricingPlan,
} from '@/data/adminStore';

type Tab = 'projects' | 'testimonials' | 'pricing';

const colorOptions = [
    { label: 'Primary → Secondary', value: 'from-primary/20 to-secondary/20' },
    { label: 'Secondary → Accent', value: 'from-secondary/20 to-accent/20' },
    { label: 'Accent → Primary', value: 'from-accent/20 to-primary/20' },
    { label: 'Primary Light', value: 'from-primary/10 to-secondary/10' },
];

export default function Admin() {
    const [tab, setTab] = useState<Tab>('projects');
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    // Projects state
    const [projects, setProjects] = useState<Project[]>([]);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [projectForm, setProjectForm] = useState({ title: '', category: '', description: '', color: colorOptions[0].value, image: '' });

    // Testimonials state
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
    const [testimonialForm, setTestimonialForm] = useState({ quote: '', name: '', company: '', initials: '' });

    // Pricing state
    const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
    const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);
    const [planForm, setPlanForm] = useState({ name: '', price: '', description: '', features: '', popular: false });

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState<{ type: Tab; id: string } | null>(null);

    useEffect(() => {
        refreshData();
    }, []);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const refreshData = () => {
        setProjects(getProjects());
        setTestimonials(getTestimonials());
        setPricingPlans(getPricingPlans());
    };

    const showToast = (message: string, type: 'success' | 'error' = 'success') => {
        setToast({ message, type });
    };

    // ──── Project CRUD ────
    const handleSaveProject = () => {
        if (!projectForm.title || !projectForm.category || !projectForm.description) {
            showToast('Please fill all required fields', 'error');
            return;
        }
        if (editingProject) {
            updateProject(editingProject.id, projectForm);
            showToast('Project updated successfully');
        } else {
            addProject(projectForm);
            showToast('Project added successfully');
        }
        resetProjectForm();
        refreshData();
    };

    const handleEditProject = (project: Project) => {
        setEditingProject(project);
        setProjectForm({ title: project.title, category: project.category, description: project.description, color: project.color, image: project.image || '' });
        setShowModal(true);
    };

    const resetProjectForm = () => {
        setEditingProject(null);
        setProjectForm({ title: '', category: '', description: '', color: colorOptions[0].value, image: '' });
        setShowModal(false);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            showToast('Please upload an image file', 'error');
            return;
        }
        if (file.size > 800 * 1024) {
            showToast('Image must be under 800KB for storage', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setProjectForm(prev => ({ ...prev, image: reader.result as string }));
        };
        reader.readAsDataURL(file);
    };

    // ──── Testimonial CRUD ────
    const handleSaveTestimonial = () => {
        if (!testimonialForm.quote || !testimonialForm.name || !testimonialForm.company) {
            showToast('Please fill all required fields', 'error');
            return;
        }
        const initials = testimonialForm.initials || testimonialForm.name.split(' ').map(n => n[0]).join('').toUpperCase();
        const data = { ...testimonialForm, initials };
        if (editingTestimonial) {
            updateTestimonial(editingTestimonial.id, data);
            showToast('Testimonial updated successfully');
        } else {
            addTestimonial(data);
            showToast('Testimonial added successfully');
        }
        resetTestimonialForm();
        refreshData();
    };

    const handleEditTestimonial = (t: Testimonial) => {
        setEditingTestimonial(t);
        setTestimonialForm({ quote: t.quote, name: t.name, company: t.company, initials: t.initials });
        setShowModal(true);
    };

    const resetTestimonialForm = () => {
        setEditingTestimonial(null);
        setTestimonialForm({ quote: '', name: '', company: '', initials: '' });
        setShowModal(false);
    };

    // ──── Pricing CRUD ────
    const handleSavePlan = () => {
        if (!planForm.name || !planForm.price || !planForm.description) {
            showToast('Please fill all required fields', 'error');
            return;
        }
        const features = planForm.features.split('\n').filter(f => f.trim());
        const data = { name: planForm.name, price: planForm.price, description: planForm.description, features, popular: planForm.popular };
        if (editingPlan) {
            updatePricingPlan(editingPlan.id, data);
            showToast('Pricing plan updated successfully');
        } else {
            addPricingPlan(data);
            showToast('Pricing plan added successfully');
        }
        resetPlanForm();
        refreshData();
    };

    const handleEditPlan = (plan: PricingPlan) => {
        setEditingPlan(plan);
        setPlanForm({ name: plan.name, price: plan.price, description: plan.description, features: plan.features.join('\n'), popular: plan.popular || false });
        setShowModal(true);
    };

    const resetPlanForm = () => {
        setEditingPlan(null);
        setPlanForm({ name: '', price: '', description: '', features: '', popular: false });
        setShowModal(false);
    };

    // ──── Delete ────
    const handleDelete = () => {
        if (!deleteConfirm) return;
        const { type, id } = deleteConfirm;
        if (type === 'projects') {
            deleteProject(id);
            showToast('Project deleted');
        } else if (type === 'testimonials') {
            deleteTestimonial(id);
            showToast('Testimonial deleted');
        } else {
            deletePricingPlan(id);
            showToast('Plan deleted');
        }
        setDeleteConfirm(null);
        refreshData();
    };

    const openAddModal = () => {
        if (tab === 'projects') resetProjectForm();
        else if (tab === 'testimonials') resetTestimonialForm();
        else resetPlanForm();
        setShowModal(true);
    };

    const closeModal = () => {
        if (tab === 'projects') resetProjectForm();
        else if (tab === 'testimonials') resetTestimonialForm();
        else resetPlanForm();
    };

    const tabs: { key: Tab; label: string; icon: typeof Briefcase; count: number }[] = [
        { key: 'projects', label: 'Selected Work', icon: Briefcase, count: projects.length },
        { key: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote, count: testimonials.length },
        { key: 'pricing', label: 'Pricing', icon: CreditCard, count: pricingPlans.length },
    ];

    const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all";
    const textareaClass = `${inputClass} resize-none`;

    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft size={18} />
                            <span className="text-sm font-medium">Back to Site</span>
                        </Link>
                        <div className="w-px h-6 bg-border" />
                        <h1 className="font-display text-xl font-bold">
                            <span className="text-foreground">REVO</span>
                            <span className="text-primary">UGC</span>
                            <span className="text-muted-foreground font-sans text-sm font-medium ml-2">Admin</span>
                        </h1>
                    </div>
                    <Link
                        to="/website"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                        View Website →
                    </Link>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {/* Tabs */}
                <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
                    {tabs.map((t) => (
                        <button
                            key={t.key}
                            onClick={() => setTab(t.key)}
                            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${tab === t.key
                                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                                }`}
                        >
                            <t.icon size={16} />
                            {t.label}
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${tab === t.key ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                                }`}>
                                {t.count}
                            </span>
                        </button>
                    ))}
                    <div className="flex-1" />
                    <button
                        onClick={openAddModal}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                        <Plus size={16} />
                        Add New
                    </button>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {tab === 'projects' && (
                        <motion.div key="projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            {projects.length === 0 ? (
                                <EmptyState label="selected work" onAdd={openAddModal} />
                            ) : (
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {projects.map((project) => (
                                        <div key={project.id} className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                                            <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                                {project.image ? (
                                                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                                                ) : (
                                                    <Briefcase size={32} className="text-primary/40" />
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
                                                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{project.title}</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                                            </div>
                                            <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEditProject(project)} className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" title="Edit">
                                                    <Pencil size={14} />
                                                </button>
                                                <button onClick={() => setDeleteConfirm({ type: 'projects', id: project.id })} className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-destructive hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all" title="Delete">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}

                    {tab === 'testimonials' && (
                        <motion.div key="testimonials" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            {testimonials.length === 0 ? (
                                <EmptyState label="testimonials" onAdd={openAddModal} />
                            ) : (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {testimonials.map((t) => (
                                        <div key={t.id} className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(5)].map((_, j) => (
                                                    <Star key={j} size={14} className="text-primary fill-primary" />
                                                ))}
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed mb-6 text-sm line-clamp-4">"{t.quote}"</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                                    <span className="text-primary font-bold text-xs">{t.initials}</span>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                                                    <div className="text-xs text-muted-foreground">{t.company}</div>
                                                </div>
                                            </div>
                                            <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEditTestimonial(t)} className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" title="Edit">
                                                    <Pencil size={14} />
                                                </button>
                                                <button onClick={() => setDeleteConfirm({ type: 'testimonials', id: t.id })} className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-destructive hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all" title="Delete">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}

                    {tab === 'pricing' && (
                        <motion.div key="pricing" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            {pricingPlans.length === 0 ? (
                                <EmptyState label="pricing plans" onAdd={openAddModal} />
                            ) : (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {pricingPlans.map((plan) => (
                                        <div key={plan.id} className={`group relative p-7 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md ${plan.popular ? 'border-primary bg-card shadow-lg shadow-primary/5' : 'border-border bg-card/50 hover:border-primary/30'
                                            }`}>
                                            {plan.popular && (
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                                                    Most Popular
                                                </div>
                                            )}
                                            <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-3">{plan.description}</p>
                                            <div className="text-3xl font-bold text-primary mb-5">{plan.price}</div>
                                            <ul className="space-y-2.5 mb-4">
                                                {plan.features.map((f) => (
                                                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2 size={15} className="text-primary mt-0.5 flex-shrink-0" />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEditPlan(plan)} className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" title="Edit">
                                                    <Pencil size={14} />
                                                </button>
                                                <button onClick={() => setDeleteConfirm({ type: 'pricing', id: plan.id })} className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-destructive hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all" title="Delete">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ──── Add / Edit Modal ──── */}
            <AnimatePresence>
                {showModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
                            onClick={closeModal}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg z-50 bg-background rounded-2xl border border-border shadow-2xl overflow-hidden"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <h2 className="text-lg font-bold text-foreground">
                                    {tab === 'projects' && (editingProject ? 'Edit Project' : 'Add Project')}
                                    {tab === 'testimonials' && (editingTestimonial ? 'Edit Testimonial' : 'Add Testimonial')}
                                    {tab === 'pricing' && (editingPlan ? 'Edit Pricing Plan' : 'Add Pricing Plan')}
                                </h2>
                                <button onClick={closeModal} className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                                {tab === 'projects' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Title *</label>
                                            <input value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} placeholder="e.g. The Artisan Cafe" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Category *</label>
                                            <input value={projectForm.category} onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })} placeholder="e.g. Local Business" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Description *</label>
                                            <textarea value={projectForm.description} onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} placeholder="Brief description of the project..." rows={3} className={textareaClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Project Image</label>
                                            {projectForm.image ? (
                                                <div className="relative rounded-xl overflow-hidden border border-border">
                                                    <img src={projectForm.image} alt="Preview" className="w-full aspect-video object-cover" />
                                                    <button
                                                        onClick={() => setProjectForm({ ...projectForm, image: '' })}
                                                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <label className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border-2 border-dashed border-border hover:border-primary/40 bg-muted/30 cursor-pointer transition-all group">
                                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                        <Upload size={18} className="text-primary" />
                                                    </div>
                                                    <div className="text-center">
                                                        <span className="text-sm font-medium text-foreground">Click to upload</span>
                                                        <p className="text-xs text-muted-foreground mt-0.5">PNG, JPG, WebP — max 800KB</p>
                                                    </div>
                                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                                </label>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Card Color (fallback)</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {colorOptions.map((opt) => (
                                                    <button
                                                        key={opt.value}
                                                        onClick={() => setProjectForm({ ...projectForm, color: opt.value })}
                                                        className={`p-3 rounded-xl border text-xs font-medium transition-all ${projectForm.color === opt.value
                                                            ? 'border-primary bg-primary/10 text-primary'
                                                            : 'border-border bg-card text-muted-foreground hover:border-primary/30'
                                                            }`}
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {tab === 'testimonials' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Client Name *</label>
                                            <input value={testimonialForm.name} onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })} placeholder="e.g. Sarah Jenkins" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Company / Role *</label>
                                            <input value={testimonialForm.company} onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })} placeholder="e.g. CTO, TechFlow" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Initials</label>
                                            <input value={testimonialForm.initials} onChange={(e) => setTestimonialForm({ ...testimonialForm, initials: e.target.value.toUpperCase().slice(0, 3) })} placeholder="Auto-generated from name" maxLength={3} className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Quote *</label>
                                            <textarea value={testimonialForm.quote} onChange={(e) => setTestimonialForm({ ...testimonialForm, quote: e.target.value })} placeholder="What the client said about your work..." rows={4} className={textareaClass} />
                                        </div>
                                    </>
                                )}

                                {tab === 'pricing' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Plan Name *</label>
                                            <input value={planForm.name} onChange={(e) => setPlanForm({ ...planForm, name: e.target.value })} placeholder="e.g. Landing Page" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Price *</label>
                                            <input value={planForm.price} onChange={(e) => setPlanForm({ ...planForm, price: e.target.value })} placeholder="e.g. ₹25,000 or Custom" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Description *</label>
                                            <input value={planForm.description} onChange={(e) => setPlanForm({ ...planForm, description: e.target.value })} placeholder="e.g. High-converting single page build" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-1.5">Features (one per line)</label>
                                            <textarea value={planForm.features} onChange={(e) => setPlanForm({ ...planForm, features: e.target.value })} placeholder={"Custom Design & Development\nAdvanced Animations\nSEO Optimization"} rows={5} className={textareaClass} />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => setPlanForm({ ...planForm, popular: !planForm.popular })}
                                                className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${planForm.popular ? 'bg-primary' : 'bg-muted'}`}
                                            >
                                                <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${planForm.popular ? 'translate-x-5' : ''}`} />
                                            </button>
                                            <label className="text-sm font-medium text-foreground cursor-pointer" onClick={() => setPlanForm({ ...planForm, popular: !planForm.popular })}>Mark as "Most Popular"</label>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
                                <button onClick={closeModal} className="px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        if (tab === 'projects') handleSaveProject();
                                        else if (tab === 'testimonials') handleSaveTestimonial();
                                        else handleSavePlan();
                                    }}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                                >
                                    <Save size={15} />
                                    {(editingProject || editingTestimonial || editingPlan) ? 'Update' : 'Save'}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ──── Delete Confirmation ──── */}
            <AnimatePresence>
                {deleteConfirm && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
                            onClick={() => setDeleteConfirm(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm bg-background rounded-2xl border border-border shadow-2xl p-6 text-center"
                        >
                            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle size={24} className="text-destructive" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">Are you sure?</h3>
                            <p className="text-sm text-muted-foreground mb-6">This action cannot be undone. This will permanently delete this item.</p>
                            <div className="flex gap-3 justify-center">
                                <button onClick={() => setDeleteConfirm(null)} className="px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                                    Cancel
                                </button>
                                <button onClick={handleDelete} className="px-5 py-2.5 rounded-xl bg-destructive text-destructive-foreground text-sm font-semibold hover:bg-destructive/90 transition-all">
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ──── Toast ──── */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 50, x: '-50%' }}
                        className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg text-sm font-medium ${toast.type === 'success'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-destructive text-destructive-foreground'
                            }`}
                    >
                        {toast.type === 'success' ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
                        {toast.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function EmptyState({ label, onAdd }: { label: string; onAdd: () => void }) {
    return (
        <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <Plus size={28} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No {label} yet</h3>
            <p className="text-sm text-muted-foreground mb-6">Get started by adding your first item.</p>
            <button
                onClick={onAdd}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
            >
                <Plus size={16} />
                Add {label}
            </button>
        </div>
    );
}
