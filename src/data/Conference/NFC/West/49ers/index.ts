import { TeamInfo } from "../../../../../types";

export const ninersData: TeamInfo = {
  id: '49ers',
  name: 'San Francisco 49ers',
  city: 'San Francisco',
  conference: 'NFC',
  division: 'West',
  colors: {
    primary: '#AA0000',
    secondary: '#B3995D',
    accent: '#FFFFFF'
  },
  stats: {
    wins: 12,
    losses: 4,
    ties: 0,
    winPercentage: 0.750,
    pointsFor: 456,
    pointsAgainst: 298,
    offense: {
      passingYards: 4123,
      rushingYards: 1987,
      totalYards: 6110,
      passingTouchdowns: 31,
      rushingTouchdowns: 21,
      totalTouchdowns: 52
    },
    defense: {
      sacks: 48,
      interceptions: 17,
      forcedFumbles: 15,
      safeties: 1,
      pointsAllowed: 298,
      yardsAllowed: 4987
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Joe Montana",
      number: 16,
      position: "Quarterback",
      imageUrl: "/images/players/49ers/montana.jpg",
      stats: {
        "Years Played": "1979-1992 (with 49ers)",
        "Pro Bowls": "8",
        "All-Pro": "3-time First-team",
        "Passing Yards": "40551",
        "Touchdowns": "273",
        "Completions": "3409"
      }
    }
  ]
};
