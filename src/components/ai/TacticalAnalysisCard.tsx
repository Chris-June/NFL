import React from 'react';
import { TacticalAnalysis } from '../../types/ai';
import { motion } from 'framer-motion';

interface TacticalAnalysisCardProps {
  analysis: TacticalAnalysis;
  className?: string;
}

export const TacticalAnalysisCard: React.FC<TacticalAnalysisCardProps> = ({
  analysis,
  className = ''
}) => {
  const getEffectivenessColor = (effectiveness: number) => {
    if (effectiveness > 0.7) return 'text-green-600';
    if (effectiveness > 0.4) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <h3 className="text-xl font-bold mb-6">Tactical Analysis</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold mb-3">Offensive Strategy</h4>
          <div className="space-y-3">
            {analysis.offensiveStrategy.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{strategy.name}</span>
                  <span className={`font-bold ${getEffectivenessColor(strategy.effectiveness)}`}>
                    {Math.round(strategy.effectiveness * 100)}% Effective
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Defensive Strategy</h4>
          <div className="space-y-3">
            {analysis.defensiveStrategy.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{strategy.name}</span>
                  <span className={`font-bold ${getEffectivenessColor(strategy.effectiveness)}`}>
                    {Math.round(strategy.effectiveness * 100)}% Effective
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold mb-3">Key Matchups</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {analysis.keyMatchups.map((matchup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">👥</span>
                  <span className="font-medium">{matchup.players.join(' vs ')}</span>
                </div>
                <span className={`text-sm ${getEffectivenessColor(matchup.advantage)}`}>
                  {matchup.advantageSide} +{Math.round(matchup.advantage * 100)}%
                </span>
              </div>
              <p className="text-gray-700 text-sm">{matchup.analysis}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Situational Analysis</h4>
        <div className="space-y-3">
          {analysis.situationalAnalysis.map((situation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded"
            >
              <div className="flex items-start space-x-3">
                <span className="text-xl mt-1">📊</span>
                <div>
                  <h5 className="font-medium mb-1">{situation.situation}</h5>
                  <p className="text-gray-700 text-sm">{situation.recommendation}</p>
                  {situation.stats && (
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(situation.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="bg-white bg-opacity-50 p-2 rounded">
                          <span className="text-gray-600">{key}:</span>{' '}
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500 text-right">
        Analysis based on last {analysis.analysisTimeframe} of play
      </div>
    </motion.div>
  );
};
