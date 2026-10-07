/**
 * MOBILE SHELL CONTROLLER
 * Implements the "Dynamic Pill & 3-State Sheet" mobile architecture (screens <= 768px):
 * 1. Top Floating Era Capsule (.floating-era-badge) with tap-to-expand card & outside tap collapse.
 * 2. Floating Timeline Capsule (.app-timeline-footer) resting above bottom nav with zero collision.
 * 3. 3-State Codex Bottom Sheet (.detail-sidebar: Closed, Peek ~195px, Expanded 82dvh).
 * 4. 5-Button Bottom Navigation Bar (.mobile-bottom-bar: Map, Search, Filters, Codex, Menu).
 * 5. Touch swipe down gestures to peek and close without accidental drags.
 */

const HISTORIC_ERA_METADATA = {
  'new-york-early': {
    tag: 'ERA: 1805–1831',
    title: 'New York & Early Restoration',
    desc: "From Joseph Smith's youth in Vermont to the First Vision in Palmyra, translation of the Book of Mormon, and Church organization in Fayette.",
    featured: ['sacred-grove-ny', 'hill-cumorah-ny', 'fayette-whitmer-farm', 'grandin-printshop-ny', 'sharon-vt']
  },
  'harmony-colesville': {
    tag: 'ERA: 1829–1830',
    title: 'Harmony & Priesthood Restoration',
    desc: 'Translation of the sacred plates at the Hale home in Harmony, restoration of the Aaronic and Melchizedek Priesthoods along the Susquehanna River.',
    featured: ['harmony-priesthood-site', 'colesville-knight-farm']
  },
  'kirtland-ohio': {
    tag: 'ERA: 1831–1838',
    title: 'Kirtland & Ohio Pentecost',
    desc: 'Headquarters of the Church in Ohio: construction of the Kirtland Temple, School of the Prophets, Whitney Store, and visions in Hiram.',
    featured: ['kirtland-temple', 'whitney-store-oh', 'johnson-farm-hiram-oh']
  },
  'missouri-zion': {
    tag: 'ERA: 1831–1833',
    title: 'Jackson County & Center Place',
    desc: 'Dedication of the Temple Lot in Independence, Missouri as the Center Place of Zion, W.W. Phelps printing office, and the early gatherers.',
    featured: ['independence-temple-lot', 'kaw-township-mo', 'phelps-printshop-mo']
  },
  'zions-camp': {
    tag: 'ERA: 1834',
    title: "Zion's Camp Expedition",
    desc: 'The 900-mile military and spiritual march from Kirtland to Missouri, forging future apostles and leaders of the Church of Jesus Christ.',
    featured: ['zions-camp-fishing-river', 'salt-river-allred-mo']
  },
  'missouri-far-west': {
    tag: 'ERA: 1838–1839',
    title: 'Far West & Northern Missouri',
    desc: "The settlement of Caldwell and Daviess counties, laying cornerstones for the Far West Temple, Adam-ondi-Ahman, and Haun's Mill.",
    featured: ['far-west-temple-site', 'adam-ondi-ahman', 'hauns-mill-site']
  },
  'liberty-jail': {
    tag: 'ERA: 1838–1839',
    title: 'Liberty Jail Incarceration',
    desc: 'Joseph Smith and brethren imprisoned through the brutal winter in Clay County dungeon; profound revelations received in D&C 121–123.',
    featured: ['liberty-jail-mo', 'richmond-jail-mo']
  },
  'nauvoo-illinois': {
    tag: 'ERA: 1839–1846',
    title: 'Nauvoo & City of Joseph',
    desc: 'Transforming Commerce marshes into the City Beautiful on the Mississippi: Nauvoo Temple, Relief Society, and Carthage Martyrdom.',
    featured: ['nauvoo-temple', 'carthage-jail-il', 'red-brick-store-il', 'mansion-house-il']
  },
  'pioneer-exodus': {
    tag: 'ERA: 1846–1847',
    title: 'Pioneer Exodus & Winter Quarters',
    desc: 'Crossing the frozen Mississippi River into Iowa, establishing waystations at Sugar Creek and Mount Pisgah, and organizing Camp of Israel at Winter Quarters.',
    featured: ['winter-quarters-ne', 'sugar-creek-ia', 'mount-pisgah-ia', 'council-bluffs-ia']
  },
  'pioneer-trail': {
    tag: 'ERA: 1847',
    title: 'Mormon Pioneer Trail',
    desc: 'The epic 1,300-mile overland trail from the Missouri River through Nebraska and Wyoming passes to the Great Salt Lake Valley.',
    featured: ['chimney-rock-ne', 'fort-laramie-wy', 'independence-rock-wy', 'south-pass-wy']
  },
  'utah-west': {
    tag: 'ERA: 1847–1890',
    title: 'Salt Lake Valley & Utah Temples',
    desc: 'Entering the Salt Lake Valley, laying out Temple Square, constructing pioneer temples in St. George, Logan, and Manti, and the 1890 Manifesto.',
    featured: ['salt-lake-temple-square', 'ensign-peak-ut', 'st-george-temple-ut', 'manti-temple-ut', 'logan-temple-ut']
  },
  'world-missions': {
    tag: 'ERA: 1837–1890',
    title: 'British Isles & Global Missions',
    desc: 'Apostles preach in Preston, England, baptize thousands at Benbow Farm in Herefordshire, and open global missions across the world.',
    featured: ['preston-england', 'benbow-farm-england']
  }
};

