import React, { useRef, useEffect } from 'react'

function useVideoTrim(duration = 2) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const resetVideo = () => {
      if (video.currentTime >= duration) video.currentTime = 0
    }

    video.addEventListener('timeupdate', resetVideo)
    return () => video.removeEventListener('timeupdate', resetVideo)
  }, [duration])

  return videoRef
}

function HeroVideo() {
  const videoRef = useVideoTrim(2)

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

function HeroHeading() {
  return (
    <h1>
      Hi, I'm Yash <span className="emoji">👋</span>
    </h1>
  )
}

function HeroDescription() {
  return (
    <p className="lead">
      Aspiring Software Developer | Machine Learning | Full-Stack Web Development | .NET Applications
    </p>
  )
}

function CTA({ href, label, variant = 'primary' }) {
  const className = `btn ${variant}`
  return <a className={className} href={href}>{label}</a>
}

function HeroActions() {
  return (
    <div className="cta">
      <CTA href="#projects" label="View My Work" variant="primary" />
      <CTA href="#contact" label="Get in Touch" variant="ghost" />
    </div>
  )
}

function HeroContent() {
  return (
    <div className="hero-inner">
      <HeroHeading />
      <HeroDescription />
      <HeroActions />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <HeroVideo />
      <HeroContent />
    </section>
  )
}
