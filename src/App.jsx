import React from 'react'
import { ThemeProvider } from './theme/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-root">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}
