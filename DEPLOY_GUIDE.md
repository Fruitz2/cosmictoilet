# Deployment Guide for Cosmic Toilet

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `cosmictoilet`
3. Make it public
4. Don't initialize with README (we already have one)
5. Click "Create repository"

## Step 2: Push to GitHub

After creating the repo, run these commands:

```bash
cd /home/hiroshi/CascadeProjects/cosmictoilet
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to https://vercel.com/new
2. Import the `cosmictoilet` repository
3. Framework Preset: Next.js (should auto-detect)
4. Root Directory: leave as is
5. Click "Deploy"

## Step 4: Configure Domain

After deployment:

1. Go to Project Settings → Domains
2. Add `cosmictoilet.xyz`
3. Follow Namecheap setup instructions

The site will auto-deploy on every push to the main branch!
