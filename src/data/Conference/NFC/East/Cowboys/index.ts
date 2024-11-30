import { TeamInfo } from "../../../../../types";

export const cowboysData: TeamInfo = {
  id: "cowboys",
  name: "Dallas Cowboys",
  city: "Dallas",
  conference: "NFC",
  division: "East",
  colors: {
    primary: "#003594",
    secondary: "#869397",
    accent: "#ffffff"
  },
  stats: {
    wins: 10,
    losses: 4,
    ties: 0,
    winPercentage: 0.714,
    pointsFor: 509,
    pointsAgainst: 315,
    offense: {
      totalYards: 5523,
      yardsPerGame: 361.8,
      passingYards: 3678,
      rushingYards: 1845,
      turnovers: 18,
      rankings: {
        overall: 5,
        passing: 3,
        rushing: 14,
        scoring: 1
      }
    },
    defense: {
      totalYards: 4893,
      yardsPerGame: 305.8,
      passingYards: 3421,
      rushingYards: 1472,
      sacks: 45,
      interceptions: 16,
      rankings: {
        overall: 7,
        passing: 5,
        rushing: 16,
        scoring: 5
      }
    }
  },
  hallOfFame: [
    {
      id: "12",
      name: "Roger Staubach",
      number: 12,
      position: "Quarterback",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1969-1979",
        achievements: [
          "2x Super Bowl Champion",
          "Super Bowl VI MVP",
          "6x Pro Bowl",
          "NFL Hall of Fame (1985)"
        ],
        stats: {
          "Pass Yards": "22700",
          "Touchdowns": "153",
          "Completions": "1685",
          "QB Rating": "83.4"
        }
      }
    },
    {
      id: "74",
      name: "Bob Lilly",
      number: 74,
      position: "Defensive Tackle",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1961-1974",
        achievements: [
          "Super Bowl VI Champion",
          "11x Pro Bowl",
          "7x First-team All-Pro",
          "NFL Hall of Fame (1980)"
        ],
        stats: {
          "Games": "196",
          "Sacks": "95.5",
          "Fumble Recoveries": "18",
          "Pro Bowls": "11"
        }
      }
    },
    {
      id: "8",
      name: "Troy Aikman",
      number: 8,
      position: "Quarterback",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1989-2000",
        achievements: [
          "3x Super Bowl Champion",
          "Super Bowl XXVII MVP",
          "6x Pro Bowl",
          "NFL Hall of Fame (2006)"
        ],
        stats: {
          "Pass Yards": "32942",
          "Touchdowns": "165",
          "Completions": "2898",
          "QB Rating": "81.6"
        }
      }
    },
    {
      id: "22",
      name: "Emmitt Smith",
      number: 22,
      position: "Running Back",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1990-2004",
        achievements: [
          "NFL's All-Time Leading Rusher",
          "3x Super Bowl Champion",
          "8x Pro Bowl",
          "NFL Hall of Fame (2010)"
        ],
        stats: {
          "Rush Yards": "18355",
          "Touchdowns": "164",
          "Rush Attempts": "4409",
          "Yards Per Carry": "4.2"
        }
      }
    },
    {
      id: "88",
      name: "Michael Irvin",
      number: 88,
      position: "Wide Receiver",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1988-1999",
        achievements: [
          "3x Super Bowl Champion",
          "5x Pro Bowl",
          "NFL Hall of Fame (2007)"
        ],
        stats: {
          "Receptions": "750",
          "Receiving Yards": "11904",
          "Touchdowns": "65",
          "Yards Per Catch": "15.9"
        }
      }
    },
    {
      id: "54",
      name: "Randy White",
      number: 54,
      position: "Defensive Tackle",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1975-1988",
        achievements: [
          "Super Bowl XII Co-MVP",
          "9x Pro Bowl",
          "9x All-Pro",
          "NFL Hall of Fame (1994)"
        ],
        stats: {
          "Games": "209",
          "Sacks": "111",
          "Fumble Recoveries": "29",
          "Pro Bowls": "9"
        }
      }
    },
    {
      id: "33",
      name: "Tony Dorsett",
      number: 33,
      position: "Running Back",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1977-1988",
        achievements: [
          "Super Bowl XII Champion",
          "4x Pro Bowl",
          "NFL Rookie of the Year (1977)",
          "NFL Hall of Fame (1994)"
        ],
        stats: {
          "Rush Yards": "12739",
          "Touchdowns": "91",
          "Receptions": "398",
          "All-Purpose Yards": "16326"
        }
      }
    },
    {
      id: "43",
      name: "Cliff Harris",
      number: 43,
      position: "Safety",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1970-1979",
        achievements: [
          "2x Super Bowl Champion",
          "6x Pro Bowl",
          "4x First-team All-Pro",
          "NFL Hall of Fame (2020)"
        ],
        stats: {
          "Interceptions": "29",
          "Games": "141",
          "Fumble Recoveries": "16",
          "Pro Bowls": "6"
        }
      }
    },
    {
      id: "70",
      name: "Rayfield Wright",
      number: 70,
      position: "Offensive Tackle",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1967-1979",
        achievements: [
          "2x Super Bowl Champion",
          "6x Pro Bowl",
          "3x First-team All-Pro",
          "NFL Hall of Fame (2006)"
        ],
        stats: {
          "Games": "166",
          "Starts": "144",
          "Pro Bowls": "6",
          "All-Pro Teams": "6"
        }
      }
    },
    {
      id: "55",
      name: "Lee Roy Jordan",
      number: 55,
      position: "Linebacker",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1963-1976",
        achievements: [
          "Super Bowl VI Champion",
          "5x Pro Bowl",
          "First-team All-Pro",
          "Cowboys Ring of Honor"
        ],
        stats: {
          "Games": "186",
          "Interceptions": "32",
          "Fumble Recoveries": "18",
          "Pro Bowls": "5"
        }
      }
    },
    {
      id: "94",
      name: "Charles Haley",
      number: 94,
      position: "Defensive End",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1986-1999",
        achievements: [
          "5x Super Bowl Champion",
          "5x Pro Bowl",
          "2x First-team All-Pro",
          "NFL Hall of Fame (2015)"
        ],
        stats: {
          "Sacks": "100.5",
          "Games": "169",
          "Fumble Recoveries": "8",
          "Pro Bowls": "5"
        }
      }
    },
    {
      id: "84",
      name: "Jay Novacek",
      number: 84,
      position: "Tight End",
      imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: {},
      careerStats: {
        years: "1985-1996",
        achievements: [
          "3x Super Bowl Champion",
          "5x Pro Bowl",
          "First-team All-Pro",
          "Cowboys Ring of Honor"
        ],
        stats: {
          "Receptions": "422",
          "Receiving Yards": "4630",
          "Touchdowns": "30",
          "Pro Bowls": "5"
        }
      }
    }
  ]
};