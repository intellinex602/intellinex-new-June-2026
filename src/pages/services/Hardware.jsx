import { useEffect } from 'react'
import ServicePage from '../../components/ServicePage'
import { Desktop, Lightning, Wrench, Buildings, ShoppingCart, Factory, Truck, Broadcast, ArrowsClockwise, Money, Lock } from '@phosphor-icons/react'

export default function Hardware() {
  useEffect(() => { document.title = 'Hardware Solutions | Intellinex Technologies' }, [])

  return (
    <ServicePage
      breadcrumb="Hardware Solutions"
      heroImage="/assets/hardware-new-opt.jpg"
      meta={{
        tag: 'Hardware Solutions',
        heroTitle: <>Enterprise Hardware <span style={{ color: 'var(--cyan)' }}>Procurement &amp; Deployment</span></>,
        heroDesc: 'End-to-end enterprise hardware solutions — from procurement and staging to deployment and lifecycle management. Certified partners with Dell, HP, Cisco, and other leading vendors.',
      }}
      trustItems={[
        { icon: <Desktop weight="duotone" />, value: '10,000+', label: 'Devices Deployed' },
        { icon: <Lightning weight="duotone" />, value: '48hr', label: 'Delivery SLA' },
        { icon: <Wrench weight="duotone" />, value: '99.8%', label: 'Hardware Uptime' },
        { icon: <Buildings weight="duotone" />, value: '50+', label: 'Vendor Partnerships' },
      ]}
      cards={[
        { icon: <ShoppingCart weight="duotone" />, title: 'Procurement & Sourcing', desc: 'Strategic hardware sourcing with volume pricing across Dell, HP, Lenovo, Cisco, Fortinet, and 50+ other vendors. We negotiate the best deals for you.', bullets: ['Volume pricing & negotiation', 'Vendor-agnostic recommendations', 'GST-compliant invoicing'] },
        { icon: <Factory weight="duotone" />, title: 'Staging & Configuration', desc: 'Pre-configure all hardware at our staging facility before deployment — OS imaging, software installation, security hardening, and asset tagging.', bullets: ['Golden image deployment', 'Security hardening & patching', 'Asset tagging & inventory'] },
        { icon: <Truck weight="duotone" />, title: 'Deployment & Installation', desc: 'On-site deployment teams across major Indian cities. Server rack installation, cable management, network configuration, and user onboarding.', bullets: ['Pan-India deployment teams', 'Rack installation & cabling', 'Site surveys & planning'] },
        { icon: <Broadcast weight="duotone" />, title: 'Network Infrastructure', desc: 'Design and deploy enterprise networking solutions including LAN/WAN, Wi-Fi 6, SD-WAN, and data center switching from Cisco, Juniper, and Aruba.', bullets: ['Wi-Fi 6 & 6E deployment', 'SD-WAN implementation', 'Data center switching & routing'] },
        { icon: <ArrowsClockwise weight="duotone" />, title: 'Lifecycle Management', desc: 'Manage the full hardware lifecycle from procurement to secure disposal — tracking, maintenance scheduling, warranty management, and EOL planning.', bullets: ['Asset lifecycle tracking', 'Warranty & support management', 'Secure data erasure & disposal'] },
        { icon: <Wrench weight="duotone" />, title: 'Break-Fix & Maintenance', desc: 'On-site hardware repair, preventive maintenance, and emergency break-fix services with guaranteed response times and spare-parts inventory.', bullets: ['4-hour on-site response SLA', 'Spare parts inventory', 'Preventive maintenance schedules'] },
      ]}
      featuresTitle="Our Hardware Advantage"
      features={[
        { icon: <Money weight="duotone" />, title: 'Best Pricing Guaranteed', desc: 'Our volume purchasing power and vendor partnerships give you enterprise pricing regardless of your company size.' },
        { icon: <Lightning weight="duotone" />, title: 'Fast Deployment', desc: 'Fully configured hardware delivered and deployed within 48 hours of order confirmation for standard configurations.' },
        { icon: <Lock weight="duotone" />, title: 'Secure Asset Management', desc: 'Complete chain-of-custody documentation, encrypted asset tracking, and certified data destruction at end-of-life.' },
      ]}
      stats={[
        { val: '10K+', label: 'Devices Deployed' },
        { val: '50+', label: 'Vendor Partnerships' },
        { val: '48hr', label: 'Deployment SLA' },
        { val: '99.8%', label: 'Hardware Uptime' },
      ]}
      faqs={[
        { q: 'Which hardware vendors do you work with?', a: 'We are authorized partners with Dell Technologies, HP Enterprise, Lenovo, Cisco, Juniper, Aruba, Fortinet, Nutanix, and 40+ other enterprise hardware vendors. This gives us access to best pricing and priority support escalation.' },
        { q: 'Can you handle large-scale rollouts across multiple locations?', a: 'Absolutely. We have pan-India deployment teams in 15+ cities and logistics partnerships for nationwide coverage. We\'ve managed rollouts of 5,000+ devices across 50+ locations simultaneously.' },
        { q: 'Do you offer hardware financing or leasing options?', a: 'Yes. We partner with leading financial institutions to offer hardware leasing and financing arrangements that preserve your capital expenditure budget while getting the equipment you need.' },
        { q: 'How do you handle hardware disposal and data security?', a: 'We follow DoD 5220.22-M data erasure standards and provide certificates of destruction for all retired hardware. Physical destruction is available for drives that cannot be wiped.' },
      ]}
      ctaTag="Upgrade Your Hardware"
      ctaTitle="Modernize Your Infrastructure with Enterprise Hardware"
    />
  )
}
