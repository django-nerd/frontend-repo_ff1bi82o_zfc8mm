import React from 'react';
import Chapter from './Chapter';
import { motion } from 'framer-motion';

export default function ChaptersLayout() {
  return (
    <div id="chapters" className="relative w-full bg-slate-950">
      {/* subtle divider pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_40%)]" />

      <Chapter
        id="chapter-1"
        kicker="Chapter 1"
        title="From injury to recovery"
        body="Follow Emma, a climber with a distal radius fracture. See how precision implants and guided workflows support surgeons from planning to fixation and beyond."
        media={<img className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop" alt="Patient journey" />}
      />

      <Chapter
        id="chapter-2"
        kicker="Chapter 2"
        title="The clinical challenge"
        body="Fracture patterns are complex. Anatomy varies. Our low-profile plates and anatomically contoured screws are engineered to restore function while minimizing soft-tissue irritation."
        media={<img className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1675557009483-e6cf3867976b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGluaWNhbCUyMGNoYWxsZW5nZXxlbnwwfDB8fHwxNzYzNTc5OTI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Clinical challenge" />}
      />

      <Chapter
        id="chapter-3"
        kicker="Chapter 3"
        title="Technology that adapts"
        body="From hybrid locking mechanisms to instrument ergonomics, each detail is designed for stability, speed, and confidence in the OR."
        media={<video className="h-full w-full object-cover" src="https://cdn.coverr.co/videos/coverr-surgery-room-3887/1080p.mp4" autoPlay muted loop playsInline />}
      />

      <Chapter
        id="chapter-4"
        kicker="Chapter 4"
        title="Measured outcomes"
        body="Lower revision rates, faster return to activity, and high patient satisfaction. Explore real-world data and surgeon perspectives."
        media={<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1600&auto=format&fit=crop" alt="Outcomes" />}
      />

      {/* CTA */}
      <div className="relative mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 text-center shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-white md:text-3xl">Ready to dive deeper?</h3>
          <p className="mt-3 text-cyan-100/80">Request surgeon resources, technique guides, and clinical evidence packets.</p>
          <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">Contact us</a>
        </motion.div>
      </div>
    </div>
  );
}
