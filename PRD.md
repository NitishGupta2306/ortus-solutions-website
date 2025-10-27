# ORTUS SOLUTIONS - PERSONAL PORTFOLIO WEBSITE
## Product Requirements Document (PRD)

**Owner:** Solo Freelance Consultant
**Project Type:** Personal Portfolio Website
**Specialization:** Data Pipelines & Automation Solutions
**Last Updated:** 2025-10-27

---

## EXECUTIVE SUMMARY

**Objective:** Create a modern, minimalist personal portfolio website with bold animations that converts visitors into consultation bookings.

**Target Audience:** Businesses of all sizes (startups to enterprises) seeking data pipeline and automation expertise from a skilled freelance consultant.

**Primary CTA:** Book a Consultation

**Key Differentiator:** Solo expert who builds data pipelines and automations from zero - personal touch combined with technical sophistication.

**Current Content:** 1 client project, 1 testimonial (designed to scale as content grows)

---

## 1. WEBSITE SECTIONS

### 1.1 Hero Section
**Purpose:** Immediate impact with personal brand statement

**Content:**
- Headline: "I Build Data Pipelines & Automations From Zero"
- Subheadline: "Solo consultant specializing in custom data solutions"
- Your name and title
- Primary CTA: "Book a Free Consultation"
- Secondary CTA: "See My Work"

**Visual:**
- Phase 1: Animated gradient background with typography focus
- Phase 2+: 3D animated element (abstract data flow, particles, or geometric shapes)

**Animation:**
- Phase 1: Entrance animations with Framer Motion
- Phase 2+: Parallax effect, interactive 3D element responding to mouse/touch

---

### 1.2 About Me Section
**Purpose:** Build personal connection and establish credibility

**Content:**
- Your photo (professional but approachable)
- Personal story/journey into data engineering
- Why you do this work (motivation)
- Your approach/philosophy
- Years of experience
- Key achievements or unique qualifications

**Visual:** Large photo with text overlay or side-by-side layout (responsive)

**Animation:** Photo reveal, text fade-in, parallax background

**Tone:** First-person, conversational but professional ("I believe..." "My approach...")

**Mobile Considerations:**
- Stack photo above text on mobile
- Optimize image loading
- Readable text size (16px minimum)

---

### 1.3 Services/Expertise Section
**Purpose:** Clearly communicate what you offer

**Content:**
1. **Data Pipeline Development**
   - Build scalable, reliable data pipelines from scratch
   - ETL/ELT processes
   - Real-time and batch processing

2. **Workflow Automation**
   - Automate repetitive tasks and business processes
   - Custom scripting and scheduling
   - Integration automation

3. **System Integration**
   - Connect disparate systems and data sources
   - API development and integration
   - Data synchronization

4. **Custom Solutions**
   - Tailored software for unique business needs
   - Full-stack development
   - Technical consulting

**Visual:** 4 animated cards with icons, hover effects

**Animation:** Cards reveal on scroll, stagger effect, hover state transformations

**Mobile:**
- Stack cards vertically on mobile
- Touch-friendly card interactions
- Maintain visual hierarchy

---

### 1.4 Featured Project Section
**Purpose:** Showcase your best work with detailed case study

**Content Structure:**
- Project title
- Client industry (anonymized if needed)
- Challenge/Problem statement (2-3 sentences)
- Your solution approach (detailed)
- Technologies used (with logos/badges)
- Results/Impact with metrics:
  - "Reduced processing time by X%"
  - "Automated X hours of manual work"
  - "Processed X records per day"
- Project screenshots, architecture diagrams, or visualizations
- "More projects coming soon" indicator
- Optional: Link to live demo or GitHub (if applicable)

**Visual:**
- Large featured card with hero image
- Expandable detail view or modal for full case study
- Grid layout that shows "1 of many" (even with one project)

**Animation:**
- Image reveals with parallax
- Smooth transitions
- Expandable sections with animation
- Hover effects on cards

