import { TeamInfo } from "../../../../../types";

export const seahawksData: TeamInfo = {
  id: 'seahawks',
  name: 'Seattle Seahawks',
  city: 'Seattle',
  conference: 'NFC',
  division: 'West',
  colors: {
    primary: '#002244',
    secondary: '#69BE28',
    accent: '#A5ACAF'
  },
  stats: {
    wins: 8,
    losses: 8,
    ties: 0,
    winPercentage: 0.500,
    pointsFor: 364,
    pointsAgainst: 375,
    offense: {
      passingYards: 3654,
      rushingYards: 1765,
      totalYards: 5419,
      passingTouchdowns: 23,
      rushingTouchdowns: 15,
      totalTouchdowns: 38
    },
    defense: {
      sacks: 45,
      interceptions: 14,
      forcedFumbles: 12,
      safeties: 0,
      pointsAllowed: 375,
      yardsAllowed: 5543
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Steve Largent",
      number: 80,
      position: "Wide Receiver",
      imageUrl: "/images/players/seahawks/largent.jpg",
      stats: {
        "Years Played": "1976-1989",
        "Pro Bowls": "7",
        "All-Pro": "1-time First-team",
        "Receiving Yards": "13089",
        "Touchdowns": "100",
        "Receptions": "819"
      },
      careerStats: {
        years: "1976-1989",
        achievements: [
          "NFL 1980s All-Decade Team",
          "NFL Man of the Year (1988)",
          "First Seahawk inducted into Pro Football Hall of Fame",
          "Seahawks Ring of Honor",
          "Jersey #80 retired by Seahawks"
        ],
        stats: {
          "Games Played": "200",
          "Receptions": "819",
          "Receiving Yards": "13089",
          "Touchdowns": "100"
        }
      }
    }
  ]
};
