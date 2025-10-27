# Ortus Solutions - Personal Portfolio Website

A modern, minimalist portfolio website for Ortus Solutions, showcasing data pipeline and automation expertise.

## 🚀 Tech Stack

- **React 18** + **TypeScript** - Type-safe UI development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form** + **Zod** - Form validation
- **Lucide React** - Beautiful icons

## 📋 Features

- ✅ Fully responsive (mobile-first design)
- ✅ Dark/Light mode toggle
- ✅ Smooth scroll animations
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)
- ✅ Fast loading (optimized performance)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📝 Customization

### Update Personal Information

Edit the following files in `src/data/`:

- `personal.ts` - Your name, bio, contact info
- `services.ts` - Your service offerings
- `project.ts` - Your featured project/case study
- `testimonial.ts` - Client testimonial
- `process.ts` - Your work process
- `techStack.ts` - Technologies you use

### Update Constants

Edit `src/utils/constants.ts` to update:
- Site name and tagline
- Contact email
- Social media links
- Navigation items

### Add Your Images

Place your images in `public/images/`:
- `profile.jpg` - Your professional photo
- `project-1-hero.jpg` - Project screenshot
- Technology logos in `tech/` folder

## 🎨 Customizing Design

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#0F172A',  // Your primary color
  accent: '#06B6D4',   // Your accent color
}
```

### Fonts

Update font families in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy
4. Add your custom domain in Vercel settings

### Deploy to Netlify

1. Run `npm run build`
2. Upload the `dist/` folder to Netlify
3. Or connect your GitHub repo for continuous deployment

## 🔧 Project Structure

```
src/
├── components/
│   ├── Hero/           # Hero section
│   ├── About/          # About section
│   ├── Services/       # Services section
│   ├── Portfolio/      # Featured project
│   ├── Testimonial/    # Client testimonial
│   ├── Process/        # How you work
│   ├── TechStack/      # Technologies
│   ├── Contact/        # Contact form
│   └── common/         # Reusable components
├── contexts/           # React contexts (Theme)
├── hooks/              # Custom React hooks
├── data/               # Content data
├── types/              # TypeScript types
├── utils/              # Utility functions
└── styles/             # Global styles
```

## 📄 License

© 2025 Ortus Solutions. All rights reserved.

## 🤝 Support

For questions or issues, please contact [contact@ortussolutions.com](mailto:contact@ortussolutions.com)

---

**Built with React, TypeScript & Tailwind CSS**
