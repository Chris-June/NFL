import { TeamInfo } from '../types';

export const steelersData: TeamInfo = {
  id: 'steelers',
  name: 'Pittsburgh Steelers',
  city: 'Pittsburgh',
  conference: 'AFC',
  division: 'North',
  colors: {
    primary: '#FFB612',
    secondary: '#101820',
    accent: '#A5ACAF'
  },
  stats: {
    wins: 7,
    losses: 7,
    ties: 0,
    winPercentage: 0.5,
    pointsFor: 358,
    pointsAgainst: 324,
    offense: {
      passingYards: 3867,
      rushingYards: 2010,
      totalYards: 5877,
      passingTouchdowns: 26,
      rushingTouchdowns: 16,
      totalTouchdowns: 42
    },
    defense: {
      sacks: 47,
      interceptions: 17,
      forcedFumbles: 15,
      safeties: 1,
      pointsAllowed: 324,
      yardsAllowed: 5247
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Joe Greene",
      number: 75,
      position: "Defensive Tackle",
      imageUrl: "/images/players/steelers/greene.jpg",
      stats: {
        "Years Played": "1969-1981",
        "Pro Bowls": "10",
        "All-Pro": "4-time First-team"
      },
      careerStats: {
        years: "1969-1981",
        achievements: [
          "4× Super Bowl Champion (IX, X, XIII, XIV)",
          "NFL Defensive Player of the Year (1972, 1974)",
          "NFL Defensive Rookie of the Year (1969)",
          "NFL 1970s All-Decade Team",
          "NFL 100th Anniversary All-Time Team"
        ],
        stats: {
          "Games Played": "181",
          "Sacks": "78.5",
          "Fumble Recoveries": "16",
          "Interceptions": "1"
        }
      }
    }
  ]
};
