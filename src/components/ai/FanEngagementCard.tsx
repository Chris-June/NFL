import React from 'react';
import { FanEngagement } from '../../types/ai';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface FanEngagementCardProps {
  engagement: FanEngagement;
  className?: string;
}

export const FanEngagementCard: React.FC<FanEngagementCardProps> = ({
  engagement,
  className = ''
}) => {
  const getTrendingIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      case 'stable':
        return '📊';
    }
  };

  const getEnergyColor = (level: number) => {
    if (level > 7) return 'text-green-600';
    if (level > 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Fan Engagement</h3>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">
            {getTrendingIcon(engagement.sentiment.trending)}
          </span>
          <span className={`font-bold ${getEnergyColor(engagement.crowdEnergy.level)}`}>
            Energy Level: {engagement.crowdEnergy.level}/10
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold mb-3">Top Fan Emotions</h4>
          <div className="space-y-2">
            {engagement.sentiment.topEmotions.map((emotion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-3 rounded flex items-center justify-between"
              >
                <span>{emotion}</span>
                <div className="h-2 bg-blue-200 rounded-full w-24">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${100 - index * 20}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Energy Triggers</h4>
          <div className="space-y-2">
            {engagement.crowdEnergy.triggers.map((trigger, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-3 rounded flex items-center space-x-3"
              >
                <span className="text-lg">⚡</span>
                <span className="text-gray-700">{trigger}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold mb-3">Trending Topics</h4>
        <div className="flex flex-wrap gap-2">
          {engagement.socialBuzz.trending.map((topic, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              #{topic}
            </motion.span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Fan Highlights</h4>
        <div className="space-y-3">
          {engagement.socialBuzz.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="flex items-start space-x-3">
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-gray-700">{highlight}</p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span>❤️ {Math.floor(Math.random() * 1000)}</span>
                    <span>🔁 {Math.floor(Math.random() * 500)}</span>
                    <span>💬 {Math.floor(Math.random() * 100)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500 text-right">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </motion.div>
  );
};
