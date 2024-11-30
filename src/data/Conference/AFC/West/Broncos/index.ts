import { TeamInfo } from "../../../../../types";

export const broncosData: TeamInfo = {
  id: 'broncos',
  name: 'Denver Broncos',
  city: 'Denver',
  conference: 'AFC',
  division: 'West',
  colors: {
    primary: '#FB4F14',
    secondary: '#002244',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 8,
    losses: 8,
    ties: 0,
    winPercentage: 0.500,
    pointsFor: 342,
    pointsAgainst: 359,
    offense: {
      passingYards: 3765,
      rushingYards: 1654,
      totalYards: 5419,
      passingTouchdowns: 23,
      rushingTouchdowns: 14,
      totalTouchdowns: 37
    },
    defense: {
      sacks: 43,
      interceptions: 14,
      forcedFumbles: 12,
      safeties: 0,
      pointsAllowed: 359,
      yardsAllowed: 5487
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "John Elway",
      number: 7,
      position: "Quarterback",
      imageUrl: "/images/players/broncos/elway.jpg",
      stats: {
        "Years Played": "1983-1998",
        "Pro Bowls": "9",
        "All-Pro": "1-time First-team",
        "Passing Yards": "51475",
        "Touchdowns": "300",
        "Completions": "4123"
      },
      careerStats: {
        years: "1983-1998",
        achievements: [
          "2× Super Bowl Champion (XXXII, XXXIII)",
          "Super Bowl XXXIII MVP",
          "NFL MVP (1987)",
          "NFL 1990s All-Decade Team",
          "NFL 100th Anniversary All-Time Team"
        ],
        stats: {
          "Games Played": "234",
          "Passing Yards": "51475",
          "Passing TDs": "300",
          "Rushing TDs": "33"
        }
      }
    }
  ]
};
