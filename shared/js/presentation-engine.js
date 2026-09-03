/**
 * UNIT 6 PRESENTATION ENGINE
 * Slide navigation, keyboard shortcuts, progress tracking, and full-screen controls
 */

class PresentationEngine {
  constructor() {
    this.currentSlideIndex = 0;
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.totalSlides = this.slides.length;
    
    this.prevBtn = document.getElementById('prev-slide');
    this.nextBtn = document.getElementById('next-slide');
    this.slideCounter = document.getElementById('slide-counter');
    this.progressBar = document.getElementById('progress-bar-fill');
    
    this.init();
  }

  init() {
    if (this.totalSlides === 0) return;

    // Set initial slide from hash if present (#slide-3)
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
      const parsedIndex = parseInt(hash.replace('#slide-', ''), 10) - 1;
      if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < this.totalSlides) {
        this.currentSlideIndex = parsedIndex;
      }
    }

    this.updateSlideDisplay();
    this.attachEventListeners();
  }

  attachEventListeners() {
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      // Don't trigger slide change if typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        this.goToSlide(this.totalSlides - 1);
      } else if (e.key.toLowerCase() === 'f') {
        this.toggleFullScreen();
      }
    });

    // Touch swipe support for mobile/tablets
    let touchStartX = 0;
    let touchEndX = 0;
    const viewport = document.getElementById('deck-viewport');
    
    if (viewport) {
      viewport.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 50) {
          if (diff < 0) this.nextSlide();
          else this.prevSlide();
        }
      }, { passive: true });
    }
  }

  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides || index === this.currentSlideIndex) return;

    this.slides.forEach((slide, i) => {
      slide.classList.remove('active', 'previous');
      if (i < index) {
        slide.classList.add('previous');
      }
    });

    this.currentSlideIndex = index;
    this.updateSlideDisplay();
  }

  nextSlide() {
    if (this.currentSlideIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentSlideIndex + 1);
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.goToSlide(this.currentSlideIndex - 1);
    }
  }

  updateSlideDisplay() {
    this.slides.forEach((slide, i) => {
      if (i === this.currentSlideIndex) {
        slide.classList.add('active');
        slide.classList.remove('previous');
      } else if (i < this.currentSlideIndex) {
        slide.classList.add('previous');
        slide.classList.remove('active');
      } else {
        slide.classList.remove('active', 'previous');
      }
    });

    // Update Counter
    if (this.slideCounter) {
      this.slideCounter.textContent = `${this.currentSlideIndex + 1} / ${this.totalSlides}`;
    }

    // Update Progress Bar
    if (this.progressBar) {
      const progressPercent = ((this.currentSlideIndex + 1) / this.totalSlides) * 100;
      this.progressBar.style.width = `${progressPercent}%`;
    }

    // Update Button Disabled States
    if (this.prevBtn) this.prevBtn.disabled = this.currentSlideIndex === 0;
    if (this.nextBtn) this.nextBtn.disabled = this.currentSlideIndex === this.totalSlides - 1;

    // Update URL hash without scroll jumping
    window.history.replaceState(null, null, `#slide-${this.currentSlideIndex + 1}`);
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

// Global helper for interactive schematic view tabs on Slide 11
window.switchSchematicView = function(viewNum) {
  for (let i = 1; i <= 3; i++) {
    const view = document.getElementById(`schematic-view-${i}`);
    const tabBtn = document.getElementById(`tab-btn-${i}`);
    if (view) {
      view.style.display = (i === viewNum) ? 'flex' : 'none';
    }
    if (tabBtn) {
      if (i === viewNum) {
        tabBtn.classList.add('active');
      } else {
        tabBtn.classList.remove('active');
      }
    }
  }
};

// Global helper for interactive code editor on Slide 10
window.copyEditorCode = function() {
  const textarea = document.getElementById('code-editor-input');
  if (!textarea) return;
  
  const text = textarea.value;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyFeedback();
    }).catch(() => {
      fallbackCopyText(textarea);
    });
  } else {
    fallbackCopyText(textarea);
  }
};

function fallbackCopyText(textarea) {
  textarea.select();
  try {
    document.execCommand('copy');
    showCopyFeedback();
  } catch (err) {
    console.error('Could not copy text: ', err);
  }
}

function showCopyFeedback() {
  const feedback = document.getElementById('copy-feedback-msg');
  if (feedback) {
    feedback.style.display = 'inline-flex';
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 3500);
  }
}

