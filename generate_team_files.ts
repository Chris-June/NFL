import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const NFL_TEAMS = {
  AFC: {
    East: ['Bills', 'Dolphins', 'Patriots', 'Jets'],
    North: ['Ravens', 'Bengals', 'Browns', 'Steelers'],
    South: ['Texans', 'Colts', 'Jaguars', 'Titans'],
    West: ['Broncos', 'Chiefs', 'Raiders', 'Chargers']
  },
  NFC: {
    East: ['Eagles', 'Giants', 'Commanders', 'Cowboys'],
    North: ['Packers', 'Vikings', 'Bears', 'Lions'],
    South: ['Falcons', 'Panthers', 'Saints', 'Buccaneers'],
    West: ['49ers', 'Seahawks', 'Rams', 'Cardinals']
  }
} as const;

const FILES_TO_DUPLICATE = [
  'achievements.ts',
  'allTimeStats.ts',
  'conferenceChampionships.ts',
  'currentRoster.ts',
  'historicalStats.ts',
  'mascots.ts',
  'superBowlDetails.ts'
] as const;

const cityMap = {
  '49ers': 'San Francisco',
  Bears: 'Chicago',
  Bengals: 'Cincinnati',
  Bills: 'Buffalo',
  Broncos: 'Denver',
  Browns: 'Cleveland',
  Buccaneers: 'Tampa Bay',
  Cardinals: 'Arizona',
  Chargers: 'Los Angeles',
  Chiefs: 'Kansas City',
  Colts: 'Indianapolis',
  Cowboys: 'Dallas',
  Dolphins: 'Miami',
  Eagles: 'Philadelphia',
  Falcons: 'Atlanta',
  Giants: 'New York',
  Jaguars: 'Jacksonville',
  Jets: 'New York',
  Lions: 'Detroit',
  Packers: 'Green Bay',
  Panthers: 'Carolina',
  Patriots: 'New England',
  Raiders: 'Las Vegas',
  Rams: 'Los Angeles',
  Ravens: 'Baltimore',
  Saints: 'New Orleans',
  Seahawks: 'Seattle',
  Steelers: 'Pittsburgh',
  Texans: 'Houston',
  Titans: 'Tennessee',
  Vikings: 'Minnesota',
  Commanders: 'Washington'
} as const;

function getTeamCity(team: keyof typeof cityMap): string {
  return cityMap[team];
}

async function createTeamFiles() {
  const baseDir = join(process.cwd(), 'src', 'data');

  for (const [conference, divisions] of Object.entries(NFL_TEAMS)) {
    for (const [division, teams] of Object.entries(divisions)) {
      for (const team of teams) {
        const teamDir = join(baseDir, 'Conference', conference, division, team);

        // Create directory if it doesn't exist
        await mkdir(teamDir, { recursive: true });

        // Copy and customize each file
        for (const file of FILES_TO_DUPLICATE) {
          const sourceFile = join(baseDir, file);
          const targetFile = join(teamDir, file);

          try {
            // Read the source file
            const content = await readFile(sourceFile, 'utf-8');

            // Create a placeholder version for the team
            const teamContent = content
              .replace(/Cowboys/g, team)
              .replace(/Dallas/g, getTeamCity(team as keyof typeof cityMap));

            // Write the new file
            await writeFile(targetFile, teamContent);
            console.log(`Created ${file} for ${team}`);
          } catch (error) {
            console.error(`Error processing ${file} for ${team}:`, error);
          }
        }
      }
    }
  }
}

// Run the script
createTeamFiles().catch(console.error);
