import { useState, useEffect } from 'react';
import {
  GamePrediction,
  PlayPrediction,
  FanEngagement,
  TacticalAnalysis
} from '../types/ai';
import AIService from '../services/aiService';
import { useInterval } from './useInterval';

interface UseGameAIResult {
  gamePrediction: GamePrediction | null;
  playPrediction: PlayPrediction | null;
  fanEngagement: FanEngagement | null;
  tacticalAnalysis: TacticalAnalysis | null;
  isLoading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

export const useGameAI = (gameId: string): UseGameAIResult => {
  const [gamePrediction, setGamePrediction] = useState<GamePrediction | null>(null);
  const [playPrediction, setPlayPrediction] = useState<PlayPrediction | null>(null);
  const [fanEngagement, setFanEngagement] = useState<FanEngagement | null>(null);
  const [tacticalAnalysis, setTacticalAnalysis] = useState<TacticalAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const aiService = AIService.getInstance();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const [
        gamePredictionData,
        playPredictionData,
        fanEngagementData,
        tacticalAnalysisData
      ] = await Promise.all([
        aiService.getGamePrediction(gameId),
        aiService.getPlayPrediction(gameId),
        aiService.getFanEngagement(gameId),
        aiService.getTacticalAnalysis(gameId)
      ]);

      setGamePrediction(gamePredictionData);
      setPlayPrediction(playPredictionData);
      setFanEngagement(fanEngagementData);
      setTacticalAnalysis(tacticalAnalysisData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch AI analysis');
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, [gameId]);

  // Refresh data every 30 seconds
  useInterval(() => {
    fetchData();
  }, 30000);

  return {
    gamePrediction,
    playPrediction,
    fanEngagement,
    tacticalAnalysis,
    isLoading,
    error,
    refreshData: fetchData
  };
};
