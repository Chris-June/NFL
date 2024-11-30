import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Award, Users, Timer } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '15.8M',
    label: 'Fantasy Players',
    color: 'text-green-500',
  },
  {
    icon: Award,
    value: '57',
    label: 'Super Bowls',
    color: 'text-yellow-500',
  },
  {
    icon: Users,
    value: '32',
    label: 'Teams',
    color: 'text-blue-500',
  },
  {
    icon: Timer,
    value: 'Live',
    label: 'Updates',
    color: 'text-red-500',
  },
];

export function StatsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-8 py-4">
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
