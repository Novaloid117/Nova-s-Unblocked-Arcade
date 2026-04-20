import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GameGrid from './components/GameGrid';
import GameView from './components/GameView';
import gamesData from './data/games.json';
import { motion } from 'motion/react';
import { cn } from './lib/utils';

const games = gamesData;

function HomePage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Action', 'Puzzle', 'Retro', 'Multiplayer', 'Sports', 'Idle'];

  const filteredGames = activeCategory === 'All' 
    ? games 
    : games.filter(g => g.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-[180px] flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "category-btn whitespace-nowrap",
                activeCategory === cat && "active"
              )}
            >
              {cat}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="flex-1 flex flex-col gap-8 min-w-0">
          {/* Featured Hero */}
          <section className="vibrant-hero relative min-h-[300px] flex items-end p-8 md:p-12">
            <div className="absolute top-6 left-6 bg-black/50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Featured Game
            </div>
            <div className="relative z-10 max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none"
              >
                Cyber Drift <span className="text-accent-amber">2088</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-white/80 text-sm md:text-base max-w-md font-medium"
              >
                High-speed neon racing through the digital skyline. No lag, full unblocked access for all users.
              </motion.p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-white text-bg px-6 py-3 rounded-xl font-black text-sm uppercase tracking-tight"
              >
                Play Now
              </motion.button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 select-none pointer-events-none hidden md:block">
               <div className="h-full w-full bg-[radial-gradient(circle_at_center,var(--color-accent-pink)_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>
          </section>

          {/* Game Grid */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
                {activeCategory} Games
              </h2>
              <span className="text-xs font-bold text-white/30 uppercase tracking-widest">
                {filteredGames.length} Available
              </span>
            </div>
            <GameGrid games={filteredGames} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:id" element={<GameView />} />
        </Routes>
      </Layout>
    </Router>
  );
}
