import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../components/VideoBackground'
import { useClickEffect } from '../hooks/useClickEffect'
import '../styles/pages/Skills.css'
import '../styles/ClickEffects.css'

export default function SkillsPage() {
  const navigate = useNavigate()
  useClickEffect('fluid')

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design", "Next.js", "Vite"]
    },
    {
      category: "Backend Development",
      skills: ["Python", "FastAPI", "C#", ".NET Framework", "SQL", "REST APIs", "Node.js"]
    },
    {
      category: "Data & ML",
      skills: ["Pandas", "NumPy", "Scikit-learn", "SHAP", "Data Analysis", "Streamlit", "Machine Learning"]
    },
    {
      category: "🛠️ Tools & Technologies",
      skills: ["Visual Studio", "VS Code", "Git", "GitHub", "SQL Server", "MySQL", "Microsoft Excel", "Firebase", "Jupyter Notebook", "npm", "REST APIs", ".NET Framework"]
    },
    {
      category: "🎨 Design & UI/UX",
      skills: ["UI/UX Design Principles", "Responsive Interfaces", "User Flows", "Component Design", "Visual Hierarchy", "Intuitive Navigation", "Interaction Design"]
    },
    {
      category: "🤝 Soft Skills",
      skills: ["Leadership", "Problem Solving", "Team Collaboration", "Communication", "Task Ownership", "Adaptability", "Learning Agility"]
    }
  ]

  return (
    <VideoBackground videoSrc="/videos/skills-video.mp4">
      <div className="skills-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        
        <div className="skills-content">
          <h1>My Skills</h1>
          <p className="skills-intro">A comprehensive overview of my technical and professional expertise</p>
          
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-detailed-section">
            <h2>Design & UI/UX Skills</h2>
            <ul className="detailed-skills-list">
              <li>UI/UX design principles focused on usability, accessibility, and clean layouts</li>
              <li>Experience designing responsive interfaces for web applications</li>
              <li>Strong understanding of user flows, component-based design, and visual hierarchy</li>
              <li>Hands-on experience improving user experience through intuitive navigation and interaction design</li>
              <li>Ability to translate ideas and requirements into user-friendly interfaces</li>
            </ul>
          </div>

          <div className="skills-detailed-section">
            <h2>Soft Skills</h2>
            <ul className="detailed-skills-list">
              <li><strong>Leadership:</strong> Led and coordinated team efforts during hackathons and collaborative projects, managing task distribution and ensuring timely delivery</li>
              <li><strong>Problem Solving:</strong> Strong analytical thinking skills with a focus on finding effective solutions</li>
              <li><strong>Communication:</strong> Effective communication and collaboration in team-based environments</li>
              <li><strong>Ownership:</strong> Ability to take ownership of tasks and deliver results independently</li>
              <li><strong>Adaptability:</strong> Quick to learn new technologies and tools with enthusiasm for continuous improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </VideoBackground>
  )
}
