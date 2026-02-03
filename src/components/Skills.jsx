import React from 'react'

const skillsData = [
  {
    emoji: '📊',
    title: 'Data Science & AI',
    description: 'Python, Pandas, NumPy, SQL, PyTorch, Machine Learning, Data Analysis, Deep Learning'
  },
  {
    emoji: '🌐',
    title: 'Web Development',
    description: 'React, Next.js, HTML5, CSS3, JavaScript, Vite, Responsive Design, UI/UX'
  },
  {
    emoji: '🖥️',
    title: 'C# & .NET',
    description: 'OOP, SQL Server, ASP.NET, Entity Framework, Desktop Applications, LINQ'
  }
]

function SkillCard({ emoji, title, description }) {
  return (
    <div className="card">
      <h3>{emoji} {title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="grid skills-grid">
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
