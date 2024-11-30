import React, { useState } from "react";
import { TeamHero } from "../components/TeamHero";
import { Header } from "../components/Header";
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

// Import Cowboys specific data
import { cowboysData as teamInfo } from "../data/Conference/NFC/East/Cowboys";
import { currentRoster } from "../data/Conference/NFC/East/Cowboys/currentRoster";
import { achievements } from "../data/Conference/NFC/East/Cowboys/achievements";
import { allTimeStats } from "../data/Conference/NFC/East/Cowboys/allTimeStats";
import { historicalStats } from "../data/Conference/NFC/East/Cowboys/historicalStats";
import { superBowlDetails } from "../data/Conference/NFC/East/Cowboys/superBowlDetails";
import { conferenceChampionships } from "../data/Conference/NFC/East/Cowboys/conferenceChampionships";
import { mascots } from "../data/mascots";

export function CowboysPage() {
  // State to manage the currently selected player, Super Bowl, or conference championship
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedSuperBowl, setSelectedSuperBowl] = useState<SuperBowlGame | null>(null);
  const [selectedChampionship, setSelectedChampionship] = useState<ConferenceChampionship | null>(null);

  // Handle game click from search bar
  const handleGameClick = (game: SuperBowlGame | ConferenceChampionship) => {
    if ('mvp' in game) {
      setSelectedSuperBowl(game as SuperBowlGame);
    } else {
      setSelectedChampionship(game as ConferenceChampionship);
    }
  };

  const handlePlayerSelect = (player: Player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header team={teamInfo} />
      {/* Add margin-top to account for fixed header height */}
      <div className="mt-16"> 
        <TeamHero 
          team={teamInfo}
          stats={{
            overview: allTimeStats.overview,
            offense: allTimeStats.offense,
            defense: allTimeStats.defense
          }}
          mascots={mascots}
        />
        
        <div className="flex-1 overflow-y-auto">
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                <SearchBar 
                  onPlayerClick={handlePlayerSelect}
                  onGameClick={handleGameClick}
                  teamColors={teamInfo.colors}
                />
                <PlayerRoster 
                  roster={currentRoster}
                  onPlayerSelect={handlePlayerSelect}
                />
                <HallOfFame 
                  team={teamInfo}
                  achievements={achievements}
                  onPlayerSelect={handlePlayerSelect}
                />
                <TeamHistory 
                  team={teamInfo}
                  superBowls={superBowlDetails}
                  conferenceChampionships={conferenceChampionships}
                  historicalStats={historicalStats}
                  onSuperBowlSelect={setSelectedSuperBowl}
                  onConferenceSelect={setSelectedChampionship}
                />
              </div>
              
              {/* Right Column */}
              <div className="space-y-8">
                <StandingsCard 
                  currentStats={historicalStats}
                  allTimeStats={{
                    overview: allTimeStats.overview,
                    offense: allTimeStats.offense,
                    defense: allTimeStats.defense
                  }}
                />
                <ChatWidget teamId="DAL" />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Modals */}
      {selectedPlayer && (
        <PlayerBackgroundModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          teamColors={teamInfo.colors}
        />
      )}
      
      {selectedSuperBowl && (
        <SuperBowlModal
          game={selectedSuperBowl}
          onClose={() => setSelectedSuperBowl(null)}
          teamColors={teamInfo.colors}
        />
      )}
      
      {selectedChampionship && (
        <ConferenceChampionshipModal
          championship={selectedChampionship}
          onClose={() => setSelectedChampionship(null)}
          teamColors={teamInfo.colors}
        />
      )}
    </div>
  );
}
