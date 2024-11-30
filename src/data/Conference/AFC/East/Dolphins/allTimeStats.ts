import { TeamStats } from '../../../../../types/stats';

export const allTimeStats: TeamStats = {
  regularSeason: {
    wins: 476,
    losses: 385,
    ties: 4,
    winPercentage: 0.553
  },
  playoffs: {
    appearances: 23,
    wins: 20,
    losses: 21,
    winPercentage: 0.488,
    championships: 2,
    championshipYears: [1972, 1973]
  },
  records: {
    pointsScored: {
      season: 513,
      year: 1984
    },
    pointsAllowed: {
      season: 171,
      year: 1971
    }
  }
};