<div align="center">

<img src="public/assets/logo.webp" alt="Intellinex Technologies" width="80" />

# Intellinex Technologies

### Enterprise IT Services Website

*Cloud · AI · Managed IT · Cybersecurity · Hardware · Software Development*

[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.111.0-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](https://intellinex.tech)

**[🌐 Live Site](https://intellinex.tech) · [📧 Contact](mailto:sales.services@intellinex.in) · [💼 LinkedIn](https://www.linkedin.com/company/intellinex-technologyservice)**

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Team](#team)

---

## About

The official website of **Intellinex Technologies** — a modern enterprise IT services company based in New Delhi, India. The website showcases our full service portfolio, company story, and includes a fully functional AI chat assistant powered by Google Gemini, and an integrated contact system that stores inquiries to a database and sends email notifications via Resend.

### Features

- ⚡ **Blazing-fast** React SPA built with Vite 8
- 🌙 **Dark / Light mode** with localStorage persistence
- 🤖 **AI Chat Widget** powered by Gemini 1.5 Flash with offline fallback
- 📧 **Contact Form** connected to a FastAPI backend + PostgreSQL + Resend email
- 🎨 **Glassmorphism design** with scroll-reveal animations and counter animations
- 📱 **Fully responsive** with a mobile-first hamburger menu
- 📰 **Knowledge Center** with full-length technical articles
- 🔍 **SEO optimized** — meta tags, Open Graph, JSON-LD structured data, canonical URLs
- 🔒 **Security headers** configured in Vercel (CSP, X-Frame-Options, Referrer-Policy)

---

## Tech Stack

### Frontend

| Technology | Purpose | Version |
|---|---|---|
| [React](https://react.dev) | UI Framework | 19.2.7 |
| [Vite](https://vitejs.dev) | Build Tool & Dev Server | 8.1.1 |
| [React Router DOM](https://reactrouter.com) | Client-side Routing | 7.18.1 |
| [Phosphor Icons](https://phosphoricons.com) | Icon Library | 2.1.10 |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | JavaScript Linter | 1.71.0 |
| Vanilla CSS | Styling (CSS Variables + Glassmorphism) | — |
| Inter + Space Grotesk | Typography (Google Fonts) | — |

### Backend

| Technology | Purpose | Version |
|---|---|---|
| [FastAPI](https://fastapi.tiangolo.com) | REST API Framework | 0.111.0 |
| [Uvicorn](https://www.uvicorn.org) | ASGI Server | 0.30.1 |
| [SQLAlchemy](https://sqlalchemy.org) | ORM | 2.0.30 |
| [Alembic](https://alembic.sqlalchemy.org) | DB Migrations | 1.13.1 |
| [Pydantic v2](https://docs.pydantic.dev) | Data Validation | 2.7.4 |
| [Resend](https://resend.com) | Email Delivery | 2.1.0 |
| [Google Generative AI](https://ai.google.dev) | Gemini AI Chat | 0.5.4 |
| [PostgreSQL 15](https://www.postgresql.org) | Database | 15 |

### Infrastructure

| Technology | Purpose |
|---|---|
| [Vercel](https://vercel.com) | Frontend hosting + Serverless Functions |
| [Docker Compose](https://docs.docker.com/compose) | Local PostgreSQL development |

---

## Project Structure

```
intellinex/
│
├── api/                        # Vercel Serverless Functions (Node.js)
│   └── contact.js              # Contact form handler → Resend email
│
├── backend/                    # Python FastAPI Backend
│   ├── api/
│   │   ├── chat.py             # AI chat endpoint → Gemini API
│   │   └── contact.py          # Contact endpoint → DB + Resend
│   ├── core/
│   │   └── config.py           # Pydantic settings (env vars)
│   ├── db/
│   │   └── database.py         # SQLAlchemy engine + session
│   ├── models/
│   │   └── models.py           # ContactInquiry DB model
│   ├── .env                    # Backend environment variables
│   ├── main.py                 # FastAPI app entry point
│   ├── Procfile                # For deployment (e.g. Railway)
│   └── requirements.txt        # Python dependencies
│
├── public/                     # Static assets served as-is
│   └── assets/                 # Images, logos, video
│
├── src/                        # React Application Source
│   ├── components/             # Shared UI Components
│   │   ├── ChatWidget.jsx      # AI Chat bubble widget
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Navbar.jsx          # Top navigation + mobile menu
│   │   ├── ScrollToTop.jsx     # Scroll-to-top button
│   │   └── ServicePage.jsx     # Shared layout for all service pages
│   │
│   ├── data/                   # Static JSON data
│   │   ├── caseStudies.json
│   │   └── services.json       # Service metadata (labels, slugs, etc.)
│   │
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useCounterAnimation.js  # Animated number counters
│   │   ├── useScrollReveal.js      # IntersectionObserver scroll animations
│   │   └── useTheme.js             # Dark/light theme toggle
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── articles/           # Blog article pages
│   │   │   ├── ArticleAgenticAI.jsx
│   │   │   ├── ArticleCloudSovereignty.jsx
│   │   │   ├── ArticlePage.jsx
│   │   │   └── ArticlePostQuantum.jsx
│   │   ├── services/           # Service detail pages
│   │   │   ├── AISolutions.jsx
│   │   │   ├── CloudSolutions.jsx
│   │   │   ├── Cybersecurity.jsx
│   │   │   ├── Hardware.jsx
│   │   │   ├── ManagedIT.jsx
│   │   │   └── SoftwareDev.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CookiePolicy.jsx
│   │   ├── Home.jsx            # Main landing page (all sections)
│   │   ├── Privacy.jsx
│   │   └── Terms.jsx
│   │
│   ├── styles/
│   │   ├── article.css         # Styles for article pages
│   │   └── main.css            # Main stylesheet (CSS variables + all components)
│   │
│   ├── App.css
│   ├── App.jsx                 # App shell: Router + global layout
│   └── main.jsx                # React entry point + theme init
│
├── .env.example                # Example environment variables template
├── .oxlintrc.json              # Oxlint configuration
├── CNAME                       # Vercel custom domain config
├── docker-compose.yml          # Local PostgreSQL via Docker
├── index.html                  # HTML shell with SEO meta tags + JSON-LD
├── package.json                # Frontend npm dependencies
├── vercel.json                 # Vercel rewrites + security headers
└── vite.config.js              # Vite build configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) `>= 20.x`
- [Python](https://python.org) `>= 3.11`
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (for local PostgreSQL)
- A [Resend](https://resend.com) API key (for email)
- A [Google AI Studio](https://aistudio.google.com) API key (for Gemini chat)

---

### Frontend Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-org/intellinex.git
cd intellinex

# 2. Install frontend dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local
# Then edit .env.local and set VITE_API_URL (see below)

# 4. Start the development server
npm run dev
# → Opens at http://localhost:3000
```

---

### Backend Setup

```bash
# 1. Start PostgreSQL via Docker
docker-compose up -d

# 2. Navigate to the backend directory
cd backend

# 3. Create and activate a Python virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

# 4. Install Python dependencies
pip install -r requirements.txt

# 5. Configure environment variables
cp .env.example .env
# Edit .env with your credentials (see below)

# 6. Start the FastAPI backend
uvicorn main:app --reload --port 8000
# → API docs available at http://localhost:8000/docs
```

---

### Environment Variables

#### Frontend (`.env.local`)

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Base URL of the Python backend | `http://localhost:8000` |

> Leave `VITE_API_URL` empty to use the Vercel serverless function (`/api/contact`) instead.

#### Backend (`backend/.env`)

| Variable | Description | Required |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | ✅ Yes |
| `RESEND_API_KEY` | API key from resend.com | ✅ Yes |
| `CONTACT_EMAIL_TO` | Email address to receive inquiries | ✅ Yes |
| `GEMINI_API_KEY` | Google AI Studio API key for chat | ✅ Yes (for AI chat) |

**Example `backend/.env`:**
```env
DATABASE_URL=postgresql+psycopg://postgres:postgres@localhost:5432/intellinex
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=sales.services@intellinex.in
GEMINI_API_KEY=AIza...
```

#### Vercel (Environment Variables in Dashboard)

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Used by `/api/contact.js` serverless function |

---

## Available Scripts

### Frontend

```bash
npm run dev        # Start Vite development server (port 3000)
npm run build      # Build production bundle → /dist
npm run preview    # Preview production build locally
npm run lint       # Run Oxlint linter
```

### Backend

```bash
# Start dev server with auto-reload
uvicorn main:app --reload --port 8000

# Run Alembic migrations (when configured)
alembic upgrade head

# Generate a new migration
alembic revision --autogenerate -m "description"
```

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, Services, Why Us, Industries, Knowledge Center, FAQ, Contact |
| `/about` | About | Mission, Values, Team, Timeline, Industries |
| `/contact` | Contact | Full contact form + company info |
| `/services/managed-it` | Managed IT | 24/7 IT Operations service detail |
| `/services/cloud` | Cloud Solutions | AWS / Azure / GCP solutions detail |
| `/services/ai` | AI Solutions | ML & automation solutions detail |
| `/services/cybersecurity` | Cybersecurity | Security services detail |
| `/services/hardware` | Hardware | Procurement & deployment detail |
| `/services/software` | Software Dev | Custom development detail |
| `/articles/agentic-ai` | Article | Agentic AI in the Enterprise |
| `/articles/post-quantum` | Article | Post-Quantum Cryptography |
| `/articles/cloud-sovereignty` | Article | India's Cloud Sovereignty Push |
| `/privacy` | Privacy Policy | DPDP-compliant privacy policy |
| `/terms` | Terms of Service | Terms and conditions |
| `/cookie-policy` | Cookie Policy | Cookie usage policy |

---

## Architecture

### Contact Form Flow

```
User fills form
      │
      ▼
[Vercel Deployment]           [Self-hosted Backend]
/api/contact.js        OR     POST /api/contact
      │                              │
      ▼                              ▼
Resend Email API          PostgreSQL (save inquiry)
(Admin notification)              + Resend Email API
```

### AI Chat Flow

```
User types message
      │
      ▼
ChatWidget.jsx (React)
      │
      ├─ If VITE_API_URL is set:
      │       ▼
      │   POST /api/chat (FastAPI)
      │       ▼
      │   Gemini 1.5 Flash API
      │       ▼
      │   Returns AI response
      │
      └─ If no backend available:
              ▼
          Local keyword-matching fallback responses
```

---

## Deployment

### Frontend (Vercel) — Production

```bash
# The project is deployed automatically on every push to the main branch.
# Vercel picks up vite.config.js and vercel.json automatically.

# Manual deploy via CLI:
npm install -g vercel
vercel --prod
```

**Vercel Configuration (`vercel.json`):**
- SPA rewrites (`/*` → `/index.html`) for React Router support
- Aggressive asset caching (`max-age=31536000, immutable`) for `/assets/*`
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`

### Backend — Deployment Options

The FastAPI backend can be deployed to any platform that supports Python. A `Procfile` is included for services like **Railway**, **Heroku**, or **Render**:

```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

---

## Team

| Name | Role |
|---|---|
| **Harsh** | Co-Founder · IT Infrastructure & Systems |
| **Aanidhya Patidar** | Co-Founder · Software Development & AI |
| **Harshal Jain** | Full Stack Developer · Cybersecurity |
| **Vishal** | Digital Marketing & Brand Strategy |

---

## Contact

| Channel | Details |
|---|---|
| 📧 Email | [sales.services@intellinex.in](mailto:sales.services@intellinex.in) |
| 📞 Phone | [+91-7065707898](tel:+91-7065707898) |
| 💬 WhatsApp | [wa.me/917065707898](https://wa.me/917065707898) |
| 🏢 Address | 123 Tech Plaza, Dwarka, New Delhi — 110059 |
| 🌐 Website | [intellinex.tech](https://intellinex.tech) |
| 💼 LinkedIn | [linkedin.com/company/intellinex-technologyservice](https://www.linkedin.com/company/intellinex-technologyservice) |

---

<div align="center">

© 2026 Intellinex Technologies. All rights reserved.

*Transforming enterprises through intelligent cloud, AI, and managed IT solutions.*

</div>