class MobileShell {
  constructor(mapController, timelineController, uiController) {
    this.mapCtrl = mapController;
    this.timelineCtrl = timelineController;
    this.uiCtrl = uiController;

    // Elements
    this.sidebar = document.getElementById('sidebar');
    this.timelineFooter = document.getElementById('appTimelineBar');
    this.floatingEraBadge = document.getElementById('floatingEraBadge');
    this.mobileSearchModal = document.getElementById('mobileSearchModal');
    this.mobileFiltersSheet = document.getElementById('mobileFiltersSheet');
    this.mobileNavSheet = document.getElementById('mobileNavSheet');
    this.mobileSheetBackdrop = document.getElementById('mobileSheetBackdrop');
    this.expandCodexBtn = document.getElementById('mobileExpandCodexBtn');
    this.closeSidebarBtn = document.getElementById('closeSidebarBtn');
    this.mobileDragHandle = document.getElementById('mobileDragHandle');

    // Bottom Navigation Buttons
    this.mobBottomMapBtn = document.getElementById('mobBottomMapBtn');
    this.mobBottomSearchBtn = document.getElementById('mobBottomSearchBtn');
    this.mobBottomFiltersBtn = document.getElementById('mobBottomFiltersBtn');
    this.mobBottomCodexBtn = document.getElementById('mobBottomCodexBtn');
    this.mobBottomToolsBtn = document.getElementById('mobBottomToolsBtn');

    this.currentEraKey = 'new-york-early';
    this.currentSearchCategory = 'all';
  }

