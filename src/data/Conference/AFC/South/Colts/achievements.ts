export const achievements = {
  franchiseHistory: {
    established: 1953,
    firstSeason: 1953,
    yearJoinedNFL: 1953,
    yearJoinedAFC: 1970,
    cityMoves: [
      {
        from: "Baltimore",
        to: "Indianapolis",
        year: 1984
      }
    ]
  },

  superBowls: [
    {
      number: "V",
      year: 1971,
      result: "L 16-13",
      opponent: "Dallas Cowboys",
      location: "Orange Bowl",
      mvp: "Chuck Howley (Cowboys LB, only Super Bowl MVP from losing team)"
    },
    {
      number: "XLI",
      year: 2007,
      result: "W 29-17",
      opponent: "Chicago Bears",
      location: "Dolphin Stadium",
      mvp: "Peyton Manning"
    }
  ],

  conferenceChampionships: [
    {
      year: 1958,
      conference: "NFL",
      result: "W 23-17",
      opponent: "New York Giants"
    },
    {
      year: 1959,
      conference: "NFL",
      result: "W 31-16",
      opponent: "New York Giants"
    },
    {
      year: 1968,
      conference: "NFL",
      result: "L 34-0",
      opponent: "Cleveland Browns"
    },
    {
      year: 1970,
      conference: "AFC",
      result: "W 27-17",
      opponent: "Oakland Raiders"
    },
    {
      year: 2006,
      conference: "AFC",
      result: "W 38-34",
      opponent: "New England Patriots"
    },
    {
      year: 2009,
      conference: "AFC",
      result: "W 30-17",
      opponent: "New York Jets"
    }
  ],

  divisionTitles: [
    // Pre-merger NFL Western Conference titles
    { year: 1956, conference: "NFL Western" },
    { year: 1958, conference: "NFL Western" },
    { year: 1959, conference: "NFL Western" },
    { year: 1964, conference: "NFL Western" },
    { year: 1967, conference: "NFL Coastal" },
    { year: 1968, conference: "NFL Coastal" },
    // AFC East titles
    { year: 1970, conference: "AFC East" },
    { year: 1975, conference: "AFC East" },
    { year: 1976, conference: "AFC East" },
    { year: 1977, conference: "AFC East" },
    // AFC South titles
    { year: 2003, conference: "AFC South" },
    { year: 2004, conference: "AFC South" },
    { year: 2005, conference: "AFC South" },
    { year: 2006, conference: "AFC South" },
    { year: 2007, conference: "AFC South" },
    { year: 2009, conference: "AFC South" },
    { year: 2010, conference: "AFC South" },
    { year: 2013, conference: "AFC South" },
    { year: 2014, conference: "AFC South" }
  ],

  playoffAppearances: [
    1958, 1959, 1964, 1965, 1968, 1970, 1971, 1975, 1976, 1977,
    1987, 1995, 1996, 1999, 2000, 2002, 2003, 2004, 2005, 2006,
    2007, 2008, 2009, 2010, 2012, 2013, 2014, 2018, 2020
  ],

  retiredNumbers: [
    {
      number: "18",
      player: "Peyton Manning",
      position: "QB",
      years: "1998-2011"
    },
    {
      number: "19",
      player: "Johnny Unitas",
      position: "QB",
      years: "1956-1972"
    },
    {
      number: "22",
      player: "Buddy Young",
      position: "RB",
      years: "1953-1955"
    },
    {
      number: "24",
      player: "Lenny Moore",
      position: "RB/FL",
      years: "1956-1967"
    },
    {
      number: "82",
      player: "Raymond Berry",
      position: "WR",
      years: "1955-1967"
    },
    {
      number: "89",
      player: "Gino Marchetti",
      position: "DE",
      years: "1953-1966"
    }
  ],

  hallOfFamers: [
    {
      name: "Johnny Unitas",
      position: "QB",
      yearInducted: 1979,
      years: "1956-1972"
    },
    {
      name: "Peyton Manning",
      position: "QB",
      yearInducted: 2021,
      years: "1998-2011"
    },
    {
      name: "Marvin Harrison",
      position: "WR",
      yearInducted: 2016,
      years: "1996-2008"
    },
    {
      name: "Raymond Berry",
      position: "WR",
      yearInducted: 1973,
      years: "1955-1967"
    },
    {
      name: "Eric Dickerson",
      position: "RB",
      yearInducted: 1999,
      years: "1987-1991"
    },
    {
      name: "Marshall Faulk",
      position: "RB",
      yearInducted: 2011,
      years: "1994-1998"
    }
  ],

  majorAwards: {
    mvp: [
      {
        player: "Johnny Unitas",
        years: [1964, 1967]
      },
      {
        player: "Earl Morrall",
        years: [1968]
      },
      {
        player: "Bert Jones",
        years: [1976]
      },
      {
        player: "Peyton Manning",
        years: [2003, 2004, 2008, 2009]
      }
    ],
    allPro: [
      {
        player: "Peyton Manning",
        position: "QB",
        years: [2003, 2004, 2005, 2008, 2009],
        type: "First-team"
      },
      {
        player: "Marvin Harrison",
        position: "WR",
        years: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006],
        type: "First-team"
      },
      {
        player: "Reggie Wayne",
        position: "WR",
        years: [2007, 2009, 2010],
        type: "First-team"
      }
    ]
  },

  franchiseRecords: {
    passing: {
      career: {
        yards: {
          player: "Peyton Manning",
          amount: 54828,
          years: "1998-2011"
        },
        touchdowns: {
          player: "Peyton Manning",
          amount: 399,
          years: "1998-2011"
        }
      },
      singleSeason: {
        yards: {
          player: "Peyton Manning",
          amount: 4700,
          year: 2010
        },
        touchdowns: {
          player: "Peyton Manning",
          amount: 49,
          year: 2004
        }
      }
    },
    rushing: {
      career: {
        yards: {
          player: "Edgerrin James",
          amount: 9226,
          years: "1999-2005"
        },
        touchdowns: {
          player: "Edgerrin James",
          amount: 64,
          years: "1999-2005"
        }
      },
      singleSeason: {
        yards: {
          player: "Edgerrin James",
          amount: 1709,
          year: 2000
        }
      }
    },
    receiving: {
      career: {
        receptions: {
          player: "Marvin Harrison",
          amount: 1102,
          years: "1996-2008"
        },
        yards: {
          player: "Marvin Harrison",
          amount: 14580,
          years: "1996-2008"
        }
      },
      singleSeason: {
        receptions: {
          player: "Marvin Harrison",
          amount: 143,
          year: 2002
        },
        yards: {
          player: "Marvin Harrison",
          amount: 1722,
          year: 2002
        }
      }
    }
  },

  specialAchievements: [
    {
      achievement: "Greatest Game Ever Played",
      details: "1958 NFL Championship victory over Giants",
      date: "December 28, 1958"
    },
    {
      achievement: "Most Consecutive Regular Season Wins",
      details: "23 games",
      years: "2008-2009"
    },
    {
      achievement: "Most Wins in a Decade",
      details: "115 wins",
      years: "2000-2009"
    },
    {
      achievement: "First NFL Team to Win 12+ Games in Seven Consecutive Seasons",
      years: "2003-2009"
    }
  ]
};