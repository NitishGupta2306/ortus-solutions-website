# Ortus Solutions - Professional Team Portfolio

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A modern, high-performance team portfolio showcasing enterprise data engineering expertise**

[View Live Site](#) · [Contact Us](mailto:contact@ortussolutions.com)

</div>

---

## 🎯 About This Project

This is the official website for **Ortus Solutions**, a boutique data engineering consultancy specializing in scalable data pipelines, cloud architecture, and enterprise automation solutions.

### Project Highlights

- **Modern Tech Stack** - Built with cutting-edge technologies for optimal performance
- **Team Showcase** - Dynamic team member profiles with expertise and social links
- **Project Portfolio** - Comprehensive case studies with measurable results
- **Professional Design** - Glassmorphism UI with smooth animations and interactions
- **Type-Safe** - 100% TypeScript for reliability and maintainability
- **Accessible** - WCAG 2.1 AA compliant with full keyboard navigation
- **Performance Optimized** - Lighthouse scores 90+ across all metrics

---

## 🚀 Tech Stack

### Core Technologies
- **React 18** with modern hooks and concurrent features
- **TypeScript** with strict mode for type safety
- **Vite 6** for lightning-fast development and optimized builds
- **Tailwind CSS 3** with custom design system

### Advanced Features
- **Framer Motion** - Smooth, declarative animations
- **GSAP + ScrollTrigger** - Advanced scroll-based animations
- **Lenis** - Buttery smooth scroll experience
- **Three.js** - 3D particle effects for visual impact
- **React Hook Form + Zod** - Type-safe form validation

### Code Quality
- **ESLint** - Code quality enforcement
- **Prettier** - Consistent code formatting
- **EditorConfig** - Cross-editor consistency
- **Conventional Commits** - Standardized git history

---

## ✨ Key Features

### 🎨 Design & User Experience
- Glassmorphism UI with backdrop blur effects
- Fully responsive design (mobile-first approach)
- Dark/Light mode with system preference detection
- Smooth scroll animations throughout
- Interactive 3D particle background
- Staggered entrance animations for visual impact

### 👥 Team Management
- Dynamic team member profiles
- Expandable biography sections
- Expertise tags and experience indicators
- Social media integration (LinkedIn, GitHub, Twitter, Email)
- Professional headshots with lazy loading

### 💼 Project Showcase
- Detailed case study cards
- Team attribution per project
- Challenge, solution, and results framework
- Technology stack display
- Measurable metrics and outcomes
- Expandable details on demand

### 🔧 Technical Excellence
- SEO optimized with proper meta tags
- Accessibility-first development (ARIA support)
- Performance optimized (lazy loading, code splitting)
- Memory leak prevention with proper cleanup
- Component memoization for optimal rendering
- Defensive programming with error boundaries

---

## 🏗️ Architecture

### Project Structure

```
src/
├── components/
│   ├── Hero/              # Landing with 3D background
│   ├── About/             # Company overview
│   ├── Team/              # Team member showcase
│   ├── Services/          # Service offerings
│   ├── Projects/          # Project portfolio
│   ├── Process/           # Work methodology
│   ├── TechStack/         # Technologies
│   ├── Contact/           # Contact form
│   └── common/            # Reusable UI components
├── contexts/              # React contexts (Theme)
├── hooks/                 # Custom hooks (GSAP, Lenis, Parallax)
├── data/                  # Content management
│   ├── team.ts           # Team member data
│   ├── company.ts        # Company information
│   ├── project.ts        # Case studies
│   └── ...
├── types/                 # TypeScript definitions
├── utils/                 # Utility functions
└── styles/                # Global styles
```

### Data-Driven Content

All content is centralized in TypeScript data files for easy updates:
- Team member profiles
- Company information and statistics
- Project case studies
- Service offerings
- Technology stack

---

## 🛠️ Development

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:5173` with hot module replacement.

### Available Scripts

```bash
npm run dev          # Development server with HMR
npm run build        # Production build (outputs to dist/)
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

---

## 📝 Content Management

### Update Team Information

Edit `src/data/team.ts` to add/update team members:

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Team Member Name',
    title: 'Senior Data Engineer',
    tagline: 'Building scalable data pipelines',
    bio: ['Paragraph 1...', 'Paragraph 2...'],
    expertise: ['Python', 'AWS', 'Apache Airflow'],
    yearsOfExperience: 7,
    photo: '/images/team/member-1.jpg',
    socialLinks: { /* ... */ },
  },
]
```

### Update Company Information

Edit `src/data/company.ts`:

```typescript
export const companyInfo: CompanyInfo = {
  name: 'Ortus Solutions',
  mission: 'Our mission statement...',
  values: ['Value 1', 'Value 2', 'Value 3'],
  stats: {
    totalExperience: 18,
    projectsCompleted: 20,
    industriesServed: 5,
    happyClients: 15,
  },
}
```

### Add Project Case Studies

Edit `src/data/project.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Title',
    client: 'Client Name',
    industry: 'Industry',
    challenge: 'The problem...',
    solution: 'How we solved it...',
    technologies: ['Tech 1', 'Tech 2'],
    results: [
      { metric: 'Metric Name', value: '75%', description: 'Detail' },
    ],
    teamMemberIds: ['member-1'],
  },
]
```

### Customize Branding

Update colors in `tailwind.config.js`:

```javascript
colors: {
  accent: {
    DEFAULT: '#06B6D4',  // Primary brand color
    light: '#22D3EE',
  },
}
```

---

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel auto-detects the Vite configuration
3. Click "Deploy"
4. Add your custom domain in project settings

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Or connect your repository for continuous deployment
   - Build command: `npm run build`
   - Publish directory: `dist`

### Custom Server

```bash
# Build for production
npm run build

# The dist/ folder contains the static files
# Serve with any static file server (nginx, Apache, etc.)
```

---

## 🎨 Design System

### Colors
- **Primary**: Cyan/Teal accent (#06B6D4)
- **Background**: White / Slate dark mode
- **Text**: Slate-900 / White

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold, tight leading
- **Body**: Regular, relaxed leading

### Components
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Solid and outline variants
- **Forms**: Validated with error states
- **Animations**: Subtle and performant

---

## 📚 Documentation

Additional documentation available in the `docs/` folder:

- **[PRD](docs/development/PRD.md)** - Product requirements
- **[Coding Standards](docs/development/CODING_STANDARDS.md)** - Development guidelines
- **[Deployment Guide](docs/development/DEPLOYMENT.md)** - Detailed deployment instructions
- **[Transformation Docs](docs/transformation/)** - Team site migration documentation

---

## 🔒 Code Quality

### Type Safety
- 100% TypeScript coverage
- Strict mode enabled
- No `any` types

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels and roles
- Screen reader compatible
- Focus management

### Performance
- React.memo for optimization
- Lazy loading images
- Code splitting
- GSAP cleanup (no memory leaks)
- Optimized bundle size

---

## 💡 Technical Decisions

### Why React + TypeScript?
- Type safety reduces bugs
- Large ecosystem and community
- Modern hooks API
- Excellent developer experience

### Why Vite?
- Lightning-fast HMR
- Optimized production builds
- Native ES modules
- Modern defaults

### Why Tailwind CSS?
- Rapid development
- Consistent design system
- Excellent performance
- Easy customization

---

## 📧 Contact

**Ortus Solutions**
- Website: [ortussolutions.com](#)
- Email: contact@ortussolutions.com
- Location: [Your Location]

For business inquiries or technical questions, please reach out via email.

---

## 📄 License

© 2025 Ortus Solutions. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

<div align="center">

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

Professional portfolio crafted for enterprise clients

</div>
