import { supabase } from '@/lib/supabase';

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

// Default data (used as fallback or for seeding)
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

// Helper to seed database if empty
export async function seedDatabase() {
    try {
        const { data: projects } = await supabase.from('projects').select('id').limit(1);
        if (!projects || projects.length === 0) {
            await supabase.from('projects').insert(defaultProjects.map(({ id, ...p }) => p));
        }

        const { data: testimonials } = await supabase.from('testimonials').select('id').limit(1);
        if (!testimonials || testimonials.length === 0) {
            await supabase.from('testimonials').insert(defaultTestimonials.map(({ id, ...t }) => t));
        }

        const { data: pricing } = await supabase.from('pricing_plans').select('id').limit(1);
        if (!pricing || pricing.length === 0) {
            await supabase.from('pricing_plans').insert(defaultPricingPlans.map(({ id, ...p }) => p));
        }
    } catch (e) {
        console.warn("Seeding failed. This is expected if tables are not created yet.", e);
    }
}

// ── Projects ──
export async function getProjects(): Promise<Project[]> {
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (error) {
        console.error('Error fetching projects:', error);
        return defaultProjects;
    }
    return data && data.length > 0 ? data : defaultProjects;
}

export async function addProject(project: Omit<Project, 'id'>): Promise<Project | null> {
    const { data, error } = await supabase.from('projects').insert([project]).select().single();
    if (error) {
        console.error('Error adding project:', error);
        return null;
    }
    return data;
}

export async function updateProject(id: string, data: Partial<Project>): Promise<void> {
    const { error } = await supabase.from('projects').update(data).eq('id', id);
    if (error) console.error('Error updating project:', error);
}

export async function deleteProject(id: string): Promise<void> {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) console.error('Error deleting project:', error);
}

// ── Testimonials ──
export async function getTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
    if (error) {
        console.error('Error fetching testimonials:', error);
        return defaultTestimonials;
    }
    return data && data.length > 0 ? data : defaultTestimonials;
}

export async function addTestimonial(testimonial: Omit<Testimonial, 'id'>): Promise<Testimonial | null> {
    const { data, error } = await supabase.from('testimonials').insert([testimonial]).select().single();
    if (error) {
        console.error('Error adding testimonial:', error);
        return null;
    }
    return data;
}

export async function updateTestimonial(id: string, data: Partial<Testimonial>): Promise<void> {
    const { error } = await supabase.from('testimonials').update(data).eq('id', id);
    if (error) console.error('Error updating testimonial:', error);
}

export async function deleteTestimonial(id: string): Promise<void> {
    const { error } = await supabase.from('testimonials').delete().eq('id', id);
    if (error) console.error('Error deleting testimonial:', error);
}

// ── Pricing Plans ──
export async function getPricingPlans(): Promise<PricingPlan[]> {
    const { data, error } = await supabase.from('pricing_plans').select('*').order('created_at', { ascending: true });
    if (error) {
        console.error('Error fetching pricing plans:', error);
        return defaultPricingPlans;
    }
    return data && data.length > 0 ? data : defaultPricingPlans;
}

export async function addPricingPlan(plan: Omit<PricingPlan, 'id'>): Promise<PricingPlan | null> {
    const { data, error } = await supabase.from('pricing_plans').insert([plan]).select().single();
    if (error) {
        console.error('Error adding pricing plan:', error);
        return null;
    }
    return data;
}

export async function updatePricingPlan(id: string, data: Partial<PricingPlan>): Promise<void> {
    const { error } = await supabase.from('pricing_plans').update(data).eq('id', id);
    if (error) console.error('Error updating pricing plan:', error);
}

export async function deletePricingPlan(id: string): Promise<void> {
    const { error } = await supabase.from('pricing_plans').delete().eq('id', id);
    if (error) console.error('Error deleting pricing plan:', error);
}
