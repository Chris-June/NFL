import { TeamInfo } from "../../../../../types";

export const billsData: TeamInfo = {
  id: 'bills',
  name: 'Bills',
  city: 'Buffalo',
  conference: 'AFC',
  division: 'East',
  colors: {
    primary: '#00338D',
    secondary: '#C60C30',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 11,
    losses: 6,
    ties: 0,
    winPercentage: 0.647,
    pointsFor: 455,
    pointsAgainst: 310,
    offense: {
      passingYards: 4233,
      rushingYards: 2156,
      totalYards: 6389,
      passingTouchdowns: 35,
      rushingTouchdowns: 19,
      totalTouchdowns: 54
    },
    defense: {
      sacks: 54,
      interceptions: 17,
      forcedFumbles: 16,
      safeties: 1,
      pointsAllowed: 310,
      yardsAllowed: 5158
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Bruce Smith",
      number: 78,
      position: "Defensive End",
      imageUrl: "/images/players/bills/smith.jpg",
      stats: {
        "Years Played": "1985-1999 (with Bills)",
        "Pro Bowls": "11",
        "All-Pro": "8-time First-team"
      },
      careerStats: {
        years: "1985-2003",
        achievements: [
          "NFL Defensive Player of the Year (1990, 1996)",
          "NFL 1980s All-Decade Team",
          "NFL 1990s All-Decade Team",
          "NFL 100th Anniversary All-Time Team",
          "NFL all-time sacks leader (200)"
        ],
        stats: {
          "Games Played": "279",
          "Sacks": "200",
          "Forced Fumbles": "43",
          "Fumble Recoveries": "15"
        }
      }
    }
  ]
};
