import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../components/VideoBackground'
import { useClickEffect } from '../hooks/useClickEffect'
import '../styles/pages/Landing.css'
import '../styles/ClickEffects.css'

export default function Landing() {
  const navigate = useNavigate()
  useClickEffect('flare')

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <VideoBackground videoSrc="/videos/car-video.mp4">
      <div className="landing-content">
        <div className="landing-card">
          <h1 className="landing-title">Welcome to My Portfolio</h1>
          <p className="landing-subtitle">Yash Kumar - Full Stack Developer</p>
          
          <div className="navigation-grid">
            <button 
              className="nav-button"
              onClick={() => handleNavigation('/profile')}
            >
              <span className="button-icon">👤</span>
              <span className="button-text">Profile</span>
            </button>
            
            <button 
              className="nav-button"
              onClick={() => handleNavigation('/skills')}
            >
              <span className="button-icon">⚡</span>
              <span className="button-text">Skills</span>
            </button>
            
            <button 
              className="nav-button"
              onClick={() => handleNavigation('/projects')}
            >
              <span className="button-icon">💼</span>
              <span className="button-text">Projects</span>
            </button>
            
            <button 
              className="nav-button"
              onClick={() => handleNavigation('/experience')}
            >
              <span className="button-icon">🏢</span>
              <span className="button-text">Experience</span>
            </button>
          </div>
        </div>
      </div>
    </VideoBackground>
  )
}
