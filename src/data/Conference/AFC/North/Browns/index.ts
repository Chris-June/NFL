import { TeamInfo } from '../types';

export const brownsData: TeamInfo = {
  id: 'browns',
  name: 'Cleveland Browns',
  city: 'Cleveland',
  conference: 'AFC',
  division: 'North',
  colors: {
    primary: '#311D00',
    secondary: '#FF3C00',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 11,
    losses: 6,
    ties: 0,
    winPercentage: 0.647,
    pointsFor: 396,
    pointsAgainst: 381,
    offense: {
      passingYards: 3827,
      rushingYards: 2184,
      totalYards: 6011,
      passingTouchdowns: 25,
      rushingTouchdowns: 21,
      totalTouchdowns: 46
    },
    defense: {
      sacks: 47,
      interceptions: 15,
      forcedFumbles: 16,
      safeties: 0,
      pointsAllowed: 381,
      yardsAllowed: 5523
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Jim Brown",
      number: 32,
      position: "Running Back",
      imageUrl: "/images/players/browns/brown.jpg",
      stats: {
        "Years Played": "1957-1965",
        "Pro Bowls": "9",
        "All-Pro": "8-time First-team"
      },
      careerStats: {
        years: "1957-1965",
        achievements: [
          "NFL Champion (1964)",
          "3× NFL MVP (1957, 1958, 1965)",
          "NFL 50th Anniversary All-Time Team",
          "NFL 75th Anniversary All-Time Team",
          "NFL 100th Anniversary All-Time Team"
        ],
        stats: {
          "Games Played": "118",
          "Rushing Yards": "12312",
          "Rushing TDs": "106",
          "Yards Per Carry": "5.2"
        }
      }
    }
  ]
};
