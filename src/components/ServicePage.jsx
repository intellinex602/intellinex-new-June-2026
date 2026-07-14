import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounterAnimation } from '../hooks/useCounterAnimation'

/**
 * Shared layout for all service pages.
 * Props:
 *  - meta: { title, tag, heroTitle, heroDesc }
 *  - heroImage: string (path to image)
 *  - breadcrumb: string (last breadcrumb segment)
 *  - trustItems: [{ icon, value, label }]
 *  - cards: [{ icon, title, desc, bullets }]
 *  - featuresTitle: string
 *  - features: [{ icon, title, desc }]
 *  - stats: [{ val, label }]
 *  - faqs: [{ q, a }]
 *  - ctaTag: string
 *  - ctaTitle: string
 */
export default function ServicePage({
  meta,
  heroImage,
  breadcrumb,
  trustItems = [],
  cards = [],
  featuresTitle = 'Why Choose Us',
  features = [],
  stats = [],
  faqs = [],
  ctaTag = 'Get Started',
  ctaTitle = 'Ready to Get Started?',
}) {
  useScrollReveal()
  useCounterAnimation()

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div className="page-hero-content">
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span className="breadcrumb-sep">›</span>
                <span>Services</span>
                <span className="breadcrumb-sep">›</span>
                <span>{breadcrumb}</span>
              </div>
              <div className="section-tag" style={{ marginBottom: '16px' }}>{meta.tag}</div>
              <h1 className="page-hero-title">{meta.heroTitle}</h1>
              <p className="page-hero-desc">{meta.heroDesc}</p>
              <div className="btn-group">
                <Link to="/contact" className="btn btn-primary">Get Free Assessment →</Link>
                <a href="#services-detail" className="btn btn-outline">What's Included ↓</a>
              </div>
            </div>
            <div className="page-hero-image">
              <img src={heroImage} alt={breadcrumb} className="page-hero-img" fetchpriority="high" loading="eager" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST METRICS */}
      {trustItems.length > 0 && (
        <section className="trust-bar">
          <div className="container">
            <div className="trust-items">
              {trustItems.map((t, i) => (
                <React.Fragment key={t.label}>
                  {i > 0 && <div className="trust-divider" />}
                  <div className={`trust-item reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                    <div className="trust-item-icon">{t.icon}</div>
                    <div>
                      <div className="trust-item-value">{t.value}</div>
                      <div className="trust-item-label">{t.label}</div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SERVICE CARDS */}
      {cards.length > 0 && (
        <section className="section" id="services-detail" style={{ background: 'var(--bg)' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">What We Offer</div>
              <h2 className="section-title">Complete <span className="text-cyan">Coverage</span></h2>
              <p className="section-desc">Everything you need, managed and delivered by our certified team of experts.</p>
            </div>
            <div className="grid grid-3">
              {cards.map((card, i) => (
                <div key={card.title} className={`card card-glass reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="card-icon" style={{ fontSize: '1.8rem', background: 'rgba(var(--accent-rgb),0.08)' }}>{card.icon}</div>
                  <div className="card-title">{card.title}</div>
                  <p className="card-desc">{card.desc}</p>
                  {card.bullets && (
                    <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {card.bullets.map((b) => (
                        <li key={b} style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--cyan)' }}>✓</span>{b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY US */}
      {features.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">Our Advantage</div>
              <h2 className="section-title">{featuresTitle.split(' ').slice(0, -1).join(' ')} <span className="text-cyan">{featuresTitle.split(' ').slice(-1)}</span></h2>
            </div>
            <div className="grid grid-3">
              {features.map((f, i) => (
                <div key={f.title} className={`card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{f.icon}</div>
                  <div className="card-title">{f.title}</div>
                  <p className="card-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STATS */}
      {stats.length > 0 && (
        <section className="section" style={{ background: 'var(--bg)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: '32px', textAlign: 'center' }}>
              {stats.map((s, i) => (
                <div key={s.label} className={`reveal reveal-delay-${i + 1}`}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, color: 'var(--cyan)', marginBottom: '8px' }}>{s.val}</div>
                  <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="section-tag">FAQ</div>
              <h2 className="section-title">Frequently Asked <span className="text-cyan">Questions</span></h2>
            </div>
            <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqs.map((f, i) => <FAQItem key={i} item={f} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <div className="section-tag" style={{ margin: '0 auto 24px' }}>{ctaTag}</div>
            <h2 className="cta-title">{ctaTitle}</h2>
            <p className="cta-desc">Get a free consultation with our experts and discover how Intellinex Technologies can transform your enterprise.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-xl">Get Free Consultation →</Link>
              <a href="tel:+91-7065707898" className="btn btn-outline btn-xl">📞 Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen((o) => !o)}>
        {item.q}
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">{item.a}</div>
      </div>
    </div>
  )
}
