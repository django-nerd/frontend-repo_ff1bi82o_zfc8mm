import React from 'react';
import { Menu, ChevronRight } from 'lucide-react';

const items = [
  { id: 'chapter-1', label: 'Patient Story' },
  { id: 'chapter-2', label: 'Clinical Challenge' },
  { id: 'chapter-3', label: 'Technology' },
  { id: 'chapter-4', label: 'Outcomes' },
];

export default function StickyNav() {
  return (
    <nav className="sticky top-0 z-30 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20">
            <Menu className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-cyan-100">Medartis</span>
        </div>
        <div className="hidden gap-1 md:flex">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="group inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-cyan-100/80 transition hover:border-cyan-400/40 hover:text-white">
              {it.label}
              <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
