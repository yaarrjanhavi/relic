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
  2001: {
    year: 2001,
    moodBadge: "Web Directories & P2P Revolution",
    mood: "In 2001, dial-up users migrated to file-sharing networks like Kazaa and LimeWire after Napster was shut down. Personal blogs (Weblogs) emerged, and Wikipedia was launched, showing early signs of user-generated internet culture.",
    rarityScore: 92,
    headlines: [
      { title: "Wikipedia is Launched", category: "Tech", summary: "Jimmy Wales and Larry Sanger launch Wikipedia, a free collaborative online encyclopedia." },
      { title: "Apple Debuts the iPod", category: "Tech", summary: "Steve Jobs introduces the first iPod, promising '1,000 songs in your pocket' with a mechanical click wheel." },
      { title: "Windows XP Released by Microsoft", category: "Tech", summary: "Microsoft launches Windows XP, introducing the legendary 'Bliss' green hill wallpaper and blue taskbar." }
    ],
    videos: [
      { title: "All Your Base Are Belong to Us", youtubeId: "8fvFxz3Tky4", views: "100M+", description: "A poorly translated intro cutscene from Zero Wing becomes a defining early internet meme.", isLocalFallback: true }
    ],
    slang: [
      { word: "ALL YOUR BASE", meaning: "A declaration of gaming victory or hacking pwnage", example: "we took the flag, all your base are belong to us!", channel: "irc", user1: "Hax0r99", user2: "NoobKiller", text1: "prepare to get pwnd", text2: "lol whatever... wait you hacked my base! all your base are belong to us!" }
    ],
    websites: [
      { name: "Wikipedia", url: "http://wikipedia.org", description: "A free encyclopedia built and edited by users, launching a new era of open knowledge.", category: "Utility" },
      { name: "Kazaa", url: "http://kazaa.com", description: "The P2P file sharing service rising in popularity after Napster's legal troubles.", category: "Fun/Media" }
    ],
    games: [
      { name: "Halo: Combat Evolved", type: "console", description: "Bungie launches its flagship shooter on the original Xbox, establishing console LAN parties." },
      { name: "Grand Theft Auto III", type: "console", description: "Rockstar Games revolutionizes open-world 3D gaming with Liberty City." }
    ],
    tech: [
      { name: "Original iPod (1st Gen)", description: "Featuring a 5GB scroll wheel hard drive and FireWire syncing.", releaseDate: "October 2001", icon: "Music" }
    ],
    stats: {
      globalUsers: "513 Million (8.3% of world pop)",
      topBrowser: "Internet Explorer 6 (90%)",
      connectionSpeed: "56 Kbps",
      connectionType: "Dial-up"
    }
  },
  2002: {
    year: 2002,
    moodBadge: "Early Social Networks & Lamp iMacs",
    mood: "2002 was the birth of early social networks. Friendster launched, capturing the curiosity of the web. Custom icons, winamp skins, and MSN Messenger dominated desktop custom styling, with users customizing colors and system sounds.",
    rarityScore: 90,
    headlines: [
      { title: "Friendster Launches the Social Networking Craze", category: "Tech", summary: "Jonathan Abrams launches Friendster, quickly gathering millions of early adopters before server overload strikes." },
      { title: "iMac G4 Flatscreen Launches", category: "Tech", summary: "Apple ships the iMac G4, featuring a beautiful flat-panel monitor floating on a chrome cantilever arm." }
    ],
    videos: [
      { title: "Wazzup Scary Movie Style", youtubeId: "a1a8c3d3", views: "Millions", description: "The iconic Budweiser 'Wazzup' tongue-wagging scream is re-enacted in early video loops.", isLocalFallback: true }
    ],
    slang: [
      { word: "WAZZUP", meaning: "Slang greeting accompanied by sticking out one's tongue", example: "wazzuuuup!", channel: "msn", user1: "SceneSkater", user2: "LinkinParkFan", text1: "yo wazzuuuup", text2: "wazzuuuuuup!!! *tongue*" }
    ],
    websites: [
      { name: "Friendster", url: "http://friendster.com", description: "The pioneer of mainstream social network connections.", category: "Social" },
      { name: "EBay", url: "http://ebay.com", description: "The leading global auction house where users buy, sell, and bid.", category: "Utility" }
    ],
    games: [
      { name: "Grand Theft Auto: Vice City", type: "console", description: "An 80s neon-soaked classic featuring Tommy Vercetti and a stellar soundtrack." },
      { name: "Warcraft III: Reign of Chaos", type: "pc", description: "Blizzard's real-time strategy masterpiece that later birthed DotA." }
    ],
    tech: [
      { name: "iMac G4", description: "The iconic 'desk lamp' computer showing Apple's hardware design limits.", releaseDate: "January 2002", icon: "Laptop" }
    ],
    stats: {
      globalUsers: "631 Million (10% of world pop)",
      topBrowser: "Internet Explorer 6 (93%)",
      connectionSpeed: "56 - 128 Kbps",
      connectionType: "Dial-up / Early DSL"
    }
  },
  2003: {
    year: 2003,
    moodBadge: "The Birth of Myspace & iTunes Store",
    mood: "The internet of 2003 was defined by digital audio. Apple launched the iTunes Music Store to combat illegal downloading, and Myspace launched, offering a space for musicians and teens to build custom HTML profiles.",
    rarityScore: 89,
    headlines: [
      { title: "Launch of the iTunes Music Store", category: "Tech", summary: "Apple introduces the iTunes Store, selling individual songs for 99 cents and legalizing digital audio downloads." },
      { title: "Myspace is Founded", category: "Tech", summary: "Chris DeWolfe and Tom Anderson launch MySpace, which would become the largest social network in the world." },
      { title: "Skype Launches VoIP Calls", category: "Tech", summary: "Skype releases its beta software, allowing users to make voice calls over internet protocols for free." }
    ],
    videos: [
      { title: "Llama Song (Flash)", youtubeId: "c71RCAyLS1M", views: "50M+", description: "An early viral Flash animation singing about llamas, ducks, and absolute nonsense.", isLocalFallback: true }
    ],
    slang: [
      { word: "Fo Shizzle", meaning: "For sure, popularized by Snoop Dogg", example: "Are you coming tonight? Fo shizzle!", channel: "msn", user1: "SnoopFan", user2: "G-Unit", text1: "you going to the show?", text2: "fo shizzle my nizzle!" }
    ],
    websites: [
      { name: "MySpace", url: "http://myspace.com", description: "A social network offering customized HTML layouts and profile songs.", category: "Social" },
      { name: "Skype", url: "http://skype.com", description: "Voice calling over peer-to-peer web nodes.", category: "Utility" }
    ],
    games: [
      { name: "Call of Duty", type: "pc", description: "The military FPS franchise begins with its award-winning WW2 campaign." },
      { name: "Star Wars: Knights of the Old Republic", type: "pc", description: "BioWare's masterclass RPG set in the Old Republic universe." }
    ],
    tech: [
      { name: "Game Boy Advance SP", description: "Featuring a clamshell screen fold and a front-lit screen.", releaseDate: "March 2003", icon: "Gamepad" }
    ],
    stats: {
      globalUsers: "747 Million (11.7% of world pop)",
      topBrowser: "Internet Explorer 6 (94%)",
      connectionSpeed: "128 - 256 Kbps",
      connectionType: "Dial-up / DSL"
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
  2005: {
    year: 2005,
    moodBadge: "Dawn of YouTube & Web 2.0",
    mood: "2005 saw the launch of YouTube, bringing web video to the masses. The internet shifted from static directories to interactive platforms. Reddit was founded, and Flash animations like Badger Badger reached peak popularity.",
    rarityScore: 86,
    headlines: [
      { title: "YouTube is Founded", category: "Tech", summary: "Three former PayPal employees launch YouTube, allowing users to upload and share video clips easily." },
      { title: "Reddit Launches Online", category: "Tech", summary: "Steve Huffman and Alexis Ohanian create Reddit, a simple text-based board for sharing links." },
      { title: "Xbox 360 Launches HD Era", category: "Culture", summary: "Microsoft launches Xbox 360, bringing HD gaming graphics and Xbox Live avatars to living rooms." }
    ],
    videos: [
      { title: "Me at the zoo (1st YouTube Video)", youtubeId: "jNQXAC9IVRw", views: "280M+", description: "YouTube co-founder Jawed Karim uploads a short 19-second video standing in front of elephants, launching the platform." }
    ],
    slang: [
      { word: "LOL", meaning: "Laugh Out Loud, rising to text messaging ubiquity", example: "that was so funny lol", channel: "msn", user1: "EmoKid05", user2: "Sk8rGamer", text1: "i failed my gym class.", text2: "omg lol how?" }
    ],
    websites: [
      { name: "YouTube", url: "http://youtube.com", description: "The newly born portal for sharing video clips.", category: "Fun/Media" },
      { name: "Reddit", url: "http://reddit.com", description: "A simple bulletin-board web page for submitting and voting on links.", category: "Utility" }
    ],
    games: [
      { name: "Guitar Hero", type: "console", description: "Harmonix launches the plastic guitar rhythm gaming phenomenon." },
      { name: "Resident Evil 4", type: "console", description: "Capcom revolutionizes third-person action with Leon S. Kennedy's quest." }
    ],
    tech: [
      { name: "iPod Nano (1st Gen)", description: "Apple replaces the iPod Mini with an incredibly thin flash memory iPod.", releaseDate: "September 2005", icon: "Music" }
    ],
    stats: {
      globalUsers: "1.02 Billion (15.7% of world pop)",
      topBrowser: "Internet Explorer 6 (85%), Firefox (9%)",
      connectionSpeed: "256 - 768 Kbps",
      connectionType: "DSL / Cable Broadband"
    }
  },
  2006: {
    year: 2006,
    moodBadge: "Twitter Launch & Wii Mania",
    mood: "2006 was a year of massive gaming interaction. Nintendo launched the motion-controlled Wii, and microblogging emerged with Twitter. Facebook opened registration to everyone (not just students).",
    rarityScore: 84,
    headlines: [
      { title: "Twitter Launches with a 140 Character Limit", category: "Tech", summary: "Jack Dorsey sends the first tweet, launching a platform limited to SMS character counts." },
      { title: "Nintendo Wii Released", category: "Culture", summary: "Nintendo launches the motion-controlled Wii console, bringing casual gamers and grandparents into gaming." },
      { title: "Google Acquires YouTube for $1.65 Billion", category: "Tech", summary: "Google purchases the fast-growing video sharing site, solidifying its hold on web video." }
    ],
    videos: [
      { title: "Evolution of Dance", youtubeId: "dMH0bHeiRNg", views: "300M+", description: "Comedian Judson Laipply dances to a mashup of hits, setting early YouTube view records." }
    ],
    slang: [
      { word: "Epic Win", meaning: "A great success or achievement", example: "getting free pizza is an epic win!", channel: "forum", user1: "VistaBlogger", user2: "HaloFan", text1: "just scored a copy of Halo 3 early!", text2: "dude, total epic win!" }
    ],
    websites: [
      { name: "Twitter", url: "http://twitter.com", description: "Share what you are doing in 140 characters or less.", category: "Social" },
      { name: "Roblox", url: "http://roblox.com", description: "A building block virtual sandbox gaming universe for kids.", category: "Fun/Media" }
    ],
    games: [
      { name: "Wii Sports", type: "console", description: "Motion-controlled tennis and bowling sweep living rooms." },
      { name: "Gears of War", type: "console", description: "Epic Games defines third-person cover shooters on Xbox 360." }
    ],
    tech: [
      { name: "Nintendo Wii", description: "Motion controller console bringing active gaming.", releaseDate: "November 2006", icon: "Gamepad" }
    ],
    stats: {
      globalUsers: "1.16 Billion (17.6% of world pop)",
      topBrowser: "Internet Explorer 6 (79%), Firefox (14%)",
      connectionSpeed: "512 Kbps - 1 Mbps",
      connectionType: "DSL / Cable Broadband"
    }
  },
  2007: {
    year: 2007,
    moodBadge: "The Original iPhone & Windows Vista",
    mood: "2007 was the pinnacle of the Frutiger Aero aesthetic. Windows Vista launched with translucent glass skins, and Steve Jobs unveiled the original iPhone, forever changing mobile computing. Slang turned to early memes like Lolcats.",
    rarityScore: 82,
    headlines: [
      { title: "Steve Jobs Unveils the iPhone", category: "Tech", summary: "Apple announces a revolutionary touchscreen phone, an iPod, and a communicator in one device." },
      { title: "Microsoft Launches Windows Vista", category: "Tech", summary: "Vista ships globally, introducing the Aero Glass visual layout, gadgets sidebar, and high system requirements." },
      { title: "Halo 3 Sets Sales Records", category: "Culture", summary: "The conclusion of the Halo trilogy gross $170 million in its first 24 hours." }
    ],
    videos: [
      { title: "Chocolate Rain", youtubeId: "EwTZ2xpQwpA", views: "135M+", description: "Tay Zonday sings in a deep voice, breathing away from the mic, creating a mega viral meme." },
      { title: "Potter Puppet Pals", youtubeId: "Tx1XIm6-DyY", views: "100M+", description: "Harry Potter puppet parody featuring a ticking bomb melody.", isLocalFallback: true }
    ],
    slang: [
      { word: "Lolcats", meaning: "Images of cats captioned with misspelled text (lolspeak)", example: "i can haz cheezburger?", channel: "forum", user1: "MemeMaster07", user2: "VistaUser", text1: "check out this funny cat photo!", text2: "omg i can haz cheezburger! so cute!" }
    ],
    websites: [
      { name: "I Can Has Cheezburger", url: "http://icanhascheezburger.com", description: "The premier home of Lolcats and early image macro memes.", category: "Fun/Media" },
      { name: "Tumblr Launches microblogging", url: "http://tumblr.com", description: "David Karp launches Tumblr, simplifying media posts and blogs.", category: "Social" }
    ],
    games: [
      { name: "Portal", type: "pc", description: "Valve's puzzle masterpiece introducing portals, GLaDOS, and cake." },
      { name: "BioShock", type: "pc", description: "A dystopian underwater immersive sim exploring objectivism in Rapture." }
    ],
    tech: [
      { name: "Original iPhone (2G)", description: "The phone that started the modern mobile touchscreen app revolution.", releaseDate: "June 2007", icon: "Smartphone" }
    ],
    stats: {
      globalUsers: "1.37 Billion (20.6% of world pop)",
      topBrowser: "Internet Explorer 7 (60%), Firefox (22%)",
      connectionSpeed: "1 - 2 Mbps",
      connectionType: "Broadband DSL / Cable"
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
  2009: {
    year: 2009,
    moodBadge: "Bitcoin Genesis & Minecraft Alpha",
    mood: "In 2009, the web saw the birth of cryptocurrency with Bitcoin. Minecraft began its Alpha phase, capturing gaming forums, and viral webcam videos like 'David After Dentist' ruled YouTube.",
    rarityScore: 76,
    headlines: [
      { title: "Bitcoin Network is Launched", category: "Tech", summary: "Satoshi Nakamoto mines the genesis block of Bitcoin, creating the first decentralized digital currency." },
      { title: "Minecraft Alpha Released by Notch", category: "Tech", summary: "Markus Persson releases the early block-building sandbox game on forums, building an cult following." }
    ],
    videos: [
      { title: "David After Dentist", youtubeId: "txqiwrbYGeg", views: "140M+", description: "A young boy, heavily medicated from the dentist, queries his father in the car: 'Is this real life?'" },
      { title: "Keyboard Cat", youtubeId: "J---aiyznGQ", views: "100M+", description: "An orange cat in a shirt plays an upbeat tune on a keyboard, overlaid on people failing.", isLocalFallback: true }
    ],
    slang: [
      { word: "Facepalm", meaning: "An expression of disbelief or exasperation by placing one's hand on one's face", example: "did he really say that? *facepalm*", channel: "forum", user1: "Gamer09", user2: "CodingNoob", text1: "i deleted my database by accident.", text2: "total facepalm, dude." }
    ],
    websites: [
      { name: "Minecraft.net", url: "http://minecraft.net", description: "The landing page to buy and play Notch's sandbox project.", category: "Fun/Media" },
      { name: "Kickstarter launches", url: "http://kickstarter.com", description: "Crowdfunding site allowing public investments in creative startups.", category: "Utility" }
    ],
    games: [
      { name: "Angry Birds", type: "mobile", description: "Rovio's physics puzzle game takes over mobile phone screens." },
      { name: "Plants vs. Zombies", type: "pc", description: "PopCap Games delivers the ultimate lane defense plant strategy game." }
    ],
    tech: [
      { name: "Motorola Droid", description: "The slider keyboard Android phone that challenged the iPhone's dominance.", releaseDate: "November 2009", icon: "Smartphone" }
    ],
    stats: {
      globalUsers: "1.75 Billion (25.6% of world pop)",
      topBrowser: "Internet Explorer 7 (54%), Firefox (31%), Chrome (4%)",
      connectionSpeed: "2 - 4 Mbps",
      connectionType: "DSL / Cable Broadband"
    }
  },
  2010: {
    year: 2010,
    moodBadge: "Dawn of the iPad & Instagram",
    mood: "2010 was the birth of mobile photography. Instagram launched, introducing filters to photos. Steve Jobs launched the original iPad, opening the tablet market, while viral video tunes ruled YouTube.",
    rarityScore: 74,
    headlines: [
      { title: "Apple Launches the iPad", category: "Tech", summary: "Steve Jobs showcases the iPad, creating a highly successful new tablet category." },
      { title: "Instagram photo-sharing debuts", category: "Tech", summary: "Kevin Systrom and Mike Krieger launch Instagram, introducing square polaroid filters to mobile photos." },
      { title: "The Bed Intruder Song Goes Viral", category: "Culture", summary: "Antoine Dodson's news interview is turned into a chart-topping autotune pop track." }
    ],
    videos: [
      { title: "Bed Intruder Song", youtubeId: "hMtZXXmGqdU", views: "150M+", description: "The Gregory Brothers autotune a news broadcast clip ('Hide your kids, hide your wife'), creating a Billboard hit." }
    ],
    slang: [
      { word: "Like a Boss", meaning: "Performing a task with absolute authority or cool confidence", example: "Passed my exam like a boss!", channel: "twitter", user1: "CoolCat10", user2: "FollowMe", text1: "just got a promotion!", text2: "nice one, like a boss!" }
    ],
    websites: [
      { name: "Instagram", url: "http://instagram.com", description: "Mobile photo sharing with vintage filters.", category: "Social" },
      { name: "Pinterest launches", url: "http://pinterest.com", description: "A digital pinboard layout to collect aesthetic images.", category: "Social" }
    ],
    games: [
      { name: "Mass Effect 2", type: "pc", description: "BioWare's sci-fi RPG masterpiece tracking Commander Shepard's suicide mission." },
      { name: "Red Dead Redemption", type: "console", description: "Rockstar's epic Western adventure following John Marston." }
    ],
    tech: [
      { name: "Original iPad (1st Gen)", description: "The tablet computer that defined screen touch interaction.", releaseDate: "April 2010", icon: "Laptop" }
    ],
    stats: {
      globalUsers: "2.02 Billion (29.2% of world pop)",
      topBrowser: "Internet Explorer 8 (48%), Firefox (30%), Chrome (10%)",
      connectionSpeed: "3 - 5 Mbps",
      connectionType: "Cable Broadband / DSL"
    }
  },
  2011: {
    year: 2011,
    moodBadge: "Siri Launch & Planking Memes",
    mood: "In 2011, voice assistants entered our pockets with Siri on the iPhone 4S. Absurdist flash trends like 'Planking' went viral, and Nyan Cat flew across the web in a trail of rainbows.",
    rarityScore: 72,
    headlines: [
      { title: "Apple Launches Siri Voice Assistant", category: "Tech", summary: "The iPhone 4S ships with Siri, a conversational voice assistant." },
      { title: "Minecraft is Officially Released", category: "Tech", summary: "Mojang exits beta and releases Minecraft 1.0 at MineCon, setting record sales." }
    ],
    videos: [
      { title: "Nyan Cat", youtubeId: "QH2-TGUlwu4", views: "200M+", description: "An 8-bit cherry pop-tart cat flies through space singing a repeating loop." },
      { title: "Rebecca Black - Friday", youtubeId: "kfVsfOSbJY0", views: "165M+", description: "An indie-produced teen music video goes viral as the 'worst song ever', racking up millions of views.", isLocalFallback: true }
    ],
    slang: [
      { word: "Planking", meaning: "Lying face down in an awkward public spot while taking a photo", example: "did a plank on top of the mailbox today", channel: "twitter", user1: "TrendFollower", user2: "MemeWatcher", text1: "check out my new planking photo!", text2: "lol that mailbox look dangerous" }
    ],
    websites: [
      { name: "Twitch", url: "http://twitch.tv", description: "Justin.tv branches off its gaming streams to launch a dedicated gaming platform.", category: "Fun/Media" },
      { name: "Pinterest", url: "http://pinterest.com", description: "Web scrapbook that gathers recipes and designs.", category: "Social" }
    ],
    games: [
      { name: "The Elder Scrolls V: Skyrim", type: "pc", description: "Bethesda's open-world fantasy RPG, introducing Fus Ro Dah and endless dragon battles." },
      { name: "Portal 2", type: "pc", description: "Cooperative testing and puzzle grids with Wheatley and Cave Johnson." }
    ],
    tech: [
      { name: "iPhone 4S", description: "Introduced Siri, a dual-core processor, and a glass-back chassis.", releaseDate: "October 2011", icon: "Smartphone" }
    ],
    stats: {
      globalUsers: "2.22 Billion (31.8% of world pop)",
      topBrowser: "Internet Explorer 8 (39%), Firefox (27%), Chrome (18%)",
      connectionSpeed: "4 - 8 Mbps",
      connectionType: "Broadband / 3G Mobile"
    }
  },
  2012: {
    year: 2012,
    moodBadge: "Apocalypse Hype & Viral Super-Novas",
    mood: "The internet of 2012 was a hyper-connected, meme-saturated place. The Mayan calendar sparked end-of-the-world memes, Gangnam Style became the first video to hit 1 billion views on YouTube, and image macros styled in Impact font (Confession Bear, Grumpy Cat) ruled Reddit and Tumblr. Instagram was bought by Facebook for $1 billion.",
    rarityScore: 70,
    headlines: [
      { title: "Curiosity Rover Lands on Mars", category: "World", summary: "NASA's advanced mobile laboratory lands in Gale Crater to search for evidence of past habitable environments." },
      { title: "Facebook Acquires Instagram for $1 Billion", category: "Tech", summary: "Mark Zuckerberg buys the photo-sharing app with only 13 employees, raising eyebrows in Silicon Valley." },
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
      { name: "Reddit (Rage Comics Era)", url: "http://reddit.com", description: "The front page of the internet is dominated by F7U12 rage comics and Advice Animals.", category: "Social" },
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
  2013: {
    year: 2013,
    moodBadge: "Vine Loops & The Harlem Shake",
    mood: "2013 was defined by short-form loop videos with the launch of Vine. Absurdist video dances like the 'Harlem Shake' swept school hallways, and Doge macros ('Much wow') populated image forums.",
    rarityScore: 68,
    headlines: [
      { title: "Vine Launches short-form loops", category: "Tech", summary: "Twitter releases Vine, a mobile app allowing users to capture and share 6-second looping videos." },
      { title: "Sony and Microsoft Launch PS4 and Xbox One", category: "Culture", summary: "The eighth generation of home console hardware begins with massive midnight releases." }
    ],
    videos: [
      { title: "Ylvis - The Fox (What Does The Fox Say?)", youtubeId: "jofNR_WkoCE", views: "1.1B+", description: "A Norwegian comedy duo sings about animal sounds, creating a massive viral earworm." },
      { title: "Harlem Shake Original", youtubeId: "8vJiSSAMNWw", views: "100M+", description: "Office workers and teens do a cut-frame crazy dance to Baauer's trap tune.", isLocalFallback: true }
    ],
    slang: [
      { word: "Doge", meaning: "A Shiba Inu dog captioning inner thoughts in comic sans", example: "much wow, very time travel, so relic", channel: "forum", user1: "DogeLover", user2: "MemeArchivist", text1: "wow very retro", text2: "much visualizer, so WMP11, such nostalgia!" }
    ],
    websites: [
      { name: "Vine", url: "http://vine.co", description: "A portal for sharing 6-second looping clips.", category: "Fun/Media" },
      { name: "BuzzFeed", url: "http://buzzfeed.com", description: "Listicles, pop culture quizzes, and viral media summaries.", category: "Fun/Media" }
    ],
    games: [
      { name: "Grand Theft Auto V", type: "console", description: "Rockstar launches one of the highest-grossing media products of all time in Los Santos." },
      { name: "Flappy Bird", type: "mobile", description: "Dong Nguyen's simple, addictive mobile tap game goes viral before being deleted." }
    ],
    tech: [
      { name: "Pebble Steel", description: "The refined metal smartwatch adding durability to the e-paper watch line.", releaseDate: "Q4 2013", icon: "Watch" }
    ],
    stats: {
      globalUsers: "2.72 Billion (38% of world pop)",
      topBrowser: "Chrome (42%), IE 10 (24%), Firefox (18%)",
      connectionSpeed: "6 - 12 Mbps",
      connectionType: "DSL / Cable / LTE"
    }
  },
  2014: {
    year: 2014,
    moodBadge: "Ice Buckets & Bendy Phones",
    mood: "In 2014, social media challenges took over the web with the ALS Ice Bucket Challenge. Tech news focused on Apple's 'Bendgate' with the thin iPhone 6, and 'Bae' became the default slang word.",
    rarityScore: 67,
    headlines: [
      { title: "ALS Ice Bucket Challenge Raises $115M", category: "Culture", summary: "Millions pour ice water over their heads to raise money and awareness for ALS research." },
      { title: "Apple Launches iPhone 6 and 6 Plus", category: "Tech", summary: "Apple ships larger screens, prompting social media reports of phones bending in pockets ('Bendgate')." }
    ],
    videos: [
      { title: "ALS Ice Bucket Challenge compilation", youtubeId: "ALS_comp", views: "Millions", description: "Celebrities and users participate in the viral charity bucket dump.", isLocalFallback: true }
    ],
    slang: [
      { word: "Bae", meaning: "Before Anyone Else, denoting a partner or close friend", example: "hanging out with bae today", channel: "twitter", user1: "SelfieQueen", user2: "RetweetPro", text1: "where are you?", text2: "getting coffee with bae!" }
    ],
    websites: [
      { name: "Slack", url: "http://slack.com", description: "Team communication hub designed to replace email in offices.", category: "Utility" },
      { name: "Product Hunt", url: "http://producthunt.com", description: "A simple board to showcase and vote on new software launches.", category: "Utility" }
    ],
    games: [
      { name: "Destiny", type: "console", description: "Bungie launches its shared-world space shooter universe." },
      { name: "Hearthstone", type: "pc", description: "Blizzard's digital Warcraft trading card game takes over monitors." }
    ],
    tech: [
      { name: "Oculus Rift DK2", description: "The second VR developer kit adding positional tracking cameras.", releaseDate: "July 2014", icon: "Eye" }
    ],
    stats: {
      globalUsers: "2.94 Billion (40.6% of world pop)",
      topBrowser: "Chrome (48%), IE 11 (18%), Firefox (14%)",
      connectionSpeed: "8 - 15 Mbps",
      connectionType: "Cable / LTE Mobile"
    }
  },
  2015: {
    year: 2015,
    moodBadge: "The Dress Debate & Apple Watch",
    mood: "2015 was defined by 'The Dress' which divided the internet on whether it was Blue/Black or White/Gold. Apple launched the Apple Watch, Windows 10 arrived, and slang words like 'Savage' ruled feeds.",
    rarityScore: 66,
    headlines: [
      { title: "The Dress Divides the Internet", category: "Culture", summary: "A viral photo of a dress sparks global debates about human color perception." },
      { title: "Apple Releases Apple Watch", category: "Tech", summary: "Apple enters the luxury wearables market with its first smartwatch line." },
      { title: "Microsoft Launches Windows 10", category: "Tech", summary: "Windows 10 arrives as a free upgrade, bringing back the classic Start Menu." }
    ],
    videos: [
      { title: "Shia LaBeouf - 'Just Do It'", youtubeId: "ZXsQAXx_ao0", views: "100M+", description: "Actor Shia LaBeouf gives an intense motivational speech in front of a green screen, prompting thousands of parody overlays." }
    ],
    slang: [
      { word: "On Fleek", meaning: "Perfectly styled or executed, usually referring to eyebrows", example: "Her outfit is on fleek!", channel: "twitter", user1: "AestheticTees", user2: "VibeCheck", text1: "check my new haircut", text2: "looking clean bro, on fleek!" }
    ],
    websites: [
      { name: "Discord", url: "http://discord.com", description: "Voice and text chat server network for gamers.", category: "Utility" }
    ],
    games: [
      { name: "The Witcher 3: Wild Hunt", type: "pc", description: "CD Projekt Red's open-world fantasy RPG concludes Geralt's journey." },
      { name: "Undertale", type: "pc", description: "Toby Fox's brilliant indie RPG where you don't have to destroy anyone." }
    ],
    tech: [
      { name: "Apple Watch (1st Gen)", description: "The premier smartwatch introducing health tracking and tap notifications.", releaseDate: "April 2015", icon: "Watch" }
    ],
    stats: {
      globalUsers: "3.18 Billion (43% of world pop)",
      topBrowser: "Chrome (53%), Safari (13%), Firefox (11%)",
      connectionSpeed: "10 - 20 Mbps",
      connectionType: "Fiber / LTE Mobile"
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
  2017: {
    year: 2017,
    moodBadge: "Switch Portability & Notch Screens",
    mood: "2017 saw mobile screen redesigns with the launch of the bezelless iPhone X. The Nintendo Switch launched, making gaming console-portable, Fortnite swept schools, and fidget spinners became the default toy.",
    rarityScore: 62,
    headlines: [
      { title: "Nintendo Launches the Switch Console", category: "Culture", summary: "Nintendo releases its hybrid home/handheld console, setting record sales." },
      { title: "Apple Launches iPhone X with FaceID Notch", category: "Tech", summary: "Apple eliminates the home button, introducing swipe controls and a screen notch sensor housing." },
      { title: "Fortnite Battle Royale Launches", category: "Culture", summary: "Epic Games releases a free-to-play battle royale, rapidly becoming a massive teen sensation." }
    ],
    videos: [
      { title: "Fidget Spinner Tricks compilation", youtubeId: "spinner_comp", views: "Millions", description: "Users show off spinning tricks on skateboards and noses.", isLocalFallback: true }
    ],
    slang: [
      { word: "Fidget Spinner", meaning: "A small ball-bearing hand spinner toy rising to mega viral status", example: "did a spin transfer today", channel: "twitter", user1: "SpinHype", user2: "TeacherBlues", text1: "just bought a glow in the dark spinner", text2: "we banned those in my class today lol" }
    ],
    websites: [
      { name: "TikTok ByteDance merge", url: "http://tiktok.com", description: "ByteDance acquires Musical.ly to lay the foundation of the TikTok app.", category: "Social" }
    ],
    games: [
      { name: "The Legend of Zelda: Breath of the Wild", type: "console", description: "Nintendo redefines open-world adventure design with Hyrule's climbable ruins." },
      { name: "Fortnite", type: "console", description: "Building, harvesting, and dancing in a 100-player island survival match." }
    ],
    tech: [
      { name: "Nintendo Switch", description: "The modular console that docks to TVs and slides into bags.", releaseDate: "March 2017", icon: "Gamepad" }
    ],
    stats: {
      globalUsers: "3.72 Billion (49% of world pop)",
      topBrowser: "Chrome (63%), Safari (14%), Firefox (6%)",
      connectionSpeed: "20 - 40 Mbps",
      connectionType: "Fiber / LTE Mobile"
    }
  },
  2018: {
    year: 2018,
    moodBadge: "TikTok Explosion & Yeet Memes",
    mood: "In 2018, short-form mobile video reached new heights with the global launch of TikTok. Absurdist internet debates (Yanny vs Laurel) split feeds, and 'Yeet' became the default slang for throwing items.",
    rarityScore: 60,
    headlines: [
      { title: "TikTok Launches Globally", category: "Tech", summary: "ByteDance launches TikTok globally, merging Musical.ly profiles and popularizing vertical short video feeds." },
      { title: "Yanny vs Laurel Split Feeds", category: "Culture", summary: "A short audio clip splits social media over whether the speaker says Yanny or Laurel." }
    ],
    videos: [
      { title: "Yanny vs Laurel Audio Clip", youtubeId: "yanny_laurel", views: "Millions", description: "An ambiguous acoustic clip sparks heated arguments on Twitter and news channels.", isLocalFallback: true }
    ],
    slang: [
      { word: "Yeet", meaning: "To throw something with force or show excitement", example: "yeet that empty can into the bin", channel: "twitter", user1: "VineLegacy", user2: "MemeLord18", text1: "did you see him throw that water bottle?", text2: "yes, he yeeted it right over the fence!" }
    ],
    websites: [
      { name: "TikTok", url: "http://tiktok.com", description: "Viral vertical video feeds with background sounds.", category: "Social" },
      { name: "Notion expands", url: "http://notion.so", description: "Workspace wikis with drag-and-drop text blocks.", category: "Utility" }
    ],
    games: [
      { name: "Red Dead Redemption 2", type: "console", description: "Rockstar's photorealistic outlaw epic following Arthur Morgan's gang." },
      { name: "Beat Saber", type: "pc", description: "Slicing neon blocks to music beats in virtual reality." }
    ],
    tech: [
      { name: "Oculus Go", description: "Standalone consumer VR headset requiring no PC connection.", releaseDate: "May 2018", icon: "Eye" }
    ],
    stats: {
      globalUsers: "4.02 Billion (52% of world pop)",
      topBrowser: "Chrome (64%), Safari (15%), Firefox (5%)",
      connectionSpeed: "25 - 50 Mbps",
      connectionType: "Fiber / LTE Mobile"
    }
  },
  2019: {
    year: 2019,
    moodBadge: "Disney+ Launch & OK Boomer Memes",
    mood: "2019 was the peak of the streaming wars with the launch of Disney+. The TikTok culture began to dominate music charts, and the 'OK Boomer' phrase became a generational text shortcut.",
    rarityScore: 55,
    headlines: [
      { title: "Disney+ Enters Streaming Wars", category: "Tech", summary: "Disney launches its dedicated streaming platform, racking up 10 million sign-ups in 24 hours." },
      { title: "Avengers: Endgame Breaks Box Office Records", category: "Culture", summary: "The culmination of the Marvel Infinity Saga grosses $2.79 Billion globally." }
    ],
    videos: [
      { title: "Lil Nas X - Old Town Road", youtubeId: "r7qovpFAGrQ", views: "1.2B+", description: "A country-rap track goes viral on TikTok, spending a record 19 weeks at Billboard Hot 100 number one." }
    ],
    slang: [
      { word: "Ok Boomer", meaning: "A dismissive response to out-of-date generational criticisms", example: "when he says put down the phone just say ok boomer", channel: "twitter", user1: "GenZVibe", user2: "BoomerDad", text1: "kids these days don't buy houses because of avocado toast", text2: "ok boomer" }
    ],
    websites: [
      { name: "Disney+", url: "http://disneyplus.com", description: "Streaming home of Marvel, Star Wars, and Disney archives.", category: "Fun/Media" },
      { name: "Substack", url: "http://substack.com", description: "Newsletter publication platforms simplifying paid subscriptions.", category: "Utility" }
    ],
    games: [
      { name: "Apex Legends", type: "pc", description: "Respawn launches a surprise free-to-play battle royale set in the Titanfall universe." }
    ],
    tech: [
      { name: "Oculus Quest (1st Gen)", description: "The standalone, 6DOF VR console that popularized wireless headset tracking.", releaseDate: "May 2019", icon: "Eye" }
    ],
    stats: {
      globalUsers: "4.30 Billion (56% of world pop)",
      topBrowser: "Chrome (65%), Safari (16%), Firefox (4%)",
      connectionSpeed: "30 - 60 Mbps",
      connectionType: "Fiber / LTE / Early 5G"
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

// Simple helper to cover all years individually
export function getYearData(year: number): YearData {
  const roundedYear = Math.max(2000, Math.min(2020, Math.round(year)));
  if (relicDatabase[roundedYear]) {
    return relicDatabase[roundedYear];
  }
  return relicDatabase[2008]; // fallback
}

export function getRandomYear(exclude?: number): number {
  const years = Array.from({ length: 21 }).map((_, i) => 2000 + i);
  const filtered = exclude ? years.filter(y => y !== exclude) : years;
  return filtered[Math.floor(Math.random() * filtered.length)];
}
