import React from 'react';
import { GamePrediction } from '../../types/ai';
import { motion } from 'framer-motion';

interface GamePredictionCardProps {
  prediction: GamePrediction;
  className?: string;
}

export const GamePredictionCard: React.FC<GamePredictionCardProps> = ({
  prediction,
  className = ''
}) => {
  const confidenceColor = prediction.confidence > 0.7 
    ? 'text-green-600' 
    : prediction.confidence > 0.4 
      ? 'text-yellow-600' 
      : 'text-red-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <h3 className="text-xl font-bold mb-4">Game Prediction</h3>
      
      <div className="flex items-center justify-between mb-6">
        <div className="text-lg font-semibold">
          Predicted Winner: {prediction.predictedWinner}
        </div>
        <div className={`text-lg font-bold ${confidenceColor}`}>
          {Math.round(prediction.confidence * 100)}% Confidence
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Key Factors</h4>
          <ul className="list-disc list-inside space-y-1">
            {prediction.keyFactors.map((factor, index) => (
              <li key={index} className="text-gray-700">{factor}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Offensive Analysis</h4>
            <div className="bg-gray-50 p-3 rounded">
              <div className="mb-2">
                <span className="font-medium">Strengths:</span>
                <ul className="list-disc list-inside">
                  {prediction.matchupAnalysis.offense.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-gray-700">{strength}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-medium">Key Players:</span>
                <ul className="list-disc list-inside">
                  {prediction.matchupAnalysis.offense.keyPlayers.map((player, index) => (
                    <li key={index} className="text-sm text-gray-700">{player}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Defensive Analysis</h4>
            <div className="bg-gray-50 p-3 rounded">
              <div className="mb-2">
                <span className="font-medium">Strengths:</span>
                <ul className="list-disc list-inside">
                  {prediction.matchupAnalysis.defense.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-gray-700">{strength}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-medium">Key Players:</span>
                <ul className="list-disc list-inside">
                  {prediction.matchupAnalysis.defense.keyPlayers.map((player, index) => (
                    <li key={index} className="text-sm text-gray-700">{player}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Special Teams Impact</h4>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-gray-700 mb-2">{prediction.matchupAnalysis.specialTeams.impact}</p>
            <div>
              <span className="font-medium">Key Players:</span>
              <ul className="list-disc list-inside">
                {prediction.matchupAnalysis.specialTeams.keyPlayers.map((player, index) => (
                  <li key={index} className="text-sm text-gray-700">{player}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
