import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`} className="group block">
      <div className="vibrant-card h-full flex flex-col gap-3">
        <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-accent-green flex items-center justify-center text-bg shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
               <Play size={18} fill="currentColor" />
            </div>
          </div>
        </div>
        <div className="px-1 flex flex-col gap-1">
          <h3 className="font-bold text-base line-clamp-1 group-hover:text-accent-green transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center justify-between">
             <span className="text-xs font-medium text-white/40 uppercase tracking-wide">{game.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
