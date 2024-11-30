import React, { useState } from "react";
import { Header } from "../components/Header";
import { TeamHero } from "../components/TeamHero";
import { StandingsCard } from "../components/StandingsCard";
import { PlayerRoster } from "../components/PlayerRoster";
import { HallOfFame } from "../components/HallOfFame";
import { TeamHistory } from "../components/TeamHistory";
import { ChatWidget } from "../components/ChatWidget";
import { SearchBar } from "../components/SearchBar";
import { PlayerBackgroundModal } from "../components/PlayerBackgroundModal";
import { SuperBowlModal } from "../components/SuperBowlModal";
import { ConferenceChampionshipModal } from "../components/ConferenceChampionshipModal";
import { Player, SuperBowlGame, ConferenceChampionship } from "../types";

// Import Commanders specific data
import { commandersData as teamInfo } from "../data/Conference/NFC/East/Commanders";
import { currentRoster } from "../data/Conference/NFC/East/Commanders/currentRoster";
import { achievements } from "../data/Conference/NFC/East/Commanders/achievements";
import { allTimeStats } from "../data/Conference/NFC/East/Commanders/allTimeStats";
import { historicalStats } from "../data/Conference/NFC/East/Commanders/historicalStats";
import { superBowlDetails } from "../data/Conference/NFC/East/Commanders/superBowlDetails";
import { conferenceChampionships } from "../data/Conference/NFC/East/Commanders/conferenceChampionships";
import { mascots } from "../data/Conference/NFC/East/Commanders/mascots";

export function CommandersPage() {
  // Team specific data
  const team = {
    id: teamInfo.id,
    name: teamInfo.name,
    colors: teamInfo.colors,
    stats: {
      wins: 4,
      losses: 5,
      ties: 0,
      pointsFor: 198,
      pointsAgainst: 241,
      divisionRank: 3
    },
    achievements: achievements,
    historicalStats: historicalStats,
    currentRoster: currentRoster
  };

  // State management
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedSuperBowl, setSelectedSuperBowl] = useState<SuperBowlGame | null>(null);
  const [selectedConference, setSelectedConference] = useState<ConferenceChampionship | null>(null);

  // Handle game click events
  const handleGameClick = (game: SuperBowlGame | ConferenceChampionship) => {
    if ("mvp" in game) {
      setSelectedSuperBowl(game);
    } else {
      setSelectedConference(game);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header team={team} />
      <TeamHero 
        team={team}
        mascots={mascots}
        stats={allTimeStats}
      />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <StandingsCard 
              team={team} 
              currentStats={historicalStats}
              allTimeStats={allTimeStats}
            />
            <SearchBar 
              onPlayerClick={setSelectedPlayer}
              onGameClick={handleGameClick}
              teamColors={team.colors}
            />
          </div>
          
          <div className="mt-8">
            <PlayerRoster 
              roster={currentRoster}
              onPlayerSelect={setSelectedPlayer}
            />
          </div>
          
          <div className="mt-8">
            <HallOfFame 
              achievements={achievements}
              onPlayerSelect={setSelectedPlayer}
            />
          </div>
          
          <div className="mt-8">
            <TeamHistory 
              team={team}
              superBowls={superBowlDetails}
              conferenceChampionships={conferenceChampionships}
              historicalStats={historicalStats}
              onSuperBowlSelect={setSelectedSuperBowl}
              onChampionshipSelect={setSelectedConference}
            />
          </div>
        </div>
        
        <ChatWidget teamId={teamInfo.id} />
      </main>

      {/* Modals */}
      {selectedPlayer && (
        <PlayerBackgroundModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          teamColors={team.colors}
        />
      )}
      
      {selectedSuperBowl && (
        <SuperBowlModal
          game={selectedSuperBowl}
          onClose={() => setSelectedSuperBowl(null)}
          teamColors={team.colors}
        />
      )}
      
      {selectedConference && (
        <ConferenceChampionshipModal
          championship={selectedConference}
          onClose={() => setSelectedConference(null)}
          teamColors={team.colors}
        />
      )}
    </div>
  );
}
