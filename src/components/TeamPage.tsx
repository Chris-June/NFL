import React from 'react';
import { motion } from 'framer-motion';
import { TeamInfo } from '../types';
import { TeamLogo } from './TeamLogo';
import { getTeamColors, generateTeamGradient } from '../utils/teamColors';

interface TeamPageProps {
  teamData: TeamInfo;
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const statCard = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.05 },
};

export function TeamPage({ teamData }: TeamPageProps) {
  const { id, name, city, conference, division, stats, colors } = teamData;
  const gradient = generateTeamGradient(colors);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen"
      style={{ background: gradient }}
    >
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mb-8"
            >
              <TeamLogo team={id} size="lg" animate />
            </motion.div>
            
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              {city} {name}
            </motion.h1>
            
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              {conference} {division} Division
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white/10 backdrop-blur-lg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              variants={statCard}
              whileHover="hover"
              className="bg-white/20 backdrop-blur rounded-lg shadow p-6"
            >
              <h3 className="text-lg font-medium text-white">Season Record</h3>
              <p className="mt-2 text-3xl font-semibold text-white">
                {stats.wins}-{stats.losses}
                {stats.ties > 0 ? `-${stats.ties}` : ''}
              </p>
            </motion.div>

            <motion.div
              variants={statCard}
              whileHover="hover"
              className="bg-white/20 backdrop-blur rounded-lg shadow p-6"
            >
              <h3 className="text-lg font-medium text-white">Points</h3>
              <p className="mt-2 text-3xl font-semibold text-white">
                {stats.pointsFor} PF / {stats.pointsAgainst} PA
              </p>
            </motion.div>

            <motion.div
              variants={statCard}
              whileHover="hover"
              className="bg-white/20 backdrop-blur rounded-lg shadow p-6"
            >
              <h3 className="text-lg font-medium text-white">Division Rank</h3>
              <p className="mt-2 text-3xl font-semibold text-white">
                #{stats.divisionRank} in {division}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Sections can be added here */}
      {/* Team History */}
      {/* Current Roster */}
      {/* Recent Games */}
      {/* etc. */}
    </motion.div>
  );
}
