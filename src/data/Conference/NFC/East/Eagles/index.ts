import { TeamInfo } from "../../../../../types";

export const eaglesData: TeamInfo = {
  id: 'eagles',
  name: 'Philadelphia Eagles',
  city: 'Philadelphia',
  conference: 'NFC',
  division: 'East',
  colors: {
    primary: '#004C54',
    secondary: '#A5ACAF',
    accent: '#ffffff'
  },
  stats: {
    wins: 10,
    losses: 4,
    ties: 0,
    winPercentage: 0.714,
    pointsFor: 451,
    pointsAgainst: 428,
    offense: {
      passingYards: 3567,
      rushingYards: 1876,
      totalYards: 5443,
      passingTouchdowns: 28,
      rushingTouchdowns: 24,
      totalTouchdowns: 52
    },
    defense: {
      sacks: 43,
      interceptions: 12,
      forcedFumbles: 15,
      safeties: 0,
      pointsAllowed: 428,
      yardsAllowed: 5961
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Chuck Bednarik",
      number: 60,
      position: "Center/Linebacker",
      imageUrl: "/images/players/eagles/bednarik.jpg",
      stats: {
        "Years Played": "1949-1962",
        "Pro Bowls": "8",
        "All-Pro": "8-time First-team"
      },
      careerStats: {
        years: "1949-1962",
        achievements: [
          "NFL Champion (1949, 1960)",
          "NFL 75th Anniversary All-Time Team",
          "NFL 100th Anniversary All-Time Team",
          "Philadelphia Eagles Hall of Fame"
        ],
        stats: {
          "Games Played": "169",
          "Interceptions": "20"
        }
      }
    }
  ]
};
