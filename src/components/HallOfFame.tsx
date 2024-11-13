import React from 'react';
import { Award, Filter } from 'lucide-react';
import { TeamInfo } from '../types';
import { PlayerCard } from './PlayerCard';
import { cowboysData } from '../data/cowboys';

interface HallOfFameProps {
  team: TeamInfo;
}

export function HallOfFame({ team }: HallOfFameProps) {
  const positions = Array.from(new Set(cowboysData.hallOfFame.map(player => player.position)));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold">Hall of Fame</h2>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select className="text-sm border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Positions</option>
            {positions.map(position => (
              <option key={position} value={position}>{position}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cowboysData.hallOfFame.map((player) => (
          <PlayerCard 
            key={player.id} 
            player={player} 
            teamColors={team.colors}
          />
        ))}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">
          The Dallas Cowboys have {cowboysData.hallOfFame.length} members in the Pro Football Hall of Fame, 
          representing decades of excellence and achievement in NFL history.
        </p>
      </div>
    </div>
  );
}