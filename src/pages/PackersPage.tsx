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

// Import Packers specific data
import { packersData as teamInfo } from "../data/Conference/NFC/North/Packers";
import { currentRoster } from "../data/Conference/NFC/North/Packers/currentRoster";
import { achievements } from "../data/Conference/NFC/North/Packers/achievements";
import { allTimeStats } from "../data/Conference/NFC/North/Packers/allTimeStats";
import { historicalStats } from "../data/Conference/NFC/North/Packers/historicalStats";
import { superBowlDetails } from "../data/Conference/NFC/North/Packers/superBowlDetails";
import { conferenceChampionships } from "../data/Conference/NFC/North/Packers/conferenceChampionships";
import { mascots } from "../data/Conference/NFC/North/Packers/mascots";

export function PackersPage() {
  // State to manage the currently selected player, Super Bowl, or conference championship
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedSuperBowl, setSelectedSuperBowl] = useState<SuperBowlGame | null>(null);
  const [selectedChampionship, setSelectedChampionship] = useState<ConferenceChampionship | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header team={teamInfo} />
      <main>
        <TeamHero 
          team={teamInfo}
          mascots={mascots}
          stats={allTimeStats}
        />
        
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <StandingsCard 
                team={teamInfo} 
                currentStats={historicalStats}
                allTimeStats={allTimeStats}
              />
              <SearchBar />
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
                team={teamInfo}
                superBowls={superBowlDetails}
                conferenceChampionships={conferenceChampionships}
                historicalStats={historicalStats}
                onSuperBowlSelect={setSelectedSuperBowl}
                onChampionshipSelect={setSelectedChampionship}
              />
            </div>
          </div>
        </div>
        
        <ChatWidget teamId={teamInfo.id} />
      </main>

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
