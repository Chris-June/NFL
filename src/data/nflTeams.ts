import { TeamInfo } from '../types.js';

export const nflTeams: Record<string, Record<string, TeamInfo[]>> = {
  AFC: {
    East: [
      {
        id: 'bills',
        name: 'Bills',
        city: 'Buffalo',
        conference: 'AFC',
        division: 'East',
        colors: {
          primary: '#00338D',
          secondary: '#C60C30'
        },
        stats: {
          wins: 11,
          losses: 6,
          ties: 0,
          pointsFor: 451,
          pointsAgainst: 310,
          divisionRank: 1
        },
        hallOfFame: []
      },
      {
        id: 'dolphins',
        name: 'Dolphins',
        city: 'Miami',
        conference: 'AFC',
        division: 'East',
        colors: {
          primary: '#008E97',
          secondary: '#FC4C02'
        },
        stats: {
          wins: 11,
          losses: 6,
          ties: 0,
          pointsFor: 496,
          pointsAgainst: 391,
          divisionRank: 2
        },
        hallOfFame: []
      },
      {
        id: 'patriots',
        name: 'Patriots',
        city: 'New England',
        conference: 'AFC',
        division: 'East',
        colors: {
          primary: '#002244',
          secondary: '#C60C30'
        },
        stats: {
          wins: 4,
          losses: 13,
          ties: 0,
          pointsFor: 236,
          pointsAgainst: 366,
          divisionRank: 4
        },
        hallOfFame: []
      },
      {
        id: 'jets',
        name: 'Jets',
        city: 'New York',
        conference: 'AFC',
        division: 'East',
        colors: {
          primary: '#125740',
          secondary: '#000000'
        },
        stats: {
          wins: 7,
          losses: 10,
          ties: 0,
          pointsFor: 268,
          pointsAgainst: 355,
          divisionRank: 3
        },
        hallOfFame: []
      }
    ],
    North: [
      {
        id: 'ravens',
        name: 'Ravens',
        city: 'Baltimore',
        conference: 'AFC',
        division: 'North',
        colors: {
          primary: '#241773',
          secondary: '#000000'
        },
        stats: {
          wins: 13,
          losses: 4,
          ties: 0,
          pointsFor: 483,
          pointsAgainst: 280,
          divisionRank: 1
        },
        hallOfFame: []
      },
      {
        id: 'bengals',
        name: 'Bengals',
        city: 'Cincinnati',
        conference: 'AFC',
        division: 'North',
        colors: {
          primary: '#FB4F14',
          secondary: '#000000'
        },
        stats: {
          wins: 9,
          losses: 8,
          ties: 0,
          pointsFor: 366,
          pointsAgainst: 384,
          divisionRank: 3
        },
        hallOfFame: []
      },
      {
        id: 'browns',
        name: 'Browns',
        city: 'Cleveland',
        conference: 'AFC',
        division: 'North',
        colors: {
          primary: '#311D00',
          secondary: '#FF3C00'
        },
        stats: {
          wins: 11,
          losses: 6,
          ties: 0,
          pointsFor: 396,
          pointsAgainst: 362,
          divisionRank: 2
        },
        hallOfFame: []
      },
      {
        id: 'steelers',
        name: 'Steelers',
        city: 'Pittsburgh',
        conference: 'AFC',
        division: 'North',
        colors: {
          primary: '#FFB612',
          secondary: '#101820'
        },
        stats: {
          wins: 10,
          losses: 7,
          ties: 0,
          pointsFor: 304,
          pointsAgainst: 324,
          divisionRank: 4
        },
        hallOfFame: []
      }
    ],
    South: [
      {
        id: 'texans',
        name: 'Texans',
        city: 'Houston',
        conference: 'AFC',
        division: 'South',
        colors: {
          primary: '#03202F',
          secondary: '#A71930'
        },
        stats: {
          wins: 10,
          losses: 7,
          ties: 0,
          pointsFor: 377,
          pointsAgainst: 353,
          divisionRank: 2
        },
        hallOfFame: []
      },
      {
        id: 'colts',
        name: 'Colts',
        city: 'Indianapolis',
        conference: 'AFC',
        division: 'South',
        colors: {
          primary: '#002C5F',
          secondary: '#A2AAAD'
        },
        stats: {
          wins: 9,
          losses: 8,
          ties: 0,
          pointsFor: 396,
          pointsAgainst: 415,
          divisionRank: 3
        },
        hallOfFame: []
      },
      {
        id: 'jaguars',
        name: 'Jaguars',
        city: 'Jacksonville',
        conference: 'AFC',
        division: 'South',
        colors: {
          primary: '#006778',
          secondary: '#9F792C'
        },
        stats: {
          wins: 9,
          losses: 8,
          ties: 0,
          pointsFor: 377,
          pointsAgainst: 371,
          divisionRank: 1
        },
        hallOfFame: []
      },
      {
        id: 'titans',
        name: 'Titans',
        city: 'Tennessee',
        conference: 'AFC',
        division: 'South',
        colors: {
          primary: '#0C2340',
          secondary: '#4B92DB'
        },
        stats: {
          wins: 6,
          losses: 11,
          ties: 0,
          pointsFor: 305,
          pointsAgainst: 394,
          divisionRank: 4
        },
        hallOfFame: []
      }
    ],
    West: [
      {
        id: 'broncos',
        name: 'Broncos',
        city: 'Denver',
        conference: 'AFC',
        division: 'West',
        colors: {
          primary: '#FB4F14',
          secondary: '#002244'
        },
        stats: {
          wins: 8,
          losses: 9,
          ties: 0,
          pointsFor: 357,
          pointsAgainst: 413,
          divisionRank: 3
        },
        hallOfFame: []
      },
      {
        id: 'chiefs',
        name: 'Chiefs',
        city: 'Kansas City',
        conference: 'AFC',
        division: 'West',
        colors: {
          primary: '#E31837',
          secondary: '#FFB81C'
        },
        stats: {
          wins: 11,
          losses: 6,
          ties: 0,
          pointsFor: 371,
          pointsAgainst: 294,
          divisionRank: 1
        },
        hallOfFame: []
      },
      {
        id: 'raiders',
        name: 'Raiders',
        city: 'Las Vegas',
        conference: 'AFC',
        division: 'West',
        colors: {
          primary: '#000000',
          secondary: '#A5ACAF'
        },
        stats: {
          wins: 8,
          losses: 9,
          ties: 0,
          pointsFor: 332,
          pointsAgainst: 371,
          divisionRank: 2
        },
        hallOfFame: []
      },
      {
        id: 'chargers',
        name: 'Chargers',
        city: 'Los Angeles',
        conference: 'AFC',
        division: 'West',
        colors: {
          primary: '#0080C6',
          secondary: '#FFC20E'
        },
        stats: {
          wins: 5,
          losses: 12,
          ties: 0,
          pointsFor: 346,
          pointsAgainst: 398,
          divisionRank: 4
        },
        hallOfFame: []
      }
    ]
  },
  NFC: {
    East: [
      {
        id: 'cowboys',
        name: 'Cowboys',
        city: 'Dallas',
        conference: 'NFC',
        division: 'East',
        colors: {
          primary: '#041E42',
          secondary: '#869397'
        },
        stats: {
          wins: 12,
          losses: 5,
          ties: 0,
          pointsFor: 509,
          pointsAgainst: 315,
          divisionRank: 1
        },
        hallOfFame: []
      },
      {
        id: 'giants',
        name: 'Giants',
        city: 'New York',
        conference: 'NFC',
        division: 'East',
        colors: {
          primary: '#0B2265',
          secondary: '#A71930'
        },
        stats: {
          wins: 6,
          losses: 11,
          ties: 0,
          pointsFor: 266,
          pointsAgainst: 407,
          divisionRank: 4
        },
        hallOfFame: []
      },
      {
        id: 'eagles',
        name: 'Eagles',
        city: 'Philadelphia',
        conference: 'NFC',
        division: 'East',
        colors: {
          primary: '#004C54',
          secondary: '#A5ACAF'
        },
        stats: {
          wins: 11,
          losses: 6,
          ties: 0,
          pointsFor: 398,
          pointsAgainst: 428,
          divisionRank: 2
        },
        hallOfFame: []
      },
      {
        id: 'commanders',
        name: 'Commanders',
        city: 'Washington',
        conference: 'NFC',
        division: 'East',
        colors: {
          primary: '#5A1414',
          secondary: '#FFB612'
        },
        stats: {
          wins: 4,
          losses: 13,
          ties: 0,
          pointsFor: 329,
          pointsAgainst: 485,
          divisionRank: 3
        },
        hallOfFame: []
      }
    ],
    North: [
      {
        id: 'bears',
        name: 'Bears',
        city: 'Chicago',
        conference: 'NFC',
        division: 'North',
        colors: {
          primary: '#0B162A',
          secondary: '#C83803'
        },
        stats: {
          wins: 7,
          losses: 10,
          ties: 0,
          pointsFor: 337,
          pointsAgainst: 382,
          divisionRank: 3
        },
        hallOfFame: []
      },
      {
        id: 'lions',
        name: 'Lions',
        city: 'Detroit',
        conference: 'NFC',
        division: 'North',
        colors: {
          primary: '#0076B6',
          secondary: '#B0B7BC'
        },
        stats: {
          wins: 12,
          losses: 5,
          ties: 0,
          pointsFor: 461,
          pointsAgainst: 395,
          divisionRank: 1
        },
        hallOfFame: []
      },
      {
        id: 'packers',
        name: 'Packers',
        city: 'Green Bay',
        conference: 'NFC',
        division: 'North',
        colors: {
          primary: '#203731',
          secondary: '#FFB612'
        },
        stats: {
          wins: 9,
          losses: 8,
          ties: 0,
          pointsFor: 404,
          pointsAgainst: 382,
          divisionRank: 2
        },
        hallOfFame: []
      },
      {
        id: 'vikings',
        name: 'Vikings',
        city: 'Minnesota',
        conference: 'NFC',
        division: 'North',
        colors: {
          primary: '#4F2683',
          secondary: '#FFC62F'
        },
        stats: {
          wins: 7,
          losses: 10,
          ties: 0,
          pointsFor: 344,
          pointsAgainst: 362,
          divisionRank: 4
        },
        hallOfFame: []
      }
    ],
    South: [
      {
        id: 'falcons',
        name: 'Falcons',
        city: 'Atlanta',
        conference: 'NFC',
        division: 'South',
        colors: {
          primary: '#A71930',
          secondary: '#000000'
        },
        stats: {
          wins: 7,
          losses: 10,
          ties: 0,
          pointsFor: 321,
          pointsAgainst: 373,
          divisionRank: 3
        },
        hallOfFame: []
      },
      {
        id: 'panthers',
        name: 'Panthers',
        city: 'Carolina',
        conference: 'NFC',
        division: 'South',
        colors: {
          primary: '#0085CA',
          secondary: '#101820'
        },
        stats: {
          wins: 2,
          losses: 15,
          ties: 0,
          pointsFor: 236,
          pointsAgainst: 416,
          divisionRank: 4
        },
        hallOfFame: []
      },
      {
        id: 'saints',
        name: 'Saints',
        city: 'New Orleans',
        conference: 'NFC',
        division: 'South',
        colors: {
          primary: '#D3BC8D',
          secondary: '#101820'
        },
        stats: {
          wins: 9,
          losses: 8,
          ties: 0,
          pointsFor: 402,
          pointsAgainst: 327,
          divisionRank: 2
        },
        hallOfFame: []
      },
      {
        id: 'buccaneers',
        name: 'Buccaneers',
        city: 'Tampa Bay',
        conference: 'NFC',
        division: 'South',
        colors: {
          primary: '#D50A0A',
          secondary: '#34302B'
        },
        stats: {
          wins: 9,
          losses: 8,
          ties: 0,
          pointsFor: 348,
          pointsAgainst: 325,
          divisionRank: 1
        },
        hallOfFame: []
      }
    ],
    West: [
      {
        id: 'cardinals',
        name: 'Cardinals',
        city: 'Arizona',
        conference: 'NFC',
        division: 'West',
        colors: {
          primary: '#97233F',
          secondary: '#000000'
        },
        stats: {
          wins: 4,
          losses: 13,
          ties: 0,
          pointsFor: 288,
          pointsAgainst: 444,
          divisionRank: 4
        },
        hallOfFame: []
      },
      {
        id: 'rams',
        name: 'Rams',
        city: 'Los Angeles',
        conference: 'NFC',
        division: 'West',
        colors: {
          primary: '#003594',
          secondary: '#FFA300'
        },
        stats: {
          wins: 10,
          losses: 7,
          ties: 0,
          pointsFor: 404,
          pointsAgainst: 377,
          divisionRank: 2
        },
        hallOfFame: []
      },
      {
        id: '49ers',
        name: '49ers',
        city: 'San Francisco',
        conference: 'NFC',
        division: 'West',
        colors: {
          primary: '#AA0000',
          secondary: '#B3995D'
        },
        stats: {
          wins: 12,
          losses: 5,
          ties: 0,
          pointsFor: 491,
          pointsAgainst: 284,
          divisionRank: 1
        },
        hallOfFame: []
      },
      {
        id: 'seahawks',
        name: 'Seahawks',
        city: 'Seattle',
        conference: 'NFC',
        division: 'West',
        colors: {
          primary: '#002244',
          secondary: '#69BE28'
        },
        stats: {
          wins: 9,
          losses: 8,
          ties: 0,
          pointsFor: 364,
          pointsAgainst: 402,
          divisionRank: 3
        },
        hallOfFame: []
      }
    ]
  }
};