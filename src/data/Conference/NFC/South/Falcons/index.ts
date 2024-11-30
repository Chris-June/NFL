import { TeamInfo } from "../../../../../types";

export const falconsData: TeamInfo = {
  id: 'falcons',
  name: 'Atlanta Falcons',
  city: 'Atlanta',
  conference: 'NFC',
  division: 'South',
  colors: {
    primary: '#A71930',
    secondary: '#000000',
    accent: '#A5ACAF'
  },
  stats: {
    wins: 7,
    losses: 10,
    ties: 0,
    winPercentage: 0.412,
    pointsFor: 321,
    pointsAgainst: 373,
    offense: {
      passingYards: 3695,
      rushingYards: 1824,
      totalYards: 5519,
      passingTouchdowns: 23,
      rushingTouchdowns: 16,
      totalTouchdowns: 39
    },
    defense: {
      sacks: 42,
      interceptions: 11,
      forcedFumbles: 14,
      safeties: 0,
      pointsAllowed: 373,
      yardsAllowed: 5867
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Deion Sanders",
      number: 21,
      position: "Cornerback/Return Specialist",
      imageUrl: "/images/players/falcons/sanders.jpg",
      stats: {
        "Years Played": "1989-1993 (with Falcons)",
        "Pro Bowls": "8",
        "All-Pro": "6-time First-team"
      },
      careerStats: {
        years: "1989-2005",
        achievements: [
          "2× Super Bowl Champion (XXIX, XXX)",
          "NFL Defensive Player of the Year (1994)",
          "NFL 1990s All-Decade Team",
          "NFL 100th Anniversary All-Time Team",
          "Falcons Ring of Honor"
        ],
        stats: {
          "Games Played": "188",
          "Interceptions": "53",
          "Defensive TDs": "9",
          "Return TDs": "9"
        }
      }
    }
  ]
};
