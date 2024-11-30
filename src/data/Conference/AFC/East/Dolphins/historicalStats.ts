export const historicalStats = {
  hallOfFamePlayers: [
    {
      name: "Dan Marino",
      position: "QB",
      years: "1983-1999",
      inducted: 2005,
      keyStats: {
        passYards: 61361,
        passTD: 420,
        completions: 4967,
        winPercentage: 0.613
      }
    },
    {
      name: "Bob Griese",
      position: "QB",
      years: "1967-1980",
      inducted: 1990,
      keyStats: {
        passYards: 25092,
        passTD: 192,
        completions: 1926,
        winPercentage: 0.678
      }
    },
    {
      name: "Larry Csonka",
      position: "FB",
      years: "1968-1974, 1979",
      inducted: 1987,
      keyStats: {
        rushYards: 6737,
        rushTD: 53,
        receptions: 106,
        probowls: 5
      }
    }
  ],
  legendarySeasons: [
    {
      year: 1972,
      record: "17-0",
      achievement: "Perfect Season",
      keyPlayers: [
        {
          name: "Bob Griese",
          stats: {
            passYards: 1360,
            passTD: 8,
            rating: 84.3
          }
        },
        {
          name: "Larry Csonka",
          stats: {
            rushYards: 1117,
            totalTD: 6
          }
        }
      ]
    },
    {
      year: 1984,
      record: "14-2",
      achievement: "Dan Marino's Record-Breaking Season",
      keyPlayers: [
        {
          name: "Dan Marino",
          stats: {
            passYards: 5084,
            passTD: 48,
            rating: 108.9
          }
        },
        {
          name: "Mark Clayton",
          stats: {
            receptions: 73,
            receivingYards: 1389,
            receivingTD: 18
          }
        }
      ]
    },
    {
      year: 2023,
      record: "11-6",
      achievement: "AFC East Division Champions",
      keyPlayers: [
        {
          name: "Tua Tagovailoa",
          stats: {
            passYards: 4624,
            passTD: 29,
            rating: 101.1
          }
        },
        {
          name: "Tyreek Hill",
          stats: {
            receptions: 119,
            receivingYards: 1799,
            receivingTD: 13
          }
        }
      ]
    }
  ],
  teamRecords: {
    offense: {
      mostPointsSeason: {
        amount: 513,
        year: 1984,
        description: "Led by Dan Marino"
      },
      mostTotalYardsSeason: {
        amount: 6971,
        year: 2023,
        description: "Modern NFL record"
      },
      mostPassingYardsSeason: {
        amount: 5084,
        year: 1984,
        player: "Dan Marino"
      },
      mostRushingYardsSeason: {
        amount: 1117,
        year: 1972,
        player: "Larry Csonka"
      }
    },
    defense: {
      fewestPointsAllowedSeason: {
        amount: 171,
        year: 1971,
        description: "No Name Defense"
      },
      mostSacksSeason: {
        amount: 49,
        year: 1983,
        description: "Killer B's Defense"
      },
      mostInterceptionsSeason: {
        amount: 32,
        year: 1967,
        description: "Team record"
      }
    }
  },
  notableGames: [
    {
      date: "January 14, 1973",
      opponent: "Washington Redskins",
      score: "14-7",
      description: "Super Bowl VII - Completed Perfect Season",
      significance: "Only Perfect Season in NFL History"
    },
    {
      date: "January 2, 2000",
      opponent: "Washington Redskins",
      score: "21-10",
      description: "Dan Marino's final regular season game",
      significance: "End of an Era"
    },
    {
      date: "December 25, 2023",
      opponent: "Dallas Cowboys",
      score: "22-20",
      description: "Clinched AFC East title",
      significance: "First division title since 2008"
    }
  ],
  franchiseRecords: {
    individualCareer: {
      passingYards: {
        player: "Dan Marino",
        amount: 61361,
        years: "1983-1999"
      },
      rushingYards: {
        player: "Larry Csonka",
        amount: 6737,
        years: "1968-1974, 1979"
      },
      receivingYards: {
        player: "Mark Clayton",
        amount: 8643,
        years: "1983-1992"
      },
      sacks: {
        player: "Jason Taylor",
        amount: 131,
        years: "1997-2007, 2009, 2011"
      }
    },
    teamSeason: {
      wins: {
        amount: 17,
        year: 1972
      },
      points: {
        amount: 513,
        year: 1984
      },
      totalYards: {
        amount: 6971,
        year: 2023
      }
    }
  }
};