  init() {
    this.setupViewportHeight();
    this.setupFloatingEraCapsule();
    this.setupThreeStateBottomSheet();
    this.setupBottomNav();
    this.setupMobileSearch();
    this.setupMobileDrawers();
    this.setupSwipeGestures();

    // Default startup on mobile (screens <= 768px): State 1 (Closed)
    if (window.innerWidth <= 768 && this.sidebar) {
      this.closeCodexSheet();
    }

    // Set initial era badge content
    this.updateEraBadge('new-york-early');
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

  /* ------------------------------------------------------------------------
     1. Specification 1: Top Floating Era Capsule (.floating-era-badge)
     ------------------------------------------------------------------------ */
  setupFloatingEraCapsule() {
    if (!this.floatingEraBadge) return;

    // Toggle dropdown card on badge click
    this.floatingEraBadge.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        if (e.target.closest('.era-featured-chip')) return;
        this.floatingEraBadge.classList.toggle('is-expanded');
      }
    });

    // Dismiss when tapping outside on map canvas
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.addEventListener('click', (e) => {
        if (this.floatingEraBadge && !e.target.closest('#floatingEraBadge')) {
          this.floatingEraBadge.classList.remove('is-expanded');
        }
      });
    }

    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && this.floatingEraBadge) {
        if (!e.target.closest('#floatingEraBadge')) {
          this.floatingEraBadge.classList.remove('is-expanded');
        }
      }
    });
  }

  updateEraBadge(eraKey) {
    if (!eraKey) return;
    this.currentEraKey = eraKey;
    const meta = HISTORIC_ERA_METADATA[eraKey] || HISTORIC_ERA_METADATA['new-york-early'];

    const tagEl = document.getElementById('floatingEraTag');
    const titleEl = document.getElementById('floatingEraTitle');
    const descEl = document.getElementById('floatingEraDesc');
    const chipsEl = document.getElementById('floatingEraChips');

    if (tagEl) tagEl.textContent = meta.tag;
    if (titleEl) titleEl.textContent = meta.title;
    if (descEl) descEl.textContent = meta.desc;

    if (chipsEl && meta.featured && meta.featured.length) {
      chipsEl.innerHTML = '';
      meta.featured.forEach(locId => {
        const loc = typeof HISTORIC_LOCATIONS !== 'undefined' ? HISTORIC_LOCATIONS.find(l => l.id === locId) : null;
        if (loc) {
          const chip = document.createElement('span');
          chip.className = 'era-featured-chip';
          chip.textContent = loc.name;
          chip.setAttribute('data-loc-id', loc.id);
          chip.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.floatingEraBadge) this.floatingEraBadge.classList.remove('is-expanded');
            if (window.app && window.app.selectLocation) {
              window.app.selectLocation(loc.id, true);
            }
          });
          chipsEl.appendChild(chip);
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     2. Specification 3: 3-State Codex Bottom Sheet (.detail-sidebar)
     ------------------------------------------------------------------------ */
  setupThreeStateBottomSheet() {
    // Expand / Collapse button in sidebar header
    if (this.expandCodexBtn) {
      this.expandCodexBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleCodexMode();
      });
    }

    // Drag handle tap to toggle
    if (this.mobileDragHandle) {
      this.mobileDragHandle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleCodexMode();
      });
    }

    // Dismissal (✕): Closes completely and restores timeline
    const closeBtns = document.querySelectorAll('#closeSidebarBtn, .sidebar-close-btn, #sidebarCloseBtn');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.innerWidth <= 768) {
          this.closeCodexSheet();
        } else if (this.sidebar) {
          this.sidebar.classList.add('collapsed');
        }
      });
    });

    const codexToggleBtn = document.getElementById('mobileCodexToggleBtn');
    if (codexToggleBtn) {
      codexToggleBtn.addEventListener('click', () => {
        this.closeAllDrawers();
        if (this.sidebar) {
          if (this.sidebar.classList.contains('closed')) {
            this.openPeekSheet();
          } else {
            this.closeCodexSheet();
          }
        }
      });
    }
  }

  /**
   * State 1: Closed on Startup or dismissed
   */
  closeCodexSheet() {
    if (!this.sidebar) return;
    this.sidebar.classList.add('closed');
    this.sidebar.classList.remove('peek', 'expanded');

    // Smoothly restore timeline capsule
    if (this.timelineFooter) {
      this.timelineFooter.classList.remove('timeline-hidden');
    }

    if (this.expandCodexBtn) {
      this.expandCodexBtn.textContent = '⌃ Full Codex';
    }

    this.updateBottomNavState();
  }

  /**
   * State 2: Peek (~195px)
   * Triggered when marker pin or search result is selected
   */
  openPeekSheet() {
    if (!this.sidebar) return;
    this.sidebar.classList.remove('closed', 'expanded');
    this.sidebar.classList.add('peek');

    // CRITICAL: Automatically add .timeline-hidden so timeline slides off-screen with zero layer collision
    if (this.timelineFooter) {
      this.timelineFooter.classList.add('timeline-hidden');
    }

    if (this.expandCodexBtn) {
      this.expandCodexBtn.textContent = '⌃ Full Codex';
    }

    this.updateBottomNavState();
  }

  /**
   * State 3: Expanded (82dvh)
   */
  openExpandedSheet() {
    if (!this.sidebar) return;
    this.sidebar.classList.remove('closed', 'peek');
    this.sidebar.classList.add('expanded');

    if (this.timelineFooter) {
      this.timelineFooter.classList.add('timeline-hidden');
    }

    if (this.expandCodexBtn) {
      this.expandCodexBtn.textContent = '⌄ Collapse';
    }

    this.updateBottomNavState();
  }

  toggleCodexMode() {
    if (!this.sidebar) return;
    if (this.sidebar.classList.contains('expanded')) {
      // From Expanded -> Peek
      this.openPeekSheet();
    } else {
      // From Peek or Closed -> Expanded
      this.openExpandedSheet();
    }
  }

  /* ------------------------------------------------------------------------
     3. Swipe Down Gesture Support for Bottom Sheet
     ------------------------------------------------------------------------ */
  setupSwipeGestures() {
    const setupSwipe = (element, onSwipeDown) => {
      if (!element) return;
      let startY = 0;
      let startX = 0;

      element.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
          startY = e.touches[0].clientY;
          startX = e.touches[0].clientX;
        }
      }, { passive: true });

      element.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          const deltaY = e.changedTouches[0].clientY - startY;
          const deltaX = Math.abs(e.changedTouches[0].clientX - startX);
          // Downward swipe of at least 35px with predominantly vertical motion
          if (deltaY > 35 && deltaY > deltaX) {
            onSwipeDown();
          }
        }
      }, { passive: true });
    };

    const handleSidebarSwipeDown = () => {
      if (!this.sidebar || window.innerWidth > 768) return;
      if (this.sidebar.classList.contains('expanded')) {
        this.openPeekSheet();
      } else if (this.sidebar.classList.contains('peek')) {
        this.closeCodexSheet();
      }
    };

    if (this.mobileDragHandle) setupSwipe(this.mobileDragHandle, handleSidebarSwipeDown);
    const sidebarHeader = document.querySelector('#sidebar .sidebar-header');
    if (sidebarHeader) setupSwipe(sidebarHeader, handleSidebarSwipeDown);

    const filterDragHandle = document.getElementById('mobileFiltersDragHandle');
    if (filterDragHandle) setupSwipe(filterDragHandle, () => this.closeAllDrawers());
  }

  /* ------------------------------------------------------------------------
     4. Specification 4: Mobile Bottom Navigation Bar (.mobile-bottom-bar)
     ------------------------------------------------------------------------ */
  setupBottomNav() {
    // [🗺️ Map]: Primary return button (closes all modals/drawers, restores map & floating timeline)
    if (this.mobBottomMapBtn) {
      this.mobBottomMapBtn.addEventListener('click', () => {
        this.closeAllDrawers();
        this.closeCodexSheet();
        this.updateBottomNavState();
      });
    }

    // [🔍 Search]
    if (this.mobBottomSearchBtn) {
      this.mobBottomSearchBtn.addEventListener('click', () => {
        const isOpen = this.mobileSearchModal && this.mobileSearchModal.classList.contains('open');
        if (isOpen) {
          this.closeSearchModal();
        } else {
          this.openSearchModal();
        }
      });
    }

    // [⚙️ Filters]
    if (this.mobBottomFiltersBtn) {
      this.mobBottomFiltersBtn.addEventListener('click', () => {
        const isOpen = this.mobileFiltersSheet && this.mobileFiltersSheet.classList.contains('open');
        this.closeAllDrawers();
        if (!isOpen && this.mobileFiltersSheet) {
          this.mobileFiltersSheet.classList.add('open');
          if (this.mobileSheetBackdrop) this.mobileSheetBackdrop.classList.add('visible');
        }
        this.updateBottomNavState();
      });
    }

    // [📜 Codex]
    if (this.mobBottomCodexBtn) {
      this.mobBottomCodexBtn.addEventListener('click', () => {
        this.closeAllDrawers();
        if (!this.sidebar) return;

        if (this.sidebar.classList.contains('closed')) {
          this.openPeekSheet();
        } else if (this.sidebar.classList.contains('peek')) {
          this.openExpandedSheet();
        } else {
          this.closeCodexSheet();
        }
      });
    }

    // [☰ Menu]
    if (this.mobBottomToolsBtn) {
      this.mobBottomToolsBtn.addEventListener('click', () => {
        const isOpen = this.mobileNavSheet && this.mobileNavSheet.classList.contains('open');
        this.closeAllDrawers();
        if (!isOpen && this.mobileNavSheet) {
          this.mobileNavSheet.classList.add('open');
          if (this.mobileSheetBackdrop) this.mobileSheetBackdrop.classList.add('visible');
        }
        this.updateBottomNavState();
      });
    }

    // Header mobile menu button
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        this.closeAllDrawers();
        if (this.mobileNavSheet) {
          this.mobileNavSheet.classList.add('open');
          if (this.mobileSheetBackdrop) this.mobileSheetBackdrop.classList.add('visible');
        }
      });
    }
  }

  updateBottomNavState() {
    if (!this.mobBottomMapBtn) return;

    const isFiltersOpen = this.mobileFiltersSheet && this.mobileFiltersSheet.classList.contains('open');
    const isNavOpen = this.mobileNavSheet && this.mobileNavSheet.classList.contains('open');
    const isSearchOpen = this.mobileSearchModal && this.mobileSearchModal.classList.contains('open');
    const isCodexOpen = this.sidebar && !this.sidebar.classList.contains('closed');
    const isMapActive = !isFiltersOpen && !isNavOpen && !isSearchOpen && (!this.sidebar || this.sidebar.classList.contains('closed'));

    this.mobBottomMapBtn.classList.toggle('active', !!isMapActive);
    if (this.mobBottomFiltersBtn) this.mobBottomFiltersBtn.classList.toggle('active', !!isFiltersOpen);
    if (this.mobBottomToolsBtn) this.mobBottomToolsBtn.classList.toggle('active', !!isNavOpen);
    if (this.mobBottomSearchBtn) this.mobBottomSearchBtn.classList.toggle('active', !!isSearchOpen);
    if (this.mobBottomCodexBtn) this.mobBottomCodexBtn.classList.toggle('active', !!isCodexOpen);
  }

  closeAllDrawers() {
    if (this.mobileSearchModal) this.mobileSearchModal.classList.remove('open');
    if (this.mobileFiltersSheet) this.mobileFiltersSheet.classList.remove('open');
    if (this.mobileNavSheet) this.mobileNavSheet.classList.remove('open');
    if (this.mobileSheetBackdrop) this.mobileSheetBackdrop.classList.remove('visible');
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    this.updateBottomNavState();
  }

  /* ------------------------------------------------------------------------
     5. Mobile Drawers & Modals Interactivity
     ------------------------------------------------------------------------ */
  setupMobileDrawers() {
    // Backdrop tap closes drawers
    if (this.mobileSheetBackdrop) {
      this.mobileSheetBackdrop.addEventListener('click', () => {
        this.closeAllDrawers();
      });
    }

    // Close buttons on drawers
    const closeNavBtn = document.getElementById('closeMobileNavBtn');
    if (closeNavBtn) {
      closeNavBtn.addEventListener('click', () => this.closeAllDrawers());
    }

    const closeFiltersBtn = document.getElementById('closeMobileFiltersBtn');
    if (closeFiltersBtn) {
      closeFiltersBtn.addEventListener('click', () => this.closeAllDrawers());
    }

    // Connect menu items inside mobile nav sheet
    const mobWelcomeBtn = document.getElementById('mobWelcomeGuideBtn');
    const welcomeModal = document.getElementById('welcomeModal');
    if (mobWelcomeBtn && welcomeModal) {
      mobWelcomeBtn.addEventListener('click', () => {
        this.closeAllDrawers();
        welcomeModal.classList.add('active');
      });
    }

    const mobTravelCalcBtn = document.getElementById('mobTravelCalcBtn');
    const travelCalcModal = document.getElementById('travelCalcModal');
    if (mobTravelCalcBtn && travelCalcModal) {
      mobTravelCalcBtn.addEventListener('click', () => {
        this.closeAllDrawers();
        travelCalcModal.classList.add('active');
      });
    }

    const mobLifeBackThenBtn = document.getElementById('mobLifeBackThenBtn');
    const lifeModal = document.getElementById('lifeModal');
    if (mobLifeBackThenBtn && lifeModal) {
      mobLifeBackThenBtn.addEventListener('click', () => {
        this.closeAllDrawers();
        lifeModal.classList.add('active');
      });
    }

    const mobStoryToursBtn = document.getElementById('mobStoryToursBtn');
    const toursModal = document.getElementById('toursModal');
    if (mobStoryToursBtn && toursModal) {
      mobStoryToursBtn.addEventListener('click', () => {
        this.closeAllDrawers();
        toursModal.classList.add('active');
      });
    }

    // Region jumps in mobile menu
    document.querySelectorAll('.mobile-menu-item.region-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const regionId = btn.getAttribute('data-region');
        if (typeof REGIONS !== 'undefined' && this.mapCtrl) {
          const region = REGIONS.find(r => r.id === regionId);
          if (region) {
            this.mapCtrl.flyToCoordinates(region.center, region.zoom);
          }
        }
        this.closeAllDrawers();
      });
    });

    // Map style switches in mobile menu
    document.querySelectorAll('.mobile-menu-item.map-style-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const style = btn.getAttribute('data-style');
        if (this.mapCtrl && this.mapCtrl.setMapStyle) {
          this.mapCtrl.setMapStyle(style);
        }
        this.closeAllDrawers();
      });
    });

    // Mobile filter chips inside filter sheet
    const filterChips = document.querySelectorAll('#mobileFiltersSheet .filter-chip');
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        // Mirror desktop chips
        const cat = chip.getAttribute('data-filter');
        document.querySelectorAll('#filterBar .filter-chip').forEach(dc => {
          dc.classList.toggle('active', dc.getAttribute('data-filter') === cat);
        });

        if (this.uiCtrl && this.uiCtrl.filterLocations) {
          this.uiCtrl.filterLocations(cat);
        } else if (typeof HISTORIC_LOCATIONS !== 'undefined') {
          if (cat === 'all') {
            this.mapCtrl.renderLocations(HISTORIC_LOCATIONS);
          } else if (cat === 'journeys') {
            this.mapCtrl.renderLocations(HISTORIC_LOCATIONS);
          } else {
            const filtered = HISTORIC_LOCATIONS.filter(l => l.category === cat);
            this.mapCtrl.renderLocations(filtered);
          }
        }

        this.closeAllDrawers();
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Mobile Search Modal
     ------------------------------------------------------------------------ */
  openSearchModal() {
    this.closeAllDrawers();
    if (this.mobileSearchModal) {
      this.mobileSearchModal.classList.add('open');
      const input = document.getElementById('mobileSearchInput');
      const q = input ? input.value.trim() : '';
      this.renderMobileSearchResults(q, this.currentSearchCategory || 'all');
      if (input) {
        input.focus();
      }
    }
    this.updateBottomNavState();
  }

  closeSearchModal() {
    if (this.mobileSearchModal) {
      this.mobileSearchModal.classList.remove('open');
    }
    this.updateBottomNavState();
  }

  setupMobileSearch() {
    const toggleBtn = document.getElementById('mobileSearchToggleBtn');
    const closeBtn = document.getElementById('mobileSearchCloseBtn');
    const clearBtn = document.getElementById('mobileSearchClearBtn');
    const input = document.getElementById('mobileSearchInput');
    const searchChips = document.querySelectorAll('#mobileSearchChipsBar .mobile-search-chip');

    if (toggleBtn && this.mobileSearchModal) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = this.mobileSearchModal.classList.contains('open');
        if (isOpen) {
          this.closeSearchModal();
        } else {
          this.openSearchModal();
        }
      });
    }

    if (closeBtn && this.mobileSearchModal) {
      closeBtn.addEventListener('click', () => {
        this.closeSearchModal();
      });
    }

    if (clearBtn && input) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.classList.remove('visible');
        this.renderMobileSearchResults('', this.currentSearchCategory || 'all');
        input.focus();
      });
    }

    if (input) {
      input.addEventListener('input', (e) => {
        const q = e.target.value.trim();
        if (clearBtn) {
          clearBtn.classList.toggle('visible', q.length > 0);
        }
        this.renderMobileSearchResults(q, this.currentSearchCategory || 'all');
      });
    }

    if (searchChips && searchChips.length) {
      searchChips.forEach(chip => {
        chip.addEventListener('click', () => {
          searchChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.currentSearchCategory = chip.getAttribute('data-filter') || 'all';
          const q = input ? input.value.trim() : '';
          this.renderMobileSearchResults(q, this.currentSearchCategory);
        });
      });
    }
  }

  renderMobileSearchResults(query = '', category = 'all') {
    const resultsContainer = document.getElementById('mobileSearchResults');
    if (!resultsContainer) return;

    const allLocations = typeof HISTORIC_LOCATIONS !== 'undefined' ? HISTORIC_LOCATIONS : [];
    const allRevs = typeof CHRONOLOGICAL_REVELATIONS !== 'undefined' ? CHRONOLOGICAL_REVELATIONS : [];

    const getCategoryIcon = (cat) => {
      switch (cat) {
        case 'temple': return '🏛️';
        case 'sacred-site': return '🌲';
        case 'revelation': return '📜';
        case 'homestead': return '🏡';
        case 'jail-martyrdom': return '⛓️';
        case 'trail-landmark': return '🚩';
        case 'mission': return '🌍';
        default: return '📍';
      }
    };

    const formatEra = (era) => {
      const map = {
        'new-york-early': 'New York & PA',
        'harmony-colesville': 'Harmony & Colesville',
        'kirtland-ohio': 'Kirtland & Hiram',
        'missouri-zion': 'Jackson County',
        'zions-camp': "Zion's Camp",
        'liberty-jail': 'Liberty Jail',
        'missouri-far-west': 'Far West & Caldwell',
        'nauvoo-illinois': 'Nauvoo & Carthage',
        'nauvoo-era': 'Nauvoo Era',
        'pioneer-exodus': 'Winter Quarters',
        'pioneer-trail': 'Pioneer Trail',
        'utah-west': 'Salt Lake & Utah',
        'world-missions': 'World Missions'
      };
      return map[era] || era;
    };

    // Filter locations by category
    let matchedLocations = allLocations;
    if (category !== 'all') {
      if (category === 'revelation') {
        matchedLocations = allLocations.filter(loc =>
          loc.category === 'revelation' || (loc.sectionsReceived && loc.sectionsReceived.length > 0)
        );
      } else {
        matchedLocations = allLocations.filter(loc => loc.category === category);
      }
    }

    // Filter locations by query if present
    if (query) {
      const q = query.toLowerCase();
      matchedLocations = matchedLocations.filter(loc =>
        loc.name.toLowerCase().includes(q) ||
        loc.state.toLowerCase().includes(q) ||
        loc.significance.toLowerCase().includes(q) ||
        (loc.badge && loc.badge.toLowerCase().includes(q)) ||
        (loc.sectionsReceived && loc.sectionsReceived.some(s => s.toLowerCase().includes(q)))
      );
    }

    // Filter revelations
    let matchedRevelations = [];
    if (category === 'all' || category === 'revelation') {
      if (query) {
        const q = query.toLowerCase();
        matchedRevelations = allRevs.filter(rev =>
          rev.section.toLowerCase().includes(q) ||
          rev.title.toLowerCase().includes(q) ||
          rev.locationName.toLowerCase().includes(q) ||
          (rev.summary && rev.summary.toLowerCase().includes(q)) ||
          (rev.participants && rev.participants.some(p => p.toLowerCase().includes(q)))
        );
      } else if (category === 'revelation') {
        matchedRevelations = allRevs;
      }
    }

    // Empty state
    if (matchedLocations.length === 0 && matchedRevelations.length === 0) {
      resultsContainer.innerHTML = `
        <div class="mobile-search-empty">
          <div class="mobile-search-empty-icon">🔍</div>
          <div class="mobile-search-empty-title">No Historic Sites Found</div>
          <p class="mobile-search-empty-text">No matches found for "${query}". Try searching for Sacred Grove, Kirtland, Temple, Liberty Jail, or Section 76.</p>
        </div>
      `;
      return;
    }

    let html = '';

    // Summary count bar
    const totalCount = matchedLocations.length + matchedRevelations.length;
    html += `
      <div class="mobile-search-summary">
        <span>${query ? `Matches for "${query}"` : 'Historic Landmarks'}</span>
        <span>${totalCount} Visible</span>
      </div>
    `;

    // Render locations
    if (matchedLocations.length > 0) {
      html += `
        <div class="mobile-search-section-header">
          <span>Historic Places</span>
          <span>${matchedLocations.length} Sites</span>
        </div>
      `;

      matchedLocations.forEach(loc => {
        const sectionsTags = loc.sectionsReceived && loc.sectionsReceived.length
          ? `<div class="mobile-search-card-tags">
              ${loc.sectionsReceived.slice(0, 4).map(s => `<span class="mobile-search-tag">${s}</span>`).join('')}
              ${loc.sectionsReceived.length > 4 ? `<span class="mobile-search-tag">+${loc.sectionsReceived.length - 4} more</span>` : ''}
            </div>`
          : '';

        html += `
          <div class="mobile-search-card" data-loc-id="${loc.id}">
            <div class="mobile-search-card-top">
              <div class="mobile-search-card-info">
                <div class="mobile-search-card-title">${getCategoryIcon(loc.category)} ${loc.name}</div>
                <div class="mobile-search-card-meta">
                  <span>📍 ${loc.state}</span>
                  ${loc.era ? `<span>• ${formatEra(loc.era)}</span>` : ''}
                </div>
              </div>
              <span class="search-result-badge">${loc.badge || loc.category}</span>
            </div>
            <p class="mobile-search-card-desc">${loc.significance}</p>
            ${sectionsTags}
          </div>
        `;
      });
    }

    // Render revelations
    if (matchedRevelations.length > 0) {
      html += `
        <div class="mobile-search-section-header">
          <span>D&C Revelations & Milestones</span>
          <span>${matchedRevelations.length} Events</span>
        </div>
      `;

      matchedRevelations.forEach(rev => {
        html += `
          <div class="mobile-search-card" data-chrono-index="${rev.chronoOrder - 1}" data-loc-id="${rev.locationId || ''}">
            <div class="mobile-search-card-top">
              <div class="mobile-search-card-info">
                <div class="mobile-search-card-title">📜 ${rev.section}: ${rev.title}</div>
                <div class="mobile-search-card-meta">
                  <span>📅 ${rev.dateDisplay}</span>
                  <span>• 📍 ${rev.locationName}</span>
                </div>
              </div>
              <span class="search-result-badge">Chrono #${rev.chronoOrder}</span>
            </div>
            <p class="mobile-search-card-desc">${rev.summary}</p>
            ${rev.keyVerses ? `<div class="mobile-search-scripture-quote">"${rev.keyVerses}"</div>` : ''}
          </div>
        `;
      });
    }

    resultsContainer.innerHTML = html;

    // Attach click listeners to cards
    resultsContainer.querySelectorAll('.mobile-search-card').forEach(card => {
      card.addEventListener('click', () => {
        const locId = card.getAttribute('data-loc-id');
        const chronoIndexStr = card.getAttribute('data-chrono-index');
        this.closeSearchModal();

        if (chronoIndexStr !== null && chronoIndexStr !== undefined && chronoIndexStr !== '') {
          const chronoIndex = parseInt(chronoIndexStr, 10);
          if (window.app && window.app.timelineController) {
            window.app.timelineController.goToIndex(chronoIndex, true, true);
          }
        } else if (locId) {
          if (window.app && window.app.selectLocation) {
            window.app.selectLocation(locId, true, true);
          }
        }
      });
    });
  }
}

window.MobileShell = MobileShell;
