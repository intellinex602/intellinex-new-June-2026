import { Link } from 'react-router-dom'

const services = [
  { href: '/services/managed-it', label: 'Managed IT Services' },
  { href: '/services/cloud', label: 'Cloud Solutions' },
  { href: '/services/ai', label: 'AI Solutions' },
  { href: '/services/cybersecurity', label: 'Cybersecurity' },
  { href: '/services/hardware', label: 'Hardware Solutions' },
  { href: '/services/software', label: 'Software Development' },
]

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5h18v14H3z" />
      <path d="M3 5l9 8 9-8" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a1 1 0 011-1h10a1 1 0 011 1v18" />
      <path d="M2 22h20" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

const contactItems = [
  { icon: <MailIcon />, text: 'sales.services@intellinex.in' },
  { icon: <PhoneIcon />, text: '+91-7065707898' },
  { icon: <BuildingIcon />, text: '123 Tech Plaza, New Delhi, Dwarka, 110059' },
  { icon: <ClockIcon />, text: '24/7 Support' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img src="/assets/logo.webp" alt="Intellinex Logo" style={{ height: '32px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <span className="footer-logo-name">Intellinex Technologies</span>
            </div>
            <p className="footer-desc">
              Transforming enterprises through intelligent cloud, AI, and managed IT solutions. Your trusted technology partner since 2026.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/intellinex-technologyservice/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">in</a>
              <a href="https://twitter.com/intellinex" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Twitter">𝕏</a>
              <a href="https://facebook.com/intellinex" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook">f</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              {services.map((s) => (
                <Link key={s.href} to={s.href} className="footer-link">{s.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/about#team" className="footer-link">Leadership Team</Link>
              <Link to="/contact" className="footer-link">Careers</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-links">
              {contactItems.map((c) => (
                <div key={c.text} className="footer-link footer-contact-item">
                  <span className="footer-contact-icon">{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">© {year} Intellinex Technologies. All rights reserved.</div>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
            <Link to="/cookie-policy" className="footer-legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
