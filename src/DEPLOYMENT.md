# 🚀 Deployment Guide - GI-Tagged India

This guide will walk you through deploying the GI-Tagged India application to **Vercel** with **Supabase** backend.

## 📋 Prerequisites Checklist

Before you begin, make sure you have:

- [ ] GitHub account
- [ ] Vercel account (free tier is sufficient)
- [ ] Supabase account (free tier is sufficient)
- [ ] Node.js 18+ installed locally (for testing)

## 🎯 Step-by-Step Deployment

### Part 1: Set Up Supabase (5 minutes)

#### 1.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click **"Start your project"** → Sign up/Login
3. Click **"New Project"**
4. Fill in:
   - **Name**: `gi-tagged-india` (or any name you prefer)
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your target audience (e.g., Mumbai for India)
5. Click **"Create new project"**
6. Wait 2-3 minutes for setup to complete

#### 1.2 Configure Authentication

1. In your Supabase dashboard, go to **Authentication** → **Providers**
2. Make sure **Email** provider is enabled (should be by default)
3. Go to **Authentication** → **URL Configuration**
4. Add your site URL once deployed (you can update this later)

#### 1.3 Get Your API Keys

1. Go to **Project Settings** (gear icon) → **API**
2. Copy and save these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: Long string starting with `eyJ...`
   - **service_role key**: Another long string (keep this secret!)

> ⚠️ **Important**: Never share your `service_role` key publicly!

### Part 2: Deploy Edge Functions to Supabase (Optional - Auto-deployed in Figma Make)

If you're deploying manually (not using Figma Make):

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project (use Project Ref from dashboard)
supabase link --project-ref your-project-ref

# Deploy the Edge Function
supabase functions deploy server

# Set environment variables for the function
supabase secrets set SUPABASE_URL=your-supabase-url
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
supabase secrets set SUPABASE_ANON_KEY=your-anon-key
```

### Part 3: Deploy to Vercel (5 minutes)

#### 3.1 Push Code to GitHub

If you haven't already:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - GI-Tagged India"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/gi-tagged-india.git
git branch -M main
git push -u origin main
```

#### 3.2 Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository:
   - Click **"Import Git Repository"**
   - Select your `gi-tagged-india` repository
4. Configure project:
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)

#### 3.3 Add Environment Variables

Before deploying, add these environment variables:

1. Click **"Environment Variables"**
2. Add the following:

```
VITE_SUPABASE_URL
```
Value: Your Supabase Project URL (from Step 1.3)

```
VITE_SUPABASE_ANON_KEY
```
Value: Your Supabase anon public key (from Step 1.3)

3. Make sure to add them for:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

#### 3.4 Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Once deployed, click **"Visit"** to see your live site!

### Part 4: Update Supabase URL Configuration

1. Copy your Vercel deployment URL (e.g., `https://gi-tagged-india.vercel.app`)
2. Go back to Supabase Dashboard
3. Navigate to **Authentication** → **URL Configuration**
4. Add your Vercel URL to **Site URL**
5. Add to **Redirect URLs**: 
   - `https://your-app.vercel.app/**`
   - `http://localhost:5173/**` (for local development)

## 🧪 Testing Your Deployment

### Test Authentication

1. Visit your deployed site
2. You should see the login page
3. Click **"Sign Up"**
4. Enter test credentials:
   - Email: `test@example.com`
   - Password: `test123456`
   - Name: `Test User`
5. Click **"Create Account"**
6. You should be redirected to the home page!

### Test Navigation

- Click on states in the map
- Use the search bar
- Filter by categories
- Check product details pages
- Test on mobile device

## 🔄 Updating Your Deployment

Every time you push to GitHub, Vercel will automatically redeploy:

```bash
# Make changes to your code
git add .
git commit -m "Your update message"
git push origin main
```

Vercel will:
1. Detect the push
2. Build your project
3. Deploy automatically
4. Send you an email when complete

## 🛠 Troubleshooting

### Issue: "Failed to fetch" errors

**Solution**: Check your environment variables in Vercel:
- Go to Project Settings → Environment Variables
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct
- Redeploy if you made changes

### Issue: Authentication not working

**Solution**: 
1. Check Supabase Authentication settings
2. Verify your Vercel URL is added to Supabase redirect URLs
3. Check browser console for specific errors

### Issue: Build fails

**Solution**:
1. Check Vercel build logs for specific error
2. Ensure all dependencies are in `package.json`
3. Try building locally: `npm run build`
4. Check that Node version is 18+ in Vercel settings

### Issue: "Module not found" errors

**Solution**:
1. Clear Vercel cache: Project Settings → Clear Cache
2. Redeploy
3. Check import paths are correct (case-sensitive!)

## 📊 Monitoring Your App

### Vercel Analytics (Free)

1. Go to your Vercel project
2. Click **"Analytics"** tab
3. View:
   - Page views
   - Visitor data
   - Performance metrics

### Supabase Dashboard

1. Go to Supabase project
2. Monitor:
   - **Auth**: User signups and logins
   - **Database**: If you add custom tables
   - **Edge Functions**: Request logs and errors

## 🔒 Security Best Practices

✅ **DO**:
- Use environment variables for all sensitive data
- Keep your `service_role` key secret (never in frontend code)
- Enable Row Level Security (RLS) if adding custom database tables
- Use HTTPS only (Vercel provides this automatically)
- Regularly update dependencies

❌ **DON'T**:
- Commit `.env` files to Git
- Share your `service_role` key
- Store sensitive data in frontend code
- Use weak passwords for admin accounts

## 📈 Scaling Your Application

### Free Tier Limits

**Vercel Free Tier**:
- 100 GB bandwidth/month
- Unlimited projects
- Automatic SSL
- Perfect for this application!

**Supabase Free Tier**:
- 500 MB database space
- 50,000 monthly active users
- 2 GB file storage
- More than enough for GI-Tagged India!

### When to Upgrade

Consider upgrading if you:
- Get >50K monthly users
- Need >500 MB database
- Want custom domains without Vercel branding
- Need priority support

## 🎉 You're Live!

Congratulations! Your GI-Tagged India application is now live and accessible to anyone in the world.

**Share your deployment**:
- Share the URL with friends and colleagues
- Add it to your portfolio
- Post on social media
- Submit to directories

### Next Steps

- [ ] Set up custom domain (optional)
- [ ] Enable Vercel Analytics
- [ ] Add Google Analytics (optional)
- [ ] Share with the community!
- [ ] Collect user feedback
- [ ] Plan new features

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **GitHub Issues**: Create an issue on your repository
- **Community**: Join Vercel and Supabase Discord servers

---

**Happy Deploying! 🚀**

*Your GI-Tagged India application is now serving users worldwide!*
