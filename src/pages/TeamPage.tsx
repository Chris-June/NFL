import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TeamHero } from '../components/TeamHero';
import { Header } from '../components/Header';
import { StandingsCard } from '../components/StandingsCard';
import { PlayerRoster } from '../components/PlayerRoster';
import { HallOfFame } from '../components/HallOfFame';
import { TeamHistory } from '../components/TeamHistory';
import { ChatWidget } from '../components/ChatWidget';
import { SearchBar } from '../components/SearchBar';
import { PlayerBackgroundModal } from '../components/PlayerBackgroundModal';
import { SuperBowlModal } from '../components/SuperBowlModal';
import { ConferenceChampionshipModal } from '../components/ConferenceChampionshipModal';
import { teamData } from '../data/teams';
import { Player, SuperBowlGame, ConferenceChampionship } from '../types';

export function TeamPage() {
  const { teamId } = useParams<{ teamId: string }>();
  const team = teamData.find(t => t.id === teamId);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedSuperBowl, setSelectedSuperBowl] = useState<SuperBowlGame | null>(null);
  const [selectedConference, setSelectedConference] = useState<ConferenceChampionship | null>(null);

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Team Not Found</h1>
          <p className="text-gray-600">The team you're looking for doesn't exist.</p>
          <a href="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  const handleGameClick = (game: any) => {
    if ('mvp' in game) {
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

        <section id="current-season">
          <StandingsCard 
            stats={{
              wins: team.stats.wins,
              losses: team.stats.losses,
              ties: team.stats.ties,
              pointsFor: team.stats.pointsFor,
              pointsAgainst: team.stats.pointsAgainst,
              divisionRank: team.stats.divisionRank
            }}
            title="Current Season"
          />
        </section>

        <section id="players">
          <PlayerRoster team={team} />
        </section>

        <section id="hall-of-fame">
          <HallOfFame team={team} />
        </section>

        <section id="history">
          <TeamHistory team={team} />
        </section>
      </main>

      <ChatWidget team={team} />

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