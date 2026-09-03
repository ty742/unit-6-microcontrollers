# Unit 6: Microcontrollers — Interactive Presentation & Delivery System

[![Live Demo](https://img.shields.io/badge/Live%20Portal-GitHub%20Pages-00979d?style=for-the-badge&logo=github)](https://ty742.github.io/unit-6-microcontrollers/)

🌐 **Live Portal**: [https://ty742.github.io/unit-6-microcontrollers/](https://ty742.github.io/unit-6-microcontrollers/)

A modern, responsive, dark-mode engineering presentation deck and interactive delivery system for **Unit 6: Microcontrollers**.

Designed for seamless deployment to **GitHub Pages** and direct embedding as a **Microsoft Teams Channel Tab**.

---

## 📁 Repository Structure

```
.
├── index.html                   # Main Course Portal & Week Selector
├── README.md                    # This deployment & usage guide
├── shared/                      # Shared Presentation Design System & Engine
│   ├── css/
│   │   ├── presentation.css     # Dark engineering UI theme (Arduino teal / electric cyan)
│   │   └── form-drawer.css      # Microsoft Forms side-drawer & modal styling
│   └── js/
│       ├── presentation-engine.js # Slide controls, keyboard shortcuts, swipe, progress bar
│       ├── timer.js             # Countdown widgets (Start / Pause / Reset)
│       └── form-drawer.js       # MS Forms drawer toggle & quick-jump handler
└── week1/                       # Week 1: Engineering Baseline
    ├── index.html               # 18-Slide Interactive Slide Deck + Form Drawer
    ├── forms-guide.md           # Copy-paste Microsoft Forms setup template (5 sections)
    └── wokwi-diagram.json       # Wokwi 5V + 330Ω + LED circuit simulation file
```

---

## 🚀 Quick Start (Local & Web Preview)

### Option 1: Open Directly in Any Browser
No web server required. Simply double-click [`presentation/index.html`](file:///home/tayo/projects/agy2/unit6%20v2/presentation/index.html) or [`presentation/week1/index.html`](file:///home/tayo/projects/agy2/unit6%20v2/presentation/week1/index.html) to open in Chrome, Edge, Safari, or Firefox.

### Option 2: Run with a Local Server
```bash
# Using Python
python3 -m http.server 8000

# Open http://localhost:8000/presentation/
```

---

## ⌨️ Presentation Keyboard Shortcuts

| Key | Action |
|---|---|
| `Right Arrow` / `Space` / `Page Down` | Next Slide |
| `Left Arrow` / `Page Up` | Previous Slide |
| `Home` | Jump to First Slide |
| `End` | Jump to Last Slide |
| `F` | Toggle Full Screen Mode |
| `Esc` | Close Microsoft Forms Side-Drawer |

---

## 📝 Setting Up the Microsoft Form for Deliverables

1. Open [`presentation/week1/forms-guide.md`](file:///home/tayo/projects/agy2/unit6%20v2/presentation/week1/forms-guide.md).
2. Go to [Microsoft Forms](https://forms.office.com) and create a new Form.
3. Copy and paste the 5 sections and questions from the guide.
4. Copy your Form's **Share / Embed URL**.
5. In [`presentation/week1/index.html`](file:///home/tayo/projects/agy2/unit6%20v2/presentation/week1/index.html), locate line ~440 and update the `iframe src`:
   ```html
   <iframe 
     id="forms-iframe"
     class="drawer-iframe" 
     src="https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR-FORM-ID" ...>
   </iframe>
   ```

---

## 🌐 Deploying to Microsoft Teams via GitHub Pages

### 1. Enabling GitHub Pages
1. Push your repository to **GitHub**.
2. Navigate to your repository **Settings** → **Pages**.
3. Under **Branch**, select `main` (or your default branch) and `/ (root)` folder (or configure GitHub Actions).
4. Click **Save**. Your site is published at:
   [https://ty742.github.io/unit-6-microcontrollers/](https://ty742.github.io/unit-6-microcontrollers/)

### 2. Embedding into Microsoft Teams
1. In your **Microsoft Teams** class/team channel, click the **`+` (Add a tab)** icon in the top tab bar.
2. Select **Website**.
3. Tab Name: `Unit 6 Presentation` (or `Week 1 Baseline`).
4. URL: Paste your GitHub Pages link (`https://ty742.github.io/unit-6-microcontrollers/` or `https://ty742.github.io/unit-6-microcontrollers/week1/index.html`).
5. Click **Save**. Students can now view the slides, use interactive countdown timers, and fill out their Microsoft Form directly within Microsoft Teams.

---

## 🧩 Adding Future Weeks (Week 2, Week 3, etc.)

To add a new week:
1. Duplicate the `week1/` folder to `week2/`.
2. Update the slide content in `week2/index.html` (all shared styles and scripts in `shared/` are reused automatically).
3. Add a new card link in [`index.html`](file:///home/tayo/projects/work/unit6_v2/index.html).

---

## 🤝 How to Contribute

We welcome contributions to expand weekly modules, improve interactive laboratory simulations, and enhance curriculum alignment.

Please read our full [**Contribution Guide (CONTRIBUTING.md)**](file:///home/tayo/projects/work/unit6_v2/CONTRIBUTING.md) for detailed guidelines on:
- Resource pack alignment & pedagogical principles.
- Reusing the shared engineering design system.
- Testing keyboard navigation, timers, and Microsoft Forms drawer integration.
- Submitting Pull Requests.


