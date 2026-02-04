# Video Files Configuration

To use the portfolio with video backgrounds, you need to place the following video files in the `public/videos/` directory:

## Required Videos:

1. **car-video.mp4** - Landing page background
2. **profile-video.mp4** - Profile page background
3. **skills-video.mp4** - Skills page background
4. **projects-video.mp4** - Projects page background
5. **hero-video.mp4** - Professional Experience page background

## Setup Steps:

1. Create a `videos` folder in the `public` directory:
   ```
   public/
   └── videos/
       ├── car-video.mp4
       ├── profile-video.mp4
       ├── skills-video.mp4
       ├── projects-video.mp4
       └── hero-video.mp4
   ```

2. Add your video files to the `public/videos/` directory

3. The videos will automatically be referenced in the app components

## Video Recommendations:

- **Format**: MP4 (h.264 codec for better browser compatibility)
- **Resolution**: 1920x1080 or higher for best quality
- **File Size**: Keep under 50MB for optimal loading
- **Duration**: 10-30 seconds (will loop)
- **Frame Rate**: 30fps or 60fps

## Alternative: Using Placeholder Videos

If you don't have videos yet, you can:
1. Use free stock video websites (Pexels, Pixabay, Unsplash)
2. Create simple videos using video editing software
3. Use auto-playing background videos from CDNs

The video paths in the components can be changed to use external URLs:
```jsx
<VideoBackground videoSrc="https://example.com/video.mp4">
```
