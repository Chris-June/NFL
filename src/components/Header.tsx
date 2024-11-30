import React, { useState } from 'react';
import { Trophy, History, Users, Award, PlayCircle, Star, BarChart2, Clock } from 'lucide-react';
import { TeamInfo } from '../types';
import { StatsModal } from './StatsModal';
import { AllTimeStatsModal } from './AllTimeStatsModal';

interface HeaderProps {
  team: TeamInfo;
}

export function Header({ team }: HeaderProps) {
  const [isStatsModalOpen, setStatsModalOpen] = useState(false);
  const [isAllTimeModalOpen, setAllTimeModalOpen] = useState(false);

  const navItems = [
    { icon: Trophy, label: 'Current Season', href: '#current-season' },
    { icon: History, label: 'History', href: '#history' },
    { icon: PlayCircle, label: 'Highlights', href: '#highlights' },
    { icon: Users, label: 'Players', href: '#players' },
    { icon: Award, label: 'Hall of Fame', href: '#hall-of-fame' },
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        style={{ 
          backgroundImage: `linear-gradient(to right, ${team.colors.primary}, ${team.colors.secondary})`
        }}
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-white">
              <Star className="w-6 h-6" />
              <span className="text-lg font-bold">Dallas Cowboys</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors py-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
              <button
                onClick={() => setStatsModalOpen(true)}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors py-2"
              >
                <BarChart2 className="w-4 h-4" />
                <span className="text-sm font-medium">More Stats</span>
              </button>
              <button
                onClick={() => setAllTimeModalOpen(true)}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors py-2"
              >
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">All Time</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <StatsModal 
        isOpen={isStatsModalOpen}
        onClose={() => setStatsModalOpen(false)}
        team={team}
      />

      <AllTimeStatsModal
        isOpen={isAllTimeModalOpen}
        onClose={() => setAllTimeModalOpen(false)}
        team={team}
      />
    </>
  );
}