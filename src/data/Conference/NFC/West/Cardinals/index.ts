import { TeamInfo } from "../../../../../types";

export const cardinalsData: TeamInfo = {
  id: 'cardinals',
  name: 'Arizona Cardinals',
  city: 'Phoenix',
  conference: 'NFC',
  division: 'West',
  colors: {
    primary: '#97233F',
    secondary: '#000000',
    accent: '#FFB612'
  },
  stats: {
    wins: 4,
    losses: 12,
    ties: 0,
    winPercentage: 0.250,
    pointsFor: 288,
    pointsAgainst: 442,
    offense: {
      passingYards: 3432,
      rushingYards: 1543,
      totalYards: 4975,
      passingTouchdowns: 18,
      rushingTouchdowns: 12,
      totalTouchdowns: 30
    },
    defense: {
      sacks: 38,
      interceptions: 11,
      forcedFumbles: 10,
      safeties: 0,
      pointsAllowed: 442,
      yardsAllowed: 5987
    }
  },
  hallOfFame: [
    {
      id: "1",
      name: "Larry Fitzgerald",
      number: 11,
      position: "Wide Receiver",
      imageUrl: "/images/players/cardinals/fitzgerald.jpg",
      stats: {
        "Years Played": "2004-2020",
        "Pro Bowls": "11",
        "All-Pro": "1-time First-team",
        "Receiving Yards": "17492",
        "Touchdowns": "121",
        "Receptions": "1432"
      }
    }
  ]
};
