import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-white/5 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 h-[70px]">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-black tracking-tighter text-accent-green uppercase">
            Nova's<span className="text-accent-pink ml-2">Arcade</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-accent-pink hidden sm:block border-2 border-white/10" />
        </div>
      </div>
    </header>
  );
}
