import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Buildings, Lightning, ShieldCheck, Trophy, RocketLaunch, EnvelopeSimple, Phone, Clock, Certificate, Cpu, Headset, Desktop, Cloud, Robot, Code } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounterAnimation, useProgressBars } from '../hooks/useCounterAnimation'
import services from '../data/services.json'
import caseStudies from '../data/caseStudies.json'

const industries = [
  { name: 'Healthcare', headline: 'modernize patient care', desc: 'Secure, compliant IT infrastructure to enhance patient experiences, streamline clinical operations, and enable real-time telemetry across your medical facilities.', img: '/assets/healthcare.webp', glow: '#22D3EE', icon: 'health' },
  { name: 'Manufacturing', headline: 'run smarter factories', desc: 'IoT integration and robust networking to automate production, monitor equipment health in real-time, and ensure seamless supply chain management across global plants.', img: '/assets/manufacturing.webp', glow: '#FB923C', icon: 'factory' },
  { name: 'Retail', headline: 'sell on every channel', desc: 'Omnichannel cloud solutions designed for seamless customer journeys, AI-driven inventory optimization, and high-availability point-of-sale systems.', img: '/assets/retail.webp', glow: '#EC4899', icon: 'bag' },
  { name: 'Education', headline: 'power modern campuses', desc: 'Scalable platforms and reliable connectivity for modern digital learning environments, ensuring remote access, data security, and uninterrupted campus-wide networks.', img: '/assets/certified-experts.webp', glow: '#A78BFA', icon: 'cap' },
  { name: 'Finance', headline: 'secure every transaction', desc: 'High-performance, ultra-secure architecture meeting strict regulatory requirements, providing zero-trust security and millisecond latency for high-frequency trading floors.', img: '/assets/finance.webp', glow: '#FBBF24', icon: 'bank' },
  { name: 'Logistics', headline: 'track every mile', desc: 'Data-driven logistics platforms to optimize routing, tracking, and fleet management using real-time edge computing and satellite-linked network nodes.', img: '/assets/logistics.webp', glow: '#4ADE80', icon: 'truck' },
]

const serviceIconPaths = {
  'managed-it': <Desktop weight="duotone" size={36} />,
  'cloud': <Cloud weight="duotone" size={36} />,
  'ai': <Robot weight="duotone" size={36} />,
  'cybersecurity': <ShieldCheck weight="duotone" size={36} />,
  'hardware': <Cpu weight="duotone" size={36} />,
  'software': <Code weight="duotone" size={36} />
}

const industryIconPaths = {
  health: <path d="M9 3h6v4h4v6h-4v4H9v-4H5V7h4V3z" />,
  factory: <><path d="M3 21V10l6 4v-4l6 4V8l6 4v9H3z" /></>,
  bag: <><path d="M6 8h12l1 13H5L6 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></>,
  cap: <><path d="M12 3l10 5-10 5L2 8l10-5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></>,
  bank: <><path d="M4 10h16M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18M12 3l8 5H4l8-5z" /></>,
  truck: <><path d="M2 8h11v8H2z" /><path d="M13 11h4l4 3v2h-8z" /><circle cx="6" cy="18" r="1.6" /><circle cx="18" cy="18" r="1.6" /></>,
}

const testimonials = [
  {
    id: 1, initial: 'R', name: 'Rahul', role: 'Health Systems',
    text: "Intellinex completely transformed our IT operations. The managed services team is incredibly responsive — we went from 6-hour average resolution times to under 15 minutes. Our uptime went from 97% to a solid 99.9%. The ROI has been extraordinary.",
  },
  {
    id: 2, initial: 'S', name: 'Suresh', role: 'Financial Group',
    text: "The AI fraud detection platform Intellinex built us exceeded every expectation. They understood our complex regulatory requirements and delivered a rock-solid solution that's saved us millions. Their team became true partners in our digital transformation.",
  },
  {
    id: 3, initial: 'M', name: 'Manoj', role: 'Manufacturing Industries',
    text: "Moving our entire infrastructure to the cloud seemed daunting, but Intellinex made it seamless. Their cloud architects designed an elegant solution, and their cybersecurity team ensures we're always protected. Best technology investment we've made.",
  },
]

