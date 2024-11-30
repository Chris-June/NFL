import { TeamInfo } from '../types';

export const coltsData: TeamInfo = {
  id: 'colts',
  name: 'Indianapolis Colts',
  city: 'Indianapolis',
  conference: 'AFC',
  division: 'South',
  colors: {
    primary: '#002C5F',
    secondary: '#A2AAAD',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 9,
    losses: 8,
    ties: 0,
    winPercentage: 0.529,
    pointsFor: 396,
    pointsAgainst: 415,
    offense: {
      passingYards: 3874,
      rushingYards: 1865,
      totalYards: 5739,
      passingTouchdowns: 28,
      rushingTouchdowns: 17,
      totalTouchdowns: 45
    },
    defense: {
      sacks: 44,
      interceptions: 13,
      forcedFumbles: 15,
      safeties: 1,
      pointsAllowed: 415,
      yardsAllowed: 5684
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Peyton Manning",
      number: 18,
      position: "Quarterback",
      imageUrl: "/images/players/colts/manning.jpg",
      stats: {
        "Years Played": "1998-2011 (with Colts)",
        "Pro Bowls": "14",
        "All-Pro": "7-time First-team",
        "Passing Yards": "71940",
        "Touchdowns": "539",
        "Completions": "6125"
      },
      careerStats: {
        years: "1998-2015",
        achievements: [
          "2× Super Bowl Champion (XLI, 50)",
          "5× NFL MVP",
          "NFL Offensive Player of the Year (2004, 2013)",
          "NFL Comeback Player of the Year (2012)",
          "NFL 100th Anniversary All-Time Team"
        ],
        stats: {
          "Games Played": "266",
          "Passing Yards": "71940",
          "Passing TDs": "539",
          "Passer Rating": "96.5"
        }
      }
    }
  ]
};
