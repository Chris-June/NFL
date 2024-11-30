import axios from 'axios';
import { 
  FantasyTeam, 
  FantasyPlayer, 
  TradeOffer, 
  WaiverClaim, 
  DraftPick, 
  PlayerStats, 
  PlayerTrends 
} from '../../types/fantasy';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

class FantasyApi {
  private static instance: FantasyApi;

  private constructor() {}

  public static getInstance(): FantasyApi {
    if (!FantasyApi.instance) {
      FantasyApi.instance = new FantasyApi();
    }
    return FantasyApi.instance;
  }

  // Team Management
  async getTeam(teamId: string): Promise<FantasyTeam> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/teams/${teamId}`);
    return response.data;
  }

  async getAllTeams(): Promise<FantasyTeam[]> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/teams`);
    return response.data;
  }

  async updateLineup(teamId: string, starters: FantasyTeam['roster']['starters']): Promise<void> {
    await axios.put(`${API_BASE_URL}/fantasy/teams/${teamId}/lineup`, { starters });
  }

  async updateTeam(teamId: string, team: Partial<FantasyTeam>): Promise<FantasyTeam> {
    const response = await axios.put(`${API_BASE_URL}/fantasy/teams/${teamId}`, team);
    return response.data;
  }

  // Player Management
  async getAvailablePlayers(): Promise<FantasyPlayer[]> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/players/available`);
    return response.data;
  }

  async getPlayer(playerId: string): Promise<FantasyPlayer> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/players/${playerId}`);
    return response.data;
  }

  async getPlayerStats(playerId: string): Promise<PlayerStats> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/players/${playerId}/stats`);
    return response.data;
  }

  async getPlayerTrends(playerId: string): Promise<PlayerTrends> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/players/${playerId}/trends`);
    return response.data;
  }

  // Trade Management
  async proposeTrade(tradeOffer: Omit<TradeOffer, 'id' | 'status' | 'votes'>): Promise<TradeOffer> {
    const response = await axios.post(`${API_BASE_URL}/fantasy/trades`, tradeOffer);
    return response.data;
  }

  async getTradeOffers(teamId: string): Promise<TradeOffer[]> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/trades`, {
      params: { teamId }
    });
    return response.data;
  }

  async getTrade(tradeId: string): Promise<TradeOffer> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/trades/${tradeId}`);
    return response.data;
  }

  async getTeamTrades(teamId: string): Promise<TradeOffer[]> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/teams/${teamId}/trades`);
    return response.data;
  }

  async respondToTrade(tradeId: string, accept: boolean): Promise<void> {
    await axios.put(`${API_BASE_URL}/fantasy/trades/${tradeId}/respond`, { accept });
  }

  async respondToTrade(tradeId: string, accept: boolean): Promise<TradeOffer> {
    const response = await axios.put(`${API_BASE_URL}/fantasy/trades/${tradeId}/respond`, { accept });
    return response.data;
  }

  // Waiver Wire Management
  async submitWaiverClaim(claim: Omit<WaiverClaim, 'id' | 'status' | 'processDate'>): Promise<WaiverClaim> {
    const response = await axios.post(`${API_BASE_URL}/fantasy/waivers`, claim);
    return response.data;
  }

  async getWaiverClaims(teamId: string): Promise<WaiverClaim[]> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/waivers`, {
      params: { teamId }
    });
    return response.data;
  }

  async cancelWaiverClaim(claimId: string): Promise<void> {
    await axios.delete(`${API_BASE_URL}/fantasy/waivers/${claimId}`);
  }

  // Draft Management
  async getDraftOrder(): Promise<string[]> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/draft/order`);
    return response.data;
  }

  async getDraftPicks(): Promise<DraftPick[]> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/draft/picks`);
    return response.data;
  }

  async makeDraftPick(playerId: string): Promise<void> {
    await axios.post(`${API_BASE_URL}/fantasy/draft/pick`, { playerId });
  }

  // AI Recommendations
  async getTradeRecommendations(teamId: string): Promise<{
    targets: FantasyPlayer[];
    valueMap: Record<string, number>;
  }> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/ai/trade-recommendations/${teamId}`);
    return response.data;
  }

  async getWaiverRecommendations(teamId: string): Promise<{
    pickups: FantasyPlayer[];
    drops: FantasyPlayer[];
    bidSuggestions: Record<string, number>;
  }> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/ai/waiver-recommendations/${teamId}`);
    return response.data;
  }

  async getLineupOptimization(teamId: string): Promise<{
    optimal: FantasyTeam['roster']['starters'];
    reasoning: Record<string, string>;
  }> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/ai/lineup-optimization/${teamId}`);
    return response.data;
  }

  async evaluateTradeValue(players: FantasyPlayer[]): Promise<number> {
    const response = await axios.post(`${API_BASE_URL}/fantasy/ai/trade-value`, { players });
    return response.data.value;
  }

  async getTradeRecommendations(teamId: string): Promise<{
    offeredPlayers: FantasyPlayer[];
    requestedPlayers: FantasyPlayer[];
    value: number;
  }[]> {
    const response = await axios.get(`${API_BASE_URL}/fantasy/ai/trade-recommendations/${teamId}`);
    return response.data;
  }
}

export { FantasyApi };
