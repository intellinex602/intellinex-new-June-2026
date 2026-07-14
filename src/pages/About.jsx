import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounterAnimation } from '../hooks/useCounterAnimation'

const values = [
  { icon: 'target', title: 'Client-First Always', desc: 'Every decision, architecture choice, and support interaction is made with one question: does this serve our client\'s best interest?' },
  { icon: 'flask', title: 'Technical Excellence', desc: 'We hire and develop the best engineers in the industry. Mediocrity has no place in our team — we pursue mastery in everything we do.' },
  { icon: 'handshake', title: 'Radical Transparency', desc: 'We tell clients what they need to hear, not what they want to hear. Honest communication builds trust that lasts decades.' },
  { icon: 'rocket', title: 'Relentless Innovation', desc: 'Technology moves fast. We move faster. Our R&D team continuously evaluates emerging technologies to give clients a competitive edge.' },
  { icon: 'shield', title: 'Security by Default', desc: 'Security isn\'t a feature we add at the end — it\'s baked into every layer of every solution we design and deliver.' },
  { icon: 'sprout', title: 'Long-Term Partnership', desc: 'We measure success in years and decades, not quarters. Our clients\' long-term growth is our long-term success.' },
]

const valueIconPaths = {
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5.5 9a1.5 1.5 0 001.3 2.2h12.4a1.5 1.5 0 001.3-2.2L14 9V3" /><path d="M7.5 15h9" /></>,
  handshake: <><path d="M8 12l3 3 5-5" /><path d="M3 11l4-4 4 2 3-3 6 6-3 3-3-1-4 4-4-2-3-3z" /></>,
  rocket: <><path d="M12 2s5 2 5 9-5 11-5 11-5-4-5-11 5-9 5-9z" /><circle cx="12" cy="10" r="2" /><path d="M8 17l-3 4M16 17l3 4" /></>,
  shield: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
  sprout: <><path d="M12 21V10" /><path d="M12 10c0-4 3-7 7-7 0 4-3 7-7 7z" /><path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" /></>,
}

const teamMembers = [
  { initial: 'H', name: 'Harsh', bio: 'Passionate about building scalable technology solutions. Brings hands-on expertise in IT infrastructure, systems design, and enterprise solution delivery.' },
  { initial: 'A', name: 'Aanidhya Patidar', bio: 'Experienced in software development and modern cloud-native architectures. Driven by a deep interest in AI and automation to solve real-world business problems.' },
  { initial: 'H', name: 'Harshal Jain', bio: 'Experienced Full Stack Developer with a strong focus on cybersecurity. Builds secure, scalable web applications and brings practical knowledge in threat analysis and secure system design.' },
  { initial: 'V', name: 'Vishal', bio: 'Expert in digital marketing and brand strategy. Drives user engagement, organic growth, and data-driven marketing campaigns to maximize our online presence and reach.' },
]

const milestones = [
  { year: '2026', title: 'Intellinex Technologies Founded', desc: 'Founded in New Delhi with a vision to democratize enterprise-grade technology for Indian businesses.' },
  { year: 'Q2 2026', title: 'Enterprise Readiness', desc: 'Established our secure infrastructure and finalized partnerships to deliver robust managed IT services.' },
  { year: 'Q3 2026', title: 'AI Practice Launch', desc: 'Launching our dedicated AI & ML practice to bring predictive analytics and automation to our clients.' },
  { year: 'Q4 2026', title: 'Expanding Operations', desc: 'Scaling our engineering and support teams to serve a growing base of enterprise customers.' },
]

const industries = [
  { name: 'Healthcare', emoji: '⚕️', desc: 'HIPAA-compliant IT solutions, EHR integrations, telehealth infrastructure, and healthcare AI.' },
  { name: 'Finance & BFSI', emoji: '🏦', desc: 'RBI/SEBI compliant platforms, fraud detection, core banking modernization, and fintech integrations.' },
  { name: 'Manufacturing', emoji: '🏭', desc: 'Smart factory IoT, MES integration, predictive maintenance, and Industry 4.0 transformation.' },
  { name: 'Retail & E-commerce', emoji: '🛍️', desc: 'Omnichannel commerce platforms, supply chain AI, customer analytics, and POS modernization.' },
  { name: 'Logistics', emoji: '🚚', desc: 'Fleet management systems, route optimization AI, warehouse automation, and last-mile tech.' },
  { name: 'Education', emoji: '🎓', desc: 'LMS platforms, campus network infrastructure, ed-tech integrations, and digital transformation.' },
]

