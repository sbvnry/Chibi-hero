"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const sections = {
  character: {
    label: "Character Type",
    options: [
      "female superhero",
      "male superhero",
      "teen superhero",
      "cosmic guardian",
      "villain-style anti-hero",
      "futuristic tech hero",
      "alien superhero",
      "mutant hero",
      "royal warrior hero",
      "street-style vigilante"
    ],
  },
  skin: {
    label: "Skin Tone",
    options: [
      "deep brown skin with warm golden undertones",
      "rich cocoa brown skin with a soft glow",
      "medium tan skin with warm undertones",
      "dark brown radiant skin with glossy highlights",
      "light skin with soft blush tones",
      "olive skin with golden warmth",
      "porcelain skin with cool undertones",
      "sun-kissed golden skin",
      "deep ebony skin with luminous glow"
    ],
  },
  expression: {
    label: "Expression",
    options: [
      "confident smirk",
      "serious focused stare",
      "playful heroic smile",
      "determined battle-ready look",
      "calm powerful expression",
      "angry intense glare",
      "mysterious neutral face",
      "fearless grin"
    ],
  },
  power: {
    label: "Power Style",
    options: [
      "lightning powers with glowing electric aura",
      "fire powers with flames around both hands",
      "ice powers with frost effects and sparkling snow",
      "cosmic galaxy energy aura with floating stars",
      "shadow powers with dark smoke and purple glow",
      "super speed with motion streaks and wind effects",
      "tech armor powers with glowing circuits and holograms",
      "water manipulation with flowing waves",
      "earth powers with rocks and debris floating",
      "energy blast powers with glowing core",
      "time manipulation with glowing clock effects"
    ],
  },
  hair: {
    label: "Hair Style",
    options: [
      "curly afro puff",
      "long sleek straight hair",
      "messy voluminous curls",
      "braids with beads",
      "high ponytail",
      "short bob cut",
      "spiky superhero hair",
      "dreadlocks",
      "half-up half-down hairstyle",
      "slicked back hair"
    ],
  },
  hairColor: {
    label: "Hair Color",
    options: [
      "black hair",
      "dark brown hair",
      "platinum blonde hair",
      "neon blue highlights",
      "deep red hair",
      "purple gradient hair",
      "silver hair",
      "golden blonde hair",
      "pink neon hair",
      "dual-tone black and red hair"
    ],
  },
  outfit: {
    label: "Outfit",
    options: [
      "futuristic superhero suit with metallic textures",
      "tight-fit armor with glowing lines",
      "sleek tech suit with neon accents",
      "combat suit with utility belt and boots",
      "luxury superhero suit with gold details",
      "cosmic armor suit with star details",
      "stealth ninja suit",
      "battle armor with heavy plating",
      "minimal sleek bodysuit",
      "royal hero suit with cape"
    ],
  },
  palette: {
    label: "Color Palette",
    options: [
      "black and gold",
      "red and blue",
      "purple neon",
      "silver and white",
      "all black stealth",
      "pink and chrome",
      "emerald green and gold",
      "blue and silver",
      "orange and black",
      "white and gold"
    ],
  },
  pose: {
    label: "Pose",
    options: [
      "hovering with power glowing in hand",
      "landing hero pose",
      "flying forward action pose",
      "charging attack blast",
      "standing confident with aura",
      "mid-air action pose",
      "kneeling power stance",
      "walking forward hero pose",
      "defensive shield stance"
    ],
  },
  effects: {
    label: "Effects",
    options: [
      "glowing particles, energy aura, cinematic lighting",
      "sparks, smoke effects, dramatic shadows",
      "light streaks, motion blur, glowing background",
      "floating power symbols, soft glow, premium shine",
      "explosion effects with debris",
      "glitch digital effects",
      "neon aura with reflections",
      "fog and mist atmosphere"
    ],
  },
};

const baseStyle = "Doll-style chibi superhero, oversized head, tiny body proportions, huge glossy eyes, smooth glossy skin, clean linework, soft shading, high-detail cartoon style, premium collectible figurine look, Marvel-inspired aesthetic, original character only, not a copyrighted character";
const finalStyle = "centered composition, transparent background, sharp edges, high resolution, polished digital illustration, no text";

type SectionKey = keyof typeof sections;
type Values = Record<SectionKey, string>;

export default function MiniMarvelChibiBuilder() {
  const [values, setValues] = useState<Values>(
    Object.fromEntries(
      Object.entries(sections).map(([key, section]) => [key, section.options[0]])
    ) as Values
  );
  const [copied, setCopied] = useState(false);

  const randomize = () => {
    const newValues = {} as Values;
    (Object.entries(sections) as [SectionKey, (typeof sections)[SectionKey]][]).forEach(([key, section]) => {
      const opts = section.options;
      newValues[key] = opts[Math.floor(Math.random() * opts.length)];
    });
    setValues(newValues);
  };

  const prompt = useMemo(() => {
    return `${baseStyle},\n\n${values.character}, ${values.skin}, ${values.expression},\n\n${values.power},\n\n${values.hair}, ${values.hairColor},\n\n${values.outfit}, ${values.palette} color palette,\n\npose: ${values.pose},\n\n${values.effects},\n\n${finalStyle}`;
  }, [values]);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen bg-[#070711] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,0,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.18),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12),_transparent_35%)]" />

      <main className="relative z-10 max-w-7xl mx-auto px-5 py-8 md:py-12">
        <nav className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <p className="font-black tracking-tight">Mini Hero Builder</p>
              <p className="text-xs text-white/55">AI prompt generator</p>
            </div>
          </div>
        </nav>

        <section className="grid grid-cols-1 gap-10 items-center mb-14">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white/75 mb-5">
              <span>✨</span>
              Create original mini superhero chibi prompts
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
              Build viral chibi heroes in seconds.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Pick your character, powers, outfit, pose, and effects. The builder creates a polished AI prompt for mini superhero stickers, digital products, and content.
            </p>
          </motion.div>
        </section>

        <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
          <div className="rounded-[2rem] bg-white/10 border border-white/15 p-5 md:p-7 backdrop-blur shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🪄</span>
                <h2 className="text-2xl font-black">Choose Your Hero Details</h2>
              </div>
              <button onClick={randomize} className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-yellow-300 text-black font-bold hover:scale-105 transition">
                🎲 Randomize
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {(Object.entries(sections) as [SectionKey, (typeof sections)[SectionKey]][]).map(([key, section]) => (
                <label key={key} className="block rounded-2xl bg-black/25 border border-white/10 p-4 hover:border-yellow-300/40 transition">
                  <span className="text-sm font-bold text-white/70">{section.label}</span>
                  <select
                    value={values[key]}
                    onChange={(e) => setValues((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="mt-2 w-full bg-white text-black rounded-xl px-3 py-3 font-semibold outline-none"
                  >
                    {section.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-6 rounded-[2rem] bg-[#10101d] border border-white/15 p-5 md:p-7 shadow-2xl">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-2xl font-black">Your Finished Prompt</h2>
                <p className="text-white/55 text-sm mt-1">Copy this into your AI image tool.</p>
              </div>
              <button onClick={copyPrompt} className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-300 text-black font-black hover:scale-105 transition">
                <span>{copied ? "✅" : "📋"}</span>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <pre className="whitespace-pre-wrap text-sm leading-relaxed bg-black/45 border border-white/10 rounded-2xl p-5 text-white/85 max-h-[620px] overflow-auto">
              {prompt}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
