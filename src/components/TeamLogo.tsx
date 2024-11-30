import React from 'react';
import { motion } from 'framer-motion';
import { getTeamColors } from '../utils/teamColors';

interface TeamLogoProps {
  team: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-16 h-16',
  lg: 'w-32 h-32',
};

const defaultAnimation = {
  scale: [1, 1.05, 1],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export function TeamLogo({ team, size = 'md', animate = false }: TeamLogoProps) {
  const teamColors = getTeamColors(team);
  const Component = animate ? motion.div : 'div';

  return (
    <Component
      className={`relative ${sizeClasses[size]}`}
      animate={animate ? defaultAnimation : undefined}
    >
      {/* Fallback text-based logo if image is not available */}
      <div
        className="w-full h-full rounded-full flex items-center justify-center font-bold text-white"
        style={{
          backgroundColor: teamColors.primary,
          border: `2px solid ${teamColors.secondary}`,
          fontSize: size === 'sm' ? '0.75rem' : size === 'md' ? '1rem' : '1.5rem',
        }}
      >
        {team.slice(0, 2).toUpperCase()}
      </div>
      
      {/* Actual team logo image (when available) */}
      <img
        src={`/team-logos/${team}.png`}
        alt={`${team} logo`}
        className="absolute inset-0 w-full h-full object-contain"
        onError={(e) => {
          // Hide the image if it fails to load
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </Component>
  );
}
