import { TeamInfo } from '../types';

export const jaguarsData: TeamInfo = {
  id: 'jaguars',
  name: 'Jacksonville Jaguars',
  city: 'Jacksonville',
  conference: 'AFC',
  division: 'South',
  colors: {
    primary: '#006778',
    secondary: '#9F792C',
    accent: '#000000'
  },
  stats: {
    wins: 9,
    losses: 7,
    ties: 0,
    winPercentage: 0.563,
    pointsFor: 377,
    pointsAgainst: 374,
    offense: {
      passingYards: 3942,
      rushingYards: 1876,
      totalYards: 5818,
      passingTouchdowns: 24,
      rushingTouchdowns: 15,
      totalTouchdowns: 39
    },
    defense: {
      sacks: 40,
      interceptions: 14,
      forcedFumbles: 12,
      safeties: 0,
      pointsAllowed: 374,
      yardsAllowed: 5534
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Tony Boselli",
      number: 71,
      position: "Offensive Tackle",
      imageUrl: "/images/players/jaguars/boselli.jpg",
      stats: {
        "Years Played": "1995-2001",
        "Pro Bowls": "5",
        "All-Pro": "3-time First-team",
        "Games Started": "91",
        "Sacks Allowed": "15.5"
      }
    }
  ]
};
