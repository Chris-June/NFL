import React, { useState } from "react";
import { History, Trophy, Award, TrendingUp, Star, Calendar } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<'championships' | 'stats'>('championships');

  const renderChampionshipsTab = () => (
    <div className="space-y-6">
      {/* Super Bowls Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h3 className="text-xl font-bold">Super Bowl Championships</h3>
        </div>
        <div className="grid gap-4">
          {superBowls.map((game) => (
            <button
              key={game.id}
              onClick={() => {
                setSelectedSuperBowl(game);
                onSuperBowlSelect(game);
              }}
              className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <div>
                    <h4 className="font-semibold">Super Bowl {game.number}</h4>
                    <p className="text-sm text-gray-600">{game.year}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{game.score}</p>
                  <p className="text-sm text-gray-600">vs. {game.opponent}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Conference Championships Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Award className="w-6 h-6 text-gray-600" />
          <h3 className="text-xl font-bold">Conference Championships</h3>
        </div>
        <div className="grid gap-4">
          {conferenceChampionships.map((championship) => (
            <button
              key={championship.id}
              onClick={() => {
                setSelectedConference(championship);
                onConferenceSelect(championship);
              }}
              className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div>
                    <h4 className="font-semibold">{championship.year} Season</h4>
                    <p className="text-sm text-gray-600">NFC Championship</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{championship.score}</p>
                  <p className="text-sm text-gray-600">vs. {championship.opponent}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStatsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TrendingUp className="w-6 h-6 text-gray-600" />
          <h3 className="text-xl font-bold">Historical Statistics</h3>
        </div>
        <div className="flex space-x-2">
          {(Object.keys(historicalStats) as Array<keyof HistoricalStats>).map((stat) => (
            <button
              key={`stat-button-${stat}`}
              onClick={() => setSelectedStat(stat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStat === stat
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {stat.charAt(0).toUpperCase() + stat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {historicalStats[selectedStat].map((stat, index) => (
          <div 
            key={`stat-${selectedStat}-${stat.year}-${index}`} 
            className="p-4 rounded-lg bg-gray-50"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg font-semibold">{stat.year}</span>
                <span className="ml-4 text-sm text-gray-600">Rank #{stat.rank}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{stat.value}</span>
                <span className="text-sm text-gray-600">yards</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-6">
          <History className="w-6 h-6 text-gray-600" />
          <h2 className="text-2xl font-bold text-gray-800">Team History</h2>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center space-x-6 mb-6 p-6 border-b">
        <button
          onClick={() => setActiveTab('championships')}
          className={`flex items-center space-x-2 pb-2 border-b-2 transition-all duration-300 ${
            activeTab === 'championships' 
              ? 'border-gray-800 text-gray-800' 
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <Trophy className="w-5 h-5" />
          <span className="font-semibold">Championships</span>
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`flex items-center space-x-2 pb-2 border-b-2 transition-all duration-300 ${
            activeTab === 'stats' 
              ? 'border-gray-800 text-gray-800' 
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">Statistics</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'championships' ? renderChampionshipsTab() : renderStatsTab()}
      </div>

      {/* Modals */}
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
