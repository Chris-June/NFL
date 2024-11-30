import { TeamInfo } from '../types';

export const patriotsData: TeamInfo = {
  id: 'patriots',
  name: 'Patriots',
  city: 'New England',
  conference: 'AFC',
  division: 'East',
  colors: {
    primary: '#002244',
    secondary: '#C60C30',
    accent: '#B0B7BC'
  },
  stats: {
    wins: 4,
    losses: 13,
    ties: 0,
    winPercentage: 0.235,
    pointsFor: 236,
    pointsAgainst: 366,
    offense: {
      passingYards: 3318,
      rushingYards: 1723,
      totalYards: 5041,
      passingTouchdowns: 15,
      rushingTouchdowns: 13,
      totalTouchdowns: 28
    },
    defense: {
      sacks: 39,
      interceptions: 12,
      forcedFumbles: 14,
      safeties: 0,
      pointsAllowed: 366,
      yardsAllowed: 5569
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "John Hannah",
      number: 73,
      position: "Guard",
      imageUrl: "/images/players/patriots/hannah.jpg",
      stats: {
        "Years Played": "1973-1985",
        "Pro Bowls": "9",
        "All-Pro": "7-time First-team"
      },
      careerStats: {
        years: "1973-1985",
        achievements: [
          "NFL 1970s All-Decade Team",
          "NFL 1980s All-Decade Team",
          "NFL 75th Anniversary All-Time Team",
          "NFL 100th Anniversary All-Time Team",
          "First Patriots player inducted into Pro Football Hall of Fame"
        ],
        stats: {
          "Games Played": "183",
          "Games Started": "183",
          "Seasons": "13",
          "Pro Bowl Selections": "9"
        }
      }
    }
  ]
};
