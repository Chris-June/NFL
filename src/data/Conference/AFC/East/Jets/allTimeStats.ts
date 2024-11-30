import { TeamStats } from '../../../../../types/stats';

export const allTimeStats: TeamStats = {
  regularSeason: {
    wins: 414,
    losses: 527,
    ties: 8,
    winPercentage: 0.440
  },
  playoffs: {
    appearances: 14,
    wins: 12,
    losses: 13,
    winPercentage: 0.480,
    championships: 1,
    championshipYears: [1968]
  },
  records: {
    pointsScored: {
      season: 419,
      year: 1998
    },
    pointsAllowed: {
      season: 187,
      year: 2009
    }
  }
};