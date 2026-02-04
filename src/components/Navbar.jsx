import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ThemeContext } from '../theme/ThemeContext'

function Brand() {
  const navigate = useNavigate()
  return (
    <div 
      className="brand"
      onClick={() => navigate('/')}
      style={{ cursor: 'pointer' }}
    >
      Yash Kumar
    </div>
  )
}

function NavLinks() {
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
    { label: 'Profile', path: '/profile' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' }
  ]

  return (
    <div className="nav-links">
      {links.map((link) => (
        <button
          key={link.path}
          onClick={() => navigate(link.path)}
          className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
        >
          {link.label}
        </button>
      ))}
    </div>
  )
}

function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="theme-controls">
      <label htmlFor="theme-select" className="sr-only">Theme</label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        aria-label="Choose theme"
      >
        <option value="light">☀️ Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="ocean">🌊 Ocean</option>
        <option value="matte">🎨 Matte</option>
      </select>
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Brand />
        <NavLinks />
        <ThemeSelector />
      </div>
    </nav>
  )
}
