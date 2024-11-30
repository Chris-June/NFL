export const achievements = {
  superBowls: {
    appearances: 3,
    wins: 0,
    losses: 3,
    details: [
      {
        year: 2022,
        result: "loss",
        opponent: "Los Angeles Rams",
        score: "20-23",
        note: "Lost on late touchdown to Cooper Kupp"
      },
      {
        year: 1989,
        result: "loss",
        opponent: "San Francisco 49ers",
        score: "16-20",
        note: "Super Bowl XXIII - Lost in final minute to Joe Montana"
      },
      {
        year: 1982,
        result: "loss",
        opponent: "San Francisco 49ers",
        score: "21-26",
        note: "Super Bowl XVI - First Super Bowl appearance"
      }
    ]
  },
  conferenceChampionships: {
    total: 3,
    years: ["1981", "1988", "2021"],
    mostRecent: "2021"
  },
  divisionTitles: {
    total: 10,
    years: [
      "1970", "1973", "1981", "1988", "1990",
      "2005", "2009", "2013", "2015", "2021"
    ],
    mostRecent: "2021"
  },
  playoffAppearances: {
    total: 15,
    mostRecent: "2022",
    consecutiveSeasons: {
      current: 0,
      record: 5
    }
  },
  retiredNumbers: [
    {
      number: "54",
      player: "Bob Johnson",
      position: "C",
      years: "1968-1979",
      note: "First-ever draft pick in franchise history"
    }
  ],
  hallOfFamers: [
    {
      name: "Anthony Muñoz",
      position: "OT",
      yearInducted: 1998,
      note: "Considered one of the greatest offensive linemen in NFL history"
    },
    {
      name: "Ken Riley",
      position: "CB",
      yearInducted: 2023,
      note: "65 career interceptions, ranked 5th all-time"
    },
    {
      name: "Paul Brown",
      position: "Head Coach/Owner",
      yearInducted: 1967,
      note: "Founder and first head coach of the Bengals"
    }
  ],
  majorAwards: [
    {
      award: "NFL MVP",
      recipients: []
    },
    {
      award: "Offensive Player of the Year",
      recipients: [
        {
          player: "Ken Anderson",
          year: "1981"
        }
      ]
    },
    {
      award: "Offensive Rookie of the Year",
      recipients: [
        {
          player: "Ja'Marr Chase",
          year: "2021"
        },
        {
          player: "Eddie Brown",
          year: "1985"
        },
        {
          player: "Carl Pickens",
          year: "1992"
        }
      ]
    },
    {
      award: "Comeback Player of the Year",
      recipients: [
        {
          player: "Joe Burrow",
          year: "2021"
        }
      ]
    }
  ],
  recentAchievements: {
    lastPlayoffAppearance: "2022",
    lastDivisionTitle: "2021",
    lastPlayoffWin: "2022",
    currentStreak: {
      type: "Regular Season Games",
      count: 0,
      years: "2023"
    }
  },
  specialAchievements: [
    {
      type: "Perfect Home Record",
      year: 1988,
      description: "8-0 regular season home record during Super Bowl run"
    },
    {
      type: "Franchise Passing Records",
      year: 2021,
      description: "Joe Burrow sets franchise records for passing yards (4611) and touchdowns (34)"
    },
    {
      type: "Rookie Receiving Records",
      year: 2021,
      description: "Ja'Marr Chase sets rookie records with 1455 yards and 13 touchdowns"
    }
  ],
  franchiseRecords: {
    wins: {
      regular: {
        amount: 12,
        year: "2015",
        description: "Best regular season record (tied with 1981, 1988, 2021)"
      },
      playoff: {
        amount: 8,
        years: "1968-present",
        description: "Total playoff victories in franchise history"
      }
    },
    offense: {
      passingYards: {
        amount: 4611,
        player: "Joe Burrow",
        year: "2021"
      },
      receivingYards: {
        amount: 1540,
        player: "Chad Johnson",
        year: "2007"
      }
    }
  }
};