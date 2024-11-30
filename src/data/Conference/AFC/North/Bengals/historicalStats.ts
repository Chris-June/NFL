export const historicalStats = {
  franchiseHistory: {
    established: 1968,
    originCity: "Cincinnati",
    stadiums: [
      {
        name: "Nippert Stadium",
        years: "1968-1969",
        location: "Cincinnati, Ohio"
      },
      {
        name: "Riverfront Stadium",
        years: "1970-1999",
        location: "Cincinnati, Ohio"
      },
      {
        name: "Paul Brown Stadium/Paycor Stadium",
        years: "2000-present",
        location: "Cincinnati, Ohio",
        capacity: 65515
      }
    ]
  },
  legendaryPlayers: [
    {
      name: "Anthony Muñoz",
      position: "OT",
      years: "1980-1992",
      achievements: [
        "11× Pro Bowl",
        "9× First-team All-Pro",
        "NFL 75th Anniversary All-Time Team",
        "NFL 100th Anniversary All-Time Team"
      ],
      stats: {
        gamesStarted: 185,
        probowls: 11
      }
    },
    {
      name: "Ken Anderson",
      position: "QB",
      years: "1971-1986",
      achievements: [
        "4× Pro Bowl",
        "NFL MVP (1981)",
        "NFL Offensive Player of the Year (1981)",
        "NFL passer rating leader (4×)"
      ],
      stats: {
        passingYards: 32838,
        touchdowns: 197,
        completionPercentage: 59.3
      }
    },
    {
      name: "Chad Johnson",
      position: "WR",
      years: "2001-2010",
      achievements: [
        "6× Pro Bowl",
        "4× All-Pro",
        "NFL receiving yards leader (2006)",
        "Bengals all-time receiving leader"
      ],
      stats: {
        receptions: 751,
        receivingYards: 10783,
        touchdowns: 66
      }
    }
  ],
  legendarySeasons: [
    {
      year: 1981,
      record: "12-4",
      achievement: "First Super Bowl appearance",
      notableStats: [
        "Ken Anderson named NFL MVP",
        "AFC Championship victory over Chargers",
        "Set multiple team offensive records"
      ]
    },
    {
      year: 2021,
      record: "10-7",
      achievement: "AFC Championship and Super Bowl appearance",
      notableStats: [
        "Joe Burrow sets franchise passing records",
        "Ja'Marr Chase breaks rookie receiving records",
        "First playoff win since 1990"
      ]
    },
    {
      year: 1988,
      record: "12-4",
      achievement: "Second Super Bowl appearance",
      notableStats: [
        "Boomer Esiason named NFL MVP",
        "Perfect home record",
        "League's top-ranked offense"
      ]
    }
  ],
  teamRecords: {
    offense: {
      passingYardsGame: {
        amount: 525,
        player: "Joe Burrow",
        date: "December 26, 2021"
      },
      rushingYardsGame: {
        amount: 278,
        player: "Corey Dillon",
        date: "October 22, 2000"
      },
      receivingYardsGame: {
        amount: 266,
        player: "Ja'Marr Chase",
        date: "January 2, 2022"
      }
    },
    defense: {
      singleSeasonSacks: {
        amount: 13,
        player: "Trey Hendrickson",
        year: 2021
      },
      careerInterceptions: {
        amount: 65,
        player: "Ken Riley",
        years: "1969-1983"
      }
    },
    team: {
      mostPointsSeason: {
        amount: 462,
        year: 2013
      },
      fewestPointsAllowedSeason: {
        amount: 232,
        year: 1978
      },
      longestWinStreak: {
        amount: 8,
        year: 2015
      }
    }
  },
  notableGames: [
    {
      date: "December 26, 2021",
      opponent: "Baltimore Ravens",
      result: "W 41-21",
      description: "Joe Burrow sets franchise record with 525 passing yards"
    },
    {
      date: "January 2, 2022",
      opponent: "Kansas City Chiefs",
      result: "W 34-31",
      description: "Clinched AFC North title, Chase sets rookie record"
    },
    {
      date: "January 15, 2022",
      opponent: "Las Vegas Raiders",
      result: "W 26-19",
      description: "First playoff victory in 31 years"
    },
    {
      date: "January 30, 2022",
      opponent: "Kansas City Chiefs",
      result: "W 27-24",
      description: "AFC Championship victory in overtime at Arrowhead"
    }
  ],
  rivalries: [
    {
      team: "Cleveland Browns",
      description: "Battle of Ohio rivalry since 1970",
      allTimeRecord: {
        wins: 52,
        losses: 47,
        ties: 0
      }
    },
    {
      team: "Pittsburgh Steelers",
      description: "Long-standing AFC North/Central rivalry",
      allTimeRecord: {
        wins: 38,
        losses: 67,
        ties: 0
      }
    }
  ],
  traditions: [
    {
      name: "Who Dey Chant",
      description: "Famous 'Who Dey' cheer dating back to 1981"
    },
    {
      name: "Bengals Growl",
      description: "Team song played after touchdowns"
    },
    {
      name: "Ruler of The Jungle",
      description: "Honorary fan who leads Who Dey chant before games"
    }
  ]
};