/** Site copy derived from public/bio.txt and public/repertoire_list.txt */

export const artist = {
  name: "Ian Zhao",
  tagline: "Cello · Solo, chamber & orchestral",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Repertoire", href: "#repertoire" },
  { label: "CV", href: "#cv" },
  { label: "Video", href: "#video" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

/** Edited lightly for clarity; facts follow bio.txt (professor name normalised to Trygstad). */
export const bioParagraphs: readonly string[] = [
  `Nicholas Trygstad has described Ian Zhao as “highly sensitive to different musical colours”—attuned to harmonic change and able to shape a wide range of tonal colours. Alongside classical repertoire, he also enjoys jazz and tango. During his Master’s studies at the Royal Northern College of Music (2024), he performed Claude Bolling’s Suite for Cello & Jazz Piano Trio to strong praise from the examination panel, and Piazzolla’s The Four Seasons of Buenos Aires in several cities in China.`,
  `On 11 April 2025, he and pianist Joachim Lim gave a lunchtime recital at St Martin-in-the-Fields in London. When the last note of Shostakovich’s Cello Sonata finished, the audience burst into enthusiastic applause. He is keenly interested in chamber music in many forms—performing as a cello duo at Birmingham Cathedral, in string octet repertoire in Ipswich, and with the Royal Birmingham Conservatoire Symphony Orchestra in Symphony Hall. Recently, his piano quartet won the Leamington Prize; they will give a concert at Holy Trinity Church, Leamington, on 9 June 2026. He has been invited to perform with the LANO Quartet at Winchcombe Music Festival on 30 May 2026, and at the Cheltenham Music Festival.`,
  `From August 2024 to 2026, he worked as an assistant to Professor Nicholas Trygstad, Head of Strings at the Royal Birmingham Conservatoire. In 2024 and 2025 he supported teaching and translation at the “Cello Family” Music Festival and served as a resident teacher for Cello Family. In March 2026, he taught and assisted at masterclasses at Qingdao Menuhin International Music School, Sichuan Conservatory of Music, and Xi’an Conservatory of Music.`,
  `Ian began studying cello in 2009 with Professor Yu Mingqing (Head of Orchestra, Central Conservatory of Music) and with Professor Yu Jia. He studied at the Central Conservatory of Music for twelve years, then moved to Manchester in 2023 to study with Nicholas Trygstad at the Royal Northern College of Music on scholarship. Following his Master’s, he was recommended by Professor Trygstad to continue studies at the Royal Birmingham Conservatoire on the Advanced Postgraduate Diploma (Professional Performer, Level 8).`,
  `He has competed several times in the national Aiqin Cup Cello Competition, winning second prize in the amateur division and fourth prize in the professional division. He won second place in the ensemble category at the Central Conservatory of Music’s 3rd Chamber Music Competition (with no first prize awarded) and was the top winner in the Yiyang Top Talent competition. Other results include third place in the 2019 Aiqin Cup ensemble division and the gold prize in Open Group C at the 2021 Golden Hall String Invitational in Beijing. He has performed many times with the Central Conservatory of Music Symphony Orchestra, taken part in international music festivals, and studied with renowned cellists including Lynn Harrell and Liwei Qin.`,
];

export const bioHighlights = [
  { label: "Instrument", value: "Cello" },
  {
    label: "Studies",
    value:
      "Royal Birmingham Conservatoire (Adv. Postgraduate Diploma)\nRNCM (Manchester)\nCentral Conservatory of Music",
  },
  {
    label: "Upcoming",
    value:
      "9 Jun 2026 — Holy Trinity, Leamington\n30 May 2026 — Winchcombe with LANO\nCheltenham Music Festival",
  },
] as const;

/** From public/repertoire_list.txt — spellings normalised for display */
export const repertoireSections = [
  {
    title: "Baroque",
    items: [
      "J. S. Bach — Cello Suites Nos. 1 and 3",
      "J. S. Bach — Cello Concerto in C minor",
    ],
  },
  {
    title: "Classical",
    items: [
      "Beethoven — Cello Sonata No. 2",
      "Beethoven — Cello Sonata No. 4",
      "Haydn — Cello Concerto in C major",
      "Haydn — Cello Concerto in D major",
      "Schubert — Cello Sonata in A minor",
    ],
  },
  {
    title: "Romantic",
    items: [
      "Dvořák — Cello Concerto in B minor",
      "Elgar — Cello Concerto in E minor",
      "Fauré — Berceuse",
      "Fauré — Papillon",
      "Fauré — Après un rêve",
      "Franck — Cello Sonata in A major",
      "Schumann — Cello Concerto in A minor",
      "Tchaikovsky — Rococo Variations",
      "Schumann — Adagio and Allegro",
    ],
  },
  {
    title: "20th century & contemporary",
    items: [
      "Claude Bolling — Suite for Cello and Jazz Piano Trio",
      "Prokofiev — Cello Sonata in C major",
      "Shostakovich — Cello Sonata in D minor",
    ],
  },
  {
    title: "Chamber music",
    items: [
      "Beethoven — String Quartets, Op. 18 Nos. 2 and 4",
      "Beethoven — String Quartets, Opp. 59, 127, and 132",
      "Schubert — Piano Trio in B major, D. 898",
      "Mendelssohn — String Quartet, Op. 80",
      "Mendelssohn — Octet for strings",
      "Brahms — Piano Trio, Op. 8",
      "Brahms — Piano Trio, Op. 26",
      "Rachmaninov — Piano Trio No. 1 in G minor",
      "Shostakovich — Piano Trio No. 1 in C minor, Op. 8",
    ],
  },
] as const;

export const contactEmail = "zhaohongze0816@163.com" as const;

export const cvSummary = {
  affiliation: "Royal Birmingham Conservatoire",
  phones: ["+44 7391 149349", "+86 13718477908"],
  email: "zhaohongze0816@163.com",
} as const;

export const cvEducation = [
  {
    degree: "Advanced Postgraduate Diploma — Professional Performance (Cello)",
    years: "2025–2026",
    institution: "Royal Birmingham Conservatoire",
    teacher: "Nicholas Trygstad",
  },
  {
    degree: "Master of Music in Performance — Cello Performance",
    years: "2023–2024",
    institution: "Royal Northern College of Music",
    teacher: "Nicholas Trygstad",
  },
  {
    degree: "Bachelor of Music — Cello Performance",
    years: "2018–2022",
    institution: "Central Conservatory of Music",
    teacher: "Mingqing Yu",
  },
] as const;

export const cvTeaching = [
  {
    years: "2026",
    details:
      "Teacher and translator for Nicholas Trygstad at Qingdao Menuhin International Music School, Xi’an Conservatory of Music, and Sichuan Conservatory of Music; also gave two masterclasses at Qingdao Menuhin.",
  },
  {
    years: "2024–2025",
    details:
      "Teaching assistant and translator for Nicholas Trygstad at the Cello Family Festival.",
  },
] as const;

export const cvConcertHighlights = [
  {
    title: "Shostakovich Music Festival",
    when: "10–14 Nov (RBC recital hall)",
    details: [
      "Shostakovich String Quartet No. 4 (with chamber orchestra; principal cello)",
      "Shostakovich String Quartet No. 7",
      "Shostakovich Piano Trio No. 1",
    ],
  },
  {
    title: "Solo concert",
    when: "11 Apr 2025 (St Martin-in-the-Fields, London)",
    details: [
      "Bach — Cello Suite No. 1",
      "Fauré — selected pieces",
      "Shostakovich — Cello Sonata in D minor (with Joachim Lim)",
    ],
  },
  {
    title: "Alcester Annual Concert",
    when: "5 Apr (Alcester)",
    details: ["Shostakovich — Cello Sonata in D minor (with Joachim Lim)"],
  },
  {
    title: "Chamber concert",
    when: "19 Mar 2025 (Ipswich)",
    details: ["Mendelssohn — Octet (ensemble TBC)"],
  },
  {
    title: "Trio concert",
    when: "14 Nov 2024 (RBC recital hall)",
    details: ["Fauré — Piano Trio (with Pascal Rogé and Caroline Pether)"],
  },
  {
    title: "Trio concert",
    when: "20 Aug 2024 (Weihai)",
    details: [
      "Piazzolla — The Four Seasons of Buenos Aires",
      "Paul Schoenfeld — Café Music",
    ],
  },
  {
    title: "Duo concert",
    when: "18 Jul 2024 (Qingdao)",
    details: ["Cello Family Festival — expert concert (with Nicholas Trygstad)"],
  },
  {
    title: "Solo project",
    when: "7 Jun 2024 (RNCM)",
    details: [
      "Franck — Cello Sonata in A major",
      "Claude Bolling — Suite for Cello and Jazz Piano Trio",
    ],
  },
  {
    title: "Tour performances",
    when: "May–Jun 2023 (15 cities, China)",
    details: [],
  },
  {
    title: "Selected earlier performances",
    when: "2016–2023",
    details: [
      "Schubert — Piano Trio in B major, D. 898; Piazzolla — Le Grand Tango (Jul 2023)",
      "Dvořák — Cello Concerto in B minor (Jun 2022)",
      "Beethoven — String Quartet Op. 132 (Jun 2022); Op. 127 (May 2021)",
      "Schumann — Cello Concerto in A minor (with David Geringas, Apr 2019)",
      "Brahms — Piano Trio Op. 8 (German Embassy, Jun 2016)",
    ],
  },
] as const;

export const cvOrchestra = [
  { role: "RBC Symphony Orchestra (Principal Cello)", when: "Oct 2025" },
  { role: "RBC Orchestra for Spring Opera", when: "Mar 2025" },
  { role: "RBC Symphony Orchestra (Principal Cello)", when: "Oct 2024" },
  { role: "RNCM Chamber Orchestra × Royal Northern Sinfonia", when: "Apr 2024" },
  { role: "RNCM Symphony Orchestra", when: "Mar 2024" },
  {
    role: "RNCM Brand New Orchestra (side-by-side with BBC Philharmonic)",
    when: "Jan 2024",
  },
  { role: "Nanchang Symphony Orchestra (Sub-Principal)", when: "Mar 2023" },
  { role: "China Broadcast Symphony Orchestra", when: "Sep 2022" },
  { role: "Central Conservatory of Music Symphony Orchestra", when: "2020–2022" },
  { role: "China Youth Symphony Orchestra (Sub-Principal)", when: "2018–2021" },
  { role: "China Junior Symphony Orchestra", when: "2016–2017" },
] as const;

export const cvMasterclasses = [
  { name: "Hanna Roberts", year: "2024" },
  { name: "Jeroen Reuling", year: "2022" },
  { name: "Philippe Muller", year: "2019" },
  { name: "Joanna Sachryn", year: "2019" },
  { name: "Liwei Qin", year: "2018" },
  { name: "Rodin Kirill", year: "2017" },
  { name: "Lynn Harrell", year: "2016–2017" },
  { name: "Igor Ivanovich Gavrysh", year: "2016" },
] as const;

export const cvAwards = [
  {
    title: "Cello Family International Cello Competition",
    when: "Aug 2021",
    result: "3rd Prize (Youth group)",
  },
  {
    title: "Central Conservatory of Music Scholarship Competition",
    when: "2016",
    result: "2nd Prize (Trio, chamber group; no 1st prize awarded)",
  },
  {
    title: "China “AiQin” Cup Cello Competition",
    when: "2012",
    result: "4th Prize (Junior group)",
  },
] as const;
