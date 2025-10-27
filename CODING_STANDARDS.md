# Coding Standards & Style Guide

## 📋 Table of Contents
1. [File Naming Conventions](#file-naming-conventions)
2. [File Size Limits](#file-size-limits)
3. [Component Structure](#component-structure)
4. [Styling Standards](#styling-standards)
5. [TypeScript Standards](#typescript-standards)
6. [Import Order](#import-order)
7. [Code Organization](#code-organization)
8. [Data Management](#data-management)
9. [Performance Standards](#performance-standards)
10. [Accessibility Standards](#accessibility-standards)

---

## 1. File Naming Conventions

### Components
- **Format:** PascalCase
- **Example:** `Hero.tsx`, `ContactForm.tsx`, `ServiceCard.tsx`
- **Rule:** One component per file, filename matches component name

### Hooks
- **Format:** camelCase starting with `use`
- **Example:** `useTheme.ts`, `useInView.ts`, `useMediaQuery.ts`
- **Rule:** Custom hooks must start with `use`

### Utilities
- **Format:** camelCase
- **Example:** `validation.ts`, `constants.ts`, `cn.ts`
- **Rule:** Descriptive, lowercase with camelCase

### Data Files
- **Format:** camelCase
- **Example:** `personal.ts`, `services.ts`, `techStack.ts`
- **Rule:** Plural for arrays, singular for objects

### Contexts
- **Format:** PascalCase + Context
- **Example:** `ThemeContext.tsx`, `AuthContext.tsx`
- **Rule:** Always include "Context" in name

---

## 2. File Size Limits

### Maximum Lines Per File
- **Components:** 300 lines max
- **Hooks:** 150 lines max
- **Utilities:** 200 lines max
- **Data files:** 500 lines max

### When to Split
If file exceeds limit:
- **Components:** Extract sub-components or logic into separate files
- **Hooks:** Split into multiple focused hooks
- **Utilities:** Group related functions into modules
- **Data:** Split by category or feature

### Exceptions
- `types/index.ts` - Can exceed for type definitions
- Generated files - No limit

---

## 3. Component Structure

### Required Order
```tsx
// 1. Imports (external first, then internal)
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/common/Button'
import { cn } from '@/utils/cn'

// 2. Types/Interfaces
interface MyComponentProps {
  title: string
  optional?: boolean
}

// 3. Component
export function MyComponent({ title, optional }: MyComponentProps) {
  // 3a. Hooks (useState, useEffect, custom hooks)
  const [state, setState] = useState(false)

  // 3b. Derived state / computed values
  const computedValue = title.toUpperCase()

  // 3c. Event handlers
  const handleClick = () => {
    setState(true)
  }

  // 3d. Early returns
  if (!title) return null

  // 3e. JSX
  return (
    <div>
      {/* JSX here */}
    </div>
  )
}
```

### Component Patterns

**✅ DO:**
- Use functional components only
- Extract complex logic to custom hooks
- Use TypeScript interfaces for props
- Keep JSX clean and readable
- Use early returns for conditional rendering

**❌ DON'T:**
- Use class components
- Put business logic in JSX
- Use `any` type
- Nest components deeply (max 3 levels)
- Define components inside other components

---

## 4. Styling Standards

### Tailwind Usage

**✅ DO: Use Tailwind Config Values**
```tsx
// Good - uses config
<div className="text-accent bg-slate-900 font-sans" />

// Good - uses design tokens
<div className="px-4 py-6 rounded-lg shadow-lg" />
```

**❌ DON'T: Use Arbitrary Values**
```tsx
// Bad - random colors
<div className="text-[#ff5733] bg-[#123456]" />

// Bad - random sizes
<div className="text-[19px] w-[347px]" />
```

**Exception:** Arbitrary values allowed for:
- One-off positioning: `top-[73px]`
- Exact pixel values needed: `w-[600px]` for specific image sizes
- Complex gradients not in config

### Color Management

**Primary Color Palette (Tailwind Config Only):**
```javascript
colors: {
  primary: { DEFAULT: '#0F172A', light: '#1E293B' },
  accent: { DEFAULT: '#06B6D4', light: '#22D3EE', dark: '#0891B2' },
}
```

**Rules:**
- All colors must be in `tailwind.config.js`
- Use semantic color names (`primary`, `accent`) not specific colors
- Support dark mode for all colors
- Test color contrast for accessibility (WCAG AA)

### Responsive Design

**Required Breakpoints:**
```tsx
// Mobile-first approach
<div className="
  px-4           // Mobile (default)
  sm:px-6        // Small tablets (640px+)
  md:px-8        // Tablets (768px+)
  lg:px-12       // Desktop (1024px+)
  xl:px-16       // Large desktop (1280px+)
" />
```

**Rules:**
- Always mobile-first (default styles for mobile)
- Use Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Test on real devices, not just browser resize

### CSS Organization

**Avoid Inline Styles:**
```tsx
// ❌ Bad
<div style={{ color: 'red', fontSize: '20px' }} />

// ✅ Good
<div className="text-red-600 text-xl" />
```

**Custom CSS (when needed):**
- Place in `src/styles/globals.css`
- Use `@layer` for Tailwind integration
- Document why Tailwind wasn't sufficient

---

## 5. TypeScript Standards

### Type Definitions

**✅ DO:**
```tsx
// Explicit interfaces
interface User {
  id: string
  name: string
  email: string
}

// Explicit return types for functions
function getUser(id: string): User | null {
  // ...
}

// Generic types
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  // ...
}
```

**❌ DON'T:**
```tsx
// Using 'any'
const data: any = fetchData()

// No return type
function calculate(x: number) {
  return x * 2
}

// Implicit any
function process(data) {
  // ...
}
```

### Type Organization

**Location Rules:**
- **Component-specific types:** In same file as component
- **Shared types:** In `src/types/index.ts`
- **Data types:** In `src/types/` with descriptive names

**Example:**
```tsx
// src/types/index.ts
export interface Service {
  id: string
  title: string
  // ...
}

// src/components/Services/ServiceCard.tsx
interface ServiceCardProps {
  service: Service  // Import from types
  onSelect?: () => void  // Component-specific
}
```

### Strict Mode

**Required tsconfig settings:**
```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitAny": true
}
```

---

## 6. Import Order

### Required Order (enforced by ESLint)

```tsx
// 1. React imports
import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'

// 2. External library imports (alphabetical)
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// 3. Internal components (alphabetical, @ alias preferred)
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'

// 4. Internal utilities, hooks, contexts
import { useTheme } from '@/contexts/ThemeContext'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/utils/cn'

// 5. Data imports
import { services } from '@/data/services'

// 6. Types (if separate from above)
import type { Service } from '@/types'

// 7. Styles (rare, usually Tailwind only)
import './MyComponent.module.css'
```

### Path Alias Rules

**Always use `@/` alias for internal imports:**
```tsx
// ✅ Good
import { Button } from '@/components/common/Button'
import { personalInfo } from '@/data/personal'

// ❌ Bad
import { Button } from '../../components/common/Button'
import { personalInfo } from '../data/personal'
```

---

## 7. Code Organization

### Folder Structure

```
src/
├── components/
│   ├── Hero/              # Feature-based folders
│   │   └── Hero.tsx       # One main component
│   ├── Services/
│   │   ├── Services.tsx   # Main component
│   │   └── ServiceCard.tsx # Sub-component
│   └── common/            # Shared components
│       ├── Button.tsx
│       └── Card.tsx
├── contexts/              # React contexts
├── hooks/                 # Custom hooks
├── data/                  # Static content
├── types/                 # TypeScript types
├── utils/                 # Utilities
└── styles/                # Global styles
```

### Feature Organization

**Large features get folders:**
```
Contact/
├── Contact.tsx           # Main component
├── ContactForm.tsx       # Sub-component
└── ContactInfo.tsx       # Sub-component
```

**Small features stay as single files:**
```
common/
├── Button.tsx
├── Card.tsx
└── ThemeToggle.tsx
```

### Naming Patterns

**Components:**
- Main: `Hero.tsx` exports `Hero`
- Sub: `ServiceCard.tsx` exports `ServiceCard`
- Common: `Button.tsx` exports `Button`

**Hooks:**
- `useTheme.ts` exports `useTheme`
- `useInView.ts` exports `useInView`

**Utils:**
- `cn.ts` exports `cn`
- `validation.ts` exports multiple validators

---

## 8. Data Management

### Data File Rules

**Structure:**
```tsx
// src/data/services.ts
import { Service } from '@/types'
import { Database, Workflow, Zap, Code } from 'lucide-react'

export const services: Service[] = [
  {
    id: 'data-pipelines',
    title: 'Data Pipeline Development',
    // ...
  },
  // More services...
]
```

**Rules:**
- ✅ Export typed constants
- ✅ Import types from `@/types`
- ✅ Use descriptive variable names
- ✅ Include TODO comments for placeholders
- ❌ Don't put logic in data files
- ❌ Don't import components (except icons)

### Constants Management

**Location:** `src/utils/constants.ts`

**Pattern:**
```tsx
// Global constants only
export const SITE_NAME = 'Ortus Solutions'
export const CONTACT_EMAIL = 'contact@ortussolutions.com'

// Group related constants
export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
]

export const SOCIAL_LINKS = {
  linkedin: 'https://...',
  github: 'https://...',
}
```

**Rules:**
- SCREAMING_SNAKE_CASE for primitive constants
- camelCase for objects/arrays
- Document if value is magic number

---

## 9. Performance Standards

### Code Splitting

**Lazy Load Large Components:**
```tsx
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  )
}
```

**When to Lazy Load:**
- Modal components
- Route components (if using routing)
- Large 3D components (Phase 2+)
- Components below the fold

### Animation Performance

**✅ DO: Animate Transform & Opacity**
```tsx
// GPU-accelerated
<motion.div
  animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
/>
```

**❌ DON'T: Animate Layout Properties**
```tsx
// Causes layout reflow (slow)
<motion.div
  animate={{ width: 100, height: 100, margin: 20 }}
/>
```

### Image Optimization

**Rules:**
- Compress images before adding to project
- Use WebP format when possible
- Add `loading="lazy"` for below-fold images
- Provide multiple sizes for responsive images
- Include proper alt text

---

## 10. Accessibility Standards

### Required Practices

**Semantic HTML:**
```tsx
// ✅ Good
<button onClick={handleClick}>Click me</button>
<nav><a href="#section">Link</a></nav>

// ❌ Bad
<div onClick={handleClick}>Click me</div>
<div><span onClick={goTo}>Link</span></div>
```

**ARIA Labels:**
```tsx
// For icon-only buttons
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>

// For inputs
<input
  type="email"
  id="email"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">Invalid email</span>
```

**Keyboard Navigation:**
- All interactive elements must be focusable
- Visible focus indicators required
- Tab order must be logical
- Escape key closes modals/menus

**Color Contrast:**
- Text: Minimum 4.5:1 ratio (WCAG AA)
- Large text (18px+): Minimum 3:1 ratio
- Interactive elements: Minimum 3:1 ratio
- Test in both light and dark modes

**Motion:**
```css
/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📊 Code Quality Checklist

Before committing code, verify:

### Structure
- [ ] Component files under 300 lines
- [ ] Proper folder organization
- [ ] Consistent naming conventions
- [ ] No duplicate code

### TypeScript
- [ ] No `any` types
- [ ] Explicit return types
- [ ] Proper interfaces for props
- [ ] No TypeScript errors

### Styling
- [ ] Only Tailwind config colors
- [ ] No arbitrary values (unless justified)
- [ ] Responsive at all breakpoints
- [ ] Dark mode tested

### Performance
- [ ] Only transform/opacity animations
- [ ] Images optimized
- [ ] No console errors
- [ ] Fast on slow networks

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels where needed
- [ ] Keyboard accessible
- [ ] Color contrast passes WCAG AA

### Code Quality
- [ ] ESLint passes (no errors)
- [ ] Prettier formatted
- [ ] Imports ordered correctly
- [ ] Comments for complex logic

---

## 🔧 Enforcement Tools

### ESLint
Run before committing:
```bash
npm run lint
```

### Prettier
Format code:
```bash
npx prettier --write .
```

### TypeScript
Check types:
```bash
npx tsc --noEmit
```

---

## 📝 Documentation Standards

### Component Documentation

**When to Add Comments:**
- Complex logic that isn't obvious
- Why something is done a certain way
- TODO notes for placeholder content
- Performance optimizations
- Workarounds for bugs

**Example:**
```tsx
// TODO: Replace with actual user photo from database
const photoUrl = '/images/profile.jpg'

// Using transform instead of margin for better performance
<motion.div animate={{ x: 100 }} />

// Workaround: Safari requires explicit height for flex items
<div className="h-full" />
```

### README Updates

When adding features:
- Update README.md with new dependencies
- Document new environment variables
- Update setup instructions if changed

---

## 🚀 Version Control Standards

### Commit Messages

**Format:** `type: description`

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `perf:` Performance improvement
- `test:` Adding tests
- `chore:` Build process, dependencies

**Examples:**
```bash
feat: Add dark mode toggle to header
fix: Correct contact form validation error
docs: Update README with deployment steps
refactor: Extract ServiceCard component
perf: Lazy load modal components
```

### Branch Strategy

**For solo project:**
- `main` - Production-ready code
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes

---

## 📖 References

- [React Best Practices](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**Last Updated:** 2025-10-27
**Version:** 1.0
