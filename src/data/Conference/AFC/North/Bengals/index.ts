import { TeamInfo } from '../types';

export const bengalsData: TeamInfo = {
  id: 'bengals',
  name: 'Cincinnati Bengals',
  city: 'Cincinnati',
  conference: 'AFC',
  division: 'North',
  colors: {
    primary: '#FB4F14',
    secondary: '#000000',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 9,
    losses: 8,
    ties: 0,
    winPercentage: 0.529,
    pointsFor: 399,
    pointsAgainst: 384,
    offense: {
      passingYards: 4218,
      rushingYards: 1765,
      totalYards: 5983,
      passingTouchdowns: 29,
      rushingTouchdowns: 15,
      totalTouchdowns: 44
    },
    defense: {
      sacks: 44,
      interceptions: 14,
      forcedFumbles: 13,
      safeties: 0,
      pointsAllowed: 384,
      yardsAllowed: 5645
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Anthony Muñoz",
      number: 78,
      position: "Offensive Tackle",
      imageUrl: "/images/players/bengals/munoz.jpg",
      stats: {
        "Years Played": "1980-1992",
        "Pro Bowls": "11",
        "All-Pro": "9-time First-team"
      },
      careerStats: {
        years: "1980-1992",
        achievements: [
          "NFL 75th Anniversary All-Time Team",
          "NFL 100th Anniversary All-Time Team",
          "NFL 1980s All-Decade Team",
          "NFL Man of the Year (1991)",
          "First Bengals player inducted into Pro Football Hall of Fame"
        ],
        stats: {
          "Games Played": "185",
          "Games Started": "185",
          "Seasons": "13",
          "Touchdowns": "4"
        }
      }
    }
  ]
};
