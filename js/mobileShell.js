/**
 * MOBILE SHELL CONTROLLER
 * Full mobile-first touch optimization, bottom navigation, bottom sheet drawer, and search.
 */

class MobileShell {
  constructor(mapController, timelineController, uiController) {
    this.mapCtrl = mapController;
    this.timelineCtrl = timelineController;
    this.uiCtrl = uiController;
    this.bottomSheet = document.getElementById('mobileBottomSheet');
    this.mobileSearchModal = document.getElementById('mobileSearchModal');
  }

  init() {
    this.setupViewportHeight();
    this.setupBottomNav();
    this.setupBottomSheet();
    this.setupMobileSearch();
  }

  setupViewportHeight() {
    const updateVh = () => {
      const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      document.documentElement.style.setProperty('--app-vh', `${vh}px`);
    };

    window.addEventListener('resize', updateVh);
    window.addEventListener('orientationchange', updateVh);
    updateVh();
  }

  setupBottomNav() {
    const navItems = document.querySelectorAll('.mobile-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const target = item.getAttribute('data-target');
        this.handleNavAction(target);
      });
    });
  }

  handleNavAction(target) {
    switch (target) {
      case 'map':
        this.closeBottomSheet();
        break;
      case 'places':
        const welcomeModal = document.getElementById('welcomeModal');
        if (welcomeModal) welcomeModal.classList.add('active');
        break;
      case 'chronology':
        this.timelineCtrl.goToIndex(this.timelineCtrl.currentIndex);
        this.openBottomSheet();
        break;
      case 'tours':
        const toursModal = document.getElementById('toursModal');
        if (toursModal) toursModal.classList.add('active');
        break;
      case 'codex':
        this.openBottomSheet();
        break;
    }
  }

  setupBottomSheet() {
    if (!this.bottomSheet) return;

    const dragHandle = this.bottomSheet.querySelector('.mobile-sheet-drag-handle');
    if (dragHandle) {
      dragHandle.addEventListener('click', () => {
        this.bottomSheet.classList.toggle('open');
      });
    }
  }

  openBottomSheet() {
    if (this.bottomSheet) {
      this.bottomSheet.classList.add('open');
    }
  }

  closeBottomSheet() {
    if (this.bottomSheet) {
      this.bottomSheet.classList.remove('open');
    }
  }

  setupMobileSearch() {
    const toggleBtn = document.getElementById('mobileSearchToggleBtn');
    const closeBtn = document.getElementById('mobileSearchCloseBtn');
    const input = document.getElementById('mobileSearchInput');
    const resultsContainer = document.getElementById('mobileSearchResults');

    if (toggleBtn && this.mobileSearchModal) {
      toggleBtn.addEventListener('click', () => {
        this.mobileSearchModal.classList.add('open');
        if (input) input.focus();
      });
    }

    if (closeBtn && this.mobileSearchModal) {
      closeBtn.addEventListener('click', () => {
        this.mobileSearchModal.classList.remove('open');
      });
    }

    if (input && resultsContainer) {
      input.addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        if (!q) {
          resultsContainer.innerHTML = '';
          return;
        }

        const matchedLocations = HISTORIC_LOCATIONS.filter(loc =>
          loc.name.toLowerCase().includes(q) ||
          loc.state.toLowerCase().includes(q) ||
          loc.significance.toLowerCase().includes(q)
        ).slice(0, 8);

        const matchedRevelations = CHRONOLOGICAL_REVELATIONS.filter(rev =>
          rev.section.toLowerCase().includes(q) ||
          rev.title.toLowerCase().includes(q) ||
          rev.locationName.toLowerCase().includes(q)
        ).slice(0, 8);

        let html = '';
        if (matchedLocations.length) {
          html += `<div style="font-size: 11px; font-weight: 700; color: var(--leather-brown); text-transform: uppercase; margin: 10px 0 6px 0;">Historic Places</div>`;
          matchedLocations.forEach(loc => {
            html += `
              <div class="search-result-item" onclick="window.app.selectLocation('${loc.id}'); document.getElementById('mobileSearchModal').classList.remove('open'); window.app.mobileShell.openBottomSheet();">
                <div class="search-result-main">
                  <span class="search-result-title">${loc.name}</span>
                  <span class="search-result-sub">${loc.state}</span>
                </div>
                <span class="search-result-badge">${loc.badge || loc.category}</span>
              </div>
            `;
          });
        }

        if (matchedRevelations.length) {
          html += `<div style="font-size: 11px; font-weight: 700; color: var(--leather-brown); text-transform: uppercase; margin: 14px 0 6px 0;">D&C Revelations</div>`;
          matchedRevelations.forEach(rev => {
            html += `
              <div class="search-result-item" onclick="window.app.timelineController.goToIndex(${rev.chronoOrder - 1}); document.getElementById('mobileSearchModal').classList.remove('open'); window.app.mobileShell.openBottomSheet();">
                <div class="search-result-main">
                  <span class="search-result-title">${rev.section}: ${rev.title}</span>
                  <span class="search-result-sub">${rev.dateDisplay} • ${rev.locationName}</span>
                </div>
                <span class="search-result-badge">Chrono #${rev.chronoOrder}</span>
              </div>
            `;
          });
        }

        resultsContainer.innerHTML = html;
      });
    }

    const codexToggleBtn = document.getElementById('mobileCodexToggleBtn');
    if (codexToggleBtn) {
      codexToggleBtn.addEventListener('click', () => {
        if (this.bottomSheet) {
          this.bottomSheet.classList.toggle('open');
        }
      });
    }
  }

  updateSheetContent(html) {
    const sheetBody = document.getElementById('mobileSheetContent');
    if (sheetBody) {
      sheetBody.innerHTML = html;
    }
  }
}

window.MobileShell = MobileShell;
