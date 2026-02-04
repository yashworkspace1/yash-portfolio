import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../components/VideoBackground'
import { useClickEffect } from '../hooks/useClickEffect'
import { projectsData } from '../data/projects'
import '../styles/pages/Projects.css'
import '../styles/ClickEffects.css'

export default function ProjectsPage() {
  const navigate = useNavigate()
  useClickEffect('plasma')

  return (
    <VideoBackground videoSrc="/videos/projects-video.mp4">
      <div className="projects-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        
        <div className="projects-content">
          <h1>My Projects</h1>
          <p className="projects-intro">A showcase of my work and technical achievements</p>
          
          <div className="projects-list">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h2>{project.title}</h2>
                  <span className="project-number">#{project.id}</span>
                </div>
                
                <p className="project-overview">{project.overview}</p>
                
                <div className="project-section">
                  <h3>Key Features & Work Done</h3>
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-section">
                  <h3>Technologies Used</h3>
                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VideoBackground>
  )
}
