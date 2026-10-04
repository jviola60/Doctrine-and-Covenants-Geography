/**
 * MAP CONTROLLER
 * Leaflet map orchestration, markers, journey polylines, layers, and focus methods.
 */

class MapController {
  constructor() {
    this.map = null;
    this.markerLayerGroup = L.layerGroup();
    this.journeyLayerGroup = L.layerGroup();
    this.markers = new Map();
    this.activeMarker = null;
    this.currentTileLayer = null;
    this.currentStyle = 'parchment';
  }

  init() {
    // Initial center on Nauvoo / Midwest expanse
    this.map = L.map('map', {
      center: [40.55, -89.5],
      zoom: 6,
      minZoom: 3,
      maxZoom: 18,
      zoomControl: false
    });

    // Custom Zoom control in top-left
    L.control.zoom({ position: 'topleft' }).addTo(this.map);

    this.setMapStyle('parchment');

    this.markerLayerGroup.addTo(this.map);
    this.journeyLayerGroup.addTo(this.map);

    this.renderLocations(HISTORIC_LOCATIONS);
    this.renderJourneys(HISTORIC_JOURNEYS);
  }

  setMapStyle(styleName) {
    if (this.currentTileLayer) {
      this.map.removeLayer(this.currentTileLayer);
    }

    const mapContainer = document.getElementById('map');
    mapContainer.classList.remove('map-style-parchment', 'map-style-relief', 'map-style-satellite', 'map-style-modern');

    if (styleName === 'satellite') {
      this.currentTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxNativeZoom: 18,
        maxZoom: 18
      });
      mapContainer.classList.add('map-style-satellite');
    } else if (styleName === 'relief') {
      this.currentTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri World Shaded Relief',
        maxNativeZoom: 13,
        maxZoom: 18,
        className: 'parchment-tiles'
      });
      mapContainer.classList.add('map-style-relief');
    } else if (styleName === 'modern') {
      // Esri World Street Map (OpenStreetMap's tile servers block requests without a
      // valid Referer, e.g. file:// pages, and disallow heavy app usage).
      this.currentTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
        maxNativeZoom: 19,
        maxZoom: 19
      });
      mapContainer.classList.add('map-style-modern');
    } else {
      // Default: Parchment / Esri World Topographic Map with Archival Sepia Filter
      this.currentTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri World Topo Map &mdash; National Geographic, DeLorme, NAVTEQ, USGS',
        maxNativeZoom: 19,
        maxZoom: 19,
        className: 'parchment-tiles'
      });
      mapContainer.classList.add('map-style-parchment');
    }

    this.currentTileLayer.addTo(this.map);
    this.currentStyle = styleName;
  }

  getCategoryIcon(category) {
    switch (category) {
      case 'temple': return '🏛️';
      case 'sacred-site': return '🌲';
      case 'revelation': return '📜';
      case 'homestead': return '🏡';
      case 'jail-martyrdom': return '⛓️';
      case 'trail-landmark': return '⛰️';
      case 'mission': return '🌍';
      default: return '📍';
    }
  }

  renderLocations(locations) {
    this.markerLayerGroup.clearLayers();
    this.markers.clear();

    locations.forEach(loc => {
      const iconEmoji = this.getCategoryIcon(loc.category);
      
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div class="marker-pulse"></div>
          <div class="marker-pin category-${loc.category}">
            <span>${iconEmoji}</span>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker(loc.coordinates, { icon: customIcon });

      // Leaflet Popup
      const popupHtml = `
        <div class="custom-popup-box">
          <div class="popup-header">
            <span class="popup-badge">${loc.badge || loc.state}</span>
            <h3 class="popup-title">${loc.name}</h3>
            <span class="popup-location">${loc.state}</span>
          </div>
          <p class="popup-body">${loc.significance.substring(0, 160)}...</p>
          ${loc.sectionsReceived && loc.sectionsReceived.length ? `
            <div class="popup-sections">
              ${loc.sectionsReceived.slice(0, 4).map(s => `<span class="popup-section-tag">${s}</span>`).join('')}
            </div>
          ` : ''}
          <div class="popup-actions">
            <button class="popup-btn primary" onclick="window.app.selectLocation('${loc.id}')">Open Codex</button>
            ${loc.churchUrl ? `<a href="${loc.churchUrl}" target="_blank" rel="noopener" class="popup-btn">Church Site ↗</a>` : ''}
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 300, offset: [0, -10] });
      marker.bindTooltip(loc.name, { direction: 'top', offset: [0, -14] });

      marker.on('click', () => {
        window.app.selectLocation(loc.id, false);
      });

      marker.locData = loc;
      this.markerLayerGroup.addLayer(marker);
      this.markers.set(loc.id, marker);
    });
  }

  renderJourneys(journeys) {
    this.journeyLayerGroup.clearLayers();

    journeys.forEach(journey => {
      const baseWeight = journey.weight || 4;
      const polyline = L.polyline(journey.coordinates, {
        color: journey.color,
        weight: baseWeight,
        dashArray: journey.dashArray === 'solid' ? null : journey.dashArray,
        opacity: 0.88
      });

      // Hover feedback for easy interaction
      polyline.on('mouseover', () => {
        polyline.setStyle({ weight: baseWeight + 3, opacity: 1.0 });
      });
      polyline.on('mouseout', () => {
        polyline.setStyle({ weight: baseWeight, opacity: 0.88 });
      });

      // Rich popup on click
      const popupHtml = `
        <div class="custom-popup-box" style="min-width: 260px; max-width: 320px;">
          <div class="popup-header" style="border-left: 4px solid ${journey.color}; padding-left: 8px;">
            <span class="popup-badge" style="background: ${journey.color}; color: #fff;">Historic Expedition</span>
            <h3 class="popup-title" style="margin-top: 4px;">${journey.name}</h3>
            <span class="popup-location">${journey.dates} • ${journey.totalMiles} Miles</span>
          </div>
          <div class="popup-body" style="padding: 10px 0 0 0; font-size: 13px; line-height: 1.5; color: var(--ink-secondary);">
            <p style="margin-bottom: 8px;"><strong style="color: var(--ink-primary);">Purpose:</strong> ${journey.purpose}</p>
            <p>${journey.description}</p>
          </div>
        </div>
      `;
      polyline.bindPopup(popupHtml, { maxWidth: 340 });
      polyline.bindTooltip(`<b>${journey.name}</b><br>${journey.dates} • ${journey.totalMiles} mi (Click for history)`, { sticky: true });
      this.journeyLayerGroup.addLayer(polyline);

      // Add small circle markers for milestones
      if (journey.milestones) {
        journey.milestones.forEach(m => {
          const circle = L.circleMarker([m.lat, m.lng], {
            radius: 6,
            color: journey.color,
            fillColor: '#ffffff',
            fillOpacity: 1,
            weight: 2.5
          });
          circle.bindTooltip(`<b>${m.name}</b><br>${m.date} (${journey.name})`);
          circle.bindPopup(`
            <div class="custom-popup-box">
              <div class="popup-header">
                <span class="popup-badge" style="background: ${journey.color}; color: #fff;">Milestone</span>
                <h3 class="popup-title">${m.name}</h3>
                <span class="popup-location">${m.date}</span>
              </div>
              <div class="popup-body" style="padding-top: 8px; font-size: 13px;">
                <p><strong>Expedition:</strong> ${journey.name}</p>
              </div>
            </div>
          `, { maxWidth: 280 });
          this.journeyLayerGroup.addLayer(circle);
        });
      }
    });
  }

  highlightLocation(locId, panTo = true) {
    if (this.activeMarker) {
      const el = this.activeMarker.getElement();
      if (el) el.classList.remove('active');
    }

    const marker = this.markers.get(locId);
    if (marker) {
      this.activeMarker = marker;
      const el = marker.getElement();
      if (el) el.classList.add('active');

      if (panTo) {
        this.map.flyTo(marker.getLatLng(), Math.max(this.map.getZoom(), 11), {
          duration: 1.2
        });
      }
    }
  }

  flyToCoordinates(latLng, zoom = 12) {
    this.map.flyTo(latLng, zoom, { duration: 1.2 });
  }

  filterMarkers(category) {
    if (category === 'all') {
      this.renderLocations(HISTORIC_LOCATIONS);
      this.journeyLayerGroup.addTo(this.map);
      return;
    }

    if (category === 'journeys') {
      this.markerLayerGroup.clearLayers();
      this.journeyLayerGroup.addTo(this.map);
      return;
    }

    const filtered = HISTORIC_LOCATIONS.filter(loc => loc.category === category);
    this.renderLocations(filtered);
  }
}

window.MapController = MapController;
