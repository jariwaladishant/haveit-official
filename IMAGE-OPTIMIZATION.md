# Image Optimization Guide

## Hero Image Optimization (CRITICAL)

Your `have-it-back.png` file is **3.4MB** which is too large and will slow down your website significantly. Follow these steps to optimize it:

### Option 1: Using Online Tools (Easiest)

1. **TinyPNG** (https://tinypng.com/)
   - Upload `images/have-it-back.png`
   - Download the compressed version
   - Should reduce to ~500KB or less

2. **Squoosh** (https://squoosh.app/)
   - Upload `images/have-it-back.png`
   - Choose WebP format
   - Set quality to 80-85%
   - Download as `have-it-back.webp`
   - Also create a compressed PNG version as fallback

### Option 2: Using Command Line Tools

If you have ImageMagick installed:

```bash
# Navigate to the images folder
cd images/

# Create optimized WebP version (recommended)
convert have-it-back.png -quality 85 -define webp:method=6 have-it-back.webp

# Create optimized PNG version
convert have-it-back.png -quality 85 -strip have-it-back-optimized.png
```

If you have cwebp installed:

```bash
cwebp -q 85 have-it-back.png -o have-it-back.webp
```

### Option 3: Using Node.js (Automated)

Install sharp package:
```bash
npm install sharp
```

Create a script `optimize-images.js`:
```javascript
const sharp = require('sharp');

// Optimize hero image to WebP
sharp('images/have-it-back.png')
  .webp({ quality: 85 })
  .toFile('images/have-it-back.webp')
  .then(() => console.log('WebP version created!'));

// Optimize PNG version
sharp('images/have-it-back.png')
  .png({ quality: 85, compressionLevel: 9 })
  .toFile('images/have-it-back-optimized.png')
  .then(() => console.log('Optimized PNG created!'));
```

Run: `node optimize-images.js`

## What's Already Done

✅ Your HTML now uses `<picture>` element with WebP format
✅ Falls back to PNG for older browsers
✅ Gallery images already use WebP with JPEG fallback

## Gallery Images

Your gallery images are already well-optimized:
- granola_1.jpeg: 12K ✅
- granola_2.jpeg: 12K ✅
- granola_3.jpeg: 17K ✅
- granola_4.jpeg: 258K (could be smaller, but acceptable)

## Background Image Optimization

The background image used in CSS (`mobile-bg`) also references `have-it-back.png`. After optimizing, you can update the CSS to use the WebP version for modern browsers.

## Target Sizes

- Hero image: < 500KB (currently 3.4MB)
- Gallery images: < 100KB each
- Icons: < 50KB each

## After Optimization

1. Replace the original `have-it-back.png` with the optimized version
2. Add the new `have-it-back.webp` file to the images folder
3. Test your website loading speed at:
   - https://pagespeed.web.dev/
   - https://gtmetrix.com/

## Expected Results

- Page load time improvement: 2-3 seconds faster
- Lighthouse performance score: +20-30 points
- Better mobile experience
- Lower bandwidth costs
