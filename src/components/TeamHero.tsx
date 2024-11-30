import React from 'react';
import { Star } from 'lucide-react';
import { TeamInfo, TeamStats, TeamMascot } from '../types';

interface TeamHeroProps {
  team: TeamInfo;
  stats: TeamStats;
  mascots: Record<string, TeamMascot>;
}

export function TeamHero({ team, stats, mascots }: TeamHeroProps) {
  return (
    <div 
      className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
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
        
        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* Overview Stats */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <div className="space-y-2">
              {stats.overview.map((stat, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{stat.label}:</span> {stat.value}
                </div>
              ))}
            </div>
          </div>

          {/* Offense Stats */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Offense</h3>
            <div className="space-y-2">
              {stats.offense.map((stat, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{stat.label}:</span> {stat.value}
                  <span className="text-xs ml-2">(Rank: {stat.rank})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Defense Stats */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Defense</h3>
            <div className="space-y-2">
              {stats.defense.map((stat, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{stat.label}:</span> {stat.value}
                  <span className="text-xs ml-2">(Rank: {stat.rank})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mascot Information */}
        <div className="mt-8">
          {Object.entries(mascots).map(([key, mascot]) => (
            <div key={key} className="text-sm">
              <span className="font-medium">{mascot.name}</span>
              <p className="text-xs opacity-80">{mascot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}