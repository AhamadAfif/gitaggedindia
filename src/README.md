# GI-Tagged India 🇮🇳

A modern, interactive web application that visualizes India's Geographical Indication (GI) products on an interactive map. Explore 80+ authentic GI products from all 28 states and 8 union territories with beautiful custom SVG illustrations.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Live Demo

[Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gi-tagged-india)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Supabase Setup](#supabase-setup)
- [Deployment to Vercel](#deployment-to-vercel)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Application Features](#application-features)
- [Contributing](#contributing)

## ✨ Features

- 🗺️ **Interactive India Map** - Click on any state to explore its GI products
- 🔍 **Advanced Search & Filters** - Search by product name, category, or state
- 🎨 **Custom SVG Illustrations** - Copyright-free illustrations for all product categories
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🔐 **User Authentication** - Secure signup/login with Supabase Auth
- 📊 **80+ GI Products** - Comprehensive database covering all Indian states and UTs
- 🎯 **Category Filtering** - Filter by Handicraft, Agriculture, Food, Textile, Natural, Others
- 📖 **Wikipedia Integration** - "Know More" buttons linking to detailed information
- ⚡ **Smooth Animations** - Motion library powered transitions and interactions
- 🎨 **Indian Tri-color Theme** - Saffron (#FF9933), White, Green (#138808), Blue (#000080)

## 🛠 Tech Stack

### Frontend Framework
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn/ui** - High-quality accessible components
- **Lucide React** - Beautiful icon library
- **Motion (Framer Motion)** - Smooth animations and transitions

### Backend & Database
- **Supabase** - Backend-as-a-Service platform
  - Authentication (Email/Password)
  - PostgreSQL Database
  - Edge Functions (Hono server)
  - Key-Value Store
- **Hono** - Lightweight web framework for Edge Functions

### Additional Libraries
- **React Hook Form** - Efficient form handling
- **Sonner** - Toast notifications
- **date-fns** - Date utility library

## 📁 Project Structure

```
gi-tagged-india/
├── components/              # Reusable React components
│   ├── ui/                 # Shadcn UI components
│   ├── figma/              # Figma integration components
│   ├── BackToTop.tsx       # Scroll to top button
│   ├── CategoryIllustrations.tsx  # SVG illustrations
│   ├── FilterChips.tsx     # Category filter chips
│   ├── Footer.tsx          # App footer
│   ├── Header.tsx          # App header with auth
│   ├── IndiaMap.tsx        # Interactive SVG map
│   ├── LoadingSpinner.tsx  # Loading states
│   ├── ProductCard.tsx     # Product display card
│   └── SearchBar.tsx       # Search input component
├── contexts/               # React context providers
│   └── AuthContext.tsx     # Authentication state management
├── data/                   # Application data
│   └── giProducts.ts       # 80+ GI products database
├── pages/                  # Application pages
│   ├── HomePage.tsx        # Landing page with map
│   ├── StateDetailsPage.tsx # State-specific products
│   ├── ProductDetailsPage.tsx # Individual product details
│   ├── ExploreProductsPage.tsx # All products with filters
│   ├── AboutPage.tsx       # About GI-Tagged India
│   └── LoginPage.tsx       # Authentication page
├── supabase/               # Supabase backend
│   └── functions/
│       └── server/
│           ├── index.tsx   # Hono server with auth endpoints
│           └── kv_store.tsx # Key-value store utilities
├── styles/                 # Global styles
│   ├── globals.css         # Tailwind config & custom styles
│   └── animations.css      # Custom animations
├── utils/                  # Utility functions
│   ├── supabase/
│   │   └── info.tsx        # Supabase config
│   └── wikipediaHelper.ts  # Wikipedia integration
├── App.tsx                 # Main application component
└── README.md               # This file
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account (free tier available)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gi-tagged-india.git
   cd gi-tagged-india
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🔧 Supabase Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" and sign up/login
3. Create a new project
4. Wait for the database to be set up

### 2. Get Your Credentials

1. Go to **Project Settings** → **API**
2. Copy the following:
   - Project URL (`SUPABASE_URL`)
   - `anon` `public` key (`SUPABASE_ANON_KEY`)
3. Go to **Project Settings** → **API** → **Service Role**
4. Copy the `service_role` key (`SUPABASE_SERVICE_ROLE_KEY`)

### 3. Configure Authentication

1. Go to **Authentication** → **Providers**
2. Enable **Email** provider
3. (Optional) Disable email confirmations for testing:
   - Go to **Authentication** → **Settings**
   - Toggle off "Enable email confirmations"

### 4. Deploy Edge Function (if needed)

The Supabase Edge Function at `/supabase/functions/server/index.tsx` handles:
- User signup with auto-confirmation
- User authentication
- Protected API routes

If using Figma Make, this is automatically deployed. For manual deployment:

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Deploy functions
supabase functions deploy server
```

## 🚀 Deployment to Vercel

### Quick Deploy

Click the button below to deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gi-tagged-india)

### Manual Deployment

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/gi-tagged-india.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build` or `yarn build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install` or `yarn install`

3. **Add Environment Variables**
   
   In Vercel project settings → Environment Variables, add:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Deploy**
   
   Click "Deploy" and wait for the build to complete

5. **Set up Supabase Edge Functions**
   
   Your Supabase Edge Functions need to be deployed separately:
   - They are already deployed if using Figma Make
   - For manual setup, use Supabase CLI (see [Supabase Setup](#supabase-setup))

### Vercel Configuration

Create a `vercel.json` file in your root directory for optimal configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# For development/testing only (DO NOT COMMIT)
# SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

⚠️ **Important**: 
- Never commit `.env` files to Git
- Add `.env` to your `.gitignore`
- The `SUPABASE_SERVICE_ROLE_KEY` should only be used server-side (Supabase Edge Functions)
- In Vercel, add environment variables through the dashboard

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server at localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build locally

# Linting & Formatting
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Supabase (if using CLI)
supabase start       # Start local Supabase
supabase functions deploy  # Deploy edge functions
supabase db push     # Push database changes
```

## 🎯 Application Features

### Authentication System
- **Email/Password Signup** - Secure user registration
- **Login/Logout** - Session-based authentication
- **Protected Routes** - Access control for authenticated users
- **User Profile** - Display user info in header
- **Persistent Sessions** - Stay logged in across page refreshes

### Product Database
- **80+ GI Products** - Comprehensive coverage of all Indian states
- **6 Categories**: Handicraft, Agriculture, Food, Textile, Natural, Others
- **Rich Metadata**: Name, state, description, significance, year registered
- **Wikipedia Links** - Direct links to detailed information

### Interactive Map
- **SVG-based India Map** - Clickable state boundaries
- **Hover Effects** - Visual feedback on state hover
- **State Navigation** - Click to view state-specific products
- **Responsive Design** - Works on all screen sizes

### Search & Filter
- **Real-time Search** - Instant search results as you type
- **Category Filters** - Filter by product category
- **State Filters** - View products from specific states
- **Combined Filtering** - Search + category + state filters

### UI/UX Features
- **Smooth Animations** - Motion-powered transitions
- **Loading States** - Skeleton loaders and spinners
- **Toast Notifications** - User feedback for actions
- **Back to Top Button** - Quick navigation on long pages
- **Breadcrumb Navigation** - Clear navigation paths
- **Mobile Menu** - Responsive hamburger menu

## 🎨 Design System

### Colors
- **Saffron**: `#FF9933` - Primary accent, buttons, highlights
- **White**: `#FFFFFF` - Background, cards
- **Green**: `#138808` - Secondary accent, success states
- **Blue**: `#000080` - Links, info states
- **Gray Scale**: Various shades for text and borders

### Typography
- **Headings**: System font stack (San Francisco, Segoe UI, etc.)
- **Body**: Optimized for readability
- **Custom CSS Variables**: Defined in `/styles/globals.css`

### Components
- **Cards**: Soft shadows, rounded corners (8px)
- **Buttons**: Gradient backgrounds, hover effects
- **Inputs**: Clean borders, focus states
- **Badges**: Category indicators with color coding

## 🧪 Testing User Authentication

### Test Account
For development/testing, you can create a test account:

1. Click "Sign Up" on the login page
2. Enter any email (e.g., `test@example.com`)
3. Enter a password (minimum 6 characters)
4. Enter your name
5. Click "Create Account"

Note: Email confirmation is automatically bypassed for easier testing.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Geographical Indications Registry** - For GI product information
- **Wikipedia** - For detailed product descriptions
- **Supabase** - For backend infrastructure
- **Shadcn/ui** - For beautiful UI components
- **Tailwind CSS** - For utility-first styling
- **Lucide** - For icon library

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ for preserving and promoting India's cultural heritage**

*GI-Tagged India - Discover, Explore, Celebrate India's Authentic Products*
