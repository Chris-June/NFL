export const historicalStats = {
  franchiseHistory: {
    established: 1996,
    originCity: "Baltimore",
    stadiums: [
      {
        name: "Memorial Stadium",
        years: "1996-1997",
        location: "Baltimore, Maryland"
      },
      {
        name: "M&T Bank Stadium",
        years: "1998-present",
        location: "Baltimore, Maryland",
        capacity: 71008
      }
    ],
    championships: {
      total: 2,
      years: [2000, 2012]
    }
  },
  legendaryPlayers: [
    {
      name: "Ray Lewis",
      position: "LB",
      years: "1996-2012",
      achievements: [
        "13× Pro Bowl",
        "7× First-team All-Pro",
        "2× NFL Defensive Player of the Year",
        "Super Bowl XXXV MVP",
        "NFL 2000s All-Decade Team",
        "NFL record 51 career tackles in postseason"
      ],
      stats: {
        tackles: 2061,
        sacks: 41.5,
        interceptions: 31,
        forcedFumbles: 19
      }
    },
    {
      name: "Ed Reed",
      position: "S",
      years: "2002-2012",
      achievements: [
        "9× Pro Bowl",
        "5× First-team All-Pro",
        "NFL Defensive Player of the Year (2004)",
        "NFL 2000s All-Decade Team",
        "NFL record 1,590 interception return yards"
      ],
      stats: {
        interceptions: 64,
        interceptionYards: 1590,
        touchdowns: 13
      }
    },
    {
      name: "Jonathan Ogden",
      position: "OT",
      years: "1996-2007",
      achievements: [
        "11× Pro Bowl",
        "9× First-team All-Pro",
        "Super Bowl XXXV champion",
        "NFL 2000s All-Decade Team"
      ],
      stats: {
        gamesStarted: 176,
        probowls: 11
      }
    }
  ],
  legendarySeasons: [
    {
      year: 2000,
      record: "12-4",
      achievement: "Super Bowl XXXV Champions",
      notableStats: [
        "Set NFL record for fewest points allowed (165) in 16 games",
        "4 shutouts in regular season",
        "Ray Lewis named NFL Defensive Player of the Year"
      ]
    },
    {
      year: 2019,
      record: "14-2",
      achievement: "Best regular season record in franchise history",
      notableStats: [
        "Lamar Jackson NFL MVP",
        "Set NFL record for team rushing yards (3,296)",
        "Jackson set QB rushing record (1,206 yards)"
      ]
    },
    {
      year: 2012,
      record: "10-6",
      achievement: "Super Bowl XLVII Champions",
      notableStats: [
        "Ray Lewis's final season",
        "Joe Flacco's historic playoff run",
        "Defeated 49ers in 'Harbaugh Bowl'"
      ]
    }
  ],
  teamRecords: {
    offense: {
      passingYardsGame: {
        amount: 505,
        player: "Vinny Testaverde",
        date: "October 27, 1996"
      },
      rushingYardsGame: {
        amount: 295,
        player: "Jamal Lewis",
        date: "September 14, 2003"
      },
      receivingYardsGame: {
        amount: 210,
        player: "Qadry Ismail",
        date: "December 12, 1999"
      }
    },
    defense: {
      singleSeasonSacks: {
        amount: 15,
        player: "Elvis Dumervil",
        year: 2014
      },
      careerInterceptions: {
        amount: 61,
        player: "Ed Reed",
        years: "2002-2012"
      }
    },
    team: {
      mostPointsSeason: {
        amount: 531,
        year: 2019
      },
      fewestPointsAllowedSeason: {
        amount: 165,
        year: 2000
      },
      longestWinStreak: {
        amount: 12,
        year: 2019
      }
    }
  },
  notableGames: [
    {
      date: "January 28, 2001",
      opponent: "New York Giants",
      result: "W 34-7",
      description: "Super Bowl XXXV victory with historic defensive performance"
    },
    {
      date: "February 3, 2013",
      opponent: "San Francisco 49ers",
      result: "W 34-31",
      description: "Super Bowl XLVII victory in the 'Harbaugh Bowl'"
    },
    {
      date: "September 14, 2003",
      opponent: "Cleveland Browns",
      result: "W 33-13",
      description: "Jamal Lewis sets NFL single-game rushing record with 295 yards"
    },
    {
      date: "December 27, 2020",
      opponent: "New York Giants",
      result: "W 27-13",
      description: "Franchise record 20th consecutive home victory"
    }
  ],
  rivalries: [
    {
      team: "Pittsburgh Steelers",
      description: "Primary division rival, known for physical defensive battles",
      allTimeRecord: {
        wins: 32,
        losses: 24,
        ties: 0
      }
    },
    {
      team: "Cleveland Browns",
      description: "Historic connection due to Ravens' origin as former Browns franchise",
      allTimeRecord: {
        wins: 35,
        losses: 12,
        ties: 0
      }
    }
  ],
  traditions: [
    {
      name: "Defense Chant",
      description: "Fans chanting 'Seven Nation Army' during defensive stands"
    },
    {
      name: "Ravens Walk",
      description: "Pre-game fan experience outside M&T Bank Stadium"
    },
    {
      name: "Mascot",
      description: "Poe, named after famous Baltimore writer Edgar Allan Poe"
    }
  ]
};