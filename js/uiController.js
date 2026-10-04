/**
 * UI CONTROLLER
 * Search, filters, modals, distance calculator, guided tours, and sidebar tabs.
 */

class UIController {
  constructor(mapController, timelineController) {
    this.mapCtrl = mapController;
    this.timelineCtrl = timelineController;
    this.activeTour = null;
    this.activeTourStep = 0;
  }

  init() {
    this.setupSearch();
    this.setupQuickJump();
    this.setupFilters();
    this.setupRegionsDropdown();
    this.setupMapStyleDropdown();
    this.setupModals();
    this.setupDistanceCalculator();
    this.setupSidebarTabs();
    this.setupTours();
  }

  setupSearch() {
    const searchInput = document.getElementById('globalSearchInput');
    const searchResults = document.getElementById('searchResultsDropdown');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

      if (!q) {
        searchResults.style.display = 'none';
        return;
      }

      // Search both locations and chronological revelations
      const matchedLocations = HISTORIC_LOCATIONS.filter(loc =>
        loc.name.toLowerCase().includes(q) ||
        loc.state.toLowerCase().includes(q) ||
        loc.significance.toLowerCase().includes(q) ||
        (loc.sectionsReceived && loc.sectionsReceived.some(s => s.toLowerCase().includes(q)))
      ).slice(0, 6);

      const matchedRevelations = CHRONOLOGICAL_REVELATIONS.filter(rev =>
        rev.section.toLowerCase().includes(q) ||
        rev.title.toLowerCase().includes(q) ||
        rev.locationName.toLowerCase().includes(q) ||
        rev.summary.toLowerCase().includes(q) ||
        (rev.participants && rev.participants.some(p => p.toLowerCase().includes(q)))
      ).slice(0, 6);

      if (!matchedLocations.length && !matchedRevelations.length) {
        searchResults.innerHTML = `
          <div style="padding: 12px; color: var(--ink-muted); text-align: center; font-size: 13px;">
            No historical places or revelations found matching "${e.target.value}".
          </div>
        `;
        searchResults.style.display = 'block';
        return;
      }

      let html = '';

      if (matchedLocations.length) {
        html += `<div style="padding: 6px 12px; font-size: 11px; font-weight: 700; color: var(--leather-brown); text-transform: uppercase; background: var(--bg-parchment-dark);">Historic Places</div>`;
        matchedLocations.forEach(loc => {
          html += `
            <div class="search-result-item" onclick="window.app.selectLocation('${loc.id}'); document.getElementById('searchResultsDropdown').style.display='none';">
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
        html += `<div style="padding: 6px 12px; font-size: 11px; font-weight: 700; color: var(--leather-brown); text-transform: uppercase; background: var(--bg-parchment-dark);">D&C Revelations & Milestones</div>`;
        matchedRevelations.forEach(rev => {
          html += `
            <div class="search-result-item" onclick="window.app.timelineController.goToIndex(${rev.chronoOrder - 1}); document.getElementById('searchResultsDropdown').style.display='none';">
              <div class="search-result-main">
                <span class="search-result-title">${rev.section}: ${rev.title}</span>
                <span class="search-result-sub">${rev.dateDisplay} • ${rev.locationName}</span>
              </div>
              <span class="search-result-badge">Chrono #${rev.chronoOrder}</span>
            </div>
          `;
        });
      }

      searchResults.innerHTML = html;
      searchResults.style.display = 'block';
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        searchResults.style.display = 'none';
      });
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-box-wrapper')) {
        searchResults.style.display = 'none';
      }
    });
  }

  setupQuickJump() {
    const select = document.getElementById('quickJumpSelect');
    if (!select) return;

    // Group locations by era / region
    const sorted = [...HISTORIC_LOCATIONS].sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach(loc => {
      const opt = document.createElement('option');
      opt.value = loc.id;
      opt.textContent = `${loc.name} (${loc.state})`;
      select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
      const locId = e.target.value;
      if (locId) {
        window.app.selectLocation(locId);
        select.value = '';
      }
    });
  }

  setupFilters() {
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.getAttribute('data-filter');
        this.mapCtrl.filterMarkers(filter);
      });
    });
  }

  setupRegionsDropdown() {
    const btn = document.getElementById('regionSelectBtn');
    const menu = document.getElementById('regionDropdown');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });

    menu.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        const regionId = item.getAttribute('data-region');
        const region = REGIONS.find(r => r.id === regionId);
        if (region) {
          this.mapCtrl.map.flyTo(region.center, region.zoom, { duration: 1.2 });
        }
      });
    });
  }

  setupMapStyleDropdown() {
    const btn = document.getElementById('mapStyleToggle');
    const menu = document.getElementById('mapStyleDropdown');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });

    menu.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        const style = item.getAttribute('data-style');
        this.mapCtrl.setMapStyle(style);
        const iconEl = document.getElementById('mapStyleIcon');
        const textEl = document.getElementById('mapStyleText');
        if (style === 'satellite') {
          if (iconEl) iconEl.textContent = '🛰️';
          if (textEl) textEl.textContent = 'Satellite';
        } else if (style === 'relief') {
          if (iconEl) iconEl.textContent = '🏔️';
          if (textEl) textEl.textContent = 'Shaded Relief';
        } else if (style === 'modern') {
          if (iconEl) iconEl.textContent = '🗺️';
          if (textEl) textEl.textContent = 'Modern';
        } else {
          if (iconEl) iconEl.textContent = '📜';
          if (textEl) textEl.textContent = 'Historic Topo';
        }
      });
    });
  }

  setupModals() {
    // Welcome Guide Modal
    const welcomeBtn = document.getElementById('welcomeGuideBtn');
    const welcomeModal = document.getElementById('welcomeModal');
    if (welcomeBtn && welcomeModal) {
      welcomeBtn.addEventListener('click', () => welcomeModal.classList.add('active'));
    }

    // Distance Calculator Modal
    const travelCalcBtn = document.getElementById('travelCalcBtn');
    const travelCalcModal = document.getElementById('travelCalcModal');
    if (travelCalcBtn && travelCalcModal) {
      travelCalcBtn.addEventListener('click', () => travelCalcModal.classList.add('active'));
    }

    // Life in the 1800s Pioneer Era Modal
    const lifeBtn = document.getElementById('lifeBackThenBtn');
    const lifeModal = document.getElementById('lifeModal');
    if (lifeBtn && lifeModal) {
      lifeBtn.addEventListener('click', () => lifeModal.classList.add('active'));
    }

    // Close buttons for all modals
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    });

    // Sidebar Toggle
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.getElementById('sidebar');
    if (sidebarToggleBtn && sidebar) {
      sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
      });
    }

    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    if (sidebarCloseBtn && sidebar) {
      sidebarCloseBtn.addEventListener('click', () => {
        sidebar.classList.add('collapsed');
      });
    }
  }

  setupDistanceCalculator() {
    const fromSelect = document.getElementById('calcFromSelect');
    const toSelect = document.getElementById('calcToSelect');
    const calcBtn = document.getElementById('runCalcBtn');
    const resultsBox = document.getElementById('calcResultsBox');

    if (!fromSelect || !toSelect || !calcBtn || !resultsBox) return;

    HISTORIC_LOCATIONS.forEach(loc => {
      const opt1 = document.createElement('option');
      opt1.value = loc.id;
      opt1.textContent = `${loc.name} (${loc.state})`;
      fromSelect.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = loc.id;
      opt2.textContent = `${loc.name} (${loc.state})`;
      toSelect.appendChild(opt2);
    });

    // Default: Kirtland Temple to Independence Temple Lot
    fromSelect.value = 'kirtland-temple';
    toSelect.value = 'independence-temple-lot';

    calcBtn.addEventListener('click', () => {
      const loc1 = HISTORIC_LOCATIONS.find(l => l.id === fromSelect.value);
      const loc2 = HISTORIC_LOCATIONS.find(l => l.id === toSelect.value);
      if (!loc1 || !loc2) return;

      const dMiles = this.calculateHaversineMiles(loc1.coordinates[0], loc1.coordinates[1], loc2.coordinates[0], loc2.coordinates[1]);
      const overlandEstMiles = Math.round(dMiles * 1.25); // Account for historic winding trails and rivers

      const wagonDays = Math.ceil(overlandEstMiles / 15);
      const handcartDays = Math.ceil(overlandEstMiles / 18);
      const walkingDays = Math.ceil(overlandEstMiles / 20);

      document.getElementById('calcStraightDist').textContent = `${Math.round(dMiles)} miles`;
      document.getElementById('calcTrailDist').textContent = `~${overlandEstMiles} miles`;
      document.getElementById('calcWagonDays').textContent = `~${wagonDays} days (15 mi/day pace)`;
      document.getElementById('calcHandcartDays').textContent = `~${handcartDays} days (18 mi/day pace)`;
      document.getElementById('calcWalkingDays').textContent = `~${walkingDays} days (20 mi/day pace)`;

      resultsBox.style.display = 'block';
    });
  }

  calculateHaversineMiles(lat1, lon1, lat2, lon2) {
    const R = 3958.8; // Earth radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  setupSidebarTabs() {
    const tabBtns = document.querySelectorAll('.sidebar-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetTab = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        const pane = document.getElementById(targetTab);
        if (pane) pane.classList.add('active');
      });
    });
  }

  setupTours() {
    const toursBtn = document.getElementById('storyToursBtn');
    const toursModal = document.getElementById('toursModal');
    if (toursBtn && toursModal) {
      toursBtn.addEventListener('click', () => toursModal.classList.add('active'));
    }

    const toursContainer = document.getElementById('toursListContainer');
    if (!toursContainer) return;

    let html = '';
    GUIDED_TOURS.forEach(tour => {
      html += `
        <div style="background: var(--bg-parchment); border: 1.5px solid var(--border-sepia); border-radius: var(--radius-md); padding: 16px; margin-bottom: 14px; cursor: pointer; transition: all var(--transition-fast);"
             onmouseover="this.style.borderColor='var(--gold-primary)'; this.style.boxShadow='var(--shadow-medium)';"
             onmouseout="this.style.borderColor='var(--border-sepia)'; this.style.boxShadow='none';"
             onclick="window.app.uiController.startTour('${tour.id}'); document.getElementById('toursModal').classList.remove('active');">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--leather-brown);">${tour.badge}</span>
            <span style="font-size: 12px; color: var(--ink-muted);">${tour.stops.length} Historical Stops</span>
          </div>
          <h3 style="font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--ink-primary); margin-bottom: 4px;">${tour.title}</h3>
          <p style="font-family: var(--font-serif); font-size: 14px; font-style: italic; color: var(--ink-secondary); margin-bottom: 8px;">${tour.subtitle}</p>
          <button class="btn btn-primary" style="font-size: 12px; height: 30px;">Begin Guided Tour ▶</button>
        </div>
      `;
    });
    toursContainer.innerHTML = html;

    // Tour viewer navigation controls
    const exitBtn = document.getElementById('tourExitBtn');
    const nextBtn = document.getElementById('tourNextBtn');
    const prevBtn = document.getElementById('tourPrevBtn');

    if (exitBtn) {
      exitBtn.addEventListener('click', () => this.endTour());
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextTourStep());
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prevTourStep());
    }
  }

  startTour(tourId) {
    const tour = GUIDED_TOURS.find(t => t.id === tourId);
    if (!tour) return;

    this.activeTour = tour;
    this.activeTourStep = 0;

    const viewerBar = document.getElementById('tourViewerBar');
    if (viewerBar) viewerBar.style.display = 'flex';

    this.showCurrentTourStep();
  }

  showCurrentTourStep() {
    if (!this.activeTour) return;
    const step = this.activeTour.stops[this.activeTourStep];
    if (!step) return;

    const counter = document.getElementById('tourStepCounter');
    const titleText = document.getElementById('tourTitleText');

    if (counter) counter.textContent = `Stop ${step.step} of ${this.activeTour.stops.length}`;
    if (titleText) titleText.textContent = `${this.activeTour.title}: ${step.title}`;

    this.mapCtrl.flyToCoordinates(step.coordinates, step.zoom || 14);
    if (step.locationId) {
      this.mapCtrl.highlightLocation(step.locationId, false);
      window.app.selectLocation(step.locationId, false);
    }
  }

  nextTourStep() {
    if (!this.activeTour) return;
    if (this.activeTourStep < this.activeTour.stops.length - 1) {
      this.activeTourStep++;
      this.showCurrentTourStep();
    } else {
      this.endTour();
    }
  }

  prevTourStep() {
    if (!this.activeTour) return;
    if (this.activeTourStep > 0) {
      this.activeTourStep--;
      this.showCurrentTourStep();
    }
  }

  endTour() {
    this.activeTour = null;
    const viewerBar = document.getElementById('tourViewerBar');
    if (viewerBar) viewerBar.style.display = 'none';
  }
}

window.UIController = UIController;
