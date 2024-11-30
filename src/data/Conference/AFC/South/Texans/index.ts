import { TeamInfo } from '../types';

export const texansData: TeamInfo = {
  id: 'texans',
  name: 'Houston Texans',
  city: 'Houston',
  conference: 'AFC',
  division: 'South',
  colors: {
    primary: '#03202F',
    secondary: '#A71930',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 10,
    losses: 7,
    ties: 0,
    winPercentage: 0.588,
    pointsFor: 377,
    pointsAgainst: 339,
    offense: {
      passingYards: 3968,
      rushingYards: 1925,
      totalYards: 5893,
      passingTouchdowns: 27,
      rushingTouchdowns: 16,
      totalTouchdowns: 43
    },
    defense: {
      sacks: 46,
      interceptions: 15,
      forcedFumbles: 14,
      safeties: 0,
      pointsAllowed: 339,
      yardsAllowed: 5472
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Andre Johnson",
      number: 80,
      position: "Wide Receiver",
      imageUrl: "/images/players/texans/johnson.jpg",
      stats: {
        "Years Played": "2003-2014 (with Texans)",
        "Pro Bowls": "7",
        "All-Pro": "2-time First-team",
        "Receptions": "1062",
        "Receiving Yards": "14185",
        "Touchdowns": "70"
      },
      careerStats: {
        years: "2003-2016",
        achievements: [
          "NFL 2000s All-Decade Team",
          "First Texan inducted into Ring of Honor",
          "Led NFL in receptions (2006, 2008)",
          "Led NFL in receiving yards (2008, 2009)",
          "Texans all-time leading receiver"
        ],
        stats: {
          "Games Played": "193",
          "Receptions": "1062",
          "Receiving Yards": "14185",
          "Touchdowns": "70"
        }
      }
    }
  ]
};
