# 🌸 Calm Space — Anxiety Relief PWA

A soft, soothing Progressive Web App with quick anxiety relief exercises and calming affirmations. Opens to a random exercise every time.

## Exercises included
- **Box Breathing** — 4-4-4-4 pattern used by Navy SEALs
- **4-7-8 Breathing** — natural nervous system tranquilizer
- **3-Breath Reset** — simplest way to interrupt an anxiety spiral
- **5-4-3-2-1 Grounding** — use your senses to anchor to the present
- **Quick Body Scan** — release tension from jaw to feet
- **Safe Place Visualization** — guided mental sanctuary

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Generate PWA icons
npm install canvas
node generate-icons.js

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
npm run preview
```

## Installing as an app
After running `npm run build && npm run preview`, open the preview URL in Chrome or Edge. An "Install" prompt will appear at the bottom of the screen — tap it to add Calm Space to your home screen or desktop.

On iOS Safari: tap the Share button → "Add to Home Screen".

## Deploy
Upload the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages). The PWA works fully offline after first load.
