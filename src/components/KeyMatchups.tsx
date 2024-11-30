import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Star, TrendingUp, Award } from 'lucide-react';
import { GameMatchup } from '../types/nfl';

interface KeyMatchup {
  game: GameMatchup;
  significance: string;
  keyPlayers: Array<{
    name: string;
    team: string;
    performance: string;
  }>;
  mediaHighlights?: Array<{
    type: 'video' | 'image';
    url: string;
    caption: string;
  }>;
}

interface KeyMatchupsProps {
  matchups: KeyMatchup[];
  team1Name: string;
  team2Name: string;
  team1Color: string;
  team2Color: string;
}

export function KeyMatchups({
  matchups,
  team1Name,
  team2Name,
  team1Color,
  team2Color
}: KeyMatchupsProps) {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-2xl font-bold">Key Matchups & Rivalries</h2>
      </div>

      {/* Matchups Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {matchups.map((matchup, index) => (
          <motion.div
            key={`${matchup.game.id}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Game Header */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {matchup.game.isPlayoff ? (
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Star className="w-5 h-5 text-blue-500" />
                  )}
                  <div>
                    <div className="text-sm text-gray-600">
                      {matchup.game.isPlayoff ? 'Playoff Game' : 'Regular Season'}
                    </div>
                    <div className="font-semibold">
                      {matchup.game.season} Season
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{matchup.game.date}</span>
                  </div>
                </div>
              </div>

              {/* Game Score */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div className="text-center flex-1">
                    <div className="font-semibold mb-1" style={{ color: team1Color }}>
                      {matchup.game.homeTeam}
                    </div>
                    <div className="text-3xl font-bold">
                      {matchup.game.score.home}
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="text-xl font-bold text-gray-400">VS</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="font-semibold mb-1" style={{ color: team2Color }}>
                      {matchup.game.awayTeam}
                    </div>
                    <div className="text-3xl font-bold">
                      {matchup.game.score.away}
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{matchup.game.venue}</span>
                  {matchup.game.weather && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{matchup.game.weather}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Game Significance */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-600 mb-1">
                  Game Significance
                </div>
                <div className="text-gray-800">
                  {matchup.significance}
                </div>
              </div>

              {/* Key Players */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Key Performers
                </div>
                <div className="space-y-2">
                  {matchup.keyPlayers.map((player, playerIndex) => (
                    <div
                      key={playerIndex}
                      className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg"
                    >
                      <Award className="w-4 h-4 text-yellow-500 mt-1" />
                      <div>
                        <div className="font-medium">{player.name}</div>
                        <div className="text-sm text-gray-600">
                          {player.performance}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Highlights */}
              {matchup.game.highlights.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    Game Highlights
                  </div>
                  <div className="space-y-2">
                    {matchup.game.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="p-2 bg-gray-50 rounded-lg"
                      >
                        <div className="text-sm text-gray-600 mb-1">
                          Q{highlight.quarter} - {highlight.time}
                        </div>
                        <div className="text-gray-800">
                          {highlight.description}
                        </div>
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

              {/* Media Highlights */}
              {matchup.mediaHighlights && matchup.mediaHighlights.length > 0 && (
                <div className="mt-4">
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    Media Highlights
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {matchup.mediaHighlights.map((media, mediaIndex) => (
                      <div key={mediaIndex} className="relative">
                        {media.type === 'image' ? (
                          <img
                            src={media.url}
                            alt={media.caption}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="relative h-32 bg-gray-100 rounded-lg">
                            <video
                              src={media.url}
                              className="w-full h-full object-cover rounded-lg"
                              controls
                            />
                          </div>
                        )}
                        <div className="text-xs text-gray-600 mt-1">
                          {media.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