export default function About() {
  useScrollReveal()
  useCounterAnimation()

  useEffect(() => {
    document.title = 'About Us | Intellinex Technologies'
  }, [])

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>About Us</span>
            </div>
            <div className="section-tag" style={{ marginBottom: '16px' }}>Our Story</div>
            <h1 className="page-hero-title">Powering the <span style={{ color: 'var(--cyan)' }}>Digital Future</span> of Enterprise</h1>
            <p className="page-hero-desc">
              Founded in 2026 with a mission to democratize enterprise-grade technology — Intellinex Technologies is the trusted IT partner for modern organizations across India and beyond.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary">Work With Us →</Link>
              <a href="#story" className="btn btn-outline">Our Story ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="section" id="story" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="why-grid">
            <div className="reveal-left">
              <div className="section-tag">Our Mission</div>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>Technology That <span className="text-cyan">Moves Business Forward</span></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '24px' }}>
                We started Intellinex Technologies because we believed enterprises deserved better — better technology partnerships, better transparency, better outcomes. Not just vendors, but strategic allies who understand that every system we manage, every line of code we write, and every threat we neutralize directly impacts real businesses and real people.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '32px' }}>
                Today, we're a dedicated team of engineers, architects, and specialists united by one goal: to help organizations harness the full power of technology to achieve their strategic objectives — securely, efficiently, and at scale.
              </p>
            </div>

            <div className="reveal-right">
              {/* Timeline */}
              <div className="section-tag">Our 2026 Vision</div>
              <h3 style={{ marginBottom: '32px', color: 'var(--text-primary)' }}>Building the Future, One Milestone at a Time</h3>
              <div className="timeline">
                {milestones.map((m) => (
                  <div key={m.year} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-year">{m.year}</div>
                    <div className="timeline-title">{m.title}</div>
                    <p className="timeline-desc">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">What Drives Us</div>
            <h2 className="section-title">Our Core <span className="text-cyan">Values</span></h2>
            <p className="section-desc">These aren't just words on a wall — they're the principles that guide every decision, every hire, and every client interaction at Intellinex Technologies.</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className={`value-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="value-icon" style={{ background: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--cyan)' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {valueIconPaths[v.icon]}
                  </svg>
                </div>
                <div className="value-title">{v.title}</div>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" id="team">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">The People</div>
            <h2 className="section-title">Meet the <span className="text-cyan">Team</span></h2>
            <p className="section-desc">A passionate team of engineers and technologists united by a shared mission to deliver excellent enterprise technology.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((m, i) => (
              <div key={m.name} className={`team-card reveal reveal-delay-${i + 1}`}>
                <div className="team-avatar">{m.initial}</div>
                <div className="team-name">{m.name}</div>
                <p className="team-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }} id="industries">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Sectors We Serve</div>
            <h2 className="section-title">Industries We <span className="text-cyan">Transform</span></h2>
            <p className="section-desc">Deep domain expertise across critical industries with technology solutions tailored to your sector's unique challenges.</p>
          </div>
          <div className="grid grid-3">
            {industries.map((ind, i) => (
              <div key={ind.name} className={`card card-glass reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="card-icon" style={{ fontSize: '2rem' }}>
                  <span style={{ filter: 'grayscale(100%) contrast(120%)' }}>{ind.emoji}</span>
                </div>
                <div className="card-title">{ind.name}</div>
                <p className="card-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <div className="section-tag" style={{ margin: '0 auto 24px' }}>Join Our Clients</div>
            <h2 className="cta-title">Ready to Transform Your Enterprise?</h2>
            <p className="cta-desc">Let's talk about how Intellinex Technologies can become your strategic technology partner.</p>
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
