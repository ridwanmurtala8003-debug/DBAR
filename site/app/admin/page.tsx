"use client";

import { useState, useEffect } from "react";

export default function Admin() {
  const [mint, setMint] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/config").then(r => r.json()).then(d => setMint(d.mint || ""));
  }, []);

  async function save() {
    await fetch("/api/config", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ mint }) });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-neon-purple">Admin Panel</h1>
        <label className="block text-sm text-gray-400">Pump.fun Mint Address</label>
        <input
          value={mint}
          onChange={e => setMint(e.target.value)}
          placeholder="Paste mint address..."
          className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white focus:border-neon-purple outline-none"
        />
        <button onClick={save} className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-pink font-bold hover:opacity-90 transition-opacity">
          {saved ? "✓ Saved!" : "Save"}
        </button>
      </div>
    </div>
  );
}
