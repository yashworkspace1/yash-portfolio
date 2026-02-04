# Portfolio Routes & Navigation Map

## URL Routes

```
/                    → Landing Page (car-video.mp4)
/profile             → Profile Page (profile-video.mp4)
/skills              → Skills Page (skills-video.mp4)
/projects            → Projects Page (projects-video.mp4)
/experience          → Professional Experience Page (hero-video.mp4)
```

## Navigation Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                    NAVBAR (Sticky)                           │
│  Logo (Home)  │  Profile  │  Skills  │  Projects  │  Exp.    │
│  [🏠]         │  [👤]     │  [⚡]    │  [💼]      │  [🏢]    │
│                                               [Theme ☀️🌙🌊🎨]│
└──────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
    ┌────────┐         ┌─────────┐         ┌──────────┐
    │ Landing│         │ Profile │         │  Skills  │
    │  Page  │────────▶│  Page   │         │   Page   │
    │  (/)   │         │ (/prof) │         │ (/skill) │
    └────────┘         └─────────┘         └──────────┘
        │ ▲                 │ ▲                 │ ▲
        │ │                 │ │                 │ │
        │ └─────────────────┼─────────────────┘ │
        │                   │                   │
        ▼                   ▼                   ▼
    ┌────────┐         ┌─────────┐         ┌──────────┐
    │Projects│         │Experience        │ Back to  │
    │  Page  │────────▶│  Page   │        │  Home    │
    │(project)         │ (/exp)  │        │ (/)      │
    └────────┘         └─────────┘         └──────────┘
```

## Page Components Hierarchy

```
App.jsx (Router Setup)
│
├─ Navbar.jsx
│  └─ Links to all pages
│
├─ Routes
│  ├─ Landing.jsx (/)
│  │  ├─ VideoBackground
│  │  │  └─ car-video.mp4
│  │  └─ Navigation Buttons
│  │
│  ├─ Profile.jsx (/profile)
│  │  ├─ VideoBackground
│  │  │  └─ profile-video.mp4
│  │  └─ Profile Content
│  │
│  ├─ Skills.jsx (/skills)
│  │  ├─ VideoBackground
│  │  │  └─ skills-video.mp4
│  │  └─ Skill Categories
│  │
│  ├─ Projects.jsx (/projects)
│  │  ├─ VideoBackground
│  │  │  └─ projects-video.mp4
│  │  └─ Project Cards (6)
│  │
│  └─ Experience.jsx (/experience)
│     ├─ VideoBackground
│     │  └─ hero-video.mp4
│     └─ Experience Cards
```

## Data Flow

```
src/data/
├─ projects.js
│  └─ Exported as: projectsData (6 projects)
│     └─ Used in: Projects.jsx page
│
└─ experience.js
   └─ Exported as: professionalExperience (1 position)
      └─ Used in: Experience.jsx page
```

## Navigation Flow (User Journey)

### Flow 1: Landing → All Pages
```
START
  │
  ▼
Landing Page
  │
  ├─▶ [Profile] ─▶ Profile Page ◀─┐
  │                     │          │
  │                  [Back] ────────┘
  │
  ├─▶ [Skills] ──▶ Skills Page ◀─┐
  │                     │         │
  │                  [Back] ──────┘
  │
  ├─▶ [Projects] ▶ Projects Page ◀┐
  │                     │          │
  │                  [Back] ───────┘
  │
  └─▶ [Experience] ▶ Exp. Page ◀──┐
                         │          │
                      [Back] ───────┘
```

### Flow 2: Navbar Navigation (Direct Access)
```
Any Page
   │
   ├─▶ Click Navbar Link ─▶ Any Other Page
   │
   ├─▶ Click Logo/Brand ──▶ Landing Page
   │
   └─▶ Change Theme ──────▶ Same Page (Theme Updated)
```

## Component Props & Data

### VideoBackground Component
```jsx
<VideoBackground videoSrc="/videos/[video-name].mp4">
  {/* Page Content */}
