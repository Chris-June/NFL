export const historicalStats = {
  franchiseHistory: {
    name: "Indianapolis Colts",
    established: 1953,
    firstGame: {
      date: "September 27, 1953",
      opponent: "Chicago Bears",
      result: "Loss (13-9)",
      location: "Memorial Stadium (Baltimore)"
    },
    stadiums: [
      {
        name: "Memorial Stadium",
        years: "1953-1983",
        location: "Baltimore, Maryland"
      },
      {
        name: "Hoosier Dome/RCA Dome",
        years: "1984-2007",
        location: "Indianapolis, Indiana"
      },
      {
        name: "Lucas Oil Stadium",
        years: "2008-present",
        location: "Indianapolis, Indiana",
        capacity: 67000
      }
    ]
  },

  legendaryPlayers: [
    {
      name: "Johnny Unitas",
      position: "QB",
      years: "1956-1972",
      achievements: [
        "3× NFL MVP",
        "10× Pro Bowl",
        "5× First-team All-Pro",
        "NFL 1960s All-Decade Team",
        "NFL 75th Anniversary All-Time Team",
        "NFL 100th Anniversary All-Time Team"
      ],
      stats: {
        passingYards: 39768,
        touchdowns: 290,
        completions: 2830
      }
    },
    {
      name: "Peyton Manning",
      position: "QB",
      years: "1998-2011",
      achievements: [
        "4× NFL MVP with Colts",
        "11× Pro Bowl with Colts",
        "5× First-team All-Pro",
        "Super Bowl XLI Champion & MVP",
        "NFL 2000s All-Decade Team"
      ],
      stats: {
        passingYards: 54828,
        touchdowns: 399,
        completions: 4682
      }
    },
    {
      name: "Marvin Harrison",
      position: "WR",
      years: "1996-2008",
      achievements: [
        "8× Pro Bowl",
        "8× First-team All-Pro",
        "NFL 2000s All-Decade Team",
        "NFL Record: 143 receptions (2002)"
      ],
      stats: {
        receptions: 1102,
        receivingYards: 14580,
        touchdowns: 128
      }
    },
    {
      name: "Reggie Wayne",
      position: "WR",
      years: "2001-2014",
      achievements: [
        "6× Pro Bowl",
        "3× First-team All-Pro",
        "Super Bowl XLI Champion"
      ],
      stats: {
        receptions: 1070,
        receivingYards: 14345,
        touchdowns: 82
      }
    }
  ],

  notableSeasons: [
    {
      year: 1958,
      record: "9-3",
      description: "Won NFL Championship in 'Greatest Game Ever Played' vs Giants"
    },
    {
      year: 1970,
      record: "11-2-1",
      description: "Won Super Bowl V over Cowboys"
    },
    {
      year: 2006,
      record: "12-4",
      description: "Won Super Bowl XLI, Peyton Manning's first championship"
    },
    {
      year: 2009,
      record: "14-2",
      description: "Started 14-0, reached Super Bowl XLIV"
    }
  ],

  rivalries: [
    {
      team: "New England Patriots",
      description: "One of the NFL's greatest rivalries during the Manning-Brady era",
      notableGames: [
        {
          date: "January 21, 2007",
          result: "Colts 38, Patriots 34",
          significance: "2006 AFC Championship Game comeback victory"
        }
      ]
    },
    {
      team: "Tennessee Titans",
      description: "Key AFC South division rivalry since 2002",
      notableGames: [
        {
          date: "January 16, 2000",
          result: "Titans 19, Colts 16",
          significance: "First playoff meeting"
        }
      ]
    }
  ],

  traditions: [
    {
      name: "Blue Crew",
      description: "Official fan club and supporter group"
    },
    {
      name: "Horseshoe Classic",
      description: "Annual high school football game played at Lucas Oil Stadium"
    },
    {
      name: "12th Man Flag",
      description: "Flag raised before each home game honoring fans"
    }
  ],

  culturalImpact: {
    communityPrograms: [
      {
        name: "Colts Community Tuesdays",
        description: "Weekly player involvement in community service"
      },
      {
        name: "Indianapolis Colts Foundation",
        description: "Charitable organization supporting youth development and education"
      }
    ],
    economicImpact: {
      stadiumDevelopment: "Lucas Oil Stadium helped revitalize downtown Indianapolis",
      localBusiness: "Major contributor to Indianapolis economy through tourism and game day revenue"
    },
    cityIdentity: {
      description: "Helped establish Indianapolis as a major sports city",
      keyEvents: [
        "Hosting Super Bowl XLVI in 2012",
        "Development of downtown sports district"
      ]
    }
  },

  recordsVsOpponents: {
    divisionRivals: {
      texans: {
        overall: "32-9",
        home: "16-4",
        away: "16-5"
      },
      titans: {
        overall: "35-21",
        home: "19-9",
        away: "16-12"
      },
      jaguars: {
        overall: "26-16",
        home: "14-7",
        away: "12-9"
      }
    }
  }
};