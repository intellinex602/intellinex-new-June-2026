import { useEffect } from 'react'
import ServicePage from '../../components/ServicePage'
import { Lightning, Timer, Desktop, Buildings, Broadcast, Headset, Globe, ArrowsClockwise, FloppyDisk, ChartBar, Robot, LockKey, TrendUp, Users, ClipboardText, Money } from '@phosphor-icons/react'

export default function ManagedIT() {
  useEffect(() => { document.title = 'Managed IT Services | Intellinex Technologies' }, [])

  return (
    <ServicePage
      breadcrumb="Managed IT"
      heroImage="/assets/isometric-noc-final.png"
      meta={{
        tag: 'Managed IT Services',
        heroTitle: <>Enterprise IT <span style={{ color: 'var(--cyan)' }}>Managed &amp; Monitored</span> 24/7</>,
        heroDesc: 'Free your team to focus on business growth while we handle every aspect of your IT infrastructure — proactively, reliably, and securely with a 99.9% uptime SLA.',
      }}
      trustItems={[
        { icon: <Lightning weight="duotone" />, value: '99.9%', label: 'Uptime SLA' },
        { icon: <Timer weight="duotone" />, value: '<15 min', label: 'Avg Response Time' },
        { icon: <Desktop weight="duotone" />, value: '50,000+', label: 'Endpoints Managed' },
        { icon: <Buildings weight="duotone" />, value: '100+', label: 'Enterprise Clients' },
      ]}
      cards={[
        { icon: <Broadcast weight="duotone" />, title: '24/7 Proactive Monitoring', desc: 'Real-time monitoring of servers, networks, applications, and endpoints using AI-powered tools that detect and resolve issues before they impact users.', bullets: ['Infrastructure health dashboards', 'Automated alerting & escalation', 'Predictive failure detection'] },
        { icon: <Headset weight="duotone" />, title: 'Helpdesk Support', desc: 'Unlimited helpdesk tickets with guaranteed SLA response times. Tier 1, 2, and 3 support engineers available 24/7 via phone, email, and chat.', bullets: ['Multi-channel support', 'Remote & on-site support', 'Dedicated account engineer'] },
        { icon: <Globe weight="duotone" />, title: 'Network Management', desc: 'Complete management of your LAN, WAN, SD-WAN, firewalls, and VPNs. Includes traffic optimization, bandwidth management, and security hardening.', bullets: ['SD-WAN & MPLS management', 'Firewall & VPN administration', 'Traffic analysis & optimization'] },
        { icon: <ArrowsClockwise weight="duotone" />, title: 'Patch Management', desc: 'Automated patch management and vulnerability remediation across all OS and third-party applications to keep your systems secure and compliant.', bullets: ['Automated OS & app patching', 'Vulnerability scanning', 'Compliance reporting'] },
        { icon: <FloppyDisk weight="duotone" />, title: 'Backup & Disaster Recovery', desc: 'Enterprise-grade backup solutions with automated testing and disaster recovery planning. Guaranteed RTO/RPO to protect your business continuity.', bullets: ['Automated daily backups', 'Geo-redundant storage', 'DR planning & testing'] },
        { icon: <ChartBar weight="duotone" />, title: 'IT Asset Management', desc: 'Complete lifecycle management of your hardware and software assets — from procurement to disposition. Optimize utilization and reduce costs.', bullets: ['Real-time asset inventory', 'License compliance management', 'End-of-life planning'] },
      ]}
      featuresTitle="Why Choose Our Managed Services"
      features={[
        { icon: <Robot weight="duotone" />, title: 'AI-Powered Operations', desc: 'Our NOC uses machine learning to predict failures 48 hours before they happen, allowing proactive resolution with zero impact to your users.' },
        { icon: <LockKey weight="duotone" />, title: 'Security-First Approach', desc: 'Every managed service includes built-in security hardening, vulnerability scanning, and continuous compliance monitoring at no extra cost.' },
        { icon: <TrendUp weight="duotone" />, title: 'Scalable Architecture', desc: 'Our services scale with your business — from 10 users to 10,000 — with no additional setup or contract changes required.' },
        { icon: <Users weight="duotone" />, title: 'Named Account Manager', desc: 'You\'ll have a dedicated technical account manager who knows your environment inside-out and acts as your single point of contact.' },
        { icon: <ClipboardText weight="duotone" />, title: 'Monthly Reporting', desc: 'Detailed monthly reports covering uptime, incidents, patch status, security posture, and actionable recommendations.' },
        { icon: <Money weight="duotone" />, title: 'Predictable Pricing', desc: 'Fixed monthly pricing with no surprise bills. We absorb operational costs so you can budget accurately and confidently.' },
      ]}
      stats={[
        { val: '99.9%', label: 'Uptime SLA Guaranteed' },
        { val: '<15min', label: 'Avg Response Time' },
        { val: '50K+', label: 'Endpoints Managed' },
        { val: '24/7', label: 'Support Coverage' },
      ]}
      faqs={[
        { q: 'What\'s included in Managed IT Services?', a: 'Our managed IT services include 24/7 monitoring, helpdesk support, network management, patch management, backup & recovery, asset management, and monthly reporting. Everything you need to run a reliable IT operation.' },
        { q: 'What is your SLA guarantee?', a: 'We guarantee 99.9% uptime with response times of under 15 minutes for P1 critical incidents, 1 hour for P2 high-priority, and 4 hours for standard requests. SLAs are backed by service credits.' },
        { q: 'Do you support remote and hybrid workforces?', a: 'Yes. Our managed services are built for modern distributed teams — cloud-native tools, zero-trust remote access, endpoint management, and multi-location support included.' },
        { q: 'How do you handle transitions from our current IT team?', a: 'We follow a structured 30-day onboarding process with full documentation, knowledge transfer, and shadowing. We work alongside your existing team to ensure a seamless transition with zero disruption.' },
      ]}
      ctaTag="Get Started Today"
      ctaTitle="Let Us Manage Your IT So You Can Focus on Growth"
    />
  )
}
