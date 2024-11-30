import { TeamInfo } from "../../../../../types";

export const panthersData: TeamInfo = {
  id: 'panthers',
  name: 'Carolina Panthers',
  city: 'Carolina',
  conference: 'NFC',
  division: 'South',
  colors: {
    primary: '#0085CA',
    secondary: '#101820',
    accent: '#BFC0BF'
  },
  stats: {
    wins: 2,
    losses: 15,
    ties: 0,
    winPercentage: 0.118,
    pointsFor: 236,
    pointsAgainst: 416,
    offense: {
      passingYards: 3287,
      rushingYards: 1773,
      totalYards: 5060,
      passingTouchdowns: 19,
      rushingTouchdowns: 11,
      totalTouchdowns: 30
    },
    defense: {
      sacks: 34,
      interceptions: 9,
      forcedFumbles: 13,
      safeties: 0,
      pointsAllowed: 416,
      yardsAllowed: 6134
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Julius Peppers",
      number: 90,
      position: "Defensive End",
      imageUrl: "/images/players/panthers/peppers.jpg",
      stats: {
        "Years Played": "2002-2009, 2017-2018 (with Panthers)",
        "Pro Bowls": "9",
        "All-Pro": "3-time First-team"
      },
      careerStats: {
        years: "2002-2018",
        achievements: [
          "NFL Defensive Rookie of the Year (2002)",
          "NFL 2000s All-Decade Team",
          "Panthers Hall of Honor",
          "100 Sacks Club",
          "Fourth all-time in career sacks"
        ],
        stats: {
          "Games Played": "266",
          "Sacks": "159.5",
          "Forced Fumbles": "52",
          "Interceptions": "11"
        }
      }
    }
  ]
};
