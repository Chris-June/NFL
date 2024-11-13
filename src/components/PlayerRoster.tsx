import React, { useState, useEffect, useRef } from 'react';
import { Users, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { TeamInfo } from '../types';
import { PlayerCard } from './PlayerCard';
import { currentRoster } from '../data/currentRoster';

interface PlayerRosterProps {
  team: TeamInfo;
}

export function PlayerRoster({ team }: PlayerRosterProps) {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(currentRoster.length / cardsPerView);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(handleNext, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, currentIndex, totalSlides]);

  const getVisiblePlayers = () => {
    const startIdx = currentIndex * cardsPerView;
    return currentRoster.slice(startIdx, startIdx + cardsPerView);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Current Roster</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleAutoPlay}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isAutoPlay ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isAutoPlay ? (
              <Pause className="w-5 h-5 text-gray-600" />
            ) : (
              <Play className="w-5 h-5 text-gray-600" />
            )}
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
              aria-label="Previous players"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
              aria-label="Next players"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisiblePlayers().map((player) => (
            <div 
              key={player.id}
              className={`transition-all duration-500 ${
                isTransitioning ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <PlayerCard 
                player={player} 
                teamColors={team.colors}
              />
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </div>
  );
}