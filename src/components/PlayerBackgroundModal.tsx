import React from 'react';
import {
  X,
  User,
  GraduationCap,
  MapPin,
  Calendar,
  Trophy,
  Hash,
  Scale,
  Ruler,
  Star,
  Award,
  Scroll,
} from "lucide-react";
import { Player } from "../types";

interface PlayerBackgroundModalProps {
  player: Player;
  onClose: () => void;
  teamColors: {
    primary: string;
    secondary: string;
    accent?: string;
  };
  initialFocus?: string;
}

export function PlayerBackgroundModal({
  player,
  onClose,
  teamColors,
  initialFocus,
}: PlayerBackgroundModalProps) {
  const initialFocusRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (initialFocus && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocus, initialFocusRef]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div 
        ref={initialFocusRef} 
        tabIndex={initialFocus ? 0 : -1}
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div 
          className="p-6 relative"
          style={{
            background: `linear-gradient(135deg, ${teamColors.primary}, ${teamColors.secondary})`,
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-6">
            {/* Player Image */}
            <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              {player.imageUrl ? (
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-16 h-16 text-white/80" />
              )}
            </div>

            {/* Basic Info */}
            <div>
              <h2 className="text-3xl font-bold text-white">{player.name}</h2>
              <div className="flex items-center gap-4 text-white/80 mt-2">
                <div className="flex items-center gap-1">
                  <Hash className="w-4 h-4" />
                  <span>{player.number}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{player.position}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{player.yearsWithTeam}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {player.college && (
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">College</p>
                  <p className="font-medium">{player.college}</p>
                </div>
              </div>
            )}
            {player.birthplace && (
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Birthplace</p>
                  <p className="font-medium">{player.birthplace}</p>
                </div>
              </div>
            )}
            {player.birthdate && (
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Birthdate</p>
                  <p className="font-medium">{player.birthdate}</p>
                </div>
              </div>
            )}
            {player.height && (
              <div className="flex items-center gap-3">
                <Ruler className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Height</p>
                  <p className="font-medium">{player.height}</p>
                </div>
              </div>
            )}
            {player.weight && (
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium">{player.weight}</p>
                </div>
              </div>
            )}
          </div>

          {/* College Career Section */}
          {player.collegeCareer && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                College Career
              </h3>
              <div className="space-y-6">
                {/* College Info */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Scroll className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">College</p>
                      <p className="font-medium">{player.collegeCareer.college}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Years</p>
                      <p className="font-medium">{player.collegeCareer.years}</p>
                    </div>
                  </div>
                </div>

                {/* College Stats */}
                {player.collegeCareer.stats && Object.keys(player.collegeCareer.stats).length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold mb-3 text-gray-700">College Statistics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {Object.entries(player.collegeCareer.stats).map(([key, value], index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-lg shadow-sm"
                          style={{
                            borderLeft: `4px solid ${teamColors.primary}`,
                          }}
                        >
                          <p className="text-sm text-gray-500 capitalize">{key.replace(/_/g, ' ')}</p>
                          <p className="text-lg font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* College Achievements */}
                {player.collegeCareer.achievements && player.collegeCareer.achievements.length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold mb-3 text-gray-700">College Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {player.collegeCareer.achievements.map((achievement, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: `${teamColors.primary}15`,
                            color: teamColors.primary,
                          }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* College Awards */}
                {player.collegeCareer.awards && player.collegeCareer.awards.length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold mb-3 text-gray-700">College Awards</h4>
                    <div className="flex flex-wrap gap-2">
                      {player.collegeCareer.awards.map((award, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1.5 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: `${teamColors.primary}15`,
                            color: teamColors.primary,
                          }}
                        >
                          <Award className="w-4 h-4" />
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Draft Information */}
          {player.draftInfo && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-green-500" />
                Draft Information
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Draft Year</p>
                  <p className="text-lg font-semibold">{player.draftInfo.year}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Round</p>
                  <p className="text-lg font-semibold">{player.draftInfo.round}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Pick in Round</p>
                  <p className="text-lg font-semibold">{player.draftInfo.pick}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Overall Pick</p>
                  <p className="text-lg font-semibold">{player.draftInfo.overallPick}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Team</p>
                  <p className="text-lg font-semibold">{player.draftInfo.team}</p>
                </div>
              </div>
            </div>
          )}

          {/* Season Stats Section for Current Roster Players */}
          {player.isCurrentRoster && player.seasonStats && player.seasonStats.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                NFL Season Statistics
              </h3>
              
              {/* Season Stats Tabs */}
              <div className="space-y-6">
                {player.seasonStats.map((season, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    {/* Season Header */}
                    <div 
                      className="p-4 border-b"
                      style={{
                        backgroundColor: `${teamColors.primary}10`,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <h4 className="text-lg font-semibold" style={{ color: teamColors.primary }}>
                            {season.year} Season
                          </h4>
                          <span className="text-sm text-gray-600">
                            {season.team}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {season.games.played} games played ({season.games.started} started)
                        </div>
                      </div>
                    </div>

                    {/* Season Stats */}
                    <div className="p-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Object.entries(season.stats).map(([key, value], statIndex) => (
                          <div
                            key={statIndex}
                            className="p-3 rounded-lg bg-gray-50"
                          >
                            <p className="text-sm text-gray-500 capitalize">{key.replace(/_/g, ' ')}</p>
                            <p className="text-lg font-semibold">{value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Season Highlights */}
                      {season.highlights && season.highlights.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">Season Highlights</h5>
                          <div className="flex flex-wrap gap-2">
                            {season.highlights.map((highlight, highlightIndex) => (
                              <span
                                key={highlightIndex}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                                style={{
                                  backgroundColor: `${teamColors.primary}15`,
                                  color: teamColors.primary,
                                }}
                              >
                                <Star className="w-4 h-4" />
                                {String(highlight)}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Season Awards */}
                      {season.awards && season.awards.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold mb-2">Awards</h5>
                          <div className="space-y-2">
                            {season.awards.map((award, index) => (
                              <div 
                                key={index} 
                                className="flex items-center gap-2"
                                style={{ color: teamColors.primary }}
                              >
                                <Trophy className="w-5 h-5" />
                                {award.name}: {award.description}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Career Stats Section for Hall of Fame Players */}
          {!player.isCurrentRoster && player.careerStats && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Career Overview
              </h3>
              <div className="space-y-6">
                {/* Years Active */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{player.careerStats.years}</span>
                </div>

                {/* Achievements */}
                {player.careerStats.achievements && (
                  <div>
                    <h4 className="text-md font-semibold mb-3 text-gray-700">Major Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {player.careerStats.achievements.map((achievement, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: `${teamColors.primary}15`,
                            color: teamColors.primary,
                          }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Career Statistics */}
                {player.careerStats.stats && (
                  <div>
                    <h4 className="text-md font-semibold mb-3 text-gray-700">Career Statistics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {Object.entries(player.careerStats.stats).map(([key, value], index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-lg shadow-sm"
                          style={{
                            borderLeft: `4px solid ${teamColors.primary}`,
                          }}
                        >
                          <p className="text-sm text-gray-500 capitalize">{key.replace(/_/g, ' ')}</p>
                          <p className="text-lg font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Regular Stats Section */}
          {player.stats && Object.keys(player.stats).length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Career Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(player.stats).map(([key, value], index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                    style={{
                      borderLeft: `4px solid ${teamColors.primary}`,
                    }}
                  >
                    <p className="text-sm text-gray-500 capitalize">{key.replace(/_/g, ' ')}</p>
                    <p className="text-lg font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {player.achievements && player.achievements.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Achievements
              </h3>
              <div className="flex flex-wrap gap-2">
                {player.achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: `${teamColors.primary}15`,
                      color: teamColors.primary,
                    }}
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Career Highlights */}
          {player.careerHighlights && player.careerHighlights.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Career Highlights</h3>
              <ul className="space-y-3">
                {player.careerHighlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                  >
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Background Section */}
          {player.background && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Background</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {player.background}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
