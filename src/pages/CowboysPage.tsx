import React, { useState, useEffect } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedSuperBowl, setSelectedSuperBowl] = useState<SuperBowlGame | null>(null);
  const [selectedChampionship, setSelectedChampionship] = useState<ConferenceChampionship | null>(null);

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener('change', handler);
    return () => darkModeQuery.removeEventListener('change', handler);
  }, []);

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
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-[#F5F7FA] text-[#1A1A1A]'}`}>
      {/* Gradient overlay for dark mode */}
      <div className={`fixed inset-0 pointer-events-none ${
        isDarkMode ? 'bg-gradient-to-br from-[#003594]/20 to-transparent' : ''
      }`} />

      <Header team={teamInfo} />

      {/* Main content */}
      <div className="relative mt-16">
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-[url("/cowboys-pattern-dark.png")]' : 'bg-[url("/cowboys-pattern-light.png")]'
        } opacity-5 pointer-events-none bg-repeat`} />

        <TeamHero 
          team={teamInfo}
          stats={{
            overview: allTimeStats.overview,
            offense: allTimeStats.offense,
            defense: allTimeStats.defense
          }}
          mascots={mascots}
        />
        
        <main className="relative container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className={`p-6 rounded-xl shadow-lg ${
                isDarkMode ? 'bg-[#1E293B] shadow-blue-900/20' : 'bg-white shadow-gray-200/50'
              }`}>
                <SearchBar 
                  onPlayerClick={handlePlayerSelect}
                  onGameClick={handleGameClick}
                  teamColors={teamInfo.colors}
                />
              </div>

              <div className={`p-6 rounded-xl shadow-lg backdrop-blur-sm ${
                isDarkMode ? 'bg-[#1E293B]/90 shadow-blue-900/20' : 'bg-white/90 shadow-gray-200/50'
              }`}>
                <PlayerRoster 
                  roster={currentRoster}
                  onPlayerSelect={handlePlayerSelect}
                />
              </div>

              <div className={`p-6 rounded-xl shadow-lg backdrop-blur-sm ${
                isDarkMode ? 'bg-[#1E293B]/90 shadow-blue-900/20' : 'bg-white/90 shadow-gray-200/50'
              }`}>
                <HallOfFame 
                  team={teamInfo}
                  achievements={achievements}
                  onPlayerSelect={handlePlayerSelect}
                />
              </div>

              <div className={`p-6 rounded-xl shadow-lg backdrop-blur-sm ${
                isDarkMode ? 'bg-[#1E293B]/90 shadow-blue-900/20' : 'bg-white/90 shadow-gray-200/50'
              }`}>
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
            
            {/* Right Column */}
            <div className="space-y-6">
              <div className={`p-6 rounded-xl shadow-lg backdrop-blur-sm ${
                isDarkMode ? 'bg-[#1E293B]/90 shadow-blue-900/20' : 'bg-white/90 shadow-gray-200/50'
              }`}>
                <StandingsCard 
                  currentStats={historicalStats}
                  allTimeStats={{
                    overview: allTimeStats.overview,
                    offense: allTimeStats.offense,
                    defense: allTimeStats.defense
                  }}
                />
              </div>

              <div className={`sticky top-24 p-6 rounded-xl shadow-lg backdrop-blur-sm ${
                isDarkMode ? 'bg-[#1E293B]/90 shadow-blue-900/20' : 'bg-white/90 shadow-gray-200/50'
              }`}>
                <ChatWidget teamId="DAL" />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      {selectedPlayer && (
        <PlayerBackgroundModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
      {selectedSuperBowl && (
        <SuperBowlModal
          game={selectedSuperBowl}
          onClose={() => setSelectedSuperBowl(null)}
        />
      )}
      {selectedChampionship && (
        <ConferenceChampionshipModal
          championship={selectedChampionship}
          onClose={() => setSelectedChampionship(null)}
        />
      )}
    </div>
  );
}
