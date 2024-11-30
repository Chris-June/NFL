import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FantasyApi from '../../services/api/fantasyApi';
import { FantasyPlayer, DraftPick } from '../../types/fantasy';
import { PlayerCard } from './PlayerCard';

interface DraftRoomProps {
  teamId: string;
  onDraftComplete?: () => void;
}

export const DraftRoom: React.FC<DraftRoomProps> = ({ teamId, onDraftComplete }) => {
  const [availablePlayers, setAvailablePlayers] = useState<FantasyPlayer[]>([]);
  const [draftOrder, setDraftOrder] = useState<string[]>([]);
  const [draftPicks, setDraftPicks] = useState<DraftPick[]>([]);
  const [currentPick, setCurrentPick] = useState<number>(0);
  const [isMyTurn, setIsMyTurn] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'rank' | 'name' | 'position'>('rank');
  const [selectedPlayer, setSelectedPlayer] = useState<FantasyPlayer | null>(null);
  const [timer, setTimer] = useState<number>(90); // 90 seconds per pick
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const api = FantasyApi.getInstance();

  useEffect(() => {
    const fetchDraftData = async () => {
      try {
        const [players, order, picks] = await Promise.all([
          api.getAvailablePlayers(),
          api.getDraftOrder(),
          api.getDraftPicks()
        ]);

        setAvailablePlayers(players);
        setDraftOrder(order);
        setDraftPicks(picks);
        setCurrentPick(picks.length);
        setIsMyTurn(order[picks.length % order.length] === teamId);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to fetch draft data:', err);
      }
    };

    fetchDraftData();
  }, [teamId]);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMyTurn && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isMyTurn, timer]);

  const handleDraftPick = async (player: FantasyPlayer) => {
    if (!isMyTurn) return;

    try {
      await api.makeDraftPick(player.id);
      setDraftPicks(prev => [...prev, {
        round: Math.floor(currentPick / draftOrder.length) + 1,
        pick: currentPick % draftOrder.length + 1,
        playerId: player.id,
        teamId
      }]);
      setAvailablePlayers(prev => prev.filter(p => p.id !== player.id));
      setCurrentPick(prev => prev + 1);
      setIsMyTurn(false);
      setTimer(90);
      setSelectedPlayer(null);

      if (currentPick + 1 >= draftOrder.length * 15) { // 15 rounds
        onDraftComplete?.();
      }
    } catch (err) {
      console.error('Failed to make draft pick:', err);
    }
  };

  const filteredPlayers = availablePlayers
    .filter(player => 
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.team.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return a.rank - b.rank;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'position':
          return a.position.localeCompare(b.position);
        default:
          return 0;
      }
    });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">NFL Fantasy Draft Room</h2>
        <div className="text-lg font-semibold">
          Round {Math.floor(currentPick / draftOrder.length) + 1}, 
          Pick {currentPick % draftOrder.length + 1}
        </div>
      </div>

      {/* Draft Timer */}
      {isMyTurn && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-4 p-4 rounded-lg ${
            timer <= 30 ? 'bg-red-100' : 'bg-blue-100'
          }`}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold">Your Turn!</span>
            <span className="text-xl font-bold">{timer}s</span>
          </div>
        </motion.div>
      )}

      {/* Search and Sort Controls */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search players..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortBy}
          onChange={e => setSortBy(e.target.value as 'rank' | 'name' | 'position')}
        >
          <option value="rank">Sort by Rank</option>
          <option value="name">Sort by Name</option>
          <option value="position">Sort by Position</option>
        </select>
      </div>

      {/* Draft Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filteredPlayers.map(player => (
          <motion.div
            key={player.id}
            layoutId={player.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <PlayerCard
              player={player}
              isSelectable={isMyTurn}
              isSelected={selectedPlayer?.id === player.id}
              onClick={() => setSelectedPlayer(player)}
            />
          </motion.div>
        ))}
      </div>

      {/* Draft Pick Confirmation */}
      <AnimatePresence>
        {selectedPlayer && isMyTurn && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg"
          >
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <div>
                <p className="font-semibold">Draft {selectedPlayer.name}?</p>
                <p className="text-sm text-gray-600">
                  {selectedPlayer.position} - {selectedPlayer.team}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-6 py-2 bg-gray-200 rounded-lg"
                  onClick={() => setSelectedPlayer(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={() => handleDraftPick(selectedPlayer)}
                >
                  Confirm Pick
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recent Picks */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Picks</h3>
        <div className="space-y-2">
          {draftPicks.slice(-5).reverse().map((pick, index) => {
            const player = availablePlayers.find(p => p.id === pick.playerId);
            if (!player) return null;

            return (
              <div
                key={pick.playerId}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <span className="font-medium">{player.name}</span>
                  <span className="text-sm text-gray-600 ml-2">
                    {player.position} - {player.team}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Round {pick.round}, Pick {pick.pick}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
