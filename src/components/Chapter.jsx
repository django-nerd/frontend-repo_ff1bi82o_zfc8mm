import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Chapter({ id, kicker, title, body, media }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id={id} ref={ref} className="relative isolate mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:px-10 lg:py-40">
      <motion.div style={{ opacity, y }} className="order-2 md:order-1">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-cyan-200/80">
          {kicker}
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">{title}</h2>
        <p className="mt-5 max-w-prose text-cyan-100/80 md:text-lg">{body}</p>
      </motion.div>

      <motion.div style={{ opacity, y }} className="order-1 md:order-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 shadow-2xl">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900">
            {media}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
