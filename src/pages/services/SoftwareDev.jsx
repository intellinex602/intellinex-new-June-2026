import { useEffect } from 'react'
import ServicePage from '../../components/ServicePage'
import { Laptop, Lightning, Medal, ArrowsClockwise, Buildings, Globe, DeviceMobile, Link, Robot, Lock, ChartBar, CheckCircle } from '@phosphor-icons/react'

export default function SoftwareDev() {
  useEffect(() => { document.title = 'Software Development | Intellinex Technologies' }, [])

  return (
    <ServicePage
      breadcrumb="Software Development"
      heroImage="/assets/software-development-final-opt.jpg"
      meta={{
        tag: 'Custom Software Development',
        heroTitle: <>Bespoke Enterprise Software <span style={{ color: 'var(--cyan)' }}>Built to Scale</span></>,
        heroDesc: 'We design and develop custom enterprise applications, APIs, web platforms, and mobile apps using modern tech stacks. Agile methodology, full transparency, and production-ready delivery.',
      }}
      trustItems={[
        { icon: <Laptop weight="duotone" />, value: 'Multiple', label: 'Apps Delivered' },
        { icon: <Lightning weight="duotone" />, value: '96%', label: 'On-Time Delivery' },
        { icon: <Medal weight="duotone" />, value: '4.9/5', label: 'Client Rating' },
        { icon: <ArrowsClockwise weight="duotone" />, value: 'Agile', label: 'Methodology' },
      ]}
      cards={[
        { icon: <Buildings weight="duotone" />, title: 'Enterprise Applications', desc: 'Custom ERP, CRM, HRMS, and workflow automation systems built for your unique business processes — not the other way around.', bullets: ['Custom ERP & CRM systems', 'Workflow automation platforms', 'Legacy system modernization'] },
        { icon: <Globe weight="duotone" />, title: 'Web Platform Development', desc: 'Scalable web applications using React, Next.js, Vue, and modern backends (FastAPI, Node.js, Django). Built for performance and maintainability.', bullets: ['React / Next.js frontends', 'FastAPI / Node.js backends', 'PostgreSQL / MongoDB databases'] },
        { icon: <DeviceMobile weight="duotone" />, title: 'Mobile App Development', desc: 'Native iOS & Android apps and cross-platform solutions using React Native and Flutter. Full-stack mobile development with backend APIs.', bullets: ['React Native & Flutter', 'Native iOS (Swift) & Android (Kotlin)', 'App Store & Play Store publishing'] },
        { icon: <Link weight="duotone" />, title: 'API Development & Integration', desc: 'Design and build RESTful and GraphQL APIs. Integrate with ERP systems, payment gateways, third-party SaaS, and government APIs.', bullets: ['RESTful & GraphQL APIs', 'Webhook & event-driven design', 'Third-party integrations (SAP, Salesforce, Zoho)'] },
        { icon: <Robot weight="duotone" />, title: 'AI-Powered Applications', desc: 'Build applications with embedded AI capabilities — intelligent search, recommendation engines, document processing, and conversational interfaces using Gemini.', bullets: ['Gemini API integration', 'Intelligent document processing', 'AI-powered recommendation systems'] },
        { icon: <Lock weight="duotone" />, title: 'Security-First Development', desc: 'Every application we build follows OWASP guidelines, includes security testing, and undergoes code review before delivery.', bullets: ['OWASP secure coding practices', 'Static & dynamic security testing', 'Penetration testing before launch'] },
      ]}
      featuresTitle="Our Development Process"
      features={[
        { icon: <ArrowsClockwise weight="duotone" />, title: 'Agile Sprints', desc: 'Two-week sprints with daily standups, sprint reviews, and retrospectives. You\'re always in the loop with full visibility into progress.' },
        { icon: <ChartBar weight="duotone" />, title: 'Full Transparency', desc: 'Real-time project dashboards, shared Jira boards, and weekly stakeholder demos. No black boxes — you see everything we build, every step of the way.' },
        { icon: <CheckCircle weight="duotone" />, title: 'Quality Assured', desc: '80%+ test coverage requirement, mandatory code reviews, automated CI/CD pipelines, and QA sign-off before every release. We deliver quality, not just code.' },
      ]}
      stats={[
        { val: 'Multiple', label: 'Apps Delivered' },
        { val: '96%', label: 'On-Time Delivery' },
        { val: '4.9/5', label: 'Client Satisfaction' },
        { val: '80%+', label: 'Test Coverage' },
      ]}
      faqs={[
        { q: 'What tech stack do you use?', a: 'We use modern, battle-tested technologies: React / Next.js / Vite (frontend), FastAPI / Node.js / Django (backend), PostgreSQL / MongoDB (database), React Native / Flutter (mobile), and Kubernetes / AWS / GCP for infrastructure.' },
        { q: 'How do you handle IP and code ownership?', a: 'All source code, architecture, and documentation we produce for you is 100% your intellectual property. We sign IP assignment agreements before work begins. You get full repo access from day one.' },
        { q: 'What is your project management approach?', a: 'We use Agile Scrum with 2-week sprints. You\'ll have access to our project management tools (Jira/Linear), a dedicated Product Owner, and sprint reviews every two weeks where you can provide feedback and adjust priorities.' },
        { q: 'Do you provide post-launch support?', a: 'Yes. We offer 3, 6, and 12-month post-launch support retainers including bug fixes, security patches, performance monitoring, and minor feature enhancements.' },
      ]}
      ctaTag="Start Building"
      ctaTitle="Let's Build Your Next Enterprise Application"
    />
  )
}
