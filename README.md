# HAVE IT • Premium Food Experience 🍽️

![Have It Website Preview](images/have-it-back.png)

A stunning, professional landing page for a premium food brand. Built with HTML5, CSS3, and vanilla JavaScript. Features countdown timer, contact form, FAQ section, testimonials, gallery lightbox, newsletter signup, and full PWA support.

**🎉 Recently Updated** - See [IMPROVEMENTS.md](IMPROVEMENTS.md) for complete list of new features!

## ✨ Features

### 🎨 **Design & UI**
- **Modern Dark Theme** with vibrant orange accents (`#ff8114`)
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - AOS (Animate on Scroll) library integration
- **Glass Morphism** - Beautiful backdrop blur effects
- **Custom Typography** - Luckiest Guy & Poppins fonts
- **Touch-Optimized** - Enhanced mobile interactions

### ⚡ **Functionality**
- **Live Countdown Timer** - Fixed launch date: April 30, 2026
- **Contact Form** - Full contact form with FormSpree integration
- **Newsletter Signup** - Real email collection via FormSpree
- **FAQ Accordion** - Expandable questions with smooth animations
- **Testimonials** - Social proof section with reviews
- **Gallery Lightbox** - Click-to-zoom images with keyboard navigation
- **Social Sharing** - WhatsApp, Twitter, Facebook share buttons

### 📱 **PWA Features**
- **Service Worker** - Offline caching support
- **Manifest.json** - Install as a mobile app
- **Optimized Assets** - WebP image support with JPEG/PNG fallback
- **Fast Loading** - Lazy loading and optimized performance

### 📊 **Analytics & Tracking**
- **Google Analytics 4** - Full event tracking
- **Meta Pixel** - Facebook/Instagram ads tracking
- **JSON-LD Schema** - Structured data for SEO
- **Event Tracking** - Newsletter signups, form submissions, clicks

### 🔧 **Technical**
- **Modular Code** - Clean, maintainable structure
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Cross-browser** - Works on all modern browsers
- **Form Validation** - Email validation and error handling
- **Security** - HTTPS ready, cookie consent

## 📸 **Screenshots**

| Mobile View | Desktop View |
|------------|-------------|
| ![Mobile](https://via.placeholder.com/300x600/ff8114/ffffff?text=Mobile+View) | ![Desktop](https://via.placeholder.com/800x400/ff8114/ffffff?text=Desktop+View) |

## 🚀 **Live Demo**

[View Live Demo](https://haveitofficial.com) *(Replace with your actual URL)*

## 📂 **Project Structure**

```
haveit-official/
├── 📄 index.html                  # Main HTML file
├── 📄 manifest.json               # PWA manifest
├── 📄 sw.js                       # Service Worker
├── 📄 README.md                   # Project overview
├── 📄 IMPROVEMENTS.md             # Complete list of improvements
├── 📄 IMAGE-OPTIMIZATION.md       # Image optimization guide
├── 📄 SSL-SETUP.md                # SSL certificate setup guide
├── 📄 generate-icons.html         # PWA icon generator tool
├── 📁 css/
│   └── 🎨 style.css               # All styles (~1200 lines)
├── 📁 js/
│   └── ⚙️ script.js               # All JavaScript (~260 lines)
└── 📁 images/
    ├── 🖼️ have-it-back.png        # Hero image (needs optimization)
    ├── 🖼️ have-it-back.webp       # Hero WebP (to be created)
    ├── 🥣 granola_1.jpeg          # Gallery image 1
    ├── 🥣 granola_1.webp          # WebP version
    ├── 🥣 granola_2.jpeg          # Gallery image 2
    ├── 🥣 granola_2.webp          # WebP version
    ├── 🥣 granola_3.jpeg          # Gallery image 3
    ├── 🥣 granola_3.webp          # WebP version
    ├── 🥣 granola_4.jpeg          # Gallery image 4
    ├── 🥣 granola_4.webp          # WebP version
    ├── 📱 icon-192.png            # PWA icon (to be generated)
    └── 📱 icon-512.png            # PWA icon (to be generated)
```

## 📚 **Documentation**

- **[IMPROVEMENTS.md](IMPROVEMENTS.md)** - Complete list of all improvements and new features
- **[IMAGE-OPTIMIZATION.md](IMAGE-OPTIMIZATION.md)** - Step-by-step image optimization guide
- **[SSL-SETUP.md](SSL-SETUP.md)** - SSL certificate setup for various hosting platforms
- **[generate-icons.html](generate-icons.html)** - Tool to generate PWA icons

## 🚀 **Quick Start**

### **1. Clone the repository**
```bash
git clone https://github.com/yourusername/haveit-official.git
cd haveit-official
```

### **2. Generate PWA Icons**
```bash
# Open in browser
open generate-icons.html
# Download both icons and move to images/ folder
```

### **3. Setup Form Backend (FormSpree)**
1. Visit https://formspree.io and create account
2. Create two forms: Newsletter & Contact
3. Update form IDs in `index.html`:
   - Line 314: Newsletter form (`YOUR_FORM_ID`)
   - Line 290: Contact form (`YOUR_CONTACT_FORM_ID`)

### **4. Setup Analytics**
**Google Analytics:**
- Get GA4 Measurement ID from https://analytics.google.com
- Replace `G-XXXXXXXXXX` in `index.html` (lines 38, 42)

**Meta Pixel:**
- Get Pixel ID from Facebook Business Manager
- Replace `YOUR_PIXEL_ID` in `index.html` (lines 52, 55)

### **5. Optimize Images**
Follow instructions in `IMAGE-OPTIMIZATION.md` to compress hero image from 3.4MB to <500KB

### **6. Setup SSL Certificate**
Follow `SSL-SETUP.md` for detailed instructions. Recommended: Cloudflare (free + CDN)