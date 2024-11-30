export const achievements = {
  superBowls: {
    appearances: 8,
    wins: 6,
    losses: 2,
    details: [
      {
        number: "IX",
        year: 1975,
        result: "win",
        opponent: "Minnesota Vikings",
        score: "16-6",
        mvp: "Franco Harris",
        venue: "Tulane Stadium",
        location: "New Orleans, Louisiana"
      },
      {
        number: "X",
        year: 1976,
        result: "win",
        opponent: "Dallas Cowboys",
        score: "21-17",
        mvp: "Lynn Swann",
        venue: "Orange Bowl",
        location: "Miami, Florida"
      },
      {
        number: "XIII",
        year: 1979,
        result: "win",
        opponent: "Dallas Cowboys",
        score: "35-31",
        mvp: "Terry Bradshaw",
        venue: "Orange Bowl",
        location: "Miami, Florida"
      },
      {
        number: "XIV",
        year: 1980,
        result: "win",
        opponent: "Los Angeles Rams",
        score: "31-19",
        mvp: "Terry Bradshaw",
        venue: "Rose Bowl",
        location: "Pasadena, California"
      },
      {
        number: "XL",
        year: 2006,
        result: "win",
        opponent: "Seattle Seahawks",
        score: "21-10",
        mvp: "Hines Ward",
        venue: "Ford Field",
        location: "Detroit, Michigan"
      },
      {
        number: "XLIII",
        year: 2009,
        result: "win",
        opponent: "Arizona Cardinals",
        score: "27-23",
        mvp: "Santonio Holmes",
        venue: "Raymond James Stadium",
        location: "Tampa, Florida"
      },
      {
        number: "XLV",
        year: 2011,
        result: "loss",
        opponent: "Green Bay Packers",
        score: "31-25",
        venue: "Cowboys Stadium",
        location: "Arlington, Texas"
      },
      {
        number: "XXX",
        year: 1996,
        result: "loss",
        opponent: "Dallas Cowboys",
        score: "27-17",
        venue: "Sun Devil Stadium",
        location: "Tempe, Arizona"
      }
    ]
  },
  conferenceChampionships: {
    total: 8,
    years: ["1974", "1975", "1978", "1979", "1995", "2005", "2008", "2010"],
    mostRecent: "2010"
  },
  divisionTitles: {
    total: 24,
    years: [
      "1972", "1974", "1975", "1976", "1977", "1978", "1979",
      "1983", "1984", "1992", "1994", "1995", "1996", "1997",
      "2001", "2002", "2004", "2007", "2008", "2010", "2014",
      "2016", "2017", "2020"
    ],
    mostRecent: "2020"
  },
  playoffAppearances: {
    total: 33,
    mostRecent: "2021",
    consecutiveSeasons: {
      current: 0,
      record: 8,
      years: "1972-1979"
    }
  },
  retiredNumbers: [
    {
      number: "70",
      player: "Ernie Stautner",
      position: "DT",
      years: "1950-1963",
      yearRetired: 1964,
      note: "First Steelers player to have number retired"
    },
    {
      number: "75",
      player: "Joe Greene",
      position: "DT",
      years: "1969-1981",
      yearRetired: 2014,
      note: "Nicknamed 'Mean Joe Greene', cornerstone of the Steel Curtain defense"
    },
    {
      number: "32",
      player: "Franco Harris",
      position: "RB",
      years: "1972-1983",
      yearRetired: 2022,
      note: "Known for the 'Immaculate Reception', retired posthumously"
    }
  ],
  hallOfFamers: [
    {
      name: "Joe Greene",
      position: "DT",
      yearInducted: 1987,
      yearsWithTeam: "1969-1981",
      achievements: [
        "4× Super Bowl champion",
        "10× Pro Bowl",
        "NFL Defensive Player of the Year (1972, 1974)"
      ]
    },
    {
      name: "Terry Bradshaw",
      position: "QB",
      yearInducted: 1989,
      yearsWithTeam: "1970-1983",
      achievements: [
        "4× Super Bowl champion",
        "2× Super Bowl MVP",
        "NFL MVP (1978)"
      ]
    },
    {
      name: "Franco Harris",
      position: "RB",
      yearInducted: 1990,
      yearsWithTeam: "1972-1983",
      achievements: [
        "4× Super Bowl champion",
        "9× Pro Bowl",
        "NFL Offensive Rookie of the Year (1972)"
      ]
    },
    {
      name: "Jack Lambert",
      position: "LB",
      yearInducted: 1990,
      yearsWithTeam: "1974-1984",
      achievements: [
        "4× Super Bowl champion",
        "9× Pro Bowl",
        "NFL Defensive Player of the Year (1976)"
      ]
    },
    {
      name: "Chuck Noll",
      position: "Head Coach",
      yearInducted: 1993,
      yearsWithTeam: "1969-1991",
      achievements: [
        "4× Super Bowl champion",
        "NFL Coach of the Year (1989)",
        "Most Super Bowl wins by a head coach at retirement"
      ]
    }
  ],
  majorAwards: [
    {
      award: "NFL MVP",
      recipients: [
        {
          player: "Terry Bradshaw",
          year: 1978
        }
      ]
    },
    {
      award: "NFL Defensive Player of the Year",
      recipients: [
        {
          player: "Joe Greene",
          years: ["1972", "1974"]
        },
        {
          player: "Mel Blount",
          year: 1975
        },
        {
          player: "Jack Lambert",
          year: 1976
        },
        {
          player: "Rod Woodson",
          year: 1993
        },
        {
          player: "James Harrison",
          year: 2008
        },
        {
          player: "Troy Polamalu",
          year: 2010
        }
      ]
    }
  ],
  recentAchievements: {
    lastPlayoffAppearance: "2021",
    lastDivisionTitle: "2020",
    lastSuperBowl: {
      appearance: "XLV (2011)",
      victory: "XLIII (2009)"
    },
    currentStreak: {
      type: "Seasons since playoff win",
      count: 6,
      years: "2017-2023"
    }
  },
  specialAchievements: [
    {
      type: "Steel Curtain Defense",
      years: "1970s",
      description: "One of the greatest defensive units in NFL history"
    },
    {
      type: "Immaculate Reception",
      year: 1972,
      description: "Franco Harris' miraculous catch in playoff victory over Raiders"
    },
    {
      type: "Six Super Bowl Victories",
      description: "Tied for most Super Bowl victories in NFL history"
    }
  ],
  franchiseRecords: {
    wins: {
      regular: {
        amount: 14,
        year: 2004,
        description: "Best regular season record (14-2)"
      },
      playoff: {
        amount: 36,
        years: "1947-present",
        description: "All-time playoff victories"
      }
    },
    individual: {
      passing: {
        yards: {
          amount: 64088,
          player: "Ben Roethlisberger",
          years: "2004-2021"
        }
      },
      rushing: {
        yards: {
          amount: 11950,
          player: "Franco Harris",
          years: "1972-1983"
        }
      },
      receiving: {
        yards: {
          amount: 11995,
          player: "Hines Ward",
          years: "1998-2011"
        }
      }
    }
  }
};