import React from 'react';
import Hero from './components/Hero';
import StickyNav from './components/StickyNav';
import ChaptersLayout from './components/ChaptersLayout';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <StickyNav />
      <Hero />
      <ChaptersLayout />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-cyan-200/70">
        © {new Date().getFullYear()} Medartis • For demonstration purposes
      </footer>
    </div>
  );
}

export default App;
