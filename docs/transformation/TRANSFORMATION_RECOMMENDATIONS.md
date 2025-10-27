# Ortus Solutions Website Transformation: Solo → Team

## Executive Summary

Transform the current single-consultant portfolio website into a professional 4-member consultancy website that showcases the team's collective expertise while maintaining individual member visibility.

---

## Current State vs. Target State

### Current State
- ❌ Solo consultant branding ("I build", "My services")
- ❌ Single "About" section with one person
- ❌ One featured project only
- ❌ Services framed as individual offerings
- ❌ No team showcase

### Target State
- ✅ Team consultancy branding ("We build", "Our services")
- ✅ Company About + dedicated Team section
- ✅ Projects gallery with multiple case studies
- ✅ Services framed as team capabilities
- ✅ Individual team member profiles
- ✅ Team expertise matrix and combined stats

---

## Recommended New Sections

### 1. **Team Section** (New)
**Location:** After "About Us" section
**Purpose:** Showcase all 4 members

**Features:**
- Grid layout (2x2 on desktop, 1 column on mobile)
- Each team member card includes:
  - Professional headshot
  - Name and title
  - Short tagline (1 sentence)
  - Key expertise areas (3-4 tags)
  - Social links (LinkedIn, GitHub)
  - "View Profile" button (expands or goes to detail page)
- Glassmorphism cards with hover effects
- Animated entrance on scroll

**Content Needed:**
- 4 professional headshots (600x600px minimum)
- Names, titles, taglines
- Bio for each person (3 paragraphs)
- Expertise tags
- Social media links

---

### 2. **Company About Section** (Modified)
**Location:** Replace current "About" section
**Purpose:** Tell Ortus Solutions' story as a company

**Features:**
- Company mission and values
- Founding story / Why Ortus exists
- Team statistics with animated counters:
  - Combined years of experience
  - Total projects completed
  - Industries served
  - Happy clients
- Company photo (optional - team working together)

**Content Needed:**
- Company mission statement
- 2-3 paragraphs about Ortus Solutions
- Company values (3-5 core values)
- Aggregate statistics

---

### 3. **Projects Gallery** (Expanded)
**Location:** Replace current single "Work" section
**Purpose:** Showcase multiple projects across the team

**Features:**
- Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Filter/sort options:
  - By industry (Healthcare, FinTech, E-commerce, etc.)
  - By technology (Python, AWS, Airflow, etc.)
  - By team member (who worked on it)
- Each project card shows:
  - Hero image
  - Project title
  - Client name (or "Confidential")
  - Industry
  - Key result metric (e.g., "75% faster processing")
  - Technologies used (tags)
  - Team member(s) involved (avatars)
- Click to expand for full case study
- "Load more" or pagination for many projects

**Content Needed:**
- 8-12 project case studies (2-3 per team member minimum)
- Project images (1200x800px minimum)
- Detailed project information (see data sheet)

---

### 4. **Individual Team Member Pages** (Optional)
**Location:** Separate page per member (e.g., /team/john-doe)
**Purpose:** Deep dive into each member's expertise

**Features:**
- Full bio (3 paragraphs)
- Skills visualization (radar chart or progress bars)
- Projects they've worked on
- Testimonials specific to them
- Publications/talks/certifications
- Downloadable resume/CV (optional)
- Contact form specific to them

**Content Needed:**
- Everything from the data collection sheet per member

---

## Sections to Modify

### 5. **Hero Section**
**Changes:**
- Tagline: "We Build Data Pipelines..." (not "I Build")
- Description: Use "We", "Our team", "Our expertise"
- Update typing animation texts to team-oriented:
  - "Building custom data pipelines for enterprise clients"
  - "A team of 4 specialized data engineers"
  - "Combined 25+ years of experience" (update number)
  - "Serving Fortune 500 companies worldwide"

### 6. **Services Section**
**Changes:**
- Header: "Our Services" (not implied singular)
- Description text: "We offer..." / "Our team specializes in..."
- Service cards remain same structure
- Consider adding "Team expertise" indicators (which members do this service)

### 7. **Process Section**
**Changes:**
- "Our Process" instead of "My Process"
- Update descriptions to use "we", "our team"
- Consider adding: "Your dedicated team member will..."

### 8. **Testimonials**
**Changes:**
- Tag testimonials to specific projects
- Tag testimonials to specific team members
- Show team member avatar next to testimonial if applicable

### 9. **Contact Section**
**Changes:**
- Two options:
  - General inquiry form (routes to appropriate team member)
  - OR: "Choose your specialist" - let visitors pick who to contact
- Update copy: "Contact our team" / "Get in touch with us"

---

## Navigation Structure

### Current Navigation
```
About → Services → Work → Process → Contact
```

### Recommended New Navigation
```
Home → About Us → Our Team → Services → Projects → Process → Contact
```

**OR with dropdown:**
```
Home → About ↓ → Services → Projects → Process → Contact
         ├─ Our Story
         └─ Meet the Team
```

---

## Technical Implementation Plan

### Phase 1: Data Structure (Week 1)
**Priority:** High
**Time Estimate:** 4-6 hours

1. **Create new types:**
   ```typescript
   - TeamMember (name, title, bio, photo, skills, etc.)
   - CompanyInfo (mission, values, founding, stats)
   - Project (expand current type with team member references)
   ```

2. **Create data files:**
   ```typescript
   - src/data/team.ts (4 team members)
   - src/data/company.ts (company information)
   - src/data/projects.ts (array of projects, not single)
   ```

3. **Update existing data:**
   - Migrate from `personalInfo` to `companyInfo`
   - Convert single `featuredProject` to `projects` array

### Phase 2: Core Components (Week 1-2)
**Priority:** High
**Time Estimate:** 12-16 hours

