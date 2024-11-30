// Add to existing types
export interface ConferenceChampionship {
  year: number;
  opponent: string;
  score: string;
  venue: string;
  seasonRecord: {
    wins: number;
    losses: number;
    divisionRank: number;
  };
  gameStats: {
    attendance: string;
    weather: string;
    finalScore: string;
  };
  keyPlayers: Array<{
    name: string;
    position: string;
    seasonStats: string;
    gameStats: string;
  }>;
  seasonHighlights: Array<{
    category: string;
    description: string;
  }>;
  gameHighlights: Array<{
    quarter: string;
    description: string;
  }>;
}

// Player type definition
export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  yearsWithTeam: string; // e.g., "1989-1999"
  imageUrl?: string;
  college?: string;
  birthplace?: string;
  birthdate?: string;
  height?: string;
  weight?: string;
  achievements?: string[];
  stats?: {
    [key: string]: number | string;
  };
  background?: string;
  careerHighlights?: string[];
  careerStats?: {
    years: string;
    achievements: string[];
    stats: {
      [key: string]: number | string;
    };
  };
  collegeCareer?: {
    college: string;
    years: string;
    stats: {
      [key: string]: number | string;
    };
    achievements: string[];
    awards: string[];
  };
  draftInfo?: {
    year: number;
    round: number;
    pick: number;
    overallPick: number;
    team: string;
  };
  seasonStats?: Array<{
    year: number;
    team: string;
    games: {
      played: number;
      started: number;
    };
    stats: {
      [key: string]: number | string;
    };
    highlights?: Array<{
      quarter: string;
      description: string;
    }>;
    awards?: Array<{
      name: string;
      description: string;
    }>;
  }>;
  isCurrentRoster?: boolean;
  experience?: number;
}

// Team type definition
export interface Team {
  id: string;
  name: string;
  city: string;
  division: string;
  conference: string;
  colors: {
    primary: string;
    secondary: string;
  };
  mascot: string;
  stadium: string;
  imageUrl: string;
  location: string;  // City, State format
}

// Super Bowl Game type definition
export interface SuperBowlGame {
  superBowlNumber: string;
  year: number;
  opponent: string;
  score: string;
  venue: string;
  mvp: {
    name: string;
    stats: string;
  };
  attendance: number;
  gameStats: {
    [key: string]: string | number;
  };
  highlights: Array<{
    quarter: string;
    description: string;
  }>;
  keyPlayers?: Array<{
    name: string;
    position: string;
    stats: string;
  }>;
}

// Team Mascot type definition
export interface TeamMascot {
  name: string;
  description: string;
  history: string;
  imageUrl: string;
}

// TeamInfo type definition
export interface TeamInfo extends Team {
  history: string;
  achievements: {
    superBowls: {
      title: string;
      value: number;
      details: Array<{
        year: number;
        opponent: string;
        score: string;
      }>;
    };
    conferenceChampionships: {
      title: string;
      value: number;
      years: number[];
    };
    divisionTitles: {
      title: string;
      value: number;
      years: number[];
    };
  };
}

// TeamStats type definition
export interface TeamStats {
  overview: Array<{
    label: string;
    value: string;
  }>;
  offense: Array<{
    label: string;
    value: string;
    rank: number;
  }>;
  defense: Array<{
    label: string;
    value: string;
    rank: number;
  }>;
}

// Historical Stats type definition
export interface HistoricalStats {
  rushing: Array<{ year: string; value: number; rank: number }>;
  passing: Array<{ year: string; value: number; rank: number }>;
  scoring: Array<{ year: string; value: number; rank: number }>;
  defense: Array<{ year: string; value: number; rank: number }>;
  turnover: Array<{ year: string; value: number; rank: number }>;
}

// CurrentStats type definition
export interface CurrentStats {
  rushing: Array<{
    year: string;
    value: number;
    rank: number;
  }>;
  passing: Array<{
    year: string;
    value: number;
    rank: number;
  }>;
  scoring: Array<{
    year: string;
    value: number;
    rank: number;
  }>;
  defense: Array<{
    year: string;
    value: number;
    rank: number;
  }>;
  turnover: Array<{
    year: string;
    value: number;
    rank: number;
  }>;
  winPercentage: number;
  conferenceRank: number;
  pointsPerGame: number;
  totalYardsPerGame: number;
}

// Component Props Interfaces
export interface TeamHeroProps {
  team: TeamInfo;
  stats: TeamStats;
  mascots: Record<string, TeamMascot>;
}

export interface StandingsCardProps {
  currentStats: CurrentStats;
  allTimeStats: TeamStats;
}

export interface SearchBarProps {
  onPlayerClick: (player: Player) => void;
  onGameClick: (game: SuperBowlGame | ConferenceChampionship) => void;
  teamColors: {
    primary: string;
    secondary: string;
  };
}

export interface PlayerRosterProps {
  roster: Player[];
  onPlayerSelect: (player: Player) => void;
}

export interface HallOfFameProps {
  achievements: {
    superBowls: {
      title: string;
      value: number;
      details: Array<{
        year: number;
        opponent: string;
        score: string;
      }>;
    };
    conferenceChampionships: {
      title: string;
      value: number;
      years: number[];
    };
    divisionTitles: {
      title: string;
      value: number;
      years: number[];
    };
  };
  onPlayerSelect: (player: Player) => void;
}

export interface TeamHistoryProps {
  team: TeamInfo;
  superBowls: SuperBowlGame[];
  conferenceChampionships: ConferenceChampionship[];
  historicalStats: HistoricalStats;
  onSuperBowlSelect: (game: SuperBowlGame) => void;
  onChampionshipSelect: (championship: ConferenceChampionship) => void;
}

export interface ChatWidgetProps {
  teamId: string;
}