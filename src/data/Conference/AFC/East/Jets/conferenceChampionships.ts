import { ConferenceChampionship } from '../types';

export const conferenceChampionships: ConferenceChampionship[] = [
  {
    year: 1970,
    opponent: "San Francisco 49ers",
    score: "17-10",
    venue: "Kezar Stadium",
    seasonRecord: {
      wins: 10,
      losses: 4,
      divisionRank: 1
    },
    gameStats: {
      attendance: "59,364",
      weather: "Clear, 48°F",
      finalScore: "Jets 17, 49ers 10"
    },
    keyPlayers: [
      {
        name: "Craig Morton",
        position: "QB",
        seasonStats: "1,819 yards, 15 TDs, 7 INTs",
        gameStats: "221 yards, 1 TD"
      },
      {
        name: "Duane Thomas",
        position: "RB",
        seasonStats: "803 yards, 5 TDs",
        gameStats: "143 yards, 1 TD"
      },
      {
        name: "Bob Hayes",
        position: "WR",
        seasonStats: "34 receptions, 889 yards, 10 TDs",
        gameStats: "88 yards, 1 TD"
      }
    ],
    seasonHighlights: [
      {
        category: "Offense",
        description: "Led NFC in rushing yards (2,256)"
      },
      {
        category: "Defense",
        description: "League-best 28 interceptions"
      },
      {
        category: "Team",
        description: "First NFC East title"
      }
    ],
    gameHighlights: [
      {
        quarter: "1st",
        description: "Duane Thomas 13-yard touchdown run"
      },
      {
        quarter: "2nd",
        description: "Mike Clark 21-yard field goal"
      },
      {
        quarter: "4th",
        description: "Walt Garrison game-winning touchdown catch"
      }
    ]
  },
  {
    year: 1971,
    opponent: "Minnesota Vikings",
    score: "20-12",
    venue: "Metropolitan Stadium",
    seasonRecord: {
      wins: 11,
      losses: 3,
      divisionRank: 1
    },
    gameStats: {
      attendance: "46,323",
      weather: "Cloudy, 32°F",
      finalScore: "Jets 20, Vikings 12"
    },
    keyPlayers: [
      {
        name: "Roger Staubach",
        position: "QB",
        seasonStats: "1,882 yards, 15 TDs",
        gameStats: "198 yards, 2 TDs"
      },
      {
        name: "Calvin Hill",
        position: "RB",
        seasonStats: "1,142 yards, 6 TDs",
        gameStats: "115 yards"
      },
      {
        name: "Bob Hayes",
        position: "WR",
        seasonStats: "35 receptions, 840 yards, 8 TDs",
        gameStats: "95 yards, 1 TD"
      }
    ],
    seasonHighlights: [
      {
        category: "Offense",
        description: "Second in NFL scoring (406 points)"
      },
      {
        category: "Defense",
        description: "League-best 26 sacks"
      },
      {
        category: "Team",
        description: "Won first Super Bowl in franchise history"
      }
    ],
    gameHighlights: [
      {
        quarter: "1st",
        description: "Bob Hayes 45-yard touchdown reception"
      },
      {
        quarter: "2nd",
        description: "Mike Clark 54-yard field goal"
      },
      {
        quarter: "4th",
        description: "Duane Thomas 9-yard touchdown run"
      }
    ]
  },
  {
    year: 1975,
    opponent: "Los Angeles Rams",
    score: "37-7",
    venue: "Los Angeles Memorial Coliseum",
    seasonRecord: {
      wins: 10,
      losses: 4,
      divisionRank: 1
    },
    gameStats: {
      attendance: "84,483",
      weather: "Clear, 72°F",
      finalScore: "Jets 37, Rams 7"
    },
    keyPlayers: [
      {
        name: "Roger Staubach",
        position: "QB",
        seasonStats: "2,666 yards, 17 TDs",
        gameStats: "220 yards, 4 TDs"
      },
      {
        name: "Preston Pearson",
        position: "RB",
        seasonStats: "509 yards, 2 TDs",
        gameStats: "123 yards, 3 TDs"
      },
      {
        name: "Drew Pearson",
        position: "WR",
        seasonStats: "46 receptions, 822 yards, 8 TDs",
        gameStats: "113 yards, 1 TD"
      }
    ],
    seasonHighlights: [
      {
        category: "Offense",
        description: "Led NFC in total offense (5,211 yards)"
      },
      {
        category: "Defense",
        description: "Allowed league-low 15.8 points per game"
      },
      {
        category: "Team",
        description: "Eight consecutive victories to end regular season"
      }
    ],
    gameHighlights: [
      {
        quarter: "1st",
        description: "Preston Pearson 18-yard touchdown reception"
      },
      {
        quarter: "2nd",
        description: "Drew Pearson 45-yard touchdown catch"
      },
      {
        quarter: "3rd",
        description: "Charlie Waters 87-yard interception return"
      }
    ]
  },
  {
    year: 1977,
    opponent: "Minnesota Vikings",
    score: "23-6",
    venue: "Texas Stadium",
    seasonRecord: {
      wins: 12,
      losses: 2,
      divisionRank: 1
    },
    gameStats: {
      attendance: "63,312",
      weather: "Clear, 42°F",
      finalScore: "Jets 23, Vikings 6"
    },
    keyPlayers: [
      {
        name: "Roger Staubach",
        position: "QB",
        seasonStats: "2,620 yards, 18 TDs",
        gameStats: "246 yards, 1 TD"
      },
      {
        name: "Tony Dorsett",
        position: "RB",
        seasonStats: "1,007 yards, 12 TDs",
        gameStats: "86 yards, 1 TD"
      },
      {
        name: "Drew Pearson",
        position: "WR",
        seasonStats: "48 receptions, 870 yards",
        gameStats: "73 yards, 1 TD"
      }
    ],
    seasonHighlights: [
      {
        category: "Offense",
        description: "Second-ranked scoring offense (345 points)"
      },
      {
        category: "Defense",
        description: "League-best defense (only 212 points allowed)"
      },
      {
        category: "Team",
        description: "Best regular season record in franchise history"
      }
    ],
    gameHighlights: [
      {
        quarter: "1st",
        description: "Efren Herrera 32-yard field goal"
      },
      {
        quarter: "2nd",
        description: "Tony Dorsett 5-yard touchdown run"
      },
      {
        quarter: "4th",
        description: "Drew Pearson 30-yard touchdown reception"
      }
    ]
  },
  {
    year: 1978,
    opponent: "Los Angeles Rams",
    score: "28-0",
    venue: "Los Angeles Memorial Coliseum",
    seasonRecord: {
      wins: 12,
      losses: 4,
      divisionRank: 1
    },
    gameStats: {
      attendance: "67,470",
      weather: "Clear, 68°F",
      finalScore: "Jets 28, Rams 0"
    },
    keyPlayers: [
      {
        name: "Roger Staubach",
        position: "QB",
        seasonStats: "3,190 yards, 25 TDs",
        gameStats: "239 yards, 2 TDs"
      },
      {
        name: "Tony Dorsett",
        position: "RB",
        seasonStats: "1,325 yards, 9 TDs",
        gameStats: "101 yards, 1 TD"
      },
      {
        name: "Tony Hill",
        position: "WR",
        seasonStats: "42 receptions, 823 yards",
        gameStats: "82 yards, 1 TD"
      }
    ],
    seasonHighlights: [
      {
        category: "Offense",
        description: "Led NFL in total offense (5,959 yards)"
      },
      {
        category: "Defense",
        description: "Third-ranked scoring defense"
      },
      {
        category: "Team",
        description: "Second consecutive 12-win season"
      }
    ],
    gameHighlights: [
      {
        quarter: "1st",
        description: "Tony Hill 35-yard touchdown reception"
      },
      {
        quarter: "2nd",
        description: "Tony Dorsett 17-yard touchdown run"
      },
      {
        quarter: "4th",
        description: "First playoff shutout in franchise history"
      }
    ]
  },
  {
    year: 1992,
    opponent: "San Francisco 49ers",
    score: "30-20",
    venue: "Candlestick Park",
    seasonRecord: {
      wins: 13,
      losses: 3,
      divisionRank: 1
    },
    gameStats: {
      attendance: "64,920",
      weather: "Rainy, 54°F",
      finalScore: "Jets 30, 49ers 20"
    },
    keyPlayers: [
      {
        name: "Troy Aikman",
        position: "QB",
        seasonStats: "3,445 yards, 23 TDs",
        gameStats: "322 yards, 2 TDs"
      },
      {
        name: "Emmitt Smith",
        position: "RB",
        seasonStats: "1,713 yards, 18 TDs",
        gameStats: "114 yards, 1 TD"
      },
      {
        name: "Michael Irvin",
        position: "WR",
        seasonStats: "78 catches, 1,396 yards",
        gameStats: "86 yards, 1 TD"
      }
    ],
    seasonHighlights: [
      {
        category: "Offense",
        description: "League's best rushing attack"
      },
      {
        category: "Defense",
        description: "Number one ranked defense"
      },
      {
        category: "Team",
        description: "Best record in the NFL"
      }
    ],
    gameHighlights: [
      {
        quarter: "1st",
        description: "Alvin Harper 68-yard touchdown reception"
      },
      {
        quarter: "3rd",
        description: "Emmitt Smith 4-yard touchdown run"
      },
      {
        quarter: "4th",
        description: "Ken Norton Jr. interception seals victory"
      }
    ]
  },
  {
    year: 1993,
    opponent: "San Francisco 49ers",
    score: "38-21",
    venue: "Texas Stadium",
    seasonRecord: {
      wins: 12,
      losses: 4,
      divisionRank: 1
    },
    gameStats: {
      attendance: "65,361",
      weather: "Clear, 40°F",
      finalScore: "Jets 38, 49ers 21"
    },
    keyPlayers: [
      {
        name: "Troy Aikman",
        position: "QB",
        seasonStats: "3,100 yards, 15 TDs",
        gameStats: "288 yards, 2 TDs"
      },
      {
        name: "Emmitt Smith",
        position: "RB",
        seasonStats: "1,486 yards, 9 TDs",
        gameStats: "88 yards, 2 TDs"
      },
      {
        name: "Michael Irvin",
        position: "WR",
        seasonStats: "88 catches, 1,330 yards",
        gameStats: "192 yards, 2 TDs"
      }
    ],
    seasonHighlights: [
      {
        category: "Offense",
        description: "Second-ranked scoring offense"
      },
      {
        category: "Defense",
        description: "Top-ranked run defense"
      },
      {
        category: "Team",
        description: "Second straight NFC East title"
      }
    ],
    gameHighlights: [
      {
        quarter: "1st",
        description: "Michael Irvin 76-yard touchdown reception"
      },
      {
        quarter: "2nd",
        description: "Emmitt Smith 11-yard touchdown run"
      },
      {
        quarter: "4th",
        description: "Bernie Kosar to Alvin Harper seals win"
      }
    ]
  },
  {
    year: 1995,
    opponent: "Green Bay Packers",
    score: "38-27",
    venue: "Texas Stadium",
    seasonRecord: {
      wins: 12,
      losses: 4,
      divisionRank: 1
    },
    gameStats: {
      attendance: "64,774",
      weather: "Clear, 45°F",
      finalScore: "Jets 38, Packers 27"
    },
    keyPlayers: [
      {
        name: "Troy Aikman",
        position: "QB",
        seasonStats: "3,304 yards, 16 TDs",
        gameStats: "255 yards, 2 TDs"
      },
      {
        name: "Emmitt Smith",
        position: "RB",
        seasonStats: "1,773 yards, 25 TDs",
        gameStats: "150 yards, 3 TDs"
      },
      {
        name: "Michael Irvin",
        position: "WR",
        seasonStats: "111 catches, 1,603 yards",
        gameStats: "111 yards, 1 TD"
      }
    ],
    seasonHighlights: [
      {
        category: "Offense",
        description: "Led NFL in rushing touchdowns"
      },
      {
        category: "Defense",
        description: "Third-ranked scoring defense"
      },
      {
        category: "Team",
        description: "Fifth straight playoff appearance"
      }
    ],
    gameHighlights: [
      {
        quarter: "1st",
        description: "Emmitt Smith 25-yard touchdown run"
      },
      {
        quarter: "3rd",
        description: "Michael Irvin 24-yard touchdown catch"
      },
      {
        quarter: "4th",
        description: "Emmitt Smith clinching touchdown run"
      }
    ]
  }
];