export const historicalStats = {
  franchiseHistory: {
    name: "Houston Texans",
    established: 2002,
    firstGame: {
      date: "September 8, 2002",
      opponent: "Dallas Cowboys",
      result: "Win (19-10)",
      location: "Reliant Stadium (now NRG Stadium)"
    },
    stadiums: [
      {
        name: "NRG Stadium",
        formerNames: ["Reliant Stadium (2002-2014)"],
        yearOpened: 2002,
        capacity: 72220,
        location: "Houston, Texas"
      }
    ]
  },

  legendaryPlayers: [
    {
      name: "Andre Johnson",
      position: "WR",
      years: "2003-2014",
      achievements: [
        "7× Pro Bowl",
        "2× First-team All-Pro",
        "2× NFL receiving yards leader",
        "Texans Ring of Honor",
        "First Texans player inducted into team's Ring of Honor"
      ],
      stats: {
        receptions: 1012,
        receivingYards: 13597,
        touchdowns: 64
      }
    },
    {
      name: "J.J. Watt",
      position: "DE",
      years: "2011-2020",
      achievements: [
        "3× NFL Defensive Player of the Year",
        "5× Pro Bowl",
        "5× First-team All-Pro",
        "2× NFL sacks leader",
        "Walter Payton NFL Man of the Year (2017)"
      ],
      stats: {
        sacks: 101,
        forcedFumbles: 25,
        totalTackles: 531
      }
    },
    {
      name: "Arian Foster",
      position: "RB",
      years: "2009-2015",
      achievements: [
        "4× Pro Bowl",
        "First-team All-Pro (2010)",
        "NFL rushing touchdowns leader (2010)",
        "NFL rushing yards leader (2010)"
      ],
      stats: {
        rushingYards: 6472,
        rushingTouchdowns: 54,
        receptions: 249
      }
    }
  ],

  notableSeasons: [
    {
      year: 2002,
      record: "4-12",
      description: "Inaugural season, defeated Dallas Cowboys in first-ever game"
    },
    {
      year: 2011,
      record: "10-6",
      description: "First playoff appearance and division title, defeated Bengals in Wild Card round"
    },
    {
      year: 2012,
      record: "12-4",
      description: "Best regular season record in franchise history"
    },
    {
      year: 2019,
      record: "10-6",
      description: "Won AFC South, defeated Bills in Wild Card round"
    }
  ],

  rivalries: [
    {
      team: "Tennessee Titans",
      description: "Division rival since inception, intensified due to Houston's former team (Oilers) becoming the Titans",
      notableGames: [
        {
          date: "December 29, 2019",
          result: "Texans 35, Titans 14",
          significance: "Clinched AFC South title"
        }
      ]
    },
    {
      team: "Indianapolis Colts",
      description: "Strong division rivalry, particularly during the Peyton Manning era",
      notableGames: [
        {
          date: "December 22, 2019",
          result: "Texans 23, Colts 20",
          significance: "Clinched AFC South title"
        }
      ]
    }
  ],

  traditions: [
    {
      name: "Bull Pen",
      description: "Special section in the stadium where the most passionate fans gather"
    },
    {
      name: "Battle Red Day",
      description: "Special game days where the team wears their red alternate jerseys"
    },
    {
      name: "Toro",
      description: "Team mascot who performs at games and community events"
    }
  ],

  culturalImpact: {
    communityPrograms: [
      {
        name: "Houston Texans YMCA",
        description: "First NFL team-branded YMCA in the league"
      },
      {
        name: "Houston Texans Foundation",
        description: "Charitable foundation supporting youth development, education and health programs"
      }
    ],
    economicImpact: {
      stadiumDevelopment: "NRG Stadium helped revitalize the South Loop area of Houston",
      localBusiness: "Game days generate significant revenue for local businesses"
    }
  }
};