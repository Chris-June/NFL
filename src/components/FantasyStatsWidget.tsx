import React, { useEffect, useState } from 'react';

interface FantasyStats {
  playerId: string;
  name: string;
  position: string;
  points: number;
  projectedPoints: number;
  stats: {
    passingYards?: number;
    passingTouchdowns?: number;
    rushingYards?: number;
    rushingTouchdowns?: number;
    receptions?: number;
    receivingYards?: number;
    receivingTouchdowns?: number;
  };
}

interface FantasyStatsWidgetProps {
  teamId: string;
  apiKey: string;
}

export function FantasyStatsWidget({ teamId, apiKey }: FantasyStatsWidgetProps) {
  const [players, setPlayers] = useState<FantasyStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string>('ALL');

  useEffect(() => {
    const fetchFantasyStats = async () => {
      try {
        // Replace with your actual fantasy stats API endpoint
        const response = await fetch(`https://api.fantasyfootball.com/v1/stats?team=${teamId}`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch fantasy stats');
        }

        const data = await response.json();
        setPlayers(data.players);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFantasyStats();
  }, [teamId, apiKey]);

  const filteredPlayers = selectedPosition === 'ALL'
    ? players
    : players.filter(player => player.position === selectedPosition);

  if (loading) {
    return (
      <div className="animate-pulse bg-gray-100 rounded-lg p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        <p>Unable to load fantasy stats</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Fantasy Stats</h3>
        <select
          className="border rounded p-1"
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
        >
          <option value="ALL">All Positions</option>
          <option value="QB">Quarterbacks</option>
          <option value="RB">Running Backs</option>
          <option value="WR">Wide Receivers</option>
          <option value="TE">Tight Ends</option>
          <option value="K">Kickers</option>
          <option value="DEF">Defense</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredPlayers.map((player) => (
          <div
            key={player.playerId}
            className="border rounded p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-medium">{player.name}</p>
                <p className="text-sm text-gray-500">{player.position}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">{player.points}</p>
                <p className="text-sm text-gray-500">Projected: {player.projectedPoints}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              {player.stats.passingYards !== undefined && (
                <p>Passing: {player.stats.passingYards} yds</p>
              )}
              {player.stats.passingTouchdowns !== undefined && (
                <p>Pass TD: {player.stats.passingTouchdowns}</p>
              )}
              {player.stats.rushingYards !== undefined && (
                <p>Rushing: {player.stats.rushingYards} yds</p>
              )}
              {player.stats.rushingTouchdowns !== undefined && (
                <p>Rush TD: {player.stats.rushingTouchdowns}</p>
              )}
              {player.stats.receptions !== undefined && (
                <p>Receptions: {player.stats.receptions}</p>
              )}
              {player.stats.receivingYards !== undefined && (
                <p>Receiving: {player.stats.receivingYards} yds</p>
              )}
              {player.stats.receivingTouchdowns !== undefined && (
                <p>Rec TD: {player.stats.receivingTouchdowns}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
