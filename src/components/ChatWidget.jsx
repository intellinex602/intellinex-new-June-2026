import { useState, useEffect, useRef } from 'react'
import { Robot, User } from '@phosphor-icons/react'

const BACKEND_URL = import.meta.env.VITE_API_URL || ''

const quickReplies = [
  'Managed IT Services',
  'Cloud Solutions',
  'Cybersecurity',
  'Get Pricing',
]

const FALLBACK_RESPONSES = {
  default: "Thank you for reaching out! I'm the Intellinex AI Assistant. I can help with questions about our Managed IT, Cloud, AI, and Cybersecurity services. What would you like to know?",
  managed: "Our Managed IT Services include 24/7 monitoring, helpdesk support, network management, patch management, and proactive maintenance. We guarantee 99.9% uptime with our SLA. Would you like a free assessment?",
  cloud: "We offer comprehensive cloud solutions including AWS, Azure, and Google Cloud migration, multi-cloud architecture, cloud security, and cost optimization.",
  ai: "Our AI solutions include machine learning models, intelligent automation, predictive analytics, NLP, and AI-powered business intelligence.",
  security: "Our cybersecurity services cover threat detection, SOC monitoring, penetration testing, compliance management (ISO 27001, SOC2, GDPR), and incident response.",
  hardware: "We procure, deploy, and maintain enterprise hardware including servers, networking equipment, workstations, and peripherals.",
  software: "Our software development team builds custom enterprise applications, web platforms, mobile apps, and system integrations using modern tech stacks.",
  contact: "You can reach us at: 📧 sales.services@intellinex.in | 📞 +91-7065707898 | 🏢 123 Tech Plaza, New Delhi, Dwarka, 110059.",
  pricing: "We offer flexible pricing models including monthly subscriptions, project-based, and enterprise contracts. Contact our sales team for a custom quote.",
  support: "We provide 24/7 support through phone, email, chat, and our dedicated client portal. Average response time is under 15 minutes for critical issues.",
  greeting: "Hello! How can I assist you with your enterprise IT needs today?",
  thanks: "You're welcome! Let me know if you have any other questions.",
  who: "I am the Intellinex AI Assistant! I'm here to help guide you through our services and capabilities.",
}

function getFallbackResponse(text) {
  const lower = text.toLowerCase()
  if (lower.match(/\b(hi|hello|hey|greetings|morning|afternoon)\b/)) return FALLBACK_RESPONSES.greeting
  if (lower.match(/\b(thank you|thanks|thx)\b/)) return FALLBACK_RESPONSES.thanks
  if (lower.match(/\b(who are you|what are you)\b/)) return FALLBACK_RESPONSES.who
  if (lower.includes('managed') || lower.includes('msp')) return FALLBACK_RESPONSES.managed
  if (lower.includes('cloud') || lower.includes('aws') || lower.includes('azure')) return FALLBACK_RESPONSES.cloud
  if (lower.includes('ai') || lower.includes('artificial') || lower.includes('machine')) return FALLBACK_RESPONSES.ai
  if (lower.includes('security') || lower.includes('cyber')) return FALLBACK_RESPONSES.security
  if (lower.includes('hardware') || lower.includes('server')) return FALLBACK_RESPONSES.hardware
  if (lower.includes('software') || lower.includes('develop') || lower.includes('app')) return FALLBACK_RESPONSES.software
  if (lower.includes('contact') || lower.includes('reach') || lower.includes('phone') || lower.includes('email')) return FALLBACK_RESPONSES.contact
  if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('quote')) return FALLBACK_RESPONSES.pricing
  if (lower.includes('support') || lower.includes('help')) return FALLBACK_RESPONSES.support
  return FALLBACK_RESPONSES.default
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const [messages, setMessages] = useState([
    { id: 0, sender: 'bot', text: '👋 Hello! I\'m the Intellinex AI Assistant. How can I help you today? Ask me about our services, pricing, or how we can support your business!' },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender, text }])
  }

  const getAIResponse = async (userText) => {
    setIsTyping(true)
    try {
      if (BACKEND_URL) {
        // Map messages to the format expected by the backend
        const apiMessages = [...messages, { sender: 'user', text: userText }].map(m => ({
          role: m.sender === 'bot' ? 'assistant' : 'user',
          content: m.text
        }))
        
        const res = await fetch(`${BACKEND_URL}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages }),
        })
        if (res.ok) {
          const data = await res.json()
          setIsTyping(false)
          addMessage(data.response || getFallbackResponse(userText), 'bot')
          return
        }
      }
    } catch {
      // fall through to local fallback
    }
    // Fallback to local response
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 500))
    setIsTyping(false)
    addMessage(getFallbackResponse(userText), 'bot')
  }

  const handleSend = async () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    addMessage(text, 'user')
    await getAIResponse(text)
  }

  const handleQuickReply = async (text) => {
    addMessage(text, 'user')
    await getAIResponse(text)
  }

  const handleOpen = () => {
    setIsOpen(true)
    setShowBadge(false)
  }

  return (
    <div className="chat-widget">
      {/* Panel */}
      <div className={`chat-panel${isOpen ? ' open' : ''}`} role="dialog" aria-label="AI Chat">
        <div className="chat-header">
          <div className="chat-avatar" style={{ color: 'var(--cyan)' }}>
            <Robot weight="duotone" size={28} />
          </div>
          <div>
            <div className="chat-header-name">Intellinex AI Assistant</div>
            <div className="chat-header-status">
              <span className="chat-status-dot" />
              Online · Typically replies in seconds
            </div>
          </div>
          <button
            className="chat-close"
            id="chat-close"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="chat-messages" id="chat-messages" ref={messagesRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-msg ${msg.sender}`}>
              <div className={`chat-msg-avatar ${msg.sender === 'bot' ? 'bot' : 'user-av'}`} style={{ color: msg.sender === 'bot' ? 'var(--cyan)' : 'var(--text-secondary)' }}>
                {msg.sender === 'bot' ? <Robot weight="duotone" size={20} /> : <User weight="duotone" size={20} />}
              </div>
              <div className={`chat-bubble ${msg.sender}`}>{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-msg bot">
              <div className="chat-msg-avatar bot" style={{ color: 'var(--cyan)' }}>
                <Robot weight="duotone" size={20} />
              </div>
              <div className="chat-bubble bot" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                {[0, 0.2, 0.4].map((delay, i) => (
                  <span
                    key={i}
                    style={{
                      width: '7px', height: '7px',
                      background: 'var(--cyan)',
                      borderRadius: '50%',
                      animation: `pulse 1s ${delay}s infinite`,
                      display: 'inline-block',
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="chat-quick-replies">
          {quickReplies.map((r) => (
            <button key={r} className="quick-reply" onClick={() => handleQuickReply(r)}>{r}</button>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            id="chat-input"
            placeholder="Type your message..."
            aria-label="Chat message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="chat-send" id="chat-send" aria-label="Send message" onClick={handleSend}>→</button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="chat-btn"
        id="chat-toggle"
        aria-label="Open AI Chat"
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
      >
        <div className="chat-btn-pulse" />
        <span>{isOpen ? '✕' : '💬'}</span>
        {showBadge && !isOpen && <div className="chat-badge">1</div>}
      </button>
    </div>
  )
}
