import "./globals.css";
import { Jost } from "next/font/google";
import InteractiveBackground from "../components/InteractiveBackground";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata = {
  title: "StylePilot AI",
  description: "Your AI-powered personal stylist. Premium, modern, and intelligent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} font-sans`}>
      <body className="bg-brand-black text-white antialiased relative min-h-screen selection:bg-brand-gold selection:text-black">
        {/* Subtle high-end noise texture */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-20 mix-blend-overlay" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>
        
        {/* Dynamic ambient aurora background */}
        <InteractiveBackground />
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

