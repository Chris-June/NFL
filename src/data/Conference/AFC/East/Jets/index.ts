import { TeamInfo } from '../types';

export const jetsData: TeamInfo = {
  id: 'jets',
  name: 'New York Jets',
  city: 'New York',
  conference: 'AFC',
  division: 'East',
  colors: {
    primary: '#125740',
    secondary: '#000000',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 6,
    losses: 8,
    ties: 0,
    winPercentage: 0.429,
    pointsFor: 268,
    pointsAgainst: 355,
    offense: {
      passingYards: 3678,
      rushingYards: 1654,
      totalYards: 5332,
      passingTouchdowns: 18,
      rushingTouchdowns: 13,
      totalTouchdowns: 31
    },
    defense: {
      sacks: 47,
      interceptions: 13,
      forcedFumbles: 15,
      safeties: 1,
      pointsAllowed: 355,
      yardsAllowed: 5459
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Joe Namath",
      number: 12,
      position: "Quarterback",
      imageUrl: "/images/players/jets/namath.jpg",
      stats: {
        "Years Played": "1965-1976 (with Jets)",
        "Pro Bowls": "5",
        "All-Pro": "1-time First-team"
      },
      careerStats: {
        years: "1965-1977",
        achievements: [
          "Super Bowl III Champion and MVP",
          "AFL Champion (1968)",
          "AFL MVP (1968, 1969)",
          "NFL 100th Anniversary All-Time Team",
          "First QB to pass for 4,000 yards in a season"
        ],
        stats: {
          "Games Played": "140",
          "Passing Yards": "27663",
          "Passing TDs": "173",
          "Completion Percentage": "50.1"
        }
      }
    }
  ]
};
