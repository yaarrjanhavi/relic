# 🫧 RELIC: The Digital Time Machine

Explore forgotten corners of the internet from any year. Relive the headlines, viral videos, chat slang, and technology trends of the past.

```
       _____  ______ _      _____ _____ 
      |  __ \|  ____| |    |_   _/ ____|
      | |__) | |__  | |      | || |     
      |  _  /|  __| | |      | || |     
      | | \ \| |____| |____ _| || |____ 
      |_|  \_\______|______|_____\_____|
                                        
   [===== temporal-search-v1.0.0-vista =====]
```

**Relic** is a production-ready, highly interactive web application designed to be a digital museum of the internet's past. Combining modern tech specs with a retro **Frutiger Aero** visual identity, the app lets users travel through any year between 2000 and 2020. 

---

## 🎨 Design Direction: Frutiger Aero
The aesthetic is heavily inspired by the late 2000s software ecosystem (Windows Vista, Windows XP, Mac OS X Tiger, Windows Media Player 11):
* **Aero Glass (Glassmorphism):** High-blur semi-transparent overlays with soft gradient highlights.
* **Aqua Gradients & Meadow Theme:** Rich radial/linear blue, teal, green gradients and nostalgic desktop hills backgrounds.
* **Glossy UI Elements:** Custom 3D-styled buttons with shine animations and skeuomorphic highlights.
* **Floating Glass Bubbles:** Dynamic floating circles reflecting light that float upward and drift based on cursor movement.
* **CRT Screen Emulation:** Toggleable CRT mode that overlays scanlines, subpixel aberration, and phosphorescence flickers.

---

## 🚀 Key Features

* **Time Machine Slider:** Smoothly drag through years or use keyboard navigation to trigger seamless content updates with Framer Motion entry/exit transitions.
* **Complete 21-Year Database:** Every single year from 2000 to 2020 features individual custom datasets covering headlines, MSN slang logs, popular websites, and tech snapshots.
* **iTunes Song of the Year Player:** Streams authentic 30-second audio previews from the iTunes Search API and displays dynamic, rotating album cover art on a glossy virtual CD.
* **56K Dial-Up Simulator:** Simulates vintage telephone connections, playing synthesized DTMF dialing tones and modem carrier handshakes while calculating relative file download times for 28.8k, 56k, DSL, and modern Fiber speeds.
* **Wayback Machine Search:** Enter any domain to immediately open the historical Internet Archive Wayback snapshots corresponding to the selected year.
* **MSN Chat & Slang Simulator:** Interactive terminal showing IRC channels and MSN messenger dialogues showcasing historical slang in context.
* **Retro Soundboard:** Interactive synthesizer playing retro sounds including MSN alerts, dial-up handshakes, system error chords, and desktop nudge wiggles.
* **3D Holographic Collectible Cards:** Iridescent collectible cards showing year statistics, with custom tilting coordinates matching cursor hover.
* **SVG Card Export:** Direct vector SVG download function to save collectible year cards to your desktop.
* **Side-by-Side Comparison:** Compare two different years (e.g., 2004 vs. 2012) to see changes in culture, websites, and devices.

---

## 💻 Tech Stack
* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript (Strictly typed)
* **Styling:** Tailwind CSS (Custom theme extension) & CSS Custom Properties
* **Animations:** Framer Motion (Smooth layout animations, physical spring states)
* **Icons:** Lucide React
* **Audio Synthesis:** Web Audio API (Oscillators, Gain nodes, ADSR envelopes)

---

## 🔧 Step-by-Step Installation & Local Setup

Assume you are starting fresh. Follow these commands to run **Relic** on your local machine:

### 1. Extract and Verify Files
Ensure you have the following file structure inside your project directory:
```
relic/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── explore/
    │   │   ├── page.tsx
    │   │   └── error.tsx
    │   └── compare/
    │       └── page.tsx
    ├── components/
    │   ├── BubbleBackground.tsx
    │   ├── ButterflySwarm.tsx
    │   ├── GlassCard.tsx
    │   ├── CRTFilter.tsx
    │   ├── GlossyButton.tsx
    │   ├── TimeCapsuleCard.tsx
    │   ├── YearSlider.tsx
    │   ├── ComparePanel.tsx
    │   ├── WindowsMediaPlayer.tsx
    │   ├── Soundboard.tsx
    │   ├── SotyPlayer.tsx
    │   └── DialUpSimulator.tsx
    └── utils/
        ├── relicData.ts
        ├── sotyData.ts
        └── api.ts
```

### 2. Install Dependencies
Open your shell (Terminal / Command Prompt / PowerShell) in the root of the project directory and run:
```bash
npm install
```
*This installs React, Next.js, Framer Motion, Tailwind CSS, Autoprefixer, and Lucide Icons.*

### 3. Start Local Development Server
Execute the developer environment script:
```bash
npm run dev
```
You will see output indicating the server is running:
`▲ Ready in 1.2s`
`○ Local: http://localhost:3000`

Open your web browser and navigate to **[http://localhost:3000](http://localhost:3000)**.

### 4. Build for Production
To test the production compilation bundle, run:
```bash
npm run build
```
This performs static optimization and compiles code to verify TypeScript safety and Next.js optimization limits.

---

## ☁ Vercel Deployment Instructions

**Relic** is pre-configured to be deployed directly onto Vercel with zero modifications:

### Option A: Using the Vercel Git Integration (Recommended)
1. Initialize a Git repository in the folder:
   ```bash
   git init
   git add .
   git commit -m "Initialize Relic"
   ```
2. Push your repository to GitHub, GitLab, or Bitbucket.
3. Import the project in the [Vercel Dashboard](https://vercel.com/new).
4. Vercel will auto-detect Next.js. Click **Deploy**. Done!

### Option B: Using Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment script:
   ```bash
   vercel
   ```
3. Follow the CLI login prompts. Accept the default configuration parameters.
4. For production deployment run:
   ```bash
   vercel --prod
   ```

---

## 🔮 Future Roadmap & Improvements
* **Retro Flash Player emulator:** Integrate a WASM Flash emulator (like Ruffle) to let users play the original Miniclip games directly in the browser.
* **Expanded database query coverage:** Increase local historical data records to span 1995 to 2025.

---

*Relic is built for portfolio and recruitment display purposes. Let's make time travel possible!*
🌐 *Designed with 🫧 and 💧 in 2026.*
