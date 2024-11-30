import { TeamInfo } from '../types';

export const titansData: TeamInfo = {
  id: 'titans',
  name: 'Tennessee Titans',
  city: 'Nashville',
  conference: 'AFC',
  division: 'South',
  colors: {
    primary: '#0C2340',
    secondary: '#4B92DB',
    accent: '#C8102E'
  },
  stats: {
    wins: 6,
    losses: 10,
    ties: 0,
    winPercentage: 0.375,
    pointsFor: 305,
    pointsAgainst: 381,
    offense: {
      passingYards: 3512,
      rushingYards: 1824,
      totalYards: 5336,
      passingTouchdowns: 22,
      rushingTouchdowns: 14,
      totalTouchdowns: 36
    },
    defense: {
      sacks: 45,
      interceptions: 12,
      forcedFumbles: 14,
      safeties: 0,
      pointsAllowed: 381,
      yardsAllowed: 5774
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Bruce Matthews",
      number: 74,
      position: "Offensive Lineman",
      imageUrl: "/images/players/titans/matthews.jpg",
      stats: {
        "Years Played": "1983-2001",
        "Pro Bowls": "14",
        "All-Pro": "7-time First-team"
      },
      careerStats: {
        years: "1983-2001",
        achievements: [
          "NFL 1990s All-Decade Team",
          "NFL 100th Anniversary All-Time Team",
          "Titans/Oilers Ring of Honor",
          "Jersey #74 retired by Titans",
          "Most games played by an offensive lineman in NFL history"
        ],
        stats: {
          "Games Played": "296",
          "Games Started": "293",
          "Seasons": "19",
          "Pro Bowl Selections": "14"
        }
      }
    }
  ]
};
