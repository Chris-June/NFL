export const achievements = {
  superBowls: {
    appearances: 4,
    wins: 0,
    losses: 4,
    consecutiveAppearances: {
      count: 4,
      years: "1990-1993"
    }
  },
  conferenceChampionships: {
    total: 4,
    years: ["1990", "1991", "1992", "1993"],
    mostRecent: "1993"
  },
  divisionTitles: {
    total: 12,
    years: [
      "1980", "1988", "1989", "1990", "1991", 
      "1993", "1995", "2020", "2021", "2022"
    ],
    mostRecent: "2022"
  },
  playoffAppearances: {
    total: 23,
    mostRecent: "2023",
    consecutiveSeasons: {
      current: 5,
      record: 6
    }
  },
  retiredNumbers: [
    {
      number: "12",
      player: "Jim Kelly",
      position: "QB",
      years: "1986-1996"
    },
    {
      number: "34",
      player: "Thurman Thomas",
      position: "RB",
      years: "1988-1999"
    },
    {
      number: "78",
      player: "Bruce Smith",
      position: "DE",
      years: "1985-1999"
    }
  ],
  hallOfFamers: [
    {
      name: "Jim Kelly",
      position: "QB",
      yearInducted: 2002
    },
    {
      name: "Thurman Thomas",
      position: "RB",
      yearInducted: 2007
    },
    {
      name: "Bruce Smith",
      position: "DE",
      yearInducted: 2009
    },
    {
      name: "Andre Reed",
      position: "WR",
      yearInducted: 2014
    },
    {
      name: "Marv Levy",
      position: "Coach",
      yearInducted: 2001
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
          player: "Thurman Thomas",
          year: 1991
        }
      ]
    },
    {
      award: "Defensive Player of the Year",
      recipients: [
        {
          player: "Bruce Smith",
          years: ["1990", "1996"]
        }
      ]
    },
    {
      award: "Coach of the Year",
      recipients: [
        {
          name: "Marv Levy",
          year: 1988
        },
        {
          name: "Sean McDermott",
          year: 2020
        }
      ]
    }
  ],
  recentAchievements: {
    lastPlayoffAppearance: "2023",
    lastDivisionTitle: "2022",
    lastPlayoffWin: "2022",
    currentStreak: {
      type: "Playoff Appearances",
      count: 5,
      years: "2019-2023"
    }
  }
};