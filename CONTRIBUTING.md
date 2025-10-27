# Contributing to Ortus Solutions Website

First off, thank you for considering contributing to our project! It's people like you that make this project better for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

---

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to contact@ortussolutions.com.

---

## 💡 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected vs actual** behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node version)

Use the [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md) when filing bugs.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description** of the enhancement
- **Use case** - why would this be useful?
- **Possible implementation** if you have ideas
- **Alternatives considered**

Use the [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).

### Code Contributions

We love pull requests! Here are areas where contributions are especially welcome:

- 🐛 **Bug fixes**
- ✨ **New features** (discuss in an issue first!)
- 📝 **Documentation improvements**
- ♿ **Accessibility improvements**
- 🎨 **Design enhancements**
- ⚡ **Performance optimizations**
- 🧪 **Test coverage**

---

## 🛠️ Development Setup

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** or **pnpm**
- **Git**
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/ortus-solutions-website.git
cd ortus-solutions-website

# Add upstream remote
git remote add upstream https://github.com/ortus-solutions/website.git

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173` with hot module replacement.

### Available Scripts

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

---

## 🔄 Development Workflow

### 1. Create a Branch

```bash
# Sync with upstream
git fetch upstream
git checkout master
git merge upstream/master

# Create feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

**Branch naming conventions:**
- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation only changes
- `refactor/` - Code refactoring
- `style/` - Code style changes (formatting, etc.)
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### 2. Make Your Changes

