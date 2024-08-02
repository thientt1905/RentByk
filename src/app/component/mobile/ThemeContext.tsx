// ThemeContext.js

import { useTheme } from 'next-themes'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(theme)

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setCurrentTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
