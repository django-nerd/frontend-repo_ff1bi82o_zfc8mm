import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Demo only – no backend needed for this preview
    setTimeout(() => setStatus('Thanks! We will reach out shortly.'), 800);
  };

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-semibold text-white">Speak with our team</h3>
            <p className="mt-4 text-cyan-100/80">Request a demo, training, or clinical materials. We respond within one business day.</p>
            <ul className="mt-6 space-y-2 text-cyan-200/80">
              <li>• Global presence in over 40 countries</li>
              <li>• Swiss engineering and quality</li>
              <li>• Focused on CMF and extremities</li>
            </ul>
          </div>
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input required className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none" placeholder="First name" />
              <input required className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none" placeholder="Last name" />
              <input required type="email" className="md:col-span-2 rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none" placeholder="Work email" />
              <textarea rows={4} className="md:col-span-2 rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none" placeholder="How can we help?" />
            </div>
            <button className="mt-5 w-full rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400">Submit</button>
            <p className="mt-3 text-sm text-cyan-200/80">{status}</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
