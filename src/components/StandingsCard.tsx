import React from 'react';
import { Trophy, Target } from 'lucide-react';

interface StandingsCardProps {
  stats: {
    wins: number;
    losses: number;
    ties: number;
    pointsFor: number;
    pointsAgainst: number;
    divisionRank: number;
  };
  title: string;
}

export function StandingsCard({ stats, title }: StandingsCardProps) {
  const winPercentage = ((stats.wins + (stats.ties * 0.5)) / 
    (stats.wins + stats.losses + stats.ties) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium">
            Division Rank: {stats.divisionRank}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold">{stats.wins}</div>
          <div className="text-sm text-gray-600">Wins</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold">{stats.losses}</div>
          <div className="text-sm text-gray-600">Losses</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold">{stats.ties}</div>
          <div className="text-sm text-gray-600">Ties</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold">{winPercentage}%</div>
          <div className="text-sm text-gray-600">Win Rate</div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-green-500" />
          <span className="text-sm">Points For: {stats.pointsFor}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-red-500" />
          <span className="text-sm">Points Against: {stats.pointsAgainst}</span>
        </div>
      </div>
    </div>
  );
}