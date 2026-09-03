/**
 * MICROSOFT FORMS DRAWER CONTROLLER
 * Manages opening, closing, section switching, and popout behavior
 */

class FormsDrawerController {
  constructor() {
    this.drawer = document.getElementById('forms-drawer');
    this.backdrop = document.getElementById('drawer-backdrop');
    this.iframe = document.getElementById('forms-iframe');
    this.openTriggers = document.querySelectorAll('.open-forms-trigger');
    this.closeBtn = document.getElementById('drawer-close-btn');
    this.popoutBtn = document.getElementById('drawer-popout-btn');
    this.sectionNotice = document.getElementById('drawer-active-section');
    
    // Default MS Form URL placeholder - easily configurable
    this.defaultFormUrl = "https://forms.office.com/Pages/ResponsePage.aspx?id=your-org-form-id";
    
    this.init();
  }

  init() {
    if (!this.drawer) return;

    // Attach open triggers
    this.openTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionName = trigger.getAttribute('data-form-section') || "Section 1";
        this.open(sectionName);
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    if (this.popoutBtn) {
      this.popoutBtn.addEventListener('click', () => {
        const url = this.iframe ? this.iframe.src : this.defaultFormUrl;
        window.open(url, '_blank');
      });
    }

    // Keyboard ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  open(sectionName = "Relevant Section") {
    if (this.sectionNotice) {
      this.sectionNotice.textContent = sectionName;
    }
    this.drawer.classList.add('open');
    if (this.backdrop) {
      this.backdrop.classList.add('active');
    }
  }

  close() {
    this.drawer.classList.remove('open');
    if (this.backdrop) {
      this.backdrop.classList.remove('active');
    }
  }

  isOpen() {
    return this.drawer.classList.contains('open');
  }

  setFormUrl(url) {
    if (this.iframe) {
      this.iframe.src = url;
    }
    this.defaultFormUrl = url;
  }
}

// Global accessor
document.addEventListener('DOMContentLoaded', () => {
  window.formsDrawer = new FormsDrawerController();
});
