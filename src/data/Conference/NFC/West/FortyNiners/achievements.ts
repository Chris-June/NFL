import { TeamAchievements } from '../../../../../types/achievements';

export const achievements: TeamAchievements = {
  overview: {
    totalWins: 592,
    totalLosses: 504,
    winningPercentage: 0.540,
    playoffAppearances: 28,
    divisionTitles: 20,
    conferenceChampionships: 7,
    leagueChampionships: 5
  },
  milestones: [
    {
      year: 1946,
      description: "Team founded and joined the All-America Football Conference"
    },
    {
      year: 1950,
      description: "Joined the NFL after AAFC-NFL merger"
    },
    {
      year: 1971,
      description: "First playoff appearance in the NFL"
    },
    {
      year: 1981,
      description: "Won first Super Bowl championship (Super Bowl XVI)"
    },
    {
      year: 1984,
      description: "Set franchise record with 15 regular season wins"
    },
    {
      year: 1994,
      description: "Won fifth Super Bowl championship (Super Bowl XXIX)"
    },
    {
      year: 2014,
      description: "Opened Levi's Stadium in Santa Clara"
    }
  ],
  records: {
    team: {
      mostWinsInSeason: 15,
      mostPointsInSeason: 505,
      fewestPointsAllowedInSeason: 187,
      longestWinStreak: 15
    },
    individual: {
      passingYards: {
        player: "Jeff Garcia",
        amount: 4278,
        year: 2000
      },
      rushingYards: {
        player: "Frank Gore",
        amount: 1695,
        year: 2006
      },
      receivingYards: {
        player: "Jerry Rice",
        amount: 1848,
        year: 1995
      }
    }
  }
};
