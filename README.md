# Grupo Girassol Website

A modern website for Grupo Girassol built with React, Vite, and Tailwind CSS.

## Features

- 🏗️ Construction services showcase
- 📧 Contact form with email notifications
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast performance with Vite

## Deployment to Vercel

### Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. SMTP credentials for email functionality

### Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy
vercel
```

#### Option B: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect the Vite configuration

### Step 3: Configure Environment Variables

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

### Step 4: Redeploy

After adding environment variables, trigger a new deployment:

```bash
vercel --prod
```

Or use the Vercel dashboard to redeploy.

## Local Development

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

## Project Structure

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

## Email Functionality

The contact form uses Vercel serverless functions to send emails via SMTP. Make sure to configure your SMTP credentials in the environment variables.

## Support

For issues or questions, contact: geral@grupogirassol.co.ao