- Write clean, maintainable code
- Follow the [Coding Standards](#coding-standards)
- Add/update tests if applicable
- Update documentation if needed
- Test your changes thoroughly

### 3. Commit Your Changes

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat: add dark mode toggle to sidebar"
```

See [Commit Guidelines](#commit-guidelines) for details.

### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub using our [PR template](.github/PULL_REQUEST_TEMPLATE.md).

---

## 📐 Coding Standards

### TypeScript

- ✅ **Always use TypeScript** - No `any` types unless absolutely necessary
- ✅ **Export interfaces** for props and data structures
- ✅ **Use strict mode** (already configured)
- ✅ **Prefer functional components** over class components
- ✅ **Use proper typing** for hooks and callbacks

**Example:**

```typescript
interface UserCardProps {
  name: string
  email: string
  onSelect?: (id: string) => void
}

export function UserCard({ name, email, onSelect }: UserCardProps) {
  // Component logic
}
```

### React Best Practices

- ✅ **Use hooks** (useState, useEffect, useCallback, useMemo)
- ✅ **Memo components** when appropriate (prevent unnecessary re-renders)
- ✅ **Clean up effects** - return cleanup functions in useEffect
- ✅ **Use key props** for lists (unique, stable keys)
- ✅ **Destructure props** at the top of components

**Example:**

```typescript
export const ExpensiveComponent = memo(function ExpensiveComponent({ data }: Props) {
  useEffect(() => {
    const subscription = subscribeToData()

    return () => subscription.unsubscribe() // Cleanup
  }, [])

  return <div>{/* ... */}</div>
})
```

### Styling with Tailwind

- ✅ **Use Tailwind utilities** first
- ✅ **Follow mobile-first** approach (sm:, md:, lg: breakpoints)
- ✅ **Use design tokens** from tailwind.config.js
- ✅ **Group responsive classes** logically

```tsx
// Good
<div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-800 rounded-lg shadow-md">

// Avoid inline styles unless dynamic
```

### File Naming

- **Components**: PascalCase (`TeamMemberCard.tsx`)
- **Utilities/Hooks**: camelCase (`useParallax.ts`)
- **Data files**: camelCase (`company.ts`)
- **Types**: PascalCase in `types/index.ts`

### Component Structure

```
src/components/Feature/
├── Feature.tsx          # Main component
├── FeatureCard.tsx      # Sub-component
└── index.ts             # Optional barrel export
```

### Accessibility

- ✅ **Use semantic HTML** (nav, main, article, etc.)
- ✅ **Add ARIA labels** where needed
- ✅ **Ensure keyboard navigation** works
- ✅ **Test with screen readers** if possible
- ✅ **Maintain color contrast** (WCAG AA minimum)
- ✅ **Add focus styles** to interactive elements

```tsx
<button
  type="button"
  aria-label="Close modal"
  aria-expanded={isOpen}
  className="focus:ring-2 focus:ring-accent"
>
  Close
</button>
```

### Performance

- ✅ **Lazy load images** (`loading="lazy"`)
- ✅ **Use React.memo** for expensive components
- ✅ **Memoize callbacks** and computed values
- ✅ **Clean up animations** (GSAP tweens, ScrollTriggers)
- ✅ **Code split** large features if needed

---

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring (no feature changes)
- **perf**: Performance improvements
- **test**: Adding tests
- **chore**: Maintenance tasks, dependency updates
- **ci**: CI/CD configuration changes

### Examples

```bash
feat(team): add bio expansion animation

Add smooth expand/collapse animation using Framer Motion
for team member biography sections.

Closes #123

---

fix(header): resolve mobile menu keyboard navigation

Fixed issue where Escape key didn't close mobile menu.
Added proper focus trap for accessibility.

Fixes #456

---

docs(readme): update installation instructions

Added prerequisite section and clarified Node version requirement.
```

### Rules

- Use **present tense** ("add feature" not "added feature")
- Use **imperative mood** ("move cursor to..." not "moves cursor to...")
- **Lowercase** the first letter of subject
- **No period** at the end of subject
- Limit subject line to **72 characters**
- Wrap body at **72 characters**
- Include **issue references** when applicable

---

## 🔀 Pull Request Process

### Before Submitting

1. ✅ **Sync with upstream** master branch
2. ✅ **Run linting** (`npm run lint`)
3. ✅ **Run type checking** (`npm run type-check`)
4. ✅ **Test the build** (`npm run build`)
5. ✅ **Test your changes** thoroughly
6. ✅ **Update documentation** if needed

### PR Title

Follow the same convention as commits:

```
feat(team): add social media links to member cards
```

### PR Description

Use the [PR template](.github/PULL_REQUEST_TEMPLATE.md). Include:

- **What** - What does this PR do?
- **Why** - Why is this change needed?
- **How** - How is it implemented?
- **Testing** - How was it tested?
- **Screenshots** - If UI changes
- **Related issues** - Link related issues/PRs

### Review Process

1. Maintainers will review your PR
2. Address feedback and requested changes
3. Once approved, maintainers will merge
4. Your contribution will be acknowledged in release notes!

### After Merge

```bash
# Delete your feature branch
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name

# Sync with upstream
git checkout master
git pull upstream master
```

---

## 📁 Project Structure

### Key Directories

```
src/
├── components/       # React components
│   ├── common/      # Reusable UI components
│   └── Feature/     # Feature-specific components
├── contexts/        # React contexts (Theme, etc.)
├── hooks/           # Custom React hooks
├── data/            # Content data (team, projects, etc.)
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── styles/          # Global styles
```

### Adding New Features

1. **Components** → `src/components/FeatureName/`
2. **Data** → `src/data/featureName.ts`
3. **Types** → Add to `src/types/index.ts`
4. **Hooks** → `src/hooks/useFeatureName.ts`

### Data Management

Content data is stored in `src/data/` as TypeScript files:

- `team.ts` - Team members
- `company.ts` - Company info
- `project.ts` - Projects/case studies
- `services.ts` - Service offerings
- etc.

**To update content**, edit these files directly. Changes will hot-reload in development.

---

## 🎨 Design System

### Colors

Defined in `tailwind.config.js`:

- **accent** - Primary brand color (#06B6D4)
- **accent-light** - Lighter accent for dark mode
- **slate** - Grayscale palette

### Typography

- **Font family**: Inter (or system fallback)
- **Headings**: Bold, tight leading
- **Body**: Regular, relaxed leading

### Spacing

Use Tailwind's spacing scale (4px increments):
- `p-4` = 16px padding
- `gap-8` = 32px gap
- etc.

---

## ❓ Questions?

If you have questions:

1. Check existing [documentation](docs/)
2. Search [GitHub Issues](https://github.com/ortus-solutions/website/issues)
3. Ask in a new [GitHub Discussion](https://github.com/ortus-solutions/website/discussions)
4. Email: contact@ortussolutions.com

---

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

**Happy coding! 🚀**
