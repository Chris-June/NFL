import React from 'react';
import { X, GraduationCap, MapPin, Calendar, School, Trophy, Hash } from 'lucide-react';
import { Player } from '../types';

interface PlayerBackgroundModalProps {
  player: Player;
  onClose: () => void;
  teamColors: {
    primary: string;
    secondary: string;
    accent?: string;
  };
}

export function PlayerBackgroundModal({ player, onClose, teamColors }: PlayerBackgroundModalProps) {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${teamColors.primary}, ${teamColors.secondary})`
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 sticky top-0 z-10" style={gradientStyle}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Hash className="w-8 h-8 text-white" />
                <span className="text-2xl font-bold text-white">{player.number}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{player.name}</h2>
                <p className="text-white/80">{player.position}</p>
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
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Personal Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div>
                  <span className="text-gray-600">Born:</span>
                  <p>{player.background?.birthDate} ({player.background?.age} years)</p>
                </div>
                <div>
                  <span className="text-gray-600">Birthplace:</span>
                  <p className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {player.background?.birthPlace}
                  </p>
                </div>
                <div>
                  <span className="text-gray-600">Height:</span>
                  <p>{player.background?.height}</p>
                </div>
                <div>
                  <span className="text-gray-600">Weight:</span>
                  <p>{player.background?.weight} lbs</p>
                </div>
              </div>
            </div>

            {/* Draft Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Hash className="w-5 h-5 text-green-500" />
                Draft Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div>
                  <span className="text-gray-600">Draft Year:</span>
                  <p>{player.draft?.year}</p>
                </div>
                <div>
                  <span className="text-gray-600">Round:</span>
                  <p>Round {player.draft?.round} (#{player.draft?.overall} Overall)</p>
                </div>
                <div>
                  <span className="text-gray-600">College:</span>
                  <p>{player.background?.college}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education History */}
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <School className="w-5 h-5 text-purple-500" />
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">High School</h4>
                <p>{player.background?.highSchool}</p>
                <p className="text-sm text-gray-600">{player.background?.highSchoolLocation}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">College</h4>
                <p>{player.background?.college}</p>
                <p className="text-sm text-gray-600">{player.background?.collegeYears}</p>
              </div>
            </div>
          </div>

          {/* College Career */}
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-red-500" />
              College Career
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">College Statistics</h4>
                  <div className="space-y-2">
                    {player.collegeStats?.stats.map((stat, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{stat.label}:</span>
                        <span className="font-medium">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Awards & Honors</h4>
                  <div className="space-y-2">
                    {player.collegeStats?.awards.map((award, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}