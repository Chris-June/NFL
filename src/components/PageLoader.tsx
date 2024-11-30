import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { getTeamColors, generateTeamGradient } from '../utils/teamColors';
import { TeamLogo } from './TeamLogo';

interface PageLoaderProps {
  teamColors?: {
    primary: string;
    secondary: string;
  };
}

export const PageLoader: React.FC<PageLoaderProps> = ({ teamColors }) => {
  const { pathname } = useLocation();
  const team = pathname.slice(1).toLowerCase();
  const primaryColor = teamColors?.primary || getTeamColors(pathname).primary;
  const secondaryColor = teamColors?.secondary || getTeamColors(pathname).secondary;
  const gradient = generateTeamGradient({ primary: primaryColor, secondary: secondaryColor });
  const loadingMessage = getRandomMessage(team);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: gradient,
        color: secondaryColor,
      }}
    >
      <div className="relative">
        <motion.div
          className="relative w-24 h-24"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Football shape loader */}
          <motion.div
            className="absolute inset-0"
            style={{
              borderRadius: '50%',
              border: `4px solid ${primaryColor}`,
              borderTopColor: secondaryColor,
              transformOrigin: 'center'
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Laces */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-8 h-1 bg-gray-300 rounded-full transform rotate-45" />
            <div className="w-8 h-1 bg-gray-300 rounded-full transform -rotate-45" />
          </div>
          
          {/* Team Logo */}
          <TeamLogo team={team} size="lg" animate />
        </motion.div>
        
        {/* Loading text */}
        <motion.p
          className="absolute mt-32 text-lg font-semibold"
          style={{ color: primaryColor }}
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {loadingMessage}
        </motion.p>
      </div>
    </div>
  );
};

const teamMessages: Record<string, string[]> = {
  cowboys: [
    "Saddling up...",
    "Star power loading...",
    "America's Team incoming...",
  ],
  eagles: [
    "Spreading wings...",
    "Flying high...",
    "Soaring to victory...",
  ],
  giants: [
    "Building momentum...",
    "Big Blue loading...",
    "Giant plays incoming...",
  ],
  commanders: [
    "Taking command...",
    "Marching forward...",
    "Commanding the field...",
  ],
  // AFC North
  ravens: [
    "Ravens taking flight...",
    "Flock assembling...",
    "Purple pride loading...",
  ],
  bengals: [
    "Who Dey loading...",
    "Stripes incoming...",
    "Jungle pride rising...",
  ],
  browns: [
    "Dawg Pound loading...",
    "Orange and Brown incoming...",
    "Bark loading...",
  ],
  steelers: [
    "Steel Curtain rising...",
    "Terrible Towels waving...",
    "Steel City pride loading...",
  ],
  // Add more team-specific messages...
};

const getRandomMessage = (team: string): string => {
  const messages = teamMessages[team] || [
    "Loading NFL action...",
    "Getting the latest updates...",
    "Preparing gameday content...",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

export default PageLoader;
