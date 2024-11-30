import { TeamInfo } from "../../../../../types";

export const bearsData: TeamInfo = {
  id: 'bears',
  name: 'Chicago Bears',
  city: 'Chicago',
  conference: 'NFC',
  division: 'North',
  colors: {
    primary: '#0B162A',
    secondary: '#C83803',
    accent: '#ffffff'
  },
  stats: {
    wins: 7,
    losses: 10,
    ties: 0,
    winPercentage: 0.412,
    pointsFor: 336,
    pointsAgainst: 382,
    offense: {
      passingYards: 3117,
      rushingYards: 2399,
      totalYards: 5516,
      passingTouchdowns: 23,
      rushingTouchdowns: 18,
      totalTouchdowns: 41
    },
    defense: {
      sacks: 38,
      interceptions: 12,
      forcedFumbles: 15,
      safeties: 0,
      pointsAllowed: 382,
      yardsAllowed: 5951
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Walter Payton",
      number: 34,
      position: "Running Back",
      imageUrl: "/images/players/bears/payton.jpg",
      stats: {
        "Years Played": "1975-1987",
        "Pro Bowls": "9",
        "All-Pro": "8-time First-team"
      },
      careerStats: {
        years: "1975-1987",
        achievements: [
          "Super Bowl Champion (XX)",
          "NFL MVP (1977)",
          "NFL Man of the Year Award named after him",
          "NFL 75th Anniversary All-Time Team",
          "NFL 100th Anniversary All-Time Team"
        ],
        stats: {
          "Games Played": "190",
          "Rushing Yards": "16726",
          "Rushing TDs": "110",
          "Receptions": "492"
        }
      }
    }
  ]
};
