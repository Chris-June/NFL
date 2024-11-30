import React, { useState } from "react";
import { History, Trophy, Award, TrendingUp } from "lucide-react";
import { TeamInfo, SuperBowlGame, ConferenceChampionship } from "../types";
import { SuperBowlModal } from "./SuperBowlModal";
import { ConferenceChampionshipModal } from "./ConferenceChampionshipModal";

interface HistoricalStats {
  rushing: Array<{ year: string; value: number; rank: number }>;
  passing: Array<{ year: string; value: number; rank: number }>;
  scoring: Array<{ year: string; value: number; rank: number }>;
  defense: Array<{ year: string; value: number; rank: number }>;
  turnover: Array<{ year: string; value: number; rank: number }>;
}

interface TeamHistoryProps {
  team: TeamInfo;
  superBowls: SuperBowlGame[];
  conferenceChampionships: ConferenceChampionship[];
  historicalStats: HistoricalStats;
  onSuperBowlSelect: (game: SuperBowlGame | null) => void;
  onConferenceSelect: (game: ConferenceChampionship | null) => void;
}

export function TeamHistory({
  team,
  superBowls,
  conferenceChampionships,
  historicalStats,
  onSuperBowlSelect,
  onConferenceSelect
}: TeamHistoryProps) {
  const [selectedSuperBowl, setSelectedSuperBowl] = useState<SuperBowlGame | null>(null);
  const [selectedConference, setSelectedConference] = useState<ConferenceChampionship | null>(null);
  const [selectedStat, setSelectedStat] = useState<keyof HistoricalStats>("rushing");

  const renderStatChart = () => {
    const stats = historicalStats[selectedStat];
    return (
      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold capitalize">{selectedStat} Statistics</h3>
          <div className="flex space-x-2">
            {(Object.keys(historicalStats) as Array<keyof HistoricalStats>).map((stat) => (
              <button
                key={`stat-button-${stat}`}
                onClick={() => setSelectedStat(stat)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedStat === stat
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {stat}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <div key={`stat-${selectedStat}-${stat.year}-${index}`} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">{stat.year}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Value: {stat.value}</span>
                  <span className="text-gray-600">Rank: #{stat.rank}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <History className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">Team History</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Championships Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h3 className="text-xl font-semibold">Championships</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Super Bowls</h4>
              <div className="space-y-2">
                {superBowls.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => {
                      setSelectedSuperBowl(game);
                      onSuperBowlSelect(game);
                    }}
                    className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Super Bowl {game.year}</span>
                      <span className="text-gray-600">{game.score}</span>
                    </div>
                    <p className="text-sm text-gray-500">vs. {game.opponent}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Conference Championships</h4>
              <div className="space-y-2">
                {conferenceChampionships.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => {
                      setSelectedConference(game);
                      onConferenceSelect(game);
                    }}
                    className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{game.year} {game.conference}</span>
                      <span className="text-gray-600">{game.score}</span>
                    </div>
                    <p className="text-sm text-gray-500">vs. {game.opponent}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Historical Stats Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h3 className="text-xl font-semibold">Historical Statistics</h3>
          </div>
          {renderStatChart()}
        </div>
      </div>

      {selectedSuperBowl && (
        <SuperBowlModal
          game={selectedSuperBowl}
          onClose={() => {
            setSelectedSuperBowl(null);
            onSuperBowlSelect(null);
          }}
          teamColors={team.colors}
        />
      )}

      {selectedConference && (
        <ConferenceChampionshipModal
          game={selectedConference}
          onClose={() => {
            setSelectedConference(null);
            onConferenceSelect(null);
          }}
          teamColors={team.colors}
        />
      )}
    </div>
  );
}

export default TeamHistory;
