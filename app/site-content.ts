/** Site copy derived from public/bio.txt and public/repertoire_list.txt */

export const artist = {
  name: "Ian Zhao",
  tagline: "Cello · Solo, chamber & orchestral",
} as const;

/** Hero intro under the tagline (non-breaking space after “St” for tidy wrapping). */
export const heroSummary =
  "Soloist and chamber musician working across the UK and internationally — from St\u00a0Martin-in-the-Fields to Birmingham, with a particular love of chamber music, songful phrasing, and vivid colour at the cello." as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Repertoire", href: "#repertoire" },
  { label: "Video", href: "#video" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

/** Edited lightly for clarity; facts follow bio.txt (professor name normalised to Trygstad). */
export const bioParagraphs: readonly string[] = [
  `Nicholas Trygstad has said that Ian Zhao is “highly sensitive to different musical colours”—attuned to harmonic change and able to shape a wide range of tonal colours. Alongside classical repertoire, he enjoys jazz and tango. During his Master’s studies at the Royal Northern College of Music from 2024, he performed Claude Bolling’s Suite for Cello and Jazz Piano Trio, which received strong praise from the examination panel, and Astor Piazzolla’s The Four Seasons of Buenos Aires in several cities in China.`,
  `On 11 April 2025, he and pianist Joachim Lim gave a lunchtime recital at St Martin-in-the-Fields in London. When the last note of Shostakovich’s Cello Sonata finished, the audience burst into enthusiastic applause. He is keenly interested in chamber music in many forms—including cello duo at Birmingham Cathedral, string octet in Ipswich, and appearances with the Royal Birmingham Conservatoire Symphony Orchestra in Symphony Hall. Recently, his piano quartet won the Leamington Prize; they will give a concert at Holy Trinity Church, Leamington, on 9 June 2026. He has been invited to play with the LANO Quartet at Winchcombe Music Festival on 30 May 2026 and at the Cheltenham Music Festival.`,
  `From August 2024 to 2026, he worked as an assistant to Professor Nicholas Trygstad, Head of Strings at the Royal Birmingham Conservatoire. In 2024 and 2025 he helped Professor Trygstad with teaching and translation at the “Cello Family” Music Festival and served as a resident teacher for Cello Family, combining the professor’s approach with his own experience to help students learn more effectively. In March 2026, he taught and assisted Professor Trygstad at masterclasses at Qingdao Yehudi Menuhin International Music School, Sichuan Conservatory of Music, and Xi’an Conservatory of Music.`,
  `Ian began studying cello in 2009 with Professor Yu Mingqing (Head of Orchestra, Central Conservatory of Music) and with Professor Yu Jia. He studied at the Central Conservatory of Music for twelve years, then moved to Manchester in 2023 to study with Nicholas Trygstad at the Royal Northern College of Music on scholarship.`,
  `He has competed several times in the national Aiqin Cup Cello Competition, winning second prize in the amateur division and fourth prize in the professional division. He won second place in the ensemble category at the Central Conservatory of Music’s 3rd Chamber Music Competition (with no first prize awarded) and was top winner in the Yiyang Top Talent competition. Other results include third place in the 2019 Aiqin Cup ensemble division and the gold prize in Open Group C at the 2021 Golden Hall String Invitational in Beijing. He has performed many times with the Central Conservatory of Music Symphony Orchestra, taken part in international music festivals, and studied with renowned cellists including Lynn Harrell and Li-Wei Qin.`,
];

export const bioHighlights = [
  { label: "Instrument", value: "Cello" },
  { label: "Studies", value: "RNCM (Manchester) · Central Conservatory of Music" },
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
      "Beethoven — Cello Sonatas Nos. 2 and 4",
      "Schubert — Cello Sonata in A minor (Arpeggione)",
      "Haydn — Cello Concerto in C major",
      "Haydn — Cello Concerto in D major",
    ],
  },
  {
    title: "Romantic",
    items: [
      "Fauré — Berceuse; Papillon; Après un rêve",
      "Franck — Cello Sonata in A major",
      "Brahms — Cello Sonata in E minor",
      "Schumann — Cello Concerto in A minor",
      "Dvořák — Cello Concerto in B minor",
      "Elgar — Cello Concerto in E minor",
      "Tchaikovsky — Rococo Variations",
      "Schumann — Adagio and Allegro",
    ],
  },
  {
    title: "20th century & contemporary",
    items: [
      "Shostakovich — Cello Sonata in D minor",
      "Prokofiev — Cello Sonata in C major",
      "Claude Bolling — Suite for Cello and Jazz Piano Trio",
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
      "Mendelssohn — Piano Trio in D minor, Op. 49",
      "Brahms — Piano Trio, Op. 8",
      "Brahms — Piano Trio, Op. 26",
      "Rachmaninov — Piano Trio No. 1 in G minor",
      "Shostakovich — Piano Trio No. 1 in C minor, Op. 8",
    ],
  },
] as const;

export const contactEmail = "zhaohongze0816@163.com" as const;
