import React from 'react'

const projectsData = [
  {
    title: '🤖 Customer Churn Prediction',
    desc: 'Advanced machine learning system with analytics dashboard and explainable AI insights for customer retention.'
  },
  {
    title: '🏙️ CityZen Platform',
    desc: 'Full-stack civic issue reporting platform built with React, Node.js and modern web technologies for community engagement.'
  },
  {
    title: '💼 Management Systems Suite',
    desc: 'Enterprise-grade management systems (School, Library, Blood Bank, Hospital) built with C# and .NET framework.'
  }
]

function ProjectCard({ title, desc }) {
  return (
    <div className="card project-card">
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="card-actions">
        <button className="btn small primary">Learn More</button>
        <button className="btn small ghost">See Code</button>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="grid projects-grid">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
