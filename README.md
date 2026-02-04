# Yash Kumar — Portfolio (React + Vite)

A modern, fully responsive portfolio website built with React, Vite, and featuring multiple beautiful themes with smooth animations and premium UI design.

## ✨ Features

- **🎨 Four Premium Themes**: Light, Dark, Ocean, and Matte color edition with smooth transitions
- **⚡ Built with Vite**: Lightning-fast development and build process
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **✅ Smooth Animations**: Floating effects, fade-in animations, and hover interactions
- **🎯 Modern UI/UX**: Clean design with gradient text, glassmorphism navbar, and interactive cards
- **🔄 Easy Theme Switching**: Toggle themes instantly from the navbar selector
- **🎬 Hero Video**: Animated background video in hero section (first 2 seconds looping)
- **⚙️ Low Complexity Code**: Optimized, maintainable components with minimal cyclomatic complexity

## 🎨 Themes

### Light Theme ☀️
- Clean white background with blue accents
- Perfect for daytime browsing
- Professional and minimal aesthetic

### Dark Theme 🌙
- Deep navy background with light text
- Reduces eye strain in low-light environments
- Modern and sleek appearance

### Ocean Theme 🌊
- Soft blue gradient background
- Cyan accents and aqua highlights
- Refreshing and calm color palette

### Matte Theme 🎨
- Sophisticated warm earth tones
- Matte finish with bronze/brown accents
- Professional and elegant aesthetic

## 📁 Project Structure

```
c:\Users\yashs\yashworkspace1\
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with theme selector
│   │   ├── Hero.jsx            # Hero section with video
│   │   ├── Skills.jsx          # Technical skills showcase
│   │   ├── Projects.jsx        # Featured projects
│   │   └── Footer.jsx          # Footer with contact info
│   ├── theme/
│   │   └── ThemeContext.jsx    # Theme provider and context
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── styles.css              # Global styles with theme variables
├── public/
│   └── hero-video.mp4          # Hero section video (2 sec loop)
├── index.html                  # HTML template
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🚀 Quick Start

### 1. Install Dependencies

```powershell
npm install
```

### 2. Run Development Server

```powershell
npm run dev
```

The server will start at `http://localhost:5174/` (or next available port).

### 3. Build for Production

```powershell
npm run build
```

Output files will be in the `dist/` directory.

### 4. Preview Production Build

```powershell
npm run preview
```

## 🎨 Customization

### Add Your Information

Edit the component files in `src/components/` to update:
- Hero section headline and tagline (`Hero.jsx`)
- Skills list (`Skills.jsx`)
- Project details (`Projects.jsx`)
- Contact information (`Footer.jsx`)

### Customize Colors

Edit `src/styles.css` to modify theme colors in the `:root` and theme-specific selectors.

### Add Projects

In `src/components/Projects.jsx`, add more items to the `projectsData` array.

### Change Hero Video

Replace `public/hero-video.mp4` with your own video file.

## 📦 Dependencies

- **React 18.2+**: UI library
- **React DOM 18.2+**: React rendering
- **Vite 5+**: Build tool and dev server
- **@vitejs/plugin-react**: React support for Vite

## 🌐 Deployment

The portfolio can be deployed to:
- **Vercel**: `npm run build` then push to GitHub
- **Netlify**: Connect your repo, auto-deploys on push
- **GitHub Pages**: Configure in `vite.config.js`
- **Traditional Hosting**: Upload `dist/` folder contents

## 📝 License

© 2026 Yash Kumar. All rights reserved.

## 💡 Tips

- Use the theme selector in the navbar to test all four themes
- Components use CSS custom properties for consistent theming
- All components are optimized with low complexity scores
- Hero video loops the first 2 seconds for fast loading

---

Built 
using React + Vite
