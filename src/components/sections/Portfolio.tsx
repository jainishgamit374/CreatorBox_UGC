import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

type Category = 'All' | 'SEO' | 'PPC' | 'Social' | 'Content';

const projects = [
  {
    id: 1,
    title: 'E-Commerce SEO Overhaul',
    category: 'SEO' as const,
    result: '312% organic traffic increase',
    description: 'Comprehensive SEO strategy including technical fixes, content optimization, and link building that tripled organic traffic in 6 months.',
    tags: ['Technical SEO', 'Content Strategy', 'Link Building'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    id: 2,
    title: 'SaaS PPC Growth Campaign',
    category: 'PPC' as const,
    result: '4.2x ROAS achieved',
    description: 'Built and scaled Google Ads + LinkedIn campaigns from scratch, achieving a 4.2x return on ad spend within the first quarter.',
    tags: ['Google Ads', 'LinkedIn Ads', 'A/B Testing'],
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    id: 3,
    title: 'Fashion Brand Social Media',
    category: 'Social' as const,
    result: '89K new Instagram followers',
    description: 'Developed a cohesive social media strategy with daily content calendar, influencer partnerships, and engagement campaigns.',
    tags: ['Instagram', 'TikTok', 'Influencer Marketing'],
    color: 'from-accent/20 to-accent/5',
  },
  {
    id: 4,
    title: 'B2B Content Marketing Hub',
    category: 'Content' as const,
    result: '250% lead gen increase',
    description: 'Created a full content marketing ecosystem — blog, whitepapers, case studies — that became the primary lead generation channel.',
    tags: ['Blogging', 'Whitepapers', 'Lead Magnets'],
    color: 'from-primary/20 to-secondary/10',
  },
  {
    id: 5,
    title: 'Local Business PPC Blitz',
    category: 'PPC' as const,
    result: '$180K revenue in 90 days',
    description: 'Hyper-local Google Ads campaigns for a chain of dental clinics that generated $180K in new patient revenue within 3 months.',
    tags: ['Local SEO', 'Google Ads', 'Conversion Tracking'],
    color: 'from-secondary/20 to-secondary/5',
  },
  {
    id: 6,
    title: 'Tech Startup SEO Launch',
    category: 'SEO' as const,
    result: '0 → 50K monthly visitors',
    description: 'Took a brand-new SaaS product from zero online presence to 50,000 monthly organic visitors through strategic SEO and content marketing.',
    tags: ['Keyword Research', 'On-Page SEO', 'PR & Backlinks'],
    color: 'from-accent/20 to-primary/10',
  },
];

const categories: Category[] = ['All', 'SEO', 'PPC', 'Social', 'Content'];

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-light" aria-label="Portfolio">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work that{' '}
            <span className="text-gradient italic">speaks</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Real campaigns, real results. Here's a selection of projects that showcase what's possible.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-white text-muted-foreground hover:text-foreground border border-border hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 overflow-hidden cursor-pointer transition-all duration-300"
              >
                {/* Card image area */}
                <div className={`h-44 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-white/80 backdrop-blur-sm rounded-full text-foreground">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                      <ExternalLink size={14} className="text-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm font-medium text-secondary">{project.result}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full pointer-events-auto overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${selectedProject.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-widest">{selectedProject.category}</span>
                      <h3 className="font-display text-2xl font-bold text-foreground mt-1">{selectedProject.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="Close modal"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
                    ✓ {selectedProject.result}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
