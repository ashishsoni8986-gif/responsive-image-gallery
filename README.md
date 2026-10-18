# 📷 Lumina Gallery — Modern Responsive Image Showcase

> **Round 1 | Technical Operations Submission**  
> **Task 2**: Build a responsive image gallery using HTML, CSS, and JavaScript. It should have a grid layout, image preview on click, and Previous/Next navigation. Make sure it works well on both desktop and mobile.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Preview-blue?style=for-the-badge&logo=githubpages)](https://your-username.github.io/responsive-image-gallery/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🌟 Highlights & Features

### 1. 📐 Responsive Grid Layout
- **CSS Grid with Auto-Fill & Minmax**: Seamlessly adapts across desktops, tablets, and smartphones.
- **Fluid Breakpoints**:
  - **Desktop (>1024px)**: 4 columns with hover elevation and badge overlays.
  - **Tablet (768px – 1024px)**: 2–3 columns optimized for touch screens.
  - **Mobile (<768px)**: 1–2 fluid columns with finger-friendly tap targets ($\ge 44\text{px}$).
- **Skeleton Shimmer Loading**: Polished shimmer effect while high-resolution photography loads.

### 2. 🔍 Interactive Lightbox (Image Preview on Click)
- **Click to Preview**: Smooth modal pop-up with backdrop blur (`backdrop-filter: blur(24px)`).
- **High-Resolution Rendering**: Displays crisp 1600px photographs with spinner feedback.
- **Bottom Caption & Badges**: Shows image title, location tag, artistic description, and category.
- **Interactive Thumbnail Strip**: Scrollable mini-thumbnails at the bottom for instant navigation.

### 3. ◀️ Previous / Next Navigation
- **On-Screen Navigation**: Translucent frosted-glass floating buttons (`‹` / `›`) with circular looping.
- **Preloading Engine**: Preloads adjacent images ahead of time for instantaneous transitions without lag.
- **Slide Animations**: Smooth left/right direction-aware slide animations.

### 4. 📱 Mobile First & Touch Gestures
- **Swipe Left (`touchmove`)**: Navigate to next photo.
- **Swipe Right (`touchmove`)**: Navigate to previous photo.
- **Swipe Down (`touchmove`)**: Naturally dismisses / closes the lightbox modal (native app UX).
- **Touch Targets**: All interactive elements adhere to WCAG accessibility recommendations.

### 5. ⌨️ Full Keyboard Accessibility
| Key | Action |
| :--- | :--- |
| <kbd>→</kbd> (Arrow Right) | Next photograph |
| <kbd>←</kbd> (Arrow Left) | Previous photograph |
| <kbd>Esc</kbd> | Close lightbox modal |
| <kbd>Space</kbd> | Toggle auto slideshow |
| <kbd>F</kbd> | Toggle Fullscreen mode |
| <kbd>+</kbd> / <kbd>=</kbd> | Toggle 1.75x Zoom |
| <kbd>Enter</kbd> / <kbd>Space</kbd> (on card) | Open photo preview |

### 6. ✨ Advanced Extra Capabilities
- 🏷️ **Dynamic Category Filtering**: Instant categorization (`All`, `Nature`, `Architecture`, `Travel`, `Wildlife`, `Urban`) with live item counters.
- 🔎 **Real-Time Instant Search**: Live filter by photograph title, location, category, or description keywords with clear button.
- 🌓 **Dark / Light Theme Toggle**: Persistent mode preference saved in `localStorage`.
- ⏯️ **Auto-Play Slideshow**: Automatically advances every 3.5 seconds.
- 🔍 **Interactive Zoom**: Magnifies image 1.75x with drag/pan support.
- ⬇️ **Direct High-Res Download**: One-click download button.

---

## 📁 Project Structure

```text
responsive-image-gallery/
├── index.html       # Semantic HTML5 markup, accessibility roles & SVG iconography
├── style.css        # Responsive CSS Grid, custom properties, animations & themes
├── script.js        # Vanilla JS engine, touch handlers, keyboard shortcuts & lightbox
├── README.md        # Comprehensive documentation & deployment guide
└── .gitignore       # Git ignore rules
```

---

## 🚀 Getting Started Locally

This project requires **zero external build tools or node modules**. It runs out of the box in any modern web browser.

### Option 1: Direct File Open
Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Or using Node `npx`:
```bash
npx serve .
```
Then visit: `http://localhost:8000`

---

## 🌐 Deployment Instructions (Free & Instant)

### Deploying to GitHub Pages (Recommended for Submission)

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Responsive image gallery with lightbox and navigation"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name your repository (e.g., `responsive-image-gallery`).
   - Leave it **Public**.

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings** > **Pages** (under "Code and automation").
   - Under **Build and deployment** > **Branch**, select `main` and `/ (root)`.
   - Click **Save**.
   - Your live site will be ready at:  
     `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`

### Deploying to Vercel or Netlify (Alternative)
- **Vercel**: Import your GitHub repository on [vercel.com](https://vercel.com) and click **Deploy**.
- **Netlify**: Drag and drop the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 🤝 Submission Information

- **Task**: Round 1 — Technical Operations (Responsive Image Gallery)
- **Tech Stack**: HTML5, CSS3 Grid/Flexbox, Vanilla JavaScript ES6+
- **Features Tested**: Desktop, Tablet, Mobile responsive layout, Keyboard navigation, Touch swipe, Theme toggle, Search & Filter.
