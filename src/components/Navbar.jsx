import React, { useContext } from 'react'
import { ThemeContext } from '../theme/ThemeContext'

function Brand() {
  return <div className="brand">Yash Kumar</div>
}

function NavLinks() {
  return (
    <div className="nav-links">
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
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
