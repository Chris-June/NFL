import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FantasyApi from '../../services/api/fantasyApi';
import { useFantasyTeam } from '../../hooks/useFantasyTeam';
import { PlayerCard } from './PlayerCard';
import { FantasyPlayer, WaiverClaim } from '../../types/fantasy';

interface WaiverWireProps {
  teamId: string;
  onClaimSubmitted?: (claim: WaiverClaim) => void;
}

export const WaiverWire: React.FC<WaiverWireProps> = ({ teamId, onClaimSubmitted }) => {
  const {
    team,
    isLoading: isTeamLoading,
    error: teamError,
    submitWaiverClaim
  } = useFantasyTeam(teamId);

  const [availablePlayers, setAvailablePlayers] = useState<FantasyPlayer[]>([]);
  const [recommendations, setRecommendations] = useState<{
    pickups: FantasyPlayer[];
    drops: FantasyPlayer[];
    bidSuggestions: Record<string, number>;
  } | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<FantasyPlayer | null>(null);
  const [dropPlayer, setDropPlayer] = useState<FantasyPlayer | null>(null);
  const [faabBid, setFaabBid] = useState<number>(0);
  const [priority, setPriority] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [positionFilter, setPositionFilter] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'rank' | 'projectedPoints' | 'trends'>('rank');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const api = FantasyApi.getInstance();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [players, recs] = await Promise.all([
          api.getAvailablePlayers(),
          api.getWaiverRecommendations(teamId)
        ]);
        setAvailablePlayers(players);
        setRecommendations(recs);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to fetch waiver data:', err);
      }
    };

    fetchData();
  }, [teamId]);

  const handleSubmitClaim = async () => {
    if (!selectedPlayer || !team) return;

    try {
      const claim = await submitWaiverClaim({
        teamId: team.id,
        playerId: selectedPlayer.id,
        dropPlayerId: dropPlayer?.id,
        priority,
        bid: faabBid
      });

      onClaimSubmitted?.(claim);
      
      // Reset form
      setSelectedPlayer(null);
      setDropPlayer(null);
      setFaabBid(0);
      setPriority(1);
    } catch (err) {
      console.error('Failed to submit waiver claim:', err);
    }
  };

  const filteredPlayers = availablePlayers
    .filter(player => {
      const matchesSearch = 
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.team.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPosition = positionFilter === 'ALL' || player.position === positionFilter;
      return matchesSearch && matchesPosition;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return a.rank - b.rank;
        case 'projectedPoints':
          return b.projectedPoints - a.projectedPoints;
        case 'trends':
          return (b.trends.ros + b.trends.last3Games) - (a.trends.ros + a.trends.last3Games);
        default:
          return 0;
      }
    });

  if (isLoading || isTeamLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (teamError || !team) {
    return (
      <div className="p-4 text-red-500">
        {teamError || 'Failed to load team data'}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Waiver Wire</h2>

      {/* AI Recommendations */}
      {recommendations && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">AI Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommended Pickups */}
            <div>
              <h4 className="text-lg font-medium mb-3">Suggested Pickups</h4>
              <div className="space-y-3">
                {recommendations.pickups.slice(0, 3).map(player => (
                  <div
                    key={player.id}
                    className="p-3 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100"
                    onClick={() => setSelectedPlayer(player)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <p className="text-sm text-gray-600">
                          {player.position} - {player.team}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-700">
                          Bid: {recommendations.bidSuggestions[player.id]}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Proj: {player.projectedPoints.toFixed(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Drops */}
            <div>
              <h4 className="text-lg font-medium mb-3">Consider Dropping</h4>
              <div className="space-y-3">
                {recommendations.drops.slice(0, 3).map(player => (
                  <div
                    key={player.id}
                    className="p-3 bg-red-50 rounded-lg cursor-pointer hover:bg-red-100"
                    onClick={() => setDropPlayer(player)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <p className="text-sm text-gray-600">
                          {player.position} - {player.team}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-700">
                          Trending {(player.trends.ros * 100).toFixed(1)}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Proj: {player.projectedPoints.toFixed(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search players..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={positionFilter}
          onChange={e => setPositionFilter(e.target.value)}
        >
          <option value="ALL">All Positions</option>
          <option value="QB">QB</option>
          <option value="RB">RB</option>
          <option value="WR">WR</option>
          <option value="TE">TE</option>
          <option value="K">K</option>
          <option value="DEF">DEF</option>
        </select>
        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortBy}
          onChange={e => setSortBy(e.target.value as typeof sortBy)}
        >
          <option value="rank">Sort by Rank</option>
          <option value="projectedPoints">Sort by Projected Points</option>
          <option value="trends">Sort by Trends</option>
        </select>
      </div>

      {/* Available Players */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filteredPlayers.map(player => (
          <PlayerCard
            key={player.id}
            player={player}
            isSelectable={true}
            isSelected={selectedPlayer?.id === player.id}
            onClick={() => setSelectedPlayer(player)}
            showDetailedStats={true}
          />
        ))}
      </div>

      {/* Claim Form */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Submit Waiver Claim</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Adding</p>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium">{selectedPlayer.name}</p>
                    <p className="text-sm text-gray-600">
                      {selectedPlayer.position} - {selectedPlayer.team}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Dropping (Optional)</p>
                  {dropPlayer ? (
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="font-medium">{dropPlayer.name}</p>
                      <p className="text-sm text-gray-600">
                        {dropPlayer.position} - {dropPlayer.team}
                      </p>
                    </div>
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      Select a player to drop
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    FAAB Bid (%)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={faabBid}
                    onChange={e => setFaabBid(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Priority
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={priority}
                    onChange={e => setPriority(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  className="px-6 py-2 bg-gray-200 rounded-lg"
                  onClick={() => {
                    setSelectedPlayer(null);
                    setDropPlayer(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={handleSubmitClaim}
                >
                  Submit Claim
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
