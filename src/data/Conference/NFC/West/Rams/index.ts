import { TeamInfo } from "../../../../../types";

export const ramsData: TeamInfo = {
  id: 'rams',
  name: 'Los Angeles Rams',
  city: 'Los Angeles',
  conference: 'NFC',
  division: 'West',
  colors: {
    primary: '#003594',
    secondary: '#FFA300',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 9,
    losses: 7,
    ties: 0,
    winPercentage: 0.563,
    pointsFor: 384,
    pointsAgainst: 358,
    offense: {
      passingYards: 3876,
      rushingYards: 1765,
      totalYards: 5641,
      passingTouchdowns: 25,
      rushingTouchdowns: 16,
      totalTouchdowns: 41
    },
    defense: {
      sacks: 44,
      interceptions: 15,
      forcedFumbles: 13,
      safeties: 0,
      pointsAllowed: 358,
      yardsAllowed: 5432
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Marshall Faulk",
      number: 28,
      position: "Running Back",
      imageUrl: "/images/players/rams/faulk.jpg",
      stats: {
        "Years Played": "1999-2005 (with Rams)",
        "Pro Bowls": "7",
        "All-Pro": "3-time First-team",
        "Rushing Yards": "12279",
        "Touchdowns": "136",
        "Receptions": "767"
      },
      careerStats: {
        years: "1994-2005",
        achievements: [
          "Super Bowl XXXIV Champion",
          "NFL MVP (2000)",
          "NFL Offensive Player of the Year (1999-2001)",
          "NFL 2000s All-Decade Team",
          "NFL 100th Anniversary All-Time Team"
        ],
        stats: {
          "Games Played": "176",
          "Rushing Yards": "12279",
          "Receiving Yards": "6875",
          "Total TDs": "136"
        }
      }
    }
  ]
};
