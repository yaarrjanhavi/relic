export interface SotySong {
  year: number;
  title: string;
  artist: string;
  genre: string;
  lyrics: string[];
  bpm: number;
  notes: { pitch: string; duration: number }[];
}

export const sotyDatabase: Record<number, SotySong> = {
  2000: {
    year: 2000,
    title: "Bye Bye Bye",
    artist: "*NSYNC",
    genre: "Teen Pop",
    lyrics: [
      "I'm doing this tonight",
      "You're probably gonna start a fight",
      "I know this can't go on",
      "Baby, bye, bye, bye!",
      "Don't wanna be a fool for you",
      "Just another player in your game for two",
      "You may hate me but it ain't no lie",
      "Baby, bye, bye, bye!"
    ],
    bpm: 110,
    notes: [
      // Part 1
      { pitch: "D4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "A4", duration: 1 },
      { pitch: "G4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "D4", duration: 1 },
      { pitch: "F4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "A4", duration: 1 }, { pitch: "Bb4", duration: 0.5 },
      { pitch: "A4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "E4", duration: 1 },
      // Part 2
      { pitch: "D4", duration: 0.5 }, { pitch: "D4", duration: 0.5 }, { pitch: "D4", duration: 0.5 }, { pitch: "E4", duration: 0.5 },
      { pitch: "F4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "D4", duration: 0.5 }, { pitch: "C4", duration: 1 },
      { pitch: "D4", duration: 0.5 }, { pitch: "D4", duration: 0.5 }, { pitch: "D4", duration: 0.5 }, { pitch: "E4", duration: 0.5 },
      { pitch: "F4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "D4", duration: 0.5 }, { pitch: "E4", duration: 1 }
    ]
  },
  2001: {
    year: 2001,
    title: "Clint Eastwood",
    artist: "Gorillaz",
    genre: "Alternative Hip Hop",
    lyrics: [
      "I ain't happy, I'm feeling glad",
      "I got sunshine in a bag",
      "I'm useless but not for long",
      "The future is coming on",
      "It's coming on, it's coming on..."
    ],
    bpm: 84,
    notes: [
      // Part 1
      { pitch: "F#3", duration: 0.5 }, { pitch: "A3", duration: 0.5 }, { pitch: "B3", duration: 1 }, { pitch: "A3", duration: 0.5 },
      { pitch: "F#3", duration: 1 }, { pitch: "F#3", duration: 0.5 }, { pitch: "A3", duration: 0.5 }, { pitch: "B3", duration: 1 },
      { pitch: "A3", duration: 0.5 }, { pitch: "F#3", duration: 1 }, { pitch: "F#3", duration: 0.5 }, { pitch: "A3", duration: 0.5 },
      { pitch: "B3", duration: 0.5 }, { pitch: "C#4", duration: 0.5 }, { pitch: "B3", duration: 0.5 }, { pitch: "A3", duration: 0.5 },
      // Part 2
      { pitch: "F#3", duration: 0.5 }, { pitch: "A3", duration: 0.5 }, { pitch: "B3", duration: 1 }, { pitch: "B3", duration: 0.5 },
      { pitch: "B3", duration: 0.5 }, { pitch: "A3", duration: 0.5 }, { pitch: "F#3", duration: 1 },
      { pitch: "F#3", duration: 0.5 }, { pitch: "A3", duration: 0.5 }, { pitch: "B3", duration: 1 }, { pitch: "B3", duration: 0.5 }
    ]
  },
  2002: {
    year: 2002,
    title: "Lose Yourself",
    artist: "Eminem",
    genre: "Hip Hop",
    lyrics: [
      "Lose yourself in the music, the moment",
      "You own it, you better never let it go",
      "You only get one shot, do not miss your chance to blow",
      "This opportunity comes once in a lifetime yo",
      "You better lose yourself..."
    ],
    bpm: 86,
    notes: [
      // Part 1
      { pitch: "D3", duration: 0.5 }, { pitch: "D3", duration: 0.5 }, { pitch: "D3", duration: 0.5 }, { pitch: "D3", duration: 1 },
      { pitch: "C3", duration: 0.5 }, { pitch: "D3", duration: 0.5 }, { pitch: "F3", duration: 0.5 }, { pitch: "F3", duration: 0.5 },
      { pitch: "F3", duration: 0.5 }, { pitch: "F3", duration: 1 }, { pitch: "E3", duration: 0.5 }, { pitch: "F3", duration: 0.5 },
      { pitch: "G3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "G3", duration: 1 },
      // Part 2
      { pitch: "A3", duration: 0.5 }, { pitch: "A3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "F3", duration: 0.5 },
      { pitch: "E3", duration: 0.5 }, { pitch: "D3", duration: 0.5 }, { pitch: "D3", duration: 1 },
      { pitch: "C3", duration: 0.5 }, { pitch: "D3", duration: 0.5 }, { pitch: "F3", duration: 0.5 }, { pitch: "F3", duration: 1 }
    ]
  },
  2003: {
    year: 2003,
    title: "Hey Ya!",
    artist: "OutKast",
    genre: "Funk / Pop",
    lyrics: [
      "Hey ya!",
      "Hey ya!",
      "Hey ya!",
      "Hey ya!",
      "Don't want to meet your daddy",
      "Just want you in my Caddy",
      "Don't want to meet your mama",
      "Just want to make you comma"
    ],
    bpm: 120,
    notes: [
      // Part 1
      { pitch: "G4", duration: 1 }, { pitch: "G4", duration: 1 }, { pitch: "C5", duration: 1 }, { pitch: "C5", duration: 1 },
      { pitch: "D5", duration: 1 }, { pitch: "D5", duration: 1 }, { pitch: "E5", duration: 2 },
      { pitch: "G4", duration: 1 }, { pitch: "G4", duration: 1 }, { pitch: "C5", duration: 1 }, { pitch: "C5", duration: 1 },
      // Part 2
      { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "F4", duration: 0.5 },
      { pitch: "E4", duration: 0.5 }, { pitch: "D4", duration: 0.5 }, { pitch: "C4", duration: 1 },
      { pitch: "C4", duration: 0.5 }, { pitch: "D4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "D4", duration: 1 }
    ]
  },
  2004: {
    year: 2004,
    title: "Yeah!",
    artist: "Usher ft. Lil Jon",
    genre: "Crunk & B",
    lyrics: [
      "Yeah! (Yeah!) Yeah! (Yeah!)",
      "In the club with my homies,",
      "Tryna get a little V-I,",
      "Keep it down on the low key",
      "You should know that you're with me",
      "Yeah, yeah, yeah, yeah!"
    ],
    bpm: 105,
    notes: [
      // Part 1
      { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 1 },
      { pitch: "A4", duration: 0.5 }, { pitch: "A4", duration: 0.5 }, { pitch: "A4", duration: 1 },
      { pitch: "Bb4", duration: 0.5 }, { pitch: "Bb4", duration: 0.5 }, { pitch: "Bb4", duration: 1 },
      { pitch: "C5", duration: 0.5 }, { pitch: "C5", duration: 0.5 }, { pitch: "C5", duration: 1 },
      // Part 2
      { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 0.5 },
      { pitch: "F4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 1 }
    ]
  },
  2005: {
    year: 2005,
    title: "Feel Good Inc",
    artist: "Gorillaz",
    genre: "Alternative Rock",
    lyrics: [
      "Windmill, windmill for the land",
      "Turn forever hand in hand",
      "Take it all in on your stride",
      "It is sinking, free fall flow",
      "Feel good, shaker, shaker, shake it",
      "Feel good, shaker, shaker, shake it"
    ],
    bpm: 130,
    notes: [
      // Part 1
      { pitch: "G3", duration: 0.5 }, { pitch: "Bb3", duration: 0.5 }, { pitch: "C4", duration: 0.5 }, { pitch: "D4", duration: 1 },
      { pitch: "C4", duration: 0.5 }, { pitch: "Bb3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "F3", duration: 1 },
      { pitch: "G3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "Bb3", duration: 0.5 }, { pitch: "C4", duration: 0.5 },
      { pitch: "D4", duration: 1 }, { pitch: "C4", duration: 0.5 }, { pitch: "Bb3", duration: 0.5 }, { pitch: "G3", duration: 1 },
      // Part 2
      { pitch: "G3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "Bb3", duration: 0.5 }, { pitch: "C4", duration: 1 },
      { pitch: "G3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }
    ]
  },
  2006: {
    year: 2006,
    title: "Crazy",
    artist: "Gnarls Barkley",
    genre: "Soul / Pop",
    lyrics: [
      "Does that make me crazy?",
      "Does that make me crazy?",
      "Does that make me crazy?",
      "Probably.",
      "And I hope that you are having the time of your life",
      "But think twice, that's my only advice"
    ],
    bpm: 112,
    notes: [
      // Part 1
      { pitch: "C4", duration: 1 }, { pitch: "Eb4", duration: 0.5 }, { pitch: "G4", duration: 1 }, { pitch: "Ab4", duration: 0.5 },
      { pitch: "G4", duration: 1 }, { pitch: "F4", duration: 2 },
      { pitch: "C4", duration: 1 }, { pitch: "Eb4", duration: 0.5 }, { pitch: "G4", duration: 1 }, { pitch: "Ab4", duration: 0.5 },
      // Part 2
      { pitch: "Eb4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "G4", duration: 1 },
      { pitch: "F4", duration: 0.5 }, { pitch: "Eb4", duration: 0.5 }, { pitch: "F4", duration: 1 }, { pitch: "F4", duration: 0.5 }
    ]
  },
  2007: {
    year: 2007,
    title: "Umbrella",
    artist: "Rihanna",
    genre: "R&B / Pop",
    lyrics: [
      "Under my umbrella, ella, ella, eh, eh, eh",
      "Under my umbrella, ella, ella, eh, eh, eh",
      "Under my umbrella, ella, ella, eh, eh, eh, eh, eh-eh"
    ],
    bpm: 126,
    notes: [
      // Part 1
      { pitch: "F4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "Ab4", duration: 1 }, { pitch: "Bb4", duration: 0.5 },
      { pitch: "Ab4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "F4", duration: 1 },
      { pitch: "F4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "Ab4", duration: 1 }, { pitch: "Bb4", duration: 0.5 },
      // Part 2
      { pitch: "F4", duration: 0.5 }, { pitch: "G4", duration: 0.5 }, { pitch: "Ab4", duration: 0.5 }, { pitch: "Bb4", duration: 0.5 },
      { pitch: "C5", duration: 0.5 }, { pitch: "Bb4", duration: 0.5 }, { pitch: "Ab4", duration: 0.5 }, { pitch: "Bb4", duration: 1 }
    ]
  },
  2008: {
    year: 2008,
    title: "Viva La Vida",
    artist: "Coldplay",
    genre: "Baroque Pop",
    lyrics: [
      "I hear Jerusalem bells a-ringing",
      "Roman Cavalry choirs are singing",
      "Be my mirror, my sword and shield",
      "My missionaries in a foreign field",
      "For some reason I can't explain..."
    ],
    bpm: 138,
    notes: [
      // Part 1
      { pitch: "C#4", duration: 0.5 }, { pitch: "D#4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "F#4", duration: 1 },
      { pitch: "F4", duration: 0.5 }, { pitch: "D#4", duration: 0.5 }, { pitch: "C#4", duration: 1 },
      { pitch: "C#4", duration: 0.5 }, { pitch: "D#4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "F#4", duration: 1 },
      // Part 2
      { pitch: "C#4", duration: 0.5 }, { pitch: "D#4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "F#4", duration: 0.5 },
      { pitch: "F4", duration: 0.5 }, { pitch: "D#4", duration: 0.5 }, { pitch: "C#4", duration: 0.5 }, { pitch: "A#3", duration: 1.5 }
    ]
  },
  2009: {
    year: 2009,
    title: "Poker Face",
    artist: "Lady Gaga",
    genre: "Synth Pop",
    lyrics: [
      "Can't read my, can't read my",
      "No, he can't read my poker face",
      "(She's got me like nobody)",
      "P-p-p-poker face, p-p-poker face",
      "Mum-mum-mum-mah!"
    ],
    bpm: 119,
    notes: [
      // Part 1
      { pitch: "G#4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 0.5 }, { pitch: "G#4", duration: 1 },
      { pitch: "B4", duration: 0.5 }, { pitch: "G#4", duration: 1 },
      { pitch: "G#4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 0.5 }, { pitch: "G#4", duration: 1 },
      // Part 2
      { pitch: "G#4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 },
      { pitch: "F#4", duration: 0.5 }, { pitch: "G#4", duration: 1 }
    ]
  },
  2010: {
    year: 2010,
    title: "Bad Romance",
    artist: "Lady Gaga",
    genre: "Dance Pop",
    lyrics: [
      "Rah-rah-ah-ah-ah",
      "Roma-roma-ma",
      "Ga-ga-ooh-la-la",
      "Want your bad romance",
      "I want your love and I want your revenge",
      "You and me could write a bad romance"
    ],
    bpm: 119,
    notes: [
      // Part 1
      { pitch: "A4", duration: 0.5 }, { pitch: "B4", duration: 0.5 }, { pitch: "C5", duration: 1 }, { pitch: "A4", duration: 0.5 },
      { pitch: "C5", duration: 0.5 }, { pitch: "A4", duration: 0.5 }, { pitch: "G4", duration: 1 },
      { pitch: "A4", duration: 0.5 }, { pitch: "B4", duration: 0.5 }, { pitch: "C5", duration: 1 },
      // Part 2
      { pitch: "C5", duration: 0.5 }, { pitch: "C5", duration: 0.5 }, { pitch: "C5", duration: 0.5 }, { pitch: "B4", duration: 0.5 },
      { pitch: "A4", duration: 0.5 }, { pitch: "B4", duration: 0.5 }, { pitch: "B4", duration: 0.5 }, { pitch: "A4", duration: 1 }
    ]
  },
  2011: {
    year: 2011,
    title: "Party Rock Anthem",
    artist: "LMFAO",
    genre: "Electro House",
    lyrics: [
      "Party rock is in the house tonight",
      "Everybody just have a good time",
      "And we gonna make you lose your mind",
      "We just wanna see you shake that!"
    ],
    bpm: 130,
    notes: [
      // Part 1
      { pitch: "F#4", duration: 0.5 }, { pitch: "F#4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "F#4", duration: 1 },
      { pitch: "A4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 1 },
      { pitch: "F#4", duration: 0.5 }, { pitch: "F#4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "F#4", duration: 1 },
      // Part 2
      { pitch: "F#4", duration: 0.5 }, { pitch: "F#4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "F#4", duration: 0.5 },
      { pitch: "A4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 0.5 }, { pitch: "F#4", duration: 1 }
    ]
  },
  2012: {
    year: 2012,
    title: "Gangnam Style",
    artist: "PSY",
    genre: "K-Pop",
    lyrics: [
      "Opa Gangnam Style!",
      "Gangnam Style!",
      "Op, op, op, op",
      "Opa Gangnam Style!",
      "Eh- Sexy Lady!",
      "Op, op, op, op"
    ],
    bpm: 132,
    notes: [
      // Part 1
      { pitch: "B3", duration: 0.5 }, { pitch: "B3", duration: 0.5 }, { pitch: "B3", duration: 0.5 }, { pitch: "B3", duration: 1 },
      { pitch: "A3", duration: 0.5 }, { pitch: "B3", duration: 0.5 }, { pitch: "C#4", duration: 1 },
      { pitch: "B3", duration: 0.5 }, { pitch: "B3", duration: 0.5 }, { pitch: "B3", duration: 0.5 }, { pitch: "B3", duration: 1 },
      // Part 2
      { pitch: "E4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "D4", duration: 0.5 },
      { pitch: "C#4", duration: 0.5 }, { pitch: "B3", duration: 0.5 }, { pitch: "B3", duration: 1 }
    ]
  },
  2013: {
    year: 2013,
    title: "Get Lucky",
    artist: "Daft Punk ft. Pharrell",
    genre: "Disco / Funk",
    lyrics: [
      "She's up all night 'til the sun",
      "I'm up all night to get some",
      "She's up all night for good fun",
      "I'm up all night to get lucky",
      "We're up all night to get lucky",
      "We're up all night to get lucky"
    ],
    bpm: 116,
    notes: [
      // Part 1
      { pitch: "B3", duration: 1 }, { pitch: "D4", duration: 1 }, { pitch: "F#4", duration: 1 }, { pitch: "E4", duration: 1 },
      { pitch: "B3", duration: 1 }, { pitch: "D4", duration: 1 }, { pitch: "F#4", duration: 1 }, { pitch: "E4", duration: 1 },
      // Part 2
      { pitch: "B3", duration: 1 }, { pitch: "D4", duration: 1 }, { pitch: "F#4", duration: 1 }, { pitch: "E4", duration: 1 },
      { pitch: "B3", duration: 1 }, { pitch: "D4", duration: 1 }, { pitch: "F#4", duration: 1 }, { pitch: "E4", duration: 1 }
    ]
  },
  2014: {
    year: 2014,
    title: "Happy",
    artist: "Pharrell Williams",
    genre: "Soul / Pop",
    lyrics: [
      "Because I'm happy",
      "Clap along if you feel like a room without a roof",
      "Because I'm happy",
      "Clap along if you feel like happiness is the truth",
      "Because I'm happy",
      "Clap along if you know what happiness is to you"
    ],
    bpm: 160,
    notes: [
      // Part 1
      { pitch: "F4", duration: 0.5 }, { pitch: "Ab4", duration: 0.5 }, { pitch: "Bb4", duration: 1 }, { pitch: "C5", duration: 0.5 },
      { pitch: "Bb4", duration: 0.5 }, { pitch: "Ab4", duration: 0.5 }, { pitch: "F4", duration: 1 },
      { pitch: "Ab4", duration: 0.5 }, { pitch: "Bb4", duration: 1 }, { pitch: "C5", duration: 0.5 },
      // Part 2
      { pitch: "F4", duration: 0.5 }, { pitch: "Ab4", duration: 0.5 }, { pitch: "Bb4", duration: 1 }, { pitch: "C5", duration: 0.5 },
      { pitch: "Bb4", duration: 0.5 }, { pitch: "Ab4", duration: 0.5 }, { pitch: "F4", duration: 1 }
    ]
  },
  2015: {
    year: 2015,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    genre: "Funk Pop",
    lyrics: [
      "Uptown funk you up, uptown funk you up",
      "Uptown funk you up, uptown funk you up",
      "Don't believe me, just watch!",
      "Hey, hey, hey, ow!"
    ],
    bpm: 115,
    notes: [
      // Part 1
      { pitch: "D3", duration: 0.5 }, { pitch: "D3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "A3", duration: 1 },
      { pitch: "C4", duration: 0.5 }, { pitch: "A3", duration: 0.5 }, { pitch: "G3", duration: 1 },
      { pitch: "D3", duration: 0.5 }, { pitch: "D3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "A3", duration: 1 },
      // Part 2
      { pitch: "D3", duration: 0.5 }, { pitch: "D3", duration: 0.5 }, { pitch: "G3", duration: 0.5 }, { pitch: "A3", duration: 0.5 },
      { pitch: "C4", duration: 0.5 }, { pitch: "A3", duration: 0.5 }, { pitch: "G3", duration: 1 }
    ]
  },
  2016: {
    year: 2016,
    title: "One Dance",
    artist: "Drake ft. Wizkid",
    genre: "Dancehall / Pop",
    lyrics: [
      "I need a one dance",
      "Got a Hennessy in my hand",
      "One more time 'fore I go",
      "Higher powers taking a hold on me",
      "Baby, I like your style..."
    ],
    bpm: 104,
    notes: [
      // Part 1
      { pitch: "F#4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "A4", duration: 1 }, { pitch: "B4", duration: 0.5 },
      { pitch: "A4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 1 },
      { pitch: "F#4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "A4", duration: 1 },
      // Part 2
      { pitch: "F#4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "A4", duration: 0.5 }, { pitch: "B4", duration: 0.5 },
      { pitch: "A4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 1 }
    ]
  },
  2017: {
    year: 2017,
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Tropical House Pop",
    lyrics: [
      "I'm in love with the shape of you",
      "We push and pull like a magnet do",
      "Although my heart is falling too",
      "I'm in love with your body",
      "Last night you were in my room",
      "And now my bedsheets smell like you"
    ],
    bpm: 96,
    notes: [
      // Part 1
      { pitch: "C#4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "C#4", duration: 1 }, { pitch: "C#4", duration: 0.5 },
      { pitch: "E4", duration: 0.5 }, { pitch: "C#4", duration: 1 }, { pitch: "C#4", duration: 0.5 }, { pitch: "E4", duration: 0.5 },
      // Part 2
      { pitch: "C#4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }, { pitch: "C#4", duration: 1 }, { pitch: "C#4", duration: 0.5 },
      { pitch: "E4", duration: 0.5 }, { pitch: "C#4", duration: 1 }, { pitch: "C#4", duration: 0.5 }, { pitch: "E4", duration: 0.5 }
    ]
  },
  2018: {
    year: 2018,
    title: "Havana",
    artist: "Camila Cabello",
    genre: "Latin Pop",
    lyrics: [
      "Havana, ooh na-na",
      "Half of my heart is in Havana, ooh na-na",
      "He took me back to East Atlanta, na-na-na",
      "Oh, but my heart is in Havana",
      "Havana, ooh na-na"
    ],
    bpm: 105,
    notes: [
      // Part 1
      { pitch: "G4", duration: 0.5 }, { pitch: "Bb4", duration: 0.5 }, { pitch: "D5", duration: 1 }, { pitch: "C5", duration: 0.5 },
      { pitch: "Bb4", duration: 0.5 }, { pitch: "A4", duration: 1 }, { pitch: "G4", duration: 0.5 }, { pitch: "Bb4", duration: 0.5 },
      { pitch: "D5", duration: 1 }, { pitch: "C5", duration: 0.5 }, { pitch: "Bb4", duration: 0.5 }, { pitch: "A4", duration: 1 },
      // Part 2
      { pitch: "G4", duration: 0.5 }, { pitch: "Bb4", duration: 0.5 }, { pitch: "D5", duration: 1 }, { pitch: "C5", duration: 0.5 },
      { pitch: "Bb4", duration: 0.5 }, { pitch: "A4", duration: 1 }, { pitch: "G4", duration: 0.5 }
    ]
  },
  2019: {
    year: 2019,
    title: "Old Town Road",
    artist: "Lil Nas X",
    genre: "Country Rap",
    lyrics: [
      "Yeah, I'm gonna take my horse to the old town road",
      "I'm gonna ride 'til I can't no more",
      "I got the horses in the back",
      "Horse tack is attached",
      "Hat is matte black"
    ],
    bpm: 136,
    notes: [
      // Part 1
      { pitch: "G#4", duration: 0.5 }, { pitch: "B4", duration: 0.5 }, { pitch: "C#5", duration: 1 }, { pitch: "B4", duration: 0.5 },
      { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 1 }, { pitch: "G#4", duration: 0.5 }, { pitch: "B4", duration: 0.5 },
      { pitch: "C#5", duration: 1 }, { pitch: "B4", duration: 0.5 }, { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 1 },
      // Part 2
      { pitch: "G#4", duration: 0.5 }, { pitch: "B4", duration: 0.5 }, { pitch: "C#5", duration: 1 }, { pitch: "B4", duration: 0.5 },
      { pitch: "G#4", duration: 0.5 }, { pitch: "F#4", duration: 1 }
    ]
  },
  2020: {
    year: 2020,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Synthwave",
    lyrics: [
      "I said, ooh, I'm blinded by the lights",
      "No, I can't sleep until I feel your touch",
      "I said, ooh, I'm drowning in the night",
      "Oh, when I'm like this, you're the one I trust",
      "Hey, hey, hey!"
    ],
    bpm: 171,
    notes: [
      // Part 1
      { pitch: "F4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "Ab4", duration: 0.5 }, { pitch: "F4", duration: 1 },
      { pitch: "Bb4", duration: 0.5 }, { pitch: "C5", duration: 0.5 }, { pitch: "Eb5", duration: 0.5 }, { pitch: "C5", duration: 1.5 },
      // Part 2
      { pitch: "F4", duration: 0.5 }, { pitch: "F4", duration: 0.5 }, { pitch: "Ab4", duration: 0.5 }, { pitch: "F4", duration: 1 },
      { pitch: "Bb4", duration: 0.5 }, { pitch: "C5", duration: 0.5 }, { pitch: "Eb5", duration: 0.5 }, { pitch: "C5", duration: 1.5 }
    ]
  }
};
