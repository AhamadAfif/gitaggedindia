# 🛠 Technology Stack - GI-Tagged India

Complete overview of all technologies, libraries, and tools used to build this application.

## 🎯 Core Technologies

### Frontend Framework
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **React** | 18.2+ | UI Library | [react.dev](https://react.dev) |
| **TypeScript** | 5.3+ | Type Safety | [typescriptlang.org](https://www.typescriptlang.org) |
| **Vite** | 5.0+ | Build Tool & Dev Server | [vitejs.dev](https://vitejs.dev) |

### Styling & Design

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Tailwind CSS** | 4.0 | Utility-first CSS Framework | [tailwindcss.com](https://tailwindcss.com) |
| **Shadcn/ui** | Latest | Pre-built React Components | [ui.shadcn.com](https://ui.shadcn.com) |
| **CSS Modules** | - | Scoped Styling | - |
| **PostCSS** | 8.4+ | CSS Processing | [postcss.org](https://postcss.org) |

### Backend & Database

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Supabase** | Latest | Backend-as-a-Service | [supabase.com/docs](https://supabase.com/docs) |
| **PostgreSQL** | 15+ | Database (via Supabase) | [postgresql.org](https://www.postgresql.org) |
| **Supabase Auth** | Latest | User Authentication | [supabase.com/auth](https://supabase.com/auth) |
| **Supabase Edge Functions** | Latest | Serverless Functions | [supabase.com/edge-functions](https://supabase.com/edge-functions) |

### Server Framework

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Hono** | Latest | Lightweight Web Framework | [hono.dev](https://hono.dev) |
| **Deno** | Latest | Runtime for Edge Functions | [deno.land](https://deno.land) |

## 📦 Key Libraries

### UI Components & Icons

```json
{
  "lucide-react": "latest",           // Icon library (300+ icons)
  "class-variance-authority": "latest", // Component variants
  "clsx": "latest",                   // Conditional classNames
  "tailwind-merge": "latest"          // Merge Tailwind classes
}
```

### Animation & Interactions

```json
{
  "motion": "^10.16.0",              // Animation library (formerly Framer Motion)
  "react-spring": "optional"          // Alternative animation library
}
```

### Forms & Validation

```json
{
  "react-hook-form": "7.55.0",       // Form state management
  "zod": "optional"                   // Schema validation
}
```

### Utilities

```json
{
  "date-fns": "latest",              // Date utilities
  "sonner": "2.0.3"                  // Toast notifications
}
```

### Data Fetching

```json
{
  "@supabase/supabase-js": "^2.39.0" // Supabase client library
}
```

## 🏗 Architecture

### Project Structure

```
Frontend (React + TypeScript)
    ↓
Supabase Client (@supabase/supabase-js)
    ↓
Supabase Backend
    ├── Authentication (JWT-based)
    ├── PostgreSQL Database
    ├── Edge Functions (Hono + Deno)
    └── Storage (File uploads)
```

### Authentication Flow

```
User Input → React Form → Supabase Auth
    ↓
JWT Token Generated
    ↓
Stored in Browser (localStorage)
    ↓
Included in API Requests
    ↓
Verified by Supabase
```

### Data Flow

```
User Action → React Component → Auth Context
    ↓
API Request with JWT
    ↓
Supabase Edge Function (Hono Server)
    ↓
Database Query/Update
    ↓
Response → React Component → UI Update
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors - Indian Tri-color */
--saffron: #FF9933;     /* Primary accent, CTA buttons */
--white: #FFFFFF;       /* Backgrounds, cards */
--green: #138808;       /* Secondary accent, success */
--blue: #000080;        /* Links, information */

/* Grays */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-600: #4B5563;
--gray-900: #111827;
```

### Typography

```css
/* Headings */
h1: 2.5rem (40px) - Page titles
h2: 2rem (32px) - Section titles  
h3: 1.5rem (24px) - Card titles
h4: 1.25rem (20px) - Subsections

/* Body */
p: 1rem (16px) - Regular text
small: 0.875rem (14px) - Captions
```

### Spacing System

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
(Tailwind default spacing scale)
```

### Border Radius

```
sm: 4px
md: 8px (default for cards)
lg: 12px
full: 9999px (circular)
```

## 🧩 Component Architecture

### Custom Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Header` | `/components/Header.tsx` | Navigation with auth |
| `Footer` | `/components/Footer.tsx` | Site footer |
| `IndiaMap` | `/components/IndiaMap.tsx` | Interactive SVG map |
| `ProductCard` | `/components/ProductCard.tsx` | Product display |
| `SearchBar` | `/components/SearchBar.tsx` | Search functionality |
| `FilterChips` | `/components/FilterChips.tsx` | Category filters |
| `CategoryIllustrations` | `/components/CategoryIllustrations.tsx` | SVG illustrations |

### Shadcn/ui Components

```
Button, Card, Input, Label, Badge, Dialog, Dropdown,
Tabs, Accordion, Alert, Avatar, Checkbox, Select,
Sheet, Skeleton, Toast, Tooltip, and 20+ more
```

## 🔌 APIs & Integrations

### Supabase APIs

```typescript
// Authentication
supabase.auth.signUp()
supabase.auth.signInWithPassword()
supabase.auth.signOut()
supabase.auth.getSession()

// Edge Functions
fetch('/functions/v1/make-server-c442bf0e/...')
```

### External APIs

```typescript
// Wikipedia (for "Know More" links)
https://en.wikipedia.org/wiki/{productName}
```

## 🚀 Build & Deployment

### Build Tools

| Tool | Purpose |
|------|---------|
| **Vite** | Development server, HMR, bundling |
| **TypeScript Compiler** | Type checking |
| **ESLint** | Code linting |
| **PostCSS** | CSS processing |

### Deployment Platforms

| Platform | Purpose | Cost |
|----------|---------|------|
| **Vercel** | Frontend hosting | Free tier |
| **Supabase** | Backend & database | Free tier |

### Build Process

```bash
1. npm install          # Install dependencies
2. tsc --noEmit        # Type check
3. eslint .            # Lint code
4. vite build          # Bundle for production
5. Output: /dist       # Static files ready to deploy
```

## 🧪 Development Tools

### Code Quality

```json
{
  "eslint": "^8.55.0",                    // Linting
  "@typescript-eslint/parser": "^6.0.0",  // TS support
  "eslint-plugin-react-hooks": "^4.6.0"   // React rules
}
```

### Type Definitions

```json
{
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0"
}
```

## 📊 Performance Optimizations

### Implemented Optimizations

✅ **Code Splitting** - Vite automatic chunking  
✅ **Tree Shaking** - Remove unused code  
✅ **Image Optimization** - SVG illustrations (scalable, small size)  
✅ **Lazy Loading** - Components loaded on demand  
✅ **Memoization** - React.memo for expensive components  
✅ **CSS Purging** - Tailwind removes unused styles  

### Bundle Size

```
Estimated Production Bundle:
- Main JS: ~150-200 KB (gzipped)
- CSS: ~20-30 KB (gzipped)
- Total: ~170-230 KB (very fast!)
```

## 🔒 Security Features

### Authentication Security

- ✅ JWT-based authentication
- ✅ HTTP-only cookies (Supabase managed)
- ✅ Password hashing (bcrypt via Supabase)
- ✅ CORS protection
- ✅ XSS protection (React escaping)
- ✅ CSRF tokens (Supabase managed)

### Data Security

- ✅ Environment variables for secrets
- ✅ HTTPS only (Vercel enforced)
- ✅ Row Level Security (RLS) ready
- ✅ SQL injection protection (Supabase)

## 🌐 Browser Support

### Supported Browsers

```
Chrome: 90+
Firefox: 88+
Safari: 14+
Edge: 90+
Mobile Safari: 14+
Mobile Chrome: 90+
```

### Required Features

- ES2015 (ES6)
- Fetch API
- CSS Grid
- CSS Flexbox
- LocalStorage
- WebSockets (for Supabase realtime)

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Mobile-First Approach

All styles are mobile-first, with progressive enhancement for larger screens.

## 🔄 State Management

### State Management Strategy

| Type | Solution | Location |
|------|----------|----------|
| **Auth State** | React Context | `/contexts/AuthContext.tsx` |
| **Local State** | React useState | Individual components |
| **Form State** | React Hook Form | Form components |
| **Server State** | Supabase Client | API calls |

### No Global State Library Needed

This application doesn't require Redux or similar because:
- Auth state managed by Context API
- Most data fetched on-demand
- Minimal shared state between components

## 📝 Code Standards

### TypeScript Configuration

```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "esModuleInterop": true,
  "skipLibCheck": true
}
```

### Naming Conventions

```
Components: PascalCase (e.g., ProductCard.tsx)
Functions: camelCase (e.g., navigateToHome)
Constants: UPPER_SNAKE_CASE (e.g., API_URL)
Interfaces: PascalCase with I prefix (e.g., IProduct)
Types: PascalCase (e.g., PageType)
```

## 🎓 Learning Resources

### Official Documentation

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [Hono Documentation](https://hono.dev)

### Recommended Tutorials

- React TypeScript Cheatsheet
- Tailwind CSS Best Practices
- Supabase Auth Tutorial
- Vercel Deployment Guide

## 📊 Analytics & Monitoring

### Available Tools

```
Vercel Analytics (Free)
- Page views
- User sessions  
- Performance metrics
- Web Vitals

Supabase Dashboard
- Auth metrics
- API usage
- Database queries
- Function logs
```

## 🆙 Upgrade Path

### Future Enhancements (Optional)

```
✨ Add Zustand for complex state
✨ Implement React Query for server state
✨ Add Storybook for component library
✨ Integrate Sentry for error tracking
✨ Add Playwright for E2E testing
✨ Implement PWA features
✨ Add i18n for multiple languages
```

---

**Last Updated**: December 2024  
**Maintainer**: GI-Tagged India Team  
**License**: MIT

*This tech stack provides a modern, scalable foundation for the GI-Tagged India application.*
