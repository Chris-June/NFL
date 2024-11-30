export interface SeasonStats {
  year: number;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
  division: string;
  playoffResult: string;
}

export interface PlayerRecord {
  category: string;
  player: string;
  value: string;
  year: string;
}

export interface TeamRecord {
  category: string;
  value: string;
  year: string;
  opponent?: string;
}

export const historicalStats = {
  seasonRecords: [
    {
      year: 2022,
      wins: 12,
      losses: 5,
      ties: 0,
      pointsFor: 467,
      pointsAgainst: 342,
      division: "NFC East",
      playoffResult: "Divisional Round"
    },
    {
      year: 2021,
      wins: 12,
      losses: 5,
      ties: 0,
      pointsFor: 530,
      pointsAgainst: 358,
      division: "NFC East",
      playoffResult: "Wild Card Round"
    },
    {
      year: 2020,
      wins: 6,
      losses: 10,
      ties: 0,
      pointsFor: 395,
      pointsAgainst: 473,
      division: "NFC East",
      playoffResult: "Missed Playoffs"
    }
  ],
  playerRecords: [
    {
      category: "Career Passing Yards",
      player: "Tony Romo",
      value: "34,183",
      year: "2003-2016"
    },
    {
      category: "Career Rushing Yards",
      player: "Emmitt Smith",
      value: "17,162",
      year: "1990-2002"
    },
    {
      category: "Career Receiving Yards",
      player: "Michael Irvin",
      value: "11,904",
      year: "1988-1999"
    },
    {
      category: "Single-Season Passing Yards",
      player: "Tony Romo",
      value: "4,903",
      year: "2012"
    },
    {
      category: "Single-Season Rushing Yards",
      player: "DeMarco Murray",
      value: "1,845",
      year: "2014"
    },
    {
      category: "Single-Season Receiving Yards",
      player: "Michael Irvin",
      value: "1,603",
      year: "1995"
    }
  ],
  teamRecords: [
    {
      category: "Most Points Scored (Game)",
      value: "59",
      year: "1980",
      opponent: "vs San Francisco 49ers"
    },
    {
      category: "Most Points Scored (Season)",
      value: "530",
      year: "2021"
    },
    {
      category: "Longest Win Streak",
      value: "11 games",
      year: "2016"
    },
    {
      category: "Most Wins (Season)",
      value: "13",
      year: "1992, 2007, 2016"
    }
  ],
  franchiseHighlights: {
    totalSuperBowls: 5,
    totalConferenceChampionships: 8,
    totalDivisionChampionships: 23,
    totalPlayoffAppearances: 35,
    hallOfFamers: 22,
    allTimeWinPercentage: ".571"
  },
  eraStats: [
    {
      era: "1960s",
      description: "Expansion era under Tom Landry",
      avgWinsPerSeason: 5.2,
      playoffAppearances: 2,
      championships: 0
    },
    {
      era: "1970s",
      description: "Rise to prominence",
      avgWinsPerSeason: 9.3,
      playoffAppearances: 8,
      championships: 2
    },
    {
      era: "1990s",
      description: "Dynasty years",
      avgWinsPerSeason: 10.1,
      playoffAppearances: 9,
      championships: 3
    },
    {
      era: "2000s",
      description: "Post-dynasty transition",
      avgWinsPerSeason: 8.4,
      playoffAppearances: 6,
      championships: 0
    },
    {
      era: "2010s",
      description: "Modern era",
      avgWinsPerSeason: 8.7,
      playoffAppearances: 5,
      championships: 0
    }
  ]
};
