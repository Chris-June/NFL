import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GamePredictionCard } from './GamePredictionCard';
import { PlayPredictionCard } from './PlayPredictionCard';
import { FanEngagementCard } from './FanEngagementCard';
import { TacticalAnalysisCard } from './TacticalAnalysisCard';
import { useGameAI } from '../../hooks/useGameAI';
import { CurrentStats, HistoricalStats } from '../../types';

const TAB_IDS = {
  PREDICTIONS: 'predictions',
  ENGAGEMENT: 'engagement',
  TACTICAL: 'tactical',
  STATS: 'stats'
} as const;

type TabId = typeof TAB_IDS[keyof typeof TAB_IDS];

interface AIAnalyticsDashboardProps {
  teamId: string;
  gameId?: string;
  currentStats?: CurrentStats;
  historicalStats?: HistoricalStats;
  className?: string;
}

export const AIAnalyticsDashboard: React.FC<AIAnalyticsDashboardProps> = ({
  teamId,
  gameId,
  currentStats,
  historicalStats,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<TabId>('predictions');
  const { 
    gamePrediction,
    playPrediction,
    fanEngagement,
    tacticalAnalysis,
    isLoading,
    error
  } = useGameAI(gameId || teamId);

  const tabs = [
    { id: TAB_IDS.PREDICTIONS, label: 'Predictions', icon: '🎯' },
    { id: TAB_IDS.ENGAGEMENT, label: 'Fan Engagement', icon: '👥' },
    { id: TAB_IDS.TACTICAL, label: 'Tactical Analysis', icon: '📊' },
    ...(currentStats || historicalStats ? [{ id: TAB_IDS.STATS, label: 'Team Stats', icon: '📈' }] : [])
  ];

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
        <h2 className="text-2xl font-bold">AI Team Analytics</h2>
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
          {activeTab === TAB_IDS.PREDICTIONS && (
            <div className="space-y-6">
              {gamePrediction && (
                <GamePredictionCard prediction={gamePrediction} />
              )}
              {playPrediction && (
                <PlayPredictionCard prediction={playPrediction} />
              )}
            </div>
          )}

          {activeTab === TAB_IDS.ENGAGEMENT && fanEngagement && (
            <FanEngagementCard engagement={fanEngagement} />
          )}

          {activeTab === TAB_IDS.TACTICAL && tacticalAnalysis && (
            <TacticalAnalysisCard analysis={tacticalAnalysis} />
          )}

          {activeTab === TAB_IDS.STATS && (
            <div className="space-y-4">
              {currentStats && (
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-3">Current Season Stats</h3>
                  {/* Add a component or render current stats details */}
                  <pre>{JSON.stringify(currentStats, null, 2)}</pre>
                </div>
              )}
              {historicalStats && (
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-3">Historical Stats</h3>
                  {/* Add a component or render historical stats details */}
                  <pre>{JSON.stringify(historicalStats, null, 2)}</pre>
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}

      <div className="mt-4 text-sm text-gray-500 text-right">
        Powered by NFL IntelliSync AI
      </div>
    </div>
  );
};
