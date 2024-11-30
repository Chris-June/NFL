import { TeamStats } from '../../../../../types/stats';

export const allTimeStats: TeamStats = {
  regularSeason: {
    wins: 522,
    losses: 504,
    ties: 11,
    winPercentage: 0.509
  },
  playoffs: {
    appearances: 29,
    wins: 17,
    losses: 21,
    winPercentage: 0.447,
    championships: 4,
    championshipYears: [1950, 1954, 1955, 1964]
  },
  records: {
    pointsScored: {
      season: 423,
      year: 1964
    },
    pointsAllowed: {
      season: 204,
      year: 1954
    }
  }
};