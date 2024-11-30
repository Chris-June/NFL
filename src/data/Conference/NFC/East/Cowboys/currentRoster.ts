import { Player } from "../../../../../types";

export const currentRoster: Player[] = [
  // Quarterbacks
  {
    id: "4",
    name: "Dak Prescott",
    number: 4,
    position: "QB",
    yearsWithTeam: "2016-present",
    isCurrentRoster: true,
    status: "IR",
    statusNote: "Hamstring injury",
    imageUrl: "https://example.com/dak-prescott.jpg",
    college: "Mississippi State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 10,
          started: 10
        },
        stats: {
          "Passing Yards": 2845,
          "Touchdowns": 24,
          "Interceptions": 6,
          "Completion Percentage": 71.3,
          "QB Rating": 108.3
        }
      }
    ]
  },
  {
    id: "10",
    name: "Cooper Rush",
    number: 10,
    position: "QB",
    yearsWithTeam: "2017-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/cooper-rush.jpg",
    college: "Central Michigan",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 3,
          started: 0
        },
        stats: {
          "Passing Yards": 27,
          "Touchdowns": 0,
          "Interceptions": 0,
          "Completion Percentage": 80.0,
          "QB Rating": 89.2
        }
      }
    ]
  },
  {
    id: "18",
    name: "Trey Lance",
    number: 18,
    position: "QB",
    yearsWithTeam: "2023-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/trey-lance.jpg",
    college: "North Dakota State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 0,
          started: 0
        },
        stats: {
          "Passing Yards": 0,
          "Touchdowns": 0,
          "Interceptions": 0
        }
      }
    ]
  },

  // Running Backs
  {
    id: "28",
    name: "Rico Dowdle",
    number: 28,
    position: "RB",
    yearsWithTeam: "2020-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/rico-dowdle.jpg",
    college: "South Carolina",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 1
        },
        stats: {
          "Rushing Attempts": 73,
          "Rushing Yards": 307,
          "Rushing Touchdowns": 1,
          "Receptions": 13,
          "Receiving Yards": 77,
          "Receiving Touchdowns": 2
        }
      }
    ]
  },
  {
    id: "25",
    name: "Deuce Vaughn",
    number: 25,
    position: "RB",
    yearsWithTeam: "2023-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/deuce-vaughn.jpg",
    college: "Kansas State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 0
        },
        stats: {
          "Rushing Attempts": 24,
          "Rushing Yards": 40,
          "Rushing Touchdowns": 0,
          "Receptions": 6,
          "Receiving Yards": 41,
          "Receiving Touchdowns": 0
        }
      }
    ]
  },
  {
    id: "15",
    name: "Ezekiel Elliott",
    number: 15,
    position: "RB",
    yearsWithTeam: "2016-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/ezekiel-elliott.jpg",
    college: "Ohio State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 9
        },
        stats: {
          "Rushing Yards": 726,
          "Rushing Touchdowns": 6,
          "Yards Per Carry": 4.3,
          "Receptions": 28,
          "Receiving Yards": 185
        }
      }
    ]
  },

  // Fullback
  {
    id: "40",
    name: "Hunter Luepke",
    number: 40,
    position: "FB",
    yearsWithTeam: "2023-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/hunter-luepke.jpg",
    college: "North Dakota State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 4
        },
        stats: {
          "Rushing Yards": 45,
          "Rushing Touchdowns": 1,
          "Receptions": 8,
          "Receiving Yards": 62
        }
      }
    ]
  },

  // Wide Receivers
  {
    id: "88",
    name: "CeeDee Lamb",
    number: 88,
    position: "WR",
    yearsWithTeam: "2020-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/ceedee-lamb.jpg",
    college: "Oklahoma",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Receptions": 90,
          "Receiving Yards": 1182,
          "Receiving Touchdowns": 7,
          "Yards Per Reception": 13.1,
          "Targets": 115
        }
      }
    ]
  },
  {
    id: "1",
    name: "Jalen Tolbert",
    number: 1,
    position: "WR",
    yearsWithTeam: "2022-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/jalen-tolbert.jpg",
    college: "South Alabama",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 3
        },
        stats: {
          "Receptions": 18,
          "Receiving Yards": 225,
          "Receiving Touchdowns": 1,
          "Yards Per Reception": 12.5,
          "Targets": 25
        }
      }
    ]
  },
  {
    id: "9",
    name: "KaVontae Turpin",
    number: 9,
    position: "WR",
    yearsWithTeam: "2022-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/kavontae-turpin.jpg",
    college: "TCU",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 1
        },
        stats: {
          "Receptions": 12,
          "Receiving Yards": 146,
          "Receiving Touchdowns": 1,
          "Punt Return Yards": 215,
          "Kick Return Yards": 456
        }
      }
    ]
  },
  {
    id: "15",
    name: "Jalen Brooks",
    number: 15,
    position: "WR",
    yearsWithTeam: "2023-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/jalen-brooks.jpg",
    college: "South Carolina",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 4,
          started: 0
        },
        stats: {
          "Receptions": 1,
          "Receiving Yards": 5,
          "Receiving Touchdowns": 0
        }
      }
    ]
  },

  // Tight Ends
  {
    id: "87",
    name: "Jake Ferguson",
    number: 87,
    position: "TE",
    yearsWithTeam: "2022-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/jake-ferguson.jpg",
    college: "Wisconsin",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Receptions": 45,
          "Receiving Yards": 498,
          "Receiving Touchdowns": 5,
          "Yards Per Reception": 11.1,
          "Targets": 58
        }
      }
    ]
  },

  // Offensive Line
  {
    id: "70",
    name: "Zack Martin",
    number: 70,
    position: "G",
    yearsWithTeam: "2014-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/zack-martin.jpg",
    college: "Notre Dame",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Games Started": 11,
          "Sacks Allowed": 1,
          "Penalties": 2
        },
        highlights: [
          "Pro Bowl Selection",
          "All-Pro Candidate"
        ]
      }
    ]
  },
  {
    id: "71",
    name: "Tyron Smith",
    number: 71,
    position: "T",
    yearsWithTeam: "2011-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/tyron-smith.jpg",
    college: "USC",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 10,
          started: 10
        },
        stats: {
          "Games Started": 10,
          "Sacks Allowed": 2,
          "Penalties": 3
        },
        highlights: [
          "Pro Bowl Candidate",
          "Veteran Leadership"
        ]
      }
    ]
  },
  {
    id: "52",
    name: "Tyler Biadasz",
    number: 52,
    position: "C",
    yearsWithTeam: "2020-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/tyler-biadasz.jpg",
    college: "Wisconsin",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Games Started": 11,
          "Sacks Allowed": 2,
          "Penalties": 2
        }
      }
    ]
  },
  {
    id: "76",
    name: "Terence Steele",
    number: 76,
    position: "T",
    yearsWithTeam: "2020-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/terence-steele.jpg",
    college: "Texas Tech",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Games Started": 11,
          "Sacks Allowed": 5,
          "Penalties": 4
        }
      }
    ]
  },
  {
    id: "73",
    name: "Tyler Smith",
    number: 73,
    position: "G",
    yearsWithTeam: "2022-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/tyler-smith.jpg",
    college: "Tulsa",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 9,
          started: 9
        },
        stats: {
          "Games Started": 9,
          "Sacks Allowed": 3,
          "Penalties": 5
        }
      }
    ]
  },

  // Defensive Line
  {
    id: "11",
    name: "Micah Parsons",
    number: 11,
    position: "DE",
    yearsWithTeam: "2021-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/micah-parsons.jpg",
    college: "Penn State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 45,
          "Sacks": 11.5,
          "Forced Fumbles": 3,
          "QB Hits": 24,
          "Tackles For Loss": 14
        },
        highlights: [
          "DPOY Candidate",
          "Pro Bowl Selection"
        ]
      }
    ]
  },
  {
    id: "90",
    name: "DeMarcus Lawrence",
    number: 90,
    position: "DE",
    yearsWithTeam: "2014-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/demarcus-lawrence.jpg",
    college: "Boise State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 38,
          "Sacks": 4.0,
          "Forced Fumbles": 2,
          "QB Hits": 15,
          "Tackles For Loss": 8
        }
      }
    ]
  },
  {
    id: "92",
    name: "Dorance Armstrong",
    number: 92,
    position: "DE",
    yearsWithTeam: "2018-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/dorance-armstrong.jpg",
    college: "Kansas",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 25,
          "Sacks": 3.0,
          "Forced Fumbles": 1,
          "QB Hits": 10,
          "Tackles For Loss": 5
        }
      }
    ]
  },
  {
    id: "98",
    name: "Neville Gallimore",
    number: 98,
    position: "DT",
    yearsWithTeam: "2020-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/neville-gallimore.jpg",
    college: "Oklahoma",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 19,
          "Sacks": 1.0,
          "Tackles For Loss": 3,
          "QB Hits": 4
        }
      }
    ]
  },
  {
    id: "95",
    name: "Osa Odighizuwa",
    number: 95,
    position: "DT",
    yearsWithTeam: "2021-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/osa-odighizuwa.jpg",
    college: "UCLA",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 25,
          "Sacks": 4.0,
          "Tackles For Loss": 7,
          "QB Hits": 12
        }
      }
    ]
  },
  {
    id: "75",
    name: "Johnathan Hankins",
    number: 75,
    position: "DT",
    yearsWithTeam: "2022-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/johnathan-hankins.jpg",
    college: "Ohio State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 19,
          "Sacks": 1.0,
          "Tackles For Loss": 3,
          "QB Hits": 4
        }
      }
    ]
  },

  // Linebackers
  {
    id: "55",
    name: "Leighton Vander Esch",
    number: 55,
    position: "LB",
    yearsWithTeam: "2018-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/leighton-vander-esch.jpg",
    college: "Boise State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 5,
          started: 5
        },
        stats: {
          "Tackles": 30,
          "Sacks": 0.0,
          "Interceptions": 0,
          "Passes Defended": 1
        },
        injuryStatus: "Injured Reserve - Neck"
      }
    ]
  },
  {
    id: "48",
    name: "Damone Clark",
    number: 48,
    position: "LB",
    yearsWithTeam: "2022-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/damone-clark.jpg",
    college: "LSU",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 84,
          "Sacks": 1.0,
          "Passes Defended": 3,
          "Tackles For Loss": 6,
          "QB Hits": 2
        }
      }
    ]
  },
  {
    id: "41",
    name: "Markquese Bell",
    number: 41,
    position: "S",
    yearsWithTeam: "2022-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/markquese-bell.jpg",
    college: "Florida A&M",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 6
        },
        stats: {
          "Tackles": 52,
          "Sacks": 0.0,
          "Passes Defended": 2,
          "Forced Fumbles": 1
        }
      }
    ]
  },

  // Cornerbacks
  {
    id: "26",
    name: "DaRon Bland",
    number: 26,
    position: "CB",
    yearsWithTeam: "2022-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/daron-bland.jpg",
    college: "Fresno State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 48,
          "Interceptions": 7,
          "Pick Sixes": 4,
          "Passes Defended": 13,
          "Forced Fumbles": 1
        },
        highlights: [
          "NFL Record for Pick Sixes in a Season",
          "Pro Bowl Candidate"
        ]
      }
    ]
  },
  {
    id: "7",
    name: "Trevon Diggs",
    number: 7,
    position: "CB",
    yearsWithTeam: "2020-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/trevon-diggs.jpg",
    college: "Alabama",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 2,
          started: 2
        },
        stats: {
          "Tackles": 6,
          "Interceptions": 1,
          "Passes Defended": 2
        },
        injuryStatus: "Injured Reserve - ACL"
      }
    ]
  },
  {
    id: "27",
    name: "Stephon Gilmore",
    number: 27,
    position: "CB",
    yearsWithTeam: "2023-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/stephon-gilmore.jpg",
    college: "South Carolina",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 41,
          "Interceptions": 2,
          "Passes Defended": 9,
          "Forced Fumbles": 1
        }
      }
    ]
  },
  {
    id: "3",
    name: "Jourdan Lewis",
    number: 3,
    position: "CB",
    yearsWithTeam: "2017-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/jourdan-lewis.jpg",
    college: "Michigan",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 4
        },
        stats: {
          "Tackles": 32,
          "Interceptions": 1,
          "Passes Defended": 4,
          "Sacks": 1.0
        }
      }
    ]
  },

  // Safeties
  {
    id: "6",
    name: "Jayron Kearse",
    number: 6,
    position: "S",
    yearsWithTeam: "2021-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/jayron-kearse.jpg",
    college: "Clemson",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 9
        },
        stats: {
          "Tackles": 52,
          "Sacks": 1.0,
          "Interceptions": 1,
          "Passes Defended": 4,
          "QB Hits": 3
        }
      }
    ]
  },
  {
    id: "2",
    name: "Malik Hooker",
    number: 2,
    position: "S",
    yearsWithTeam: "2021-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/malik-hooker.jpg",
    college: "Ohio State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 58,
          "Interceptions": 2,
          "Passes Defended": 6,
          "Forced Fumbles": 1
        }
      }
    ]
  },
  {
    id: "29",
    name: "Malik Hooker",
    number: 29,
    position: "S",
    yearsWithTeam: "2021-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/malik-hooker.jpg",
    college: "Ohio State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 58,
          "Interceptions": 2,
          "Passes Defended": 6,
          "Forced Fumbles": 1
        }
      }
    ]
  },
  {
    id: "27",
    name: "Donovan Wilson",
    number: 27,
    position: "S",
    yearsWithTeam: "2019-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/donovan-wilson.jpg",
    college: "Texas A&M",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Tackles": 58,
          "Interceptions": 2,
          "Passes Defended": 6,
          "Forced Fumbles": 1
        }
      }
    ]
  },

  // Special Teams
  {
    id: "4",
    name: "Brandon Aubrey",
    number: 4,
    position: "K",
    yearsWithTeam: "2023-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/brandon-aubrey.jpg",
    college: "Notre Dame",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 11
        },
        stats: {
          "Field Goals": "26/27",
          "Field Goal Percentage": 96.3,
          "Extra Points": "35/35",
          "Points": 113,
          "Long": 58
        },
        highlights: [
          "NFL Record for Consecutive Field Goals to Start Career",
          "Pro Bowl Candidate"
        ]
      }
    ]
  },
  {
    id: "19",
    name: "Bryan Anger",
    number: 19,
    position: "P",
    yearsWithTeam: "2021-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/bryan-anger.jpg",
    college: "California",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 0
        },
        stats: {
          "Punts": 32,
          "Punt Yards": 1486,
          "Punt Average": 46.4,
          "Inside 20": 15,
          "Long": 65
        }
      }
    ]
  },
  {
    id: "14",
    name: "Trent Sieg",
    number: 14,
    position: "LS",
    yearsWithTeam: "2023-present",
    isCurrentRoster: true,
    imageUrl: "https://example.com/trent-sieg.jpg",
    college: "Colorado State",
    seasonStats: [
      {
        year: 2024,
        team: "Dallas Cowboys",
        games: {
          played: 11,
          started: 0
        },
        stats: {
          "Snaps": 85,
          "Tackles": 2
        }
      }
    ]
  }
];
