import React from 'react';
import { X, Trophy, Zap, Shield, Award, Users, Calendar } from 'lucide-react';
import { TeamInfo } from '../types';
import { allTimeStats } from '../data/allTimeStats';

interface AllTimeStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: TeamInfo;
}

export function AllTimeStatsModal({ isOpen, onClose, team }: AllTimeStatsModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="bg-gradient-to-r from-[#041E42] to-[#869397] p-6 text-white rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8" />
              <h2 className="text-2xl font-bold">All-Time Franchise Statistics</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-white/80" />
              <span>Est. 1960</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-white/80" />
              <span>500+ Hall of Famers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-white/80" />
              <span>5 Super Bowls</span>
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8">
          {/* Franchise Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allTimeStats.overview.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-[#041E42] to-[#869397] text-white p-6 rounded-xl"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Offensive Stats */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-[#041E42]" />
              <h3 className="text-xl font-bold">All-Time Offensive Stats</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allTimeStats.offense.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-100 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="text-2xl font-bold text-[#041E42] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  {stat.rank && (
                    <div className="text-xs text-gray-500 mt-1">
                      NFL Rank: #{stat.rank}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Defensive Stats */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-[#041E42]" />
              <h3 className="text-xl font-bold">All-Time Defensive Stats</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allTimeStats.defense.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-100 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="text-2xl font-bold text-[#041E42] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  {stat.rank && (
                    <div className="text-xs text-gray-500 mt-1">
                      NFL Rank: #{stat.rank}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}