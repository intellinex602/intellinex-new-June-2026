import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EnvelopeSimple, Phone, Buildings, Clock } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Contact Us | Intellinex Technologies'
  }, [])

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ padding: '120px 0 60px' }}>
        <div className="container">
          <div className="page-hero-content" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Contact Us</span>
            </div>
            <div className="section-tag" style={{ marginBottom: '16px' }}>Get In Touch</div>
            <h1 className="page-hero-title">Let's Connect and <span style={{ color: 'var(--cyan)' }}>Grow Together</span></h1>
            <p className="page-hero-desc">
              Have questions about our solutions or want a free IT infrastructure assessment? Drop us a line. Our enterprise experts respond within 2 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT BLOCK */}
      <section className="section" style={{ background: 'var(--bg)', paddingTop: '20px' }}>
        <div className="container">
          <div className="contact-grid" style={{ gridTemplateColumns: '1.2fr 1.8fr', gap: '48px' }}>
            {/* Info Column */}
            <div className="reveal-left">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Contact Details</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Reach us via email, phone, or corporate chat. Support tickets can be submitted directly via our client portal.
              </p>

              {[
                { icon: <EnvelopeSimple weight="duotone" color="var(--cyan)" />, label: 'General Inquiries', value: 'sales.services@intellinex.in' },
                { icon: <Phone weight="duotone" color="var(--cyan)" />, label: 'Phone', value: '+91-7065707898' },
                { icon: <Buildings weight="duotone" color="var(--cyan)" />, label: 'Headquarters', value: '123 Tech Plaza, New Delhi, Dwarka, 110059' },
                { icon: <Clock weight="duotone" color="var(--cyan)" />, label: 'Support Hours', value: '24/7 · Monday to Sunday' },
              ].map((c) => (
                <div key={c.label} className="contact-info-item">
                  <div className="contact-info-icon" style={{ fontSize: '1.8rem', marginRight: '16px' }}>{c.icon}</div>
                  <div>
                    <div className="contact-info-label" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{c.label}</div>
                    <div className="contact-info-value" style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1rem', marginTop: '2px' }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <a href="https://wa.me/917065707898" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" /></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form Column */}
            <div className="reveal-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.firstName || !form.lastName || !form.email || !form.message || !form.company) {
      setStatus('validation_error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('server_error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <div className="form-card">
      <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Send Us a Message</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '0.95rem' }}>We'll get back to you within 2 business hours.</p>

      <form id="contact-form-page" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="cp-firstName">First Name *</label>
            <input type="text" id="cp-firstName" name="firstName" className="form-input" placeholder="Jai" required value={form.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="cp-lastName">Last Name *</label>
            <input type="text" id="cp-lastName" name="lastName" className="form-input" placeholder="Sharma" required value={form.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="cp-email">Office Email *</label>
            <input type="email" id="cp-email" name="email" className="form-input" placeholder="jai@company.com" required value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="cp-phone">Phone Number</label>
            <input type="tel" id="cp-phone" name="phone" className="form-input" placeholder="+91 000 000-0000" value={form.phone} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cp-company">Company Name *</label>
          <input type="text" id="cp-company" name="company" className="form-input" placeholder="Your Company Name" required value={form.company} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cp-service">Service Interested In</label>
          <select id="cp-service" name="service" className="form-select" value={form.service} onChange={handleChange}>
            <option value="">Select a service...</option>
            <option>Managed IT Services</option>
            <option>Cloud Solutions</option>
            <option>AI Solutions</option>
            <option>Cybersecurity</option>
            <option>Hardware Solutions</option>
            <option>Software Development</option>
            <option>Multiple Services</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cp-message">Message *</label>
          <textarea id="cp-message" name="message" className="form-textarea" placeholder="Tell us about your project, current challenges, or questions..." required value={form.message} onChange={handleChange} />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full btn-lg"
          id="contact-submit-page"
          disabled={status === 'loading'}
          style={{
            justifyContent: 'center',
            background: status === 'success' ? 'linear-gradient(135deg, #10B981, #059669)' : undefined,
          }}
        >
          {status === 'loading' ? 'Sending...'
            : status === 'success' ? '✓ Message Sent Successfully!'
            : status === 'validation_error' ? '⚠ Please fill all required fields'
            : status === 'server_error' ? '⚠ Failed to send (Use Vercel Dev)'
            : 'Send Message →'}
        </button>
      </form>
    </div>
  )
}
