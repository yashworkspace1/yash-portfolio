import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../components/VideoBackground'
import { useClickEffect } from '../hooks/useClickEffect'
import '../styles/pages/Profile.css'
import '../styles/ClickEffects.css'

export default function Profile() {
  const navigate = useNavigate()
  useClickEffect('bubble')

  return (
    <VideoBackground videoSrc="/videos/profile-video.mp4">
      <div className="profile-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        
        <div className="profile-card">
          <div className="profile-header">
            <h1>Yash Kumar</h1>
            <p className="profile-title">Full Stack Developer</p>
          </div>
          
          <div className="profile-content">
            <div className="profile-section">
              <h2>About Me</h2>
              <p>
                I'm a passionate full-stack developer with a strong foundation in web development and design. 
                With 6 months of hands-on experience as a Web Development Intern at Vishal Global Tech, 
                I've worked on multiple real-world projects involving frontend development, UI/UX design, and full-stack concepts.
              </p>
            </div>

            <div className="profile-section">
              <h2>🎓 Education</h2>
              <div className="education-item">
                <h3>Master of Computer Applications (MCA)</h3>
                <p className="education-status">Ongoing</p>
              </div>
              <div className="education-item">
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>Shri Siddhi Vinayak Group of Institutions (SSVGI), Affiliated to Rohilkhand University</p>
                <p className="education-meta">2021 – 2024 | 71%</p>
              </div>
              <div className="education-item">
                <h3>Higher Secondary (12th Grade)</h3>
                <p>GRM School, Bareilly</p>
                <p className="education-meta">2021 | 83%</p>
              </div>
              <div className="education-item">
                <h3>Secondary (10th Grade)</h3>
                <p>Sacred Hearts Public School, Bareilly</p>
                <p className="education-meta">2019 | 91.4%</p>
              </div>
            </div>

            <div className="profile-section">
              <h2>What I Do</h2>
              <ul className="profile-list">
                <li>Build responsive and interactive web applications</li>
                <li>Design clean and intuitive user interfaces</li>
                <li>Develop full-stack solutions using modern technologies</li>
                <li>Implement best practices in code structure and version control</li>
                <li>Create data-driven applications with machine learning integration</li>
              </ul>
            </div>

            <div className="profile-section">
              <h2>Get In Touch</h2>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link">📧 Email</a>
                <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VideoBackground>
  )
}
