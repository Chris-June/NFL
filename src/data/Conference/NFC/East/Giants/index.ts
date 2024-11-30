import { TeamInfo } from "../../../../../types";

export const giantsData: TeamInfo = {
  id: 'giants',
  name: 'New York Giants',
  conference: 'NFC',
  division: 'East',
  colors: {
    primary: '#0B2265',
    secondary: '#A71930',
    accent: '#ffffff'
  },
  stats: {
    wins: 5,
    losses: 9,
    ties: 0,
    winPercentage: 0.357,
    pointsFor: 266,
    pointsAgainst: 407,
    offense: {
      passingYards: 2987,
      rushingYards: 1654,
      totalYards: 4641,
      passingTouchdowns: 21,
      rushingTouchdowns: 13,
      totalTouchdowns: 34
    },
    defense: {
      sacks: 34,
      interceptions: 14,
      forcedFumbles: 12,
      safeties: 1,
      pointsAllowed: 407,
      yardsAllowed: 6274
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Lawrence Taylor",
      number: 56,
      position: "Linebacker",
      imageUrl: "/images/players/giants/taylor.jpg",
      stats: {
        "Years Played": "1981-1993",
        "Pro Bowls": "10",
        "All-Pro": "8-time First-team"
      },
      careerStats: {
        years: "1981-1993",
        achievements: [
          "Super Bowl Champion (XXI, XXV)",
          "NFL MVP (1986)",
          "NFL Defensive Player of the Year (1981, 1982, 1986)",
          "NFL 75th Anniversary All-Time Team",
          "NFL 100th Anniversary All-Time Team"
        ],
        stats: {
          "Games Played": "184",
          "Sacks": "132.5",
          "Interceptions": "9"
        }
      }
    }
  ]
};
