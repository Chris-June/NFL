export const achievements = {
  superBowls: {
    appearances: 11,
    wins: 6,
    losses: 5,
    details: [
      {
        year: 2019,
        result: "win",
        opponent: "Los Angeles Rams",
        score: "13-3",
        note: "Super Bowl LIII - Lowest scoring Super Bowl in history"
      },
      {
        year: 2017,
        result: "loss",
        opponent: "Philadelphia Eagles",
        score: "41-33",
        note: "Super Bowl LII - Brady sets Super Bowl passing record (505 yards)"
      },
      {
        year: 2017,
        result: "win",
        opponent: "Atlanta Falcons",
        score: "34-28",
        note: "Super Bowl LI - Historic comeback from 28-3 deficit"
      },
      {
        year: 2015,
        result: "win",
        opponent: "Seattle Seahawks",
        score: "28-24",
        note: "Super Bowl XLIX - Malcolm Butler's game-saving interception"
      },
      {
        year: 2012,
        result: "loss",
        opponent: "New York Giants",
        score: "21-17",
        note: "Super Bowl XLVI - Second loss to Giants"
      },
      {
        year: 2008,
        result: "loss",
        opponent: "New York Giants",
        score: "17-14",
        note: "Super Bowl XLII - End of perfect season bid"
      },
      {
        year: 2005,
        result: "win",
        opponent: "Philadelphia Eagles",
        score: "24-21",
        note: "Super Bowl XXXIX - Third title in four years"
      },
      {
        year: 2004,
        result: "win",
        opponent: "Carolina Panthers",
        score: "32-29",
        note: "Super Bowl XXXVIII - Adam Vinatieri's game-winning kick"
      },
      {
        year: 2002,
        result: "win",
        opponent: "St. Louis Rams",
        score: "20-17",
        note: "Super Bowl XXXVI - Beginning of dynasty"
      },
      {
        year: 1997,
        result: "loss",
        opponent: "Green Bay Packers",
        score: "35-21",
        note: "Super Bowl XXXI - First Super Bowl appearance under Kraft ownership"
      },
      {
        year: 1986,
        result: "loss",
        opponent: "Chicago Bears",
        score: "46-10",
        note: "Super Bowl XX - First Super Bowl appearance in franchise history"
      }
    ]
  },
  conferenceChampionships: {
    total: 11,
    years: [
      "1985", "1996", "2001", "2003", "2004", "2007", 
      "2011", "2014", "2016", "2017", "2018"
    ],
    mostRecent: "2018"
  },
  divisionTitles: {
    total: 22,
    years: [
      "1963", "1978", "1986", "1996", "1997", "2001", 
      "2002", "2003", "2004", "2005", "2006", "2007", 
      "2008", "2009", "2010", "2011", "2012", "2013", 
      "2014", "2015", "2016", "2017", "2018", "2019"
    ],
    mostRecent: "2019"
  },
  playoffAppearances: {
    total: 27,
    mostRecent: "2021",
    consecutiveSeasons: {
      current: 0,
      record: 11
    }
  },
  retiredNumbers: [
    {
      number: "20",
      player: "Gino Cappelletti",
      position: "WR/K",
      years: "1960-1970"
    },
    {
      number: "40",
      player: "Mike Haynes",
      position: "CB",
      years: "1976-1982"
    },
    {
      number: "57",
      player: "Steve Nelson",
      position: "LB",
      years: "1974-1987"
    },
    {
      number: "73",
      player: "John Hannah",
      position: "G",
      years: "1973-1985"
    },
    {
      number: "78",
      player: "Bruce Armstrong",
      position: "T",
      years: "1987-2000"
    },
    {
      number: "79",
      player: "Jim Lee Hunt",
      position: "DT",
      years: "1960-1971"
    },
    {
      number: "89",
      player: "Bob Dee",
      position: "DE",
      years: "1960-1967"
    }
  ],
  hallOfFamers: [
    {
      name: "John Hannah",
      position: "G",
      yearInducted: 1991,
      note: "Considered one of the greatest guards in NFL history"
    },
    {
      name: "Mike Haynes",
      position: "CB",
      yearInducted: 1997,
      note: "Six-time All-Pro selection with Patriots"
    },
    {
      name: "Nick Buoniconti",
      position: "LB",
      yearInducted: 2001,
      note: "Five-time AFL All-Star with Patriots"
    },
    {
      name: "Andre Tippett",
      position: "LB",
      yearInducted: 2008,
      note: "Franchise leader in sacks"
    },
    {
      name: "Curtis Martin",
      position: "RB",
      yearInducted: 2012,
      note: "NFL Rookie of the Year with Patriots"
    },
    {
      name: "Ty Law",
      position: "CB",
      yearInducted: 2019,
      note: "Three-time Super Bowl champion"
    },
    {
      name: "Richard Seymour",
      position: "DL",
      yearInducted: 2022,
      note: "Three-time Super Bowl champion"
    }
  ],
  majorAwards: [
    {
      award: "NFL MVP",
      recipients: [
        {
          player: "Tom Brady",
          years: ["2007", "2010", "2017"]
        }
      ]
    },
    {
      award: "Coach of the Year",
      recipients: [
        {
          name: "Bill Belichick",
          years: ["2003", "2007", "2010"]
        }
      ]
    },
    {
      award: "Defensive Player of the Year",
      recipients: [
        {
          player: "Mike Haynes",
          year: 1984
        },
        {
          player: "Andre Tippett",
          year: 1985
        },
        {
          player: "Stephon Gilmore",
          year: 2019
        }
      ]
    }
  ],
  recentAchievements: {
    lastPlayoffAppearance: "2021",
    lastDivisionTitle: "2019",
    lastPlayoffWin: "2019",
    currentStreak: {
      type: "Playoff Drought",
      count: 2,
      years: "2022-2023"
    }
  },
  specialAchievements: [
    {
      type: "Perfect Regular Season",
      year: 2007,
      description: "First 16-0 regular season in NFL history"
    },
    {
      type: "Dynasty Era",
      years: "2001-2019",
      description: "6 Super Bowl victories, 9 AFC Championships, 17 Division titles"
    },
    {
      type: "Most Consecutive Division Titles",
      count: 11,
      years: "2009-2019",
      description: "NFL record for consecutive division titles"
    }
  ]
};