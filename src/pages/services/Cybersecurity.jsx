import { useEffect } from 'react'
import ServicePage from '../../components/ServicePage'
import { Shield, Lightning, Lock, ClipboardText, Eye, MagnifyingGlass, Siren, LockKey, Wrench, Medal, Binoculars } from '@phosphor-icons/react'

export default function Cybersecurity() {
  useEffect(() => { document.title = 'Cybersecurity | Intellinex Technologies' }, [])

  return (
    <ServicePage
      breadcrumb="Cybersecurity"
      heroImage="/assets/cybersecurity-new-opt.jpg"
      meta={{
        tag: 'Enterprise Cybersecurity',
        heroTitle: <>Protect Your Business with <span style={{ color: 'var(--cyan)' }}>Zero-Trust Security</span></>,
        heroDesc: 'Comprehensive cybersecurity services designed for enterprise environments — from threat detection and SOC monitoring to penetration testing, compliance, and incident response.',
      }}
      trustItems={[
        { icon: <Shield weight="duotone" />, value: '99.7%', label: 'Threat Prevention Rate' },
        { icon: <Lightning weight="duotone" />, value: '<5 min', label: 'Threat Detection Time' },
        { icon: <Lock weight="duotone" />, value: '24/7', label: 'SOC Monitoring' },
        { icon: <ClipboardText weight="duotone" />, value: 'ISO 27001', label: 'Certified Operations' },
      ]}
      cards={[
        { icon: <Eye weight="duotone" />, title: 'SOC Monitoring', desc: '24/7 Security Operations Center with SIEM integration, real-time threat hunting, and automated response playbooks.', bullets: ['Real-time SIEM monitoring', 'Threat hunting & analysis', 'Automated incident response'] },
        { icon: <MagnifyingGlass weight="duotone" />, title: 'Penetration Testing', desc: 'Simulate real-world attacks on your infrastructure, applications, and social engineering vectors to identify vulnerabilities before attackers do.', bullets: ['Network & infrastructure pen testing', 'Web app & API security testing', 'Social engineering assessment'] },
        { icon: <ClipboardText weight="duotone" />, title: 'Compliance Management', desc: 'Navigate complex regulatory landscapes with our compliance management services covering ISO 27001, SOC 2, GDPR, PCI-DSS, HIPAA, and DPDPA.', bullets: ['Gap assessments & remediation', 'Policy & procedure development', 'Audit preparation & support'] },
        { icon: <Siren weight="duotone" />, title: 'Incident Response', desc: 'Rapid response team available 24/7 for active breaches — containment, eradication, recovery, and comprehensive post-incident analysis.', bullets: ['24/7 incident response retainer', 'Digital forensics', 'Recovery & hardening'] },
        { icon: <LockKey weight="duotone" />, title: 'Zero-Trust Architecture', desc: 'Design and implement zero-trust security models with identity-based access, micro-segmentation, and continuous verification.', bullets: ['Identity & access management', 'Network micro-segmentation', 'Privileged access management'] },
        { icon: <Wrench weight="duotone" />, title: 'Vulnerability Management', desc: 'Continuous vulnerability scanning, risk-based prioritization, and remediation tracking across your entire attack surface.', bullets: ['Continuous asset discovery', 'CVSS-based risk scoring', 'Remediation tracking & SLAs'] },
      ]}
      featuresTitle="Why Our Security Team"
      features={[
        { icon: <Medal weight="duotone" />, title: 'Certified Security Experts', desc: 'Our team holds CISSP, CEH, CISM, OSCP, and CISA certifications. We understand both offensive and defensive security at the deepest level.' },
        { icon: <Lightning weight="duotone" />, title: 'Rapid Threat Response', desc: 'Our average threat detection-to-response time is under 5 minutes. When every second counts during an incident, speed is everything.' },
        { icon: <Binoculars weight="duotone" />, title: 'Threat Intelligence', desc: 'We subscribe to global threat intelligence feeds and actively monitor the dark web for credentials and data belonging to our clients.' },
      ]}
      stats={[
        { val: '99.7%', label: 'Threat Prevention Rate' },
        { val: '0', label: 'Undetected Breaches' },
        { val: '< 5min', label: 'Detection Time' },
        { val: '24/7', label: 'SOC Coverage' },
      ]}
      faqs={[
        { q: 'What compliance frameworks do you support?', a: 'We support ISO 27001, SOC 2 Type I/II, GDPR, PCI-DSS, HIPAA, NIST CSF, and India\'s DPDPA. Our compliance team will assess your requirements and build a roadmap to achieve and maintain certification.' },
        { q: 'How quickly can you respond to a security incident?', a: 'With our 24/7 incident response retainer, our team can be on a call within 30 minutes of alert and begin containment actions immediately. We have pre-approved playbooks for the 20 most common attack scenarios.' },
        { q: 'Do you offer phishing simulation training?', a: 'Yes. Our security awareness program includes simulated phishing campaigns, e-learning modules, and gamified training platforms to build a security-first culture across your organization.' },
        { q: 'What is your approach to zero-trust implementation?', a: 'We follow NIST SP 800-207 zero-trust principles: verify explicitly, use least-privilege access, and assume breach. Implementation is phased — starting with identity, then network segmentation, then workload protection.' },
      ]}
      ctaTag="Protect Your Business"
      ctaTitle="Don't Wait for a Breach — Secure Your Enterprise Today"
    />
  )
}
