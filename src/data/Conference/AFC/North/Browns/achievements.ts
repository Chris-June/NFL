export const achievements = {
  superBowls: {
    appearances: 0,
    wins: 0,
    losses: 0,
    details: []
  },
  nflChampionships: {
    total: 4,
    years: ["1950", "1954", "1955", "1964"],
    details: [
      {
        year: 1964,
        result: "win",
        opponent: "Baltimore Colts",
        score: "27-0",
        note: "Most recent NFL Championship, pre-Super Bowl era"
      },
      {
        year: 1955,
        result: "win",
        opponent: "Los Angeles Rams",
        score: "38-14",
        note: "Otto Graham's final game"
      },
      {
        year: 1954,
        result: "win",
        opponent: "Detroit Lions",
        score: "56-10",
        note: "Largest margin of victory in NFL Championship game at the time"
      },
      {
        year: 1950,
        result: "win",
        opponent: "Los Angeles Rams",
        score: "30-28",
        note: "First NFL Championship in franchise history"
      }
    ]
  },
  conferenceChampionships: {
    total: 11,
    years: [
      "1946", "1947", "1948", "1949", "1950",
      "1951", "1952", "1953", "1954", "1955",
      "1964"
    ],
    mostRecent: "1964"
  },
  divisionTitles: {
    total: 13,
    years: [
      "1946", "1947", "1948", "1949", "1950",
      "1951", "1952", "1953", "1954", "1955",
      "1964", "1967", "1989"
    ],
    mostRecent: "1989"
  },
  playoffAppearances: {
    total: 19,
    mostRecent: "2020",
    consecutiveSeasons: {
      current: 0,
      record: 5
    }
  },
  retiredNumbers: [
    {
      number: "14",
      player: "Otto Graham",
      position: "QB",
      years: "1946-1955",
      note: "Led Browns to league championship game in all 10 seasons"
    },
    {
      number: "32",
      player: "Jim Brown",
      position: "RB",
      years: "1957-1965",
      note: "NFL's all-time leading rusher at retirement"
    },
    {
      number: "45",
      player: "Ernie Davis",
      position: "RB",
      years: "1962",
      note: "First African-American Heisman Trophy winner, never played due to leukemia"
    },
    {
      number: "46",
      player: "Don Fleming",
      position: "DB",
      years: "1960-1962",
      note: "Died tragically in construction accident"
    },
    {
      number: "76",
      player: "Lou Groza",
      position: "OT/K",
      years: "1946-1967",
      note: "Played 21 seasons, known as 'The Toe'"
    }
  ],
  hallOfFamers: [
    {
      name: "Jim Brown",
      position: "RB",
      yearInducted: 1971,
      note: "Considered one of the greatest players in NFL history"
    },
    {
      name: "Otto Graham",
      position: "QB",
      yearInducted: 1965,
      note: "Led Browns to 10 straight championship games"
    },
    {
      name: "Lou Groza",
      position: "OT/K",
      yearInducted: 1974,
      note: "Revolutionized kicking position"
    },
    {
      name: "Paul Brown",
      position: "Head Coach",
      yearInducted: 1967,
      note: "Team's first head coach and namesake"
    },
    {
      name: "Joe DeLamielleure",
      position: "G",
      yearInducted: 2003,
      note: "Key member of 'Kardiac Kids' era"
    }
  ],
  majorAwards: [
    {
      award: "NFL MVP",
      recipients: [
        {
          player: "Jim Brown",
          years: ["1957", "1958", "1965"]
        },
        {
          player: "Brian Sipe",
          year: "1980"
        }
      ]
    },
    {
      award: "NFL Rookie of the Year",
      recipients: [
        {
          player: "Jim Brown",
          year: "1957"
        }
      ]
    }
  ],
  recentAchievements: {
    lastPlayoffAppearance: "2020",
    lastDivisionTitle: "1989",
    lastPlayoffWin: "2020",
    currentStreak: {
      type: "Seasons since playoff appearance",
      count: 2,
      years: "2021-2023"
    }
  },
  specialAchievements: [
    {
      type: "Perfect Season",
      year: 1948,
      description: "Undefeated in AAFC (14-0)"
    },
    {
      type: "Kardiac Kids Era",
      year: 1980,
      description: "Known for last-minute victories under Brian Sipe"
    },
    {
      type: "Historic Franchise",
      year: 1946,
      description: "One of the original members of the All-America Football Conference"
    }
  ],
  franchiseRecords: {
    wins: {
      regular: {
        amount: 12,
        year: "1948",
        description: "Perfect regular season in AAFC"
      },
      playoff: {
        amount: 12,
        years: "1946-present",
        description: "Total playoff victories in franchise history"
      }
    },
    individual: {
      rushing: {
        amount: 12312,
        player: "Jim Brown",
        years: "1957-1965",
        description: "All-time rushing yards"
      },
      passing: {
        amount: 23713,
        player: "Brian Sipe",
        years: "1974-1983",
        description: "All-time passing yards"
      }
    }
  }
};