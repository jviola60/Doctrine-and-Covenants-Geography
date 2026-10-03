/**
 * CHRONOLOGICAL TIMELINE CONTROLLER
 * Ensures strict chronological sequence of revelations and historical events from 1805 to 1890+.
 */

class TimelineController {
  constructor(mapController) {
    this.mapCtrl = mapController;
    this.currentIndex = 0;
    this.isPlaying = false;
    this.playInterval = null;
    this.slider = document.getElementById('timelineSlider');
    this.playBtn = document.getElementById('timelinePlayBtn');
    this.prevBtn = document.getElementById('timelinePrevBtn');
    this.nextBtn = document.getElementById('timelineNextBtn');
    this.stepBadge = document.getElementById('timelineStepBadge');
    this.currentTitle = document.getElementById('timelineCurrentTitle');
    this.currentDate = document.getElementById('timelineCurrentDate');
  }

  init() {
    if (!this.slider) return;

    this.slider.min = 0;
    this.slider.max = CHRONOLOGICAL_REVELATIONS.length - 1;
    this.slider.value = 0;

    this.slider.addEventListener('input', (e) => {
      this.goToIndex(parseInt(e.target.value, 10));
    });

    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => this.togglePlay());
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    this.updateDisplay();
  }

  goToIndex(index, panMap = true) {
    if (index < 0) index = 0;
    if (index >= CHRONOLOGICAL_REVELATIONS.length) index = CHRONOLOGICAL_REVELATIONS.length - 1;

    this.currentIndex = index;
    this.slider.value = index;

    const event = CHRONOLOGICAL_REVELATIONS[index];
    this.updateDisplay(event);

    if (panMap && event) {
      this.mapCtrl.flyToCoordinates(event.coordinates, 12);
      if (event.locationId) {
        this.mapCtrl.highlightLocation(event.locationId, false);
      }
      // Update sidebar dossier with this event
      window.app.displayChronologicalEvent(event);
    }
  }

  next() {
    if (this.currentIndex < CHRONOLOGICAL_REVELATIONS.length - 1) {
      this.goToIndex(this.currentIndex + 1);
    } else {
      this.pause();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.goToIndex(this.currentIndex - 1);
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    if (this.playBtn) {
      this.playBtn.innerHTML = '<span>⏸ Pause</span>';
      this.playBtn.classList.add('playing');
    }

    this.playInterval = setInterval(() => {
      if (this.currentIndex >= CHRONOLOGICAL_REVELATIONS.length - 1) {
        this.goToIndex(0);
      } else {
        this.next();
      }
    }, 4500);
  }

  pause() {
    this.isPlaying = false;
    if (this.playInterval) {
      clearInterval(this.playInterval);
      this.playInterval = null;
    }
    if (this.playBtn) {
      this.playBtn.innerHTML = '<span>▶ Play Chronology</span>';
      this.playBtn.classList.remove('playing');
    }
  }

  updateDisplay(event = CHRONOLOGICAL_REVELATIONS[this.currentIndex]) {
    if (!event) return;

    if (this.stepBadge) {
      this.stepBadge.textContent = `Event ${event.chronoOrder} of ${CHRONOLOGICAL_REVELATIONS.length}`;
    }

    if (this.currentTitle) {
      this.currentTitle.textContent = `${event.section}: ${event.title}`;
      this.currentTitle.title = `${event.section}: ${event.title} (${event.locationName})`;
    }

    if (this.currentDate) {
      this.currentDate.textContent = `📅 ${event.dateDisplay} • 📍 ${event.locationName}`;
    }
  }
}

window.TimelineController = TimelineController;
