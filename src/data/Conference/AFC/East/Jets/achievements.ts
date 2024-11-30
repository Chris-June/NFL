export const achievements = {
  superBowls: {
    appearances: 1,
    wins: 1,
    losses: 0,
    details: [
      {
        year: 1969,
        result: "win",
        opponent: "Baltimore Colts",
        score: "16-7",
        note: "Super Bowl III - Joe Namath's Guarantee"
      }
    ]
  },
  conferenceChampionships: {
    total: 1,
    years: ["1968"],
    mostRecent: "1968"
  },
  divisionTitles: {
    total: 4,
    years: [
      "1968", "1969", "1998", "2002"
    ],
    mostRecent: "2002"
  },
  playoffAppearances: {
    total: 14,
    mostRecent: "2010",
    consecutiveSeasons: {
      current: 0,
      record: 4
    }
  },
  retiredNumbers: [
    {
      number: "12",
      player: "Joe Namath",
      position: "QB",
      years: "1965-1976"
    },
    {
      number: "13",
      player: "Don Maynard",
      position: "WR",
      years: "1960-1972"
    },
    {
      number: "28",
      player: "Curtis Martin",
      position: "RB",
      years: "1998-2005"
    },
    {
      number: "73",
      player: "Joe Klecko",
      position: "DL",
      years: "1977-1987"
    }
  ],
  hallOfFamers: [
    {
      name: "Joe Namath",
      position: "QB",
      yearInducted: 1985
    },
    {
      name: "Don Maynard",
      position: "WR",
      yearInducted: 1987
    },
    {
      name: "Curtis Martin",
      position: "RB",
      yearInducted: 2012
    },
    {
      name: "Joe Klecko",
      position: "DL",
      yearInducted: 2023
    },
    {
      name: "Winston Hill",
      position: "OT",
      yearInducted: 2020
    }
  ],
  majorAwards: [
    {
      award: "NFL MVP",
      recipients: []
    },
    {
      award: "Offensive Player of the Year",
      recipients: []
    },
    {
      award: "Defensive Player of the Year",
      recipients: [
        {
          player: "Joe Klecko",
          year: 1981
        }
      ]
    },
    {
      award: "Coach of the Year",
      recipients: [
        {
          name: "Weeb Ewbank",
          year: 1968
        },
        {
          name: "Bill Parcells",
          year: 1998
        }
      ]
    }
  ],
  recentAchievements: {
    lastPlayoffAppearance: "2010",
    lastDivisionTitle: "2002",
    lastPlayoffWin: "2010",
    currentStreak: {
      type: "Playoff Drought",
      count: 13,
      years: "2011-2023"
    }
  },
  specialAchievements: {
    type: "Super Bowl Guarantee",
    player: "Joe Namath",
    year: 1969,
    description: "Successfully guaranteed victory over heavily favored Baltimore Colts in Super Bowl III"
  }
};