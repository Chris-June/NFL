import { TeamInfo } from "../../../../../types";

export const buccaneersData: TeamInfo = {
  id: 'buccaneers',
  name: 'Tampa Bay Buccaneers',
  city: 'Tampa Bay',
  conference: 'NFC',
  division: 'South',
  colors: {
    primary: '#D50A0A',
    secondary: '#34302B',
    accent: '#B1BABF'
  },
  stats: {
    wins: 9,
    losses: 8,
    ties: 0,
    winPercentage: 0.529,
    pointsFor: 375,
    pointsAgainst: 358,
    offense: {
      passingYards: 4016,
      rushingYards: 1810,
      totalYards: 5826,
      passingTouchdowns: 29,
      rushingTouchdowns: 15,
      totalTouchdowns: 44
    },
    defense: {
      sacks: 46,
      interceptions: 17,
      forcedFumbles: 14,
      safeties: 0,
      pointsAllowed: 358,
      yardsAllowed: 5673
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Derrick Brooks",
      number: 55,
      position: "Linebacker",
      imageUrl: "/images/players/buccaneers/brooks.jpg",
      stats: {
        "Years Played": "1995-2008",
        "Pro Bowls": "11",
        "All-Pro": "5-time First-team"
      },
      careerStats: {
        years: "1995-2008",
        achievements: [
          "Super Bowl XXXVII Champion",
          "NFL Defensive Player of the Year (2002)",
          "NFL 2000s All-Decade Team",
          "NFL 100th Anniversary All-Time Team",
          "Buccaneers Ring of Honor"
        ],
        stats: {
          "Games Played": "224",
          "Interceptions": "25",
          "Defensive TDs": "7",
          "Tackles": "1715"
        }
      }
    }
  ]
};
