export interface Headline {
  title: string;
  category: "World" | "Tech" | "Culture";
  summary: string;
}

export interface Video {
  title: string;
  youtubeId: string;
  views: string;
  description: string;
  isLocalFallback?: boolean; // Defaults to visualizer if true
}

export interface Slang {
  word: string;
  meaning: string;
  example: string;
  channel: "irc" | "msn" | "twitter" | "forum";
  user1: string;
  user2: string;
  text1: string;
  text2: string;
}

export interface Website {
  name: string;
  url: string;
  description: string;
  category: "Social" | "Search" | "Fun/Media" | "Utility";
}

export interface Game {
  name: string;
  type: "flash" | "console" | "pc" | "mobile";
  description: string;
}

export interface TechItem {
  name: string;
  description: string;
  releaseDate: string;
  icon: string;
}

export interface WebStats {
  globalUsers: string;
  topBrowser: string;
  connectionSpeed: string;
  connectionType: string;
}

export interface YearData {
  year: number;
  mood: string;
  moodBadge: string;
  rarityScore: number; // For collectible card
  headlines: Headline[];
  videos: Video[];
  slang: Slang[];
  websites: Website[];
  games: Game[];
  tech: TechItem[];
  stats: WebStats;
}

export const relicDatabase: Record<number, YearData> = {
  2000: {
    year: 2000,
    moodBadge: "Y2K Survival & Dial-Up Dawn",
    mood: "The internet of 2000 was a wild, text-heavy frontier of dial-up tones, under-construction GIFs, and relief that the Y2K bug didn't destroy civilization. Web directories like Yahoo ruled, and personal websites were neon-colored shrines of raw HTML.",
    rarityScore: 95,
    headlines: [
      { title: "Y2K Bug Fizzles Out", category: "World", summary: "The feared Year 2000 computer bug passes with minimal global disruptions as clocks roll over." },
      { title: "Dot-com Bubble Peaks and Begins to Burst", category: "Tech", summary: "Technology stock indexes hit all-time highs before rapidly crashing, wiping out trillions in paper wealth." },
      { title: "Sony Releases PlayStation 2", category: "Culture", summary: "The PS2 launches in Japan and North America, quickly becoming the best-selling gaming console of all time." }
    ],
    videos: [
      { title: "Badger Song Preview", youtubeId: "EIyixC5u-3E", views: "Millions", description: "Flash animations start to rule the web, featuring endless Badger loops.", isLocalFallback: true }
    ],
    slang: [
      { word: "ASL", meaning: "Age / Sex / Location", example: "asl? 18/f/cali", channel: "irc", user1: "CyberPunk00", user2: "NeoNeo", text1: "hey there, asl?", text2: "17/m/NY, you?" }
    ],
    websites: [
      { name: "Yahoo!", url: "http://yahoo.com", description: "The premier portal and search directory of the early web.", category: "Search" },
      { name: "Napster", url: "http://napster.com", description: "The revolutionary P2P file-sharing service that changed music forever.", category: "Fun/Media" },
      { name: "Pets.com", url: "http://pets.com", description: "The iconic symbol of the dot-com bubble's excess and subsequent crash.", category: "Utility" }
    ],
    games: [
      { name: "The Sims", type: "pc", description: "Will Wright's virtual dollhouse hits PCs and becomes an overnight cultural phenomenon." },
      { name: "Deus Ex", type: "pc", description: "The landmark cyberpunk action-RPG launches, exploring themes of global conspiracy." }
    ],
    tech: [
      { name: "Nokia 3310", description: "The indestructible brick phone is launched, featuring the legendary game Snake II.", releaseDate: "September 2000", icon: "Smartphone" },
      { name: "USB Flash Drives", description: "Commercial sales of flash drives begin, replacing the trusty floppy disk.", releaseDate: "Late 2000", icon: "Cpu" }
    ],
    stats: {
      globalUsers: "361 Million (5.8% of world pop)",
      topBrowser: "Internet Explorer 5 (80%)",
      connectionSpeed: "56 Kbps",
      connectionType: "Dial-up"
    }
  },
  2004: {
    year: 2004,
    moodBadge: "Web 2.0 Genesis & Flash Supremacy",
    mood: "The internet of 2004 felt exciting, collaborative, and chaotic. Adobe Flash ruled the browser game scene, MySpace was the hottest place online, and a small Harvard startup called TheFacebook launched. We waited minutes for images to download and customized our Profile layouts with glitter text.",
    rarityScore: 88,
    headlines: [
      { title: "The Launch of Facebook", category: "Tech", summary: "Mark Zuckerberg launches 'TheFacebook' from his Harvard dorm room, initially limited to ivy league students." },
      { title: "Gmail Debuts with 1GB Storage", category: "Tech", summary: "Google announces Gmail on April Fools' Day. People think it is a hoax because 1GB of storage is 500x more than Hotmail." },
      { title: "Spirit and Opportunity Mars Rovers Land", category: "World", summary: "NASA successfully lands twin rovers on Mars, sending back stunning panoramic color photos of the red planet." }
    ],
    videos: [
      { title: "Numa Numa", youtubeId: "KmtzQCSh6xk", views: "700M+", description: "Gary Brolsma video-records himself lip-syncing to 'Dragostea Din Tei', creating one of the earliest global webcam memes." },
      { title: "End of the World (Flash)", youtubeId: "kOpJ8L1zZ3E", views: "50M+", description: "An iconic early flash animation depicting a global nuclear standoff ('But I am le tired... well, have a nap, then fire ze missiles!').", isLocalFallback: true }
    ],
    slang: [
      { word: "1337", meaning: "Leet (Elite) speak, using numbers for letters", example: "u got pwned by a 1337 haxor!", channel: "forum", user1: "Xx_SniperElite_xX", user2: "NoobBuster", text1: "i am too 1337 for this clan.", text2: "stfu lol u got pwned last round" },
      { word: "Rawr XD", meaning: "Cute dinosaur roar, denoting playful affection", example: "Rawr XD means I love you in dinosaur!", channel: "msn", user1: "Sk8rBoy04", user2: "SceneQueen", text1: "Rawr XD!!!", text2: "omg u are so random!! *glitters*" }
    ],
    websites: [
      { name: "MySpace", url: "http://myspace.com", description: "The social network of choice, complete with custom HTML layouts, background music, and Top 8 drama.", category: "Social" },
      { name: "Flickr", url: "http://flickr.com", description: "The premier Web 2.0 photo-sharing service, introducing tags and photostreams.", category: "Fun/Media" },
      { name: "Miniclip", url: "http://miniclip.com", description: "The ultimate sandbox for Flash games, played during school computer lab classes.", category: "Fun/Media" }
    ],
    games: [
      { name: "World of Warcraft", type: "pc", description: "Blizzard's genre-defining MMORPG launches, consuming the free time of millions worldwide." },
      { name: "Halo 2", type: "console", description: "Bungie's masterpiece launches on Xbox, revolutionizing console matchmaking via Xbox Live." },
      { name: "Alien Hominid", type: "flash", description: "A beautifully animated run-and-gun Flash game that transitioned from Newgrounds to home consoles." }
    ],
    tech: [
      { name: "Motorola Razr V3", description: "The ultimate status symbol flip phone. Sleek, metallic, and incredibly thin.", releaseDate: "Q3 2004", icon: "Smartphone" },
      { name: "iPod Mini", description: "Apple launches the anodized aluminum mini iPod in bright colors, with a new click wheel.", releaseDate: "January 2004", icon: "Music" }
    ],
    stats: {
      globalUsers: "913 Million (14.2% of world pop)",
      topBrowser: "Internet Explorer 6 (91%)",
      connectionSpeed: "128 - 512 Kbps",
      connectionType: "DSL / Dial-up"
    }
  },
  2008: {
    year: 2008,
    moodBadge: "Frutiger Aero Peak & App Store Boom",
    mood: "The internet of 2008 felt glossy, optimistic, and mobile. Glossy aqua gradients, glass panels, and floating water droplets dominated UI design. The iPhone App Store opened, launching apps like Super Monkey Ball and Ocarina. YouTube was transitionary, and Barack Obama's campaign proved the power of social networking.",
    rarityScore: 78,
    headlines: [
      { title: "Barack Obama Wins US Presidency", category: "World", summary: "Barack Obama is elected the 44th President of the United States, running a historic, internet-savvy campaign." },
      { title: "Apple Launches App Store", category: "Tech", summary: "The App Store launches with 500 apps, turning the iPhone into a software powerhouse overnight." },
      { title: "CERN Large Hadron Collider Switched On", category: "World", summary: "Scientists power up the world's largest particle collider, prompting internet rumors about black holes swallowing Earth." }
    ],
    videos: [
      { title: "Rickroll (Rick Astley - Never Gonna Give You Up)", youtubeId: "dQw4w9WgXcQ", views: "1.4B+", description: "The definitive bait-and-switch internet prank reaches peak global popularity." },
      { title: "Evolution of Dance", youtubeId: "dMH0bHeiRNg", views: "300M+", description: "Inspirational stand-up comedian Judson Laipply performs a mashup of dance styles, setting early YouTube view records." },
      { title: "Charlie bit my finger - again !", youtubeId: "_OBlgSz8sSM", views: "890M+", description: "Two British brothers capture hearts in a simple home video that goes spectacularly viral.", isLocalFallback: true }
    ],
    slang: [
      { word: "Fail / Epic Fail", meaning: "A spectacular blunder or mistake", example: "That test score was an epic fail.", channel: "forum", user1: "KeyboardCat", user2: "FailBlogLover", text1: "did u see him trip over the trash can?", text2: "yes omg epic fail!!" },
      { word: "ROFLCOPTER", meaning: "Rolling on the floor laughing, flying like a helicopter", example: "so funny my roflcopter is taking off!", channel: "irc", user1: "AeroEnthusiast", user2: "VistaFan", text1: "ROFLCOPTER goes soi soi soi", text2: "hahaha ancient meme" }
    ],
    websites: [
      { name: "YouTube", url: "http://youtube.com", description: "The premier video repository of the web, now owned by Google and adopting a clean glossy player layout.", category: "Fun/Media" },
      { name: "Twitter", url: "http://twitter.com", description: "Microblogging rises to prominence as users share what they are doing in 140 characters or less.", category: "Social" },
      { name: "Fail Blog", url: "http://failblog.org", description: "A hub of image macros showcasing people failing in hilarious, public ways.", category: "Fun/Media" }
    ],
    games: [
      { name: "Spore", type: "pc", description: "Will Wright's ambitious evolution simulator lets players guide a species from cell to space explorer." },
      { name: "Super Smash Bros. Brawl", type: "console", description: "The Wii fighter brings Subspace Emissary and online battles (though notoriously laggy) to the masses." },
      { name: "Grand Theft Auto IV", type: "console", description: "Niko Bellic arrives in Liberty City, setting a high watermark for open-world physics and storytelling." }
    ],
    tech: [
      { name: "iPhone 3G", description: "Introduced GPS, App Store support, and a glossy plastic back in black or white.", releaseDate: "July 2008", icon: "Smartphone" },
      { name: "Nintendo Wii (Peak Era)", description: "Motion-controlled tennis, bowling, and Wii Fit occupy living rooms across the globe.", releaseDate: "Global Peak 2008", icon: "Gamepad" }
    ],
    stats: {
      globalUsers: "1.56 Billion (23% of world pop)",
      topBrowser: "Internet Explorer 7 (68%), Firefox (25%)",
      connectionSpeed: "1.5 - 3 Mbps",
      connectionType: "Broadband (DSL/Cable)"
    }
  },
  2012: {
    year: 2012,
    moodBadge: "Apocalypse Hype & Viral Super-Novas",
    mood: "The internet of 2012 was a hyper-connected, meme-saturated place. The Mayan calendar sparked end-of-the-world memes, Gangnam Style became the first video to hit 1 billion views on YouTube, and image macros styled in Impact font (Confession Bear, Grumpy Cat) ruled Reddit and Tumblr. Instagram was bought by Facebook for $1 billion.",
    rarityScore: 70,
    headlines: [
      { title: "Curiosity Rover Lands on Mars", category: "World", summary: "NASA's advanced mobile laboratory lands in Gale Crater to search for evidence of past habitable environments." },
      { title: "Facebook Acquires Instagram for $1 Billion", category: "Tech", summary: "Mark Zuckerberg buys the photo-sharing app with only 13 employees, raising eyebrows in Valley." },
      { title: "London Olympic Games Go Viral", category: "Culture", summary: "The summer Olympics are dubbed the first 'social media games' with athletes and spectators sharing live tweets." }
    ],
    videos: [
      { title: "PSY - GANGNAM STYLE", youtubeId: "9bZkp7q19f0", views: "5B+", description: "Korean artist PSY conquers the globe with a horse-riding dance, breaking YouTube's view counter mechanism." },
      { title: "KONY 2012", youtubeId: "Y4MnpzRxQyI", views: "100M+", description: "An activist documentary about a Ugandan warlord goes viral overnight, sparking debates on internet activism.", isLocalFallback: true }
    ],
    slang: [
      { word: "YOLO", meaning: "You Only Live Once, popularized by Drake", example: "Gonna jump off this rope swing, YOLO!", channel: "twitter", user1: "SwagMaster12", user2: "DrakeFan", text1: "Bungee jumping today! #YOLO", text2: "be careful bro, yolo but you can break a leg lol" },
      { word: "Derp / Herp", meaning: "Expressions of silliness, stupidity, or blank stares", example: "He had a total derp face in that photo.", channel: "forum", user1: "MemeLover99", user2: "RageComics", text1: "le herp derp, i made a rage comic", text2: "epic lol, post it on Reddit!" }
    ],
    websites: [
      { name: "Pinterest", url: "http://pinterest.com", description: "The virtual pinboard interface explodes in popularity, especially for recipes and interior design.", category: "Social" },
      { name: "Reddit (Rage Comics Era)", description: "The front page of the internet is dominated by F7U12 rage comics and Advice Animals.", category: "Social" },
      { name: "Kickstarter", url: "http://kickstarter.com", description: "Crowdfunding hits the mainstream, backing projects like the Pebble E-Paper Watch and Ouya console.", category: "Utility" }
    ],
    games: [
      { name: "Minecraft (Full Release Era)", type: "pc", description: "Following its beta, Mojang's blocky sandbox reaches peak indie cultural domination." },
      { name: "Candy Crush Saga", type: "mobile", description: "The match-three puzzle game takes over smartphones, drawing in casual gamers of all ages." },
      { name: "Journey", type: "console", description: "Thatgamecompany's beautiful, meditative multiplayer trek wins critical acclaim and game-of-the-year awards." }
    ],
    tech: [
      { name: "Pebble Smartwatch", description: "The highly successful Kickstarter project kickstarts the modern smartwatch trend.", releaseDate: "April 2012", icon: "Watch" },
      { name: "Raspberry Pi", description: "The credit-card-sized single-board computer launches, sparking a DIY hardware hobbyist boom.", releaseDate: "February 2012", icon: "Cpu" }
    ],
    stats: {
      globalUsers: "2.49 Billion (35% of world pop)",
      topBrowser: "Chrome (32%), IE 9 (31%), Firefox (22%)",
      connectionSpeed: "5 - 10 Mbps",
      connectionType: "Broadband / Early 4G Mobile"
    }
  },
  2016: {
    year: 2016,
    moodBadge: "Vine's Sunset & Absurdist Meme Era",
    mood: "The internet of 2016 felt surreal, high-speed, and divided. Vine was in its final golden months, Pokemon GO had people marching into public parks in massive crowds, and memes became deeply meta and absurdist (Harambe, Dat Boi, Bottle Flipping). Material Design and flat shapes had fully replaced the glassy aero grids of the past.",
    rarityScore: 65,
    headlines: [
      { title: "Pokémon GO Explodes Globally", category: "Culture", summary: "Niantic's augmented-reality mobile game launches, leading to millions of players wandering streets to catch pocket monsters." },
      { title: "Microsoft Acquires LinkedIn for $26.2B", category: "Tech", summary: "Microsoft makes its largest acquisition to date, integrating the professional social network into its cloud suite." },
      { title: "Gravitational Waves Detected", category: "World", summary: "LIGO scientists confirm the detection of ripples in spacetime, proving a 100-year-old Einstein theory." }
    ],
    videos: [
      { title: "PPAP (Pen-Pineapple-Apple-Pen)", youtubeId: "Ct6BUPvE2sM", views: "450M+", description: "Pikotaro's catchy, nonsensical 45-second track becomes a viral earworm, entering the Billboard Hot 100." },
      { title: "Damn Daniel", youtubeId: "h2W4Z55GgG4", views: "50M+", description: "A Snapchat compilation praising Daniel's white slip-on Vans sweeps the internet.", isLocalFallback: true },
      { title: "We Are Number One", youtubeId: "PfYnvDL0Qcw", views: "120M+", description: "A song from the children's show LazyTown is remixed thousands of times, raising money for actor Stefán Karl.", isLocalFallback: true }
    ],
    slang: [
      { word: "Dab", meaning: "A dance move/gesture smelling your elbow", example: "He scored a goal and did a dab.", channel: "twitter", user1: "HypeBeast16", user2: "NormieKiller", text1: "just did a sick bottle flip and dabbed on them haters", text2: "cringe lol but nice flip" },
      { word: "Dat Boi", meaning: "A unicycle-riding green frog meme", example: "here come dat boi! o shit waddup!", channel: "forum", user1: "MemeArchivist", user2: "RedditUser", text1: "o shit waddup!", text2: "here come dat boi!!" }
    ],
    websites: [
      { name: "Vine", url: "http://vine.co", description: "The short-form 6-second looping video application operates at its peak viral output before sunsetting.", category: "Fun/Media" },
      { name: "Tumblr (Peak Fandoms)", url: "http://tumblr.com", description: "The home of aesthetic blogging, text posts, and pop culture fandom discussions.", category: "Social" },
      { name: "Webflow", url: "http://webflow.com", description: "Visual web design begins to scale, enabling interactive browser layouts without coding.", category: "Utility" }
    ],
    games: [
      { name: "Overwatch", type: "pc", description: "Blizzard's colorful hero shooter launches, dominating competitive gaming and gaming fanbases." },
      { name: "Pokémon GO", type: "mobile", description: "The AR phenomenon that briefly unified humanity in the summer of 2016." },
      { name: "Dark Souls III", type: "console", description: "FromSoftware's dark fantasy trilogy concludes with fast-paced, challenging combat." }
    ],
    tech: [
      { name: "Oculus Rift (Consumer Release)", description: "The first consumer-ready VR headset launches, triggering a new wave of virtual reality investments.", releaseDate: "March 2016", icon: "Eye" },
      { name: "AirPods", description: "Apple removes the headphone jack from the iPhone 7 and launches its wireless earbuds, setting a new global accessory trend.", releaseDate: "September 2016", icon: "Music" }
    ],
    stats: {
      globalUsers: "3.49 Billion (46% of world pop)",
      topBrowser: "Chrome (62%), Safari (14%), Firefox (8%)",
      connectionSpeed: "15 - 30 Mbps",
      connectionType: "Fiber / LTE Mobile"
    }
  },
  2020: {
    year: 2020,
    moodBadge: "The Doomscroll & TikTok Takeover",
    mood: "The internet of 2020 was an lifeline and an echo chamber. Under global pandemic lockdowns, humanity migrated entirely online. TikTok became the default entertainment source, Zoom hosted class and work, Animal Crossing: New Horizons became a virtual sanctuary, and 'doomscrolling' became the defining online behavior.",
    rarityScore: 50,
    headlines: [
      { title: "COVID-19 Lockdowns Go Into Effect", category: "World", summary: "Governments worldwide institute stay-at-home orders, forcing school, work, and socializing online." },
      { title: "SpaceX Crew Dragon Launches Astronauts", category: "Tech", summary: "SpaceX becomes the first private company to send NASA astronauts into orbit, docking with the ISS." },
      { title: "Apple Launches M1 Chips", category: "Tech", summary: "Apple transition Macs away from Intel processors to custom ARM-based Apple Silicon, resetting computer performance benchmarks." }
    ],
    videos: [
      { title: "Among Us Viral Edits", youtubeId: "u3k82H7H7z8", views: "100M+", description: "The indie game Among Us explodes in popularity as streamers and friends play space-detective during quarantine.", isLocalFallback: true },
      { title: "Nathan Apodaca - Dreams (Cranberry Juice)", youtubeId: "tbcoG458G0E", views: "90M+", description: "A man skateboards down a highway drinking Ocean Spray while listening to Fleetwood Mac, encapsulating pure zen.", isLocalFallback: true }
    ],
    slang: [
      { word: "Sus", meaning: "Suspicious, popularized by Among Us", example: "Red is acting pretty sus in electrical.", channel: "twitter", user1: "Crewmate9", user2: "Imposter4", text1: "cyan is sus, he didn't do swipe card", text2: "no i swear i was in admin!" },
      { word: "Doomscrolling", meaning: "Obsessively scrolling through bad news feeds", example: "It's 3 AM and I'm doomscrolling Twitter again.", channel: "twitter", user1: "LockdownBlues", user2: "ZenGarden", text1: "can't sleep, just doomscrolling the case count numbers", text2: "put your phone down and go play Animal Crossing!" }
    ],
    websites: [
      { name: "Zoom", url: "http://zoom.us", description: "The video-conferencing tool becomes the global infrastructure for work, education, and happy hours.", category: "Utility" },
      { name: "TikTok", url: "http://tiktok.com", description: "The short-form video platform reaches unprecedented growth, defining quarantine culture, dances, and music hits.", category: "Social" },
      { name: "Figma", url: "http://figma.com", description: "Collaborative browser-based design reaches near-monopoly status in UI/UX teams.", category: "Utility" }
    ],
    games: [
      { name: "Animal Crossing: New Horizons", type: "console", description: "Released at the start of lockdowns, this island getaway game becomes a crucial global escape valve." },
      { name: "Among Us", type: "mobile", description: "Originally released in 2018, the social deduction game goes spectacularly viral as a lockdown hangout." },
      { name: "Cyberpunk 2077", type: "pc", description: "The highly anticipated sci-fi RPG launches after years of delays, sparking intense internet debate over its buggy launch." }
    ],
    tech: [
      { name: "PlayStation 5 / Xbox Series X", description: "Next-generation consoles launch during supply chain shortages, leading to online bot-scalping wars.", releaseDate: "November 2020", icon: "Gamepad" },
      { name: "Apple M1 MacBook", description: "The fanless laptop that runs mobile apps and has multi-day battery life, shifting PC architectures.", releaseDate: "November 2020", icon: "Laptop" }
    ],
    stats: {
      globalUsers: "4.90 Billion (62% of world pop)",
      topBrowser: "Chrome (66%), Safari (17%), Edge (4%)",
      connectionSpeed: "50 - 100 Mbps",
      connectionType: "Fiber / 5G Mobile"
    }
  }
};

