import { useCallback } from 'react'

export function useTheme() {
  const getTheme = () =>
    document.documentElement.getAttribute('data-theme') || 'light'

  const setTheme = useCallback((theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('intellinex-theme', theme)
  }, [])

  const toggleTheme = useCallback(() => {
    const current = getTheme()
    setTheme(current === 'dark' ? 'light' : 'dark')
  }, [setTheme])

  const isDark = () => getTheme() === 'dark'

  return { toggleTheme, setTheme, getTheme, isDark }
}
