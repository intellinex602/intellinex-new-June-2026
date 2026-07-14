import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import CookiePolicy from './pages/CookiePolicy'
import ManagedIT from './pages/services/ManagedIT'
import CloudSolutions from './pages/services/CloudSolutions'
import AISolutions from './pages/services/AISolutions'
import Cybersecurity from './pages/services/Cybersecurity'
import Hardware from './pages/services/Hardware'
import SoftwareDev from './pages/services/SoftwareDev'
import ArticleAgenticAI from './pages/articles/ArticleAgenticAI'
import ArticlePostQuantum from './pages/articles/ArticlePostQuantum'
import ArticleCloudSovereignty from './pages/articles/ArticleCloudSovereignty'
import NotFound from './pages/NotFound'

function ScrollRestorer() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Give the page a tick to render before scrolling to the element
      const id = hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 80)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollRestorer />
      <Navbar />
      <main>
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/services/managed-it" element={<ManagedIT />} />
            <Route path="/services/cloud" element={<CloudSolutions />} />
            <Route path="/services/ai" element={<AISolutions />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/hardware" element={<Hardware />} />
            <Route path="/services/software" element={<SoftwareDev />} />
            <Route path="/articles/agentic-ai" element={<ArticleAgenticAI />} />
            <Route path="/articles/post-quantum" element={<ArticlePostQuantum />} />
            <Route path="/articles/cloud-sovereignty" element={<ArticleCloudSovereignty />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <ChatWidget />
      <ScrollToTop />
    </>
  )
}