const faqs = [
  {
    q: 'What industries do you serve?',
    a: 'We serve enterprises across Healthcare, Finance, Manufacturing, Retail, Logistics, Education, and more. Our solutions are tailored to each sector\'s unique regulatory and operational requirements.',
  },
  {
    q: 'What is your SLA guarantee?',
    a: 'We guarantee 99.9% uptime across all managed IT services with response times of under 15 minutes for critical P1 incidents and 1 hour for standard requests.',
  },
  {
    q: 'Do you offer cloud-agnostic solutions?',
    a: 'Yes. We design multi-cloud and hybrid cloud architectures across AWS, Azure, and GCP based on your business needs — never locked into a single vendor.',
  },
  {
    q: 'How does your AI integration work?',
    a: 'We use a consultative approach: assess your current workflows, identify automation opportunities, build and train ML models on your data, then deploy and monitor continuously for performance optimization.',
  },
  {
    q: 'What certifications does your team hold?',
    a: 'Our team holds industry certifications including AWS Solutions Architect, Azure Expert, Cisco CCNP, CompTIA Security+, and more — and we continuously invest in upskilling.',
  },
]

const blogPosts = [
  {
    id: 1, bgClass: 'bg-1', img: '/assets/ai-solutions.webp', category: 'AI & ML',
    date: 'July 8, 2026', readTime: '7 min read',
    title: 'Agentic AI in the Enterprise: How Autonomous IT Agents Are Redefining Operations',
    excerpt: 'AI agents are no longer just assistants — they\'re orchestrating entire IT workflows. Learn how enterprises are deploying multi-agent systems to autonomously manage infrastructure, resolve incidents, and optimize cloud spend in real time.',
    author: 'Aanidhya', authorRole: 'AI & Enterprise Solutions Lead', slug: '/articles/agentic-ai',
  },
  {
    id: 2, bgClass: 'bg-2', img: '/assets/cybersecurity.webp', category: 'Cybersecurity',
    date: 'July 2, 2026', readTime: '6 min read',
    title: 'Post-Quantum Cryptography: Why Indian Enterprises Must Start Migrating Now',
    excerpt: 'With NIST\'s post-quantum standards now finalized, the window to migrate is closing. Discover the practical roadmap for transitioning your PKI, VPNs, and data-at-rest encryption before quantum threats materialize.',
    author: 'Harshal', authorRole: 'Cybersecurity Architect', slug: '/articles/post-quantum',
  },
  {
    id: 3, bgClass: 'bg-3', img: '/assets/cloud-solutions.webp', category: 'Cloud',
    date: 'June 18, 2026', readTime: '9 min read',
    title: 'India\'s Cloud Sovereignty Push: Navigating Data Localisation & Compliance in 2026',
    excerpt: 'India\'s Digital Personal Data Protection Act is reshaping how enterprises architect their cloud infrastructure. We break down the compliance requirements, sovereign cloud options, and the hybrid strategies leading CIOs are adopting.',
    author: 'Harsh', authorRole: 'Cloud Infrastructure Architect', slug: '/articles/cloud-sovereignty',
  },
]

