# Mayalok Ventures – Digital HQ

A premium venture studio website built with Next.js 14, Tailwind CSS, and Framer Motion. This is a high-performance static site optimized for Cloudflare Pages deployment.

## 🚀 Live Deployment
Deployed on Cloudflare Pages at: `https://mayalok.ventures`

## ✨ Features
- **Next.js 14** with App Router for optimal performance
- **Static Export (SSG)** for maximum speed and security
- **Tailwind CSS** with custom dark luxury design system
- **Framer Motion** for premium micro-interactions
- **Lenis Scroll** for buttery-smooth scrolling
- **Formspree** for contact forms without backend
- **TypeScript** for type safety
- **Jest & Testing Library** for comprehensive testing
- **Cloudflare Pages** for edge-first deployment

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion + Lenis
- **Forms**: Formspree
- **Testing**: Jest + React Testing Library
- **Deployment**: Cloudflare Pages
- **Language**: TypeScript 5.3

## 📁 Project Structure
mayalok-ventures/
├── app/ # Next.js App Router pages
├── components/ # Reusable React components
│ ├── ui/ # Base UI components (Button, Card, etc.)
│ ├── layout/ # Layout components (Header, Footer)
│ └── sections/ # Page section components
├── lib/ # Utilities, constants, adapters
├── public/ # Static assets
├── styles/ # Global CSS
└── tests/ # Test files


## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Formspree account for form submissions

### Installation
```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Formspree IDs

* Development

bash
# Start development server
npm run dev

# Open http://localhost:3000

* Build & Export
# Type checking
npm run type-check

# Run tests
npm test

# Build for production
npm run build

# Export static files
npm run export

* Deployment to Cloudflare Pages
* Option 1: Using Wrangler CLI

# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy ./out

* Option 2: Via GitHub Integration
Push code to GitHub repository

Connect to Cloudflare Pages

Build settings:

Build command: npm run build && npm run export

Build output directory: ./out

Environment variables: Add NEXT_PUBLIC_FORMPREE_* IDs

* 🎨 Design System
Color Palette
Void: #030303 (Background)

Carbon: #0B0F14 (Secondary backgrounds)

Graphite: #1C1F26 (Borders)

Platinum: #E6E6E6 (Primary text)

Gold Accent: #C7A14A (Highlights)

* Typography
Primary: Inter (Google Fonts)

Mono: JetBrains Mono (for technical elements)

Animation Rules
Duration: 300-600ms for most animations

Easing: cubic-bezier(0.16, 1, 0.3, 1) (ease-out-expo)

Stagger: 100ms between sequenced elements

No bounce or exaggerated effects

# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage

* 🔒 Security Features
Input sanitization on all forms

Environment variable validation

Static export eliminates server-side vulnerabilities

Content Security Policy headers

HTTPS enforcement via Cloudflare

📈 Performance Targets
Lighthouse Performance: 98-100

First Contentful Paint: < 800ms

Largest Contentful Paint: < 1.2s

Cumulative Layout Shift: 0

First Input Delay: < 100ms

🤝 Contributing
Create feature branch from main

Follow TypeScript and Tailwind conventions

Write tests for new functionality

Update documentation as needed

Submit pull request for review

📄 License
Proprietary – © 2024 Mayalok Ventures. All rights reserved.

📞 Support
For technical issues, contact the development team. For venture inquiries, use the contact form on the website.