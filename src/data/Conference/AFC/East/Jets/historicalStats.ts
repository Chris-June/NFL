export const historicalStats = {
  hallOfFamePlayers: [
    {
      name: "Joe Namath",
      position: "QB",
      years: "1965-1976",
      inducted: 1985,
      keyStats: {
        passYards: 27057,
        passTD: 170,
        completions: 1836,
        winPercentage: 0.496
      }
    },
    {
      name: "Curtis Martin",
      position: "RB",
      years: "1998-2005",
      inducted: 2012,
      keyStats: {
        rushYards: 14101,
        rushTD: 90,
        receptions: 484,
        receivingYards: 3329
      }
    },
    {
      name: "Don Maynard",
      position: "WR",
      years: "1960-1972",
      inducted: 1987,
      keyStats: {
        receptions: 627,
        receivingYards: 11732,
        receivingTD: 88,
        yardsPerCatch: 18.7
      }
    }
  ],
  legendarySeasons: [
    {
      year: 1968,
      record: "11-3",
      achievement: "Super Bowl III Champions",
      keyPlayers: [
        {
          name: "Joe Namath",
          stats: {
            passYards: 3147,
            passTD: 15,
            rating: 72.1
          }
        },
        {
          name: "Don Maynard",
          stats: {
            receptions: 57,
            receivingYards: 1297,
            receivingTD: 10
          }
        }
      ]
    },
    {
      year: 1998,
      record: "12-4",
      achievement: "AFC East Champions",
      keyPlayers: [
        {
          name: "Vinny Testaverde",
          stats: {
            passYards: 3256,
            passTD: 29,
            rating: 101.6
          }
        },
        {
          name: "Curtis Martin",
          stats: {
            rushYards: 1287,
            totalTD: 8
          }
        }
      ]
    },
    {
      year: 2009,
      record: "9-7",
      achievement: "AFC Championship Appearance",
      keyPlayers: [
        {
          name: "Mark Sanchez",
          stats: {
            passYards: 2444,
            passTD: 12,
            rating: 63.0
          }
        },
        {
          name: "Thomas Jones",
          stats: {
            rushYards: 1402,
            totalTD: 14
          }
        }
      ]
    }
  ],
  teamRecords: {
    offense: {
      mostPointsSeason: {
        amount: 419,
        year: 1998,
        description: "Led by Vinny Testaverde"
      },
      mostTotalYardsSeason: {
        amount: 6133,
        year: 1985,
        description: "Team record"
      },
      mostPassingYardsSeason: {
        amount: 4007,
        year: 1967,
        player: "Joe Namath"
      },
      mostRushingYardsSeason: {
        amount: 1697,
        year: 2004,
        player: "Curtis Martin"
      }
    },
    defense: {
      fewestPointsAllowedSeason: {
        amount: 240,
        year: 2009,
        description: "Rex Ryan's first season"
      },
      mostSacksSeason: {
        amount: 66,
        year: 1981,
        description: "New York Sack Exchange"
      },
      mostInterceptionsSeason: {
        amount: 33,
        year: 1969,
        description: "Super Bowl Champion defense"
      }
    }
  },
  notableGames: [
    {
      date: "January 12, 1969",
      opponent: "Baltimore Colts",
      score: "16-7",
      description: "Super Bowl III Victory",
      significance: "First AFL team to win Super Bowl"
    },
    {
      date: "January 23, 2011",
      opponent: "Pittsburgh Steelers",
      score: "24-19",
      description: "AFC Championship Game loss",
      significance: "Most recent playoff appearance"
    },
    {
      date: "December 29, 2002",
      opponent: "Green Bay Packers",
      score: "42-17",
      description: "Clinched AFC East title",
      significance: "Most recent division title"
    }
  ],
  franchiseRecords: {
    individualCareer: {
      passingYards: {
        player: "Joe Namath",
        amount: 27057,
        years: "1965-1976"
      },
      rushingYards: {
        player: "Curtis Martin",
        amount: 10302,
        years: "1998-2005"
      },
      receivingYards: {
        player: "Don Maynard",
        amount: 11732,
        years: "1960-1972"
      },
      sacks: {
        player: "Mark Gastineau",
        amount: 107.5,
        years: "1979-1988"
      }
    },
    teamSeason: {
      wins: {
        amount: 12,
        year: 1998
      },
      points: {
        amount: 419,
        year: 1998
      },
      totalYards: {
        amount: 6133,
        year: 1985
      }
    }
  }
};