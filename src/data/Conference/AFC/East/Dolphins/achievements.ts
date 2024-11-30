export const achievements = {
  superBowls: {
    appearances: 5,
    wins: 2,
    losses: 3,
    details: [
      {
        year: 1972,
        result: "win",
        opponent: "Washington Redskins",
        score: "14-7",
        note: "Perfect Season (17-0)"
      },
      {
        year: 1973,
        result: "win",
        opponent: "Minnesota Vikings",
        score: "24-7"
      },
      {
        year: 1982,
        result: "loss",
        opponent: "Washington Redskins",
        score: "27-17"
      },
      {
        year: 1984,
        result: "loss",
        opponent: "San Francisco 49ers",
        score: "38-16"
      },
      {
        year: 1985,
        result: "loss",
        opponent: "San Francisco 49ers",
        score: "38-16"
      }
    ]
  },
  conferenceChampionships: {
    total: 5,
    years: ["1971", "1972", "1973", "1982", "1984"],
    mostRecent: "1984"
  },
  divisionTitles: {
    total: 13,
    years: [
      "1971", "1972", "1973", "1974", "1979", 
      "1981", "1983", "1984", "1985", "1992", 
      "1994", "2000", "2008", "2023"
    ],
    mostRecent: "2023"
  },
  playoffAppearances: {
    total: 24,
    mostRecent: "2023",
    consecutiveSeasons: {
      current: 2,
      record: 5
    }
  },
  retiredNumbers: [
    {
      number: "12",
      player: "Bob Griese",
      position: "QB",
      years: "1967-1980"
    },
    {
      number: "13",
      player: "Dan Marino",
      position: "QB",
      years: "1983-1999"
    },
    {
      number: "39",
      player: "Larry Csonka",
      position: "FB",
      years: "1968-1974, 1979"
    }
  ],
  hallOfFamers: [
    {
      name: "Dan Marino",
      position: "QB",
      yearInducted: 2005
    },
    {
      name: "Bob Griese",
      position: "QB",
      yearInducted: 1990
    },
    {
      name: "Larry Csonka",
      position: "FB",
      yearInducted: 1987
    },
    {
      name: "Paul Warfield",
      position: "WR",
      yearInducted: 1983
    },
    {
      name: "Don Shula",
      position: "Coach",
      yearInducted: 1997
    }
  ],
  majorAwards: [
    {
      award: "NFL MVP",
      recipients: [
        {
          player: "Dan Marino",
          year: 1984
        }
      ]
    },
    {
      award: "Coach of the Year",
      recipients: [
        {
          name: "Don Shula",
          years: ["1967", "1968", "1972", "1975"]
        },
        {
          name: "Mike McDaniel",
          year: 2023
        }
      ]
    }
  ],
  recentAchievements: {
    lastPlayoffAppearance: "2023",
    lastDivisionTitle: "2023",
    lastPlayoffWin: "2023",
    currentStreak: {
      type: "Playoff Appearances",
      count: 2,
      years: "2022-2023"
    }
  }
};