/**
 * HISTORIC JOURNEYS & EXPEDITION TRAILS (~1830 – 1847)
 *
 * Exact polylines, milestones, historical context, and distance data.
 */

const HISTORIC_JOURNEYS = [
  {
    id: "zions-camp-1834",
    name: "Zion's Camp March (May 5 – June 25, 1834)",
    color: "#b8860b", // Dark Goldenrod
    dashArray: "6, 6",
    weight: 4,
    description: "An extraordinary 1,000-mile military-style relief march led by the Prophet Joseph Smith with ~205 men and 10 women/children from Kirtland, Ohio to Clay County, Missouri to assist expelled Saints.",
    purpose: "Relief and redemption of the exiled Saints in Jackson County, Missouri",
    dates: "May 5, 1834 – June 25, 1834",
    totalMiles: 980,
    coordinates: [
      [41.6247, -81.3614], // Kirtland, OH
      [41.0100, -81.5600], // New Portage (Akron), OH
      [40.8000, -81.9300], // Wooster, OH
      [40.7500, -82.5200], // Mansfield, OH
      [39.9200, -83.8100], // Springfield, OH
      [39.8300, -84.1900], // Dayton, OH
      [39.8300, -84.9000], // Richmond, IN
      [39.7684, -86.1581], // Indianapolis, IN
      [39.4667, -87.4139], // Terre Haute, IN (Wabash River crossing)
      [39.6111, -87.6961], // Paris, IL
      [39.7817, -89.6501], // Springfield, IL
      [39.5400, -90.9500], // Atlas, IL (Pike County)
      [39.3800, -91.0400], // Louisiana, MO / Mississippi River crossing
      [39.5200, -91.7500], // Salt River (Allred Camp join), MO
      [39.6970, -94.1311], // Caldwell / Ray county approaches
      [39.2239, -94.2700], // Fishing River (D&C 105), MO
      [39.2464, -94.4216]  // Liberty / Clay County, MO
    ],
    milestones: [
      { name: "Kirtland Departure", date: "May 5, 1834", lat: 41.6247, lng: -81.3614 },
      { name: "Indianapolis Crossing", date: "May 21, 1834", lat: 39.7684, lng: -86.1581 },
      { name: "Zelph's Mound Discovery", date: "June 3, 1834", lat: 39.6100, lng: -90.6500 },
      { name: "Fishing River Storm (D&C 105)", date: "June 19–22, 1834", lat: 39.2239, lng: -94.2700 }
    ]
  },
  {
    id: "mormon-pioneer-trail-1846-1847",
    name: "The Mormon Pioneer Trail (1846 – 1847)",
    color: "#8b2500", // Rust Red
    dashArray: "solid",
    weight: 4,
    description: "The epic 1,300-mile overland migration of Brigham Young and the Pioneer Vanguard Company from Nauvoo across Iowa to Winter Quarters, then over the Great Plains and Rocky Mountains to the Salt Lake Valley.",
    purpose: "Finding an asylum in the Rocky Mountain West beyond the borders of the United States",
    dates: "February 4, 1846 – July 24, 1847",
    totalMiles: 1300,
    coordinates: [
      [40.5506, -91.3842], // Nauvoo Temple, IL
      [40.5283, -91.4983], // Sugar Creek Encampment, IA
      [40.6400, -91.9500], // Richardson's Point, IA
      [40.6300, -93.1000], // Locust Creek ('Come, Come Ye Saints' written), IA
      [40.8267, -93.6133], // Garden Grove Waystation, IA
      [41.0267, -94.1333], // Mount Pisgah Waystation, IA
      [41.2619, -95.8608], // Kanesville / Council Bluffs, IA
      [41.3344, -95.9622], // Winter Quarters (Florence), NE
      [41.2700, -96.2500], // Elkhorn River Ferry, NE
      [41.4300, -97.3500], // Loup Fork crossing, Columbus, NE
      [40.7000, -99.0800], // Fort Kearny area / Platte River, NE
      [41.1300, -100.760], // North Platte, NE
      [41.7033, -103.348], // Chimney Rock, NE
      [41.8381, -103.717], // Scotts Bluff, NE
      [42.2039, -104.527], // Fort Laramie, WY
      [42.4939, -107.131], // Independence Rock, WY
      [42.4333, -107.266], // Devil's Gate & Martin's Cove, WY
      [42.3300, -108.900], // South Pass (Continental Divide), WY
      [41.8500, -109.950], // Green River crossing (Lombard Ferry), WY
      [41.3172, -110.387], // Fort Bridger, WY
      [41.1800, -111.450], // Echo Canyon, UT
      [40.8500, -111.600], // East Canyon / Big Mountain Pass, UT
      [40.7500, -111.800], // Emigration Canyon, UT
      [40.7704, -111.892]  // Temple Square, Salt Lake City, UT
    ],
    milestones: [
      { name: "Exodus from Nauvoo", date: "Feb 4, 1846", lat: 40.5506, lng: -91.3842 },
      { name: "Winter Quarters Camps (D&C 136)", date: "Winter 1846–1847", lat: 41.3344, lng: -95.9622 },
      { name: "Chimney Rock Sighting", date: "May 22, 1847", lat: 41.7033, lng: -103.348 },
      { name: "South Pass Continental Divide", date: "June 27, 1847", lat: 42.3300, lng: -108.900 },
      { name: "Entrance into Salt Lake Valley", date: "July 24, 1847", lat: 40.7704, lng: -111.892 }
    ]
  },
  {
    id: "mission-to-lamanites-1830",
    name: "Mission to the Lamanites (1830 – 1831)",
    color: "#2e6f40", // Forest Green
    dashArray: "4, 4",
    weight: 3,
    description: "Oliver Cowdery, Parley P. Pratt, Peter Whitmer Jr., and Ziba Peterson traveled 1,500 miles on foot in winter from New York to the western borders of Missouri. Their stop in Kirtland, Ohio converted over 130 people including Sidney Rigdon, changing Church history. They also preached the restored gospel to the Wyandot Nation at Upper Sandusky, Ohio.",
    purpose: "Preaching Book of Mormon to Native American tribes and scouting Zion",
    dates: "October 1830 – January 1831",
    totalMiles: 1500,
    coordinates: [
      [42.8715, -76.8858], // Fayette, NY
      [42.8864, -78.8784], // Buffalo, NY
      [41.6267, -81.3644], // Kirtland, OH (Over 130 baptized!)
      [40.8267, -83.2827], // Upper Sandusky (Wyandot Nation), OH
      [39.1031, -84.5120], // Cincinnati, OH
      [38.6270, -90.1994], // St. Louis, MO
      [38.5767, -92.1735], // Jefferson City, MO
      [39.0917, -94.4283]  // Independence, Jackson County, MO
    ],
    milestones: [
      { name: "Fayette Commission", date: "Oct 1830", lat: 42.8715, lng: -76.8858 },
      { name: "Kirtland Spiritual Revival", date: "Nov 1830", lat: 41.6267, lng: -81.3644 },
      { name: "Upper Sandusky (Wyandot Nation)", date: "Nov 1830", lat: 40.8267, lng: -83.2827 },
      { name: "Arrival in Independence", date: "Jan 13, 1831", lat: 39.0917, lng: -94.4283 }
    ]
  },
  {
    id: "joseph-smith-1831-missouri",
    name: "Joseph Smith's First Journey to Missouri (1831)",
    color: "#1d4e89", // Deep Indigo
    dashArray: "5, 5",
    weight: 3,
    description: "Joseph Smith, Sidney Rigdon, and companions traveled from Kirtland to Jackson County, Missouri to identify and dedicate the land of Zion and the temple lot (D&C 57 & 58).",
    purpose: "Receiving the location of Zion and dedicating the Temple site",
    dates: "June 19, 1831 – August 27, 1831",
    totalMiles: 900,
    coordinates: [
      [41.6247, -81.3614], // Kirtland, OH
      [40.6000, -80.6500], // Wellsville (Ohio River), OH
      [39.1031, -84.5120], // Cincinnati (steamboat), OH
      [37.0800, -89.1700], // Cairo (confluence of Ohio & Miss.), IL
      [38.6270, -90.1994], // St. Louis, MO
      [38.8000, -91.5000], // Walked 300 miles across Missouri
      [39.0917, -94.4283]  // Independence, MO
    ],
    milestones: [
      { name: "Departure from Kirtland", date: "June 19, 1831", lat: 41.6247, lng: -81.3614 },
      { name: "Arrival in Independence", date: "July 14, 1831", lat: 39.0917, lng: -94.4283 },
      { name: "Temple Lot Dedicated (D&C 57)", date: "Aug 3, 1831", lat: 39.0917, lng: -94.4283 }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HISTORIC_JOURNEYS };
}
