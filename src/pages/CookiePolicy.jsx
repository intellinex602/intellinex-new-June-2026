import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CookiePolicy() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Cookie Policy | Intellinex Technologies'
  }, [])

  return (
    <>
      <section className="page-hero" style={{ padding: '120px 0 60px' }}>
        <div className="container">
          <div className="page-hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Cookie Policy</span>
            </div>
            <div className="section-tag" style={{ marginBottom: '16px' }}>Legal</div>
            <h1 className="page-hero-title" style={{ fontSize: '2.5rem' }}>Cookie <span style={{ color: 'var(--cyan)' }}>Policy</span></h1>
            <p className="page-hero-desc" style={{ fontSize: '1rem' }}>Last updated: July 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)', paddingTop: '20px' }}>
        <div className="container">
          <div className="legal-content reveal" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h2>
            <p>This Cookie Policy explains how Intellinex Technologies ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website (intellinex.tech). It explains what these technologies are, why we use them, and your rights to control our use of them.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, improve user experience, and provide information to the owners of the site. Cookies may be "persistent" cookies, which remain on your device until you delete them, or "session" cookies, which are deleted as soon as you close your browser.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. Types of Cookies We Use</h2>
            <p>We use the following categories of cookies on our website:</p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li><strong>Strictly Necessary Cookies:</strong> These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.</li>
              <li><strong>Performance & Analytics Cookies:</strong> These cookies collect information about how visitors use our website, such as which pages are visited most often and whether visitors encounter error messages. This helps us improve the way our website works.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your theme preference — light or dark mode) and provide enhanced, more personalized features.</li>
              <li><strong>Targeting & Advertising Cookies:</strong> These cookies may be used to deliver content more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and to assist with functionality. These may include cookies from analytics providers, content delivery networks, and communication tools (such as our website chat widget). We do not control the setting of these cookies, so we encourage you to check the third-party websites for more information about their cookies and how to manage them.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. Why We Use Cookies</h2>
            <p>We use first-party and third-party cookies for several reasons, including:</p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li>To keep our website secure and functioning correctly.</li>
              <li>To remember your preferences, such as your selected theme (light or dark mode).</li>
              <li>To understand how visitors interact with our website so we can improve content and navigation.</li>
              <li>To measure the effectiveness of our marketing and outreach efforts.</li>
              <li>To enable features such as our live chat widget and contact forms to function properly.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>6. Managing Your Cookie Preferences</h2>
            <p>Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "Options," "Preferences," or "Settings" menu of your browser. You can choose to block or delete cookies, and most browsers allow you to see what cookies are stored and delete them individually. Please note that if you choose to block or delete cookies, some parts of our website may not function as intended, and certain features and personalization may not be available.</p>
            <p>You can find out more about cookies and how to manage them at <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)' }}>allaboutcookies.org</a>.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>7. Changes to This Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our operations, or as otherwise necessary. We encourage you to periodically review this page for the latest information on our cookie practices.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>8. Contact Us</h2>
            <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
            <p>
              Intellinex Technologies<br />
              Email: sales.services@intellinex.in<br />
              Phone: +91-7065707898<br />
              Address: 123 Tech Plaza, New Delhi, Dwarka, 110059
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
