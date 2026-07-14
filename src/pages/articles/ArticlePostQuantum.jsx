import ArticlePage from './ArticlePage'

const article = {
  id: 2,
  bgClass: 'bg-2',
  img: '/assets/cybersecurity.webp',
  category: 'Cybersecurity',
  date: 'July 2, 2026',
  readTime: '6 min read',
  title: 'Post-Quantum Cryptography: Why Indian Enterprises Must Start Migrating Now',
  excerpt: 'With NIST\'s post-quantum standards now finalized, the window to migrate is closing. Discover the practical roadmap for transitioning your PKI, VPNs, and data-at-rest encryption before quantum threats materialize.',
  author: 'Harshal',
  authorRole: 'Cybersecurity Architect, Intellinex',
  authorBio: 'Harshal is a cybersecurity architect at Intellinex Technologies with deep expertise in cryptography, zero-trust architecture, and compliance frameworks. He has led security transformation programs for enterprises across BFSI, healthcare, and critical infrastructure sectors.',
  related: [
    { title: 'Cybersecurity Services', to: '/services/cybersecurity', color: 'dot-purple' },
    { title: 'Managed IT Services', to: '/services/managed-it', color: 'dot-blue' },
    { title: 'Cloud Solutions', to: '/services/cloud', color: 'dot-green' },
  ],
  sections: [
    {
      heading: 'The Quantum Threat Is Not Science Fiction Anymore',
      paragraphs: [
        'For most of the last decade, quantum computing\'s threat to encryption was treated as a distant, theoretical risk. That comfort is gone. In 2024 and 2025, quantum processors crossed key computational milestones, and in August 2024 NIST formally published its first set of post-quantum cryptography (PQC) standards: ML-KEM (CRYSTALS-Kyber), ML-DSA (CRYSTALS-Dilithium), and SLH-DSA (SPHINCS+).',
        'The standards\' finalization is a forcing function. Enterprises can no longer defer the conversation. The migration window is open — and it won\'t stay open indefinitely.',
      ],
    },
    {
      heading: 'Why "Harvest Now, Decrypt Later" Is Already Happening',
      paragraphs: [
        'The most urgent threat isn\'t a quantum computer decrypting your traffic today — it\'s adversaries harvesting your encrypted data right now, storing it, and planning to decrypt it once sufficiently powerful quantum hardware exists. This "harvest now, decrypt later" (HNDL) attack is already a documented nation-state strategy.',
        'For Indian enterprises operating in BFSI, defence supply chains, pharmaceuticals, and critical infrastructure, this is particularly acute. Sensitive intellectual property, customer financial records, and proprietary formulations encrypted today may have a shelf life of 10–15 years of secrecy required. That window overlaps squarely with projected quantum computing maturity.',
      ],
      callout: 'Any data that needs to remain confidential beyond 5–7 years should be treated as already at risk from HNDL attacks. Start your PQC migration with long-lived sensitive data first.',
    },
    {
      heading: 'The Migration Roadmap: Where to Start',
      subheading: 'Step 1 — Cryptographic Inventory',
      paragraphs: [
        'Most enterprises have no complete picture of where cryptography is used across their stack. Start with a cryptographic bill of materials (CBOM): catalog every certificate, TLS connection, VPN configuration, code-signing key, database encryption key, and authentication token across your infrastructure.',
        'Modern scanning tools can automate much of this discovery, but expect manual effort for legacy on-premise systems where documentation is sparse.',
      ],
    },
    {
      subheading: 'Step 2 — Prioritise by Risk and Longevity',
      paragraphs: [
        'Not all cryptographic assets need migrating simultaneously. Prioritize: (1) long-lived data at rest with high sensitivity, (2) root certificate authorities and PKI infrastructure, (3) VPN and secure tunneling configurations, (4) code-signing pipelines for software you distribute externally.',
        'Short-lived TLS sessions for web traffic, while important, are lower urgency since the data is transient and harvesting attacks are more complex in practice.',
      ],
      bullets: [
        'Root CAs and PKI chains — migrate first, they underpin everything else',
        'Database encryption keys for regulated data (Aadhaar-linked, financial records)',
        'IPSec/IKEv2 VPN configurations between sites and cloud providers',
        'API signing keys and service-to-service mutual TLS certificates',
        'HSM (Hardware Security Module) firmware — check vendor PQC roadmaps now',
      ],
    },
    {
      subheading: 'Step 3 — Adopt Hybrid Cryptography as a Bridge',
      paragraphs: [
        'The pragmatic near-term approach is hybrid cryptography — combining classical algorithms (RSA, ECDH) with new PQC algorithms in parallel. Both must be broken for the communication to be compromised. This provides protection against quantum threats while maintaining backward compatibility with legacy systems during the transition period.',
        'TLS 1.3 extensions already support hybrid key exchange modes. Major cloud providers — AWS, Azure, and GCP — have begun rolling out PQC support in their KMS and certificate services.',
      ],
    },
    {
      heading: 'India-Specific Compliance Considerations',
      paragraphs: [
        'CERT-In and RBI have not yet mandated specific PQC adoption timelines, but the Digital Personal Data Protection Act\'s emphasis on "appropriate technical safeguards" creates implicit pressure. As NIST standards get adopted internationally, Indian regulators are expected to reference them in upcoming guidelines.',
        'Enterprises that begin migration now will be positioned well ahead of any regulatory deadline — and will have the operational experience to help peers navigate the transition. Waiting for a mandate is a losing strategy when the migration timeline for complex PKI infrastructure can span 18–36 months.',
      ],
      callout: 'Intellinex\'s cybersecurity practice is now offering PQC Readiness Assessments — a structured 4-week engagement to build your CBOM, risk-rank your cryptographic assets, and deliver a phased migration roadmap. Contact us to learn more.',
    },
  ],
}

export default function ArticlePostQuantum() {
  return <ArticlePage article={article} />
}
