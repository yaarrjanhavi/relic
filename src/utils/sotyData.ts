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
      "Hey, hey... Bye, bye, bye",
      "Bye, bye...",
      "I'm doing this tonight",
      "You're probably gonna start a fight",
      "I know this can't go on",
      "Baby, bye, bye, bye!"
    ],
    bpm: 110,
    notes: []
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
    notes: []
  },
  2002: {
    year: 2002,
    title: "Lose Yourself",
    artist: "Eminem",
    genre: "Hip Hop",
    lyrics: [
      "His palms are sweaty, knees weak, arms are heavy",
      "There's vomit on his sweater already, mom's spaghetti",
      "He's nervous, but on the surface he looks calm and ready",
      "To drop bombs, but he keeps on forgetting..."
    ],
    bpm: 86,
    notes: []
  },
  2003: {
    year: 2003,
    title: "Hey Ya!",
    artist: "OutKast",
    genre: "Funk / Pop",
    lyrics: [
      "One, two, three, uh!",
      "My girl don't mess around",
      "Because she loves me so",
      "And this I know for shooo-ooo-ore!",
      "Uh, but does she really wanna..."
    ],
    bpm: 120,
    notes: []
  },
  2004: {
    year: 2004,
    title: "Yeah!",
    artist: "Usher ft. Lil Jon & Ludacris",
    genre: "Crunk & B",
    lyrics: [
      "Peace up, A-town down!",
      "Yeah! Usher, Lil Jon, Ludacris!",
      "Yeah, yeah, yeah, yeah, yeah, yeah!",
      "In the club with my homies, tryna get a little V-I",
      "Keep it down on the low key..."
    ],
    bpm: 105,
    notes: []
  },
  2005: {
    year: 2005,
    title: "Feel Good Inc",
    artist: "Gorillaz",
    genre: "Alternative Rock",
    lyrics: [
      "(Crazy laugh) Ha-ha-ha-ha-ha!",
      "Feel good...",
      "City's breaking down on a camel's back",
      "They just have to go, 'cause they don't know wack",
      "So while you fill the streets, it's appealing to see..."
    ],
    bpm: 130,
    notes: []
  },
  2006: {
    year: 2006,
    title: "Crazy",
    artist: "Gnarls Barkley",
    genre: "Soul / Pop",
    lyrics: [
      "I remember when, I remember, I remember when I lost my mind",
      "There was something so pleasant about that phase",
      "Even your emotions had an echo in so much space",
      "And when you're out there, without care..."
    ],
    bpm: 112,
    notes: []
  },
  2007: {
    year: 2007,
    title: "Umbrella",
    artist: "Rihanna",
    genre: "R&B / Pop",
    lyrics: [
      "No clouds in my stones",
      "Let it rain, I hydroplane in the bank",
      "She fly higher than weather",
      "And G5's or better...",
      "You know me, in anticipation for precipitation..."
    ],
    bpm: 126,
    notes: []
  },
  2008: {
    year: 2008,
    title: "Viva La Vida",
    artist: "Coldplay",
    genre: "Baroque Pop",
    lyrics: [
      "(Instrumental string hook)",
      "I used to rule the world",
      "Seas would rise when I gave the word",
      "Now in the morning, I sleep alone",
      "Sweep the streets I used to own..."
    ],
    bpm: 138,
    notes: []
  },
  2009: {
    year: 2009,
    title: "Poker Face",
    artist: "Lady Gaga",
    genre: "Synth Pop",
    lyrics: [
      "Mum-mum-mum-mah",
      "Mum-mum-mum-mah",
      "I wanna hold 'em like they do in Texas, please",
      "Fold 'em, let 'em, hit me, raise it, baby, stay with me",
      "Love game intuition, play the cards with spades to start..."
    ],
    bpm: 119,
    notes: []
  },
  2010: {
    year: 2010,
    title: "Bad Romance",
    artist: "Lady Gaga",
    genre: "Dance Pop",
    lyrics: [
      "Oh-oh-oh-oh-oooh-oh-oh-oooh-oh-oh-oh-oh!",
      "Caught in a bad romance",
      "Oh-oh-oh-oh-oooh-oh-oh-oooh-oh-oh-oh-oh!",
      "Caught in a bad romance",
      "Rah-rah-ah-ah-ah, roma-roma-ma, ga-ga-ooh-la-la!"
    ],
    bpm: 119,
    notes: []
  },
  2011: {
    year: 2011,
    title: "Party Rock Anthem",
    artist: "LMFAO",
    genre: "Electro House",
    lyrics: [
      "Party rock!",
      "Yeah, woo!",
      "Let's go!",
      "Party rock is in the house tonight",
      "Everybody just have a good time",
      "And we gonna make you lose your mind..."
    ],
    bpm: 130,
    notes: []
  },
  2012: {
    year: 2012,
    title: "Gangnam Style",
    artist: "PSY",
    genre: "K-Pop",
    lyrics: [
      "Oppa Gangnam Style!",
      "Gangnam Style!",
      "Najeneun ttasaroun inganjeogin yeoja",
      "Keopi hanjaui yeoyureul aneun pumkyeok inneun yeoja",
      "Bami omyeon simjangi tteugeowojineun yeoja..."
    ],
    bpm: 132,
    notes: []
  },
  2013: {
    year: 2013,
    title: "Get Lucky",
    artist: "Daft Punk ft. Pharrell",
    genre: "Disco / Funk",
    lyrics: [
      "Like the legend of the phoenix",
      "All ends with beginnings",
      "What keeps the planet spinning",
      "The force from the beginning",
      "We've come too far, to give up who we are..."
    ],
    bpm: 116,
    notes: []
  },
  2014: {
    year: 2014,
    title: "Happy",
    artist: "Pharrell Williams",
    genre: "Soul / Pop",
    lyrics: [
      "It might seem crazy what I'm about to say",
      "Sunshine she's here, you can take a break",
      "I'm a hot air balloon that could go to space",
      "With the air, like I don't care, baby, by the way...",
      "Because I'm happy!"
    ],
    bpm: 160,
    notes: []
  },
  2015: {
    year: 2015,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    genre: "Funk Pop",
    lyrics: [
      "Doh, doh-doh-doh, doh-doh-doh, doh-doh",
      "Doh, doh-doh-doh, doh-doh-doh, doh-doh",
      "This hit, that ice cold, Michelle Pfeiffer, that white gold",
      "This one for them hood girls, them good girls..."
    ],
    bpm: 115,
    notes: []
  },
  2016: {
    year: 2016,
    title: "One Dance",
    artist: "Drake ft. Wizkid",
    genre: "Dancehall / Pop",
    lyrics: [
      "One dance...",
      "Baby, I like your style...",
      "Grips on your waist, front way, back way",
      "You know that I don't play",
      "Streets not safe but I never run away",
      "Even when I'm away..."
    ],
    bpm: 104,
    notes: []
  },
  2017: {
    year: 2017,
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Tropical House Pop",
    lyrics: [
      "The club isn't the best place to find a lover",
      "So the bar is where I go",
      "Me and my friends at the table doing shots",
      "Drinking fast and then we talk slow",
      "And you come over and start up a conversation with just me..."
    ],
    bpm: 96,
    notes: []
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
      "There's somethin' 'bout his manners..."
    ],
    bpm: 105,
    notes: []
  },
  2019: {
    year: 2019,
    title: "Old Town Road",
    artist: "Lil Nas X",
    genre: "Country Rap",
    lyrics: [
      "Yeah, I'm gonna take my horse to the old town road",
      "I'm gonna ride 'til I can't no more",
      "I'm gonna take my horse to the old town road",
      "I'm gonna ride 'til I can't no more",
      "I got the horses in the back..."
    ],
    bpm: 136,
    notes: []
  },
  2020: {
    year: 2020,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Synthwave",
    lyrics: [
      "(Intro Synth Riff)",
      "Yeah...",
      "I've been on my own for long enough",
      "Maybe you can show me how to love, maybe",
      "I'm going through withdrawals, you don't even have to do too much..."
    ],
    bpm: 171,
    notes: []
  }
};
