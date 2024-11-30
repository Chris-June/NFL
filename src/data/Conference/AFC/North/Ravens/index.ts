import { TeamInfo } from '../types';

export const ravensData: TeamInfo = {
  id: 'ravens',
  name: 'Ravens',
  city: 'Baltimore',
  conference: 'AFC',
  division: 'North',
  colors: {
    primary: '#241773',
    secondary: '#000000',
    accent: '#9E7C0C'
  },
  stats: {
    wins: 13,
    losses: 4,
    ties: 0,
    winPercentage: 0.765,
    pointsFor: 483,
    pointsAgainst: 280,
    offense: {
      passingYards: 3678,
      rushingYards: 2661,
      totalYards: 6339,
      passingTouchdowns: 24,
      rushingTouchdowns: 26,
      totalTouchdowns: 50
    },
    defense: {
      sacks: 54,
      interceptions: 18,
      forcedFumbles: 17,
      safeties: 1,
      pointsAllowed: 280,
      yardsAllowed: 4947
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Ray Lewis",
      number: 52,
      position: "Linebacker",
      imageUrl: "/images/players/ravens/lewis.jpg",
      stats: {
        "Years Played": "1996-2012",
        "Pro Bowls": "13",
        "All-Pro": "7-time First-team"
      },
      careerStats: {
        years: "1996-2012",
        achievements: [
          "2× Super Bowl Champion (XXXV, XLVII)",
          "Super Bowl XXXV MVP",
          "2× NFL Defensive Player of the Year",
          "NFL 2000s All-Decade Team",
          "NFL 100th Anniversary All-Time Team"
        ],
        stats: {
          "Games Played": "228",
          "Tackles": "1562",
          "Interceptions": "31",
          "Sacks": "41.5"
        }
      }
    }
  ]
};
