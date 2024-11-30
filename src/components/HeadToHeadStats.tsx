import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Flame, Target, Award } from 'lucide-react';
import { HeadToHeadRecord, NFLTeam } from '../types/nfl';

interface HeadToHeadStatsProps {
  team1: NFLTeam;
  team2: NFLTeam;
}

export function HeadToHeadStats({ team1, team2 }: HeadToHeadStatsProps) {
  const headToHeadData = team1.headToHead[team2.id];
  
  const calculateWinPercentage = (wins: number, total: number) => 
    ((wins / total) * 100).toFixed(1);

  const totalGames = headToHeadData.wins + headToHeadData.losses + headToHeadData.ties;
  const team1WinPercentage = calculateWinPercentage(headToHeadData.wins, totalGames);
  const team2WinPercentage = calculateWinPercentage(headToHeadData.losses, totalGames);

  return (
    <div className="space-y-8">
      {/* Overall Record */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-center mb-6">All-Time Head-to-Head Record</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold" style={{ color: team1.colors.primary }}>
              {headToHeadData.wins}
            </div>
            <div className="text-sm text-gray-600">Wins</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-500">
              {headToHeadData.ties}
            </div>
            <div className="text-sm text-gray-600">Ties</div>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{ color: team2.colors.primary }}>
              {headToHeadData.losses}
            </div>
            <div className="text-sm text-gray-600">Losses</div>
          </div>
        </div>
      </div>

      {/* Win Percentage Bar */}
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${team1WinPercentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full"
          style={{ backgroundColor: team1.colors.primary }}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${team2WinPercentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute right-0 top-0 h-full"
          style={{ backgroundColor: team2.colors.primary }}
        />
      </div>

      {/* Last Game */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold">Last Meeting</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{headToHeadData.lastGame.date}</span>
            <span className="text-sm font-semibold">
              {headToHeadData.lastGame.score.winner} - {headToHeadData.lastGame.score.loser}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{headToHeadData.lastGame.location}</span>
          </div>
          {headToHeadData.lastGame.isPlayoff && (
            <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
              <Trophy className="w-3 h-3" />
              Playoff Game
            </div>
          )}
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-orange-600" />
            <h3 className="text-lg font-semibold">Longest Win Streak</h3>
          </div>
          <div className="text-3xl font-bold">{headToHeadData.longestWinStreak}</div>
          <div className="text-sm text-gray-600">consecutive wins</div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <h3 className="text-lg font-semibold">Playoff Record</h3>
          </div>
          <div className="text-3xl font-bold">
            {headToHeadData.playoffRecord.wins}-{headToHeadData.playoffRecord.losses}
          </div>
          <div className="text-sm text-gray-600">in playoff matchups</div>
        </div>
      </div>

      {/* Significant Games */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold">Notable Matchups</h3>
        </div>
        <div className="space-y-4">
          {headToHeadData.significantGames.map((game, index) => (
            <motion.div
              key={game.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200 last:border-0 pb-4 last:pb-0"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{game.description}</div>
                  <div className="text-sm text-gray-600">{game.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">
                    {game.score.winner} - {game.score.loser}
                  </div>
                  <div className="text-sm text-gray-600">{game.location}</div>
                </div>
              </div>
              {game.isPlayoff && (
                <div className="mt-2">
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                    <Trophy className="w-3 h-3" />
                    Playoff Game
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
