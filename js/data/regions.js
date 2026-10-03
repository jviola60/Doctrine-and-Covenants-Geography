/**
 * GEOGRAPHIC REGIONS & BOUNDS
 */

const REGIONS = [
  {
    id: "all-overview",
    name: "🗺️ All Regions (Overview)",
    description: "Entire expanse of Church History from New York across the plains to Salt Lake Valley and beyond.",
    center: [41.5, -92.0],
    zoom: 5
  },
  {
    id: "new-york-early",
    name: "📜 New York & Pennsylvania (1805–1831)",
    description: "Cradle of the Restoration: Palmyra, Hill Cumorah, Harmony Priesthood Restoration site, and Fayette Whitmer Farm.",
    center: [42.6, -76.5],
    zoom: 7
  },
  {
    id: "kirtland-ohio",
    name: "🏛️ Kirtland & Hiram, Ohio (1831–1838)",
    description: "Headquarters of the Church: Kirtland Temple, Whitney Store, Johnson Farm in Hiram, and School of the Prophets.",
    center: [41.5, -81.3],
    zoom: 9
  },
  {
    id: "missouri-zion",
    name: "📍 Jackson County & Independence (1831–1833)",
    description: "Center place of Zion, Temple Lot, W.W. Phelps printing press, and Kaw Township.",
    center: [39.09, -94.42],
    zoom: 11
  },
  {
    id: "missouri-far-west",
    name: "⚔️ Far West, Adam-ondi-Ahman & Liberty (1838–1839)",
    description: "Far West Temple site, Adam-ondi-Ahman, Haun's Mill, and Liberty Jail.",
    center: [39.6, -94.2],
    zoom: 9
  },
  {
    id: "nauvoo-illinois",
    name: "🌊 Nauvoo & Carthage, Illinois (1839–1846)",
    description: "City of Joseph on the Mississippi River: Nauvoo Temple, Red Brick Store, Mansion House, and Carthage Jail.",
    center: [40.5, -91.3],
    zoom: 10
  },
  {
    id: "pioneer-exodus",
    name: "⛺ Iowa Waystations & Winter Quarters (1846–1847)",
    description: "Sugar Creek, Mount Pisgah, Council Bluffs, and Winter Quarters (D&C 136).",
    center: [41.1, -94.5],
    zoom: 7
  },
  {
    id: "pioneer-trail",
    name: "⛰️ Mormon Pioneer Trail (1847)",
    description: "Overland trail across the Platte River, Chimney Rock, Fort Laramie, South Pass to Salt Lake.",
    center: [41.8, -104.0],
    zoom: 6
  },
  {
    id: "utah-west",
    name: "🏔️ Salt Lake Valley & Utah Temples (1847–1890)",
    description: "Temple Square, Ensign Peak, St. George, Manti, Logan temples, and 1890 Manifesto.",
    center: [39.8, -112.0],
    zoom: 7
  },
  {
    id: "world-missions",
    name: "🌍 British Isles & Global Missions (1837–1890)",
    description: "Preston, River Ribble, Herefordshire Benbow Farm, and early Pacific missions.",
    center: [53.5, -2.7],
    zoom: 6
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { REGIONS };
}
