/**
 * DOCTRINE & COVENANTS GEOGRAPHY - MAIN APPLICATION BOOTSTRAP
 */

class Application {
  constructor() {
    this.mapController = new MapController();
    this.timelineController = new TimelineController(this.mapController);
    this.uiController = new UIController(this.mapController, this.timelineController);
    this.mobileShell = new MobileShell(this.mapController, this.timelineController, this.uiController);
    this.currentLocationId = null;
  }

  init() {
    this.mapController.init();
    this.timelineController.init();
    this.uiController.init();
    this.mobileShell.init();

    // Reset Brand click
    const brandHome = document.getElementById('appBrandHome');
    if (brandHome) {
      brandHome.addEventListener('click', () => {
        this.mapController.flyToCoordinates([40.55, -89.5], 6);
      });
    }

    // Default select Palmyra / Sacred Grove
    this.selectLocation('sacred-grove-ny', false);
  }

  selectLocation(locId, panTo = true) {
    this.currentLocationId = locId;
    const loc = HISTORIC_LOCATIONS.find(l => l.id === locId);
    if (!loc) return;

    this.mapController.highlightLocation(locId, panTo);

    // Update Desktop Sidebar
    this.renderLocationToSidebar(loc);

    // Expand sidebar if collapsed
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('collapsed')) {
      sidebar.classList.remove('collapsed');
    }

