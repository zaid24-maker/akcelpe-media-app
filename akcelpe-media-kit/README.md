# Akcelpe Media Kit (Next.js + Tailwind CSS)

Next.js 14 (App Router, JavaScript) aur Tailwind CSS 3 me bana Akcelpe Media Kit.

## Chalane ke liye

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Content kahan edit karein

Saara content (social links, downloads, resources, projects, flyers, contract address) `data/content.js` me hai.
Kisi item ka `url` khali ('') rakhoge to woh "pending / coming soon" dikhega.

## Structure

```
app/
  layout.js        fonts, metadata, viewport
  page.js          poora page
  globals.css      theme colors (light/dark) + Tailwind
components/
  KitProvider.jsx  tab + video modal ka shared state
  Header.jsx  Hero.jsx  Hub.jsx  Resources.jsx  VideoModal.jsx  CopyButton.jsx
  Sections.jsx     Group, Projects, Flyers, Brand, Verify, Footer
data/content.js    saara editable content
tailwind.config.js colors, fonts, animation, mobile breakpoint
```

Dark mode system setting (prefers-color-scheme) ke hisaab se automatic chalta hai.
