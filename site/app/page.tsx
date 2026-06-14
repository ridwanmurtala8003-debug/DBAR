"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function Countdown() {
  const target = new Date("2026-06-14T14:00:00Z").getTime();
  const [mounted, setMounted] = useState(false);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    setMounted(true);
    setDiff(target - Date.now());
    const id = setInterval(() => setDiff(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!mounted) return <div className="h-14" />;
  if (diff <= 0) return <p className="text-2xl font-bold text-neon-teal animate-pulse-glow">🚀 NOW LIVE ON PUMP.FUN 🚀</p>;

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  return (
    <div className="flex gap-4 text-center">
      {[["H", h], ["M", m], ["S", s]].map(([label, val]) => (
        <div key={label as string} className="bg-white/5 border border-neon-purple/30 rounded-xl px-4 py-2">
          <span className="text-3xl font-bold text-neon-purple">{String(val).padStart(2, "0")}</span>
          <p className="text-xs text-gray-400">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [mint, setMint] = useState("");
  useEffect(() => { fetch("/api/config").then(r => r.json()).then(d => setMint(d.mint || "")); }, []);
  const buyUrl = mint ? `https://pump.fun/coin/${mint}` : "";

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-teal/20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-neon-purple/40 rounded-full blur-3xl" />
            <Image src="/hero.jpg" alt="$DBAR Coin" width={250} height={250} className="relative rounded-full border-4 border-neon-purple/60 shadow-2xl" priority />
          </div>

          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent animate-gradient">
            DON&apos;T BE A RACIST
          </h1>
          <p className="text-lg md:text-xl text-gray-300">Solana&apos;s most based &amp; kind meme coin • Good Vibes Only ✨</p>

          <Countdown />

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {buyUrl ? (
              <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-neon-purple/30">
                BUY $DBAR 🚀
              </a>
            ) : (
              <span className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-purple/50 to-neon-pink/50 font-bold text-white/70 cursor-not-allowed shadow-lg">
                BUY — COMING SOON 🔜
              </span>
            )}
            <a href="https://t.me/DBARcoin" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-neon-teal text-neon-teal font-bold hover:bg-neon-teal/10 transition-colors">
              Join Telegram
            </a>
            <a href="https://x.com/DBARDev" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-neon-orange text-neon-orange font-bold hover:bg-neon-orange/10 transition-colors">
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neon-teal">WTF is $DBAR? 🤔</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          In a sea of toxic meme coins built on hate, scams, and negativity — <span className="text-neon-purple font-bold">$DBAR</span> stands for something real.
          We&apos;re the first meme coin on Solana that promotes unity, kindness, and good energy. No racism. No hate. Just vibes.
        </p>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Crypto should be for everyone regardless of race, background, or where you&apos;re from. 
          $DBAR isn&apos;t just a ticker — it&apos;s a statement. Every buy is a vote against hate. Every hold is a stand for unity. 🌍
        </p>
        <p className="mt-6 text-xl font-bold text-neon-orange">The culture needs this. You know it. We know it. LFG. 🔥</p>
      </section>

      {/* Why $DBAR */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-neon-pink">Why $DBAR? 💡</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: "🤝", title: "Community First", desc: "Built by the people, for the people. No insider deals, no VCs, no BS." },
            { icon: "🌈", title: "Anti-Hate Movement", desc: "Every holder becomes part of a global movement against racism and discrimination." },
            { icon: "🔒", title: "100% Safe", desc: "LP burned, contract renounced, 0% tax. No rugs, no tricks — just pure community." },
            { icon: "🚀", title: "Viral Potential", desc: "A message this powerful spreads itself. $DBAR is built to go mainstream." },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neon-pink/50 transition-colors">
              <p className="text-3xl mb-3">{item.icon}</p>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tokenomics */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-neon-purple">Tokenomics 📊</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Total Supply", value: "1B", icon: "💰" },
            { title: "Tax", value: "0%", icon: "✅" },
            { title: "LP Burned", value: "100%", icon: "🔥" },
            { title: "Team Tokens", value: "0%", icon: "🙅" },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-neon-purple/50 transition-colors">
              <p className="text-4xl mb-2">{item.icon}</p>
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-6 text-sm">Fair launch on Pump.fun — no presale, no whitelist, everyone starts equal.</p>
      </section>

      {/* How to Buy */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-neon-teal">How to Buy 🛒</h2>
        <div className="space-y-4">
          {[
            { step: "1", title: "Get a Solana Wallet", desc: "Download Phantom or Solflare wallet from the official website." },
            { step: "2", title: "Buy SOL", desc: "Purchase SOL from any exchange (Coinbase, Binance, etc.) and send it to your wallet." },
            { step: "3", title: "Go to Pump.fun", desc: "Visit pump.fun and connect your wallet. Search for $DBAR." },
            { step: "4", title: "Swap SOL for $DBAR", desc: "Enter the amount of SOL you want to swap and confirm the transaction. Welcome aboard! 🎉" },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5">
              <span className="shrink-0 w-10 h-10 rounded-full bg-neon-teal flex items-center justify-center font-bold text-black text-lg">{item.step}</span>
              <div>
                <h3 className="font-bold text-lg text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-neon-orange">Roadmap 🗺️</h2>
        <div className="space-y-6">
          {[
            { phase: "Phase 1", title: "Launch & Community", desc: "Fair launch on Pump.fun • Build core community • Social media blitz • 500+ holders • Meme creation" },
            { phase: "Phase 2", title: "Growth & Visibility", desc: "Raydium/Jupiter listings • CoinGecko & CMC • Influencer partnerships • Meme contests • 5,000+ holders" },
            { phase: "Phase 3", title: "Mainstream Push", desc: "CEX listings • Anti-racism partnerships • Merch store • Real-world awareness campaigns • 50,000+ holders" },
            { phase: "Phase 4", title: "Legacy & Impact", desc: "DAO governance • Charity donations to anti-hate orgs • $DBAR Foundation • Global movement status" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5 hover:border-neon-teal/50 transition-colors">
              <span className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-teal flex items-center justify-center font-bold text-sm">{item.phase}</span>
              <div>
                <h3 className="font-bold text-lg text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neon-pink">Join the Movement 🫶</h2>
        <p className="text-gray-300 mb-4 text-lg">Good vibes attract good people. Be early. Be kind. Be $DBAR.</p>
        <p className="text-gray-400 mb-8">Follow us for updates, memes, and community events. We&apos;re building something bigger than a coin.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "𝕏 Twitter", href: "https://x.com/DBARDev", color: "border-white hover:bg-white/10" },
            { label: "Telegram", href: "https://t.me/DBARcoin", color: "border-neon-teal hover:bg-neon-teal/10" },
            { label: "Pump.fun", href: "https://pump.fun", color: "border-neon-purple hover:bg-neon-purple/10" },
            { label: "DexScreener", href: "https://dexscreener.com", color: "border-neon-orange hover:bg-neon-orange/10" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-full border font-bold transition-colors ${link.color}`}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Meme Gallery */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-neon-teal">Meme Gallery 🎨</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["/hero.jpg", "/meme1.jpg", "/meme2.jpg"].map((src, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-neon-purple/50 transition-all hover:scale-[1.02]">
              <Image src={src} alt={`$DBAR meme ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-neon-purple">FAQ ❓</h2>
        <div className="space-y-4">
          {[
            { q: "Is this a rug pull?", a: "No. LP is burned, contract is renounced, 0 team tokens. This is 100% community-owned." },
            { q: "Why should I buy $DBAR?", a: "Because you believe crypto can be fun AND have a positive message. Plus, meme coins with movements tend to moon. 📈" },
            { q: "What chain is $DBAR on?", a: "Solana. Fast, cheap, and perfect for meme coins." },
            { q: "Is there a presale?", a: "No. Fair launch on Pump.fun. No insiders, no whitelist — everyone enters at the same price." },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="font-bold text-white mb-2">{item.q}</h3>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-10 py-10 px-4 text-center text-gray-500 text-sm">
        <p className="mb-2 text-lg font-bold text-white">$DBAR — Don&apos;t Be A Racist 🌍</p>
        <p className="max-w-xl mx-auto">
          Disclaimer: $DBAR is a meme coin with no intrinsic value or expectation of financial return. It is not an investment.
          Always do your own research (DYOR). This is a community-driven project for entertainment and awareness purposes only.
          Not financial advice.
        </p>
        <p className="mt-4">© 2026 $DBAR Community. Good Vibes Only. ✌️</p>
      </footer>
    </main>
  );
}
