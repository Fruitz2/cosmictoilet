# Generate Favicon from Logo

## Quick Method (Online):

1. Go to: https://favicon.io/favicon-converter/
2. Upload: `/public/logo.png`
3. Download the favicon package
4. Extract and replace these files in `/public/`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

## Or use ImageMagick (Command line):

```bash
# Install imagemagick if needed
sudo apt-get install imagemagick

# Generate favicon from logo
convert public/logo.png -resize 32x32 public/favicon-32x32.png
convert public/logo.png -resize 16x16 public/favicon-16x16.png
convert public/favicon-32x32.png public/favicon.ico
convert public/logo.png -resize 180x180 public/apple-touch-icon.png
convert public/logo.png -resize 192x192 public/android-chrome-192x192.png
convert public/logo.png -resize 512x512 public/android-chrome-512x512.png
```

## Current Status:
- ✅ Metadata configured to use favicon
- ⏳ Placeholder favicon.ico created (empty)
- 🔧 Need to generate actual favicons from logo.png
