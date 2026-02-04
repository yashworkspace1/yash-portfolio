# 🚀 Quick Start Guide

## Get Started in 3 Steps

### Step 1: Add Your Videos (5 minutes)
1. Create a folder: `public/videos/`
2. Add these video files:
   - `car-video.mp4` (for landing page)
   - `profile-video.mp4` (for profile)
   - `skills-video.mp4` (for skills)
   - `projects-video.mp4` (for projects)
   - `hero-video.mp4` (for experience)

💡 **Tip**: Don't have videos? Use free stock videos from:
- [Pexels Videos](https://www.pexels.com/videos/)
- [Pixabay Videos](https://pixabay.com/videos/)
- [Unsplash Videos](https://unsplash.com/napi/videos/search)

### Step 2: Run Your Portfolio (1 minute)
```bash
npm run dev
```

Visit: `http://localhost:5173`

### Step 3: Customize (Optional)
- Edit `src/pages/Profile.jsx` for your info
- Update contact links in Profile page
- Modify project descriptions in `src/data/projects.js`
- Change colors in `src/styles.css`

## What You Get

✅ **Landing Page** - Beautiful entry point with 4 navigation buttons
✅ **Profile Page** - Personal introduction and contact
✅ **Skills Page** - 6 categorized skill areas with 27+ technologies
✅ **Projects Page** - All 6 your projects with full details
✅ **Experience Page** - Your professional experience highlighted
✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Theme Switcher** - 4 color themes (Light, Dark, Ocean, Matte)
✅ **Smooth Navigation** - Fast page transitions

## File Structure

```
portfolio/
├── src/
│   ├── pages/           ← Your page components
│   ├── components/      ← Reusable components
│   ├── data/            ← Project and experience data
│   ├── styles/          ← CSS files
│   └── App.jsx          ← Main app
├── public/
│   └── videos/          ← Add your videos here
└── package.json         ← Dependencies
```

## Common Customizations

### Change Your Name
In `src/components/Navbar.jsx`, line 7:
```jsx
<div className="brand">Yash Kumar</div> // Change to your name
```

### Update Contact Links
In `src/pages/Profile.jsx`, around line 50:
```jsx
<a href="mailto:your.email@example.com">📧 Email</a>
<a href="https://your-linkedin.com">💼 LinkedIn</a>
<a href="https://your-github.com">🐙 GitHub</a>
```

### Change Colors
In `src/styles.css`, line 10:
```css
--accent: #667eea;  /* Change this color */
```

### Add More Projects
1. Open `src/data/projects.js`
2. Add a new object to the array
3. The page will automatically update!

## Video Recommendations

| Page | Video Type | Duration | Aspect Ratio |
|------|-----------|----------|--------------|
| Landing | Car/Motion | 15-30s | 16:9 |
| Profile | Abstract/Gradient | 10-20s | 16:9 |
| Skills | Tech/Code | 15-25s | 16:9 |
| Projects | Portfolio/Design | 15-25s | 16:9 |
| Experience | Corporate/Professional | 20-30s | 16:9 |

## Troubleshooting

### Videos not showing?
- ✓ Check file names match exactly (case-sensitive)
- ✓ Files should be in `public/videos/`
- ✓ Use MP4 format (.mp4)
- ✓ Check browser console for errors

### Page looks broken?
- ✓ Clear browser cache (Ctrl+Shift+Delete)
- ✓ Restart dev server (`npm run dev`)
- ✓ Check console for errors (F12)

### Need help?
- Read [PORTFOLIO_GUIDE.md](PORTFOLIO_GUIDE.md) for detailed docs
- Check [VIDEO_SETUP.md](VIDEO_SETUP.md) for video setup
- See [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) for what's included

## Next Steps

1. **Add Videos** → Place MP4 files in `public/videos/`
2. **Customize Content** → Update Profile, Projects, Experience
3. **Test Locally** → Run `npm run dev`
4. **Test on Mobile** → Check responsive design
5. **Deploy** → Run `npm run build` then upload to hosting

## Deploy Your Portfolio

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### Option 3: GitHub Pages
- Build: `npm run build`
- Upload `dist/` folder to GitHub Pages

## Performance Tips

- Compress videos: use [HandBrake](https://handbrake.fr/)
- Target video size: 20-40MB max
- Use H.264 codec for compatibility
- Test on slow internet (Chrome DevTools)

## Features You Have

| Feature | Status |
|---------|--------|
| Multi-page routing | ✅ Ready |
| Video backgrounds | ✅ Ready |
| Responsive design | ✅ Ready |
| Theme switching | ✅ Ready |
| Data integration | ✅ Ready |
| Smooth animations | ✅ Ready |
| Mobile optimized | ✅ Ready |
| SEO friendly | ✅ Ready |

---

**You're all set!** Just add videos and you're ready to go. 🎉

For more details, see the documentation files:
- 📖 [PORTFOLIO_GUIDE.md](PORTFOLIO_GUIDE.md)
- 🎬 [VIDEO_SETUP.md](VIDEO_SETUP.md)
- 📋 [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)
