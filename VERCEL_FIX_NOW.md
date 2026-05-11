# Fix Vercel - Disconnect & Reconnect

Since you can't choose a different commit, do this:

## Option 1: Disconnect GitHub (RECOMMENDED)
1. **Cancel** the redeploy dialog
2. Go to **Settings** → **Git** 
3. Click **Disconnect GitHub Repository**
4. Click **Connect Git Repository**
5. Select **GitHub**
6. Choose **Fruitz2/cosmictoilet**
7. Deploy will start automatically with LATEST commit

## Option 2: Delete & Re-import
1. Go to **Settings** → **Advanced**
2. Scroll down to **Delete Project**
3. Delete the project
4. Go to https://vercel.com/new
5. Import **cosmictoilet** fresh
6. Deploy

## Option 3: Force Git Update
1. **Cancel** the redeploy
2. Go to **Settings** → **Git**
3. Change Production Branch to something else (like `master`)
4. Save
5. Change it back to `main`
6. Save
7. Click **Redeploy** from project overview

The problem is Vercel cached the old commit. Any of these will force it to pull the latest.
