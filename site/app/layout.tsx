import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$DBAR | Don't Be A Racist – Solana Meme Coin",
  description: "The first meme coin on Solana that promotes good energy instead of toxicity. Good Vibes Only. Live on Pump.fun.",
  openGraph: {
    title: "$DBAR | Don't Be A Racist – Solana Meme Coin",
    description: "Solana's most based & kind meme coin • Good Vibes Only",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}
