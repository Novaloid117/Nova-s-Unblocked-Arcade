import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-white/5 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 h-[70px]">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-black tracking-tighter text-accent-green uppercase">
            Arcade<span className="text-accent-pink ml-0.5">X</span>
          </span>
        </Link>
        
        <div className="hidden flex-1 max-w-md mx-8 md:block">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-accent-pink transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search unblocked games..." 
              className="w-full bg-white/10 rounded-[12px] py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 border-2 border-transparent focus:border-accent-pink/30 outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Network Status</span>
            <span className="text-xs font-bold text-accent-green">1,248 Players Online</span>
          </div>
          <div className="h-10 w-10 rounded-full bg-accent-pink hidden sm:block border-2 border-white/10" />
        </div>
      </div>
    </header>
  );
}
