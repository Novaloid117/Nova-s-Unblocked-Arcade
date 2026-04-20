import React from 'react';
import { useParams, Link } from 'react-router-dom';
import gamesData from '../data/games.json';
import { ChevronLeft, Maximize2, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';

const games = gamesData;

export default function GameView() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  const [key, setKey] = React.useState(0);

  if (!game) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
        <h2 className="mb-4 text-4xl font-black uppercase">Game Not Found</h2>
        <Link to="/" className="bg-accent-pink px-6 py-3 rounded-xl font-bold uppercase shadow-lg shadow-accent-pink/20">
          Back to Browse
        </Link>
      </div>
    );
  }

  const reloadGame = () => setKey(prev => prev + 1);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase text-white/40 hover:text-white transition-colors">
          <ChevronLeft size={16} />
          Back to browsing
        </Link>
        <div className="flex gap-3">
          <button 
            onClick={reloadGame}
            className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-colors"
          >
            <RotateCcw size={14} className="text-accent-green" />
            Reload Game
          </button>
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 opacity-50 cursor-not-allowed px-4 py-2 rounded-xl text-[10px] font-bold uppercase">
            <Maximize2 size={14} />
            Fullscreen
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 items-start">
        <div className={cn(
          "lg:col-span-3 flex justify-center",
          game.aspectRatio === '9/16' && "lg:col-span-2 lg:col-start-1 lg:justify-start"
        )}>
          <div className={cn(
            "overflow-hidden bg-black shadow-2xl border-2 border-white/5 transition-all duration-500",
            game.aspectRatio === '9/16' 
              ? "aspect-[9/16] w-full max-w-[400px] rounded-[48px] border-8 border-[#2e2e38] ring-4 ring-black/50" 
              : "aspect-video w-full rounded-[32px]"
          )}>
            <div className="h-full w-full bg-[#1e1e24] flex items-center justify-center">
              <iframe
                key={key}
                src={game.iframeUrl}
                title={game.title}
                className="h-full w-full border-none"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className={cn(
          "flex flex-col gap-6",
          game.aspectRatio === '9/16' && "lg:col-span-2"
        )}>
          <div className="vibrant-card p-6 bg-[#1e1e24]">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-accent-pink">
              {game.category}
            </span>
            <h1 className="mb-4 text-3xl font-black uppercase leading-tight italic">
              {game.title}
            </h1>
            <p className="text-sm leading-relaxed text-white/60">
              {game.description}
            </p>
          </div>

          <div className="vibrant-card bg-accent-green/5 p-6 border-accent-green/20">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-accent-green">
              Secure Play
            </h3>
            <p className="text-xs leading-relaxed text-white/70">
              This game is proxied through our encrypted ArcadeX framework. High performance and minimal latency guaranteed.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/5 pt-12">
        <h2 className="mb-8 text-xl font-black uppercase tracking-tight italic">Recommended for you</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {games.filter(g => g.id !== id).slice(0, 4).map(g => (
            <Link key={g.id} to={`/game/${g.id}`} className="group block">
              <div className="vibrant-card">
                <div className="relative aspect-video rounded-[12px] overflow-hidden mb-3">
                   <img src={g.thumbnail} alt={g.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xs font-bold uppercase group-hover:text-accent-pink transition-colors truncate">{g.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
