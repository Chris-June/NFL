import React from 'react';
import { X, Trophy, User, Star, Clock, MapPin, Users } from 'lucide-react';
import { SuperBowlGame } from '../types';

interface SuperBowlModalProps {
  game: SuperBowlGame;
  onClose: () => void;
  teamColors: {
    primary: string;
    secondary: string;
  };
}

export function SuperBowlModal({ game, onClose, teamColors }: SuperBowlModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div 
          className="p-6 sticky top-0 z-10"
          style={{
            background: `linear-gradient(135deg, ${teamColors.primary}, ${teamColors.secondary})`
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-bold text-white">Super Bowl {game.year}</h2>
                <p className="text-white/80">Cowboys vs {game.opponent}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Game Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">Final Score</span>
              </div>
              <p className="text-2xl font-bold">{game.gameStats.finalScore}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="font-semibold">Venue</span>
              </div>
              <p className="text-lg">{game.venue}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Attendance</span>
              </div>
              <p className="text-lg">{game.gameStats.attendance}</p>
            </div>
          </div>

          {/* MVP Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold">MVP</h3>
            </div>
            <div className="flex items-center gap-4">
              <User className="w-12 h-12 text-gray-400" />
              <div>
                <p className="text-lg font-semibold">{game.mvp.name}</p>
                <p className="text-gray-600">{game.mvp.stats}</p>
              </div>
            </div>
          </div>

          {/* Key Players */}
          <div>
            <h3 className="text-xl font-bold mb-4">Key Players</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {game.keyPlayers.map((player, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold">{player.name}</p>
                  <p className="text-sm text-gray-600">{player.position}</p>
                  <p className="text-sm mt-2">{player.stats}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Game Highlights */}
          <div>
            <h3 className="text-xl font-bold mb-4">Game Highlights</h3>
            <div className="space-y-4">
              {game.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{highlight.quarter} Quarter</p>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}