import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FantasyApi from '../../services/api/fantasyApi';
import { FantasyPlayer, PlayerStats, PlayerTrends } from '../../types/fantasy';

interface PlayerCardProps {
  player: FantasyPlayer;
  isSelectable?: boolean;
  isSelected?: boolean;
  showDetailedStats?: boolean;
  onClick?: () => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  isSelectable = true,
  isSelected = false,
  showDetailedStats = false,
  onClick
}) => {
  const [stats, setStats] = useState<PlayerStats | null>(null);
  const [trends, setTrends] = useState<PlayerTrends | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const api = FantasyApi.getInstance();

  useEffect(() => {
    if (showDetailedStats || isExpanded) {
      const fetchPlayerData = async () => {
        try {
          const [playerStats, playerTrends] = await Promise.all([
            api.getPlayerStats(player.id),
            api.getPlayerTrends(player.id)
          ]);
          setStats(playerStats);
          setTrends(playerTrends);
        } catch (err) {
          console.error('Failed to fetch player data:', err);
        }
      };

      fetchPlayerData();
    }
  }, [player.id, showDetailedStats, isExpanded]);

  const getPositionColor = (position: string): string => {
    switch (position) {
      case 'QB':
        return 'bg-red-100 text-red-800';
      case 'RB':
        return 'bg-blue-100 text-blue-800';
      case 'WR':
        return 'bg-green-100 text-green-800';
      case 'TE':
        return 'bg-purple-100 text-purple-800';
      case 'K':
        return 'bg-yellow-100 text-yellow-800';
      case 'DEF':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (value: number) => {
    if (value > 0.1) return '↑';
    if (value < -0.1) return '↓';
    return '→';
  };

  const getTrendColor = (value: number): string => {
    if (value > 0.1) return 'text-green-600';
    if (value < -0.1) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <motion.div
      className={`
        relative rounded-lg p-4 cursor-pointer transition-shadow
        ${isSelectable ? 'hover:shadow-lg' : 'cursor-default'}
        ${isSelected ? 'ring-2 ring-blue-500' : 'border'}
        ${player.status === 'injured' ? 'border-red-300' : 'border-gray-200'}
      `}
      onClick={() => {
        if (isSelectable) onClick?.();
        setIsExpanded(!isExpanded);
      }}
      whileHover={isSelectable ? { scale: 1.02 } : undefined}
      whileTap={isSelectable ? { scale: 0.98 } : undefined}
    >
      {/* Player Status Badge */}
      {player.status && player.status !== 'active' && (
        <div className="absolute top-2 right-2">
          <span className={`
            px-2 py-1 rounded-full text-xs font-medium
            ${player.status === 'injured' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}
          `}>
            {player.status.toUpperCase()}
          </span>
        </div>
      )}

      {/* Basic Info */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-lg">{player.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPositionColor(player.position)}`}>
              {player.position}
            </span>
            <span className="text-sm text-gray-600">{player.team}</span>
          </div>
        </div>
        <div className="text-sm font-medium">
          Rank #{player.rank}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        <div className="text-center">
          <p className="text-sm text-gray-600">Proj Pts</p>
          <p className="font-semibold">{player.projectedPoints.toFixed(1)}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Last Week</p>
          <p className="font-semibold">{player.lastWeekPoints?.toFixed(1) || 'N/A'}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Avg</p>
          <p className="font-semibold">{player.averagePoints?.toFixed(1) || 'N/A'}</p>
        </div>
      </div>

      {/* Trends */}
      {trends && (
        <div className="mt-2 pt-2 border-t">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm text-gray-600">Last 3 Games</p>
              <p className={`font-semibold ${getTrendColor(trends.last3Games)}`}>
                {getTrendIcon(trends.last3Games)} {(trends.last3Games * 100).toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">ROS Outlook</p>
              <p className={`font-semibold ${getTrendColor(trends.ros)}`}>
                {getTrendIcon(trends.ros)} {(trends.ros * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Stats */}
      {(showDetailedStats || isExpanded) && stats && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mt-4 pt-4 border-t"
        >
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="font-semibold">{typeof value === 'number' ? value.toFixed(1) : value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
