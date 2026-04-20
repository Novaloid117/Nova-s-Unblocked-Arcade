import React from 'react';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen selection:bg-accent-pink selection:text-white">
      <Header />
      <main>
        {children}
      </main>
      <footer className="mt-20 border-t-2 border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-40">
            ArcadeX Framework v1.0.4 • Local JSON Storage Active
          </p>
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-40">
            All games hosted via secure iframe proxy
          </p>
        </div>
      </footer>
    </div>
  );
}
