export interface FantasyPlayer {
  id: string;
  name: string;
  position: 'QB' | 'RB' | 'WR' | 'TE' | 'K' | 'DEF';
  team: string;
  fantasyValue: number; // AI-calculated dollar value
  projectedPoints: number;
  stats: {
    passingYards?: number;
    passingTouchdowns?: number;
    rushingYards?: number;
    rushingTouchdowns?: number;
    receptions?: number;
    receivingYards?: number;
    receivingTouchdowns?: number;
    fieldGoals?: number;
    sacks?: number;
    interceptions?: number;
    fumblesRecovered?: number;
  };
  trends: {
    last3Games: number;
    ros: number; // Rest of season projection
    strengthOfSchedule: number;
  };
  status: 'active' | 'injured' | 'questionable' | 'out';
  news: FantasyNews[];
}

export interface FantasyNews {
  id: string;
  playerId: string;
  timestamp: string;
  title: string;
  content: string;
  impact: 'positive' | 'negative' | 'neutral';
  fantasyValueChange: number;
}

export interface FantasyTeam {
  id: string;
  name: string;
  ownerId: string;
  roster: {
    starters: {
      qb: FantasyPlayer | null;
      rb1: FantasyPlayer | null;
      rb2: FantasyPlayer | null;
      wr1: FantasyPlayer | null;
      wr2: FantasyPlayer | null;
      te: FantasyPlayer | null;
      flex: FantasyPlayer | null;
      k: FantasyPlayer | null;
      def: FantasyPlayer | null;
    };
    bench: FantasyPlayer[];
  };
  totalFantasyValue: number;
  projectedPoints: number;
  record: {
    wins: number;
    losses: number;
    ties: number;
  };
  draftPicks: DraftPick[];
}

export interface DraftPick {
  round: number;
  pick: number;
  originalTeamId: string;
  currentTeamId: string;
}

export interface FantasyLeague {
  id: string;
  name: string;
  teams: FantasyTeam[];
  settings: LeagueSettings;
  schedule: MatchupWeek[];
  draftSettings: DraftSettings;
  waiverSettings: WaiverSettings;
  tradeSettings: TradeSettings;
  season: number;
  status: 'pre_draft' | 'drafting' | 'in_season' | 'completed';
}

export interface LeagueSettings {
  scoringType: 'ppr' | 'half_ppr' | 'standard';
  teamCount: number;
  playoffTeams: number;
  regularSeasonWeeks: number;
  playoffWeeks: number;
  rosterSize: number;
  tradeDeadline: number; // Week number
  voteToVeto: boolean;
  vetoThreshold: number;
}

export interface DraftSettings {
  type: 'snake' | 'auction';
  timePerPick: number; // seconds
  draftDate: string;
  randomizeOrder: boolean;
  allowAutoDraft: boolean;
}

export interface WaiverSettings {
  system: 'faab' | 'priority';
  budget: number; // For FAAB
  clearanceDay: 'wednesday' | 'thursday';
  processTime: string; // HH:mm in UTC
  continuousWaivers: boolean;
}

export interface TradeSettings {
  reviewPeriod: number; // hours
  minValueDifference: number; // Maximum allowed difference in total fantasy value
  allowFuturePicks: boolean;
  maxFutureYears: number;
}

export interface MatchupWeek {
  week: number;
  matchups: {
    team1Id: string;
    team2Id: string;
    team1Score: number;
    team2Score: number;
    completed: boolean;
  }[];
}

export interface TradeOffer {
  id: string;
  proposingTeamId: string;
  receivingTeamId: string;
  offeredPlayers: FantasyPlayer[];
  requestedPlayers: FantasyPlayer[];
  offeredPicks: DraftPick[];
  requestedPicks: DraftPick[];
  status: 'pending' | 'accepted' | 'rejected' | 'vetoed';
  valueBalance: number; // Difference in total fantasy value
  deadline: string;
  votes: {
    teamId: string;
    vote: 'approve' | 'veto';
  }[];
}

export interface WaiverClaim {
  id: string;
  teamId: string;
  playerId: string;
  dropPlayerId?: string;
  bid: number; // For FAAB
  priority: number;
  status: 'pending' | 'processed' | 'failed';
  processDate: string;
}
