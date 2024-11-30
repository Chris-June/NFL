export const historicalStats = {
  hallOfFamePlayers: [
    {
      name: "Tom Brady",
      position: "QB",
      years: "2000-2019",
      inducted: "Future",
      keyStats: {
        passYards: 74571,
        passTD: 541,
        completions: 6377,
        winPercentage: 0.774
      },
      achievements: [
        "6x Super Bowl Champion with Patriots",
        "4x Super Bowl MVP",
        "3x NFL MVP",
        "14x Pro Bowl"
      ]
    },
    {
      name: "John Hannah",
      position: "G",
      years: "1973-1985",
      inducted: 1991,
      keyStats: {
        gamesPlayed: 183,
        probowls: 9,
        allPro: 10
      },
      achievements: [
        "NFL 75th Anniversary All-Time Team",
        "NFL 100th Anniversary All-Time Team",
        "Patriots All-1970s Team",
        "Patriots All-1980s Team"
      ]
    },
    {
      name: "Andre Tippett",
      position: "LB",
      years: "1982-1993",
      inducted: 2008,
      keyStats: {
        sacks: 100,
        forcedFumbles: 17,
        interceptions: 1
      },
      achievements: [
        "5x Pro Bowl",
        "2x First-team All-Pro",
        "NFL 1980s All-Decade Team"
      ]
    }
  ],
  legendarySeasons: [
    {
      year: 2007,
      record: "16-0",
      achievement: "Perfect Regular Season",
      keyPlayers: [
        {
          name: "Tom Brady",
          stats: {
            passYards: 4806,
            passTD: 50,
            rating: 117.2
          }
        },
        {
          name: "Randy Moss",
          stats: {
            receptions: 98,
            receivingYards: 1493,
            receivingTD: 23
          }
        },
        {
          name: "Wes Welker",
          stats: {
            receptions: 112,
            receivingYards: 1175,
            receivingTD: 8
          }
        }
      ]
    },
    {
      year: 2004,
      record: "14-2",
      achievement: "Super Bowl XXXIX Champions",
      keyPlayers: [
        {
          name: "Tom Brady",
          stats: {
            passYards: 3692,
            passTD: 28,
            rating: 92.6
          }
        },
        {
          name: "Corey Dillon",
          stats: {
            rushYards: 1635,
            rushTD: 12
          }
        }
      ]
    },
    {
      year: 2016,
      record: "14-2",
      achievement: "Super Bowl LI Champions",
      keyPlayers: [
        {
          name: "Tom Brady",
          stats: {
            passYards: 3554,
            passTD: 28,
            rating: 112.2
          }
        },
        {
          name: "LeGarrette Blount",
          stats: {
            rushYards: 1161,
            rushTD: 18
          }
        }
      ]
    }
  ],
  teamRecords: {
    offense: {
      mostPointsSeason: {
        amount: 589,
        year: 2007,
        description: "NFL record at the time"
      },
      mostTotalYardsSeason: {
        amount: 7084,
        year: 2011,
        description: "Team record"
      },
      mostPassingYardsSeason: {
        amount: 5235,
        year: 2011,
        player: "Tom Brady"
      },
      mostRushingYardsSeason: {
        amount: 1635,
        year: 2004,
        player: "Corey Dillon"
      }
    },
    defense: {
      fewestPointsAllowedSeason: {
        amount: 225,
        year: 2019,
        description: "League's best scoring defense"
      },
      mostSacksSeason: {
        amount: 57,
        year: 2019,
        description: "Team record"
      },
      mostInterceptionsSeason: {
        amount: 29,
        year: 2003,
        description: "Led NFL"
      }
    }
  },
  notableGames: [
    {
      date: "February 3, 2002",
      opponent: "St. Louis Rams",
      score: "20-17",
      description: "Super Bowl XXXVI",
      significance: "First Super Bowl victory, beginning of dynasty"
    },
    {
      date: "February 5, 2017",
      opponent: "Atlanta Falcons",
      score: "34-28",
      description: "Super Bowl LI",
      significance: "Greatest comeback in Super Bowl history (28-3)"
    },
    {
      date: "January 19, 2002",
      opponent: "Oakland Raiders",
      score: "16-13",
      description: "AFC Divisional Round",
      significance: "The 'Tuck Rule' game"
    },
    {
      date: "December 29, 2007",
      opponent: "New York Giants",
      score: "38-35",
      description: "Week 17",
      significance: "Completed perfect regular season (16-0)"
    }
  ],
  franchiseRecords: {
    individualCareer: {
      passingYards: {
        player: "Tom Brady",
        amount: 74571,
        years: "2000-2019"
      },
      rushingYards: {
        player: "Sam Cunningham",
        amount: 5453,
        years: "1973-1982"
      },
      receivingYards: {
        player: "Stanley Morgan",
        amount: 10352,
        years: "1977-1989"
      },
      sacks: {
        player: "Andre Tippett",
        amount: 100,
        years: "1982-1993"
      },
      interceptions: {
        player: "Raymond Clayborn",
        amount: 36,
        years: "1977-1989"
      }
    },
    teamSeason: {
      wins: {
        amount: 16,
        year: 2007,
        note: "Perfect regular season"
      },
      points: {
        amount: 589,
        year: 2007,
        note: "NFL record at the time"
      },
      totalYards: {
        amount: 7084,
        year: 2011,
        note: "Team record"
      }
    }
  },
  dynastyEra: {
    period: "2001-2019",
    achievements: {
      superBowls: 6,
      conferenceChampionships: 9,
      divisionTitles: 17,
      playoffAppearances: 17
    },
    keyFigures: [
      {
        name: "Tom Brady",
        role: "Quarterback",
        significance: "Led team to all six Super Bowl victories"
      },
      {
        name: "Bill Belichick",
        role: "Head Coach",
        significance: "Mastermind behind the dynasty"
      },
      {
        name: "Robert Kraft",
        role: "Owner",
        significance: "Transformed franchise after purchase in 1994"
      }
    ]
  }
};