# Vinayaga Bakery POS - Progressive Web App

A modern Point of Sale system for Vinayaga Bakery built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works on desktop and mobile devices
- **Progressive Web App (PWA)**: Installable on mobile devices
- **Offline Support**: Basic caching for offline functionality
- **Modern UI**: Built with Tailwind CSS and React
- **Real-time Dashboard**: API integration for sales data

## 📱 PWA Setup

This app is configured as a Progressive Web App. To complete the setup:

### 1. Add App Icons

Replace the placeholder files in `/public/` with actual PNG icons:

- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

**Recommended**: Create bakery-themed icons with the letter "V" or a bakery logo.

### 2. Test PWA Features

1. **Install on Mobile**:
   - Open the app in Chrome/Safari on mobile
   - Look for "Add to Home Screen" option
   - Install the app

2. **Offline Testing**:
   - Open DevTools → Network tab
   - Check "Offline" to simulate offline mode
   - The app should still load basic content

3. **Lighthouse Audit**:
   - Open DevTools → Lighthouse tab
   - Run a PWA audit to check compliance

### 3. Customize PWA Settings

Edit `/public/manifest.json` to customize:
- App name and description
- Theme colors
- Display mode
- Orientation preferences

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 PWA Checklist

- [ ] Replace placeholder icons with actual bakery-themed icons
- [ ] Test installation on Android/iOS devices
- [ ] Verify offline functionality
- [ ] Run Lighthouse PWA audit (aim for 90+ score)
- [ ] Test on different screen sizes
- [ ] Verify service worker is registered

## 🔧 Service Worker Features

- **App Shell Caching**: Caches core app files for offline use
- **Background Sync Ready**: Prepared for order synchronization
- **Cache Management**: Automatically updates cache on new deployments

## 📱 Browser Support

- Chrome/Edge (full PWA support)
- Firefox (partial PWA support)
- Safari (iOS PWA support)
- Samsung Internet (full PWA support)