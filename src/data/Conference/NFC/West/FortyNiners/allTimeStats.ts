import { TeamStats } from '../../../../../types/stats';

export const allTimeStats: TeamStats = {
  regularSeason: {
    wins: 592,
    losses: 504,
    ties: 14,
    winPercentage: 0.540
  },
  playoffs: {
    appearances: 28,
    wins: 33,
    losses: 22,
    winPercentage: 0.600,
    championships: 5,
    championshipYears: [1981, 1984, 1988, 1989, 1994]
  },
  records: {
    pointsScored: {
      season: 505,
      year: 1994
    },
    pointsAllowed: {
      season: 187,
      year: 1984
    }
  }
};
