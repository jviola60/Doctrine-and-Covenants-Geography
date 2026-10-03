/**
 * HISTORIC LOCATIONS OF THE DOCTRINE & COVENANTS (~1805 – 1890)
 *
 * Comprehensive geographic coordinates, historical significance, D&C sections received,
 * and dual archival links to ChurchofJesusChrist.org and JosephSmithPapers.org.
 */

const HISTORIC_LOCATIONS = [
  // ==========================================
  // VERMONT & EARLY CHILDHOOD
  // ==========================================
  {
    id: "sharon-vt",
    name: "Sharon, Vermont (Birthplace)",
    category: "sacred-site",
    coordinates: [43.7915, -72.4533],
    state: "Vermont",
    era: "new-york-early",
    significance: "Birthplace of the Prophet Joseph Smith Jr. on December 23, 1805. Today marked by a 38.5-foot granite monument representing each year of his mortal life.",
    sectionsReceived: ["Milestone: Birth"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/joseph-smith-birthplace?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/sharon-vermont",
    badge: "Birthplace"
  },
  {
    id: "lebanon-nh",
    name: "Lebanon, New Hampshire",
    category: "homestead",
    coordinates: [43.6420, -72.2518],
    state: "New Hampshire",
    era: "new-york-early",
    significance: "Location of seven-year-old Joseph's miraculous leg surgery performed without anesthesia by Dr. Nathan Smith of Dartmouth College following typhoid fever.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/joseph-smiths-childhood-illness?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/lebanon-new-hampshire",
    badge: "Childhood Surgery"
  },

  // ==========================================
  // NEW YORK & PENNSYLVANIA (CRADLE OF RESTORATION)
  // ==========================================
  {
    id: "sacred-grove-ny",
    name: "The Sacred Grove, Manchester/Palmyra",
    category: "sacred-site",
    coordinates: [43.0375, -77.2346],
    state: "New York",
    era: "new-york-early",
    significance: "Site of the First Vision in the spring of 1820 where God the Father and His Beloved Son Jesus Christ appeared to the 14-year-old Joseph Smith.",
    sectionsReceived: ["Milestone: First Vision"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/sacred-grove?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/sacred-grove",
    badge: "First Vision"
  },
  {
    id: "manchester-ny",
    name: "Smith Family Log & Frame Homes, Manchester",
    category: "homestead",
    coordinates: [43.0378, -77.2335],
    state: "New York",
    era: "new-york-early",
    significance: "The log home where Angel Moroni visited Joseph during the night of Sept 21-22, 1823. Nearby frame home built by Joseph Sr. and Hyrum.",
    sectionsReceived: ["D&C 2", "D&C 19", "D&C 22", "D&C 23"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/smith-family-farm?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/manchester-new-york",
    badge: "Moroni Visits"
  },
  {
    id: "hill-cumorah-ny",
    name: "Hill Cumorah, Manchester",
    category: "sacred-site",
    coordinates: [43.0069, -77.2238],
    state: "New York",
    era: "new-york-early",
    significance: "Prominent drumlin where Moroni deposited the gold plates around 421 AD. Joseph visited annually from 1823 to 1827 when he received the record.",
    sectionsReceived: ["Milestone: Gold Plates"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/hill-cumorah?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/hill-cumorah",
    badge: "Gold Plates"
  },
  {
    id: "grandin-print-shop-ny",
    name: "E.B. Grandin Print Shop, Palmyra",
    category: "sacred-site",
    coordinates: [43.0637, -77.2330],
    state: "New York",
    era: "new-york-early",
    significance: "Three-story brick building where 5,000 copies of the first edition of the Book of Mormon were printed between August 1829 and March 1830.",
    sectionsReceived: ["Milestone: Book of Mormon Publication"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/book-of-mormon-historic-publication-site?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/palmyra-new-york",
    badge: "Print Shop"
  },
  {
    id: "harris-farm-ny",
    name: "Martin Harris Farm, Palmyra",
    category: "homestead",
    coordinates: [43.0820, -77.2185],
    state: "New York",
    era: "new-york-early",
    significance: "Farm of Martin Harris who mortgaged 151 acres for $3,000 to finance the printing of the Book of Mormon.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/martin-harris?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/palmyra-new-york",
    badge: "Harris Farm"
  },
  {
    id: "harmony-pa",
    name: "Harmony (Oakland), Susquehanna County",
    category: "revelation",
    coordinates: [41.9567, -75.6042],
    state: "Pennsylvania",
    era: "harmony-colesville",
    significance: "Joseph and Emma's first home. Site where the majority of the Book of Mormon was translated and 15 revelations in the D&C were received.",
    sectionsReceived: ["D&C 3", "D&C 4", "D&C 5", "D&C 6", "D&C 7", "D&C 8", "D&C 9", "D&C 10", "D&C 11", "D&C 12", "D&C 13", "D&C 24", "D&C 25", "D&C 26", "D&C 27"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/priesthood-restoration-site?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/harmony-pennsylvania",
    badge: "15 D&C Revelations"
  },
  {
    id: "priesthood-restoration-pa",
    name: "Susquehanna River (Aaronic Priesthood Restoration)",
    category: "sacred-site",
    coordinates: [41.9542, -75.6025],
    state: "Pennsylvania",
    era: "harmony-colesville",
    significance: "Wooded banks where John the Baptist restored the Aaronic Priesthood to Joseph and Oliver on May 15, 1829, followed by their mutual baptisms.",
    sectionsReceived: ["D&C 13"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/priesthood-restoration-site?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/harmony-pennsylvania",
    badge: "Aaronic Priesthood"
  },
  {
    id: "colesville-ny",
    name: "Colesville (Joseph Knight Sr. Homestead)",
    category: "homestead",
    coordinates: [42.0620, -75.6880],
    state: "New York",
    era: "harmony-colesville",
    significance: "Home of Joseph Knight Sr., loyal supporter of the Prophet. Melchizedek Priesthood restored nearby in the wilderness between Harmony and Colesville. First miracle of Church (casting out devil from Newel Knight).",
    sectionsReceived: ["D&C 12", "D&C 26"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/colesville-new-york?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/colesville-new-york",
    badge: "Colesville Branch"
  },
  {
    id: "fayette-whitmer-farm",
    name: "Peter Whitmer Sr. Farm, Fayette",
    category: "sacred-site",
    coordinates: [42.8715, -76.8858],
    state: "New York",
    era: "new-york-early",
    significance: "Cradle of Church organization on April 6, 1830. Translation of Book of Mormon completed here; Three Witnesses beheld the angel and plates; 20 D&C revelations received here.",
    sectionsReceived: ["D&C 14", "D&C 15", "D&C 16", "D&C 17", "D&C 18", "D&C 20", "D&C 21", "D&C 28", "D&C 29", "D&C 30", "D&C 31", "D&C 32", "D&C 33", "D&C 34", "D&C 35", "D&C 36", "D&C 37", "D&C 38", "D&C 39", "D&C 40"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/peter-whitmer-farm?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/fayette-new-york",
    badge: "Church Organized"
  },

  // ==========================================
  // OHIO (KIRTLAND & HIRAM)
  // ==========================================
  {
    id: "kirtland-temple",
    name: "Kirtland Temple, Ohio",
    category: "temple",
    coordinates: [41.6247, -81.3614],
    state: "Ohio",
    era: "kirtland-ohio",
    significance: "First temple of the Restoration. Dedicated March 27, 1836 (D&C 109). Savior appeared on April 3, 1836, followed by Moses, Elias, and Elijah restoring priesthood keys (D&C 110).",
    sectionsReceived: ["D&C 107", "D&C 109", "D&C 110", "D&C 134", "D&C 137"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/kirtland-temple?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/kirtland-temple",
    badge: "First Temple"
  },
  {
    id: "kirtland-whitney-store",
    name: "Newel K. Whitney Store & School of Prophets",
    category: "revelation",
    coordinates: [41.6267, -81.3644],
    state: "Ohio",
    era: "kirtland-ohio",
    significance: "Headquarters of the Church from 1831 to 1834. Upper room housed the School of the Prophets. The Word of Wisdom (D&C 89) and Olive Leaf (D&C 88) were received here.",
    sectionsReceived: ["D&C 41", "D&C 42", "D&C 43", "D&C 44", "D&C 45", "D&C 46", "D&C 48", "D&C 50", "D&C 72", "D&C 78", "D&C 84", "D&C 85", "D&C 86", "D&C 87", "D&C 88", "D&C 89", "D&C 90", "D&C 93", "D&C 95", "D&C 96", "D&C 101", "D&C 102", "D&C 104"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/historic-kirtland?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/kirtland-ohio",
    badge: "School of Prophets"
  },
  {
    id: "morley-farm-oh",
    name: "Isaac Morley Farm, Kirtland",
    category: "homestead",
    coordinates: [41.6111, -81.3436],
    state: "Ohio",
    era: "kirtland-ohio",
    significance: "Site of early communal living ('the Family'). Joseph and Emma lived in a small log home here where D&C 64 ('I, the Lord, will forgive whom I will forgive') was received.",
    sectionsReceived: ["D&C 49", "D&C 52", "D&C 64"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/historic-kirtland?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/kirtland-ohio",
    badge: "Morley Farm"
  },
  {
    id: "hiram-johnson-farm",
    name: "John Johnson Farm, Hiram, Ohio",
    category: "revelation",
    coordinates: [41.3125, -81.1447],
    state: "Ohio",
    era: "kirtland-ohio",
    significance: "Home of John and Alice Johnson where Joseph and Sidney lived and translated the Bible. Site of the Lord's Preface (D&C 1), the Vision of the Three Degrees of Glory (D&C 76), and the March 1832 tarring and feathering.",
    sectionsReceived: ["D&C 1", "D&C 65", "D&C 67", "D&C 68", "D&C 69", "D&C 71", "D&C 76", "D&C 77", "D&C 79", "D&C 80", "D&C 81", "D&C 99", "D&C 133"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/john-johnson-farm?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/hiram-ohio",
    badge: "The Vision (D&C 76)"
  },
  {
    id: "amherst-oh",
    name: "Amherst, Lorain County, Ohio",
    category: "revelation",
    coordinates: [41.3989, -82.2227],
    state: "Ohio",
    era: "kirtland-ohio",
    significance: "At a conference on January 25, 1832, Joseph Smith was sustained and ordained President of the High Priesthood. D&C 75 received here appointing mission companions.",
    sectionsReceived: ["D&C 75"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/kirtland-ohio?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/amherst-ohio",
    badge: "High Priesthood Ordained"
  },

  // ==========================================
  // MISSOURI (ZION, FAR WEST & LIBERTY)
  // ==========================================
  {
    id: "independence-temple-lot",
    name: "Temple Lot & Center Place of Zion, Independence",
    category: "temple",
    coordinates: [39.0917, -94.4283],
    state: "Missouri",
    era: "missouri-zion",
    significance: "Designated by revelation (D&C 57) on July 20, 1831 as the center place of the New Jerusalem. Dedicated by Joseph Smith on August 3, 1831.",
    sectionsReceived: ["D&C 57", "D&C 58", "D&C 59", "D&C 82", "D&C 83"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/independence-temple-lot?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/independence-missouri",
    badge: "Center Place of Zion"
  },
  {
    id: "phelps-printing-office-mo",
    name: "W.W. Phelps Print Shop, Independence",
    category: "revelation",
    coordinates: [39.0922, -94.4150],
    state: "Missouri",
    era: "missouri-zion",
    significance: "Site of The Evening and the Morning Star printing press destroyed by a mob on July 20, 1833. Unbound sheets of the Book of Commandments saved by Caroline and Mary Rollins.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/book-of-commandments?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/independence-missouri",
    badge: "Book of Commandments"
  },
  {
    id: "kaw-township-mo",
    name: "Kaw Township (Colesville Settlement)",
    category: "homestead",
    coordinates: [39.0300, -94.5800],
    state: "Missouri",
    era: "missouri-zion",
    significance: "First settlement of the Colesville Branch in Missouri. Here the first log for the first house in Zion was laid on August 2, 1831 by twelve men representing the twelve tribes of Israel.",
    sectionsReceived: ["D&C 58", "D&C 59"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/colesville-branch?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/kaw-township-missouri",
    badge: "First Log in Zion"
  },
  {
    id: "mcilwaines-bend-mo",
    name: "McIlwaine's Bend, Missouri River",
    category: "trail-landmark",
    coordinates: [39.1833, -93.8833],
    state: "Missouri",
    era: "missouri-zion",
    significance: "Camp on the Missouri River where W.W. Phelps saw the destroyer riding upon the face of the waters. D&C 61 received concerning the dangers of the waters.",
    sectionsReceived: ["D&C 61", "D&C 62"],
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/61?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/mcilwaines-bend-missouri",
    badge: "Waters of Destruction"
  },
  {
    id: "fishing-river-mo",
    name: "Fishing River, Clay County",
    category: "trail-landmark",
    coordinates: [39.2239, -94.2700],
    state: "Missouri",
    era: "zions-camp",
    significance: "Encampment of Zion's Camp on June 19, 1834. A severe thunderstorm miraculously scattered a mob of 300 attackers. D&C 105 received postponing Zion's military redemption.",
    sectionsReceived: ["D&C 105"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/zions-camp?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/fishing-river-missouri",
    badge: "Zion's Camp Dispersal"
  },
  {
    id: "liberty-jail",
    name: "Liberty Jail Historic Site, Clay County",
    category: "jail-martyrdom",
    coordinates: [39.2464, -94.4216],
    state: "Missouri",
    era: "liberty-jail",
    significance: "Joseph Smith and five companions were imprisoned from Dec 1, 1838 to April 6, 1839 in a 14x14 ft stone dungeon. Joseph poured out his soul to God, receiving D&C 121, 122, and 123.",
    sectionsReceived: ["D&C 121", "D&C 122", "D&C 123"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/historic-liberty-jail?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/liberty-jail",
    badge: "Prison-Temple"
  },
  {
    id: "far-west-temple-site",
    name: "Far West Temple Site, Caldwell County",
    category: "temple",
    coordinates: [39.6970, -94.1311],
    state: "Missouri",
    era: "missouri-far-west",
    significance: "Headquarters of the Church in 1838. Cornerstones of the temple laid on July 4, 1838. D&C 115, 118, 119, 120 received here. Twelve Apostles fulfilled prophecy here at midnight on April 26, 1839.",
    sectionsReceived: ["D&C 113", "D&C 114", "D&C 115", "D&C 117", "D&C 118", "D&C 119", "D&C 120"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/far-west-temple-site?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/far-west-missouri",
    badge: "Far West Temple"
  },
  {
    id: "adam-ondi-ahman",
    name: "Adam-ondi-Ahman (Spring Hill), Daviess County",
    category: "sacred-site",
    coordinates: [40.0167, -93.9833],
    state: "Missouri",
    era: "missouri-far-west",
    significance: "Valley identified by revelation (D&C 116) as the place where Adam blessed his posterity three years before his death and where the Ancient of Days shall sit before Christ's return.",
    sectionsReceived: ["D&C 116"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/adam-ondi-ahman?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/adam-ondi-ahman-missouri",
    badge: "Valley of Adam"
  },
  {
    id: "hauns-mill",
    name: "Haun's Mill Massacre Site, Caldwell County",
    category: "sacred-site",
    coordinates: [39.6706, -93.8808],
    state: "Missouri",
    era: "missouri-far-west",
    significance: "Settlement along Shoal Creek where on October 30, 1838, a rogue militia launched an unprovoked assault killing 17 Latter-day Saint men and boys following Boggs's Extermination Order.",
    sectionsReceived: ["Milestone: Haun's Mill"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/hauns-mill-massacre?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/hauns-mill",
    badge: "Massacre Memorial"
  },
  {
    id: "richmond-jail-mo",
    name: "Richmond Jail & Three Witnesses Monument",
    category: "jail-martyrdom",
    coordinates: [39.2783, -93.9767],
    state: "Missouri",
    era: "missouri-far-west",
    significance: "Jail where Joseph Smith, chained to fellow prisoners in November 1838, arose in majesty and rebuked the blasphemous guards ('Silence, ye fiends of the infernal pit!'). Cemetery contains graves of Oliver Cowdery and David Whitmer.",
    sectionsReceived: ["Milestone: Rebuking the Guards"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/richmond-missouri?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/richmond-missouri",
    badge: "Rebuke of Guards"
  },

  // ==========================================
  // ILLINOIS & IOWA (NAUVOO ERA)
  // ==========================================
  {
    id: "quincy-il",
    name: "Quincy, Adams County, Illinois",
    category: "homestead",
    coordinates: [39.9356, -91.4099],
    state: "Illinois",
    era: "nauvoo-illinois",
    significance: "City of refuge whose charitable citizens opened homes and provided food to thousands of impoverished Latter-day Saints driven from Missouri in the winter of 1838-1839.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/quincy-illinois?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/quincy-illinois",
    badge: "City of Refuge"
  },
  {
    id: "nauvoo-temple",
    name: "Nauvoo Temple, Illinois",
    category: "temple",
    coordinates: [40.5506, -91.3842],
    state: "Illinois",
    era: "nauvoo-illinois",
    significance: "Magnificent limestone temple on the bluff overlooking the Mississippi. First temple with a baptismal font for the dead on the backs of 12 oxen. Destroyed by arson in 1848, rebuilt in 2002.",
    sectionsReceived: ["D&C 124"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/historic-nauvoo?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/nauvoo-temple",
    badge: "Temple of the Bluff"
  },
  {
    id: "red-brick-store",
    name: "Joseph Smith's Red Brick Store, Nauvoo",
    category: "sacred-site",
    coordinates: [40.5501, -91.3855],
    state: "Illinois",
    era: "nauvoo-illinois",
    significance: "Commercial, civic, and spiritual heart of Nauvoo. Relief Society organized in upper room March 17, 1842; first full temple endowments administered May 4, 1842; D&C 132 recorded.",
    sectionsReceived: ["D&C 127", "D&C 128", "D&C 132"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/historic-nauvoo?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/red-brick-store",
    badge: "Relief Society Organized"
  },
  {
    id: "nauvoo-homestead",
    name: "Joseph Smith Homestead & Mansion House",
    category: "homestead",
    coordinates: [40.5489, -91.3860],
    state: "Illinois",
    era: "nauvoo-illinois",
    significance: "First log home where Joseph and Emma lived in Nauvoo, and later the spacious Mansion House. Site of the Smith Family Cemetery where Joseph, Hyrum, and Emma are buried.",
    sectionsReceived: ["D&C 125", "D&C 126"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/historic-nauvoo?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/nauvoo-homestead",
    badge: "Smith Homestead"
  },
  {
    id: "ramus-illinois",
    name: "Ramus (Webster), Hancock County, Illinois",
    category: "revelation",
    coordinates: [40.3542, -91.0700],
    state: "Illinois",
    era: "nauvoo-illinois",
    significance: "Branch 20 miles east of Nauvoo. While staying with Benjamin F. Johnson, Joseph gave profound teachings on the corporeal nature of God and celestial marriage (D&C 130 & 131).",
    sectionsReceived: ["D&C 130", "D&C 131"],
    churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/130?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/ramus-illinois",
    badge: "Nature of God"
  },
  {
    id: "carthage-jail",
    name: "Carthage Jail, Hancock County, Illinois",
    category: "jail-martyrdom",
    coordinates: [40.4133, -91.1342],
    state: "Illinois",
    era: "nauvoo-illinois",
    significance: "Two-story limestone county jail where the Prophet Joseph Smith and Patriarch Hyrum Smith were martyred by a mob with blackened faces on June 27, 1844 (D&C 135).",
    sectionsReceived: ["D&C 135"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/historic-carthage-jail?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/carthage-jail",
    badge: "Martyrdom of Joseph & Hyrum"
  },
  {
    id: "montrose-iowa",
    name: "Montrose (Zarahemla), Lee County, Iowa",
    category: "sacred-site",
    coordinates: [40.5317, -91.4167],
    state: "Iowa",
    era: "nauvoo-illinois",
    significance: "Directly across the Mississippi from Nauvoo. On July 22, 1839 ('Day of God's Power'), Joseph arose from his sickbed and healed dying Saints throughout Montrose and Nauvoo.",
    sectionsReceived: ["D&C 125"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/day-of-gods-power?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/montrose-iowa",
    badge: "Day of God's Power"
  },

  // ==========================================
  // EXODUS, IOWA & NEBRASKA (WINTER QUARTERS)
  // ==========================================
  {
    id: "sugar-creek-iowa",
    name: "Sugar Creek Staging Ground, Iowa",
    category: "trail-landmark",
    coordinates: [40.5283, -91.4983],
    state: "Iowa",
    era: "pioneer-exodus",
    significance: "First encampment after crossing the frozen Mississippi in February 1846. Saints endured blizzards and sub-zero temperatures as the exodus began.",
    sectionsReceived: ["Milestone: 1846 Exodus Begins"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/pioneer-trek?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/sugar-creek-iowa",
    badge: "First Exodus Camp"
  },
  {
    id: "garden-grove-ia",
    name: "Garden Grove Waystation, Decatur County",
    category: "homestead",
    coordinates: [40.8267, -93.6133],
    state: "Iowa",
    era: "pioneer-exodus",
    significance: "First semi-permanent farming waystation established in southern Iowa. Log cabins built and hundreds of acres planted for later migrating companies.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/garden-grove-and-mount-pisgah?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/garden-grove-iowa",
    badge: "Iowa Waystation"
  },
  {
    id: "mount-pisgah-ia",
    name: "Mount Pisgah Waystation, Union County",
    category: "homestead",
    coordinates: [41.0267, -94.1333],
    state: "Iowa",
    era: "pioneer-exodus",
    significance: "Major pioneer encampment overlooking the Grand River from 1846 to 1852. Thousands rested and refitted wagons here.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/garden-grove-and-mount-pisgah?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/mount-pisgah-iowa",
    badge: "Mount Pisgah"
  },
  {
    id: "council-bluffs-ia",
    name: "Council Bluffs (Kanesville), Pottawattamie County",
    category: "homestead",
    coordinates: [41.2619, -95.8608],
    state: "Iowa",
    era: "pioneer-exodus",
    significance: "Mormon Battalion mustered here in July 1846. First Presidency reorganized with Brigham Young as President in a log tabernacle on December 27, 1847.",
    sectionsReceived: ["Milestone: First Presidency Reorganized"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/kanesville-tabernacle?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/kanesville-iowa",
    badge: "Kanesville Tabernacle"
  },
  {
    id: "winter-quarters-ne",
    name: "Winter Quarters (Florence/Omaha), Nebraska",
    category: "sacred-site",
    coordinates: [41.3344, -95.9622],
    state: "Nebraska",
    era: "pioneer-exodus",
    significance: "Major encampment of over 3,000 Saints during winter 1846-1847 on the west bank of the Missouri. D&C 136 received by Brigham Young. Mormon Pioneer Cemetery honors hundreds who died.",
    sectionsReceived: ["D&C 136"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/mormon-trail-center-at-historic-winter-quarters?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/winter-quarters-nebraska",
    badge: "Camp of Israel (D&C 136)"
  },

  // ==========================================
  // PIONEER TRAIL LANDMARKS (NEBRASKA & WYOMING)
  // ==========================================
  {
    id: "chimney-rock-ne",
    name: "Chimney Rock, Morrill County",
    category: "trail-landmark",
    coordinates: [41.7033, -103.3486],
    state: "Nebraska",
    era: "pioneer-exodus",
    significance: "Famous 300-foot spire landmark on the North Platte River noting entry into the rugged western plains, recorded in nearly every pioneer journal.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/pioneer-trek?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/pioneer-trek",
    badge: "Trail Landmark"
  },
  {
    id: "scotts-bluff-ne",
    name: "Scotts Bluff, Gering",
    category: "trail-landmark",
    coordinates: [41.8381, -103.7172],
    state: "Nebraska",
    era: "pioneer-exodus",
    significance: "Massive towering promontory 800 feet above the North Platte. Pioneers used roadometers invented by William Clayton and Appleton Harmon to measure daily mileage.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/pioneer-trek?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/pioneer-trek",
    badge: "Roadometer Used"
  },
  {
    id: "fort-laramie-wy",
    name: "Fort Laramie, Goshen County",
    category: "trail-landmark",
    coordinates: [42.2039, -104.5272],
    state: "Wyoming",
    era: "pioneer-exodus",
    significance: "Important fur trading post where the Oregon and Mormon trails met. Brigham Young's vanguard company arrived June 1, 1847 to repair wagons and forge river ferry boats.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/pioneer-trek?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/pioneer-trek",
    badge: "Trading Post"
  },
  {
    id: "independence-rock-wy",
    name: "Independence Rock, Natrona County",
    category: "trail-landmark",
    coordinates: [42.4939, -107.1317],
    state: "Wyoming",
    era: "pioneer-exodus",
    significance: "The 'Register of the Desert'—a huge granite monolith on the Sweetwater River where thousands of pioneers carved their names into the stone.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/pioneer-trek?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/pioneer-trek",
    badge: "Register of Desert"
  },
  {
    id: "martins-cove-wy",
    name: "Martin's Cove, Sweetwater County",
    category: "sacred-site",
    coordinates: [42.4333, -107.2667],
    state: "Wyoming",
    era: "pioneer-exodus",
    significance: "Natural granite cove where the stranded Martin Handcart Company found shelter from devastating early blizzards in November 1856 while awaiting rescue wagons sent from Salt Lake.",
    sectionsReceived: ["Milestone: Handcart Rescue"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/martins-cove-mormon-trail-site?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/martins-cove-wyoming",
    badge: "Handcart Rescue"
  },
  {
    id: "fort-bridger-wy",
    name: "Fort Bridger, Uinta County",
    category: "trail-landmark",
    coordinates: [41.3172, -110.3878],
    state: "Wyoming",
    era: "pioneer-exodus",
    significance: "Outpost established by Jim Bridger. Here Brigham Young met Bridger and mountain men to confer about agriculture and survival in the Great Basin before climbing over the Wasatch Range.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/pioneer-trek?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/pioneer-trek",
    badge: "Mountain Outpost"
  },

  // ==========================================
  // UTAH & THE ROCKY MOUNTAIN WEST
  // ==========================================
  {
    id: "salt-lake-temple-square",
    name: "Temple Square, Salt Lake City",
    category: "temple",
    coordinates: [40.7704, -111.8920],
    state: "Utah",
    era: "utah-west",
    significance: "Heart of the Gathering in the Rocky Mountains. Designated by Brigham Young on July 28, 1847. 40-year construction of the Salt Lake Temple dedicated in 1893. Site of Official Declarations 1 & 2.",
    sectionsReceived: ["Official Declaration 1", "Official Declaration 2", "D&C 138 Context"],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/temple-square?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/salt-lake-city-utah",
    badge: "Heart of the Gathering"
  },
  {
    id: "ensign-peak-ut",
    name: "Ensign Peak, Salt Lake City",
    category: "sacred-site",
    coordinates: [40.7925, -111.8889],
    state: "Utah",
    era: "utah-west",
    significance: "On July 26, 1847, Brigham Young and apostles climbed this hill overlooking the valley, unfurled an American flag bandana, and symbolically raised an 'ensign to the nations' (Isaiah 5:26).",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/salt-lake-valley?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/salt-lake-city-utah",
    badge: "Ensign to Nations"
  },
  {
    id: "st-george-temple",
    name: "St. George Utah Temple",
    category: "temple",
    coordinates: [37.1008, -113.5786],
    state: "Utah",
    era: "utah-west",
    significance: "First completed temple in the Rocky Mountains, dedicated April 6, 1877. First vicarious endowments for the dead performed under Wilford Woodruff.",
    sectionsReceived: ["Milestone: St. George Dedication"],
    churchUrl: "https://www.churchofjesuschrist.org/temples/details/st-george-utah-temple?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/temples",
    badge: "First Western Temple"
  },
  {
    id: "logan-utah-temple",
    name: "Logan Utah Temple",
    category: "temple",
    coordinates: [41.7342, -111.8286],
    state: "Utah",
    era: "utah-west",
    significance: "Dedicated May 17, 1884 in Cache Valley. Built of local dark silicious limestone by volunteer pioneers.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/temples/details/logan-utah-temple?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/temples",
    badge: "Historic Temple"
  },
  {
    id: "manti-utah-temple",
    name: "Manti Utah Temple",
    category: "temple",
    coordinates: [39.2611, -111.6331],
    state: "Utah",
    era: "utah-west",
    significance: "Dedicated May 21, 1888 in Sanpete Valley on a hill designated by Brigham Young. Renowned for its pioneering open spiral staircases and limestone masonry.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/temples/details/manti-utah-temple?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/temples",
    badge: "Historic Temple"
  },

  // ==========================================
  // EARLY WORLDWIDE MISSIONS
  // ==========================================
  {
    id: "preston-england",
    name: "Preston, Lancashire, England",
    category: "mission",
    coordinates: [53.7632, -2.7031],
    state: "England",
    era: "world-missions",
    significance: "Cradle of the British Mission. Heber C. Kimball preached at Vauxhall Chapel July 1837; first nine converts baptized in the River Ribble before thousands of spectators. World's oldest continuous branch of the Church.",
    sectionsReceived: ["D&C 112"],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/british-mission?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/preston-england",
    badge: "British Mission Cradle"
  },
  {
    id: "benbow-farm-england",
    name: "John Benbow Farm & Gadfield Elm, Herefordshire",
    category: "mission",
    coordinates: [52.0733, -2.4347],
    state: "England",
    era: "world-missions",
    significance: "In 1840, Wilford Woodruff baptized over 1,800 people in Herefordshire, including the entire United Brethren congregation. Gadfield Elm is the oldest Latter-day Saint chapel in the world.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/learn/locations/historic-sites-in-the-united-kingdom?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/gadfield-elm-chapel",
    badge: "Wilford Woodruff 1,800 Baptisms"
  },
  {
    id: "tubuai-pacific",
    name: "Tubuaï, Austral Islands, French Polynesia",
    category: "mission",
    coordinates: [-23.3667, -149.4667],
    state: "French Polynesia",
    era: "world-missions",
    significance: "Addison Pratt and companions arrived April 30, 1844, establishing the first foreign-language mission and the first Church branch in the South Pacific.",
    sectionsReceived: [],
    churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/pacific-islands-missions?lang=eng",
    jspUrl: "https://www.josephsmithpapers.org/site/french-polynesia",
    badge: "First Pacific Mission"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HISTORIC_LOCATIONS };
}
