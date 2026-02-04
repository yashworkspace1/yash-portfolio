# Multi-Page Portfolio with Video Backgrounds

A modern, fully responsive portfolio website built with React, React Router, and video backgrounds.

## Features

✨ **Multi-Page Navigation** - Landing, Profile, Skills, Projects, and Professional Experience pages
🎬 **Video Backgrounds** - Unique video backgrounds for each page
🎨 **Theme Support** - Multiple color themes (Light, Dark, Ocean, Matte)
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
⚡ **Fast & Modern** - Built with Vite and React 18

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation with routing
│   ├── VideoBackground.jsx  # Video background wrapper
│   └── ...other components
├── pages/
│   ├── Landing.jsx          # Landing page (car-video)
│   ├── Profile.jsx          # Profile page (profile-video)
│   ├── Skills.jsx           # Skills page (skills-video)
│   ├── Projects.jsx         # Projects page (projects-video)
│   └── Experience.jsx       # Experience page (hero-video)
├── data/
│   ├── projects.js          # Projects data
│   └── experience.js        # Experience data
├── styles/
│   ├── styles.css           # Global styles
│   ├── VideoBackground.css  # Video background styles
│   └── pages/               # Page-specific styles
├── App.jsx                  # Main app with routing
└── main.jsx                 # Entry point
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Video Files

Create a `public/videos/` directory and add your video files:

```
public/
└── videos/
    ├── car-video.mp4
    ├── profile-video.mp4
    ├── skills-video.mp4
    ├── projects-video.mp4
    └── hero-video.mp4
```

See [VIDEO_SETUP.md](VIDEO_SETUP.md) for detailed video setup instructions.

### 3. Update Portfolio Data

Edit the files in `src/data/`:
- `projects.js` - Update with your projects
- `experience.js` - Update with your professional experience

Edit `src/pages/Profile.jsx` to customize your profile information.

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal)

## Pages Overview

### 🏠 Landing Page (`/`)
- Welcome screen with navigation buttons
- Car video background
- Quick access to all portfolio sections

### 👤 Profile Page (`/profile`)
- Personal information
- About section
- Background and expertise
- Contact links
- Profile video background

### ⚡ Skills Page (`/skills`)
- Skills organized by categories
- Frontend, Backend, Data & ML, Tools, Design, and Soft Skills
- Visual skill badges
- Skills video background

### 💼 Projects Page (`/projects`)
- Detailed project cards with:
  - Project overview
  - Key features and contributions
  - Technologies used
- Responsive grid layout
- Projects video background

### 🏢 Professional Experience Page (`/experience`)
- Work history and roles
- Detailed responsibilities
- Duration and company information
- Hero video background

## Customization

### Change Theme
Click the theme selector in the navbar (☀️ 🌙 🌊 🎨) to switch between:
- Light
- Dark
- Ocean
- Matte

### Update Colors
Edit the CSS variables in `src/styles.css`:
```css
:root {
  --accent: #3b82f6;
  --accent-light: #dbeafe;
  /* ... other variables ... */
}
```

### Modify Video Sources
Edit the `videoSrc` prop in each page component:
```jsx
<VideoBackground videoSrc="/videos/custom-video.mp4">
```

You can also use external URLs:
```jsx
<VideoBackground videoSrc="https://example.com/video.mp4">
```

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables and gradients
- **Modern JavaScript** - ES6+ features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Videos**: Use tools like FFmpeg to compress video files
2. **Format**: Use MP4 H.264 codec for best compatibility
3. **Size**: Keep videos under 50MB for faster loading
4. **Duration**: Use 10-30 second videos for better performance

## Troubleshooting

### Videos not loading
- Check that video files exist in `public/videos/`
- Verify file names match the `videoSrc` paths
- Check browser console for errors
- Ensure videos are in MP4 format

### Page transitions feel slow
- Reduce video file sizes
- Use faster internet for testing
- Check network tab in DevTools

### Theme not applying
- Clear browser cache
- Check theme class is applied to document root
- Verify CSS variables are defined

## Future Enhancements

- Add contact form
- Integrate with backend API
- Add testimonials section
- Add blog section
- Dark mode optimization
- PWA support
- Analytics integration

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please refer to the documentation or create an issue in the repository.

---

Happy coding! 🚀
