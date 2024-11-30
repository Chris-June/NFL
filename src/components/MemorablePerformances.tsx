import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Star, Trophy, Users, MapPin } from 'lucide-react';
import { PlayerPerformance, GameMatchup } from '../types/nfl';

interface MemorablePerformance {
  player: PlayerPerformance;
  game: GameMatchup;
  description: string;
}

interface MemorablePerformancesProps {
  performances: MemorablePerformance[];
  team1Name: string;
  team2Name: string;
  team1Color: string;
  team2Color: string;
}

export function MemorablePerformances({ 
  performances, 
  team1Name, 
  team2Name,
  team1Color,
  team2Color 
}: MemorablePerformancesProps) {
  const [selectedPerformance, setSelectedPerformance] = useState<MemorablePerformance | null>(null);

  const getStatDisplay = (stat: string, value: number) => {
    switch (stat) {
      case 'passingYards':
        return `${value} passing yards`;
      case 'passingTouchdowns':
        return `${value} passing TD${value !== 1 ? 's' : ''}`;
      case 'rushingYards':
        return `${value} rushing yards`;
      case 'rushingTouchdowns':
        return `${value} rushing TD${value !== 1 ? 's' : ''}`;
      case 'receptions':
        return `${value} reception${value !== 1 ? 's' : ''}`;
      case 'receivingYards':
        return `${value} receiving yards`;
      case 'receivingTouchdowns':
        return `${value} receiving TD${value !== 1 ? 's' : ''}`;
      case 'tackles':
        return `${value} tackle${value !== 1 ? 's' : ''}`;
      case 'sacks':
        return `${value} sack${value !== 1 ? 's' : ''}`;
      case 'interceptions':
        return `${value} interception${value !== 1 ? 's' : ''}`;
      default:
        return `${value} ${stat}`;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {performances.map((performance, index) => (
          <motion.div
            key={`${performance.player.id}-${performance.game.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Performance Header */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-lg font-semibold">{performance.player.name}</h3>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {performance.player.position}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{performance.game.date}</span>
                  </div>
                  {performance.game.isPlayoff && (
                    <div className="mt-1 inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                      <Trophy className="w-3 h-3" />
                      Playoff Game
                    </div>
                  )}
                </div>
              </div>

              {/* Game Context */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium" style={{ color: team1Color }}>
                    {performance.game.homeTeam}
                  </span>
                  <span className="font-bold">
                    {performance.game.score.home} - {performance.game.score.away}
                  </span>
                  <span className="font-medium" style={{ color: team2Color }}>
                    {performance.game.awayTeam}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="w-3 h-3" />
                  <span>{performance.game.venue}</span>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Key Statistics</div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(performance.player.stats).map(([stat, value]) => (
                    value && (
                      <div
                        key={stat}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {getStatDisplay(stat, value)}
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Performance Description */}
              <div className="mt-4 text-gray-600">
                {performance.description}
              </div>

              {/* View Details Button */}
              <button
                onClick={() => setSelectedPerformance(performance)}
                className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                View Game Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Performance Details Modal */}
      <AnimatePresence>
        {selectedPerformance && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedPerformance(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-xl font-bold">Memorable Performance</h2>
                  </div>
                  <button
                    onClick={() => setSelectedPerformance(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                {/* Player Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedPerformance.player.name}</h3>
                  <div className="text-gray-600">{selectedPerformance.player.position}</div>
                </div>

                {/* Game Info */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-center">
                      <div className="font-semibold" style={{ color: team1Color }}>
                        {selectedPerformance.game.homeTeam}
                      </div>
                      <div className="text-2xl font-bold">
                        {selectedPerformance.game.score.home}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-gray-400">VS</div>
                    <div className="text-center">
                      <div className="font-semibold" style={{ color: team2Color }}>
                        {selectedPerformance.game.awayTeam}
                      </div>
                      <div className="text-2xl font-bold">
                        {selectedPerformance.game.score.away}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedPerformance.game.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedPerformance.game.venue}</span>
                    </div>
                    {selectedPerformance.game.weather && (
                      <div>{selectedPerformance.game.weather}</div>
                    )}
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Performance Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedPerformance.player.stats).map(([stat, value]) => (
                      value && (
                        <div key={stat} className="bg-blue-50 rounded-lg p-3">
                          <div className="text-sm text-blue-600">
                            {stat.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-xl font-bold text-blue-700">
                            {value}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Game Highlights */}
                {selectedPerformance.game.highlights.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Game Highlights</h4>
                    <div className="space-y-3">
                      {selectedPerformance.game.highlights.map((highlight, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600 mb-1">
                            Q{highlight.quarter} - {highlight.time}
                          </div>
                          <div>{highlight.description}</div>
                          {highlight.score && (
                            <div className="text-sm text-gray-600 mt-1">
                              Score: {highlight.score.home} - {highlight.score.away}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
