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