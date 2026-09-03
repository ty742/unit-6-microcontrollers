# Contributing to Unit 6: Microcontrollers

Thank you for contributing to the **Unit 6: Microcontrollers** teaching and presentation repository. We welcome contributions that improve pedagogical clarity, enhance accessibility, add weekly presentation decks, and refine interactive laboratory components.

---

## 🧭 Contribution Principles

1. **Strict Resource Pack Alignment**:
   All slide content, learning aims, learning outcomes, schematics, code examples, and diagnostic questions must strictly align with the validated curriculum resource pack. Do not drift from official syllabus outcomes.
2. **Direct Learner Empowerment**:
   Write in a clear, supportive second-person voice (*"You are joining..."*, *"By the end of this session, you will be able to..."*), framing diagnostics as growth calibrations rather than high-pressure tests.
3. **Shared Design System Reusability**:
   Use the CSS variables and UI classes provided in [`shared/css/presentation.css`](file:///home/tayo/projects/agy2/unit6%20v2/presentation/shared/css/presentation.css) to ensure a cohesive, professional dark engineering aesthetic across all weeks.
4. **Zero External Build Step Dependency**:
   Keep slide decks runnable in standard browsers (vanilla HTML5, CSS3, ES6 JavaScript) so that tutors and students can open them locally or via GitHub Pages without complex build pipelines.

---

## 🛠️ Step-by-Step Workflow for Adding a New Week

To contribute a new weekly presentation deck (e.g. `week2`, `week3`):

### 1. Branch & Directory Setup
```bash
git checkout -b feature/week2-presentation
mkdir -p presentation/week2
```

### 2. File Requirements for Each Week
Each weekly directory should contain:
- **`index.html`**: The interactive HTML5 slide deck utilizing `shared/css/` and `shared/js/`.
- **`forms-guide.md`**: The copy-paste blueprint for the week's Microsoft Form deliverables.
- **`wokwi-diagram.json`** *(if applicable)*: Circuit simulation definitions for virtual lab steps.

### 3. Registering the New Week on the Main Hub
Add a new live card in [`presentation/index.html`](file:///home/tayo/projects/agy2/unit6%20v2/presentation/index.html):
```html
<a href="week2/index.html" class="week-card active-week">
  <div>
    <span class="week-badge">Week 2 • Live</span>
    <h3 class="week-title">Microcontroller Architecture & GPIO</h3>
    <p class="week-desc">
      Explore ATmega328P registers (DDR, PORT, PIN), pinout structure, and write digital I/O firmware.
    </p>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
    <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">16 Interactive Slides</span>
    <span class="btn btn-primary" style="padding: 6px 14px; font-size: 0.8rem;">Launch Deck →</span>
  </div>
</a>
```

---

## 🧪 How to Test Locally Before Committing

You can test the entire presentation portal and slide decks locally using any of the methods below:

### Method 1: Instant Browser Opening (Zero Server Required)
Because the codebase is built with vanilla HTML5, modern CSS3, and ES6 JavaScript:
- Navigate to the `presentation/` directory in your file explorer.
- **Double-click `index.html`** (or right-click → **Open With** → Chrome / Edge / Firefox / Safari).
- Open `week1/index.html` directly to test the slide deck standalone.

---

### Method 2: Local HTTP Server (Recommended for Accurate Embeds)
To simulate the exact GitHub Pages / web hosting environment:

**Using Python (Pre-installed on most systems):**
```bash
# From the workspace root or presentation folder
cd presentation
python3 -m http.server 8000
```
Then open your browser to:
👉 **`http://localhost:8000/index.html`** or **`http://localhost:8000/week1/index.html`**

**Using Node.js / npx (if preferred):**
```bash
cd presentation
npx -y serve
```

---

### Method 3: Visual & Functional Verification Steps
Once running locally, perform these interactive checks:

1. **Slide Flow & Transitions**:
   - Press `Right Arrow` / `Space` to advance slides.
   - Press `Left Arrow` to go back.
   - Press `F` to verify clean full-screen presentation mode.
2. **Interactive Timers**:
   - Navigate to Slide 7 (Toolbox Diagnostic) or Slide 13 (Break).
   - Click **Start** on the timer widget; verify countdown starts.
   - Click **Pause** and **Reset** to confirm state resets.
3. **Microsoft Forms Side-Drawer**:
   - Click **"📝 Open Deliverables Form"** in the top header.
   - Verify the drawer slides in smoothly from the right.
   - Click **"Pop out"** and **"✕"** (or press `Esc`) to verify drawer controls.
4. **Interactive SVG Schematic & Checklists**:
   - Inspect Slide 11 (Circuit Schematic) to verify crystal-clear vector rendering.
   - Click the checkboxes on Slide 12 (Pre-Power Safety Gate) to ensure interactive toggle behavior.
5. **Mobile & Tablet Responsiveness**:
   - Press `F12` (Developer Tools) → Toggle Device Toolbar (`Ctrl+Shift+M` or `Cmd+Shift+M`).
   - Test on an iPhone/iPad viewport to ensure no horizontal overflow and touch swipes work.

---

## 🔍 Quality & Testing Checklist

Before submitting a Pull Request, verify the following:

- [ ] All slides render correctly across desktop, tablet, and mobile viewport sizes.
- [ ] Keyboard navigation (`ArrowRight`, `ArrowLeft`, `Space`, `F`, `Esc`) works without errors.
- [ ] Interactive activity countdown timers start, pause, and reset accurately.
- [ ] Vector SVG circuit diagrams and code tracing snippets render with high contrast and legible typography.
- [ ] Microsoft Forms side-drawer opens, closes, and pop-out button functions properly.
- [ ] No broken file paths or unformatted markdown links.

---

## 📬 Submitting Changes

1. Commit your changes with descriptive commit messages:
   ```bash
   git commit -m "feat(week2): add microcontroller architecture presentation and forms guide"
   ```
2. Push your branch to GitHub:
   ```bash
   git push origin feature/week2-presentation
   ```
3. Open a **Pull Request** detailing the week covered, new interactive components, and verification notes.
