# DELETE PROJECT AND RE-IMPORT

## Vercel is STUCK on commit b344efb!

Even after reconnecting, it's still using the OLD commit without the CSS fix.

## Solution: Delete and Re-import

### Step 1: Delete Project in Vercel
1. Go to your cosmictoilet project in Vercel
2. **Settings → Advanced**
3. Scroll to bottom
4. **Delete Project**
5. Type project name to confirm
6. Delete

### Step 2: Create New Project
1. Go to: https://vercel.com/new
2. Click **Import Git Repository**
3. Search for **cosmictoilet**
4. Click **Import**
5. **Deploy**

This will force it to use the LATEST commit (c1d0171) which includes:
- ✅ CSS border-border fix (commit 733a37a)
- ✅ All other fixes

The domain cosmictoilet.xyz will need to be re-added after deployment.
