import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Player } from "../types";

interface PlayerRosterProps {
  roster: Player[];
  onPlayerSelect: (player: Player) => void;
}

export function PlayerRoster({ roster, onPlayerSelect }: PlayerRosterProps) {
  // State to control autoplay functionality
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track if a slide transition is ongoing
  const [isTransitioning, setIsTransitioning] = useState(false);
  // State to determine how many cards are visible per view based on screen size
  const [cardsPerView, setCardsPerView] = useState(3);
  // Ref to hold the interval ID for autoplay
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Update cardsPerView based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle autoplay functionality
  useEffect(() => {
    if (isAutoPlay && !isTransitioning) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, isTransitioning]);

  // Handle next slide
  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(roster.length / cardsPerView));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [cardsPerView, isTransitioning, roster.length]);

  // Handle previous slide
  const handlePrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Math.ceil(roster.length / cardsPerView) - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [cardsPerView, isTransitioning, roster.length]);

  // Calculate visible players based on current index and cards per view
  const visiblePlayers = roster.slice(
    currentIndex * cardsPerView,
    (currentIndex + 1) * cardsPerView
  );

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Users className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800">Player Roster</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            {isAutoPlay ? (
              <Pause className="w-5 h-5 text-gray-600" />
            ) : (
              <Play className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-100"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isTransitioning ? "opacity-50" : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {visiblePlayers.map((player, index) => (
            <div
              key={player.id}
              className={`w-full min-w-[${100 / cardsPerView}%] px-2`}
              onClick={() => onPlayerSelect(player)}
            >
              <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="text-lg font-semibold">{player.name}</h3>
                <p className="text-gray-600">{player.position} #{player.number}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <p>{player.height} | {player.weight} lbs</p>
                  <p>Experience: {player.experience}</p>
                  <p>College: {player.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(roster.length / cardsPerView) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
