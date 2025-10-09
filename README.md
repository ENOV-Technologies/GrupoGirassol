# Grupo Girassol Website

A modern website for Grupo Girassol built with React, Vite, and Tailwind CSS.

## 🚀 Production Deployment

### Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. SMTP credentials for email functionality

### Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect the Vite configuration
5. Configure environment variables (see below)
6. Deploy!

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Environment Variables

In your Vercel project dashboard, go to **Settings → Environment Variables** and add:

```
VITE_SMTP_HOST=your-smtp-host
VITE_SMTP_PORT=587
VITE_SMTP_USER=your-email@example.com
VITE_SMTP_PASS=your-email-password
VITE_ADMIN_EMAIL=admin@grupogirassol.co.ao
VITE_ALLOWED_ORIGIN=https://your-domain.vercel.app
VITE_PUBLIC_API_URL=https://your-domain.vercel.app
```

**Important:** Set these for **Production**, **Preview**, and **Development** environments.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Production Optimizations

- ✅ Code splitting for vendor and UI libraries
- ✅ Minification with Terser
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Asset caching (1 year for static assets)
- ✅ SEO meta tags and Open Graph
- ✅ 30s timeout for API calls
- ✅ Production error logging

## 📁 Project Structure

```
├── api/                    # Vercel serverless functions
│   └── send-email.js      # Email API endpoint
├── src/
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── lib/              # Utilities
│   └── App.tsx           # Main app component
├── public/               # Static assets
└── vercel.json          # Vercel configuration
```

## 🔒 Security Features

- Security headers (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- CORS configuration
- Input validation
- Environment variable protection

## 📧 Email Functionality

The contact form uses Vercel serverless functions to send emails via SMTP. Emails are sent to both the admin and the customer with professional templates.

## 🌐 Production URL

Current deployment: https://grupo-girassol-ng1bxrf6i-hmassadicos-projects.vercel.app

## 📞 Support

For issues or questions, contact: geral@grupogirassol.co.ao

## 📄 License

© 2024 Grupo Girassol - All rights reserved