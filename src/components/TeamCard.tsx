import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy, Users, Star, ArrowRight } from 'lucide-react';

interface TeamCardProps {
  team: {
    id: string;
    city: string;
    name: string;
    colors: {
      primary: string;
      secondary: string;
    };
    stats: {
      wins: number;
      losses: number;
      superBowls: number;
    };
  };
  conference: string;
  division: string;
}

export function TeamCard({ team, conference, division }: TeamCardProps) {
  return (
    <motion.a
      href={`/${team.id.toLowerCase()}`}
      className="block bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div
        className="p-6 relative"
        style={{
          background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary})`,
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0L24.172 8.485 26.343 10.657l7.9-7.9h-.828zm5.656 0L29.828 8.485 31.242 9.9l8.485-8.485h-2.83zm5.657 0L35.485 8.485 33.314 10.657l7.9-7.9h2.757zm5.657 0L41.142 8.485 42.556 9.9l8.485-8.485h-2.83zm5.657 0L46.8 8.485 45.385 9.9l7.9-7.9h-2.83zm5.657 0L52.456 8.485 54.627 10.657l7.9-7.9h-2.757zM32 0l1.414 1.414L30.586 4.243 29.171 5.657 27.757 7.071 26.343 8.485 24.929 9.9 23.515 11.314 21.343 13.485 19.172 15.657l-1.414 1.414L0 34.828 1.414 36.242l2.828-2.829 2.829-2.828L4.242 32.757l1.415-1.414 1.414-1.414L9.9 27.515l2.828-2.829 2.829-2.828L13.728 24.03l1.414-1.414 1.414-1.414L19.385 18.03l2.829-2.828 2.828-2.829L23.314 14.03l1.414-1.414 1.414-1.414L28.97 8.03l2.828-2.828L34.627 2.03 32 0zm20.485 0L51.8 1.414l-2.828 2.829-1.414 1.414-1.414 1.414-2.828 2.829-2.829 2.828-1.414 1.414-1.414 1.415-2.828 2.828-2.829 2.828-1.414 1.414-1.414 1.415-2.828 2.828-2.829 2.828-1.414 1.414-1.414 1.415-2.828 2.828-2.829 2.828-1.414 1.414-1.414 1.415L32 60 33.414 58.586l2.829-2.829 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415L60 34.828 58.586 33.414l-2.829 2.829-2.828 2.828L54.243 37.757l-1.414 1.414-1.415 1.414L48.485 43.414l-2.828 2.829-2.829 2.828L44.243 47.757l-1.414 1.414-1.415 1.414L38.485 53.414l-2.828 2.829-2.829 2.828L34.243 57.757 32 60l1.414-1.414 2.829-2.829 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415L60 34.828 58.586 33.414l-2.829 2.829-2.828 2.828L54.243 37.757l-1.414 1.414-1.415 1.414L48.485 43.414l-2.828 2.829-2.829 2.828L44.243 47.757l-1.414 1.414-1.415 1.414L38.485 53.414l-2.828 2.829-2.829 2.828L34.243 57.757 32 60l1.414-1.414 2.829-2.829 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415 2.829-2.828 2.828-2.828 1.414-1.414 1.414-1.415L60 34.828z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative text-white">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-6 h-6" />
            <span className="text-sm font-medium opacity-75">
              {conference} {division}
            </span>
          </div>
          <h4 className="text-lg font-bold mb-1">{team.city}</h4>
          <p className="text-2xl font-bold mb-4">{team.name}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 mt-4 bg-black/20 rounded-lg p-3">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Trophy className="w-4 h-4" />
                <span className="text-sm">{team.stats.superBowls}</span>
              </div>
              <span className="text-xs opacity-75">Super Bowls</span>
            </div>
            <div className="text-center border-l border-white/20">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-4 h-4" />
                <span className="text-sm">{team.stats.wins}</span>
              </div>
              <span className="text-xs opacity-75">Wins</span>
            </div>
            <div className="text-center border-l border-white/20">
              <div className="flex items-center justify-center gap-1">
                <Users className="w-4 h-4" />
                <span className="text-sm">{team.stats.losses}</span>
              </div>
              <span className="text-xs opacity-75">Losses</span>
            </div>
          </div>
        </div>
      </div>

      {/* View Details Section */}
      <div className="bg-white px-6 py-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-900">View Team Details</span>
          <ArrowRight className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </motion.a>
  );
}
