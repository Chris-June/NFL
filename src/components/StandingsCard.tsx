import React from "react";
import { Trophy, Target } from "lucide-react";
import { TeamStats, CurrentStats } from "../types";

interface StandingsCardProps {
  currentStats: CurrentStats;
  allTimeStats: TeamStats;
}

export function StandingsCard({ currentStats, allTimeStats }: StandingsCardProps) {
  const currentYear = new Date().getFullYear().toString();
  const currentSeasonStats = {
    rushing: currentStats.rushing.find(stat => stat.year === currentYear) || currentStats.rushing[0],
    passing: currentStats.passing.find(stat => stat.year === currentYear) || currentStats.passing[0],
    scoring: currentStats.scoring.find(stat => stat.year === currentYear) || currentStats.scoring[0],
    defense: currentStats.defense.find(stat => stat.year === currentYear) || currentStats.defense[0],
    turnover: currentStats.turnover.find(stat => stat.year === currentYear) || currentStats.turnover[0],
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Team Statistics</h2>
        <div className="flex space-x-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <Target className="w-6 h-6 text-blue-500" />
        </div>
      </div>

      <div className="space-y-6">
        {/* Current Season Stats */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Current Season</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Rushing: {currentSeasonStats.rushing.value} (Rank: {currentSeasonStats.rushing.rank})
              </p>
              <p className="text-sm text-gray-600">
                Passing: {currentSeasonStats.passing.value} (Rank: {currentSeasonStats.passing.rank})
              </p>
              <p className="text-sm text-gray-600">
                Scoring: {currentSeasonStats.scoring.value} (Rank: {currentSeasonStats.scoring.rank})
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Defense: {currentSeasonStats.defense.value} (Rank: {currentSeasonStats.defense.rank})
              </p>
              <p className="text-sm text-gray-600">
                Turnover: {currentSeasonStats.turnover.value} (Rank: {currentSeasonStats.turnover.rank})
              </p>
            </div>
          </div>
        </div>

        {/* All-Time Stats */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">All-Time Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">Overview</h4>
              <div className="space-y-1">
                {allTimeStats.overview.map((stat, index) => (
                  <p key={index} className="text-sm text-gray-600">
                    {stat.label}: {stat.value}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">Performance</h4>
              <div className="space-y-1">
                {allTimeStats.offense.map((stat, index) => (
                  <p key={index} className="text-sm text-gray-600">
                    {stat.label}: {stat.value} (Rank: {stat.rank})
                  </p>
                ))}
                {allTimeStats.defense.map((stat, index) => (
                  <p key={index} className="text-sm text-gray-600">
                    {stat.label}: {stat.value} (Rank: {stat.rank})
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