**Design Strategy for One Project:**
- Feature it prominently - make it look impressive
- Detailed write-up (don't hold back)
- Multiple images/visuals
- Show your thinking process
- Empty state cards with "Coming Soon" show growth

**Mobile:**
- Full-width cards on mobile
- Touch-optimized modal/expansion
- Optimized images for mobile

---

### 1.5 Technology Stack
**Purpose:** Display technical expertise and tools mastery

**Content Categories:**

**Languages:**
- Python
- JavaScript/TypeScript
- SQL
- Bash/Shell scripting

**Cloud Platforms:**
- AWS (S3, Lambda, EC2, RDS, etc.)
- Google Cloud Platform
- Azure
- DigitalOcean

**Data Engineering:**
- Apache Airflow
- Apache Kafka
- Apache Spark
- dbt (data build tool)
- Pandas, NumPy

**Databases:**
- PostgreSQL
- MySQL
- MongoDB
- Redis
- Snowflake

**Tools & DevOps:**
- Docker
- Kubernetes
- Git/GitHub
- CI/CD (GitHub Actions, Jenkins)
- Terraform

**Web Development:**
- React
- Node.js
- FastAPI/Flask
- REST APIs

**Visual:**
- Phase 1: Grid of logos with tooltips
- Phase 2+: Floating/orbiting logos with interactive hover

**Animation:**
- Phase 1: Fade-in on scroll
- Phase 2+: Floating logos, scroll-triggered reveals, interactive hover

**Mobile:**
- Responsive grid (2-3 columns on mobile)
- Touch-friendly interactions
- Optimized logo images

---

### 1.6 How I Work / Process
**Purpose:** Set expectations and build trust

**Content:**

1. **Discovery & Planning**
   - Initial consultation (free)
   - Understanding your needs and goals
   - Defining success metrics
   - Technical feasibility assessment

2. **Design & Architecture**
   - Solution architecture design
   - Technology selection
   - Timeline and milestone planning
   - Transparent cost estimation

3. **Development & Testing**
   - Agile development process
   - Regular progress updates
   - Iterative testing and refinement
   - Code quality and documentation

4. **Deployment & Support**
   - Production deployment
   - Knowledge transfer and training
   - Documentation delivery
   - Post-launch support

**Visual:**
- Phase 1: Card-based layout with icons
- Phase 2+: Animated timeline or flow diagram

**Animation:**
- Phase 1: Staggered reveals
- Phase 2+: Scroll-triggered progression, connecting lines animate

**Mobile:**
- Vertical timeline on mobile
- Touch-friendly cards
- Clear visual progression

---

### 1.7 Client Testimonial
**Purpose:** Social proof and credibility

**Content:**
- Client quote (impactful and specific)
- Client name
- Client title
- Client company
- Optional: Company logo
- Optional: Client photo
- Context about the project referenced
- Link to the full case study

**Visual Design Strategy (for single testimonial):**
- Large, prominent display (don't bury it)
- Beautiful typography for the quote
- Professional layout that doesn't look "lonely"
- Consider placing after About section or before Contact
- Use design elements (quotes, borders, background) to make it stand out

**Example Placement Options:**
1. **After About** - "Here's what clients say about working with me"
2. **After Featured Project** - Direct connection to the work
3. **Before Contact** - Final push before CTA

**Animation:** Fade-in, subtle parallax, quote emphasis

**Design Note:**
- Use singular language ("What a client says" not "What clients say")
- Or use "Client Feedback" as section title
- Make the single testimonial look intentional and powerful

**Mobile:**
- Maintain visual impact
- Readable text size
- Proper spacing

---

### 1.8 Contact/Booking Section
**Purpose:** Convert visitors into consultation leads

**Content:**

**Section Headline:** "Let's Build Something Together"

**Subheadline:** "Book a free consultation to discuss your project"

**Contact Form Fields:**
- Name (required)
- Email (required)
- Company (optional)
- Project Description / What do you need? (required, textarea)
- Budget Range (optional, select)
- Timeline / Urgency (optional, select)
- How did you hear about me? (optional)

**Additional Info:**
- Expected response time: "I'll respond within 24 hours"
- Availability status: "Currently accepting new projects"
- Alternative contact: Direct email link
- LinkedIn/Calendar link (optional)

**Form Validation:**
- Real-time validation
- Clear error messages
- Success state with confirmation message
- Loading state during submission

**Visual:** Clean, focused form design with clear labels and validation states

**Animation:**
- Input focus effects
- Submit button hover/loading states
- Success animation (checkmark, confetti, etc.)
- Error shake animation

**Integration:** EmailJS, Formspree, or custom backend

**Mobile:**
- Full-width inputs
- Large touch targets (44px minimum)
- Mobile-optimized keyboard (email, tel types)
- Easy to complete on phone

---

### 1.9 Header
**Purpose:** Navigation and branding

**Content:**
- Logo/Name (links to top)
- Navigation links:
  - About
  - Services
  - Work
  - Contact
- Theme toggle (dark/light mode)
- CTA button: "Book Consultation"

**Visual:**
- Transparent/blur background on scroll
- Sticky/fixed position
- Mobile hamburger menu

**Animation:**
- Fade-in on load
- Background blur on scroll
- Smooth menu transitions

**Mobile:**
- Hamburger menu
- Full-screen mobile menu
- Touch-friendly nav items

---

### 1.10 Footer
**Purpose:** Additional links and social proof

**Content:**
- Logo/Name
- Quick navigation links
- Social media:
  - LinkedIn (primary)
  - GitHub
  - Twitter/X
  - Email
- "Built with React, TypeScript & Three.js" (showcase your skills)
- Copyright: "© 2025 [Your Name]. All rights reserved."
- Optional: "Open to freelance opportunities" badge
- Optional: Privacy Policy / Terms (if needed)

**Visual:** Minimalist footer with clear sections

**Animation:** Subtle hover effects on links and social icons

**Mobile:**
- Stack sections vertically
- Maintain readability
- Touch-friendly links

---

## 2. TECHNOLOGY STACK

### Core Framework (All Phases)
- **React 18+** - Functional components with hooks
- **Vite** - Fast dev server and optimized build tool
- **TypeScript** - Type safety and better DX
- **Node.js 18+** - Runtime environment

### Styling (All Phases)
- **Tailwind CSS 3+** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **CSS Variables** - Theme management (light/dark)
- **Responsive breakpoints:**
  - Mobile: 320px - 640px
  - Tablet: 640px - 1024px
  - Desktop: 1024px+

### Animation Libraries

**Phase 1 (MVP):**
- **Framer Motion** - Declarative React animations
  - Fade-ins, slide-ups
  - Hover effects
  - Basic transitions

**Phase 2 (Enhanced):**
- **React Three Fiber** - Three.js for React
- **Three.js** - WebGL 3D graphics
- **@react-three/drei** - Useful Three.js helpers
- **GSAP (GreenSock)** - Advanced animations
- **ScrollTrigger** (GSAP plugin) - Scroll-based animations
- **Lenis** - Smooth scroll library

**Phase 3+:**
- Additional animation utilities as needed

### Form Handling (Phase 1)
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **EmailJS** or **Formspree** - Form submission (no backend needed)
- Alternative: Custom API endpoint

### UI Components & Icons (Phase 1)
- **Lucide React** - Beautiful, consistent icon library
- **Radix UI** (optional) - Unstyled, accessible components
- **Headless UI** (optional) - Unstyled, accessible components

### Utilities (All Phases)
- **clsx** or **classnames** - Conditional className utilities
- **date-fns** or **dayjs** - Date manipulation (if needed)

### Chat Integration (Phase 3)
- **Tawk.to** - Free live chat (recommended)
- **Crisp Chat** - Alternative free tier
- **Intercom** - Premium option

### Development Tools (All Phases)
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting
- **Husky** (optional) - Git hooks for pre-commit checks
- **lint-staged** (optional) - Run linters on staged files

### Build & Optimization (All Phases)
- **Vite Build** - Optimized production builds
- **vite-plugin-imagetools** - Image optimization
- **vite-plugin-compression** - Gzip/Brotli compression
- **TypeScript paths** - Clean import paths

### Deployment (All Phases)
- **Vercel** - Primary deployment platform (recommended)
  - Automatic deployments from Git
  - Edge network (global CDN)
  - Free tier sufficient
  - Automatic HTTPS
  - Preview deployments for PRs
- **Alternative:** Netlify, Cloudflare Pages, AWS Amplify

### Analytics (Phase 3)
- **Vercel Analytics** - Built-in, privacy-friendly
- **Google Analytics 4** - Comprehensive analytics
- **Plausible** - Privacy-friendly alternative

### Domain & DNS
- **Custom domain** - Purchase from Namecheap, Google Domains, etc.
- **DNS configuration** - Point to Vercel

---

## 3. DESIGN SYSTEM

### Color Palette (Modern Minimalist)

**Light Mode:**
- **Primary:** `#0F172A` (Slate 900) - Main headings, text
- **Secondary:** `#475569` (Slate 600) - Body text
- **Accent:** `#06B6D4` (Cyan 500) - CTAs, links, highlights
- **Background:** `#FFFFFF` (White) - Main background
- **Background Subtle:** `#F8FAFC` (Slate 50) - Sections, cards
- **Border:** `#E2E8F0` (Slate 200) - Dividers, borders

**Dark Mode:**
- **Primary:** `#F1F5F9` (Slate 100) - Main headings, text
- **Secondary:** `#CBD5E1` (Slate 300) - Body text
- **Accent:** `#06B6D4` (Cyan 500) - CTAs, links, highlights (same)
- **Background:** `#0F172A` (Slate 900) - Main background
- **Background Subtle:** `#1E293B` (Slate 800) - Sections, cards
- **Border:** `#334155` (Slate 700) - Dividers, borders

**Accent Colors (for variety):**
- **Success:** `#10B981` (Green 500)
- **Error:** `#EF4444` (Red 500)
- **Warning:** `#F59E0B` (Amber 500)

**Usage:**
- Use Tailwind's slate scale for consistency
- Maintain 4.5:1 contrast ratio for accessibility (WCAG AA)
- Test colors in both light and dark modes

---

### Typography

**Font Families:**

**Primary (Headings & Body):**
- **Inter** - Clean, modern, highly readable
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Import from Google Fonts or use `@fontsource/inter`

**Alternative (if you want distinction):**
- **Headings:** Space Grotesk, Plus Jakarta Sans
- **Body:** Inter, Source Sans Pro

**Monospace (Code/Tech elements):**
- **JetBrains Mono** or **Fira Code**
- Use for technology names, code snippets

**Font Weights:**
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Black: 900 (for hero headline)

**Type Scale:**

**Desktop:**
- **H1 (Hero):** 3.5rem (56px) / Line height: 1.1 / Weight: 900
- **H2 (Section):** 2.5rem (40px) / Line height: 1.2 / Weight: 700
- **H3 (Subsection):** 1.875rem (30px) / Line height: 1.3 / Weight: 600
- **H4:** 1.5rem (24px) / Line height: 1.4 / Weight: 600
- **Body Large:** 1.25rem (20px) / Line height: 1.6 / Weight: 400
- **Body:** 1.125rem (18px) / Line height: 1.7 / Weight: 400
- **Body Small:** 1rem (16px) / Line height: 1.6 / Weight: 400
- **Caption:** 0.875rem (14px) / Line height: 1.5 / Weight: 400

**Mobile:**
- **H1 (Hero):** 2.5rem (40px) / Line height: 1.1 / Weight: 900
- **H2 (Section):** 2rem (32px) / Line height: 1.2 / Weight: 700
- **H3:** 1.5rem (24px) / Line height: 1.3 / Weight: 600
- **H4:** 1.25rem (20px) / Line height: 1.4 / Weight: 600
- **Body:** 1rem (16px) / Line height: 1.6 / Weight: 400
- **Body Small:** 0.875rem (14px) / Line height: 1.5 / Weight: 400

**Best Practices:**
- Never use font size smaller than 16px for body text (readability)
- Maintain consistent line-height for readability
- Use font-weight to create hierarchy
- Limit to 2-3 font families maximum

---

### Spacing & Layout

**Max Content Width:**
- **Primary:** 1280px (80rem) - Main content container
- **Text Content:** 768px (48rem) - Long-form text (About, case studies)
- **Wide:** 1536px (96rem) - Full-width sections (hero, footer)

**Section Padding (Vertical):**
- **Desktop:** 5-6rem (80-96px) top and bottom
- **Tablet:** 4rem (64px)
- **Mobile:** 3rem (48px)

**Container Padding (Horizontal):**
- **Desktop:** 2rem (32px)
- **Tablet:** 1.5rem (24px)
- **Mobile:** 1rem (16px)

**Spacing Scale** (Tailwind default, 0.25rem base):
- **xs:** 0.5rem (8px)
- **sm:** 0.75rem (12px)
- **md:** 1rem (16px)
- **lg:** 1.5rem (24px)
- **xl:** 2rem (32px)
- **2xl:** 2.5rem (40px)
- **3xl:** 3rem (48px)
- **4xl:** 4rem (64px)

**Grid System:**
- 12-column grid on desktop
- 6-column on tablet
- 4-column on mobile
- Gap: 1.5rem (24px) on desktop, 1rem (16px) on mobile

**Breakpoints:**
```javascript
sm: '640px',   // Tablet portrait
md: '768px',   // Tablet landscape
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
2xl: '1536px'  // Extra large
```

**Border Radius:**
- **Small:** 0.375rem (6px) - Buttons, inputs
- **Medium:** 0.5rem (8px) - Cards
- **Large:** 0.75rem (12px) - Modal, featured elements
- **XL:** 1rem (16px) - Hero cards, special sections

**Shadows:**
- **Subtle:** `0 1px 2px rgba(0,0,0,0.05)`
- **Small:** `0 1px 3px rgba(0,0,0,0.1)`
- **Medium:** `0 4px 6px rgba(0,0,0,0.1)`
- **Large:** `0 10px 15px rgba(0,0,0,0.1)`
- **Hover:** `0 20px 25px rgba(0,0,0,0.15)`

---

### Animation Principles

**Phase 1 Animations (MVP):**
- Fade-in on scroll
- Slide-up on scroll
- Hover effects on cards/buttons
- Simple transitions

**Phase 2+ Animations (Enhanced):**
- 3D elements in hero
- Parallax scrolling
- Complex scroll-triggered sequences
- Interactive hover effects
- Loading animations

**Duration:**
- **Micro-interactions:** 150-300ms (hover, click)
- **Transitions:** 300-600ms (page changes, reveals)
- **Entrances:** 600-800ms (section reveals)
- **Complex:** 1000-1500ms (3D, parallax)

**Easing Functions:**
- **Ease-out:** Entrances (fast start, slow end)
- **Ease-in:** Exits (slow start, fast end)
- **Ease-in-out:** Movements, transforms
- **Custom cubic-bezier:** For unique feels

**Common Easings:**
```javascript
easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',
bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
```

**Scroll Animation Triggers:**
- Elements animate when 20-30% scrolled into viewport
- Use IntersectionObserver or ScrollTrigger
- Stagger child elements for visual interest (50-100ms delay)

**Performance Best Practices:**
- Animate only `transform` and `opacity` (GPU-accelerated)
- Use `will-change` sparingly
- Avoid animating `width`, `height`, `margin`, `padding`
- Test on mobile devices (60fps target)
- Implement `prefers-reduced-motion` for accessibility

**Accessibility:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Animation States:**
- **Initial:** Hidden/off-screen
- **Animate:** Visible/on-screen
- **Exit:** Leaving (if needed)
- **Hover:** Interactive state
- **Focus:** Keyboard navigation state

---

## 4. KEY FEATURES

### Phase 1 (MVP) Features ✅
- ✅ **Mobile-First Responsive Design** - Works perfectly on 320px to 4K displays
- ✅ **Hero Section** - Animated gradient with compelling headline
- ✅ **About Me** - Personal story with photo
- ✅ **Services Section** - 4 service cards with icons and descriptions
- ✅ **Featured Project** - Detailed case study with images
- ✅ **Client Testimonial** - Prominently displayed social proof
- ✅ **Contact Form** - Working form with validation and email delivery
- ✅ **Header Navigation** - Smooth scroll to sections
- ✅ **Footer** - Links, social media, copyright
- ✅ **Dark/Light Mode** - Toggle with localStorage persistence
- ✅ **Basic Animations** - Framer Motion fade-ins and slide-ups
- ✅ **Touch-Friendly** - 44px minimum touch targets on mobile
- ✅ **Fast Loading** - Optimized images, code splitting
- ✅ **SEO Basics** - Meta tags, semantic HTML
- ✅ **Deployed** - Live on Vercel with custom domain

### Phase 2 Features ✨
- ✨ **3D Hero Background** - Interactive Three.js scene
- ✨ **Smooth Scrolling** - Lenis for buttery smooth experience
- ✨ **Advanced Scroll Animations** - GSAP ScrollTrigger reveals
- ✨ **Parallax Effects** - Depth on scroll
- ✨ **Enhanced Card Interactions** - Complex hover effects
- ✨ **Loading Animations** - Page load transitions
- ✨ **Micro-interactions** - Button states, input focus

### Phase 3 Features 🚀
- 🚀 **Live Chat Integration** - Tawk.to or Crisp widget
- 🚀 **Analytics** - Vercel Analytics or Google Analytics
- 🚀 **Process Timeline** - Animated "How I Work" section
- 🚀 **Tech Stack Showcase** - Interactive technology logos
- 🚀 **Enhanced SEO** - Structured data, sitemap, meta tags
- 🚀 **Performance Optimization** - Lazy loading, image optimization
- 🚀 **Accessibility Audit** - WCAG AA compliance
- 🚀 **Error Boundaries** - Graceful error handling

### Phase 4 Features 📈
- 📈 **Multi-Project Grid** - Expandable portfolio grid
- 📈 **Project Filtering** - Filter by technology or type
- 📈 **Testimonial Carousel** - Multiple testimonials
- 📈 **Case Study Pages** - Dedicated routes for projects
- 📈 **Routing** - React Router for multi-page experience

### Future Enhancements 💡
- 💡 **Blog Section** - Share insights and tutorials
- 💡 **Newsletter** - Email list building
- 💡 **Downloadable Resume** - PDF download
- 💡 **Calendar Integration** - Calendly for direct booking
- 💡 **Client Intake Quiz** - Qualify leads automatically
- 💡 **Testimonial Submission Form** - Easy client feedback
- 💡 **Dark Mode Animations** - Smooth theme transitions
- 💡 **Open Source Showcase** - GitHub projects
- 💡 **Speaking Engagements** - Talks and presentations

---

## 5. PROJECT STRUCTURE

```
ortus-solutions-website/
├── public/
│   ├── favicon.ico
│   ├── favicon-dark.ico (dark mode)
│   ├── og-image.png (Open Graph for social sharing)
│   └── images/
│       ├── profile.jpg (your photo)
│       ├── profile-square.jpg (square version for cards)
│       ├── hero-gradient.png (optional)
│       ├── project-hero.jpg (main project image)
│       ├── project-1.jpg (additional screenshots)
│       ├── project-2.jpg
│       ├── client-logo.png (testimonial)
│       └── tech-logos/ (technology stack icons)
│           ├── python.svg
│           ├── react.svg
│           ├── aws.svg
│           └── ...
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx (main hero component)
│   │   │   ├── HeroBackground.tsx (gradient or 3D scene)
│   │   │   ├── HeroContent.tsx (text and CTAs)
│   │   │   └── Hero.module.css (optional scoped styles)
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.module.css
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   └── Services.module.css
│   │   ├── Portfolio/
│   │   │   ├── Portfolio.tsx (section wrapper)
│   │   │   ├── FeaturedProject.tsx (main project display)
│   │   │   ├── ProjectCard.tsx (reusable card)
│   │   │   ├── ProjectModal.tsx (expandable detail view)
│   │   │   └── Portfolio.module.css
│   │   ├── Process/
│   │   │   ├── Process.tsx
│   │   │   ├── ProcessStep.tsx
│   │   │   └── Process.module.css
│   │   ├── TechStack/
│   │   │   ├── TechStack.tsx
│   │   │   ├── TechLogo.tsx
│   │   │   └── TechStack.module.css
│   │   ├── Testimonial/
│   │   │   ├── Testimonial.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   └── Testimonial.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.tsx (section wrapper)
│   │   │   ├── ContactForm.tsx (form component)
│   │   │   ├── ContactInfo.tsx (alternative contact methods)
│   │   │   └── Contact.module.css
│   │   └── common/
│   │       ├── Header.tsx (navigation)
│   │       ├── MobileMenu.tsx (hamburger menu)
│   │       ├── Footer.tsx
│   │       ├── Button.tsx (reusable button)
│   │       ├── Card.tsx (reusable card)
│   │       ├── ThemeToggle.tsx (dark/light switch)
│   │       ├── ScrollReveal.tsx (animation wrapper)
│   │       ├── FadeIn.tsx (animation component)
│   │       ├── SlideUp.tsx (animation component)
│   │       ├── Section.tsx (section wrapper)
│   │       ├── Container.tsx (max-width wrapper)
│   │       └── SocialLinks.tsx (social media icons)
│   ├── contexts/
│   │   └── ThemeContext.tsx (dark/light mode state)
│   ├── hooks/
│   │   ├── useInView.ts (intersection observer)
│   │   ├── useTheme.ts (theme management)
│   │   ├── useMediaQuery.ts (responsive breakpoints)
│   │   ├── useScrollPosition.ts (scroll tracking)
│   │   └── useLockBodyScroll.ts (modal scroll lock)
│   ├── data/
│   │   ├── personal.ts (your info, bio, contact)
│   │   ├── services.ts (services data)
│   │   ├── project.ts (single project data)
│   │   ├── testimonial.ts (single testimonial)
│   │   ├── techStack.ts (technologies array)
│   │   ├── process.ts (how you work steps)
│   │   └── social.ts (social media links)
│   ├── lib/
│   │   ├── emailjs.ts (email configuration)
│   │   ├── analytics.ts (analytics helpers)
│   │   └── utils.ts (utility functions)
│   ├── styles/
│   │   ├── globals.css (global styles, resets)
│   │   ├── animations.css (custom animations)
│   │   └── fonts.css (font imports)
│   ├── types/
│   │   ├── index.ts (TypeScript types)
│   │   ├── project.ts
│   │   ├── testimonial.ts
│   │   └── service.ts
│   ├── utils/
│   │   ├── constants.ts (app constants)
│   │   ├── cn.ts (className utility)
│   │   └── validation.ts (form validation schemas)
│   ├── App.tsx (main app component)
│   ├── main.tsx (entry point)
│   ├── vite-env.d.ts (Vite types)
│   └── index.html (root HTML)
├── .env.local (environment variables - DO NOT COMMIT)
├── .env.example (example env vars)
├── .eslintrc.cjs (ESLint config)
├── .gitignore
├── .prettierrc (Prettier config)
├── .prettierignore
├── index.html (Vite entry)
├── package.json
├── package-lock.json
├── postcss.config.js (PostCSS for Tailwind)
├── tailwind.config.js (Tailwind configuration)
├── tsconfig.json (TypeScript config)
├── tsconfig.node.json (TypeScript for Node)
├── vite.config.ts (Vite configuration)
├── vercel.json (Vercel deployment config)
├── README.md (project documentation)
└── PRD.md (this file)
```

**Organization Principles:**
- Components organized by feature/section
- Shared components in `common/`
- Data separated from components
- Hooks for reusable logic
- Types for TypeScript definitions
- Utils for helper functions

---

## 6. PHASED DEVELOPMENT APPROACH

### **PHASE 1: MVP (DEPLOYABLE)** ⭐

**Goal:** Launch a fully functional, beautiful portfolio website that converts visitors into consultations.

**Timeline:** 5-7 days

**Success Criteria:**
- ✅ Website is live and accessible
- ✅ Works perfectly on mobile and desktop
- ✅ All sections functional
- ✅ Contact form sends emails
- ✅ Dark/light mode works
- ✅ Performance: Lighthouse score 85+

---

#### **Day 1: Setup & Foundation**

**Tasks:**
1. Initialize project
   ```bash
   npm create vite@latest ortus-solutions-website -- --template react-ts
   cd ortus-solutions-website
   npm install
   ```

2. Install core dependencies
   ```bash
   npm install tailwindcss postcss autoprefixer
   npm install framer-motion
   npm install react-hook-form zod @hookform/resolvers
   npm install lucide-react
   npm install clsx
   npx tailwindcss init -p
   ```

3. Configure Tailwind CSS
   - Set up `tailwind.config.js` with custom colors, fonts
   - Configure `globals.css` with Tailwind directives
   - Add custom CSS variables for theming

4. Set up TypeScript
   - Configure `tsconfig.json` with path aliases
   - Set up strict mode

5. Set up ESLint & Prettier
   ```bash
   npm install -D eslint prettier eslint-config-prettier
   npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

6. Create basic project structure
   - Create all folders (components, hooks, data, etc.)
   - Create placeholder files

7. Set up Git
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Project setup"
   ```

8. Deploy to Vercel (initial deployment)
   - Connect GitHub repo to Vercel
   - Verify deployment works
   - Get preview URL

**Deliverables:**
- ✅ Project initialized with Vite + React + TypeScript
- ✅ Tailwind CSS configured and working
- ✅ Project structure in place
- ✅ Git repository created
- ✅ Initial Vercel deployment successful

---

#### **Day 2: Core Components & Layout**

**Tasks:**
1. Build Theme Context
   - Create `ThemeContext.tsx`
   - Implement dark/light mode state
   - Add localStorage persistence
   - Create `useTheme` hook

2. Build Header Component
   - Logo/Name
   - Navigation links (smooth scroll)
   - Theme toggle button
   - Mobile hamburger menu
   - Sticky/fixed positioning
   - Responsive design

3. Build Footer Component
   - Logo/Name
   - Navigation links
   - Social media links (from data)
   - Copyright
   - "Built with..." text
   - Responsive layout

4. Create Reusable Components
   - `Button.tsx` - Primary, secondary, outline variants
   - `Card.tsx` - Reusable card wrapper
   - `Section.tsx` - Section wrapper with padding
   - `Container.tsx` - Max-width container
   - `SocialLinks.tsx` - Social media icons

5. Create Animation Components
   - `FadeIn.tsx` - Fade-in animation wrapper
   - `SlideUp.tsx` - Slide-up animation wrapper
   - `ScrollReveal.tsx` - Reveal on scroll wrapper

6. Create Custom Hooks
   - `useInView.ts` - IntersectionObserver hook
   - `useMediaQuery.ts` - Responsive breakpoint hook
   - `useScrollPosition.ts` - Track scroll position

7. Test Theme Toggle
   - Verify dark/light mode switching
   - Verify localStorage persistence
   - Test on mobile and desktop

**Deliverables:**
- ✅ Theme system working (dark/light mode)
- ✅ Header with navigation functional
- ✅ Footer with links and social icons
- ✅ Reusable components created
- ✅ Animation wrappers ready to use
- ✅ Custom hooks implemented

---

#### **Day 3: Hero & About Sections**

**Tasks:**
1. Create Personal Data File
   - `src/data/personal.ts`
   - Your name, title, tagline
   - Bio content (2-3 paragraphs)
   - Contact email
   - Social media links
   - Photo paths

2. Build Hero Section
   - Create `Hero.tsx` component
   - Animated gradient background (CSS or canvas)
   - Large headline with animation
   - Subheadline
   - Your name and title
   - Primary CTA button (scroll to contact)
   - Secondary CTA button (scroll to work)
   - Entrance animations with Framer Motion
   - Fully responsive

3. Build About Section
   - Create `About.tsx` component
   - Your photo (optimized, responsive)
   - Personal bio text
   - Your story and approach
   - Fade-in animations on scroll
   - Two-column layout (desktop) / stacked (mobile)
   - Image hover effects

4. Optimize Images
   - Compress profile photos
   - Create multiple sizes for responsive loading
   - Add proper alt text

5. Test Responsiveness
   - Test on 320px (small mobile)
   - Test on 375px (iPhone)
   - Test on 768px (tablet)
   - Test on 1920px (desktop)

**Deliverables:**
- ✅ Hero section complete with animations
- ✅ About Me section complete with photo and bio
- ✅ Both sections fully responsive
- ✅ Smooth scroll from hero CTAs
- ✅ Animations working on scroll

---

#### **Day 4: Services & Testimonial Sections**

**Tasks:**
1. Create Services Data
   - `src/data/services.ts`
   - 4 services with:
     - Title
     - Description (100-150 words)
     - Icon name (Lucide icon)
     - Key features (bullet points)

2. Build Services Section
   - Create `Services.tsx` component
   - Create `ServiceCard.tsx` component
   - 4 cards in responsive grid
   - Icons from Lucide React
   - Hover effects
   - Scroll-triggered staggered animations
   - Responsive: 1 column (mobile), 2 columns (tablet), 4 columns (desktop)

3. Create Testimonial Data
   - `src/data/testimonial.ts`
   - Client quote
   - Client name, title, company
   - Client photo or company logo (if available)
   - Project reference

4. Build Testimonial Section
   - Create `Testimonial.tsx` component
   - Large, prominent quote display
   - Client info and photo/logo
   - Link to related project
   - Beautiful typography
   - Background styling (subtle)
   - Fade-in animation on scroll

5. Polish Card Designs
   - Add shadows, borders
   - Refine hover states
   - Test dark mode appearance
   - Ensure touch-friendly on mobile

**Deliverables:**
- ✅ Services section with 4 animated cards
- ✅ Testimonial section prominently displayed
- ✅ Both sections fully responsive
- ✅ Animations and hover effects working
- ✅ Content populated from data files

---

#### **Day 5: Project & Contact Sections**

**Tasks:**
1. Create Project Data
   - `src/data/project.ts`
   - Project title
   - Client/industry
   - Challenge description
   - Solution description
   - Technologies used (array)
   - Results with metrics
   - Images (3-5 screenshots/diagrams)
   - Links (if applicable)

2. Build Portfolio Section
   - Create `Portfolio.tsx` component
   - Create `FeaturedProject.tsx` component
   - Create `ProjectModal.tsx` for expanded view
   - Large hero image
   - Detailed case study content
   - Technology badges
   - Results highlights
   - "More coming soon" indication
   - Modal/expansion for full details
   - Image gallery/carousel

3. Create Contact Section
   - Create `Contact.tsx` component
   - Create `ContactForm.tsx` component
   - Section headline and subheadline
   - Form fields:
     - Name (required)
     - Email (required)
     - Company (optional)
     - Project description (required, textarea)
     - Budget range (optional, select)
     - Timeline (optional, select)
   - Form validation with React Hook Form + Zod
   - Error message display
   - Success message display
   - Loading state during submission
   - Alternative contact info (email link)

4. Set up EmailJS
   - Create EmailJS account
   - Create email template
   - Get service ID, template ID, public key
   - Configure `src/lib/emailjs.ts`
   - Test email sending

5. Form Validation Schema
   - Create `src/utils/validation.ts`
   - Zod schemas for form validation
   - Email format validation
   - Required field validation
   - Character limits

**Deliverables:**
- ✅ Featured project section with detailed case study
- ✅ Contact form fully functional
- ✅ Form validation working
- ✅ Email submission working (test it!)
- ✅ Success/error states implemented
- ✅ Both sections fully responsive

---

#### **Day 6: Polish, Testing & Additional Sections**

**Tasks:**
1. Build Tech Stack Section
   - Create `src/data/techStack.ts`
   - Categories: Languages, Cloud, Data, Databases, Tools
   - Technology objects: name, logo, category
   - Create `TechStack.tsx` component
   - Responsive grid of technology logos
   - Tooltips on hover (show name)
   - Fade-in animations
   - Category organization

2. Build Process Section
   - Create `src/data/process.ts`
   - 4 steps: Discovery, Planning, Development, Deployment
   - Each with: title, description, icon
   - Create `Process.tsx` component
   - Create `ProcessStep.tsx` component
   - Timeline or card layout
   - Icons from Lucide
   - Scroll animations
   - Responsive design

3. Mobile Responsive Testing
   - Test every section on:
     - 320px (iPhone SE)
     - 375px (iPhone 12/13)
     - 390px (iPhone 14 Pro)
     - 414px (iPhone Plus)
     - 768px (iPad)
     - 1024px (iPad Pro)
   - Fix any layout issues
   - Test hamburger menu
   - Test form on mobile
   - Test touch interactions

4. Cross-Browser Testing
   - Chrome (primary)
   - Safari (mobile and desktop)
   - Firefox
   - Edge
   - Fix any browser-specific issues

5. Dark Mode Testing
   - Test every section in dark mode
   - Verify all text is readable (contrast)
   - Check all images look good
   - Verify form states in dark mode
   - Test toggle button

6. Performance Optimization
   - Optimize all images (compress, WebP format)
   - Lazy load images
   - Code split components (React.lazy if needed)
   - Minimize bundle size
   - Test with Lighthouse

7. SEO Basics
   - Add meta tags in `index.html`:
     - Title
     - Description
     - Keywords
     - Open Graph tags (for social sharing)
     - Twitter Card tags
   - Add semantic HTML (proper heading hierarchy)
   - Add alt text to all images
   - Test with Lighthouse SEO audit

**Deliverables:**
- ✅ Tech Stack section complete
- ✅ Process section complete
- ✅ Mobile responsive across all devices
- ✅ Cross-browser compatible
- ✅ Dark mode fully working
- ✅ Performance optimized
- ✅ SEO basics implemented

---

#### **Day 7: Final Deployment**

**Tasks:**
1. Final Content Review
   - Proofread all text for typos
   - Verify all links work
   - Test all CTAs
   - Check image quality
   - Verify contact form sends emails

2. Accessibility Check
   - Keyboard navigation (Tab through entire site)
   - ARIA labels where needed
   - Focus states visible
   - Color contrast (4.5:1 minimum)
   - Screen reader testing (optional)

3. Final Performance Check
   - Run Lighthouse audit
   - Target: 90+ on all metrics
   - Fix any issues
   - Verify fast loading on mobile

4. Production Build
   ```bash
   npm run build
   npm run preview  # Test production build locally
   ```

5. Environment Variables
   - Create `.env.local` file
   - Add EmailJS credentials
   - Add to `.gitignore`
   - Configure on Vercel

6. Vercel Deployment
   - Push to GitHub
   - Verify automatic deployment
   - Test live site thoroughly
   - Check all functionality works

7. Custom Domain Setup
   - Purchase domain (if not already)
   - Configure DNS settings
   - Point to Vercel
   - Wait for DNS propagation
   - Verify HTTPS works

8. Final Testing
   - Test live site on mobile device
   - Test form submission from live site
   - Test on different networks (WiFi, 4G)
   - Send to a friend for feedback

9. Analytics Setup (Basic)
   - Enable Vercel Analytics (free)
   - Or add Google Analytics
   - Verify tracking works

**Deliverables:**
- ✅ Production-ready website deployed
- ✅ Custom domain configured
- ✅ HTTPS enabled
- ✅ All functionality tested and working
- ✅ Analytics tracking enabled
- ✅ Website live and ready to share! 🎉

---

### **PHASE 1 CHECKLIST**

Before considering Phase 1 complete, verify:

**Functionality:**
- [ ] All sections render correctly
- [ ] Navigation smooth scrolls to sections
- [ ] Mobile menu opens/closes
- [ ] Dark/light mode toggle works
- [ ] Theme preference persists on reload
- [ ] Contact form validates input
- [ ] Contact form sends emails successfully
- [ ] Success message shows after submission
- [ ] All links work (social, email, etc.)
- [ ] All CTAs function correctly

**Responsive Design:**
- [ ] Works on 320px width (small mobile)
- [ ] Works on 768px width (tablet)
- [ ] Works on 1920px width (desktop)
- [ ] No horizontal scroll on mobile
- [ ] Text readable at all sizes
- [ ] Images scale properly
- [ ] Touch targets are 44px+ on mobile

**Performance:**
- [ ] Lighthouse Performance: 85+
- [ ] Lighthouse Accessibility: 90+
- [ ] Lighthouse Best Practices: 90+
- [ ] Lighthouse SEO: 90+
- [ ] Page loads in under 3 seconds

**Visual Polish:**
- [ ] Animations smooth (60fps)
- [ ] No layout shift on load
- [ ] Images are high quality
- [ ] Colors consistent
- [ ] Typography hierarchy clear
- [ ] Dark mode looks good
- [ ] Hover states work

**Content:**
- [ ] No placeholder text (lorem ipsum)
- [ ] No typos or grammar errors
- [ ] All images have alt text
- [ ] Meta tags accurate
- [ ] Contact info correct

**Deployment:**
- [ ] Live on Vercel
- [ ] Custom domain working
- [ ] HTTPS enabled
- [ ] No console errors

---

### **PHASE 2: ENHANCED ANIMATIONS** ✨

**Goal:** Add "wow factor" with advanced animations that showcase technical sophistication.

**Timeline:** 3-4 days

**Prerequisites:** Phase 1 complete and deployed

---

#### **What Changes in Phase 2:**

**From:** Simple fade-ins and slide-ups
**To:** Complex scroll-triggered animations, 3D elements, parallax effects

---

#### **Day 1: 3D Hero Background**

**Tasks:**
1. Install Three.js Dependencies
   ```bash
   npm install three @react-three/fiber @react-three/drei
   ```

2. Create 3D Scene Component
   - Create `src/components/Hero/HeroBackground3D.tsx`
   - Basic Three.js scene setup
   - Choose a visual:
     - **Option A:** Particle system (data points floating)
     - **Option B:** Geometric shapes (rotating/morphing)
     - **Option C:** Abstract network (connected nodes)
     - **Option D:** Fluid simulation

3. Implement Chosen 3D Visual
   - Add lighting
   - Add camera controls
   - Mouse/touch interaction (parallax)
   - Performance optimization (low poly count)
   - Mobile optimization (simpler version)

4. Integrate with Hero
   - Replace gradient background with 3D canvas
   - Ensure text remains readable (contrast)
   - Add blur/overlay if needed
   - Test responsiveness

5. Performance Testing
   - Monitor FPS on desktop (target 60fps)
   - Test on mobile (target 30fps minimum)
   - Add fallback to gradient if WebGL not supported
   - Use `useReducedMotion` to disable on request

**Deliverables:**
- ✅ 3D interactive background in Hero
- ✅ Responsive and performant
- ✅ Fallback for unsupported browsers
- ✅ Mobile-optimized version

---

#### **Day 2: GSAP & ScrollTrigger**

**Tasks:**
1. Install GSAP
   ```bash
   npm install gsap
   ```

2. Set up ScrollTrigger
   - Create `src/lib/gsap.ts` for GSAP utilities
   - Register ScrollTrigger plugin
   - Create helper functions

3. Implement Scroll Animations
   - **Services Section:** Cards slide in from sides with rotation
   - **About Section:** Image zooms in while text fades
   - **Project Section:** Images parallax at different speeds
   - **Tech Stack:** Logos fade and scale on scroll
   - **Process Section:** Timeline progresses on scroll

4. Create Scroll Progress Indicator
   - Thin line at top showing scroll progress
   - Color changes based on section
   - Smooth animation

5. Pin Sections (Optional)
   - Pin hero while scrolling down
   - Reveal next section over hero
   - Test on mobile (may need to disable)

6. Fine-tune Timing
   - Adjust trigger points (start, end)
   - Stagger animations for visual interest
   - Test scroll speed impact

**Deliverables:**
- ✅ GSAP ScrollTrigger animations throughout site
- ✅ Scroll progress indicator
- ✅ Smooth, coordinated scroll experience
- ✅ Works on mobile and desktop

---

#### **Day 3: Smooth Scrolling & Parallax**

**Tasks:**
1. Install Lenis
   ```bash
   npm install @studio-freight/lenis
   ```

2. Implement Smooth Scrolling
   - Create `src/hooks/useSmoothScroll.ts`
   - Initialize Lenis in App.tsx
   - Configure easing and duration
   - Test on all browsers

3. Add Parallax Effects
   - **Hero:** Background moves slower than foreground
   - **About:** Image parallax
   - **Project:** Multi-layer parallax
   - **Testimonial:** Subtle background movement
   - Use transform3d for performance

4. Create Parallax Components
   - `ParallaxWrapper.tsx` - Reusable parallax container
   - Configurable speed/direction
   - Mobile optimization (reduce or disable)

5. Cursor Effects (Optional)
   - Custom cursor on desktop
   - Cursor changes on hover (buttons, links)
   - Trailing effect or spotlight

6. Refine Navigation
   - Update navigation to work with Lenis
   - Smooth scroll to sections on click
   - Update active section indicator

**Deliverables:**
- ✅ Buttery smooth scrolling with Lenis
- ✅ Parallax effects throughout site
- ✅ Navigation updated for smooth scroll
- ✅ Optional cursor effects

---

#### **Day 4: Polish & Advanced Interactions**

**Tasks:**
1. Enhanced Card Interactions
   - **Service Cards:**
     - 3D tilt on hover
     - Reveal hidden content on hover
     - Glow effect
   - **Project Card:**
     - Image zoom on hover
     - Overlay slides in
     - Smooth modal opening

2. Loading Animation
   - Create page load animation
   - Logo reveal or progress bar
   - Fade in site after load

3. Page Transition (if multi-page)
   - Fade between routes
   - Smooth transitions

4. Micro-interactions
   - Button hover effects (ripple, scale)
   - Input focus animations
   - Form submission animation
   - Success checkmark animation
   - Error shake animation

5. Testimonial Enhancement
   - Subtle floating animation
   - Quote marks animate in
   - Client photo fade-in

6. Tech Stack Interaction
   - Phase 2+: Logos float and rotate
   - Hover to highlight
   - Click to show description modal

7. Performance Audit
   - Ensure all animations are 60fps
   - Check mobile performance
   - Optimize if needed
   - Test with throttled CPU

**Deliverables:**
- ✅ Enhanced hover effects on all interactive elements
- ✅ Loading animation
- ✅ Refined micro-interactions
- ✅ Smooth and performant

---

### **PHASE 2 CHECKLIST**

Before considering Phase 2 complete:

**Animations:**
- [ ] 3D hero background working and performant
- [ ] GSAP scroll animations throughout
- [ ] Smooth scrolling with Lenis
- [ ] Parallax effects visible and smooth
- [ ] All animations respect reduced-motion

**Performance:**
- [ ] 60fps on desktop
- [ ] 30fps+ on mobile
- [ ] No janky scrolling
- [ ] Lighthouse Performance still 85+

**Responsiveness:**
- [ ] Animations work on mobile (or gracefully reduced)
- [ ] 3D scene optimized for mobile
- [ ] Touch interactions smooth

**Polish:**
- [ ] No animation bugs or glitches
- [ ] Timing feels natural
- [ ] Site feels cohesive

---

### **PHASE 3: ADVANCED FEATURES** 🚀

**Goal:** Add professional integrations and optimize for conversion and performance.

**Timeline:** 2-3 days

**Prerequisites:** Phase 2 complete

---

#### **Day 1: Integrations**

**Tasks:**
1. Live Chat Integration
   - Choose platform: Tawk.to (recommended - free)
   - Create account
   - Get embed code
   - Create `ChatWidget.tsx` component
   - Add to layout (bottom-right)
   - Customize appearance (match brand colors)
   - Test in dark/light mode
   - Configure away message, automated responses

2. Analytics Integration
   - **Option A:** Vercel Analytics (easiest)
     ```bash
     npm install @vercel/analytics
     ```
   - **Option B:** Google Analytics 4
   - Create `src/lib/analytics.ts`
   - Track page views
   - Track form submissions
   - Track button clicks (optional)
   - Test in incognito mode

3. SEO Enhancements
   - Add `robots.txt`
   - Create XML sitemap
   - Add structured data (JSON-LD):
     - Person schema
     - Service schema
     - Review schema (for testimonial)
   - Optimize meta descriptions
   - Add canonical URLs

4. Open Graph Images
   - Create OG image (1200x630px)
   - Add to public folder
   - Update meta tags
   - Test with social media debugger

**Deliverables:**
- ✅ Live chat widget functional
- ✅ Analytics tracking pageviews and conversions
- ✅ Enhanced SEO (sitemap, structured data)
- ✅ Social sharing optimized

---

#### **Day 2: Performance & Optimization**

**Tasks:**
1. Image Optimization
   - Convert images to WebP format
   - Create multiple sizes (srcset)
   - Implement lazy loading (beyond fold)
   - Add blur placeholders
   - Use `loading="eager"` for hero image
   - Compress without quality loss

2. Code Optimization
   - Code split large components
   ```tsx
   const ProjectModal = React.lazy(() => import('./ProjectModal'))
   ```
   - Tree-shake unused code
   - Minimize bundle size
   - Analyze with `npm run build -- --analyze`

3. Font Optimization
   - Self-host fonts (if using Google Fonts)
   - Use `font-display: swap`
   - Preload critical fonts
   - Subset fonts (remove unused characters)

4. Accessibility Enhancements
   - Add skip navigation link
   - Ensure all interactive elements are keyboard accessible
   - Add ARIA labels to interactive elements
   - Test with screen reader (NVDA, VoiceOver)
   - Add focus indicators
   - Ensure minimum touch target sizes (44x44px)

5. Error Handling
   - Add Error Boundary component
   - Graceful fallback UI
   - Log errors (Sentry optional)
   - Form error states
   - Network error handling

6. Loading States
   - Add loading spinners where needed
   - Skeleton screens for content (optional)
   - Smooth transitions between states

**Deliverables:**
- ✅ Optimized images (WebP, lazy loading)
- ✅ Reduced bundle size
- ✅ Improved Lighthouse scores
- ✅ Enhanced accessibility (WCAG AA)
- ✅ Error handling implemented

---

#### **Day 3: Final Polish**

**Tasks:**
1. Process Section Enhancement
   - Animated timeline (if not done in Phase 1)
   - Icons animate on scroll
   - Progress bar fills as you scroll
   - Hover states on steps

2. 404 Page (if using routing)
   - Custom 404 design
   - Animated illustration
   - Link back to home
   - Fun message

3. Favicon Set
   - Multiple sizes (16, 32, 180, 192, 512)
   - Light and dark mode favicons
   - Apple touch icon
   - Web manifest

4. Final Responsive Check
   - Test on real devices
   - iOS Safari
   - Android Chrome
   - iPad
   - Large desktop monitors (4K)

5. Performance Final Audit
   - Run Lighthouse (target 95+ on all)
   - Test on slow 3G network
   - Optimize further if needed

6. A/B Test Preparation (Optional)
   - Prepare alternate CTA copy
   - Track different button clicks
   - Set up conversion funnels

**Deliverables:**
- ✅ Process section enhanced
- ✅ 404 page created
- ✅ Complete favicon set
- ✅ Final responsive testing complete
- ✅ Performance optimized (95+ Lighthouse)

---

### **PHASE 3 CHECKLIST**

- [ ] Live chat working and tested
- [ ] Analytics tracking conversions
- [ ] SEO fully optimized (sitemap, structured data)
- [ ] Images optimized (WebP, lazy load)
- [ ] Accessibility WCAG AA compliant
- [ ] Error boundaries implemented
- [ ] Lighthouse scores: 95+ on all metrics
- [ ] Works on real mobile devices
- [ ] Tested on slow networks

---

### **PHASE 4: CONTENT EXPANSION** 📈

**Goal:** Prepare the site architecture to scale as you complete more projects and gather more testimonials.

**Timeline:** 1-2 days

**Prerequisites:** Phase 3 complete

**When to do Phase 4:** After you've completed 2-3 more projects and have 2-3 more testimonials.

---

#### **Tasks:**

1. **Multi-Project Grid**
   - Modify Portfolio section to display grid
   - Create filtering by technology or type
   - Add project tags/categories
   - Pagination or "Load More" button
   - Grid animation on filter change

2. **Project Detail Pages (Optional)**
   - Add React Router
   - Create individual project routes
   - Deep-linkable project URLs
   - Back navigation
   - Related projects section

3. **Testimonials Carousel/Grid**
   - Convert single testimonial to carousel
   - Add navigation arrows
   - Auto-rotate option
   - Or: Grid of testimonial cards

4. **Blog Section (Future)**
   - Blog listing page
   - Blog post template
   - Markdown support (MDX)
   - Categories and tags
   - RSS feed

5. **Content Management**
   - Move data to JSON files or headless CMS
   - Make content easily editable
   - Consider Contentful, Sanity, or Strapi

**Deliverables:**
- ✅ Scalable project grid
- ✅ Multiple testimonials support
- ✅ Optional: Project detail pages
- ✅ Optional: Blog foundation

---

## 7. CONTENT REQUIREMENTS

### What You Have ✅
- ✅ One client project (case study)
- ✅ One testimonial

### What You Need for Phase 1 📝

**Personal Information:**
- [ ] Full name
- [ ] Professional title/tagline
- [ ] Email address (for contact)
- [ ] Phone number (optional)
- [ ] Location (optional, e.g., "Based in San Francisco" or "Remote")
- [ ] Years of experience or "Since XXXX"

**Photos:**
- [ ] Professional headshot (high quality, 1000x1000px minimum)
  - Professional but approachable
  - Good lighting
  - Neutral or professional background
  - Smiling or confident expression
- [ ] Optional: Square version for different layouts
- [ ] Optional: Hero background image (if not using 3D)

**About Me Content:**
- [ ] Personal bio (200-300 words)
  - Your journey into data engineering
  - Why you love this work
  - Your approach/philosophy
  - What makes you different
  - Personal touches (hobbies related to work, interesting facts)
- [ ] Key achievements or certifications
- [ ] Notable stats (years of experience, projects completed, data processed, etc.)

**Services Content:**
For each of 4 services:
- [ ] Service name
- [ ] Icon choice (from Lucide React)
- [ ] Description (100-150 words)
- [ ] Key features or benefits (3-5 bullet points)

Example:
```
Service: Data Pipeline Development
Icon: "database"
Description: "I build scalable, reliable data pipelines from scratch using modern tools like Apache Airflow, AWS, and Python. Whether you need real-time streaming or batch processing, I design architectures that handle millions of records while maintaining data quality and monitoring."
Features:
- ETL/ELT pipeline design and implementation
- Real-time and batch processing
- Data quality monitoring and alerting
- Cloud-native architectures (AWS, GCP, Azure)
- Scalable to millions of records
```

**Process/How You Work:**
- [ ] 4 steps of your process
- [ ] Brief description of each step (2-3 sentences)
- [ ] Icons for each step

Example:
```
1. Discovery & Planning
   "I start by understanding your business goals and technical requirements. We'll discuss your current data challenges, define success metrics, and outline the project scope."
   Icon: "search"

2. Design & Architecture
   "I design a scalable solution tailored to your needs, selecting the right technologies and defining clear milestones. You'll get a detailed architecture diagram and timeline."
   Icon: "layout"

3. Development & Testing
   "Using agile methodology, I build your solution in iterations, keeping you updated with regular progress reports. Rigorous testing ensures reliability and performance."
   Icon: "code"

4. Deployment & Support
   "I deploy to production with minimal disruption, provide complete documentation, and offer training to your team. Post-launch support ensures smooth operation."
   Icon: "rocket"
```

**Technology Stack:**
- [ ] List of all technologies you work with
- [ ] Categorized by type (Languages, Cloud, Data Tools, Databases, etc.)
- [ ] Logo images for each (download from official sites or use icon libraries)

Example categories:
```
Languages: Python, JavaScript/TypeScript, SQL, Bash
Cloud: AWS, Google Cloud, Azure, DigitalOcean
Data Engineering: Apache Airflow, Kafka, Spark, dbt, Pandas
Databases: PostgreSQL, MySQL, MongoDB, Redis, Snowflake
DevOps: Docker, Kubernetes, Git, GitHub Actions, Terraform
Web: React, Node.js, FastAPI, Flask
```

**Featured Project Content:**
- [ ] Project title
- [ ] Client name (or "Enterprise Healthcare Company" if anonymous)
- [ ] Industry
- [ ] Project date or duration
- [ ] Challenge/Problem statement (2-3 sentences)
- [ ] Detailed solution description (2-3 paragraphs)
- [ ] Technologies used (list with logos)
- [ ] Results/Impact with specific metrics:
  - "Reduced data processing time by 75%"
  - "Automated 40 hours of manual work per week"
  - "Processes 2 million records daily with 99.9% uptime"
  - "Saved $50,000 annually in operational costs"
- [ ] Project images:
  - Hero image (architecture diagram, dashboard, or representative screenshot)
  - 2-4 additional screenshots or diagrams
  - All high resolution, properly formatted
- [ ] Optional: Link to live demo or GitHub (if public)
- [ ] Optional: Case study PDF for download

**Testimonial Content:**
- [ ] Client quote (2-4 sentences)
  - Should be specific, not generic
  - Should mention results or experience
  - Should feel authentic
- [ ] Client name
- [ ] Client title
- [ ] Client company
- [ ] Optional: Client photo (with permission)
- [ ] Optional: Company logo
- [ ] Context: Which project does this testimonial relate to?

Example:
```
Quote: "Working with [Your Name] was a game-changer for our data operations. He built a custom pipeline that reduced our processing time from 8 hours to 45 minutes, and his documentation was so thorough that our team was able to maintain and extend the system easily. He's a rare combination of technical excellence and clear communication."

Client: Sarah Johnson
Title: VP of Engineering
Company: TechCorp Solutions
```

**Social Links:**
- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] Twitter/X URL (optional)
- [ ] Medium/Blog URL (optional)
- [ ] Stack Overflow (optional)
- [ ] Email (already covered)

**Availability Status:**
- [ ] Current status: "Currently accepting new projects" or "Booking for Q2 2025"
- [ ] Response time: "I typically respond within 24 hours"
- [ ] Consultation details: "Free 30-minute consultation to discuss your project"

**Legal/Optional:**
- [ ] Privacy Policy (if collecting data)
- [ ] Terms of Service (optional)
- [ ] Copyright year

---

### Content Checklist Before Starting

Before beginning development, ensure you have:

**Critical for Phase 1:**
- [ ] Your professional photo (high quality)
- [ ] Personal bio written
- [ ] Service descriptions written (all 4)
- [ ] Project case study written (full detail)
- [ ] Project images ready (3-5 images)
- [ ] Testimonial quote and client details
- [ ] Technology stack list complete
- [ ] Social media links
- [ ] Contact email

**Nice to Have:**
- [ ] How you work / process steps written
- [ ] Client logo for testimonial
- [ ] Multiple photo options
- [ ] Additional project images

**Can Add Later:**
- [ ] More projects (Phase 4)
- [ ] More testimonials (Phase 4)
- [ ] Blog posts (Future)
- [ ] Certifications
- [ ] Speaking engagements

---

### Content Organization

**Recommended Format: TypeScript Data Files**

Store all content in `src/data/` as TypeScript objects:

```typescript
// src/data/personal.ts
export const personalInfo = {
  name: "Your Name",
  title: "Data Engineer & Automation Specialist",
  tagline: "I Build Data Pipelines & Automations From Zero",
  bio: "Your bio here...",
  email: "you@ortussolutions.com",
  phone: "+1 (555) 123-4567", // optional
  location: "San Francisco, CA", // optional
  yearsOfExperience: 7,
  photo: "/images/profile.jpg",
  resume: "/documents/resume.pdf", // optional
}

// src/data/social.ts
export const socialLinks = {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourhandle",
  email: "you@ortussolutions.com",
}

// etc.
```

This makes content easy to update without touching components.

---

## 8. SUCCESS METRICS

### Technical Metrics

**Performance:**
- **Target:** Lighthouse Performance Score 90+
- **Page Load Time:** Under 2 seconds on 4G
- **Time to Interactive:** Under 3 seconds
- **First Contentful Paint:** Under 1 second
- **Cumulative Layout Shift:** Under 0.1

**Accessibility:**
- **Target:** Lighthouse Accessibility Score 95+
- **WCAG Compliance:** AA level minimum
- **Keyboard Navigation:** 100% operable

**SEO:**
- **Target:** Lighthouse SEO Score 95+
- **Meta Tags:** Complete and optimized
- **Structured Data:** Implemented
- **Mobile-Friendly:** 100%

**Browser Compatibility:**
- Chrome/Edge: 100%
- Firefox: 100%
- Safari: 100%
- Mobile Safari: 100%
- Mobile Chrome: 100%

---

### Business Metrics

**Primary KPI: Consultation Form Submissions**
- Track weekly/monthly submissions
- Target: 5-10 inquiries per month (adjust based on traffic)
- Conversion rate: 2-5% of visitors

**Engagement Metrics:**
- **Average Session Duration:** 2+ minutes (indicates engagement)
- **Bounce Rate:** Under 50%
- **Pages Per Session:** 1.5+ (scrolling through sections counts)

**Traffic Metrics:**
- **Unique Visitors:** Track monthly growth
- **Traffic Sources:** Organic search, LinkedIn, direct, referrals
- **Mobile vs. Desktop:** Monitor device split

**Conversion Funnel:**
1. Landing (100%)
2. Scrolls past hero (70%)
3. Views project (40%)
4. Reaches contact form (20%)
5. Submits form (5%)

---

### How to Measure

**Analytics Setup:**
1. Enable Vercel Analytics (automatic)
2. Add Google Analytics 4 (optional, more detailed)
3. Track events:
   - Button clicks ("View Work", "Book Consultation")
   - Form submissions
   - Section views (scroll depth)
   - External link clicks (LinkedIn, GitHub)

**Weekly Review:**
- Check form submissions
- Review analytics dashboard
- Monitor for any errors or issues
- Read any feedback from live chat

**Monthly Review:**
- Analyze traffic trends
- Review conversion rates
- Gather feedback from clients who found you via site
- Identify areas for improvement

---

## 9. DESIGN CONSIDERATIONS FOR SOLO PORTFOLIO

### Authenticity Over Corporate 🎯

**Use First Person:**
- ✅ "I build data pipelines..."
- ✅ "My approach is..."
- ✅ "Let me help you..."
- ❌ "We build data pipelines..."
- ❌ "Our team..."

**Personal Touch:**
- Share your story (how you got into this field)
- Show your face prominently
- Be conversational in tone
- Share what you're passionate about
- Mention hobbies or interests (if relevant)

**Example About Section:**
```
I fell in love with data engineering during my first job at a startup,
where I saw firsthand how the right data infrastructure could transform
a business. Since then, I've helped over 20 companies build pipelines
that process millions of records daily.

I believe in building systems that are not just functional, but
maintainable and scalable. When I'm not coding, you'll find me
contributing to open-source projects or writing about data engineering
on my blog.
```

---

### Handling Limited Content 💎

**One Project Strategy:**
- **Feature it prominently** - Make it the centerpiece
- **Go deep, not wide** - Comprehensive case study
- **Tell the story** - Challenge, solution, results
- **Show the process** - Architecture diagrams, code snippets (if appropriate)
- **Quantify results** - Specific metrics
- **Add "Coming Soon"** - Empty state shows you're growing

**Visual Strategy:**
```
[Featured Project - Large Card]
[Empty Card: "Project #2 - Coming Soon"]
[Empty Card: "Project #3 - Coming Soon"]
```

This shows:
1. You have real work to show
2. You're actively taking on new clients
3. The site is designed to grow

---

**One Testimonial Strategy:**
- **Make it HUGE** - Large typography, prominent placement
- **Add context** - Link to the project it references
- **Use singular language** - "Client Feedback" or "What a Client Says"
- **Placement matters** - Consider putting it right after About or before Contact (high-impact areas)
- **Design as a feature** - Beautiful card with quote marks, background styling

**Example Layout:**
```
┌─────────────────────────────────────────┐
│ "Working with [Your Name] was a game-   │
│  changer for our data operations..."    │
│                                          │
│  - Sarah Johnson, VP Engineering        │
│    TechCorp Solutions                   │
│                                          │
│  [Read the full case study →]           │
└─────────────────────────────────────────┘
```

---

### Building Trust as Solo Consultant 🤝

**Emphasize:**
1. **Experience & Expertise**
   - Years in the field
   - Technologies mastered
   - Industries worked in
   - Scale of projects (data volume, complexity)

2. **Direct Access**
   - "You'll work directly with me, not a junior team member"
   - "No middlemen, no overhead"
   - "Quick decisions, fast turnaround"

3. **Transparent Process**
   - Clear steps in "How I Work"
   - Honest timelines
   - Upfront about costs

4. **Availability & Responsiveness**
   - "I respond within 24 hours"
   - "Currently accepting new projects"
   - Show availability status

5. **Social Proof**
   - LinkedIn profile (shows professional history)
   - GitHub profile (shows code quality)
   - Testimonial (shows client satisfaction)
   - Case study results (shows effectiveness)

6. **Credentials**
   - Certifications (AWS, GCP, etc.)
   - Education (if relevant)
   - Speaking engagements or writing
   - Open source contributions

---

### Mobile-First Mindset 📱

**Why it matters:**
- 50%+ of visitors will be on mobile
- Potential clients browse on their phones
- First impressions happen on small screens

**Mobile Design Priorities:**
1. **Readability**
   - 16px minimum body text
   - Good line-height (1.6-1.7)
   - High contrast
   - Short paragraphs

2. **Thumb-Friendly Navigation**
   - Bottom-accessible CTAs
   - Large tap targets (44x44px minimum)
   - Easy hamburger menu
   - Sticky "Book Consultation" button (optional)

3. **Fast Loading**
   - Optimized images
   - Minimal JavaScript on first load
   - Progressive enhancement

4. **Simplified Layouts**
   - Single column on mobile
   - Stacked cards
   - Prioritize content hierarchy
   - Hide non-essential elements

5. **Touch Interactions**
   - Swipeable carousels
   - Tap to expand
   - No hover-only interactions
   - Clear active states

6. **Forms on Mobile**
   - Large input fields
   - Appropriate keyboard types (email, tel, url)
   - Clear error messages
   - Minimal required fields
   - Auto-focus first field

**Testing Checklist:**
- [ ] Test on iPhone SE (smallest screen)
- [ ] Test on iPhone 14 Pro (standard size)
- [ ] Test on iPhone Plus (large phone)
- [ ] Test on iPad (tablet)
- [ ] Test in portrait and landscape
- [ ] Test with large text (accessibility setting)
- [ ] Test with slow 3G network

---

### Conversion Optimization 📈

**Primary Goal:** Get consultation bookings

**CTA Strategy:**
1. **Hero:** Primary "Book Consultation" button
2. **After About:** "Let's Talk" button
3. **After Project:** "Work With Me" button
4. **Sticky Header:** "Book Consultation" always visible
5. **Footer:** "Ready to Start?" section

**CTA Best Practices:**
- Action-oriented copy ("Book Free Consultation" not "Contact")
- Contrasting color (accent color)
- Large, tappable
- Remove friction ("Free", "No obligation")
- Specific ("30-minute call" not generic "contact")

**Form Optimization:**
- Minimal fields (name, email, message minimum)
- Optional fields clearly marked
- Inline validation
- Clear what happens next ("I'll respond within 24 hours")
- Success message with next steps

**Building Urgency (Optional):**
- "Currently booking for March 2025"
- "Limited availability"
- "Next opening: [date]"
- Only if TRUE - never fake urgency

**Social Proof:**
- Testimonial near contact form
- "Worked with 20+ clients"
- "Processing 10M+ records daily"

---

### Differentiating from Competitors 🌟

**What makes you unique:**

1. **Solo Advantage:**
   - "Work directly with me, not a project manager"
   - "No junior developers learning on your project"
   - "Fast decisions, no committee approvals"

2. **Specialization:**
   - "Data pipelines are ALL I do"
   - "Expert in [specific tools you excel at]"
   - "Built systems processing [scale] of data"

3. **Approach:**
   - "Documentation-obsessed"
   - "Security-first"
   - "Built for maintainability"
   - "Transparent communication"

4. **Results-Oriented:**
   - Focus on business impact, not just technical solutions
   - "I measure success by YOUR metrics"

**Show, Don't Tell:**
- Case study proves expertise
- Tech stack shows breadth
- GitHub shows code quality
- LinkedIn shows professional history

---

## 10. FUTURE ENHANCEMENTS 💡

### Post-Launch Ideas

Once Phase 1-3 are complete and you're getting traffic, consider:

#### **Blog Section**
- Share insights about data engineering
- Tutorial posts
- Case study deep dives
- SEO benefits (long-tail keyword rankings)
- Establishes thought leadership

#### **Newsletter**
- Email list building
- Monthly updates, tips, or insights
- Stay top-of-mind with potential clients

#### **Downloadable Resources**
- Resume/CV PDF
- Data pipeline guide or ebook
- Architecture templates
- Checklist for choosing a data engineer

#### **Client Portal**
- Login area for existing clients
- Project status
- Documentation
- Invoices

#### **Calendar Integration**
- Calendly or similar
- Direct booking of consultation calls
- Eliminate email back-and-forth

#### **Client Intake Quiz**
- Qualify leads automatically
- "What do you need?" questionnaire
- Routes to appropriate service or pricing

#### **Video**
- Introduction video on homepage
- Case study walkthroughs
- Explainer videos

#### **Testimonial Submission Form**
- Easy way for clients to leave feedback
- Automatically formats for site

#### **Open Source Showcase**
- Highlight your GitHub projects
- Show code quality
- Attract developer clients

#### **Speaking & Writing**
- List conference talks
- Link to articles or guest posts
- Show industry involvement

#### **Certifications & Awards**
- Display badges (AWS, GCP, etc.)
- Awards or recognition
- Industry affiliations

#### **FAQ Section**
- Answer common questions
- Reduce friction
- SEO benefits

#### **Pricing Page (Controversial)**
- Pros: Transparency, filters out unqualified leads
- Cons: May limit opportunities, hard to price custom work
- Consider: Starting at $X for [defined scope]

---

## 11. TECHNICAL REFERENCE

### Useful Code Snippets

**Theme Context:**
```typescript
// src/contexts/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: 'light',
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

---

**Smooth Scroll Hook:**
```typescript
// src/hooks/useSmoothScroll.ts
import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute('href')

      if (href?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
```

---

**In View Hook:**
```typescript
// src/hooks/useInView.ts
import { useEffect, useRef, useState } from 'react'

export const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}
```

---

**Contact Form Schema:**
```typescript
// src/utils/validation.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

---

**Tailwind Config:**
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

---

### Deployment Commands

**Vercel CLI:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (production)
vercel --prod

# Deploy (preview)
vercel
```

**Environment Variables:**
```bash
# In Vercel Dashboard or CLI
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 12. LAUNCH CHECKLIST

### Pre-Launch

**Content:**
- [ ] All text proofread (no typos)
- [ ] All images optimized and have alt text
- [ ] Contact information correct
- [ ] Social links work
- [ ] Bio is compelling and authentic

**Functionality:**
- [ ] All navigation links work
- [ ] Contact form sends emails (test it!)
- [ ] Mobile menu opens/closes
- [ ] Dark/light mode toggle works
- [ ] All CTAs function correctly

**Performance:**
- [ ] Lighthouse scores 85+ (all metrics)
- [ ] Images lazy load
- [ ] No console errors
- [ ] Fast on 3G network

**SEO:**
- [ ] Page title optimized
- [ ] Meta description compelling
- [ ] Open Graph tags set
- [ ] Favicon displays correctly
- [ ] Robots.txt allows indexing

**Responsive:**
- [ ] Works on iPhone SE (320px)
- [ ] Works on iPad
- [ ] Works on desktop (1920px+)
- [ ] Works on 4K (2560px+)

**Browsers:**
- [ ] Chrome
- [ ] Safari (desktop)
- [ ] Safari (mobile)
- [ ] Firefox
- [ ] Edge

**Analytics:**
- [ ] Tracking code installed
- [ ] Test pageview tracked
- [ ] Form submission tracked

---

### Launch Day

1. **Final Production Build**
   ```bash
   npm run build
   npm run preview  # Test locally
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Test Live Site**
   - Visit from multiple devices
   - Submit test form
   - Check analytics

4. **Configure Domain**
   - Point DNS to Vercel
   - Wait for SSL certificate
   - Test HTTPS

5. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

6. **Share!**
   - Update LinkedIn with website link
   - Update GitHub profile
   - Update email signature
   - Share on social media
   - Tell friends and former colleagues

---

### Post-Launch (First Week)

- [ ] Monitor analytics daily
- [ ] Check for form submissions
- [ ] Fix any bugs reported
- [ ] Gather feedback from friends/colleagues
- [ ] Make minor tweaks if needed

### Post-Launch (First Month)

- [ ] Review analytics
- [ ] Assess conversion rate
- [ ] Gather user feedback
- [ ] Plan Phase 2 (if not started)
- [ ] Add more projects as you complete them

---

## 13. MAINTENANCE PLAN

### Weekly
- Check form submissions and respond
- Monitor uptime (Vercel is reliable, but check)
- Review analytics for trends

### Monthly
- Update content (new projects, testimonials)
- Review and update service descriptions
- Check for broken links
- Update technology stack if learned new tools
- Security updates (npm audit)

### Quarterly
- Review and refresh content
- Optimize based on analytics
- A/B test CTAs if traffic is sufficient
- Add new case studies
- Request testimonials from recent clients

### Annually
- Major content refresh
- Update photos if needed
- Redesign considerations (if needed)
- Review hosting costs
- Renew domain

---

## 14. BUDGET CONSIDERATIONS

### Initial Costs (One-Time)

**Domain:**
- Cost: $10-15/year
- Recommendation: Namecheap, Google Domains

**Hosting:**
- Vercel: FREE for personal projects
- Paid: $20/month if you exceed free tier (unlikely for portfolio)

**Assets:**
- Professional photos: $0 (DIY) to $500 (photographer)
- Stock images: $0 (Unsplash) to $29 (paid stock)
- Icons: FREE (Lucide React)

**Tools:**
- Design: FREE (Figma)
- Code: FREE (VS Code)
- Git: FREE (GitHub)

**Total Estimated Initial Cost: $10-515**

---

### Ongoing Costs (Annual)

**Essential:**
- Domain renewal: $15/year
- Hosting: $0 (Vercel free tier) to $240/year

**Optional:**
- Analytics: $0 (Vercel Analytics or GA4)
- Live Chat: $0 (Tawk.to free tier) to $19/month
- Email Service: $0 (EmailJS free tier) to $10/month
- Backup/Security: $0 (included with Vercel)

**Total Estimated Annual Cost: $15-$483/year**

---

### ROI

**If you land ONE client from the website:**
- Project value: $5,000 - $50,000
- Website ROI: 1000%+ 🎉

The website pays for itself immediately with the first project.

---

## 15. CONCLUSION & NEXT STEPS

### You're Ready! 🚀

You now have a comprehensive plan to build a stunning, effective personal portfolio website for Ortus Solutions.

### Quick Recap

**Phase 1 (MVP):** 7 days → Deployable website
**Phase 2 (Animations):** 3-4 days → Advanced animations
**Phase 3 (Features):** 2-3 days → Professional integrations
**Phase 4 (Scale):** 1-2 days → Multi-content support

**Total Timeline:** ~2-3 weeks for fully polished site

---

### What Makes This Plan Great

✅ **Phased approach** - You'll have a live site fast, then improve
✅ **Personal brand** - Authentic, not corporate
✅ **Conversion-focused** - Designed to book consultations
✅ **Mobile-first** - Works perfectly on phones
✅ **Scalable** - Grows with your business
✅ **Modern tech** - Impressive animations showcase your skills
✅ **Performance** - Fast loading, great UX
✅ **SEO-ready** - Findable in search engines

---

### Success Factors

**This website will succeed if you:**
1. ✅ Use authentic, compelling content
2. ✅ Show real work with measurable results
3. ✅ Make booking a consultation easy
4. ✅ Keep it updated with new projects
5. ✅ Drive traffic (LinkedIn, networking, SEO)
6. ✅ Respond quickly to inquiries

---

### First Action Items

Before you write a single line of code:

1. **Gather content** (see Section 7)
   - Write your bio
   - Prepare project case study
   - Get professional photos
   - Collect testimonial

2. **Set up accounts**
   - GitHub account
   - Vercel account
   - EmailJS account
   - Domain registrar

3. **Clear your calendar**
   - Block 5-7 days for Phase 1
   - Focus time, minimal distractions

4. **Get excited!**
   - You're about to build something awesome
   - This website will help you grow your business
   - Let's do this! 🎉

---

### Questions to Consider

Before starting, ask yourself:

1. Do I have all the content ready?
2. Do I have high-quality images?
3. Is my case study detailed with real metrics?
4. Do I have time to focus on this project?
5. Am I ready to drive traffic to the site once it's live?

If you answered yes to all, **you're ready to start Phase 1!**

---

### Final Thoughts

This isn't just a website—it's **your digital storefront**. It's how potential clients will discover you, evaluate your skills, and decide to work with you.

Invest the time to do it right. The effort you put into Phase 1 will pay dividends for years to come. And remember: you can always improve and iterate. Done is better than perfect.

**Ready to build? Let's create something amazing together.**

---

**Good luck! 🚀**

---

## Appendix: Resources

### Learning Resources
- **Framer Motion Docs:** https://www.framer.com/motion/
- **Three.js Journey:** https://threejs-journey.com/
- **GSAP ScrollTrigger:** https://greensock.com/scrolltrigger/
- **Tailwind CSS Docs:** https://tailwindcss.com/docs

### Design Inspiration
- **Awwwards:** https://www.awwwards.com/
- **Behance:** https://www.behance.net/
- **Dribbble:** https://dribbble.com/
- **SiteInspire:** https://www.siteinspire.com/

### Tools
- **Figma:** https://figma.com (design)
- **TinyPNG:** https://tinypng.com/ (image compression)
- **WebP Converter:** https://developers.google.com/speed/webp
- **Favicon Generator:** https://realfavicongenerator.net/

### Stock Resources
- **Unsplash:** https://unsplash.com/ (photos)
- **Pexels:** https://www.pexels.com/ (photos)
- **Lucide Icons:** https://lucide.dev/ (icons)

---

**Version:** 1.0
**Last Updated:** 2025-10-27
**Status:** Ready for Implementation
