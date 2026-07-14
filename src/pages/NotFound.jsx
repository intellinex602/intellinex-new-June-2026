import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | Intellinex Technologies'
  }, [])

  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
        background: 'var(--bg)',
      }}
    >
      <div>
        <div
          style={{
            fontSize: '7rem',
            fontWeight: 900,
            fontFamily: 'var(--font-display)',
            color: 'var(--cyan)',
            lineHeight: 1,
            marginBottom: '16px',
            opacity: 0.15,
          }}
        >
          404
        </div>
        <div className="section-tag" style={{ marginBottom: '16px' }}>
          Page Not Found
        </div>
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}
        >
          Oops — this page{' '}
          <span style={{ color: 'var(--cyan)' }}>doesn't exist</span>
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            maxWidth: '480px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
        </p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary btn-xl">
            Go Home →
          </Link>
          <Link to="/contact" className="btn btn-outline btn-xl">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
