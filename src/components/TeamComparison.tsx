import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Trophy, Users, Star, TrendingUp, History } from 'lucide-react';
import { nflTeams } from '../data/nflTeams';
import { HeadToHeadStats } from './HeadToHeadStats';

type ComparisonStat = {
  label: string;
  team1Value: number;
  team2Value: number;
  icon: React.ElementType;
  unit?: string;
};

export function TeamComparison() {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [showComparison, setShowComparison] = useState(false);

  // Flatten teams data for dropdown
  const allTeams = Object.entries(nflTeams).flatMap(([conference, divisions]) =>
    Object.entries(divisions).flatMap(([division, teams]) =>
      teams.map(team => ({
        ...team,
        conference,
        division
      }))
    )
  );

  const selectedTeam1 = allTeams.find(team => team.id === team1);
  const selectedTeam2 = allTeams.find(team => team.id === team2);

  const comparisonStats: ComparisonStat[] = selectedTeam1 && selectedTeam2 ? [
    {
      label: 'Super Bowls',
      team1Value: selectedTeam1.stats.superBowls,
      team2Value: selectedTeam2.stats.superBowls,
      icon: Trophy
    },
    {
      label: 'Total Wins',
      team1Value: selectedTeam1.stats.wins,
      team2Value: selectedTeam2.stats.wins,
      icon: Star
    },
    {
      label: 'Win Rate',
      team1Value: Math.round((selectedTeam1.stats.wins / (selectedTeam1.stats.wins + selectedTeam1.stats.losses)) * 100),
      team2Value: Math.round((selectedTeam2.stats.wins / (selectedTeam2.stats.wins + selectedTeam2.stats.losses)) * 100),
      icon: TrendingUp,
      unit: '%'
    },
    {
      label: 'Playoff Appearances',
      team1Value: selectedTeam1.stats.playoffAppearances,
      team2Value: selectedTeam2.stats.playoffAppearances,
      icon: History
    }
  ] : [];

  const handleCompare = () => {
    if (team1 && team2) {
      setShowComparison(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Team Comparison
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Team 1 Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select First Team
            </label>
            <select
              value={team1}
              onChange={(e) => {
                setTeam1(e.target.value);
                setShowComparison(false);
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a team</option>
              {allTeams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.city} {team.name}
                </option>
              ))}
            </select>
          </div>

          {/* Team 2 Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Second Team
            </label>
            <select
              value={team2}
              onChange={(e) => {
                setTeam2(e.target.value);
                setShowComparison(false);
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a team</option>
              {allTeams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.city} {team.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleCompare}
            disabled={!team1 || !team2}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Compare Teams
          </button>
        </div>

        <AnimatePresence>
          {showComparison && selectedTeam1 && selectedTeam2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {/* Team Headers */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto rounded-full mb-2"
                    style={{ backgroundColor: selectedTeam1.colors.primary }}
                  >
                    <Shield className="w-10 h-10 text-white mx-auto mt-3" />
                  </div>
                  <h3 className="font-bold text-lg">
                    {selectedTeam1.city} {selectedTeam1.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedTeam1.conference} {selectedTeam1.division}
                  </p>
                </div>
                <div className="text-center self-center">
                  <span className="text-lg font-bold text-gray-500">VS</span>
                </div>
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto rounded-full mb-2"
                    style={{ backgroundColor: selectedTeam2.colors.primary }}
                  >
                    <Shield className="w-10 h-10 text-white mx-auto mt-3" />
                  </div>
                  <h3 className="font-bold text-lg">
                    {selectedTeam2.city} {selectedTeam2.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedTeam2.conference} {selectedTeam2.division}
                  </p>
                </div>
              </div>

              {/* Stats Comparison */}
              <div className="space-y-6 mb-12">
                {comparisonStats.map((stat, index) => {
                  const team1Percentage = (stat.team1Value / Math.max(stat.team1Value, stat.team2Value)) * 100;
                  const team2Percentage = (stat.team2Value / Math.max(stat.team1Value, stat.team2Value)) * 100;

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <div className="flex items-center justify-center gap-2 mb-4">
                        {React.createElement(stat.icon, {
                          className: "w-5 h-5 text-blue-600"
                        })}
                        <h4 className="font-semibold text-gray-900">{stat.label}</h4>
                      </div>
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-right">
                          <span className="font-bold text-xl">
                            {stat.team1Value}
                            {stat.unit}
                          </span>
                        </div>
                        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${team1Percentage}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute left-0 top-0 h-full bg-blue-600"
                          />
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${team2Percentage}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute right-0 top-0 h-full bg-red-600"
                          />
                        </div>
                        <div className="text-left">
                          <span className="font-bold text-xl">
                            {stat.team2Value}
                            {stat.unit}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Head to Head Stats */}
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                  Head-to-Head History
                </h2>
                <HeadToHeadStats team1={selectedTeam1} team2={selectedTeam2} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
