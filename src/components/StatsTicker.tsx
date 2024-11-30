import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Award, Users, Timer } from 'lucide-react';
import { CurrentStats, TeamInfo } from '../types';

interface StatsTickerProps {
  currentStats: CurrentStats;
  team: TeamInfo;
}

export function StatsTicker({ currentStats, team }: StatsTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stats = [
    {
      icon: TrendingUp,
      value: currentStats.winPercentage.toFixed(1) + '%',
      label: 'Win Rate',
      color: `text-[${team.colors.primary}]`,
    },
    {
      icon: Award,
      value: currentStats.conferenceRank.toString(),
      label: 'Conference Rank',
      color: `text-[${team.colors.secondary}]`,
    },
    {
      icon: Users,
      value: currentStats.pointsPerGame.toFixed(1),
      label: 'Points/Game',
      color: `text-[${team.colors.primary}]`,
    },
    {
      icon: Timer,
      value: currentStats.totalYardsPerGame.toFixed(1),
      label: 'Yards/Game',
      color: `text-[${team.colors.secondary}]`,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [stats.length]);

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border-2" style={{ borderColor: team.colors.primary }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          {React.createElement(stats[currentIndex].icon, {
            className: `w-6 h-6 ${stats[currentIndex].color}`,
          })}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">
              {stats[currentIndex].value}
            </span>
            <span className="text-sm text-white/80">
              {stats[currentIndex].label}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