export default function Home() {
  useScrollReveal()
  useCounterAnimation()
  useProgressBars()

  useEffect(() => {
    document.title = 'Intellinex Technologies | Cloud, AI & Managed IT Services'
  }, [])

  // Chart bars
  const chartHeights = [60, 80, 45, 90, 70, 85, 55, 75, 95, 65, 88, 72]

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/assets/174086-850404739_medium.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-grid" />
        <div className="hero-orbs">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <Link to="/about" className="hero-announcement">
                Introducing the Intellinex Ecosystem
                <span className="hero-announcement-arrow">›</span>
              </Link>
              <h1 className="hero-title">
                Transforming Businesses Through{' '}
                <span className="highlight">Cloud, AI</span> & Managed IT Services
              </h1>
              <p className="hero-subtitle">
                Empowering enterprises with intelligent technology solutions, secure infrastructure, and 24/7 IT support that drives real business outcomes.
              </p>
              <div className="btn-group">
                <Link to="/contact" className="btn btn-primary btn-xl" id="hero-cta-primary">
                  Get Free Consultation <span>→</span>
                </Link>
                <a href="#services" className="btn btn-outline btn-xl" id="hero-cta-secondary">
                  Explore Services <span>↓</span>
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">Enterprise Ready</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">99.9%</div>
                  <div className="hero-stat-label">Uptime SLA</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">24/7</div>
                  <div className="hero-stat-label">Support Coverage</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hero-visual">
              <div className="hero-dashboard">

                <div className="hero-card">
                  <div className="hero-card-header">
                    <div className="hero-card-dots">
                      <span /><span /><span />
                    </div>
                    <div className="hero-card-title-bar">Intellinex Operations Dashboard</div>
                  </div>

                  <div className="dashboard-metrics">
                    {[
                      { label: 'Systems Monitored', value: '100%', suffix: '', extra: '', bar: '100%' },
                      { label: 'Security Score', value: 'A+', suffix: '', bar: '100%' },
                      { label: 'SLA Target', value: '99.9%', suffix: '', bar: '99%' },
                      { label: 'Response Time', value: '< 15', suffix: 'min', bar: '90%' },
                    ].map((m, i) => (
                      <div key={i} className="metric-card">
                        <div className="metric-label">{m.label}</div>
                        <div className="metric-value">
                          {m.value}
                          {m.suffix && <span style={{ color: 'var(--cyan)', fontSize: '0.75rem' }}>{m.suffix}</span>}
                          {m.extra && <span>{m.extra}</span>}
                        </div>
                        <div className="metric-bar">
                          <div className="metric-bar-fill" style={{ width: m.bar }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '12px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Infrastructure Performance
                  </div>
                  <div className="dashboard-chart-area">
                    {chartHeights.map((h, i) => (
                      <div key={i} className="chart-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
                <div className="hero-float-container">
                  <div className="hero-float-card">
                    <div className="hero-float-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.82rem' }}>Threat Neutralized</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>Just now · AI Protected</div>
                    </div>
                  </div>
                  <div className="hero-float-card">
                    <div className="hero-float-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.4 1.5A4 4 0 007 19h10.5z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.82rem' }}>Cloud Migration Complete</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>99.9% Uptime Maintained</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-items">
            {[
              { icon: <Buildings weight="duotone" color="var(--cyan)" />, val: 'Enterprise-Ready', label: 'Scalable Infrastructure' },
              { icon: <Lightning weight="duotone" color="var(--cyan)" />, val: '99.9%', label: 'Target Uptime' },
              { icon: <ShieldCheck weight="duotone" color="var(--cyan)" />, val: '24/7', label: 'Security Monitoring' },
              { icon: <Trophy weight="duotone" color="var(--cyan)" />, val: 'Certified', label: 'Expert Engineers' },
              { icon: <RocketLaunch weight="duotone" color="var(--cyan)" />, val: 'Modern Stack', label: 'Cloud & AI Native' },
            ].map((item, i) => (
              <Fragment key={item.label}>
                {i > 0 && <div className="trust-divider" />}
                <div className={`trust-item reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                  <div className="trust-item-icon">{item.icon}</div>
                  <div>
                    <div className="trust-item-value">{item.val}</div>
                    <div className="trust-item-label">{item.label}</div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Enterprise-Grade <span className="text-cyan">Technology Services</span></h2>
            <p className="section-desc">From managed IT to cutting-edge AI — we deliver the complete technology stack your enterprise needs to thrive in today's digital landscape.</p>
          </div>

          <div className="grid grid-3">
            {services.map((svc, i) => (
              <div key={svc.slug} className={`card card-glass card-tilt reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="card-icon" style={{ color: 'var(--cyan)' }}>
                  {serviceIconPaths[svc.slug]}
                </div>
                <div className="card-title">{svc.label}</div>
                <p className="card-desc">{svc.shortDesc}</p>
                <Link to={svc.href} className="card-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="section why-section" id="why-us">
        <div className="container">
          <div className="why-grid">
            <div className="why-image-area reveal-left">
              <div className="why-image-card">
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Our Commitments</div>
                  <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '32px' }}>Delivering Results<br />That Matter</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { label: 'Security First Approach', pct: '100%' },
                      { label: 'Target SLA Compliance', pct: '99.9%' },
                      { label: 'Transparent Communication', pct: '100%' },
                      { label: 'Continuous Innovation', pct: '100%' },
                    ].map((p) => (
                      <div key={p.label}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{p.label}</span>
                          <span style={{ fontSize: '0.875rem', color: 'var(--cyan)', fontWeight: 700 }}>{p.pct}</span>
                        </div>
                        <div className="progress"><div className="progress-fill" data-width={p.pct} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="section-tag">Why Choose Intellinex</div>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>The Enterprise IT Partner You Can <span className="text-cyan">Trust</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.8' }}>We combine deep technical expertise with strategic business thinking to deliver technology solutions that create measurable impact across your organization.</p>
              <div className="feature-list">
                {[
                  { icon: <Certificate size={24} weight="duotone" color="var(--text-primary)" />, title: 'Certified Experts', desc: 'Our team holds industry certifications across AWS, Azure, Cisco, and CompTIA — bringing proven expertise to every engagement.' },
                  { icon: <ShieldCheck size={24} weight="duotone" color="var(--text-primary)" />, title: 'Enterprise Security', desc: 'Zero-trust architecture, SOC 2 Type II compliance, ISO 27001 certified operations. Your data and infrastructure are always protected.' },
                  { icon: <Cpu size={24} weight="duotone" color="var(--text-primary)" />, title: 'AI-Driven Automation', desc: 'We leverage AI and ML to automate repetitive IT tasks, predict failures before they occur, and continuously optimize your infrastructure.' },
                  { icon: <Headset size={24} weight="duotone" color="var(--text-primary)" />, title: 'Dedicated Support Team', desc: 'A named account manager, dedicated support engineers, and escalation paths that ensure issues are resolved in minutes, not days.' },
                ].map((f) => (
                  <div key={f.title} className="feature-item">
                    <div className="feature-icon">
                      {f.icon}
                    </div>
                    <div>
                      <div className="feature-title">{f.title}</div>
                      <p className="feature-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="section industries-section" id="industries">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Sectors We Serve</div>
            <h2 className="section-title">Industries We <span className="text-cyan">Transform</span></h2>
            <p className="section-desc">Deep domain expertise across critical industries, delivering technology solutions tailored to your sector's unique challenges and regulations.</p>
          </div>
          <div className="industry-grid">
            {industries.map((ind, i) => (
              <div key={ind.name} className={`industry-card reveal reveal-delay-${i + 1}`} style={{ '--glow': ind.glow }}>
                <div className="industry-card-top">
                  <span className="industry-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {industryIconPaths[ind.icon]}
                    </svg>
                    {ind.name}
                  </span>
                  <div className="industry-name">{ind.headline}</div>
                  <div className="industry-desc">{ind.desc}</div>
                  <a href="/about#industries" className="industry-card-cta">
                    Know more
                    <svg className="industry-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
                <div className="industry-card-visual" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES & TESTIMONIALS SECTIONS REMOVED */}

      {/* ============ KNOWLEDGE CENTER ============ */}
      <section className="section blog-section" id="knowledge">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Knowledge Center</div>
            <h2 className="section-title">Latest Technology <span className="text-cyan">Insights</span></h2>
            <p className="section-desc">Stay ahead of the curve with expert analysis, best practices, and technology trends from our team of enterprise IT specialists.</p>
          </div>
          <div className="grid grid-3">
            {blogPosts.map((p, i) => (
              <div key={p.id} className={`blog-card reveal reveal-delay-${i + 1}`}>
                <div className={`blog-image ${p.bgClass}`}>
                  <img src={p.img} alt={p.category} loading="lazy" decoding="async" />
                  <div className="blog-category">{p.category}</div>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span>{p.date}</span>
                    <span className="blog-meta-dot" />
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="blog-title">{p.title}</h3>
                  <p className="blog-excerpt">{p.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', marginBottom: '4px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--cyan), var(--gray-500))', color: 'var(--on-accent)', fontWeight: 800, fontSize: '0.72rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {p.author.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{p.author}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{p.authorRole}</div>
                    </div>
                  </div>
                  <Link to={p.slug} className="card-link mt-4" style={{ display: 'inline-flex' }}>Read Article →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
            <Link to="/#knowledge" className="btn btn-outline">View All Articles →</Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }} id="faq">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">Frequently Asked <span className="text-cyan">Questions</span></h2>
            <p className="section-desc">Everything you need to know about working with Intellinex Technologies.</p>
          </div>
          <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((f, i) => <FAQItem key={i} item={f} />)}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <div className="section-tag" style={{ margin: '0 auto 24px' }}>Ready to Transform?</div>
            <h2 className="cta-title">Start Your Digital Transformation Journey Today</h2>
            <p className="cta-desc">Partner with Intellinex Technologies to power your IT infrastructure, protect your data, and accelerate your growth.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-xl" id="cta-main">Get Free Consultation →</Link>
              <a href="tel:+91-7065707898" className="btn btn-outline btn-xl">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">Let's Build Something <span className="text-cyan">Great Together</span></h2>
            <p className="section-desc">Ready to discuss your technology needs? Our enterprise team responds within 2 business hours.</p>
          </div>
          <div className="contact-grid">
            <div className="reveal-left">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Contact Information</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.9rem' }}>Reach out through any channel below or use our contact form. Our enterprise team is ready to help.</p>
              {[
                { icon: <EnvelopeSimple weight="duotone" color="var(--cyan)" />, label: 'Email', value: 'sales.services@intellinex.in' },
                { icon: <Phone weight="duotone" color="var(--cyan)" />, label: 'Phone', value: '+91-7065707898' },
                { icon: <Buildings weight="duotone" color="var(--cyan)" />, label: 'Headquarters', value: '123 Tech Plaza, New Delhi, Dwarka, 110059' },
                { icon: <Clock weight="duotone" color="var(--cyan)" />, label: 'Support Hours', value: '24/7 · 365 Days a Year' },
              ].map((c) => (
                <div key={c.label} className="contact-info-item">
                  <div className="contact-info-icon">{c.icon}</div>
                  <div>
                    <div className="contact-info-label">{c.label}</div>
                    <div className="contact-info-value">{c.value}</div>
                  </div>
                </div>
              ))}
              <a href="https://wa.me/917065707898" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" id="whatsapp-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" /></svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="reveal-right">
              <ContactForm />
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

function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

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
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <div className="form-card">
      <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Send Us a Message</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '0.875rem' }}>We'll get back to you within 2 business hours.</p>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" className="form-input" placeholder="Jai" required value={form.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" className="form-input" placeholder="Sharma" required value={form.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Office Email *</label>
            <input type="email" id="email" name="email" className="form-input" placeholder="jai@company.com" required value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 000 000-0000" value={form.phone} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="company">Company Name *</label>
          <input type="text" id="company" name="company" className="form-input" placeholder="Your Company Name." required value={form.company} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="service">Service Interested In</label>
          <select id="service" name="service" className="form-select" value={form.service} onChange={handleChange}>
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
          <label className="form-label" htmlFor="message">Message *</label>
          <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your project, current challenges, or questions..." required value={form.message} onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full btn-lg"
          id="contact-submit"
          disabled={status === 'loading'}
          style={{
            justifyContent: 'center',
            background: status === 'success' ? 'linear-gradient(135deg, #10B981, #059669)' : undefined,
          }}
        >
          {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : status === 'validation_error' ? 'Please fill required fields' : status === 'server_error' ? 'Failed to send (Use Vercel Dev)' : 'Send Message →'}
        </button>
      </form>
    </div>
  )
}
