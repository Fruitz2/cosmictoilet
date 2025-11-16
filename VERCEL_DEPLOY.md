# 🚀 Vercel Deployment Instructions

## ✅ GitHub Push Complete!
Repository: https://github.com/Fruitz2/cosmictoilet

## Deploy to Vercel:

### Step 1: Import to Vercel
1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Search for: **cosmictoilet**
4. Click **Import** next to the repository

### Step 2: Configure Project
- **Project Name**: cosmictoilet (or leave default)
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `.` (leave as is)
- **Build Settings**: Leave defaults
- **Environment Variables**: None needed

### Step 3: Deploy
Click **"Deploy"** button

Wait ~2-3 minutes for build to complete

### Step 4: Add Domain (cosmictoilet.xyz)

After deployment succeeds:

1. Go to **Project Settings → Domains**
2. Add domain: **cosmictoilet.xyz**
3. Choose configuration:

#### Option A: Vercel Nameservers (Easiest)
Change nameservers at Namecheap to:
- ns1.vercel-dns.com
- ns2.vercel-dns.com

#### Option B: Keep Namecheap DNS
Add these records in Namecheap:
- **A Record**: `@` → `76.76.21.21`
- **CNAME Record**: `www` → `cname.vercel-dns.com`

4. Click **"Add"** in Vercel
5. Wait for DNS propagation (5-30 mins)

## Auto-Deploy is Active!
Every push to GitHub will automatically deploy to Vercel.

## Test Links:
- Vercel Preview: `https://cosmictoilet.vercel.app`
- Production: `https://cosmictoilet.xyz` (after DNS setup)
