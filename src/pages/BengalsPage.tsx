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

// Import Bengals specific data
import { bengalsData as teamInfo } from "../data/Conference/AFC/North/Bengals";
import { currentRoster } from "../data/Conference/AFC/North/Bengals/currentRoster";
import { achievements } from "../data/Conference/AFC/North/Bengals/achievements";
import { allTimeStats } from "../data/Conference/AFC/North/Bengals/allTimeStats";
import { historicalStats } from "../data/Conference/AFC/North/Bengals/historicalStats";
import { superBowlDetails } from "../data/Conference/AFC/North/Bengals/superBowlDetails";
import { conferenceChampionships } from "../data/Conference/AFC/North/Bengals/conferenceChampionships";
import { mascots } from "../data/Conference/AFC/North/Bengals/mascots";

export function BengalsPage() {
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header team={teamInfo} />
      <main>
        <TeamHero 
          team={teamInfo}
          stats={{
            overview: allTimeStats.overview,
            offense: allTimeStats.offense,
            defense: allTimeStats.defense
          }}
          mascots={mascots}
        />
        
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <StandingsCard 
                currentStats={historicalStats}
                allTimeStats={{
                  overview: allTimeStats.overview,
                  offense: allTimeStats.offense,
                  defense: allTimeStats.defense
                }}
              />
              <SearchBar 
                onPlayerClick={setSelectedPlayer}
                onGameClick={handleGameClick}
                teamColors={teamInfo.colors}
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
                team={teamInfo}
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
                onConferenceSelect={setSelectedChampionship}
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
