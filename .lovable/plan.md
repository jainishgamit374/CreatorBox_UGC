
## 🎨 Digital Marketing Portfolio — Personal, Light & Airy

A complete single-page portfolio website for a digital marketer. Clean white/off-white aesthetic inspired by the Craig Reynolds reference: large bold typography, ample whitespace, and smooth scroll-triggered animations using GSAP + Framer Motion.

---

### 1. 📦 Dependencies & Setup
- Install **Framer Motion** (micro-interactions, entrance animations)
- Install **GSAP + @gsap/react** (scroll-triggered timeline animations)
- Install **@studio-freight/lenis** (buttery-smooth scroll)
- Add **Inter** font via Google Fonts in `index.html`
- Update color palette in Tailwind config: Blue `#2563EB`, Green `#10B981`, Orange `#F59E0B`, Dark `#1F2937`, Light `#F9FAFB`

---

### 2. 🔝 Sticky Navbar
- Logo/name on the left (e.g. "Jane Doe")
- Navigation links: Home · Work · About · Services · Contact
- Transparent background at top → solid white with subtle shadow on scroll
- Mobile: hamburger menu with a slide-in drawer
- Smooth scroll to sections on click

---

### 3. 🦸 Hero Section
- Full-screen (`100vh`) with off-white background
- **Large bold display text** inspired by the Craig Reynolds design — your name in extra-large serif-style font
- Tagline: "Digital Marketing Strategist · Growth Hacker · Brand Storyteller"
- Two CTA buttons: "View My Work" (blue filled) + "Let's Talk" (outlined)
- Subtle background gradient blob animation
- Framer Motion entrance animation (fade up, stagger)

---

### 4. 📊 Stats Section
- Horizontal row of 4 animated counter cards: e.g. **150+ Clients**, **$2M+ Revenue Generated**, **98% Satisfaction**, **7 Years Experience**
- Numbers count up on scroll (Intersection Observer trigger)
- Clean card design with icon and label

---

### 5. 👤 About Section
- Two-column split layout: left = photo placeholder with decorative shape, right = bio text
- Personal story, skills badges (SEO, PPC, Content, Email, Analytics, Social)
- Scroll-triggered slide-in animation (GSAP)
- "Download Resume" CTA button

---

### 6. 🛠️ Services Section
- 6-card grid: SEO Optimization · PPC Advertising · Content Marketing · Social Media · Email Campaigns · Analytics & Reporting
- Each card: icon, title, short description, hover state (lift + blue border)
- Framer Motion stagger entrance on scroll

---

### 7. 🗺️ Process Timeline
- Horizontal or vertical numbered timeline: Discover → Strategy → Execute → Optimize → Report
- GSAP ScrollTrigger — each step animates in as user scrolls
- Clean numbered badges with connecting line

---

### 8. 🖼️ Portfolio / Work Section
- Filterable grid: All · SEO · PPC · Social · Content
- 6 project cards with cover image placeholder, category badge, title, and brief result
- Click to open a modal with full project details
- Smooth filter transition with Framer Motion layout animation

---

### 9. 💬 Testimonials Carousel
- Auto-rotating carousel (every 4s) with pause on hover
- Large quote, client name, company, and avatar placeholder
- Dot pagination + prev/next arrows
- Swipe-friendly on mobile

---

### 10. 💰 Pricing Section
- 3-tier cards: **Starter** · **Growth** (highlighted/featured) · **Enterprise**
- Monthly / Yearly toggle with discount badge ("Save 20%")
- Feature checklist per tier
- CTA button per card

---

### 11. ⏳ Special Offers Banner
- Full-width banner with a countdown timer (Days · Hours · Mins · Secs)
- "Limited offer — First 3 months at 50% off" messaging
- Orange/amber accent color, bold typography

---

### 12. ❓ FAQ Accordion
- 8 common digital marketing questions
- Smooth expand/collapse (Radix Accordion already installed)
- Clean minimal styling

---

### 13. 📬 Contact Form
- Fields: Name, Email, Phone, Service (select), Budget (select), Message
- React Hook Form + Zod validation with inline error messages
- Success state with animated checkmark after submission
- Side-by-side: form on left, contact info + social links on right

---

### 14. 🦶 Footer
- 5 columns: Brand/tagline · Services · Company · Social Links · Newsletter signup
- Newsletter email input with subscribe button
- Copyright + privacy policy links
- Clean, minimal, dark background (`#1F2937`)

---

### 🗂️ File Structure
All sections as individual components in `src/components/sections/`, shared utilities in `src/hooks/` (useScrollAnimation, useCountUp), and a main `Index.tsx` that assembles everything in order.
