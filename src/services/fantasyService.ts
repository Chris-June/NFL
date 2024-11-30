import {
  FantasyLeague,
  FantasyPlayer,
  TradeOffer,
  WaiverClaim,
  FantasyTeam,
  DraftPick
} from '../types/fantasy';

class FantasyService {
  private static instance: FantasyService;

  private constructor() {}

  public static getInstance(): FantasyService {
    if (!FantasyService.instance) {
      FantasyService.instance = new FantasyService();
    }
    return FantasyService.instance;
  }

  // AI-powered player value calculation
  private calculatePlayerValue(player: FantasyPlayer): number {
    const baseValue = player.projectedPoints * 2;
    const positionMultiplier = this.getPositionMultiplier(player.position);
    const trendAdjustment = (player.trends.last3Games + player.trends.ros) / 2;
    const scheduleAdjustment = player.trends.strengthOfSchedule;
    
    let value = baseValue * positionMultiplier * (1 + trendAdjustment) * scheduleAdjustment;

    // Adjust for player status
    switch (player.status) {
      case 'injured':
        value *= 0.5;
        break;
      case 'questionable':
        value *= 0.8;
        break;
      case 'out':
        value *= 0.3;
        break;
    }

    return Math.round(value);
  }

  private getPositionMultiplier(position: FantasyPlayer['position']): number {
    switch (position) {
      case 'QB':
        return 1.2;
      case 'RB':
        return 1.5;
      case 'WR':
        return 1.4;
      case 'TE':
        return 1.1;
      case 'K':
        return 0.8;
      case 'DEF':
        return 0.9;
    }
  }

  // Trade evaluation
  async evaluateTrade(tradeOffer: TradeOffer): Promise<{
    isBalanced: boolean;
    valueDifference: number;
    recommendation: string;
  }> {
    const offeredValue = this.calculateTotalValue([
      ...tradeOffer.offeredPlayers,
      ...this.convertPicksToValue(tradeOffer.offeredPicks)
    ]);

    const requestedValue = this.calculateTotalValue([
      ...tradeOffer.requestedPlayers,
      ...this.convertPicksToValue(tradeOffer.requestedPicks)
    ]);

    const valueDifference = Math.abs(offeredValue - requestedValue);
    const maxAllowedDifference = Math.min(offeredValue, requestedValue) * 0.15; // 15% threshold

    return {
      isBalanced: valueDifference <= maxAllowedDifference,
      valueDifference,
      recommendation: this.generateTradeRecommendation(
        offeredValue,
        requestedValue,
        maxAllowedDifference
      )
    };
  }

  private calculateTotalValue(items: (FantasyPlayer | number)[]): number {
    return items.reduce((total, item) => {
      if (typeof item === 'number') {
        return total + item;
      }
      return total + this.calculatePlayerValue(item);
    }, 0);
  }

  private convertPicksToValue(picks: DraftPick[]): number[] {
    return picks.map(pick => {
      const roundValue = Math.max(10 - pick.round, 1) * 10;
      const pickValue = Math.max(13 - (pick.pick % 12), 1);
      return roundValue * pickValue;
    });
  }

  private generateTradeRecommendation(
    offeredValue: number,
    requestedValue: number,
    threshold: number
  ): string {
    const difference = offeredValue - requestedValue;
    const percentageDiff = (difference / Math.min(offeredValue, requestedValue)) * 100;

    if (Math.abs(difference) <= threshold) {
      return 'This trade appears fair and balanced.';
    }

    if (difference > 0) {
      return `The offering team is giving up ${percentageDiff.toFixed(1)}% more value. Consider requesting additional assets.`;
    }

    return `The offering team is receiving ${Math.abs(percentageDiff).toFixed(1)}% more value. Consider offering additional assets.`;
  }

  // Waiver wire processing
  async processWaiverClaims(claims: WaiverClaim[], league: FantasyLeague): Promise<WaiverClaim[]> {
    const sortedClaims = this.sortWaiverClaims(claims, league);
    const processedClaims: WaiverClaim[] = [];

    for (const claim of sortedClaims) {
      const team = league.teams.find(t => t.id === claim.teamId);
      if (!team) continue;

      const success = await this.processWaiverClaim(claim, team, processedClaims);
      if (success) {
        processedClaims.push({
          ...claim,
          status: 'processed'
        });
      } else {
        processedClaims.push({
          ...claim,
          status: 'failed'
        });
      }
    }

    return processedClaims;
  }

  private sortWaiverClaims(claims: WaiverClaim[], league: FantasyLeague): WaiverClaim[] {
    if (league.waiverSettings.system === 'faab') {
      return claims.sort((a, b) => b.bid - a.bid);
    }

    return claims.sort((a, b) => a.priority - b.priority);
  }

  private async processWaiverClaim(
    claim: WaiverClaim,
    team: FantasyTeam,
    processedClaims: WaiverClaim[]
  ): Promise<boolean> {
    // Check if player is already claimed
    const alreadyClaimed = processedClaims.some(
      pc => pc.status === 'processed' && pc.playerId === claim.playerId
    );
    if (alreadyClaimed) return false;

    // Verify roster space or valid drop
    if (claim.dropPlayerId) {
      const dropPlayer = [...Object.values(team.roster.starters), ...team.roster.bench]
        .find(p => p?.id === claim.dropPlayerId);
      if (!dropPlayer) return false;
    } else if (team.roster.bench.length >= 7) {
      return false;
    }

    return true;
  }

  // Draft management
  async initializeDraft(league: FantasyLeague): Promise<void> {
    if (league.status !== 'pre_draft') {
      throw new Error('League is not in pre-draft state');
    }

    // Initialize draft order
    const teamIds = league.teams.map(team => team.id);
    if (league.draftSettings.randomizeOrder) {
      this.shuffleArray(teamIds);
    }

    // Generate draft picks
    const totalRounds = 15; // Standard fantasy draft
    for (let round = 1; round <= totalRounds; round++) {
      const roundTeams = round % 2 === 0 ? [...teamIds].reverse() : teamIds;
      
      roundTeams.forEach((teamId, index) => {
        const team = league.teams.find(t => t.id === teamId);
        if (team) {
          team.draftPicks.push({
            round,
            pick: index + 1,
            originalTeamId: teamId,
            currentTeamId: teamId
          });
        }
      });
    }
  }

  private shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
