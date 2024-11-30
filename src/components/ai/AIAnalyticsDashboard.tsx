import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GamePredictionCard } from './GamePredictionCard';
import { PlayPredictionCard } from './PlayPredictionCard';
import { FanEngagementCard } from './FanEngagementCard';
import { TacticalAnalysisCard } from './TacticalAnalysisCard';
import { useGameAI } from '../../hooks/useGameAI';

interface AIAnalyticsDashboardProps {
  gameId: string;
  className?: string;
}

export const AIAnalyticsDashboard: React.FC<AIAnalyticsDashboardProps> = ({
  gameId,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'predictions' | 'engagement' | 'tactical'>('predictions');
  const { 
    gamePrediction,
    playPrediction,
    fanEngagement,
    tacticalAnalysis,
    isLoading,
    error
  } = useGameAI(gameId);

  const tabs = [
    { id: 'predictions', label: 'Predictions', icon: '🎯' },
    { id: 'engagement', label: 'Fan Engagement', icon: '👥' },
    { id: 'tactical', label: 'Tactical Analysis', icon: '📊' }
  ] as const;

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        Error loading AI analytics: {error}
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 p-6 rounded-xl ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">AI Game Analytics</h2>
        <div className="flex space-x-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors
                ${activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      ) : (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'predictions' && (
            <div className="space-y-6">
              {gamePrediction && (
                <GamePredictionCard prediction={gamePrediction} />
              )}
              {playPrediction && (
                <PlayPredictionCard prediction={playPrediction} />
              )}
            </div>
          )}

          {activeTab === 'engagement' && fanEngagement && (
            <FanEngagementCard engagement={fanEngagement} />
          )}

          {activeTab === 'tactical' && tacticalAnalysis && (
            <TacticalAnalysisCard analysis={tacticalAnalysis} />
          )}
        </motion.div>
      )}

      <div className="mt-4 text-sm text-gray-500 text-right">
        Powered by NFL IntelliSync AI
      </div>
    </div>
  );
};
