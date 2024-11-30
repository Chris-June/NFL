import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { nflTeams } from '../src/data/nflTeams';
import { TeamInfo } from '../src/types';

const teamTemplate = (team: TeamInfo) => `import { TeamInfo } from '../types';

export const ${team.id}Data: TeamInfo = {
  id: '${team.id}',
  name: '${team.name}',
  city: '${team.city}',
  conference: '${team.conference}',
  division: '${team.division}',
  colors: {
    primary: '${team.colors.primary}',
    secondary: '${team.colors.secondary}',
    accent: '#ffffff'
  },
  stats: {
    wins: ${team.stats.wins},
    losses: ${team.stats.losses},
    ties: ${team.stats.ties || 0},
    winPercentage: ${(team.stats.wins / (team.stats.wins + team.stats.losses)).toFixed(3)},
    pointsFor: ${team.stats.pointsFor},
    pointsAgainst: ${team.stats.pointsAgainst},
    offense: {
      passingYards: 0,
      rushingYards: 0,
      totalYards: 0,
      passingTouchdowns: 0,
      rushingTouchdowns: 0,
      totalTouchdowns: 0
    },
    defense: {
      sacks: 0,
      interceptions: 0,
      forcedFumbles: 0,
      safeties: 0,
      pointsAllowed: 0,
      yardsAllowed: 0
    }
  },
  hallOfFame: []
};
`;

// Generate team files
Object.values(nflTeams).forEach(conference => {
  Object.values(conference).forEach(division => {
    division.forEach(team => {
      if (team.id !== 'cowboys') { // Skip Cowboys as we already have it
        const filePath = join(__dirname, '..', 'src', 'data', `${team.id}.ts`);
        writeFileSync(filePath, teamTemplate(team), 'utf-8');
        console.log(`Generated ${team.id}.ts`);
      }
    });
  });
});
