import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const themes = {
  light: 'theme-light',
  dark: 'theme-dark',
  ocean: 'theme-ocean',
  matte: 'theme-matte'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    // remove previous theme classes
    Object.values(themes).forEach((t) => root.classList.remove(t))
    root.classList.add(themes[theme])
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}
