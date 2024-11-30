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

// Import Seahawks specific data
import { seahawksData as teamInfo } from "../data/Conference/NFC/West/Seahawks";
import { currentRoster } from "../data/Conference/NFC/West/Seahawks/currentRoster";
import { achievements } from "../data/Conference/NFC/West/Seahawks/achievements";
import { allTimeStats } from "../data/Conference/NFC/West/Seahawks/allTimeStats";
import { historicalStats } from "../data/Conference/NFC/West/Seahawks/historicalStats";
import { superBowlDetails } from "../data/Conference/NFC/West/Seahawks/superBowlDetails";
import { conferenceChampionships } from "../data/Conference/NFC/West/Seahawks/conferenceChampionships";
import { mascots } from "../data/Conference/NFC/West/Seahawks/mascots";

export function SeahawksPage() {
  // Team specific data
  const team = {
    id: teamInfo.id,
    name: teamInfo.name,
    colors: teamInfo.colors,
    stats: {
      wins: 6,
      losses: 3,
      ties: 0,
      pointsFor: 228,
      pointsAgainst: 213,
      divisionRank: 2
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
      <TeamHero team={team} />

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <SearchBar
            onPlayerClick={setSelectedPlayer}
            onGameClick={handleGameClick}
            teamColors={team.colors}
          />
        </div>

        {/* Current Season Standings */}
        <section id="current-season">
          <StandingsCard
            stats={{
              wins: team.stats.wins,
              losses: team.stats.losses,
              ties: team.stats.ties,
              pointsFor: team.stats.pointsFor,
              pointsAgainst: team.stats.pointsAgainst,
              divisionRank: team.stats.divisionRank,
            }}
            title="Current Season"
          />
        </section>

        {/* Player Roster */}
        <section id="players">
          <PlayerRoster team={team} />
        </section>

        {/* Hall of Fame */}
        <section id="hall-of-fame">
          <HallOfFame team={team} />
        </section>

        {/* Team History */}
        <section id="history">
          <TeamHistory team={team} />
        </section>
      </main>

      {/* Chat Widget */}
      <ChatWidget teamId={teamInfo.id} />

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
