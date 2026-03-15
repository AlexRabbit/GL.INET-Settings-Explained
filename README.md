<div align="center">

<img src="https://placehold.co/1200x280/1a1a2e/ff69b4?text=GL.iNet+Settings+Explained+%E2%9C%A8+Every+setting+explained." width="100%" alt="GL.iNet Settings Explained — Every setting explained." />

# ✨ GL.iNet Settings Explained ✨

### **Every setting on your modem — explained like never before.**

[![GL.iNet](https://img.shields.io/badge/GL.iNet-Community_Guide-ff69b4?style=for-the-badge&labelColor=1a1a2e)](https://www.gl-inet.com/)
[![Languages](https://img.shields.io/badge/16+_Languages-Translations-ff69b4?style=for-the-badge&labelColor=1a1a2e)](./index.html)
[![Static](https://img.shields.io/badge/100%25_Static-No_build_required-ff69b4?style=for-the-badge&labelColor=1a1a2e)](https://pages.github.com/)
[![Live](https://img.shields.io/badge/LIVE_Guide-Open_Now-00c853?style=for-the-badge&labelColor=0f0f1a)](https://alexrabbit.github.io/GL.INET-Settings-Explained/)

---

<br />

## 🌐 **The guide lives here — use it.**

<table>
<tr>
<td width="50%" align="center">

### 👉 [**OPEN THE LIVE GUIDE**](https://alexrabbit.github.io/GL.INET-Settings-Explained/) 👈

**This is the link you want.**  
Share it, bookmark it, send it to anyone with a GL.iNet modem.

</td>
</tr>
</table>

**→ [https://alexrabbit.github.io/GL.INET-Settings-Explained/](https://alexrabbit.github.io/GL.INET-Settings-Explained/) ←**

<sub>*Replace the banner above with a screenshot of the live site (e.g. save as `docs/preview.png`) for an even nicer README.*</sub>

<br />

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

</div>

---

## 📑 Table of contents *(archival index)*

| # | Section | What you'll find |
|---|---------|------------------|
| 1 | [What is this?](#-what-is-this) | Project in one glance |
| 2 | [Features](#-features) | What the guide offers |
| 3 | [Live demo](#-live-demo) | Link + how to use it |
| 4 | [Quick start](#-quick-start) | Open locally in 30 seconds |
| 5 | [Deploy to GitHub Pages](#-deploy-to-github-pages) | Publish your own copy |
| 6 | [Design & philosophy](#-design--philosophy) | Glassmorphism 2.0, UX, performance |
| 7 | [Repository structure](#-repository-structure) | Files and folders |
| 8 | [Tips & troubleshooting](#-tips--troubleshooting) | Smooth scroll, motion, etc. |
| 9 | [Author & license](#-author--license) | Who made it |

---

## 🧭 What is this?

> **A community documentation site** that walks through **every setting** on GL.iNet modems in the **same order as your device menu**. No jargon, no guesswork — plain language, example values (placeholders only), and **speed vs. security** recommendations where it matters.

Think of it as the **manual you wish came in the box**: structured like the modem UI, so you can follow along with the admin panel open.

| You get | Why it matters |
|--------|-----------------|
| 📶 **Same menu order** | INTERNET → WIRELESS → CLIENTS → CLOUD → VPN → NETWORK → FLOW CONTROL → SECURITY → APPLICATIONS → SYSTEM |
| 🔒 **Security & speed tips** | WPA3, DNSSEC, Failover vs Load Balance, port forwarding rules, admin hardening |
| 🌍 **16+ languages** | English, 简体中文, 繁體中文, Deutsch, Español, Français, and more — full translations |
| 🎨 **Modern, accessible UI** | Frost white, glassmorphism-style layout, sticky nav, smooth scroll, skip link |
| 🚫 **Privacy-first** | No real SSIDs, passwords, or IPs — only placeholders like `Your-5GHz-Network-Name` |

---

## ✨ Features

- **📖 Every setting explained** — From WAN and Wi‑Fi to DNS, DHCP, AdGuard Home, VPN, and system options.
- **⚡ Speed vs. security callouts** — Clear recommendations (e.g. WireGuard vs OpenVPN, WPA3, Randomized BSSID, Failover vs Load Balance).
- **🛡️ Extra tips from the community** — Based on real-world Flint 1 (and similar) security configs: port forwarding don’ts, Full Cone NAT, DNS over QUIC via AdGuard, firmware upgrade and backup.
- **🌐 Multi-language** — One click in the header to switch language; choice is saved.
- **📱 Responsive** — Works on desktop, tablet, and phone; nav adapts.
- **⚙️ Zero build** — Plain HTML, CSS, and JS. Drag & drop to GitHub and it runs.

---

## 🌐 Live demo

The canonical, always-up-to-date version of the guide is here:

<table>
<tr>
<td align="center" width="100%">

### 🔗 **[https://alexrabbit.github.io/GL.INET-Settings-Explained/](https://alexrabbit.github.io/GL.INET-Settings-Explained/)**

Use this link to **read the guide**, **share it** with other GL.iNet users, or **send it to support** when explaining your setup.

</td>
</tr>
</table>

*No install, no clone — just open the URL and scroll (or use the sidebar to jump to a section).*

---

## 🚀 Quick start

Want to run the guide **locally** or **edit it**?

```bash
# Clone the repo
git clone https://github.com/AlexRabbit/GL.INET-Settings-Explained.git
cd GL.INET-Settings-Explained

# Option A: open the HTML file in your browser
start index.html   # Windows
open index.html    # macOS
xdg-open index.html  # Linux

# Option B: use a local server (recommended for testing)
python -m http.server 8000   # Python 3
# or
npx serve .                 # Node
```

Then open **http://localhost:8000** (or the port you used).

---

## 📤 Deploy to GitHub Pages

You can host **your own copy** of the guide (or the official one) on GitHub Pages in a few steps.

### Step 1 — Put the files on GitHub

1. Create a **new repository** on GitHub (e.g. `GL.INET-Settings-Explained`). Leave it **empty** (no README, .gitignore, or license yet).
2. Upload **all** project files to the **root** of the repo:
   - Drag and drop the whole folder contents, **or** use “uploading an existing file” and add everything.
   - Ensure these are at the **repo root** (not inside an extra folder):
     - `index.html`
     - `.nojekyll` *(important: tells GitHub Pages to serve plain HTML, no Jekyll)*
     - `README.md`
     - The `assets/` folder (with `css/`, `js/`, and optionally `fonts/` inside).

**Using Git from the command line:**

```bash
cd gli-modem-guide
git init
git add .
git commit -m "Initial commit: GL.iNet Settings Explained"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2 — Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. **Branch:** `main` (or `master`), folder **/ (root)**.
4. Click **Save**.

After a minute or two, the site will be live at:

**`https://<your-username>.github.io/<repo-name>/`**

Example: **https://alexrabbit.github.io/GL.INET-Settings-Explained/**

### Why it works

| Detail | Reason |
|--------|--------|
| **Relative paths** | All links use relative paths (`assets/css/style.css`, etc.), so the site works when served from `username.github.io/repo-name/`. |
| **`.nojekyll`** | Tells GitHub Pages to serve the repo as **static files** (no Jekyll). Without it, some assets or paths may not behave correctly. |
| **No build step** | Just HTML, CSS, and JS — no bundler or framework. Drag & drop and go. |

If **`.nojekyll`** didn’t upload (it’s a hidden file), add it on GitHub: **Add file → Create new file**, name it `.nojekyll`, leave the body empty, and commit.

---

## 🎨 Design & philosophy

The site is built to feel **premium**, **clear**, and **easy to navigate** — with a touch of **Glassmorphism 2.0** and editorial structure.

| Principle | How it shows up |
|-----------|------------------|
| **Glassmorphism 2.0** | Frost white header, dark glass footer, translucent cards, subtle depth and blur. |
| **Organic layout** | Soft blobs and orbs in the background, gentle motion; content is structured but not rigid. |
| **Archival index aesthetic** | Section numbers (00, 01, 02…), sidebar that mirrors the modem menu, clear hierarchy. |
| **Micro-interactions** | Language selector, smooth scroll to sections, sticky nav, hover states. |
| **Performance-first** | Static files only; no heavy frameworks. Fast load, good SEO, works without JS for basic reading. |
| **Accessibility** | Skip link, ARIA where needed, readable contrast, responsive layout. |

*Inspired by modern UI trends and a focus on “tactile depth” and editorial clarity — so it doesn’t feel like a generic template.*

---

## 📂 Repository structure

After cloning or uploading, the repo root should look like this:

```
├── index.html              # Single-page guide (all sections)
├── .nojekyll               # Disable Jekyll on GitHub Pages (required)
├── README.md               # This file
└── assets/
    ├── css/
    │   └── style.css       # Layout, theme, glassmorphism, components
    ├── js/
    │   ├── main.js         # Nav, smooth scroll, language selector
    │   └── translations.js # All language strings (16+ locales)
    └── fonts/              # Optional: SF Pro (see assets/fonts/README.md)
```

All paths in `index.html` are **relative**, so the site works when published at `username.github.io/repo-name/`.

---

## 💡 Tips & troubleshooting

| Topic | What to do |
|-------|------------|
| **Smooth scroll not working** | If clicking a menu item jumps instead of scrolling smoothly: **Brave** → `brave://settings/appearance` → turn off “Reduce motion”. **Windows** → Settings → Accessibility → Visual effects → **Animation effects** = On. **macOS** → Accessibility → Display → **Reduce motion** = Off. |
| **Language not switching** | Hard refresh (Ctrl+F5 / Cmd+Shift+R). Language choice is stored in `localStorage`. |
| **Want to add a screenshot here** | Take a screenshot of [the live guide](https://alexrabbit.github.io/GL.INET-Settings-Explained/), add it to the repo (e.g. `docs/preview.png`), and reference it in this README with `![Preview](docs/preview.png)`. |

---

## 👤 Author & license

| | |
|---|---|
| **Made by** | [**AlexRabbit**](https://github.com/AlexRabbit) |
| **Link** | [GitHub profile](https://github.com/AlexRabbit) — also in the site footer. |
| **License** | Content is provided as-is for the GL.iNet community. **Not affiliated with GL.iNet.** |

---

<div align="center">

**🌐 Use the guide:** [**https://alexrabbit.github.io/GL.INET-Settings-Explained/**](https://alexrabbit.github.io/GL.INET-Settings-Explained/)

*Every setting explained.*

</div>
