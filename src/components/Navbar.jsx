import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

import { Desktop, Cloud, Robot, ShieldCheck, Cpu, Code } from '@phosphor-icons/react'

const services = [
  { href: '/services/managed-it', icon: <Desktop weight="duotone" size={24} />, label: 'Managed IT', sub: '24/7 IT Operations' },
  { href: '/services/cloud', icon: <Cloud weight="duotone" size={24} />, label: 'Cloud Solutions', sub: 'AWS, Azure, GCP' },
  { href: '/services/ai', icon: <Robot weight="duotone" size={24} />, label: 'AI Solutions', sub: 'ML & Automation' },
  { href: '/services/cybersecurity', icon: <ShieldCheck weight="duotone" size={24} />, label: 'Cybersecurity', sub: 'Protect & Defend' },
  { href: '/services/hardware', icon: <Cpu weight="duotone" size={24} />, label: 'Hardware', sub: 'Procurement & Deploy' },
  { href: '/services/software', icon: <Code weight="duotone" size={24} />, label: 'Software Dev', sub: 'Custom Applications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const { toggleTheme, getTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    let rafId = null
    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
        rafId = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const update = () =>
      setIsDarkTheme(getTheme() === 'dark')
    update()
    const obs = new MutationObserver(update)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [getTheme])

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  const handleToggleTheme = () => toggleTheme()

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container">
          <div className="nav-inner">
            {/* Logo */}
            <Link to="/" className="nav-logo" aria-label="Intellinex Technologies Home">
              <div className="nav-logo-icon">
                <img src="/assets/logo.webp" alt="Intellinex Logo" style={{ height: '40px', width: 'auto', borderRadius: '6px' }} />
              </div>
              <div className="nav-logo-text">
                <span className="nav-logo-name">Intellinex</span>
                <span className="nav-logo-tagline">Technologies</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="nav-menu">
              <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
              <Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About</Link>

              <div className="nav-dropdown-wrapper">
                <span className={`nav-link has-dropdown${location.pathname.startsWith('/services') ? ' active' : ''}`}>
                  Services
                </span>
                <div className="nav-dropdown">
                  {services.map((s) => (
                    <Link key={s.href} to={s.href} className="nav-dropdown-item">
                      <div className="nav-dropdown-item-icon">
                        {s.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.85rem' }}>{s.label}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/about#industries" className={`nav-link${isActive('/about') ? '' : ''}`}>Industries</Link>
              <Link to="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`}>Contact</Link>
            </div>

            {/* Actions */}
            <div className="nav-actions">
              <button
                className="theme-toggle"
                id="theme-toggle"
                aria-label="Toggle theme"
                onClick={handleToggleTheme}
              >
                {isDarkTheme ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
              <Link to="/contact" className="btn btn-primary btn-sm nav-cta">
                Get Free Consultation
              </Link>
              <button
                className={`hamburger${menuOpen ? ' active' : ''}`}
                id="hamburger"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">
        <Link to="/" className="mobile-menu-link">Home</Link>
        <Link to="/about" className="mobile-menu-link">About Us</Link>

        <div
          className="mobile-menu-link has-sub"
          onClick={() => setMobileServicesOpen((o) => !o)}
          style={{ cursor: 'pointer' }}
        >
          Services
          <span className="sub-arrow" style={{ transition: 'transform 0.3s', transform: mobileServicesOpen ? 'rotate(180deg)' : '', marginLeft: 'auto' }}>▾</span>
        </div>
        <div className={`mobile-menu-sub${mobileServicesOpen ? ' open' : ''}`}>
          <Link to="/services/managed-it" className="mobile-menu-sub-link">Managed IT Services</Link>
          <Link to="/services/cloud" className="mobile-menu-sub-link">Cloud Solutions</Link>
          <Link to="/services/ai" className="mobile-menu-sub-link">AI Solutions</Link>
          <Link to="/services/cybersecurity" className="mobile-menu-sub-link">Cybersecurity</Link>
          <Link to="/services/hardware" className="mobile-menu-sub-link">Hardware Solutions</Link>
          <Link to="/services/software" className="mobile-menu-sub-link">Software Development</Link>
        </div>

        <Link to="/about#industries" className="mobile-menu-link">Industries</Link>
        <Link to="/contact" className="mobile-menu-link">Contact</Link>
        <div style={{ padding: '16px 0' }}>
          <Link to="/contact" className="btn btn-primary w-full">Get Free Consultation</Link>
        </div>
      </div>
    </>
  )
}
