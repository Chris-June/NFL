import { TeamInfo } from "../../../../../types";

export const packersData: TeamInfo = {
  id: 'packers',
  name: 'Green Bay Packers',
  city: 'Green Bay',
  conference: 'NFC',
  division: 'North',
  colors: {
    primary: '#203731',
    secondary: '#FFB612',
    accent: '#ffffff'
  },
  stats: {
    wins: 6,
    losses: 8,
    ties: 0,
    winPercentage: 0.429,
    pointsFor: 402,
    pointsAgainst: 382,
    offense: {
      passingYards: 3234,
      rushingYards: 1765,
      totalYards: 4999,
      passingTouchdowns: 32,
      rushingTouchdowns: 15,
      totalTouchdowns: 47
    },
    defense: {
      sacks: 45,
      interceptions: 15,
      forcedFumbles: 13,
      safeties: 0,
      pointsAllowed: 382,
      yardsAllowed: 5887
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Brett Favre",
      number: 4,
      position: "Quarterback",
      imageUrl: "/images/players/packers/favre.jpg",
      stats: {
        "Years Played": "1992-2007",
        "Pro Bowls": "9",
        "All-Pro": "3-time First-team"
      },
      careerStats: {
        years: "1992-2007",
        achievements: [
          "Super Bowl Champion (XXXI)",
          "3× NFL MVP (1995-1997)",
          "NFL 1990s All-Decade Team",
          "NFL 100th Anniversary All-Time Team",
          "Packers Hall of Fame"
        ],
        stats: {
          "Games Played": "255",
          "Passing Yards": "61655",
          "Passing TDs": "442",
          "Completions": "5377"
        }
      }
    }
  ]
};
