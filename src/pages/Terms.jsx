import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Terms() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Terms of Service | Intellinex Technologies'
  }, [])

  return (
    <>
      <section className="page-hero" style={{ padding: '120px 0 60px' }}>
        <div className="container">
          <div className="page-hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Terms of Service</span>
            </div>
            <div className="section-tag" style={{ marginBottom: '16px' }}>Legal</div>
            <h1 className="page-hero-title" style={{ fontSize: '2.5rem' }}>Terms of <span style={{ color: 'var(--cyan)' }}>Service</span></h1>
            <p className="page-hero-desc" style={{ fontSize: '1rem' }}>Last updated: July 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)', paddingTop: '20px' }}>
        <div className="container">
          <div className="legal-content reveal" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            
            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
            <p>By accessing and using the website and services of Intellinex Technologies ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>2. Services Provided</h2>
            <p>Intellinex Technologies provides enterprise IT services, including but not limited to Managed IT, Cloud Solutions, AI Solutions, Cybersecurity, Hardware Procurement, and Custom Software Development. Detailed scopes of work, SLAs, and deliverables are defined in separate Master Service Agreements (MSAs) or Statements of Work (SOWs) signed with our clients.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>3. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Intellinex Technologies or its content suppliers and is protected by intellectual property laws. For custom software development, IP ownership is transferred to the client upon full payment, as detailed in the applicable SOW.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>4. User Conduct</h2>
            <p>You agree not to use our website or services to:</p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li>Violate any local, state, national, or international law.</li>
              <li>Attempt to gain unauthorized access to our systems, networks, or data.</li>
              <li>Interfere with or disrupt the integrity or performance of our services.</li>
              <li>Transmit any malicious code, viruses, or harmful payloads.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
            <p>In no event shall Intellinex Technologies be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the services; (iii) any content obtained from the services; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>6. Changes to Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the updated Terms on this site. Your continued use of the services after such changes constitutes your acceptance of the new Terms.</p>
          </div>
        </div>
      </section>
    </>
  )
}
