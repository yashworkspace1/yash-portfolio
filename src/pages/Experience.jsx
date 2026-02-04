import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../components/VideoBackground'
import { useClickEffect } from '../hooks/useClickEffect'
import { professionalExperience } from '../data/experience'
import '../styles/pages/Experience.css'
import '../styles/ClickEffects.css'

export default function Experience() {
  const navigate = useNavigate()
  useClickEffect('ripple')

  return (
    <VideoBackground videoSrc="/videos/hero-video.mp4">
      <div className="experience-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        
        <div className="experience-content">
          <h1>Professional Experience</h1>
          
          <div className="experience-list">
            {professionalExperience.map((job) => (
              <div key={job.id} className="experience-card">
                <div className="experience-header">
                  <div className="job-info">
                    <h2>{job.title}</h2>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="duration">{job.duration}</span>
                </div>
                
                <div className="experience-body">
                  <div className="role-section">
                    <h3>Role Summary</h3>
                    <p>{job.roleDescription}</p>
                  </div>
                  
                  <div className="responsibilities-section">
                    <h3>Responsibilities & Contributions</h3>
                    <ul className="responsibilities-list">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>
                          <span className="bullet">✓</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {job.certificateImage && (
                  <div className="certificate-section">
                    <h3>📜 Certificate of Completion</h3>
                    <img src={job.certificateImage} alt="Internship Certificate" className="certificate-image" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </VideoBackground>
  )
}
