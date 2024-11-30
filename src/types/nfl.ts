export interface NFLTeamStats {
  wins: number;
  losses: number;
  superBowls: number;
  playoffAppearances: number;
  divisionTitles: number;
  yearFounded: number;
}

export interface NFLTeamColors {
  primary: string;
  secondary: string;
}

export interface PlayerPerformance {
  id: string;
  name: string;
  position: string;
  stats: {
    passingYards?: number;
    passingTouchdowns?: number;
    rushingYards?: number;
    rushingTouchdowns?: number;
    receptions?: number;
    receivingYards?: number;
    receivingTouchdowns?: number;
    tackles?: number;
    sacks?: number;
    interceptions?: number;
  };
}

export interface GameMatchup {
  id: string;
  date: string;
  season: number;
  week: number | string; // string for "Wild Card", "Divisional", etc.
  homeTeam: string;
  awayTeam: string;
  score: {
    home: number;
    away: number;
  };
  venue: string;
  attendance: number;
  weather?: string;
  isPlayoff: boolean;
  keyPlayers: PlayerPerformance[];
  highlights: Array<{
    description: string;
    quarter: number;
    time: string;
    score?: {
      home: number;
      away: number;
    };
  }>;
}

export interface SeasonMatchup {
  season: number;
  games: GameMatchup[];
  seasonSummary: {
    wins: number;
    losses: number;
    ties: number;
    pointsScored: number;
    pointsAllowed: number;
    averageMargin: number;
  };
}

export interface StatisticalTrend {
  period: string; // e.g., "1970-1979", "1980-1989"
  stats: {
    wins: number;
    losses: number;
    ties: number;
    winPercentage: number;
    averagePointsScored: number;
    averagePointsAllowed: number;
    playoffGames: number;
    championships: number;
  };
}

export interface HeadToHeadRecord {
  wins: number;
  losses: number;
  ties: number;
  lastGame: {
    date: string;
    score: {
      winner: number;
      loser: number;
    };
    location: string;
    isPlayoff: boolean;
  };
  playoffRecord: {
    wins: number;
    losses: number;
  };
  longestWinStreak: number;
  totalPoints: {
    scored: number;
    allowed: number;
  };
  significantGames: Array<{
    date: string;
    description: string;
    score: {
      winner: number;
      loser: number;
    };
    location: string;
    isPlayoff: boolean;
  }>;
  seasonHistory: SeasonMatchup[];
  trends: StatisticalTrend[];
  memorablePerformances: Array<{
    player: PlayerPerformance;
    game: GameMatchup;
    description: string;
  }>;
}

export interface NFLTeam {
  id: string;
  city: string;
  name: string;
  abbreviation: string;
  colors: NFLTeamColors;
  stats: NFLTeamStats;
  logo: string;
  headToHead: {
    [teamId: string]: HeadToHeadRecord;
  };
  recentGames: Array<{
    date: string;
    opponent: string;
    isHome: boolean;
    score: {
      team: number;
      opponent: number;
    };
    isPlayoff: boolean;
  }>;
}

export interface NFLDivision {
  [key: string]: NFLTeam[];
}

export interface NFLConference {
  [key: string]: NFLDivision;
}

export interface NFLTeams {
  [key: string]: NFLConference;
}
