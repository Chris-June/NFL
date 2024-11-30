import { TeamInfo } from '../types';

export const chargersData: TeamInfo = {
  id: 'chargers',
  name: 'Los Angeles Chargers',
  city: 'Los Angeles',
  conference: 'AFC',
  division: 'West',
  colors: {
    primary: '#0080C6',
    secondary: '#FFC20E',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 5,
    losses: 11,
    ties: 0,
    winPercentage: 0.313,
    pointsFor: 346,
    pointsAgainst: 398,
    offense: {
      passingYards: 3876,
      rushingYards: 1543,
      totalYards: 5419,
      passingTouchdowns: 24,
      rushingTouchdowns: 13,
      totalTouchdowns: 37
    },
    defense: {
      sacks: 39,
      interceptions: 11,
      forcedFumbles: 13,
      safeties: 0,
      pointsAllowed: 398,
      yardsAllowed: 5654
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Dan Fouts",
      number: 14,
      position: "Quarterback",
      imageUrl: "/images/players/chargers/fouts.jpg",
      stats: {
        "Years Played": "1973-1987",
        "Pro Bowls": "6",
        "All-Pro": "4-time First-team",
        "Passing Yards": "43040",
        "Touchdowns": "254",
        "Completions": "3297"
      }
    }
  ]
};
