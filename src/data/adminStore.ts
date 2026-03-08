// Admin data store using localStorage for persistent CRUD operations
// Manages: Selected Work (Projects), Testimonials, Pricing Plans

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    color: string;
    image?: string;
}

export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    company: string;
    initials: string;
}

export interface PricingPlan {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
}

// Default data
const defaultProjects: Project[] = [
    { id: '1', title: 'The Artisan Cafe', category: 'Local Business', description: 'Complete digital presence and ordering system for a boutique coffee roaster.', color: 'from-primary/20 to-secondary/20' },
    { id: '2', title: 'Elevate Events', category: 'Event Management', description: 'High-converting booking platform and portfolio for an elite event management firm.', color: 'from-secondary/20 to-accent/20' },
    { id: '3', title: 'Aura Skincare', category: 'D2C Product', description: 'Stunning e-commerce storefront for a premium organic skincare line, focusing on UGC.', color: 'from-accent/20 to-primary/20' },
    { id: '4', title: 'Nexus Tech Solutions', category: 'B2B Services', description: 'Professional corporate website demonstrating authority and driving qualified leads.', color: 'from-primary/10 to-secondary/10' },
];

const defaultTestimonials: Testimonial[] = [
    { id: '1', quote: "The architecture he built scaled effortlessly to 100k daily active users. Highly recommend his system design expertise.", name: 'Sarah Jenkins', company: 'CTO, TechFlow', initials: 'SJ' },
    { id: '2', quote: "Delivered our complex Fintech dashboard weeks ahead of schedule. The code quality is immaculate.", name: 'Marcus Chen', company: 'Founder, Elevate', initials: 'MC' },
    { id: '3', quote: "Our Google Lighthouse scores went from 40 to 99 after his performance tuning. Incredible results.", name: 'Jessica Walsh', company: 'VP Eng, Nexus', initials: 'JW' },
];

const defaultPricingPlans: PricingPlan[] = [
    {
        id: '1', name: 'Landing Page', price: '₹25,000', description: 'High-converting single page build',
        features: ['Custom Design & Development', 'Advanced Animations', 'SEO Optimization', 'Contact Forms & API', '2 revision rounds', '7-day delivery'],
    },
    {
        id: '2', name: 'Web Platform', price: '₹80,000', description: 'Full-scale scalable website',
        features: ['Up to 10 unique pages', 'CMS Integration (Sanity/Strapi)', 'Complex UI/UX Interactions', 'Analytics & Tracking Setup', 'Performance Guarantee', '14-day delivery'],
        popular: true,
    },
    {
        id: '3', name: 'SaaS / App Build', price: 'Custom', description: 'Complex web applications',
        features: ['Custom Web Architecture', 'Database & Auth Systems', '3rd Party API Integrations', 'Real-time Features', 'Admin Dashboards', 'Priority Support'],
    },
];

function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// ── Projects ──
export function getProjects(): Project[] {
    const data = localStorage.getItem('admin_projects');
    return data ? JSON.parse(data) : defaultProjects;
}

export function saveProjects(projects: Project[]): void {
    localStorage.setItem('admin_projects', JSON.stringify(projects));
}

export function addProject(project: Omit<Project, 'id'>): Project {
    const projects = getProjects();
    const newProject = { ...project, id: generateId() };
    projects.push(newProject);
    saveProjects(projects);
    return newProject;
}

export function updateProject(id: string, data: Partial<Project>): void {
    const projects = getProjects().map((p) => (p.id === id ? { ...p, ...data } : p));
    saveProjects(projects);
}

export function deleteProject(id: string): void {
    saveProjects(getProjects().filter((p) => p.id !== id));
}

// ── Testimonials ──
export function getTestimonials(): Testimonial[] {
    const data = localStorage.getItem('admin_testimonials');
    return data ? JSON.parse(data) : defaultTestimonials;
}

export function saveTestimonials(testimonials: Testimonial[]): void {
    localStorage.setItem('admin_testimonials', JSON.stringify(testimonials));
}

export function addTestimonial(testimonial: Omit<Testimonial, 'id'>): Testimonial {
    const testimonials = getTestimonials();
    const newTestimonial = { ...testimonial, id: generateId() };
    testimonials.push(newTestimonial);
    saveTestimonials(testimonials);
    return newTestimonial;
}

export function updateTestimonial(id: string, data: Partial<Testimonial>): void {
    const testimonials = getTestimonials().map((t) => (t.id === id ? { ...t, ...data } : t));
    saveTestimonials(testimonials);
}

export function deleteTestimonial(id: string): void {
    saveTestimonials(getTestimonials().filter((t) => t.id !== id));
}

// ── Pricing Plans ──
export function getPricingPlans(): PricingPlan[] {
    const data = localStorage.getItem('admin_pricing');
    return data ? JSON.parse(data) : defaultPricingPlans;
}

export function savePricingPlans(plans: PricingPlan[]): void {
    localStorage.setItem('admin_pricing', JSON.stringify(plans));
}

export function addPricingPlan(plan: Omit<PricingPlan, 'id'>): PricingPlan {
    const plans = getPricingPlans();
    const newPlan = { ...plan, id: generateId() };
    plans.push(newPlan);
    savePricingPlans(plans);
    return newPlan;
}

export function updatePricingPlan(id: string, data: Partial<PricingPlan>): void {
    const plans = getPricingPlans().map((p) => (p.id === id ? { ...p, ...data } : p));
    savePricingPlans(plans);
}

export function deletePricingPlan(id: string): void {
    savePricingPlans(getPricingPlans().filter((p) => p.id !== id));
}
