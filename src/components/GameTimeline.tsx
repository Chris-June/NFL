import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Trophy, Star } from 'lucide-react';
import { GameMatchup } from '../types/nfl';

interface GameTimelineProps {
  games: GameMatchup[];
  team1Name: string;
  team2Name: string;
  team1Color: string;
  team2Color: string;
}

export function GameTimeline({ games, team1Name, team2Name, team1Color, team2Color }: GameTimelineProps) {
  const [selectedGame, setSelectedGame] = useState<GameMatchup | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const sortedGames = [...games].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  useEffect(() => {
    if (timelineRef.current && selectedIndex >= 0) {
      const timelineWidth = timelineRef.current.offsetWidth;
      const itemWidth = 120; // Width of each timeline item
      const scrollPosition = selectedIndex * itemWidth - timelineWidth / 2 + itemWidth / 2;
      timelineRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [selectedIndex]);

  const navigateTimeline = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? Math.max(0, selectedIndex - 1)
      : Math.min(sortedGames.length - 1, selectedIndex + 1);
    setSelectedIndex(newIndex);
    setSelectedGame(sortedGames[newIndex]);
  };

  return (
    <div className="space-y-6">
      {/* Timeline Navigation */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigateTimeline('prev')}
          disabled={selectedIndex === 0}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div 
          ref={timelineRef}
          className="flex-1 overflow-x-hidden"
        >
          <div className="flex gap-4 py-4">
            {sortedGames.map((game, index) => {
              const isWin = (game.homeTeam === team1Name && game.score.home > game.score.away) ||
                          (game.awayTeam === team1Name && game.score.away > game.score.home);
              const isTie = game.score.home === game.score.away;

              return (
                <button
                  key={game.id}
                  onClick={() => {
                    setSelectedGame(game);
                    setSelectedIndex(index);
                  }}
                  className={`flex-shrink-0 w-28 ${selectedIndex === index ? 'scale-110' : ''} transition-transform`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`
                      p-3 rounded-lg text-center cursor-pointer
                      ${selectedIndex === index ? 'ring-2 ring-blue-500' : 'hover:bg-gray-50'}
                      ${isWin ? 'bg-green-50' : isTie ? 'bg-gray-50' : 'bg-red-50'}
                    `}
                  >
                    <div className="text-xs text-gray-600">
                      {new Date(game.date).getFullYear()}
                    </div>
                    <div className="font-bold text-lg">
                      {game.score.home}-{game.score.away}
                    </div>
                    {game.isPlayoff && (
                      <Trophy className="w-4 h-4 mx-auto text-yellow-600" />
                    )}
                  </motion.div>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => navigateTimeline('next')}
          disabled={selectedIndex === sortedGames.length - 1}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Selected Game Details */}
      <AnimatePresence mode="wait">
        {selectedGame && (
          <motion.div
            key={selectedGame.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="grid grid-cols-3 gap-6">
              {/* Team 1 */}
              <div className="text-center">
                <div className="font-semibold" style={{ color: team1Color }}>
                  {team1Name}
                </div>
                <div className="text-3xl font-bold mt-2">
                  {selectedGame.homeTeam === team1Name 
                    ? selectedGame.score.home 
                    : selectedGame.score.away}
                </div>
              </div>

              {/* Game Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedGame.date}</span>
                </div>
                {selectedGame.isPlayoff && (
                  <div className="mt-2 inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                    <Trophy className="w-4 h-4" />
                    Playoff Game
                  </div>
                )}
                <div className="mt-2 text-sm text-gray-600">
                  {selectedGame.venue}
                </div>
              </div>

              {/* Team 2 */}
              <div className="text-center">
                <div className="font-semibold" style={{ color: team2Color }}>
                  {team2Name}
                </div>
                <div className="text-3xl font-bold mt-2">
                  {selectedGame.homeTeam === team2Name 
                    ? selectedGame.score.home 
                    : selectedGame.score.away}
                </div>
              </div>
            </div>

            {/* Key Players */}
            {selectedGame.keyPlayers.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-lg font-semibold mb-4">Key Performers</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedGame.keyPlayers.map((player) => (
                    <div key={player.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="font-medium">{player.name}</div>
                      <div className="text-sm text-gray-600">{player.position}</div>
                      <div className="mt-2 space-y-1">
                        {Object.entries(player.stats).map(([stat, value]) => (
                          value && (
                            <div key={stat} className="text-sm">
                              <span className="text-gray-600">
                                {stat.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              {' '}
                              <span className="font-medium">{value}</span>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Game Highlights */}
            {selectedGame.highlights.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-lg font-semibold mb-4">Game Highlights</div>
                <div className="space-y-4">
                  {selectedGame.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-24 text-sm text-gray-600">
                        Q{highlight.quarter} - {highlight.time}
                      </div>
                      <div>
                        <div className="font-medium">{highlight.description}</div>
                        {highlight.score && (
                          <div className="text-sm text-gray-600 mt-1">
                            Score: {highlight.score.home} - {highlight.score.away}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
