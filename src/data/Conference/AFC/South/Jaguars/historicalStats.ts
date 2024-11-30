export const historicalStats = {
  franchiseHistory: {
    name: "Jacksonville Jaguars",
    established: 1995,
    firstGame: {
      date: "September 3, 1995",
      opponent: "Houston Oilers",
      result: "Loss (10-3)",
      location: "Jacksonville Municipal Stadium"
    },
    stadiums: [
      {
        name: "Jacksonville Municipal Stadium",
        years: "1995-2009",
        location: "Jacksonville, Florida"
      },
      {
        name: "EverBank Field",
        years: "2010-2018",
        location: "Jacksonville, Florida"
      },
      {
        name: "TIAA Bank Field",
        years: "2018-present",
        location: "Jacksonville, Florida",
        capacity: 67164
      }
    ]
  },

  legendaryPlayers: [
    {
      name: "Tony Boselli",
      position: "OT",
      years: "1995-2001",
      achievements: [
        "Hall of Fame Class of 2022",
        "5× Pro Bowl",
        "3× First-team All-Pro",
        "NFL 1990s All-Decade Team"
      ],
      impact: "First draft pick in franchise history, considered one of the best left tackles of his era"
    },
    {
      name: "Fred Taylor",
      position: "RB",
      years: "1998-2008",
      achievements: [
        "Pro Bowl (2007)",
        "NFL All-Rookie Team (1998)",
        "10,000+ Career Rushing Yards"
      ],
      stats: {
        rushingYards: 11271,
        touchdowns: 70,
        yardsPerCarry: 4.6
      }
    },
    {
      name: "Jimmy Smith",
      position: "WR",
      years: "1995-2005",
      achievements: [
        "5× Pro Bowl",
        "2× Second-team All-Pro",
        "Pride of the Jaguars"
      ],
      stats: {
        receptions: 862,
        receivingYards: 12287,
        touchdowns: 67
      }
    },
    {
      name: "Maurice Jones-Drew",
      position: "RB",
      years: "2006-2013",
      achievements: [
        "3× Pro Bowl",
        "NFL rushing yards leader (2011)",
        "First-team All-Pro (2011)"
      ],
      stats: {
        rushingYards: 8071,
        touchdowns: 81,
        allPurposeYards: 13131
      }
    }
  ],

  notableSeasons: [
    {
      year: 1996,
      record: "9-7",
      description: "First playoff appearance, reached AFC Championship Game in only second season"
    },
    {
      year: 1999,
      record: "14-2",
      description: "Best regular season record in franchise history, reached AFC Championship Game"
    },
    {
      year: 2017,
      record: "10-6",
      description: "Won AFC South, reached AFC Championship Game with league's best defense"
    },
    {
      year: 2022,
      record: "9-8",
      description: "Won AFC South under Doug Pederson, Trevor Lawrence's breakout season"
    }
  ],

  rivalries: [
    {
      team: "Tennessee Titans",
      description: "Primary division rival since AFC Central days",
      notableGames: [
        {
          date: "December 13, 1999",
          result: "Titans 41, Jaguars 14",
          significance: "Only regular season loss at home that year"
        },
        {
          date: "January 23, 2000",
          result: "Titans 33, Jaguars 14",
          significance: "AFC Championship Game loss"
        }
      ]
    },
    {
      team: "Indianapolis Colts",
      description: "Key AFC South division rivalry",
      notableGames: [
        {
          date: "September 21, 2003",
          result: "Colts 23, Jaguars 13",
          significance: "First meeting as division rivals"
        }
      ]
    }
  ],

  traditions: [
    {
      name: "The ROAR",
      description: "Official cheerleading squad since inaugural season"
    },
    {
      name: "Pride of the Jaguars",
      description: "Team's ring of honor recognizing franchise legends"
    },
    {
      name: "Pool Deck",
      description: "First NFL stadium with swimming pools, added in 2014"
    }
  ],

  culturalImpact: {
    communityPrograms: [
      {
        name: "Jaguars Foundation",
        description: "Charitable organization supporting youth programs and community development"
      },
      {
        name: "Honor Rows",
        description: "Program rewarding youth achievement with game tickets"
      }
    ],
    economicImpact: {
      stadiumDevelopment: "Continuous stadium improvements including world's largest video boards",
      localBusiness: "Major contributor to Jacksonville's downtown development and tourism"
    },
    cityIdentity: {
      description: "First major professional sports team in Jacksonville",
      keyEvents: [
        "Super Bowl XXXIX hosting (2005)",
        "Annual Florida-Georgia college football game",
        "International games in London (since 2013)"
      ]
    }
  },

  recordsVsOpponents: {
    divisionRivals: {
      titans: {
        overall: "33-53",
        home: "20-23",
        away: "13-30"
      },
      colts: {
        overall: "16-26",
        home: "9-12",
        away: "7-14"
      },
      texans: {
        overall: "27-14",
        home: "15-6",
        away: "12-8"
      }
    }
  }
};