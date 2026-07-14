import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Privacy() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Privacy Policy | Intellinex Technologies'
  }, [])

  return (
    <>
      <section className="page-hero" style={{ padding: '120px 0 60px' }}>
        <div className="container">
          <div className="page-hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Privacy Policy</span>
            </div>
            <div className="section-tag" style={{ marginBottom: '16px' }}>Legal</div>
            <h1 className="page-hero-title" style={{ fontSize: '2.5rem' }}>Privacy <span style={{ color: 'var(--cyan)' }}>Policy</span></h1>
            <p className="page-hero-desc" style={{ fontSize: '1rem' }}>Last updated: July 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)', paddingTop: '20px' }}>
        <div className="container">
          <div className="legal-content reveal" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            
            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h2>
            <p>Welcome to Intellinex Technologies ("we," "our," or "us"). We are committed to protecting your personal data and respecting your privacy. This privacy policy explains how we collect, use, and protect your personal information when you visit our website (intellinex.tech) or use our IT services.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. Information We Collect</h2>
            <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li><strong>Identity Data:</strong> First name, last name, username or similar identifier, and company name.</li>
              <li><strong>Contact Data:</strong> Billing address, email address, and telephone numbers.</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
            
            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. AI and Data Processing</h2>
            <p>When you use our AI chat functionality or AI services, your inputs may be processed by our AI partners (e.g., Google Gemini) to generate responses. We do not use your proprietary business data to train foundational models without your explicit consent.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>6. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p>
              Intellinex Technologies<br/>
              Email: sales.services@intellinex.in<br/>
              Phone: +91-7065707898<br/>
              Address: 123 Tech Plaza, New Delhi, Dwarka, 110059
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
