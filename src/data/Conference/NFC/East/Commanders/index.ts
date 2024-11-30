import { TeamInfo } from "../../../../../types";

export const commandersData: TeamInfo = {
  id: 'commanders',
  name: 'Washington Commanders',
  city: 'Washington',
  conference: 'NFC',
  division: 'East',
  colors: {
    primary: '#5A1414',
    secondary: '#FFB612',
    accent: '#ffffff'
  },
  stats: {
    wins: 4,
    losses: 13,
    ties: 0,
    winPercentage: 0.235,
    pointsFor: 329,
    pointsAgainst: 442,
    offense: {
      passingYards: 3783,
      rushingYards: 1907,
      totalYards: 5690,
      passingTouchdowns: 24,
      rushingTouchdowns: 14,
      totalTouchdowns: 38
    },
    defense: {
      sacks: 39,
      interceptions: 14,
      forcedFumbles: 11,
      safeties: 0,
      pointsAllowed: 442,
      yardsAllowed: 6121
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Sammy Baugh",
      number: 33,
      position: "Quarterback/Defensive Back/Punter",
      imageUrl: "/images/players/commanders/baugh.jpg",
      stats: {
        "Years Played": "1937-1952",
        "Pro Bowls": "6",
        "All-Pro": "4-time First-team"
      },
      careerStats: {
        years: "1937-1952",
        achievements: [
          "NFL Champion (1937, 1942)",
          "NFL 75th Anniversary All-Time Team",
          "NFL 100th Anniversary All-Time Team",
          "Washington Ring of Fame"
        ],
        stats: {
          "Games Played": "165",
          "Passing Yards": "21886",
          "Passing TDs": "187",
          "Interceptions (as DB)": "31"
        }
      }
    }
  ]
};