window.resetEditorCode = function() {
  const textarea = document.getElementById('code-editor-input');
  if (!textarea) return;
  textarea.value = `#include <iostream>
using namespace std;

int main()
{
    // Activity 5: Temperature Monitoring Program
    int temperature = 25;
    int limit = 30; // Task 1: Change threshold to 20

    // Task 2: Update loop to scan 8 sensor channels instead of 4
    for (int channel = 0; channel < 4; channel++)
    {
        if (temperature > limit)
        {
            cout << "WARNING on Channel " << channel << endl;
        }
        else
        {
            cout << "NORMAL on Channel " << channel << endl;
        }
    }

    return 0;
}`;
  if (window.updateCodeHighlighting) {
    window.updateCodeHighlighting();
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.deckEngine = new PresentationEngine();

  // Tab key indentation support & Real-time syntax highlighting in code editor
  const codeEditor = document.getElementById('code-editor-input');
  const highlightLayer = document.getElementById('code-highlight-layer');
  if (codeEditor) {
    // Initial color coding pass
    if (window.updateCodeHighlighting) {
      window.updateCodeHighlighting();
    }

    codeEditor.addEventListener('input', () => {
      if (window.updateCodeHighlighting) {
        window.updateCodeHighlighting();
      }
    });

    codeEditor.addEventListener('scroll', () => {
      if (highlightLayer) {
        highlightLayer.scrollTop = codeEditor.scrollTop;
        highlightLayer.scrollLeft = codeEditor.scrollLeft;
      }
    });

    codeEditor.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = codeEditor.selectionStart;
        const end = codeEditor.selectionEnd;
        codeEditor.value = codeEditor.value.substring(0, start) + '    ' + codeEditor.value.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
        if (window.updateCodeHighlighting) {
          window.updateCodeHighlighting();
        }
      }
    });
  }
});

// Global helper for toggling breadboard power states on Slide 11
window.toggleBreadboardPower = function(state) {
  const isPowered = (state === 'on');
  const imgOn = document.getElementById('bb-img-on');
  const imgOff = document.getElementById('bb-img-off');
  const statusBadge = document.getElementById('bb-status-badge');
  const btnOn = document.getElementById('btn-power-on');
  const btnOff = document.getElementById('btn-power-off');

  if (imgOn && imgOff) {
    imgOn.style.display = isPowered ? 'block' : 'none';
    imgOff.style.display = isPowered ? 'none' : 'block';
  }
  if (statusBadge) {
    statusBadge.textContent = isPowered ? '⚡ POWER ON (5.00 V • 9.16 mA • LED Lit)' : '⚪ POWER OFF (0.00 V • 0.00 mA • LED Off)';
    statusBadge.style.color = isPowered ? '#4ade80' : '#94a3b8';
    statusBadge.style.borderColor = isPowered ? 'rgba(74, 222, 128, 0.4)' : 'rgba(148, 163, 184, 0.2)';
    statusBadge.style.background = isPowered ? 'rgba(74, 222, 128, 0.1)' : 'rgba(148, 163, 184, 0.05)';
  }
  if (btnOn && btnOff) {
    if (isPowered) {
      btnOn.classList.add('active');
      btnOff.classList.remove('active');
    } else {
      btnOff.classList.add('active');
      btnOn.classList.remove('active');
    }
  }
};

// C++ Syntax Highlighting Tokenizer for Live Code Sandbox on Slide 10
window.updateCodeHighlighting = function() {
  const textarea = document.getElementById('code-editor-input');
  const highlightLayer = document.getElementById('code-highlight-layer');
  if (!textarea || !highlightLayer) return;

  const rawCode = textarea.value;
  highlightLayer.innerHTML = highlightCppCode(rawCode);
};

function highlightCppCode(code) {
  // Escape HTML characters
  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Placeholders to protect already highlighted spans
  const tokens = [];
  function saveToken(html) {
    tokens.push(html);
    return '___TOKEN_' + (tokens.length - 1) + '___';
  }

  // 1. Comments (//...)
  escaped = escaped.replace(/(\/\/.*?)(?=$|\n)/g, match => saveToken('<span class="comment">' + match + '</span>'));

  // 2. Strings ("...")
  escaped = escaped.replace(/(".*?")/g, match => saveToken('<span class="string">' + match + '</span>'));

  // 3. Preprocessor directives (#include <...>)
  escaped = escaped.replace(/(#include\s+&lt;.*?&gt;)/g, match => saveToken('<span class="preproc">' + match + '</span>'));

  // 4. Keywords
  escaped = escaped.replace(/\b(using|namespace|return|if|else|for|while|do|switch|case|break|continue)\b/g, match => saveToken('<span class="keyword">' + match + '</span>'));

  // 5. Types
  escaped = escaped.replace(/\b(int|float|double|char|bool|void|string)\b/g, match => saveToken('<span class="type">' + match + '</span>'));

  // 6. Common standard I/O identifiers & variables
  escaped = escaped.replace(/\b(cout|cin|endl|std)\b/g, match => saveToken('<span class="var">' + match + '</span>'));

  // 7. Numbers
  escaped = escaped.replace(/\b(\d+)\b/g, match => saveToken('<span class="number">' + match + '</span>'));

  // Restore tokens
  for (let i = tokens.length - 1; i >= 0; i--) {
    escaped = escaped.replace('___TOKEN_' + i + '___', tokens[i]);
  }

  // Add trailing newline so empty line at bottom scrolls identically
  if (code.endsWith('\n')) {
    escaped += ' ';
  }

  return escaped;
}
