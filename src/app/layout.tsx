import type { Metadata } from "next";
import "./globals.css";
import BubbleBackground from "@/components/BubbleBackground";
import CRTFilter from "@/components/CRTFilter";

export const metadata: Metadata = {
  title: "Relic - Digital Time Machine",
  description: "Explore the forgotten corners of the internet from any year. Relive the headlines, viral videos, slang, and technology trends of the past.",
  keywords: ["Time Machine", "Internet History", "Frutiger Aero", "Windows Vista", "2000s Nostalgia", "Retro Tech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen relative selection:bg-sky-400 selection:text-slate-900">
        {/* Floating Aero bubbles */}
        <BubbleBackground />
        
        {/* Togglable CRT filter overlay */}
        <CRTFilter>
          <div className="relative z-10 flex flex-col min-h-screen w-full">
            {children}
          </div>
        </CRTFilter>
      </body>
    </html>
  );
}
