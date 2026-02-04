import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeContext'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import SkillsPage from './pages/Skills'
import ProjectsPage from './pages/Projects'
import Experience from './pages/Experience'

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-root">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}
