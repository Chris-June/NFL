import React from 'react';
import { Star } from 'lucide-react';
import { TeamInfo } from '../types';

interface TeamHeroProps {
  team: TeamInfo;
}

export function TeamHero({ team }: TeamHeroProps) {
  return (
    <div 
      className="relative h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary})`
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center text-white p-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Star className="w-12 h-12" />
          <h1 className="text-6xl font-bold">{team.city} {team.name}</h1>
          <Star className="w-12 h-12" />
        </div>
        <p className="text-2xl font-light max-w-2xl mx-auto">
          Welcome to America's Team - Home of 5 Super Bowl Championships and a Legacy of Excellence
        </p>
      </div>
    </div>
  );
}