    // Update Mobile Sheet
    this.renderLocationToMobileSheet(loc);
  }

  renderLocationToSidebar(loc) {
    const titleEl = document.getElementById('sidebarTitle');
    const subEl = document.getElementById('sidebarSubtitle');
    const badgeEl = document.getElementById('sidebarBadge');

    if (titleEl) titleEl.textContent = loc.name;
    if (subEl) subEl.textContent = `${loc.state} • Coordinates: ${loc.coordinates[0].toFixed(4)}°N, ${loc.coordinates[1].toFixed(4)}°W`;
    if (badgeEl) badgeEl.textContent = loc.badge || loc.category;

    const dossier = PLACE_DOSSIERS[loc.id];

    // Tab 1: Overview
    const overviewTab = document.getElementById('tabOverview');
    if (overviewTab) {
      let html = `
        <div class="doc-section">
          <h4 class="doc-section-title">Historical Overview</h4>
          <p class="doc-paragraph">${dossier ? dossier.overview : loc.significance}</p>
        </div>
      `;

      if (dossier && dossier.historicalSignificance) {
        html += `
          <div class="doc-section">
            <h4 class="doc-section-title">Historical Milestones & Revelations</h4>
            <ul class="historical-list">
              ${dossier.historicalSignificance.map(item => `<li class="historical-list-item">${item}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      if (dossier && dossier.pioneerEraNote) {
        html += `
          <div class="doc-section">
            <h4 class="doc-section-title">Preservation & Modern Site</h4>
            <p class="doc-paragraph" style="font-size: 14.5px; color: var(--ink-secondary);">${dossier.pioneerEraNote}</p>
          </div>
        `;
      }

      overviewTab.innerHTML = html;
    }

    // Tab 2: Revelations & Scripture Text
    const scripturesTab = document.getElementById('tabScriptures');
    if (scripturesTab) {
      const associatedRevs = CHRONOLOGICAL_REVELATIONS.filter(r => r.locationId === loc.id);
      let html = '';

      if (associatedRevs.length) {
        associatedRevs.forEach(rev => {
          html += `
            <div class="doc-section">
              <h4 class="doc-section-title">${rev.section}: ${rev.title}</h4>
              <div class="scripture-callout">
                <p class="scripture-quote">"${rev.keyVerses}"</p>
                <div class="scripture-ref">
                  <span>Received: ${rev.dateDisplay}</span>
                  <a href="${rev.churchUrl}" target="_blank" rel="noopener" style="color: var(--leather-brown); text-decoration: underline;">Read on Church Site ↗</a>
                </div>
              </div>
              <p style="font-size: 13.5px; line-height: 1.5; color: var(--ink-secondary);">${rev.summary}</p>
            </div>
          `;
        });
      } else {
        html = `
          <div style="padding: 20px; text-align: center; color: var(--ink-muted);">
            No direct canonical revelations received at this site, but critical historical milestones took place here.
          </div>
        `;
      }
      scripturesTab.innerHTML = html;
    }

    // Tab 3: Primary Sources & Joseph Smith Papers
    const sourcesTab = document.getElementById('tabSources');
    if (sourcesTab) {
      let html = `<div class="doc-section"><h4 class="doc-section-title">Authoritative Archival Cross-References</h4>`;

      if (loc.churchUrl) {
        html += `
          <a href="${loc.churchUrl}" target="_blank" rel="noopener" class="source-card">
            <div class="source-info">
              <span class="source-name">ChurchofJesusChrist.org Historic Sites</span>
              <span class="source-subtext">Official historical documentation & visitors' guide</span>
            </div>
            <span class="source-badge church">Church Official ↗</span>
          </a>
        `;
      }

      if (loc.jspUrl) {
        html += `
          <a href="${loc.jspUrl}" target="_blank" rel="noopener" class="source-card">
            <div class="source-info">
              <span class="source-name">The Joseph Smith Papers</span>
              <span class="source-subtext">Original historical manuscripts, journals & legal documents</span>
            </div>
            <span class="source-badge jsp">JSP Archival ↗</span>
          </a>
        `;
      }

      if (dossier && dossier.primarySources) {
        dossier.primarySources.forEach(src => {
          html += `
            <a href="${src.url}" target="_blank" rel="noopener" class="source-card">
              <div class="source-info">
                <span class="source-name">${src.name}</span>
                <span class="source-subtext">Original source text transcript</span>
              </div>
              <span class="source-badge jsp">Document Scan ↗</span>
            </a>
          `;
        });
      }

      html += `</div>`;
      sourcesTab.innerHTML = html;
    }
  }

  renderLocationToMobileSheet(loc) {
    const dossier = PLACE_DOSSIERS[loc.id];
    let html = `
      <div style="margin-bottom: 12px; border-bottom: 1px solid var(--border-sepia); padding-bottom: 10px;">
        <span class="sidebar-badge">${loc.badge || loc.state}</span>
        <h2 style="font-family: var(--font-display); font-size: 19px; font-weight: 700; margin: 4px 0;">${loc.name}</h2>
        <span style="font-family: var(--font-serif); font-size: 13.5px; color: var(--ink-secondary); font-style: italic;">${loc.state}</span>
      </div>
      <p style="font-family: var(--font-serif); font-size: 15.5px; line-height: 1.6; margin-bottom: 14px;">${dossier ? dossier.overview : loc.significance}</p>
    `;

    if (loc.churchUrl || loc.jspUrl) {
      html += `<div style="display: flex; gap: 8px; margin-top: 12px;">`;
      if (loc.churchUrl) {
        html += `<a href="${loc.churchUrl}" target="_blank" rel="noopener" class="btn btn-outline" style="flex: 1; justify-content: center; font-size: 12px;">Church Site ↗</a>`;
      }
      if (loc.jspUrl) {
        html += `<a href="${loc.jspUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="flex: 1; justify-content: center; font-size: 12px;">JSP Papers ↗</a>`;
      }
      html += `</div>`;
    }

    this.mobileShell.updateSheetContent(html);
  }

  displayChronologicalEvent(event) {
    if (!event) return;

    const titleEl = document.getElementById('sidebarTitle');
    const subEl = document.getElementById('sidebarSubtitle');
    const badgeEl = document.getElementById('sidebarBadge');

    if (titleEl) titleEl.textContent = `${event.section}: ${event.title}`;
    if (subEl) subEl.textContent = `📅 ${event.dateDisplay} • 📍 ${event.locationName}`;
    if (badgeEl) badgeEl.textContent = `Chronological Order #${event.chronoOrder}`;

    const overviewTab = document.getElementById('tabOverview');
    if (overviewTab) {
      overviewTab.innerHTML = `
        <div class="doc-section">
          <h4 class="doc-section-title">Chronological Event Context (#${event.chronoOrder})</h4>
          <p class="doc-paragraph">${event.summary}</p>
        </div>
        <div class="doc-section">
          <h4 class="doc-section-title">Key Revelatory Passage</h4>
          <div class="scripture-callout">
            <p class="scripture-quote">"${event.keyVerses}"</p>
            <div class="scripture-ref">
              <span>Date: ${event.dateDisplay}</span>
              <a href="${event.churchUrl}" target="_blank" rel="noopener" style="color: var(--leather-brown); text-decoration: underline;">Read on Church Site ↗</a>
            </div>
          </div>
        </div>
        ${event.participants && event.participants.length ? `
          <div class="doc-section">
            <h4 class="doc-section-title">Key Historical Participants</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${event.participants.map(p => `<span style="font-size: 12px; font-weight: 600; padding: 3px 8px; background: var(--bg-parchment-dark); border: 1px solid var(--border-sepia); border-radius: 4px;">${p}</span>`).join('')}
            </div>
          </div>
        ` : ''}
      `;
    }

    const sourcesTab = document.getElementById('tabSources');
    if (sourcesTab) {
      sourcesTab.innerHTML = `
        <div class="doc-section">
          <h4 class="doc-section-title">Primary Archival References</h4>
          <a href="${event.churchUrl}" target="_blank" rel="noopener" class="source-card">
            <div class="source-info">
              <span class="source-name">ChurchofJesusChrist.org Scriptures</span>
              <span class="source-subtext">Official scripture publication & study context</span>
            </div>
            <span class="source-badge church">Church Official ↗</span>
          </a>
          <a href="${event.jspUrl}" target="_blank" rel="noopener" class="source-card">
            <div class="source-info">
              <span class="source-name">The Joseph Smith Papers</span>
              <span class="source-subtext">Original historical revelation manuscript scan</span>
            </div>
            <span class="source-badge jsp">JSP Archival ↗</span>
          </a>
        </div>
      `;
    }

    // Expand sidebar if collapsed
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('collapsed')) {
      sidebar.classList.remove('collapsed');
    }

    // Also update mobile bottom sheet
    this.mobileShell.updateSheetContent(`
      <div style="margin-bottom: 12px; border-bottom: 1px solid var(--border-sepia); padding-bottom: 10px;">
        <span class="sidebar-badge">Chronological #${event.chronoOrder}</span>
        <h2 style="font-family: var(--font-display); font-size: 18px; font-weight: 700; margin: 4px 0;">${event.section}: ${event.title}</h2>
        <span style="font-family: var(--font-serif); font-size: 13px; color: var(--ink-secondary); font-style: italic;">📅 ${event.dateDisplay} • 📍 ${event.locationName}</span>
      </div>
      <p style="font-family: var(--font-serif); font-size: 15px; line-height: 1.6; margin-bottom: 12px;">${event.summary}</p>
      <div class="scripture-callout">
        <p class="scripture-quote" style="font-size: 14.5px;">"${event.keyVerses}"</p>
      </div>
      <div style="display: flex; gap: 8px; margin-top: 14px;">
        <a href="${event.churchUrl}" target="_blank" rel="noopener" class="btn btn-outline" style="flex: 1; justify-content: center; font-size: 12px;">Church Site ↗</a>
        <a href="${event.jspUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="flex: 1; justify-content: center; font-size: 12px;">JSP Papers ↗</a>
      </div>
    `);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new Application();
  window.app.init();
});