4. **Create Team section:**
   ```
   - src/components/Team/Team.tsx
   - src/components/Team/TeamMemberCard.tsx
   ```

5. **Create Company About:**
   ```
   - src/components/About/CompanyAbout.tsx (replaces current About.tsx)
   ```

6. **Create Projects Gallery:**
   ```
   - src/components/Projects/ProjectsGallery.tsx
   - src/components/Projects/ProjectCard.tsx
   - src/components/Projects/ProjectFilters.tsx
   ```

7. **Update Hero:**
   - Change all copy from singular to plural
   - Update typing animation texts

8. **Update Services:**
   - Change language to team-oriented

### Phase 3: Enhanced Features (Week 2-3)
**Priority:** Medium
**Time Estimate:** 8-12 hours

9. **Team member detail pages:**
   ```
   - src/pages/TeamMember.tsx (if using routing)
   - OR: Modal/drawer for member details
   ```

10. **Project filtering:**
    - By industry
    - By technology
    - By team member

11. **Team expertise matrix:**
    - Visual chart showing who knows what
    - Skill overlap visualization

12. **Updated testimonials:**
    - Link to projects and team members
    - Better organization

### Phase 4: Polish & Content (Week 3)
**Priority:** Medium-Low
**Time Estimate:** 6-8 hours

13. **Copy updates:**
    - Find/replace all singular language
    - Update all "I" to "we"
    - Review entire site for consistency

14. **Image optimization:**
    - Compress all team photos
    - Compress all project images
    - Create placeholder states

15. **SEO updates:**
    - Update meta descriptions (team-focused)
    - Update structured data (Organization instead of Person)
    - Update sitemap

---

## Content Requirements Summary

### Immediate Needs (Block development)
- [ ] Company mission statement
- [ ] Company values (3-5)
- [ ] Founding story (2-3 paragraphs)
- [ ] 4 team member names and titles
- [ ] 4 professional headshots

### High Priority (Launch blockers)
- [ ] 4 complete team member bios (from data sheet)
- [ ] 4-8 project case studies (2 per member minimum)
- [ ] Project images for each case study
- [ ] Team member skills/expertise lists

### Medium Priority (Nice to have)
- [ ] 6-12 more project case studies
- [ ] 4-8 client testimonials (tagged to members/projects)
- [ ] Team photo (working together)
- [ ] Certification badges/awards

### Low Priority (Post-launch)
- [ ] Blog/articles by team members
- [ ] Video testimonials
- [ ] Conference talk recordings
- [ ] Individual member resumes/CVs

---

## Design Recommendations

### Team Section Design
```
┌─────────────────────────────────────┐
│      Meet Our Expert Team           │
│   [Subtitle about combined exp]     │
└─────────────────────────────────────┘

┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│ Photo  │  │ Photo  │  │ Photo  │  │ Photo  │
│ Name   │  │ Name   │  │ Name   │  │ Name   │
│ Title  │  │ Title  │  │ Title  │  │ Title  │
│ Tags   │  │ Tags   │  │ Tags   │  │ Tags   │
│ [View] │  │ [View] │  │ [View] │  │ [View] │
└────────┘  └────────┘  └────────┘  └────────┘
```

### Projects Gallery Design
```
┌─────────────────────────────────────┐
│      Our Work                       │
│   [Filters: All | FinTech | ...    │
└─────────────────────────────────────┘

┌──────────┐ ┌──────────┐ ┌──────────┐
│   IMG    │ │   IMG    │ │   IMG    │
│  Title   │ │  Title   │ │  Title   │
│  Client  │ │  Client  │ │  Client  │
│  Result  │ │  Result  │ │  Result  │
│ [👤👤]   │ │ [👤👤]   │ │ [👤👤]   │
└──────────┘ └──────────┘ └──────────┘
```

---

## Timeline Estimate

### Minimum Viable Team Site
**2-3 weeks** with data collection
- Week 1: Data collection + structure setup
- Week 2: Core components (Team, Projects, About)
- Week 3: Polish and copy updates

### Full-Featured Team Site
**3-4 weeks** with all features
- Above + individual member pages
- Above + advanced filtering
- Above + expertise visualizations

---

## Next Steps

### Immediate (This Week)
1. ✅ Review this document and data collection sheet
2. ⏳ Distribute data sheet to all 4 team members
3. ⏳ Collect company information (mission, values, stats)
4. ⏳ Gather high-priority photos

### Week 1
5. ⏳ Set deadline for data sheet completion
6. ⏳ Begin data structure implementation
7. ⏳ Design mockups for new sections (optional)

### Week 2
8. ⏳ Build Team and Projects components
9. ⏳ Update Hero and Services language
10. ⏳ First round of review

### Week 3
11. ⏳ Polish and refinement
12. ⏳ Content review and editing
13. ⏳ Launch!

---

## Questions to Answer

Before proceeding, let's clarify:

1. **Team Member Pages:** Do you want individual detail pages for each member, or just the Team section grid?

2. **Project Confidentiality:** How many projects can be shown publicly? Any NDA concerns?

3. **Contact Routing:** Should contact form route to one person, or let visitors choose their specialist?

4. **Company History:** When was Ortus Solutions founded? Any milestones to highlight?

5. **Branding:** Do you want to keep current colors/style, or rebrand as you transition to team?

6. **Domain:** Will you keep current domain, or is this a fresh launch?

7. **Timeline:** What's your ideal launch date? Any hard deadlines?

---

## File Deliverables

You now have:
1. ✅ **TEAM_DATA_COLLECTION_SHEET.md** - Comprehensive form for team members
2. ✅ **TRANSFORMATION_RECOMMENDATIONS.md** - This document with full plan

Ready to start building once you have the data!
