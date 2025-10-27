# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your portfolio website. It's free for personal projects and offers excellent performance.

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `ortus-solutions-website` or similar
3. Make it public or private (your choice)
4. Don't initialize with README (we already have one)

### Step 2: Push Your Code to GitHub

```bash
# Add GitHub as remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/ortus-solutions-website.git

# Push to GitHub
git branch -M main  # Rename master to main if needed
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your Repository**
   - Click "New Project"
   - Select "Import Git Repository"
   - Find and select `ortus-solutions-website`
   - Click "Import"

3. **Configure Project** (Vercel auto-detects Vite)
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Your site will be live at `https://your-project.vercel.app`

### Step 4: Add Custom Domain (Optional)

1. Buy a domain from:
   - [Namecheap](https://www.namecheap.com)
   - [Google Domains](https://domains.google.com)
   - [GoDaddy](https://www.godaddy.com)

2. In Vercel:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

3. Configure DNS:
   - Add the DNS records Vercel provides
   - Wait for DNS propagation (5-30 minutes)
   - Your site will be live at your custom domain!

### Step 5: Enable Analytics (Optional)

In Vercel:
- Go to "Analytics" tab
- Enable Vercel Analytics (free)
- Track pageviews and performance

---

## 🔧 Before Deploying - Update Your Content!

### ⚠️ Important: Replace Placeholder Content

Edit these files in `src/data/`:

1. **`personal.ts`** - YOUR information
   - Replace "Your Name" with your actual name
   - Update bio paragraphs
   - Add your email, phone, location
   - Update years of experience
   - Add path to your photo: `/images/profile.jpg`

2. **`project.ts`** - YOUR project
   - Replace with your actual project details
   - Add real client name (or keep confidential)
   - Write your challenge, solution, results
   - Update technologies used
   - Add project image paths

3. **`testimonial.ts`** - Real testimonial
   - Replace with actual client quote
   - Update client name, title, company
   - Add client photo/logo (optional)

4. **`services.ts`** - Customize if needed
   - Review service descriptions
   - Update to match your offerings

5. **`techStack.ts`** - YOUR technologies
   - Update with technologies YOU actually use
   - Remove ones you don't use

6. **`constants.ts`** in `src/utils/`
   - Update `CONTACT_EMAIL` with your real email
   - Update social links (LinkedIn, GitHub, Twitter)

### 📸 Add Your Images

Place these in `public/images/`:

- **Required:**
  - `profile.jpg` - Your professional photo (square, 600x600px min)
  - `project-1-hero.jpg` - Main project screenshot

- **Optional:**
  - `project-1-architecture.jpg` - Architecture diagram
  - `project-1-dashboard.jpg` - Additional screenshots
  - `client-logo.png` - Client company logo
  - `tech/` folder - Technology logos (or use text placeholders)

### 📝 Update Meta Tags

Edit `index.html`:
- Update title
- Update description
- Update Open Graph image path
- Add your actual domain when you have one

---

## 🧪 Test Before Deploying

```bash
# Run dev server
npm run dev
# Visit http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
# Visit http://localhost:4173
```

Check:
- ✅ All sections display correctly
- ✅ Dark/light mode toggle works
- ✅ Mobile menu works on small screens
- ✅ Contact form validates inputs
- ✅ All navigation links scroll smoothly
- ✅ No console errors
- ✅ Images load (or show placeholders)

---

## 🎨 Optional Customizations

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  accent: {
    DEFAULT: '#YOUR_COLOR',  // Your brand color
    light: '#LIGHTER_VERSION',
    dark: '#DARKER_VERSION',
  },
}
```

### Change Fonts

1. Choose fonts from [Google Fonts](https://fonts.google.com)

2. Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

3. Import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700;900&display=swap');
```

---

## 📊 Post-Deployment Checklist

After your site is live:

- [ ] Test on multiple devices (phone, tablet, desktop)
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Share on LinkedIn and social media
- [ ] Update LinkedIn profile with website link
- [ ] Update GitHub profile with website link
- [ ] Update email signature with website link
- [ ] Submit to Google Search Console
- [ ] Set up analytics tracking
- [ ] Monitor contact form submissions

---

## 🐛 Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Ensure all imports are correct
- Check for missing dependencies

### Images Not Loading
- Verify images are in `public/images/`
- Check image paths in data files
- Ensure image filenames match exactly (case-sensitive)

### Vercel Deployment Fails
- Check build logs in Vercel dashboard
- Ensure Node version compatibility
- Verify all dependencies are in `package.json`

### Form Not Working
- The current form is a placeholder (console.log only)
- Set up EmailJS, Formspree, or custom API endpoint
- See PRD.md for integration details

---

## 🎯 Next Steps (Phase 2+)

Once your MVP is live and getting traffic:

- **Phase 2:** Add 3D hero background, GSAP animations, smooth scrolling
- **Phase 3:** Integrate live chat, analytics, email service
- **Phase 4:** Add more projects as you complete them

---

## 💡 Tips for Success

1. **Get Real Content First**
   - Don't launch with placeholder content
   - One real project is better than three fake ones
   - Get actual testimonial from a satisfied client

2. **Professional Photos**
   - Invest in a professional headshot
   - Use high-quality project screenshots
   - Compress images for fast loading

3. **Drive Traffic**
   - Share on LinkedIn regularly
   - Add to your email signature
   - Include in proposals and pitches
   - Optimize for SEO (add keywords, meta descriptions)

4. **Keep It Updated**
   - Add new projects as you complete them
   - Request testimonials from each client
   - Update tech stack as you learn new tools
   - Keep content fresh and relevant

---

**Good luck with your deployment! 🚀**

Questions? Check the README.md or PRD.md for more details.
