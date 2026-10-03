/**
 * CURATED GUIDED SCRIPTURE & HISTORY TOURS
 */

const GUIDED_TOURS = [
  {
    id: "cradle-restoration",
    title: "The Cradle of the Restoration (1805–1830)",
    subtitle: "From Sharon, Vermont to the Organization of the Church in Fayette",
    badge: "Foundational Era",
    stops: [
      {
        step: 1,
        locationId: "sharon-vt",
        title: "Birth of Joseph Smith (1805)",
        coordinates: [43.7915, -72.4533],
        zoom: 12,
        narration: "On a cold winter day, December 23, 1805, Joseph Smith Jr. was born in Sharon, Vermont. His parents instilled in him faith in Jesus Christ, honesty, and deep familial love.",
        scriptureRef: "JS—H 1:3",
        scriptureText: "I was born in the year of our Lord one thousand eight hundred and five, on the twenty-third day of December...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1?lang=eng&id=p3#p3"
      },
      {
        step: 2,
        locationId: "sacred-grove-ny",
        title: "The Sacred Grove & First Vision (1820)",
        coordinates: [43.0375, -77.2346],
        zoom: 14,
        narration: "Seeking forgiveness and wondering which church was true, 14-year-old Joseph prayed in the grove near his home. God the Father and His Beloved Son Jesus Christ appeared in radiant glory, opening the Dispensation of the Fullness of Times.",
        scriptureRef: "JS—H 1:16–17",
        scriptureText: "I saw a pillar of light exactly over my head... I saw two Personages... One of them spake unto me... This is My Beloved Son. Hear Him!",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1?lang=eng&id=p16-p17#p16"
      },
      {
        step: 3,
        locationId: "hill-cumorah-ny",
        title: "Hill Cumorah & Gold Plates (1823–1827)",
        coordinates: [43.0069, -77.2238],
        zoom: 14,
        narration: "Directed by Angel Moroni (D&C 2), Joseph visited Hill Cumorah each September for four years until he was prepared to receive the ancient Nephite record on September 22, 1827.",
        scriptureRef: "D&C 2:1–3",
        scriptureText: "Behold, I will reveal unto you the Priesthood, by the hand of Elijah the prophet...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/2?lang=eng"
      },
      {
        step: 4,
        locationId: "priesthood-restoration-pa",
        title: "Priesthood Restored on the Susquehanna (1829)",
        coordinates: [41.9542, -75.6025],
        zoom: 14,
        narration: "While translating in Harmony, Joseph and Oliver prayed regarding baptism. John the Baptist appeared and conferred the Aaronic Priesthood. Soon after, Peter, James, and John restored the Melchizedek Priesthood.",
        scriptureRef: "D&C 13:1",
        scriptureText: "Upon you my fellow servants, in the name of Messiah I confer the Priesthood of Aaron...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/13?lang=eng"
      },
      {
        step: 5,
        locationId: "fayette-whitmer-farm",
        title: "Organization of the Church (April 6, 1830)",
        coordinates: [42.8715, -76.8858],
        zoom: 14,
        narration: "At the log home of Peter Whitmer Sr. in Fayette, NY, the Church of Christ was officially organized according to divine command and New York state law with six founding members.",
        scriptureRef: "D&C 20:1; 21:1",
        scriptureText: "The rise of the Church of Christ in these last days... Thou shalt be called a seer, a translator, a prophet...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/20?lang=eng"
      }
    ]
  },
  {
    id: "kirtland-pentecost",
    title: "Kirtland & Hiram: Revelations & The First Temple (1831–1838)",
    subtitle: "Doctrinal Outpourings, The School of the Prophets, and Sealing Keys",
    badge: "Temple Keys Restored",
    stops: [
      {
        step: 1,
        locationId: "kirtland-whitney-store",
        title: "The Whitney Store & School of Prophets",
        coordinates: [41.6267, -81.3644],
        zoom: 15,
        narration: "In the upper room of Newel K. Whitney's store, Joseph instituted the School of the Prophets and received monumental revelations including the Word of Wisdom (D&C 89) and the Olive Leaf (D&C 88).",
        scriptureRef: "D&C 88:119; 89:1–4",
        scriptureText: "Establish a house, even a house of prayer, a house of fasting, a house of faith, a house of learning, a house of glory...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/89?lang=eng"
      },
      {
        step: 2,
        locationId: "hiram-johnson-farm",
        title: "The Vision of the Three Degrees of Glory",
        coordinates: [41.3125, -81.1447],
        zoom: 14,
        narration: "At the John Johnson Farm in Hiram, Ohio, Joseph and Sidney beheld the Celestial, Terrestrial, and Telestial kingdoms (D&C 76), testifying boldly: 'He lives! For we saw him, even on the right hand of God.'",
        scriptureRef: "D&C 76:22–24",
        scriptureText: "And now, after the many testimonies which have been given of him, this is the testimony, last of all, which we give of him: That he lives!",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/76?lang=eng"
      },
      {
        step: 3,
        locationId: "kirtland-temple",
        title: "Kirtland Temple Dedication & Restoration of Keys",
        coordinates: [41.6247, -81.3614],
        zoom: 15,
        narration: "Dedicated March 27, 1836 (D&C 109). One week later on Easter Sunday, April 3, 1836, the Savior appeared on the breastwork of the pulpit, followed by Moses, Elias, and Elijah committing the keys of gathering and temple sealing (D&C 110).",
        scriptureRef: "D&C 110:14–16",
        scriptureText: "Behold, the time has fully come... To turn the hearts of the fathers to the children, and the children to the fathers...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/110?lang=eng"
      }
    ]
  },
  {
    id: "missouri-crucible",
    title: "The Missouri Crucible & Liberty Jail (1831–1839)",
    subtitle: "From Center Place Dedication to the Dark Depths of Liberty Jail",
    badge: "Trial of Faith",
    stops: [
      {
        step: 1,
        locationId: "independence-temple-lot",
        title: "Center Place of Zion & Temple Lot (1831)",
        coordinates: [39.0917, -94.4283],
        zoom: 14,
        narration: "The Lord revealed Independence, Missouri as the center place of Zion and specified the location of the Temple (D&C 57). Dedicated by Joseph Smith on August 3, 1831.",
        scriptureRef: "D&C 57:1–3",
        scriptureText: "This is the land of promise, and the place for the city of Zion... the spot for the temple is lying westward...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/57?lang=eng"
      },
      {
        step: 2,
        locationId: "far-west-temple-site",
        title: "Far West: Official Name & Midnight Departure",
        coordinates: [39.6970, -94.1311],
        zoom: 14,
        narration: "The Church's official name was revealed here (D&C 115). Here also the Twelve Apostles fulfilled D&C 118 on April 26, 1839, stepping onto the temple site at midnight before their journey to Great Britain.",
        scriptureRef: "D&C 115:4",
        scriptureText: "For thus shall my church be called in the last days, even The Church of Jesus Christ of Latter-day Saints.",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/115?lang=eng"
      },
      {
        step: 3,
        locationId: "adam-ondi-ahman",
        title: "Valley of Adam-ondi-Ahman",
        coordinates: [40.0167, -93.9833],
        zoom: 13,
        narration: "In May 1838, Joseph named Spring Hill as Adam-ondi-Ahman (D&C 116), where Adam blessed his posterity and where a great grand council will take place before Christ comes in power.",
        scriptureRef: "D&C 116:1",
        scriptureText: "Spring Hill is named by the Lord Adam-ondi-Ahman... the place where Adam shall come to visit his people...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/116?lang=eng"
      },
      {
        step: 4,
        locationId: "liberty-jail",
        title: "Liberty Jail: The Prison-Temple (1838–1839)",
        coordinates: [39.2464, -94.4216],
        zoom: 15,
        narration: "Suffering in cold, chain-bound dungeon isolation while mobs drove his family and people into Illinois, Joseph cried out to God. In reply, the Lord offered sublime solace in D&C 121 and 122.",
        scriptureRef: "D&C 121:7–8; 122:7–8",
        scriptureText: "My son, peace be unto thy soul; thine adversity and thine afflictions shall be but a small moment... The Son of Man hath descended below them all. Art thou greater than he?",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121?lang=eng"
      }
    ]
  },
  {
    id: "nauvoo-martyrdom",
    title: "Nauvoo the Beautiful & The Martyrdom (1839–1844)",
    subtitle: "The Rise of the City of Joseph, Relief Society, and Carthage Jail",
    badge: "Nauvoo Splendor",
    stops: [
      {
        step: 1,
        locationId: "red-brick-store",
        title: "Joseph's Red Brick Store & Relief Society",
        coordinates: [40.5501, -91.3855],
        zoom: 15,
        narration: "Here on March 17, 1842, the Relief Society was organized under the priesthood. In May 1842, the first full temple endowments were administered to trusted leaders.",
        scriptureRef: "D&C 132 Context",
        scriptureText: "The Church was never perfectly organized until the women were thus organized... (Joseph Smith)",
        churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/relief-society?lang=eng"
      },
      {
        step: 2,
        locationId: "nauvoo-temple",
        title: "The Nauvoo Temple on the Bluff",
        coordinates: [40.5506, -91.3842],
        zoom: 15,
        narration: "Rising majestic on the bluff above the Mississippi, the Nauvoo Temple was built through immense sacrifice (D&C 124). Thousands received sacred endowments before the forced exodus of 1846.",
        scriptureRef: "D&C 124:26–28",
        scriptureText: "And send ye swift messengers... and build a house to my name, for the Most High to dwell therein.",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/124?lang=eng"
      },
      {
        step: 3,
        locationId: "carthage-jail",
        title: "Carthage Jail: Martyrdom of Joseph and Hyrum",
        coordinates: [40.4133, -91.1342],
        zoom: 15,
        narration: "On June 27, 1844, Joseph and Hyrum sealed their testimonies with their blood at Carthage Jail. Elder John Taylor recorded the immortal eulogy in D&C 135.",
        scriptureRef: "D&C 135:3",
        scriptureText: "Joseph Smith, the Prophet and Seer of the Lord, has done more, save Jesus only, for the salvation of men in this world, than any other man that ever lived in it.",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/135?lang=eng"
      }
    ]
  },
  {
    id: "pioneer-trek",
    title: "The Pioneer Trek to the Rocky Mountains (1846–1847)",
    subtitle: "From Frozen Sugar Creek to the Valley of the Great Salt Lake",
    badge: "1,300-Mile Exodus",
    stops: [
      {
        step: 1,
        locationId: "sugar-creek-iowa",
        title: "Sugar Creek: Leaving Babylon Behind",
        coordinates: [40.5283, -91.4983],
        zoom: 13,
        narration: "In February 1846, the exiled Saints crossed the frozen Mississippi River into Iowa, huddling under wagon covers in sub-zero snowstorms as they turned toward the setting sun.",
        scriptureRef: "Hymn 30",
        scriptureText: "Come, come, ye Saints, no toil nor labor fear; But with joy wend your way...",
        churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/pioneer-trek?lang=eng"
      },
      {
        step: 2,
        locationId: "winter-quarters-ne",
        title: "Winter Quarters & The Word and Will of the Lord",
        coordinates: [41.3344, -95.9622],
        zoom: 14,
        narration: "At Winter Quarters, Nebraska, Brigham Young received D&C 136, organizing the migrating camps with captains of hundreds, fifties, and tens with music, praise, and repentance.",
        scriptureRef: "D&C 136:1–3",
        scriptureText: "The Word and Will of the Lord concerning the Camp of Israel in their journeyings to the West...",
        churchUrl: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/136?lang=eng"
      },
      {
        step: 3,
        locationId: "salt-lake-temple-square",
        title: "This Is the Right Place: Salt Lake Valley",
        coordinates: [40.7704, -111.8920],
        zoom: 14,
        narration: "On July 24, 1847, Brigham Young looked over the Great Salt Lake Valley and proclaimed: 'This is the right place.' On July 28, he designated the ground for the Salt Lake Temple.",
        scriptureRef: "Isaiah 2:2",
        scriptureText: "And it shall come to pass in the last days, that the mountain of the Lord's house shall be established in the top of the mountains...",
        churchUrl: "https://www.churchofjesuschrist.org/study/history/topics/salt-lake-valley?lang=eng"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GUIDED_TOURS };
}
