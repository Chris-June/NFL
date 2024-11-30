import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Users } from 'lucide-react';
import { SeasonMatchup, GameMatchup } from '../types/nfl';

interface SeasonHistoryProps {
  seasons: SeasonMatchup[];
  team1Name: string;
  team2Name: string;
  team1Color: string;
  team2Color: string;
}

export function SeasonHistory({ seasons, team1Name, team2Name, team1Color, team2Color }: SeasonHistoryProps) {
  const [expandedSeason, setExpandedSeason] = useState<number | null>(null);
  const [selectedGame, setSelectedGame] = useState<GameMatchup | null>(null);

  return (
    <div className="space-y-4">
      {seasons.map((season) => (
        <motion.div
          key={season.season}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Season Header */}
          <button
            onClick={() => setExpandedSeason(expandedSeason === season.season ? null : season.season)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="text-lg font-semibold">{season.season} Season</div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{season.seasonSummary.wins}-{season.seasonSummary.losses}-{season.seasonSummary.ties}</span>
                <span>•</span>
                <span>{season.games.length} game{season.games.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedSeason === season.season ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </button>

          {/* Season Details */}
          <AnimatePresence>
            {expandedSeason === season.season && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-gray-200">
                  {/* Season Summary */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Points Scored</div>
                      <div className="text-xl font-semibold">{season.seasonSummary.pointsScored}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Points Allowed</div>
                      <div className="text-xl font-semibold">{season.seasonSummary.pointsAllowed}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Avg Margin</div>
                      <div className="text-xl font-semibold">{season.seasonSummary.averageMargin}</div>
                    </div>
                  </div>

                  {/* Games List */}
                  <div className="space-y-4">
                    {season.games.map((game) => (
                      <div
                        key={game.id}
                        className="relative group"
                      >
                        <button
                          onClick={() => setSelectedGame(selectedGame?.id === game.id ? null : game)}
                          className="w-full text-left bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">{game.date}</span>
                                {game.isPlayoff && (
                                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                                    Playoff
                                  </span>
                                )}
                              </div>
                              <div className="mt-2 font-semibold">
                                {game.homeTeam === team1Name ? (
                                  <span style={{ color: team1Color }}>{team1Name}</span>
                                ) : (
                                  <span style={{ color: team2Color }}>{team2Name}</span>
                                )}
                                {' vs '}
                                {game.awayTeam === team1Name ? (
                                  <span style={{ color: team1Color }}>{team1Name}</span>
                                ) : (
                                  <span style={{ color: team2Color }}>{team2Name}</span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold">
                                {game.score.home} - {game.score.away}
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <MapPin className="w-3 h-3" />
                                <span>{game.venue}</span>
                              </div>
                            </div>
                          </div>

                          {/* Game Details */}
                          <AnimatePresence>
                            {selectedGame?.id === game.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 pt-4 border-t border-gray-200"
                              >
                                {/* Weather and Attendance */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                  {game.weather && (
                                    <div>
                                      <div className="text-sm text-gray-600">Weather</div>
                                      <div className="font-medium">{game.weather}</div>
                                    </div>
                                  )}
                                  <div>
                                    <div className="text-sm text-gray-600">Attendance</div>
                                    <div className="font-medium">{game.attendance.toLocaleString()}</div>
                                  </div>
                                </div>

                                {/* Key Players */}
                                <div className="mb-4">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-4 h-4 text-gray-500" />
                                    <span className="font-medium">Key Performers</span>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    {game.keyPlayers.map((player) => (
                                      <div key={player.id} className="text-sm">
                                        <div className="font-medium">{player.name}</div>
                                        <div className="text-gray-600">{player.position}</div>
                                        {Object.entries(player.stats).map(([stat, value]) => (
                                          value && (
                                            <div key={stat} className="text-gray-600">
                                              {stat.replace(/([A-Z])/g, ' $1').trim()}: {value}
                                            </div>
                                          )
                                        ))}
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Game Highlights */}
                                <div>
                                  <div className="font-medium mb-2">Highlights</div>
                                  <div className="space-y-2">
                                    {game.highlights.map((highlight, index) => (
                                      <div key={index} className="text-sm">
                                        <div className="text-gray-600">
                                          Q{highlight.quarter} - {highlight.time}
                                        </div>
                                        <div>{highlight.description}</div>
                                        {highlight.score && (
                                          <div className="text-gray-600">
                                            Score: {highlight.score.home} - {highlight.score.away}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
