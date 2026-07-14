import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/article.css'

export default function ArticlePage({ article }) {
  useEffect(() => {
    document.title = `${article.title} | Intellinex Technologies`
    window.scrollTo(0, 0)
  }, [article.title])

  return (
    <div className="article-root">
      {/* ── HERO ── */}
      <div className={`article-hero ${article.bgClass}`}>
        <img src={article.img} alt={article.category} className="article-hero-img" />
        <div className="article-hero-overlay" />
        <div className="container article-hero-content">
          <div className="article-breadcrumb">
            <Link to="/" className="article-breadcrumb-link">Home</Link>
            <span className="article-breadcrumb-sep">›</span>
            <Link to="/#knowledge" className="article-breadcrumb-link">Insights</Link>
            <span className="article-breadcrumb-sep">›</span>
            <span>{article.category}</span>
          </div>
          <div className="article-hero-badge">{article.category}</div>
          <h1 className="article-hero-title">{article.title}</h1>
          <div className="article-hero-meta">
            <div className="article-author-chip">
              <div className="article-author-avatar">{article.author.charAt(0)}</div>
              <div>
                <div className="article-author-name">{article.author}</div>
                <div className="article-author-role">{article.authorRole}</div>
              </div>
            </div>
            <span className="article-meta-sep" />
            <div className="article-hero-meta-info">
              <span className="article-meta-inline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: '-2px' }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {article.date}
              </span>
              <span className="article-meta-dot" />
              <span className="article-meta-inline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: '-2px' }}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="container article-layout">
        <article className="article-body">
          <p className="article-lead">{article.excerpt}</p>

          {article.sections.map((sec, i) => (
            <div key={i} className="article-section">
              {sec.heading && <h2 className="article-h2">{sec.heading}</h2>}
              {sec.subheading && <h3 className="article-h3">{sec.subheading}</h3>}
              {sec.paragraphs && sec.paragraphs.map((p, j) => (
                <p key={j} className="article-p">{p}</p>
              ))}
              {sec.bullets && (
                <ul className="article-ul">
                  {sec.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
              {sec.callout && (
                <div className="article-callout">
                  <span className="article-callout-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6M10 22h4M12 2a6 6 0 00-4 10.5c.6.55 1 1.3 1 2.5h6c0-1.2.4-1.95 1-2.5A6 6 0 0012 2z" />
                    </svg>
                  </span>
                  <p>{sec.callout}</p>
                </div>
              )}
            </div>
          ))}

          {/* Author Card */}
          <div className="article-author-card">
            <div className="article-author-card-avatar">{article.author.charAt(0)}</div>
            <div>
              <div className="article-author-card-name">{article.author}</div>
              <div className="article-author-card-role">{article.authorRole}</div>
              <p className="article-author-card-bio">{article.authorBio}</p>
            </div>
          </div>
        </article>

        {/* ── SIDEBAR ── */}
        <aside className="article-sidebar">
          <div className="article-sidebar-card">
            <div className="article-sidebar-title">About the Author</div>
            <div className="article-sidebar-author">
              <div className="article-sidebar-avatar">{article.author.charAt(0)}</div>
              <div>
                <div className="article-sidebar-author-name">{article.author}</div>
                <div className="article-sidebar-author-role">{article.authorRole}</div>
              </div>
            </div>
            <p className="article-sidebar-bio">{article.authorBio}</p>
          </div>

          <div className="article-sidebar-card">
            <div className="article-sidebar-title">Article Details</div>
            <div className="article-sidebar-meta-row">
              <span>Published</span><strong>{article.date}</strong>
            </div>
            <div className="article-sidebar-meta-row">
              <span>Read Time</span><strong>{article.readTime}</strong>
            </div>
            <div className="article-sidebar-meta-row">
              <span>Category</span>
              <span className="article-sidebar-badge">{article.category}</span>
            </div>
          </div>

          <div className="article-sidebar-card">
            <div className="article-sidebar-title">Explore More</div>
            {article.related.map((r, i) => (
              <Link to={r.to} key={i} className="article-related-item">
                <div className={`article-related-dot ${r.color}`} />
                <span>{r.title}</span>
              </Link>
            ))}
          </div>

          <Link to="/contact" className="btn btn-primary article-sidebar-cta">
            Discuss With Our Experts →
          </Link>
        </aside>
      </div>
    </div>
  )
}
