import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.06),transparent_35%),radial-gradient(circle_at_60%_20%,rgba(59,130,246,0.15),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
            <span className="text-xs uppercase tracking-widest text-cyan-200/80">Medartis • Scrollytelling</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Precision fixation for better outcomes
          </h1>
          <p className="mt-5 text-base leading-relaxed text-cyan-100/80 sm:text-lg md:text-xl">
            An immersive journey through the science and craft behind advanced osteosynthesis solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#chapter-1" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400">
              Start exploring
            </a>
            <a href="#chapters" className="text-sm font-medium text-cyan-200 hover:text-white/90">
              See chapters
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