// Simple interpolation helper to cover years between key entries
export function getYearData(year: number): YearData {
  if (relicDatabase[year]) {
    return relicDatabase[year];
  }
  
  // Find nearest lower and upper years
  const availableYears = Object.keys(relicDatabase).map(Number).sort((a, b) => a - b);
  
  let lowerYear = 2008; // default fallback
  let upperYear = 2008;
  
  for (let i = 0; i < availableYears.length; i++) {
    const y = availableYears[i];
    if (y <= year) {
      lowerYear = y;
    }
    if (y >= year) {
      upperYear = y;
      break;
    }
  }
  
  // Interpolate: pick the closest year, and adjust the header and summary slightly
  const baseYear = Math.abs(year - lowerYear) <= Math.abs(year - upperYear) ? lowerYear : upperYear;
  const baseData = relicDatabase[baseYear];
  
  return {
    ...baseData,
    year,
    moodBadge: `Transition to ${year} (${baseData.moodBadge})`,
    mood: `The year ${year} was a bridge era. ${baseData.mood.substring(0, 150)}...`,
    rarityScore: Math.floor(50 + (year - 2000) * 2.25) % 100, // custom rating
  };
}

export function getRandomYear(exclude?: number): number {
  const years = [2000, 2004, 2008, 2012, 2016, 2020];
  const filtered = exclude ? years.filter(y => y !== exclude) : years;
  return filtered[Math.floor(Math.random() * filtered.length)];
}