</VideoBackground>
```

### Projects Page
```jsx
import { projectsData } from '../data/projects'
// projectsData = Array of 6 project objects
// Each project has: id, title, overview, features[], technologies[]
```

### Experience Page
```jsx
import { professionalExperience } from '../data/experience'
// professionalExperience = Array of 1 experience object
// Has: id, title, company, duration, roleDescription, responsibilities[]
```

## Page Details

### Landing Page (/)
- **Route**: `/`
- **Video**: `car-video.mp4`
- **Components Used**: VideoBackground, Navigation Buttons
- **Data**: None (static content)
- **Features**:
  - Welcome message
  - 4 navigation buttons with icons
  - Smooth animations

### Profile Page (/profile)
- **Route**: `/profile`
- **Video**: `profile-video.mp4`
- **Components Used**: VideoBackground, Back Button
- **Data**: Static (edit manually)
- **Features**:
  - Personal info
  - About section
  - Background info
  - Contact links

### Skills Page (/skills)
- **Route**: `/skills`
- **Video**: `skills-video.mp4`
- **Components Used**: VideoBackground, Back Button
- **Data**: Static (hardcoded categories)
- **Features**:
  - 6 skill categories
  - 27+ technologies
  - Skill badges with hover effects

### Projects Page (/projects)
- **Route**: `/projects`
- **Video**: `projects-video.mp4`
- **Components Used**: VideoBackground, Back Button
- **Data**: projectsData (from projects.js)
- **Features**:
  - 6 project cards
  - Features and responsibilities
  - Technology stack
  - Project numbering

### Experience Page (/experience)
- **Route**: `/experience`
- **Video**: `hero-video.mp4`
- **Components Used**: VideoBackground, Back Button
- **Data**: professionalExperience (from experience.js)
- **Features**:
  - Job title and company
  - Duration info
  - Role description
  - Responsibilities list

## Theme System

```
Navbar Theme Selector
         │
    ┌────┼────┬─────────┬─────────┐
    │    │    │         │         │
   Light Dark Ocean   Matte
    │    │    │         │
    └────┴────┴─────────┴─────────┘
           │
           ▼
    CSS Variables Updated
           │
    ┌──────┴──────┬──────────┬────────────┐
    │             │          │            │
 --bg-color   --text    --accent    --border
    │             │          │            │
    └──────┬──────┴──────────┴────────────┘
           │
           ▼
      All Pages Updated
```

## Responsive Breakpoint

```
Desktop (> 768px)
├─ Navbar: Horizontal layout
├─ Content: Full width
├─ Grid: Multi-column
└─ Spacing: Generous

Mobile (≤ 768px)
├─ Navbar: Adjusted spacing
├─ Content: Full width
├─ Grid: Single column
└─ Spacing: Compact
```

## File Routing Map

```
src/
├─ App.jsx
│  └─ BrowserRouter
│     └─ Routes
│        ├─ / → Landing.jsx
│        ├─ /profile → Profile.jsx
│        ├─ /skills → Skills.jsx
│        ├─ /projects → Projects.jsx
│        └─ /experience → Experience.jsx
│
├─ components/
│  ├─ Navbar.jsx (Navigation)
│  └─ VideoBackground.jsx (Video wrapper)
│
├─ pages/
│  ├─ Landing.jsx
│  ├─ Profile.jsx
│  ├─ Skills.jsx
│  ├─ Projects.jsx
│  └─ Experience.jsx
│
├─ data/
│  ├─ projects.js
│  └─ experience.js
│
└─ styles/
   ├─ styles.css (Global)
   ├─ VideoBackground.css
   └─ pages/
      ├─ Landing.css
      ├─ Profile.css
      ├─ Skills.css
      ├─ Projects.css
      └─ Experience.css
```

## Quick Navigation

**From ANY page**, you can:
1. Click **Navbar Logo** → Go to Home
2. Click **Navbar Links** → Go to that page
3. Click **Back Button** → Go to Home
4. Click **Theme Selector** → Change theme

**All pages have consistent navigation**, making it easy to explore your portfolio!

---

This routing structure ensures:
✅ Fast navigation
✅ Easy updates
✅ Scalable design
✅ Mobile-friendly
✅ SEO optimized
