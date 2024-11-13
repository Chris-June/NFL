import React, { useState, useRef, useEffect } from 'react';
import { Search, X, User, Trophy, History, Calendar } from 'lucide-react';
import { Player } from '../types';
import { currentRoster } from '../data/currentRoster';
import { achievements } from '../data/achievements';
import { superBowlDetails } from '../data/superBowlDetails';
import { conferenceChampionships } from '../data/conferenceChampionships';

interface SearchResult {
  type: 'player' | 'achievement' | 'game';
  title: string;
  subtitle: string;
  year?: number;
  icon: typeof User | typeof Trophy | typeof History;
  data: any;
}

interface SearchBarProps {
  onPlayerClick: (player: Player) => void;
  onGameClick: (game: any) => void;
  teamColors: {
    primary: string;
    secondary: string;
    accent?: string;
  };
}

export function SearchBar({ onPlayerClick, onGameClick, teamColors }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const search = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const normalizedQuery = searchQuery.toLowerCase();

    // Search players
    currentRoster.forEach(player => {
      if (
        player.name.toLowerCase().includes(normalizedQuery) ||
        player.position.toLowerCase().includes(normalizedQuery) ||
        player.number.toString().includes(normalizedQuery)
      ) {
        searchResults.push({
          type: 'player',
          title: player.name,
          subtitle: `#${player.number} · ${player.position}`,
          icon: User,
          data: player
        });
      }
    });

    // Search achievements
    Object.entries(achievements).forEach(([key, achievement]) => {
      if (
        achievement.title.toLowerCase().includes(normalizedQuery) ||
        achievement.value.toString().includes(normalizedQuery)
      ) {
        searchResults.push({
          type: 'achievement',
          title: achievement.title,
          subtitle: `${achievement.value} total`,
          icon: Trophy,
          data: achievement
        });
      }
    });

    // Search Super Bowl games
    superBowlDetails.forEach(game => {
      if (
        game.opponent.toLowerCase().includes(normalizedQuery) ||
        game.year.toString().includes(normalizedQuery) ||
        game.score.includes(normalizedQuery)
      ) {
        searchResults.push({
          type: 'game',
          title: `Super Bowl ${game.year}`,
          subtitle: `vs ${game.opponent} · ${game.score}`,
          year: game.year,
          icon: History,
          data: game
        });
      }
    });

    // Search Conference Championships
    conferenceChampionships.forEach(game => {
      if (
        game.opponent.toLowerCase().includes(normalizedQuery) ||
        game.year.toString().includes(normalizedQuery) ||
        game.score.includes(normalizedQuery)
      ) {
        searchResults.push({
          type: 'game',
          title: `${game.year} NFC Championship`,
          subtitle: `vs ${game.opponent} · ${game.score}`,
          year: game.year,
          icon: History,
          data: game
        });
      }
    });

    setResults(searchResults);
  };

  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'player') {
      onPlayerClick(result.data);
    } else if (result.type === 'game') {
      onGameClick(result.data);
    }
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative z-50">
      <div className="relative">
        <input
          type="text"
          placeholder="Search players, achievements, games..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            search(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 bg-white border rounded-lg focus:outline-none focus:ring-2"
          style={{ 
            borderColor: teamColors.primary,
            boxShadow: isOpen ? `0 0 0 2px ${teamColors.primary}20` : 'none'
          }}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
            >
              <result.icon className="w-5 h-5 text-gray-400" />
              <div>
                <div className="font-medium text-gray-900">{result.title}</div>
                <div className="text-sm text-gray-500">{result.subtitle}</div>
              </div>
              {result.year && (
                <div className="ml-auto flex items-center text-sm text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  {result.year}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}