import { useEffect } from 'react'
import ServicePage from '../../components/ServicePage'
import { Cloud, TrendDown, Rocket, Buildings, Truck, Wrench, Lock, Money, ArrowsClockwise, ChartBar, Trophy, Lightning, Lightbulb } from '@phosphor-icons/react'

export default function CloudSolutions() {
  useEffect(() => { document.title = 'Cloud Solutions | Intellinex Technologies' }, [])

  return (
    <ServicePage
      breadcrumb="Cloud Solutions"
      heroImage="/assets/cloud-solutions-final-opt.jpg"
      meta={{
        tag: 'Cloud Solutions',
        heroTitle: <>Modern Cloud Infrastructure <span style={{ color: 'var(--cyan)' }}>Built for Scale</span></>,
        heroDesc: 'Seamlessly migrate, modernize, and manage your cloud infrastructure on AWS, Azure, or GCP. Our certified cloud architects design solutions that reduce costs, improve performance, and accelerate innovation.',
      }}
      trustItems={[
        { icon: <Cloud weight="duotone" />, value: '3', label: 'Cloud Platforms' },
        { icon: <TrendDown weight="duotone" />, value: '40%', label: 'Avg Cost Reduction' },
        { icon: <Rocket weight="duotone" />, value: '99.9%', label: 'Cloud Uptime SLA' },
        { icon: <Buildings weight="duotone" />, value: '100+', label: 'Migrations Completed' },
      ]}
      cards={[
        { icon: <Truck weight="duotone" />, title: 'Cloud Migration', desc: 'Lift-and-shift or cloud-native re-architecture. We handle the full migration with zero downtime and comprehensive testing.', bullets: ['Assessment & roadmap planning', 'Phased migration execution', 'Post-migration optimization'] },
        { icon: <Wrench weight="duotone" />, title: 'Cloud Architecture', desc: 'Design scalable, resilient, and cost-effective cloud architectures tailored to your workload requirements and business goals.', bullets: ['Multi-cloud & hybrid design', 'High availability architecture', 'Cost-optimized design'] },
        { icon: <Lock weight="duotone" />, title: 'Cloud Security', desc: 'Implement comprehensive cloud security posture with identity management, encryption, compliance, and continuous monitoring.', bullets: ['IAM & zero-trust policies', 'Data encryption at rest/transit', 'CIS & SOC2 compliance'] },
        { icon: <Money weight="duotone" />, title: 'Cost Optimization', desc: 'Analyze and right-size your cloud spend. We typically reduce cloud bills by 30-50% through reserved instances, auto-scaling, and waste elimination.', bullets: ['Cloud cost analysis', 'Reserved instance planning', 'Auto-scaling configuration'] },
        { icon: <ArrowsClockwise weight="duotone" />, title: 'DevOps & CI/CD', desc: 'Implement modern DevOps practices with automated CI/CD pipelines, infrastructure-as-code, and container orchestration.', bullets: ['Terraform & CloudFormation IaC', 'GitHub Actions / Azure DevOps', 'Kubernetes & Docker'] },
        { icon: <ChartBar weight="duotone" />, title: 'Cloud Monitoring', desc: '24/7 cloud operations management with real-time dashboards, alerting, auto-remediation, and monthly cost reports.', bullets: ['CloudWatch / Azure Monitor', 'Custom alerting rules', 'Monthly FinOps reports'] },
      ]}
      featuresTitle="Our Cloud Expertise"
      features={[
        { icon: <Trophy weight="duotone" />, title: 'Certified Cloud Architects', desc: 'AWS Solutions Architect Professional, Azure Expert MSP, and GCP Professional Cloud Architect certifications across our team.' },
        { icon: <Lightning weight="duotone" />, title: 'Zero-Downtime Migrations', desc: 'Our battle-tested migration methodology ensures business continuity with rollback capabilities at every stage.' },
        { icon: <Lightbulb weight="duotone" />, title: 'Cloud-Native Best Practices', desc: 'We design with 12-factor app principles, microservices architecture, and cloud-native services for maximum agility.' },
      ]}
      stats={[
        { val: '100+', label: 'Cloud Migrations' },
        { val: '40%', label: 'Avg Cost Savings' },
        { val: '3', label: 'Cloud Platforms' },
        { val: '0', label: 'Downtime Hours' },
      ]}
      faqs={[
        { q: 'Which cloud platforms do you support?', a: 'We have certified expertise across AWS, Microsoft Azure, and Google Cloud Platform. We can also design multi-cloud or hybrid cloud architectures that combine on-premises infrastructure with multiple cloud providers.' },
        { q: 'How long does a cloud migration take?', a: 'Migration timelines vary based on complexity. A typical SMB migration takes 4–8 weeks. Enterprise migrations with 100+ workloads can take 3–6 months with phased execution.' },
        { q: 'Will we experience downtime during migration?', a: 'No. Our migration methodology is designed for zero downtime using blue-green deployments, database replication, and traffic cutover strategies that ensure business continuity throughout.' },
        { q: 'How do you handle data security during migration?', a: 'All data is encrypted in transit using TLS 1.3, and at rest using AES-256. We also maintain a complete audit trail of all migration activities and can run migrations within compliance frameworks like HIPAA, PCI-DSS, and ISO 27001.' },
      ]}
      ctaTag="Start Your Cloud Journey"
      ctaTitle="Migrate to the Cloud with Confidence"
    />
  )
}
