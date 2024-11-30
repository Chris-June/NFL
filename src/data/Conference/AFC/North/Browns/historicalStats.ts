export const historicalStats = {
  franchiseHistory: {
    established: 1946,
    firstSeason: {
      year: 1946,
      league: "AAFC",
      record: "12-2",
      result: "AAFC Champions"
    },
    relocations: [
      {
        year: 1996,
        from: "Cleveland",
        to: "Baltimore",
        note: "Team became Baltimore Ravens; Browns' history and records remained in Cleveland"
      },
      {
        year: 1999,
        description: "Cleveland Browns return as expansion team, retaining history and records"
      }
    ],
    stadiums: [
      {
        name: "Cleveland Municipal Stadium",
        years: "1946-1995",
        capacity: 78512,
        location: "Cleveland, Ohio",
        nickname: "The Mistake by the Lake"
      },
      {
        name: "FirstEnergy Stadium",
        years: "1999-present",
        capacity: 67895,
        location: "Cleveland, Ohio",
        formerNames: ["Cleveland Browns Stadium (1999-2013)"]
      }
    ]
  },
  legendaryPlayers: [
    {
      name: "Jim Brown",
      position: "RB",
      years: "1957-1965",
      achievements: [
        "8× Pro Bowl",
        "8× First-team All-Pro",
        "3× NFL MVP",
        "NFL 75th Anniversary All-Time Team",
        "NFL 100th Anniversary All-Time Team"
      ],
      stats: {
        rushingYards: 12312,
        touchdowns: 126,
        yardsPerCarry: 5.2
      }
    },
    {
      name: "Otto Graham",
      position: "QB",
      years: "1946-1955",
      achievements: [
        "5× Pro Bowl",
        "7× First-team All-Pro",
        "3× NFL Champion",
        "NFL 75th Anniversary All-Time Team"
      ],
      stats: {
        passingYards: 23584,
        touchdowns: 174,
        championships: 7
      }
    },
    {
      name: "Lou Groza",
      position: "OT/K",
      years: "1946-1967",
      achievements: [
        "9× Pro Bowl",
        "4× NFL Champion",
        "NFL 1950s All-Decade Team"
      ],
      stats: {
        fieldGoals: 264,
        pointsScored: 1608,
        gamesPlayed: 268
      }
    }
  ],
  notableSeasons: [
    {
      year: 1948,
      record: "14-0",
      achievement: "Perfect season in AAFC",
      coach: "Paul Brown",
      keyPlayers: ["Otto Graham", "Marion Motley", "Dante Lavelli"]
    },
    {
      year: 1964,
      record: "10-3-1",
      achievement: "NFL Championship victory",
      coach: "Blanton Collier",
      keyPlayers: ["Jim Brown", "Frank Ryan", "Gary Collins"]
    },
    {
      year: 1980,
      record: "11-5",
      achievement: "AFC Central Division Champions, 'Kardiac Kids' era",
      coach: "Sam Rutigliano",
      keyPlayers: ["Brian Sipe", "Ozzie Newsome", "Mike Pruitt"]
    },
    {
      year: 2020,
      record: "11-5",
      achievement: "First playoff victory since 1994",
      coach: "Kevin Stefanski",
      keyPlayers: ["Baker Mayfield", "Nick Chubb", "Myles Garrett"]
    }
  ],
  rivalries: [
    {
      team: "Pittsburgh Steelers",
      type: "Division",
      firstMeeting: 1950,
      allTimeSeries: {
        wins: 60,
        losses: 79,
        ties: 1
      },
      notableGames: [
        {
          date: "October 7, 1979",
          score: "51-35",
          description: "Browns victory in highest-scoring game in rivalry"
        }
      ]
    },
    {
      team: "Baltimore Ravens",
      type: "Division/Relocation",
      firstMeeting: 1999,
      allTimeSeries: {
        wins: 11,
        losses: 35,
        ties: 0
      },
      notableGames: [
        {
          date: "September 12, 1999",
          score: "43-0",
          description: "Ravens victory in first meeting after relocation"
        }
      ]
    }
  ],
  franchiseRecords: {
    team: {
      mostPointsGame: {
        amount: 62,
        opponent: "Washington Redskins",
        date: "November 28, 1954"
      },
      mostWinsRegularSeason: {
        amount: 12,
        year: 1948
      },
      longestWinStreak: {
        games: 17,
        years: "1947-1948"
      }
    },
    individual: {
      passing: {
        yards: {
          amount: 23713,
          player: "Brian Sipe",
          years: "1974-1983"
        },
        touchdowns: {
          amount: 154,
          player: "Brian Sipe",
          years: "1974-1983"
        }
      },
      rushing: {
        yards: {
          amount: 12312,
          player: "Jim Brown",
          years: "1957-1965"
        },
        touchdowns: {
          amount: 106,
          player: "Jim Brown",
          years: "1957-1965"
        }
      },
      receiving: {
        yards: {
          amount: 7980,
          player: "Ozzie Newsome",
          years: "1978-1990"
        },
        touchdowns: {
          amount: 62,
          player: "Ozzie Newsome",
          years: "1978-1990"
        }
      }
    }
  },
  traditions: [
    {
      name: "Dawg Pound",
      established: 1985,
      description: "Famous fan section known for passionate and vocal supporters"
    },
    {
      name: "Browns Backers",
      established: 1985,
      description: "Largest organized fan club in professional sports"
    }
  ],
  teamColors: {
    primary: "Seal Brown",
    secondary: "Orange",
    accent: "White"
  },
  mascots: [
    {
      name: "Chomps",
      type: "Dog",
      introduced: 2003,
      description: "Named after the famous Dawg Pound fan section"
    },
    {
      name: "Swagger Jr.",
      type: "Live Bullmastiff",
      introduced: 2019,
      description: "Son of original mascot Swagger, leads team onto field"
    }
  ]
};