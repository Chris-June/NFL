import React, { useState, useEffect } from 'react';
import { useFantasyTeam } from '../../hooks/useFantasyTeam';
import { FantasyPlayer, TradeOffer, FantasyTeam } from '../../types/fantasy';
import { motion, AnimatePresence } from 'framer-motion';
import { FantasyApi } from '../../services/api/fantasyApi';

interface TradeEvaluatorProps {
  teamId: string;
  onTradeSubmit?: (trade: TradeOffer) => void;
}

export const TradeEvaluator: React.FC<TradeEvaluatorProps> = ({ teamId, onTradeSubmit }) => {
  const {
    team,
    isLoading,
    error,
    proposeTrade,
    evaluateTradeValue
  } = useFantasyTeam(teamId);

  const [selectedPlayers, setSelectedPlayers] = useState<{
    offering: FantasyPlayer[];
    receiving: FantasyPlayer[];
  }>({
    offering: [],
    receiving: []
  });

  const [tradeValues, setTradeValues] = useState<{
    offering: number;
    receiving: number;
  }>({
    offering: 0,
    receiving: 0
  });

  const [evaluation, setEvaluation] = useState<{
    isBalanced: boolean;
    recommendation: string;
  } | null>(null);

  const [teams, setTeams] = useState<FantasyTeam[]>([]);
  const [receivingTeamId, setReceivingTeamId] = useState<string>('');
  const [receivingTeam, setReceivingTeam] = useState<FantasyTeam | null>(null);
  const [isLoadingTeams, setIsLoadingTeams] = useState<boolean>(false);

  const api = FantasyApi.getInstance();

  // Fetch all teams
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setIsLoadingTeams(true);
        const allTeams = await api.getAllTeams();
        setTeams(allTeams);
      } catch (err) {
        console.error('Failed to fetch teams:', err);
      } finally {
        setIsLoadingTeams(false);
      }
    };

    fetchTeams();
  }, []);

  // Fetch receiving team data when selected
  useEffect(() => {
    const fetchReceivingTeam = async () => {
      if (!receivingTeamId) {
        setReceivingTeam(null);
        return;
      }

      try {
        const teamData = await api.getTeam(receivingTeamId);
        setReceivingTeam(teamData);
      } catch (err) {
        console.error('Failed to fetch receiving team:', err);
      }
    };

    fetchReceivingTeam();
  }, [receivingTeamId]);

  // Update trade values when selected players change
  useEffect(() => {
    const updateValues = async () => {
      try {
        const [offeringValue, receivingValue] = await Promise.all([
          evaluateTradeValue(selectedPlayers.offering),
          evaluateTradeValue(selectedPlayers.receiving)
        ]);

        setTradeValues({
          offering: offeringValue,
          receiving: receivingValue
        });

        // Simple evaluation logic - can be enhanced
        const difference = Math.abs(offeringValue - receivingValue);
        const threshold = Math.min(offeringValue, receivingValue) * 0.15;

        setEvaluation({
          isBalanced: difference <= threshold,
          recommendation: difference <= threshold
            ? 'This trade appears fair and balanced.'
            : offeringValue > receivingValue
              ? 'You may be giving up too much value.'
              : 'You may be receiving too much value. The other team might reject this.'
        });
      } catch (err) {
        console.error('Failed to evaluate trade values:', err);
      }
    };

    if (selectedPlayers.offering.length || selectedPlayers.receiving.length) {
      updateValues();
    }
  }, [selectedPlayers, evaluateTradeValue]);

  const handlePlayerSelect = (player: FantasyPlayer, type: 'offering' | 'receiving') => {
    setSelectedPlayers(prev => ({
      ...prev,
      [type]: prev[type].includes(player)
        ? prev[type].filter(p => p.id !== player.id)
        : [...prev[type], player]
    }));
  };

  const handleSubmitTrade = async () => {
    if (!team || !receivingTeam) return;

    try {
      const tradeOffer: Omit<TradeOffer, 'id' | 'status' | 'votes'> = {
        offeredPlayers: selectedPlayers.offering,
        requestedPlayers: selectedPlayers.receiving,
        offeredPicks: [],
        requestedPicks: [],
        proposingTeamId: team.id,
        receivingTeamId: receivingTeam.id,
        expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
        message: ''
      };

      const submittedTrade = await proposeTrade(tradeOffer);
      onTradeSubmit?.(submittedTrade);

      // Reset selections
      setSelectedPlayers({ offering: [], receiving: [] });
      setReceivingTeamId('');
    } catch (err) {
      console.error('Failed to submit trade:', err);
    }
  };

  if (isLoading || isLoadingTeams) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error || !team) {
    return (
      <div className="p-4 text-red-500">
        {error || 'Failed to load team data'}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">AI Trade Evaluator</h2>

      <div className="grid grid-cols-2 gap-8">
        {/* Offering Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Players You're Offering</h3>
          <div className="space-y-2">
            {team.roster.starters && Object.entries(team.roster.starters).map(([position, player]) => (
              player && (
                <motion.div
                  key={player.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedPlayers.offering.includes(player)
                      ? 'bg-blue-100 border-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => handlePlayerSelect(player, 'offering')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{player.name}</span>
                    <span className="text-sm text-gray-600">{position}</span>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>

        {/* Receiving Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Players You're Receiving</h3>
          <div className="space-y-2">
            {receivingTeam && receivingTeam.roster.starters && (
              <>
                {Object.entries(receivingTeam.roster.starters).map(([position, player]) => (
                  player && (
                    <motion.div
                      key={player.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedPlayers.receiving.includes(player)
                          ? 'bg-blue-100 border-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                      onClick={() => handlePlayerSelect(player, 'receiving')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{player.name}</span>
                        <span className="text-sm text-gray-600">{position}</span>
                      </div>
                    </motion.div>
                  )
                ))}
                {receivingTeam.roster.bench.map(player => (
                  player && (
                    <motion.div
                      key={player.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedPlayers.receiving.includes(player)
                          ? 'bg-blue-100 border-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                      onClick={() => handlePlayerSelect(player, 'receiving')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{player.name}</span>
                        <span className="text-sm text-gray-600">BENCH</span>
                      </div>
                    </motion.div>
                  )
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Receiving Team Selection */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Select Receiving Team</h3>
        <select
          className="w-full p-3 rounded-lg border border-gray-300"
          value={receivingTeamId}
          onChange={e => setReceivingTeamId(e.target.value)}
        >
          <option value="">Select a team</option>
          {teams.map(team => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>

      {/* Trade Evaluation */}
      <AnimatePresence>
        {evaluation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`mt-8 p-4 rounded-lg ${
              evaluation.isBalanced ? 'bg-green-100' : 'bg-yellow-100'
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">AI Trade Analysis</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Offering Value</p>
                <p className="text-xl font-bold">{tradeValues.offering.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Receiving Value</p>
                <p className="text-xl font-bold">{tradeValues.receiving.toFixed(1)}</p>
              </div>
            </div>
            <p className="text-gray-700">{evaluation.recommendation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <div className="mt-8 flex justify-end">
        <button
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            selectedPlayers.offering.length && selectedPlayers.receiving.length && receivingTeamId
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleSubmitTrade}
          disabled={!selectedPlayers.offering.length || !selectedPlayers.receiving.length || !receivingTeamId}
        >
          Propose Trade
        </button>
      </div>
    </div>
  );
};
