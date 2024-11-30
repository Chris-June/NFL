// Player related types
export interface PlayerBackground {
  birthDate: string;
  birthPlace: string;
  age: number;
  height: string;
  weight: number;
  highSchool: string;
  highSchoolLocation: string;
  college: string;
  collegeYears: string;
}

export interface PlayerDraft {
  year: number;
  round: number;
  overall: number;
}

export interface CollegeStats {
  stats: Array<{
    label: string;
    value: string;
  }>;
  awards: string[];
}

export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  imageUrl: string;
  stats: Record<string, string>;
  careerStats?: {
    years: string;
    achievements: string[];
    stats: Record<string, string>;
  };
  background?: PlayerBackground;
  draft?: PlayerDraft;
  collegeStats?: CollegeStats;
}

// Team related types
export interface HistoricalStats {
  currentSeason: {
    record: string;
    divisionStanding: string;
    conferenceStanding: string;
    lastGame: {
      opponent: string;
      result: string;
      score: string;
      date: string;
    };
    nextGame: {
      opponent: string;
      date: string;
      time: string;
      location: string;
    };
  };
  recentSeasons: Array<{
    year: number;
    record: string;
    divisionStanding: string;
    playoffResult?: string;
  }>;
}

export interface TeamStats {
  overview: {
    winPercentage: number;
    totalWins: number;
    totalLosses: number;
    totalTies: number;
    playoffAppearances: number;
    divisionTitles: number;
    conferenceChampionships: number;
    superBowlAppearances: number;
    superBowlWins: number;
  };
  offense: {
    pointsPerGame: number;
    yardsPerGame: number;
    passingYardsPerGame: number;
    rushingYardsPerGame: number;
    turnoversPerGame: number;
  };
  defense: {
    pointsAllowedPerGame: number;
    yardsAllowedPerGame: number;
    passingYardsAllowedPerGame: number;
    rushingYardsAllowedPerGame: number;
    takeawaysPerGame: number;
  };
}

export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  city: string;
  state: string;
  division: string;
  conference: string;
  colors: {
    primary: string;
    secondary: string;
  };
  logo: string;
  established: number;
  stadium: {
    name: string;
    capacity: number;
    location: string;
    surface: string;
    yearOpened: number;
  };
  mascot: string;
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

export interface TeamInfo {
  id: string;
  name: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  imageUrl: string;
  location: string;
  stadium: string;
  achievements: string[];
  stats: {
    wins: number;
    losses: number;
    ties: number;
    winPercentage: number;
    pointsFor: number;
    pointsAgainst: number;
    offense: {
      totalYards: number;
      passingYards: number;
      rushingYards: number;
      turnovers: number;
    };
    defense: {
      totalYardsAllowed: number;
      passingYardsAllowed: number;
      rushingYardsAllowed: number;
      takeaways: number;
    };
  };
  hallOfFame: Array<{
    id: string;
    name: string;
    number: number;
    position: string;
    yearInducted: number;
    achievements: string[];
  }>;
}

export interface Achievement {
  type: string;
  year: number;
  details: string;
  players?: string[];
}

export interface TeamMascot {
  name: string;
  description: string;
  imageUrl: string;
  history: string;
  yearIntroduced: number;
}

export interface Mascot {
  name: string;
  description: string;
  imageUrl: string;
  history: string;
  yearIntroduced: number;
}

export interface SuperBowlGame {
  year: number;
  opponent: string;
  result: string;
  score: string;
  mvp: string;
  location: string;
  highlights: string[];
  keyPlays: string[];
}

export interface ConferenceChampionship {
  year: number;
  opponent: string;
  result: string;
  score: string;
  location: string;
  highlights: string[];
}

export interface StatItem {
  year: string;
  value: number;
  rank?: number;
}

export interface CurrentStats {
  rushing: StatItem[];
  passing: StatItem[];
  scoring: StatItem[];
  defense: StatItem[];
  turnover: StatItem[];
}