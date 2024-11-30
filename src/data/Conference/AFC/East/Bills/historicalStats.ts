export const historicalStats = {
  hallOfFamePlayers: [
    {
      name: "Jim Kelly",
      position: "QB",
      years: "1986-1996",
      inducted: 2002,
      keyStats: {
        passYards: 35467,
        passTD: 237,
        completions: 2874,
        winPercentage: 0.635
      }
    },
    {
      name: "Thurman Thomas",
      position: "RB",
      years: "1988-1999",
      inducted: 2007,
      keyStats: {
        rushYards: 11938,
        rushTD: 65,
        receptions: 456,
        receivingYards: 4341
      }
    },
    {
      name: "Bruce Smith",
      position: "DE",
      years: "1985-1999",
      inducted: 2009,
      keyStats: {
        sacks: 171,
        forcedFumbles: 43,
        tackles: 941,
        probowls: 11
      }
    },
    {
      name: "Andre Reed",
      position: "WR",
      years: "1985-1999",
      inducted: 2014,
      keyStats: {
        receptions: 941,
        receivingYards: 13095,
        receivingTD: 86,
        probowls: 7
      }
    }
  ],
  legendarySeasons: [
    {
      year: 1990,
      record: "13-3",
      achievement: "First Super Bowl Appearance",
      keyPlayers: [
        {
          name: "Jim Kelly",
          stats: {
            passYards: 2829,
            passTD: 24,
            rating: 93.0
          }
        },
        {
          name: "Thurman Thomas",
          stats: {
            rushYards: 1297,
            totalTD: 13
          }
        }
      ]
    },
    {
      year: 2020,
      record: "13-3",
      achievement: "First AFC East title since 1995",
      keyPlayers: [
        {
          name: "Josh Allen",
          stats: {
            passYards: 4544,
            passTD: 37,
            rushTD: 8
          }
        },
        {
          name: "Stefon Diggs",
          stats: {
            receptions: 127,
            receivingYards: 1535,
            receivingTD: 8
          }
        }
      ]
    }
  ],
  teamRecords: {
    offense: {
      mostPointsSeason: {
        amount: 501,
        year: 2020,
        description: "Led by Josh Allen"
      },
      mostTotalYardsSeason: {
        amount: 6343,
        year: 2020,
        description: "First season over 6000 yards"
      },
      mostPassingYardsSeason: {
        amount: 4620,
        year: 2020,
        player: "Josh Allen"
      },
      mostRushingYardsSeason: {
        amount: 1941,
        year: 1975,
        player: "O.J. Simpson"
      }
    },
    defense: {
      fewestPointsAllowedSeason: {
        amount: 229,
        year: 1999,
        description: "Led by Bruce Smith"
      },
      mostSacksSeason: {
        amount: 49,
        year: 2014,
        description: "Team record"
      },
      mostInterceptionsSeason: {
        amount: 33,
        year: 1965,
        description: "AFL record"
      }
    }
  },
  notableGames: [
    {
      date: "January 3, 1993",
      opponent: "Houston Oilers",
      score: "41-38",
      description: "Greatest comeback in NFL history (32-point deficit)",
      significance: "AFC Wild Card Game"
    },
    {
      date: "September 13, 2020",
      opponent: "New York Jets",
      score: "27-17",
      description: "Josh Allen's first 300+ yard passing game",
      significance: "Season opener"
    },
    {
      date: "January 15, 2022",
      opponent: "New England Patriots",
      score: "47-17",
      description: "Perfect offensive game (7 TD drives)",
      significance: "AFC Wild Card Game"
    }
  ],
  franchiseRecords: {
    individualCareer: {
      passingYards: {
        player: "Jim Kelly",
        amount: 35467,
        years: "1986-1996"
      },
      rushingYards: {
        player: "Thurman Thomas",
        amount: 11938,
        years: "1988-1999"
      },
      receivingYards: {
        player: "Andre Reed",
        amount: 13095,
        years: "1985-1999"
      },
      sacks: {
        player: "Bruce Smith",
        amount: 171,
        years: "1985-1999"
      }
    },
    teamSeason: {
      wins: {
        amount: 13,
        years: ["1990", "1991", "2020", "2022"]
      },
      points: {
        amount: 501,
        year: 2020
      },
      totalYards: {
        amount: 6343,
        year: 2020
      }
    }
  }
};