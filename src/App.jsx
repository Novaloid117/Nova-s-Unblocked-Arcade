import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import GameGrid from './components/GameGrid.jsx';
import GameView from './components/GameView.jsx';
import gamesData from './data/games.json';
import { motion } from 'motion/react';

const games = gamesData;

function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <div className="flex flex-col gap-8">
        {/* Content Area */}
        <main className="flex-1 flex flex-col gap-8 min-w-0">
          {/* Featured Hero */}
          <section className="vibrant-hero relative min-h-[300px] flex items-end p-8 md:p-12">
            <div className="absolute top-6 left-6 bg-black/50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Featured Story
            </div>
            <div className="relative z-10 max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none"
              >
                Doki <span className="text-accent-pink">Doki</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-white/80 text-sm md:text-base max-w-md font-medium"
              >
                Welcome to the Literature Club! A high-performance browser version of the psychological horror classic.
              </motion.p>
              {games.length > 0 && (
                <Link to={`/game/${games[0].id}`}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-white text-bg px-6 py-3 rounded-xl font-black text-sm uppercase tracking-tight"
                  >
                    Start Game
                  </motion.button>
                </Link>
              )}
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 select-none pointer-events-none hidden md:block">
               <div className="h-full w-full bg-[radial-gradient(circle_at_center,var(--color-accent-pink)_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>
          </section>

          {/* Game Grid */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-amber animate-pulse" />
                Featured Games
              </h2>
              <span className="text-xs font-bold text-white/30 uppercase tracking-widest">
                {games.length} Available
              </span>
            </div>
            
            {games.length > 0 ? (
              <GameGrid games={games} />
            ) : (
              <div className="vibrant-card border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center py-20 text-center">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <div className="h-2 w-2 rounded-full bg-accent-pink animate-ping" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">No Games Registered</h3>
                <p className="text-[10px] uppercase tracking-tighter text-white/20 mt-2">The digital archives are currently empty.</p>
              </div>
            )}
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
