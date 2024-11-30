export const achievements = {
  superBowls: {
    appearances: 2,
    wins: 2,
    losses: 0,
    details: [
      {
        year: 2013,
        result: "win",
        opponent: "San Francisco 49ers",
        score: "34-31",
        note: "Super Bowl XLVII - Ray Lewis's final game"
      },
      {
        year: 2001,
        result: "win",
        opponent: "New York Giants",
        score: "34-7",
        note: "Super Bowl XXXV - Dominant defensive performance"
      }
    ]
  },
  conferenceChampionships: {
    total: 2,
    years: ["2000", "2012"],
    mostRecent: "2012"
  },
  divisionTitles: {
    total: 7,
    years: [
      "2003", "2006", "2011", "2012", "2018", "2019", "2023"
    ],
    mostRecent: "2023"
  },
  playoffAppearances: {
    total: 15,
    mostRecent: "2023",
    consecutiveSeasons: {
      current: 1,
      record: 5
    }
  },
  retiredNumbers: [
    {
      number: "19",
      player: "Johnny Unitas",
      position: "QB",
      years: "1956-1972",
      note: "Honored from Baltimore Colts history"
    },
    {
      number: "52",
      player: "Ray Lewis",
      position: "LB",
      years: "1996-2012",
      note: "First Ravens player to have number retired"
    }
  ],
  hallOfFamers: [
    {
      name: "Ray Lewis",
      position: "LB",
      yearInducted: 2018,
      note: "13-time Pro Bowler, 2-time DPOY"
    },
    {
      name: "Ed Reed",
      position: "S",
      yearInducted: 2019,
      note: "9-time Pro Bowler, NFL record for interception return yards"
    },
    {
      name: "Jonathan Ogden",
      position: "OT",
      yearInducted: 2013,
      note: "11-time Pro Bowler, first Ravens draft pick"
    },
    {
      name: "Deion Sanders",
      position: "CB",
      yearInducted: 2011,
      note: "Played final two seasons with Ravens"
    },
    {
      name: "Rod Woodson",
      position: "S/CB",
      yearInducted: 2009,
      note: "Key member of 2000 Super Bowl team"
    }
  ],
  majorAwards: [
    {
      award: "NFL MVP",
      recipients: [
        {
          player: "Lamar Jackson",
          years: ["2019", "2023"]
        }
      ]
    },
    {
      award: "Defensive Player of the Year",
      recipients: [
        {
          player: "Ray Lewis",
          years: ["2000", "2003"]
        },
        {
          player: "Ed Reed",
          year: "2004"
        },
        {
          player: "Terrell Suggs",
          year: "2011"
        }
      ]
    },
    {
      award: "Coach of the Year",
      recipients: [
        {
          name: "Brian Billick",
          year: "2000"
        },
        {
          name: "John Harbaugh",
          year: "2019"
        }
      ]
    }
  ],
  recentAchievements: {
    lastPlayoffAppearance: "2023",
    lastDivisionTitle: "2023",
    lastPlayoffWin: "2023",
    currentStreak: {
      type: "Division Champions",
      count: 1,
      years: "2023"
    }
  },
  specialAchievements: [
    {
      type: "Record-Breaking Defense",
      year: 2000,
      description: "Set NFL record for fewest points allowed in 16-game season (165)"
    },
    {
      type: "Perfect Home Record",
      year: 2011,
      description: "8-0 regular season home record"
    },
    {
      type: "Franchise Quarterback Records",
      year: 2019,
      description: "Lamar Jackson sets single-season QB rushing record (1,206 yards)"
    }
  ],
  franchiseRecords: {
    wins: {
      regular: {
        amount: 14,
        year: 2019,
        description: "Best regular season record"
      },
      playoff: {
        amount: 16,
        years: "1996-present",
        description: "Playoff victories since inception"
      }
    },
    defense: {
      pointsAllowed: {
        amount: 165,
        year: 2000,
        description: "NFL record for 16-game season"
      }
    }
  }
};