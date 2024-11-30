import { SuperBowlGame } from '../types';

export const superBowlDetails: SuperBowlGame[] = [
  {
    year: 1971,
    opponent: "Miami Dolphins",
    score: "24-3",
    venue: "Tulane Stadium, New Orleans",
    mvp: {
      name: "Roger Staubach",
      stats: "119 passing yards, 2 TDs"
    },
    gameStats: {
      attendance: "81,023",
      weather: "Clear, 39°F",
      finalScore: "Cowboys 24, Dolphins 3"
    },
    keyPlayers: [
      {
        name: "Duane Thomas",
        position: "RB",
        stats: "95 rushing yards, 1 TD"
      },
      {
        name: "Mike Ditka",
        position: "TE",
        stats: "28 receiving yards, 1 TD"
      },
      {
        name: "Bob Lilly",
        position: "DT",
        stats: "2 sacks, 1 forced fumble"
      }
    ],
    highlights: [
      {
        quarter: "1st",
        description: "Mike Clark 9-yard field goal"
      },
      {
        quarter: "2nd",
        description: "Duane Thomas 3-yard touchdown run"
      },
      {
        quarter: "3rd",
        description: "Mike Ditka 7-yard touchdown reception"
      },
      {
        quarter: "4th",
        description: "Lance Alworth 7-yard touchdown reception"
      }
    ]
  },
  {
    year: 1977,
    opponent: "Denver Broncos",
    score: "27-10",
    venue: "Louisiana Superdome",
    mvp: {
      name: "Harvey Martin & Randy White",
      stats: "Co-MVPs, Combined 3 sacks"
    },
    gameStats: {
      attendance: "75,583",
      weather: "Indoors, 72°F",
      finalScore: "Cowboys 27, Broncos 10"
    },
    keyPlayers: [
      {
        name: "Tony Dorsett",
        position: "RB",
        stats: "66 rushing yards, 1 TD"
      },
      {
        name: "Roger Staubach",
        position: "QB",
        stats: "183 passing yards, 1 TD"
      },
      {
        name: "Butch Johnson",
        position: "WR",
        stats: "45 receiving yards, 1 TD"
      }
    ],
    highlights: [
      {
        quarter: "1st",
        description: "Tony Dorsett 3-yard touchdown run"
      },
      {
        quarter: "2nd",
        description: "Butch Johnson diving 45-yard touchdown catch"
      },
      {
        quarter: "3rd",
        description: "Robert Newhouse 29-yard touchdown pass to Golden Richards"
      },
      {
        quarter: "4th",
        description: "Efren Herrera 35-yard field goal"
      }
    ]
  },
  {
    year: 1992,
    opponent: "Buffalo Bills",
    score: "52-17",
    venue: "Rose Bowl, Pasadena",
    mvp: {
      name: "Troy Aikman",
      stats: "273 passing yards, 4 TDs"
    },
    gameStats: {
      attendance: "98,374",
      weather: "Clear, 61°F",
      finalScore: "Cowboys 52, Bills 17"
    },
    keyPlayers: [
      {
        name: "Michael Irvin",
        position: "WR",
        stats: "114 receiving yards, 2 TDs"
      },
      {
        name: "Emmitt Smith",
        position: "RB",
        stats: "108 rushing yards, 1 TD"
      },
      {
        name: "Ken Norton Jr.",
        position: "LB",
        stats: "1 INT, 1 fumble recovery"
      }
    ],
    highlights: [
      {
        quarter: "1st",
        description: "Jay Novacek 23-yard touchdown reception"
      },
      {
        quarter: "2nd",
        description: "Michael Irvin 19-yard touchdown reception"
      },
      {
        quarter: "3rd",
        description: "Emmitt Smith 10-yard touchdown run"
      },
      {
        quarter: "4th",
        description: "Alvin Harper 45-yard touchdown reception"
      }
    ]
  },
  {
    year: 1993,
    opponent: "Buffalo Bills",
    score: "30-13",
    venue: "Georgia Dome, Atlanta",
    mvp: {
      name: "Emmitt Smith",
      stats: "132 rushing yards, 2 TDs"
    },
    gameStats: {
      attendance: "72,817",
      weather: "Indoors, 72°F",
      finalScore: "Cowboys 30, Bills 13"
    },
    keyPlayers: [
      {
        name: "Troy Aikman",
        position: "QB",
        stats: "207 passing yards, 1 TD"
      },
      {
        name: "James Washington",
        position: "S",
        stats: "1 INT, 1 fumble recovery TD"
      },
      {
        name: "Michael Irvin",
        position: "WR",
        stats: "89 receiving yards"
      }
    ],
    highlights: [
      {
        quarter: "1st",
        description: "James Washington 46-yard fumble return touchdown"
      },
      {
        quarter: "2nd",
        description: "Emmitt Smith 15-yard touchdown run"
      },
      {
        quarter: "3rd",
        description: "Eddie Murray 20-yard field goal"
      },
      {
        quarter: "4th",
        description: "Emmitt Smith 1-yard touchdown run"
      }
    ]
  },
  {
    year: 1995,
    opponent: "Pittsburgh Steelers",
    score: "27-17",
    venue: "Sun Devil Stadium, Tempe",
    mvp: {
      name: "Larry Brown",
      stats: "2 INTs, 77 return yards"
    },
    gameStats: {
      attendance: "76,347",
      weather: "Clear, 68°F",
      finalScore: "Cowboys 27, Steelers 17"
    },
    keyPlayers: [
      {
        name: "Troy Aikman",
        position: "QB",
        stats: "209 passing yards, 1 TD"
      },
      {
        name: "Emmitt Smith",
        position: "RB",
        stats: "49 rushing yards, 2 TDs"
      },
      {
        name: "Jay Novacek",
        position: "TE",
        stats: "33 receiving yards, 1 TD"
      }
    ],
    highlights: [
      {
        quarter: "1st",
        description: "Jay Novacek 3-yard touchdown reception"
      },
      {
        quarter: "2nd",
        description: "Emmitt Smith 1-yard touchdown run"
      },
      {
        quarter: "3rd",
        description: "Larry Brown's first interception"
      },
      {
        quarter: "4th",
        description: "Larry Brown's second interception seals the game"
      }
    ]
  }
];