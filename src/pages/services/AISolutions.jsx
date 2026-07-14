import { useEffect } from 'react'
import ServicePage from '../../components/ServicePage'
import { Robot, TrendUp, Lightning, Target, Brain, Sparkle, MagicWand, Eye, ChatCircle, ArrowsClockwise, ChartBar, Factory, Microscope } from '@phosphor-icons/react'

export default function AISolutions() {
  useEffect(() => { document.title = 'AI Solutions | Intellinex Technologies' }, [])

  return (
    <ServicePage
      breadcrumb="AI Solutions"
      heroImage="/assets/ai-solutions-final-opt.jpg"
      meta={{
        tag: 'AI & Machine Learning',
        heroTitle: <>Intelligent Automation Powered by <span style={{ color: 'var(--cyan)' }}>Gemini &amp; Custom ML</span></>,
        heroDesc: 'We design, build, and deploy production-grade AI systems that automate operations, generate insights, and create competitive advantages — using Google Gemini, custom ML models, and enterprise-grade MLOps.',
      }}
      trustItems={[
        { icon: <Robot weight="duotone" />, value: '50+', label: 'AI Models Deployed' },
        { icon: <TrendUp weight="duotone" />, value: '35%', label: 'Avg Efficiency Gain' },
        { icon: <Lightning weight="duotone" />, value: '< 100ms', label: 'Model Inference Time' },
        { icon: <Target weight="duotone" />, value: '98.5%', label: 'Model Accuracy' },
      ]}
      cards={[
        { icon: <Brain weight="duotone" />, title: 'Custom ML Models', desc: 'End-to-end ML model development — from data preparation and feature engineering to training, evaluation, and deployment in production.', bullets: ['Supervised & unsupervised learning', 'Custom neural network architectures', 'Model versioning & A/B testing'] },
        { icon: <Sparkle weight="duotone" />, title: 'Generative AI Integration', desc: 'Integrate LLMs like Google Gemini and GPT into your business workflows for content generation, document analysis, and intelligent chatbots.', bullets: ['Gemini API integration', 'RAG (Retrieval-Augmented Generation)', 'Enterprise chatbot development'] },
        { icon: <MagicWand weight="duotone" />, title: 'Predictive Analytics', desc: 'Turn historical data into future insights with demand forecasting, churn prediction, risk scoring, and anomaly detection models.', bullets: ['Demand & sales forecasting', 'Customer churn prediction', 'Risk & fraud scoring'] },
        { icon: <Eye weight="duotone" />, title: 'Computer Vision', desc: 'Deploy vision AI for quality inspection, document processing, facial recognition, and visual monitoring in industrial and commercial settings.', bullets: ['Defect detection systems', 'OCR & document intelligence', 'Video analytics pipelines'] },
        { icon: <ChatCircle weight="duotone" />, title: 'NLP & Text Analytics', desc: 'Extract meaning from unstructured text data with sentiment analysis, entity extraction, classification, and semantic search.', bullets: ['Sentiment & intent analysis', 'Named entity recognition', 'Multilingual support (Hindi, English)'] },
        { icon: <ArrowsClockwise weight="duotone" />, title: 'MLOps & AI Infrastructure', desc: 'Build robust ML pipelines with automated retraining, model monitoring, drift detection, and CI/CD for AI systems.', bullets: ['MLflow & Vertex AI pipelines', 'Model drift monitoring', 'Automated retraining workflows'] },
      ]}
      featuresTitle="Our AI Methodology"
      features={[
        { icon: <ChartBar weight="duotone" />, title: 'Data-First Approach', desc: 'Great AI starts with great data. We assess your data quality, build robust data pipelines, and ensure your models train on reliable, clean, well-labeled datasets.' },
        { icon: <Factory weight="duotone" />, title: 'Production-Ready Delivery', desc: 'We don\'t build prototypes — we build production systems. Every model we deliver is containerized, monitored, and built to handle enterprise-scale traffic.' },
        { icon: <Microscope weight="duotone" />, title: 'Explainable AI', desc: 'We build transparent, interpretable models with SHAP/LIME explanations so your team understands why the AI makes each decision.' },
      ]}
      stats={[
        { val: '50+', label: 'AI Models in Production' },
        { val: '35%', label: 'Average Efficiency Gain' },
        { val: '6wks', label: 'Average Deployment Time' },
        { val: '98.5%', label: 'Average Model Accuracy' },
      ]}
      faqs={[
        { q: 'What AI/ML frameworks do you use?', a: 'We work across the full ML stack: Python (PyTorch, TensorFlow, scikit-learn), Google Vertex AI, AWS SageMaker, and the Gemini API for generative AI applications.' },
        { q: 'Do we need to have our own data to start?', a: 'Ideally yes, but we can also help you design data collection strategies, use synthetic data generation, or leverage transfer learning from pre-trained models to get started with limited data.' },
        { q: 'How do you ensure model accuracy over time?', a: 'We implement MLOps practices including automated model monitoring, data drift detection, and retraining pipelines. We set up alerts when model performance degrades and have automated retraining workflows.' },
        { q: 'Is our data safe during AI development?', a: 'Yes. We sign NDAs, work within your data governance policies, and never use your proprietary data to train models for other clients. All data processing complies with applicable regulations.' },
      ]}
      ctaTag="Transform with AI"
      ctaTitle="Ready to Deploy AI That Delivers Real Business Value?"
    />
  )
}
