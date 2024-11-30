import React, { useState } from "react";
import { Award, Trophy, Star, Filter } from "lucide-react";
import { TeamInfo, Player } from "../types"; // 'TeamInfo' includes details about the team, such as team name, colors, and other metadata
import { PlayerCard } from "./PlayerCard";
import { cowboysData } from "../data/Conference/NFC/East/Cowboys";

interface Achievement {
  title: string;
  value: number;
  details?: {
    year: number;
    opponent: string;
    score: string;
  }[];
  years?: number[];
}

interface Achievements {
  superBowls: Achievement;
  conferenceChampionships: Achievement;
  divisionTitles: Achievement;
}

interface HallOfFameProps {
  team: TeamInfo; // Information about the team, including colors and other metadata
  achievements: {
    superBowls: {
      title: string;
      value: number;
      details: {
        year: number;
        opponent: string;
        score: string;
      }[];
    };
    conferenceChampionships: {
      title: string;
      value: number;
      years: number[];
    };
    divisionTitles: {
      title: string;
      value: number;
      years: number[];
    };
  };
  onPlayerSelect: (player: Player | null) => void;
}

export function HallOfFame({ team, achievements, onPlayerSelect }: HallOfFameProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<keyof typeof achievements>("superBowls");

  const renderAchievementDetails = () => {
    const achievement = achievements[selectedAchievement];
    
    if (selectedAchievement === "superBowls" && achievement.details) {
      return (
        <div className="mt-4 space-y-3">
          {achievement.details.map((detail, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Super Bowl {detail.year}</span>
                <span className="text-gray-600">{detail.score}</span>
              </div>
              <p className="text-sm text-gray-500">vs. {detail.opponent}</p>
            </div>
          ))}
        </div>
      );
    }

    if (achievement.years) {
      return (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {achievement.years.map((year) => (
              <span
                key={year}
                className="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-600"
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  // Extract unique positions from the list of Hall of Fame players
  const positions = Array.from(
    new Set(cowboysData.hallOfFame.map((player: Player) => player.position))
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold">Hall of Fame</h2>
        </div>
        {/* Filter Section */}
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select className="text-sm border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Positions</option>
            {positions.map((position, index) => (
              <option key={index} value={String(position)}>
                {String(position)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Object.entries(achievements).map(([key, achievement]) => (
          <button
            key={key}
            onClick={() => setSelectedAchievement(key as keyof typeof achievements)}
            className={`p-4 rounded-lg transition-colors ${
              selectedAchievement === key
                ? "bg-blue-50 border-2 border-blue-200"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              {key === "superBowls" ? (
                <Trophy className="w-5 h-5 text-yellow-500" />
              ) : (
                <Star className="w-5 h-5 text-blue-500" />
              )}
              <span className="text-2xl font-bold">{achievement.value}</span>
            </div>
            <p className="text-sm text-gray-600">{achievement.title}</p>
          </button>
        ))}
      </div>

      {renderAchievementDetails()}

      {/* Player Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cowboysData.hallOfFame.map((player: Player) => (
          <PlayerCard
            key={player.id}
            player={player}
            teamColors={team.colors} // Pass team colors for consistent theming
            onSelect={() => onPlayerSelect(player)}
          />
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">
          The Dallas Cowboys have {cowboysData.hallOfFame.length} members in the
          Pro Football Hall of Fame, representing decades of excellence and
          achievement in NFL history.
        </p>
      </div>
    </div>
  );
}

export default HallOfFame;
