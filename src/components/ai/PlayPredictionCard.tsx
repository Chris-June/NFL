import React from 'react';
import { PlayPrediction } from '../../types/ai';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';

interface PlayPredictionCardProps {
  prediction: PlayPrediction;
  className?: string;
}

export const PlayPredictionCard: React.FC<PlayPredictionCardProps> = ({
  prediction,
  className = ''
}) => {
  const probabilityColor = prediction.predictedPlay.probability > 0.7
    ? 'bg-green-100 border-green-500'
    : prediction.predictedPlay.probability > 0.4
      ? 'bg-yellow-100 border-green-500'
      : 'bg-red-100 border-red-500';

  const getPlayTypeIcon = (type: 'run' | 'pass' | 'special') => {
    switch (type) {
      case 'run':
        return '🏃';
      case 'pass':
        return '🏈';
      case 'special':
        return '⚡';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Next Play Prediction</h3>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getPlayTypeIcon(prediction.predictedPlay.type)}</span>
          <span className="font-semibold capitalize">{prediction.predictedPlay.type}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded">
          <div className="text-sm text-gray-600">Down & Distance</div>
          <div className="font-bold">
            {prediction.situation.down} & {prediction.situation.distance}
          </div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded">
          <div className="text-sm text-gray-600">Field Position</div>
          <div className="font-bold">{prediction.situation.fieldPosition}</div>
        </div>
      </div>

      <div className={`border-2 rounded-lg p-4 mb-6 ${probabilityColor}`}>
        <div className="flex justify-between items-center">
          <span className="font-medium">Probability</span>
          <span className="text-lg font-bold">
            {Math.round(prediction.predictedPlay.probability * 100)}%
          </span>
        </div>
        <div className="mt-2">
          <div className="text-sm font-medium mb-1">Likely Formation:</div>
          <div className="bg-white bg-opacity-50 p-2 rounded">
            {prediction.predictedPlay.likelyFormation}
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Key Matchups to Watch</h4>
        <div className="space-y-2">
          {prediction.predictedPlay.keyMatchups.map((matchup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-3 rounded flex items-center space-x-3"
            >
              <span className="text-lg">👥</span>
              <span className="text-gray-700">{matchup}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500 flex items-center justify-end">
        <span className="mr-2">⏱️</span>
        {prediction.situation.timeRemaining} remaining
      </div>
    </motion.div>
  );
};
