import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Zap, History, TrendingUp, Trophy } from 'lucide-react';
import { MascotPersonality, MascotInteraction as IMascotInteraction } from '../types/mascot';
import { useMascot } from '../hooks/useMascot';

interface MascotInteractionProps {
  team1Mascot: MascotPersonality;
  team2Mascot: MascotPersonality;
  gameContext?: {
    gameState: string;
    score: {
      home: number;
      away: number;
    };
    currentQuarter: number;
    timeRemaining: string;
  };
}

export function MascotInteraction({
  team1Mascot,
  team2Mascot,
  gameContext
}: MascotInteractionProps) {
  const {
    interactions,
    isTyping,
    generateBanter,
    generateGameAnalysis,
    generatePrediction,
    generateHistoricalContext,
    clearInteractions
  } = useMascot({ team1Mascot, team2Mascot, gameContext });

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case 'excited':
        return 'text-yellow-500';
      case 'happy':
        return 'text-green-500';
      case 'concerned':
        return 'text-orange-500';
      case 'determined':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getTypeIcon = (type: IMascotInteraction['type']) => {
    switch (type) {
      case 'banter':
        return <MessageCircle className="w-4 h-4" />;
      case 'analysis':
        return <TrendingUp className="w-4 h-4" />;
      case 'prediction':
        return <Zap className="w-4 h-4" />;
      case 'history':
        return <History className="w-4 h-4" />;
      case 'rivalry':
        return <Trophy className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <div className="flex flex-wrap gap-3 p-4 bg-white rounded-xl shadow-sm">
        <button
          onClick={generateBanter}
          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2"
          disabled={isTyping}
        >
          <MessageCircle className="w-4 h-4" />
          Mascot Banter
        </button>
        <button
          onClick={generateGameAnalysis}
          className="px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors flex items-center gap-2"
          disabled={isTyping || !gameContext}
        >
          <TrendingUp className="w-4 h-4" />
          Game Analysis
        </button>
        <button
          onClick={generatePrediction}
          className="px-4 py-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors flex items-center gap-2"
          disabled={isTyping}
        >
          <Zap className="w-4 h-4" />
          Predictions
        </button>
        <button
          onClick={generateHistoricalContext}
          className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors flex items-center gap-2"
          disabled={isTyping}
        >
          <History className="w-4 h-4" />
          Historical Context
        </button>
      </div>

      {/* Interaction Display */}
      <div className="space-y-4">
        <AnimatePresence>
          {interactions.map((interaction) => (
            <motion.div
              key={interaction.timestamp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                {getTypeIcon(interaction.type)}
                <span className="capitalize">{interaction.type}</span>
              </div>

              {/* Mascot 1 Message */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center"
                    style={{
                      backgroundColor: team1Mascot.appearance.colors[0],
                      backgroundImage: `url(${team1Mascot.appearance.description})`
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <div className="font-medium mb-1">{team1Mascot.name}</div>
                  <div className={`${getEmotionColor(interaction.mascot1.emotion)}`}>
                    {interaction.mascot1.content}
                  </div>
                </div>
              </div>

              {/* Mascot 2 Message */}
              {interaction.mascot2 && (
                <div className="flex items-start gap-4 pl-8">
                  <div className="flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full bg-cover bg-center"
                      style={{
                        backgroundColor: team2Mascot.appearance.colors[0],
                        backgroundImage: `url(${team2Mascot.appearance.description})`
                      }}
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium mb-1">{team2Mascot.name}</div>
                    <div className={`${getEmotionColor(interaction.mascot2.emotion)}`}>
                      {interaction.mascot2.content}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center gap-2 text-gray-500 p-4"
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
