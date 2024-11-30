import { TeamInfo } from '../types';

export const dolphinsData: TeamInfo = {
  id: 'dolphins',
  name: 'Miami Dolphins',
  city: 'Miami',
  conference: 'AFC',
  division: 'East',
  colors: {
    primary: '#008E97',
    secondary: '#FC4C02',
    accent: '#005778'
  },
  stats: {
    wins: 11,
    losses: 6,
    ties: 0,
    winPercentage: 0.647,
    pointsFor: 496,
    pointsAgainst: 414,
    offense: {
      passingYards: 4359,
      rushingYards: 1872,
      totalYards: 6231,
      passingTouchdowns: 31,
      rushingTouchdowns: 18,
      totalTouchdowns: 49
    },
    defense: {
      sacks: 42,
      interceptions: 14,
      forcedFumbles: 15,
      safeties: 0,
      pointsAllowed: 414,
      yardsAllowed: 5823
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Dan Marino",
      number: 13,
      position: "Quarterback",
      imageUrl: "/images/players/dolphins/marino.jpg",
      stats: {
        "Years Played": "1983-1999",
        "Pro Bowls": "9",
        "All-Pro": "3-time First-team"
      },
      careerStats: {
        years: "1983-1999",
        achievements: [
          "NFL MVP (1984)",
          "NFL Offensive Player of the Year (1984)",
          "NFL 1980s All-Decade Team",
          "NFL 100th Anniversary All-Time Team",
          "First QB to pass for 5,000 yards in a season"
        ],
        stats: {
          "Games Played": "242",
          "Passing Yards": "61361",
          "Passing TDs": "420",
          "Passer Rating": "86.4"
        }
      }
    }
  ]
};
