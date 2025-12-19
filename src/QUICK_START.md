# ⚡ Quick Start Guide - GI-Tagged India

Get your GI-Tagged India application running in **under 10 minutes**!

## 🚀 Super Fast Setup (Local Development)

### Step 1: Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/yourusername/gi-tagged-india.git
cd gi-tagged-india

# Install dependencies
npm install
```

### Step 2: Set Up Supabase (3 minutes)

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com) → Sign up/Login
   - Click "New Project"
   - Fill in details and create

2. **Get Your Keys**
   - Go to Project Settings → API
   - Copy:
     - Project URL
     - `anon` `public` key

### Step 3: Configure Environment (1 minute)

```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your Supabase credentials
# VITE_SUPABASE_URL=https://xxxxx.supabase.co
# VITE_SUPABASE_ANON_KEY=eyJhbG...
```

Or manually create `.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### Step 4: Run the App (1 minute)

```bash
# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

### Step 5: Create Your First Account (30 seconds)

1. The app will show a login page
2. Click "Sign Up"
3. Enter:
   - Email: `test@example.com`
   - Password: `password123`
   - Name: `Test User`
4. Click "Create Account"
5. You're in! 🎉

---

## 🌐 Deploy to Vercel (5 minutes)

### Option A: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Then add environment variables in Vercel dashboard.

### Option B: Manual Deploy

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/gi-tagged-india.git
git push -u origin main

# 2. Import to Vercel
# - Go to vercel.com
# - Click "New Project"
# - Import your GitHub repo
# - Add environment variables:
#   VITE_SUPABASE_URL
#   VITE_SUPABASE_ANON_KEY
# - Click "Deploy"

# 3. Done! Your app is live 🚀
```

---

## 🛠 What's Included?

✅ **Full Authentication System**
- Email/password signup and login
- User sessions with auto-persistence
- Logout functionality

✅ **80+ GI Products**
- Covering all 28 states and 8 UTs
- Custom SVG illustrations
- Wikipedia integration

✅ **Interactive Features**
- Clickable India map
- Advanced search and filters
- Product detail pages
- Mobile responsive

✅ **Production Ready**
- Supabase backend
- TypeScript for type safety
- Tailwind CSS for styling
- Optimized build with Vite

---

## 📝 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run type-check   # TypeScript check
npm run lint         # Lint code
```

---

## 🐛 Troubleshooting

### ❌ "Supabase client error"

**Fix**: Check your `.env` file has correct values
```bash
cat .env  # Verify your keys are there
```

### ❌ "Cannot connect to database"

**Fix**: Make sure your Supabase project is active
- Go to your Supabase dashboard
- Check project status

### ❌ "Module not found"

**Fix**: Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### ❌ Port already in use

**Fix**: Change the port
```bash
PORT=3000 npm run dev
```

---

## 📚 Next Steps

Now that you're running, check out:

- 📖 [README.md](./README.md) - Full documentation
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- 🛠 [TECH_STACK.md](./TECH_STACK.md) - Technology details

---

## 🎯 Key Features to Try

1. **Click on states** in the India map
2. **Search for products** like "Kanjeevaram" or "Basmati"
3. **Filter by category** (Textile, Food, etc.)
4. **Click "Know More"** to visit Wikipedia
5. **Test on mobile** - fully responsive!

---

## 💡 Pro Tips

🔥 **Hot Module Replacement (HMR)**: Changes appear instantly without refresh

🎨 **Tailwind Classes**: Modify styles directly in components

🔍 **TypeScript**: Get autocomplete and type checking

📱 **Responsive**: Test different screen sizes with browser DevTools

---

## 🆘 Need Help?

- Check [README.md](./README.md) for detailed docs
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review [TECH_STACK.md](./TECH_STACK.md) for technical details
- Open an issue on GitHub

---

**That's it! You're now running GI-Tagged India locally! 🎊**

Happy coding! 🚀
